import { Hero } from '@/components/hero';
import { Metrics } from '@/components/metrics';
import { PillarCards } from '@/components/pillar-cards';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <PillarCards />

      {/* Platform Snapshot */}
      <section className="py-20 sm:py-24 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              IPRAY Platform
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Turn sketches into screen-ready shots. Keep IP investor-grade from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Genesis Workspace',
                description: 'Scripts, treatments, moodboards, style-locked LoRAs',
              },
              {
                title: 'Shot Prompting',
                description: 'Shot-level specs, continuity, ACES/AGX color workflows',
              },
              {
                title: 'Volumetric Suite',
                description: 'Ingest 4DS, Gaussian Splatting previews, web player SDK',
              },
              {
                title: 'Operations',
                description: 'Asset versioning, RBAC, tenant isolation, approval chains',
              },
              {
                title: 'Commerce',
                description: 'SKU planner, C2M integrations, licensing, merch dashboards',
              },
              {
                title: 'Security & Data',
                description: 'Multi-tenant Postgres, row-level security, audit trails',
              },
            ].map((module, index) => (
              <Card key={index} className="glass-panel hover:border-primary/50 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{module.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/platform">
                Explore Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Build the Future?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a discovery call or download our deck to learn how Spectralysium can power your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Book Discovery Call</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Deck
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
