import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const openings = [
  {
    title: 'Senior VFX Artist',
    department: 'Production',
    location: 'Jakarta',
    type: 'Full-time',
    description: 'Create stunning visual effects for film and interactive media projects.',
  },
  {
    title: 'Volumetric Capture Technician',
    department: 'Technology',
    location: 'Jakarta',
    type: 'Full-time',
    description: 'Operate and maintain volumetric capture equipment and pipelines.',
  },
  {
    title: 'AI/ML Engineer',
    department: 'R&D',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop AI models and tools for creative workflows.',
  },
];

export default function CareersPage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Join Our Team
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Build the future of creative technology with us. We're always looking for talented
            individuals passionate about film, XR, and AI.
          </p>
        </div>

        {openings.length > 0 ? (
          <div className="space-y-6 mb-16">
            {openings.map((opening, index) => (
              <Card key={index} className="glass-panel hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{opening.title}</CardTitle>
                      <CardDescription className="text-base">
                        {opening.description}
                      </CardDescription>
                    </div>
                    <Button asChild>
                      <Link href="/contact">Apply</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{opening.department}</Badge>
                    <Badge variant="secondary">{opening.location}</Badge>
                    <Badge variant="secondary">{opening.type}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 mb-16">
            <p className="text-muted-foreground">
              No openings at the moment, but we're always accepting applications.
            </p>
          </div>
        )}

        <div className="glass-panel rounded-3xl p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't see a perfect fit?</h2>
          <p className="text-muted-foreground mb-6">
            Send us your portfolio and let us know how you can contribute to Spectralysium.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
