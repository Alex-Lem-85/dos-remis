#!/usr/bin/env node

/**
 * Script pour générer dynamiquement les sitemaps pour dos-remis.com
 * Utilise uniquement les modules natifs de Node.js (pas de dépendance externe)
 */

const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = 'https://dos-remis.com';
const OUTPUT_DIR = path.join(__dirname, '..', 'public');
const APP_DIR = path.join(__dirname, '..', 'app');

// Priorités par défaut pour les pages (en strings pour éviter les problèmes de conversion)
const DEFAULT_PRIORITIES = {
  '': '1.0',          // Page d'accueil
  'sos-lumbago': '0.9', // Très important
  'faq': '0.8',       // Important
  'suivi': '0.8',     // Utile
  'equipe': '0.6',    // Secondaire
  'a-propos': '0.5',  // Moins important
  'contact': '0.5',
  'approche': '0.5',
  'services': '0.5',
  'mentions-legales': '0.4',
  'politique-confidentialite': '0.4',
  'accessibilite': '0.4',
};

// Fréquence de mise à jour par défaut
const DEFAULT_CHANGE_FREQ = 'weekly';

/**
 * Récupère toutes les pages dans le dossier /app
 * Exclut les fichiers comme layout.tsx, globals.css, etc.
 */
function getPagesFromAppDir() {
  const pages = [];
  
  function traverseDir(dir, currentPath = '') {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // C'est un dossier de page (ex: app/contact/)
        const pagePath = path.join(currentPath, file);
        // Vérifier si le dossier contient une page (page.tsx ou page.js)
        const pageFile = path.join(fullPath, 'page.tsx');
        const pageJsFile = path.join(fullPath, 'page.js');
        
        if (fs.existsSync(pageFile) || fs.existsSync(pageJsFile)) {
          pages.push(pagePath === '' ? '/' : `/${pagePath}`);
        }
        
        // Continuer la récursivité
        traverseDir(fullPath, pagePath);
      } else if (file === 'page.tsx' || file === 'page.js') {
        // Page à la racine (app/page.tsx)
        if (currentPath === '') {
          pages.push('/');
        }
      }
    }
  }
  
  traverseDir(APP_DIR);
  return pages;
}

/**
 * Génère le contenu XML pour un sitemap
 */
function generateSitemapXml(urls) {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  urls.forEach(url => {
    const cleanUrl = url.replace(/\/$/, ''); // Supprimer les slashes finaux
    const pathKey = cleanUrl.replace(/^\//, ''); // Clé pour DEFAULT_PRIORITIES (ex: "" pour "/", "contact" pour "/contact")
    const priority = DEFAULT_PRIORITIES[pathKey] !== undefined ? DEFAULT_PRIORITIES[pathKey] : 0.5;
    const changeFreq = DEFAULT_CHANGE_FREQ;
    
    // Construire l'URL finale
    const finalUrl = cleanUrl === '/' ? SITE_URL : `${SITE_URL}${cleanUrl}`;
    
    xml += `
  <url>
    <loc>${finalUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });
  
  xml += `
</urlset>`;
  
  return xml;
}

/**
 * Génère le sitemap index
 */
function generateSitemapIndex() {
  const today = new Date().toISOString().split('T')[0];
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;
}

/**
 * Écrit un fichier
 */
function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Fichier généré : ${filePath}`);
}

/**
 * Fonction principale
 */
function main() {
  console.log('🔍 Détection des pages dans /app...');
  const pages = getPagesFromAppDir();
  console.log(`   Pages trouvées : ${pages.length}`);
  pages.forEach(page => console.log(`   - ${page}`));
  
  // Générer sitemap.xml
  const sitemapXml = generateSitemapXml(pages);
  writeFile(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemapXml);
  
  // Générer sitemap-index.xml
  const sitemapIndex = generateSitemapIndex();
  writeFile(path.join(OUTPUT_DIR, 'sitemap-index.xml'), sitemapIndex);
  
  // Supprimer l'ancien server-sitemap.xml (obsolète)
  const serverSitemapPath = path.join(OUTPUT_DIR, 'server-sitemap.xml');
  if (fs.existsSync(serverSitemapPath)) {
    fs.unlinkSync(serverSitemapPath);
    console.log(`❌ Fichier supprimé : ${serverSitemapPath} (obsolète)`);
  }
  
  console.log('\n✨ Génération des sitemaps terminée !');
}

// Exécuter
try {
  main();
} catch (error) {
  console.error('❌ Erreur lors de la génération des sitemaps :', error.message);
  process.exit(1);
}
