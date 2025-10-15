import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Film, Server, UtensilsCrossed, Sparkles } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Film,
    title: 'Media Consulting',
    areas: [
      'Creative pipeline setup',
      'Production efficiency optimization',
      'IP development strategy',
      'Distribution strategies',
      'VFX/Post-production workflows',
    ],
  },
  {
    icon: Server,
    title: 'Technology Consulting',
    areas: [
      'AI adoption & integration',
      'Volumetric infrastructure',
      'Real-time pipeline integration',
      'Cloud & data architecture',
      'System integration & APIs',
    ],
  },
  {
    icon: UtensilsCrossed,
    title: 'Food & Beverage Consulting',
    areas: [
      'Menu innovation & recipe development',
      'Culinary storytelling',
      'CSR & sustainability programs',
      'Local sourcing & zero-waste kitchen',
      'F&B business development',
    ],
  },
  {
    icon: Sparkles,
    title: 'Integrated Projects',
    areas: [
      'IP-based F&B concepts',
      'Media-to-merchandise pipelines',
      'Brand activation & experiences',
      'Go-to-market strategies',
      'Franchising & brand growth',
    ],
  },
];

export default function ConsultingPage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Strategic Consulting
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Spectralysium provides strategic consulting and technical implementation across
            Media, Technology, and Food & Beverage—blending creative, technical, and
            commercial lenses to help clients evolve into integrated media ecosystems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-panel hover:border-primary/50 transition-all"
            >
              <CardHeader>
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 w-fit mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.areas.map((area, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Approach Section */}
        <div className="glass-panel rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {['Discover', 'Design', 'Build', 'Deploy', 'Operate'].map((phase, index) => (
              <div key={phase} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-foreground font-bold mb-3">
                  {index + 1}
                </div>
                <p className="font-semibold">{phase}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a government agency, enterprise, or creative studio, we can help
            you leverage cutting-edge technology and creative strategies.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
