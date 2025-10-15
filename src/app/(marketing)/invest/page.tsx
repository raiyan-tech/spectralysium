import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Zap, Globe } from 'lucide-react';
import Link from 'next/link';

const highlights = [
  {
    icon: TrendingUp,
    title: 'Market Opportunity',
    description: 'Indonesia\'s creative economy is projected to grow 8-10% annually, with increasing demand for premium content and XR experiences.',
  },
  {
    icon: Zap,
    title: 'Technical Edge',
    description: '23+ years of VFX expertise combined with cutting-edge AI and volumetric technology—a unique competitive advantage.',
  },
  {
    icon: Users,
    title: 'Government & Enterprise',
    description: 'Strong partnerships with ministries, SOEs, and enterprise clients providing stable revenue and strategic positioning.',
  },
  {
    icon: Globe,
    title: 'Global Scalability',
    description: 'IPRAY platform designed for international markets with proven pipelines that bridge Indonesian creators with global opportunities.',
  },
];

export default function InvestPage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Invest in the Future of{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#FF3FD1] bg-clip-text text-transparent">
              Creative Technology
            </span>
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Spectralysium is building the infrastructure for Indonesia's creative economy—from IP development to production to commercialization.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
          {highlights.map((highlight, index) => (
            <Card key={index} className="glass-panel hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 w-fit mb-4">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{highlight.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {highlight.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="glass-panel rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
            Investment Thesis
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="font-semibold text-lg mb-2">Revenue Streams</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Production services (VFX, volumetric, XR)
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  IPRAY Platform SaaS subscriptions
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Original IP development and licensing
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Consulting services (Media, Technology, F&B)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Traction</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  50+ government and enterprise projects delivered
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Active partnerships with ministries and SOEs
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  IPRAY platform in beta with pilot customers
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Interested in Learning More?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're exploring strategic partnerships and investment opportunities. Reach out to discuss how we can work together.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Investor Relations</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
