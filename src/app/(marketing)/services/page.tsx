import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Film, Box, Glasses, Brain, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Film,
    title: 'VFX/CGI Supervision & Post',
    description:
      'End-to-end visual effects and CGI services from pre-visualization to final compositing.',
    details: [
      'On-set VFX supervision',
      'CGI asset creation & animation',
      'Compositing & grading',
      'Real-time previsualization',
    ],
  },
  {
    icon: Box,
    title: 'Volumetric Capture & Playback',
    description:
      'High-fidelity 4D volumetric capture and web-based playback solutions for immersive storytelling.',
    details: [
      '4DViews volumetric stage',
      'Performance capture',
      'Web-based 4DS playback',
      'Gaussian Splatting optimization',
    ],
  },
  {
    icon: Glasses,
    title: 'AR/VR/XR Applications',
    description:
      'Immersive extended reality applications for training, entertainment, and brand experiences.',
    details: [
      'WebXR experiences',
      'Unity/Unreal development',
      'AR training simulations',
      'VR brand activations',
    ],
  },
  {
    icon: Brain,
    title: 'AI/LLM R&D for Media',
    description:
      'Custom AI models and LLM integrations tailored for creative workflows and content generation.',
    details: [
      'Custom LoRA training',
      'AI-powered shot generation',
      'Style transfer pipelines',
      'Conversational AI avatars',
    ],
  },
  {
    icon: Lightbulb,
    title: 'IP Incubation & Merchandising',
    description:
      'Complete IP development from concept to commercialization, including merchandise and retail.',
    details: [
      'IP development & worldbuilding',
      'Merchandise design & production',
      'C2M platform integration',
      'Retail enablement',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">Services</h1>
          <p className="text-xl leading-8 text-muted-foreground">
            From concept to deployment—comprehensive creative technology services that bridge
            storytelling, computation, and commercialization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-panel hover:border-primary/50 transition-all"
            >
              <div className="grid md:grid-cols-3 gap-6 p-8">
                <div className="md:col-span-1">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </div>
                <div className="md:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="glass-panel rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
            Our Process
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Every project follows our proven methodology to ensure quality and efficiency.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { phase: 'Discover', desc: 'Understand goals' },
              { phase: 'Design', desc: 'Plan solution' },
              { phase: 'Build', desc: 'Create assets' },
              { phase: 'Deploy', desc: 'Launch project' },
              { phase: 'Operate', desc: 'Ongoing support' },
            ].map((item, index) => (
              <div key={item.phase} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-background font-bold mb-3 text-lg">
                  {index + 1}
                </div>
                <p className="font-semibold mb-1">{item.phase}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to start your next project? Get in touch to discuss how we can help bring
            your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/showcase">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
