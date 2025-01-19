import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Heart, Brain, Shield, Activity } from "lucide-react";

export default function Approche() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Notre approche
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Une vision holistique de la santé du dos
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Notre vision</h2>
            <p className="mt-4 text-lg text-gray-600">
              L'équipe de Dos-remis incarne l'engagement inébranlable envers une nouvelle ère de la médecine
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Approche globale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Une vision holistique de la santé, plaçant chaque patient au centre de notre démarche avec une approche personnalisée et attentive.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Brain className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Diagnostic précis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Un souci méticuleux pour le diagnostic et une sélection de traitements sur mesure pour chaque patient.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Piliers Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Les piliers de notre approche</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Prévention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Focus sur la prévention et le traitement des causes sous-jacentes pour éviter les récidives.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Activity className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Traitement actif</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Une approche qui vous implique activement dans votre processus de guérison.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Bien-être durable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Au-delà du soulagement immédiat, nous visons des résultats durables pour votre santé.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}