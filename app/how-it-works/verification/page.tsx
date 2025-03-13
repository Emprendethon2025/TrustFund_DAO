"use client"

import { VerificationStatus } from "@/components/verification-status"

export default function VerificationPage() {
  const verificationSteps = [
    {
      title: "Verificación de Identidad",
      description: "Validación de documentos de identidad y perfil",
      status: "pending" as const
    },
    {
      title: "Documentación Legal",
      description: "Revisión de documentos legales y registros",
      status: "pending" as const
    },
    {
      title: "Verificación de Antecedentes",
      description: "Análisis de historial y reputación",
      status: "pending" as const
    }
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Verificación de Identidad</h1>
        <p className="text-muted-foreground mb-8">
          La verificación de identidad es un proceso crucial que garantiza la transparencia y confianza en nuestra plataforma.
          Utilizamos tecnología blockchain para crear una identidad digital verificable.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Proceso de Verificación</h2>
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-medium mb-2">1. Conecta tu Wallet</h3>
                <p className="text-sm text-muted-foreground">
                  Necesitarás una wallet compatible con Polkadot para el proceso de verificación.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-medium mb-2">2. Proporciona Documentación</h3>
                <p className="text-sm text-muted-foreground">
                  Sube documentos que verifiquen tu identidad o la de tu organización.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-medium mb-2">3. Recibe tu Credencial Verificada</h3>
                <p className="text-sm text-muted-foreground">
                  Una vez verificado, recibirás una credencial digital en la blockchain que certifica tu identidad.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Estado de Verificación</h2>
            <VerificationStatus 
              isVerified={false} 
              onVerify={() => console.log("Verification started")}
              verificationSteps={verificationSteps}
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Beneficios de la Verificación</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-medium mb-2">Mayor Confianza</h3>
                <p className="text-sm text-muted-foreground">
                  Los donantes pueden confiar en que su dinero va a organizaciones o individuos legítimos.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-medium mb-2">Acceso a Recursos</h3>
                <p className="text-sm text-muted-foreground">
                  Las organizaciones verificadas tienen acceso a recursos adicionales y herramientas especiales.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

