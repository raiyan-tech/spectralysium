'use client';

import { motion } from 'framer-motion';
import { Sparkles, Cpu, ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const pillars = [
  {
    icon: Sparkles,
    title: 'Create',
    description: 'IP development, worldbuilding, writers room, concept → previs',
    color: 'from-[#00E5FF] to-[#00A8CC]',
  },
  {
    icon: Cpu,
    title: 'Compute',
    description: 'AI R&D, LLM/LoRA, 3DGS/NeRF, volumetric, realtime CG',
    color: 'from-[#FF3FD1] to-[#CC32A8]',
  },
  {
    icon: ShoppingBag,
    title: 'Commercialize',
    description: 'Merchandise, F&B tie-ins, licensing, distribution',
    color: 'from-[#FFB800] to-[#CC9300]',
  },
];

export function PillarCards() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Three Pillars of Innovation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            End-to-end creative technology solutions for the modern media landscape
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full glass-panel hover:border-primary/50 transition-all group">
                <CardHeader>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${pillar.color} mb-4`}>
                    <pillar.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {pillar.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
