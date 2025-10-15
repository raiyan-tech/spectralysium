import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Layers, Shield, Zap, Database, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const modules = [
  {
    icon: Code,
    title: 'Genesis (IP Workspace)',
    description:
      'Complete IP development suite with scripts, treatments, moodboards, and style-locked LoRAs. Version control for creative assets.',
    features: [
      'Collaborative scripts & treatments',
      'AI-powered moodboard generation',
      'Style-locked LoRA training',
      'Asset version control',
    ],
  },
  {
    icon: Layers,
    title: 'Shot Prompting',
    description:
      'Shot-level specifications with continuity tracking, ACES/AGX color workflows, and automated prompt generation.',
    features: [
      'Shot-level prompt management',
      'Continuity tracking',
      'ACES/AGX color workflows',
      'Automated prompt templates',
    ],
  },
  {
    icon: Zap,
    title: 'Volumetric Suite',
    description:
      'Ingest 4DS files, preview Gaussian Splatting, and deploy with our web player SDK for immersive experiences.',
    features: [
      '4DViews/4DS file support',
      'Gaussian Splatting previews',
      'Web player SDK',
      'Chunked streaming',
    ],
  },
  {
    icon: Shield,
    title: 'Operations',
    description:
      'Enterprise-grade asset versioning, role-based access control, tenant isolation, and approval chains.',
    features: [
      'Asset versioning',
      'RBAC (Role-Based Access)',
      'Multi-tenant isolation',
      'Approval workflows',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Commerce',
    description:
      'SKU planner, C2M (Consumer-to-Manufacturer) integrations, licensing management, and merch dashboards.',
    features: [
      'SKU planning & management',
      'C2M integrations',
      'Licensing workflows',
      'Merchandise dashboards',
    ],
  },
  {
    icon: Database,
    title: 'Security & Data',
    description:
      'Multi-tenant PostgreSQL with row-level security, comprehensive audit trails, and data sovereignty.',
    features: [
      'Multi-tenant Postgres',
      'Row-level security (RLS)',
      'Comprehensive audit trails',
      'Data sovereignty controls',
    ],
  },
];

export default function PlatformPage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <Badge className="mb-4">IPRAY Platform</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Your Creator OS for{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#FF3FD1] bg-clip-text text-transparent">
              Prompt-to-Production
            </span>
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            IPRAY is a complete creator operating system: from initial prompt to production pipelines,
            review tools, and investor-facing analytics—all in one platform.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/contact">Request Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/demo/volumetric">Try Live Demo</Link>
            </Button>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="glass-panel hover:border-primary/50 transition-all"
            >
              <CardHeader>
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 w-fit mb-4">
                  <module.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{module.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 glass-panel rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Turn Sketches into Screen-Ready Shots
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Keep your IP investor-grade from day one with IPRAY's integrated platform.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Walkthrough</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
