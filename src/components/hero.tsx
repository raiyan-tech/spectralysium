'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 bg-[#00E5FF] opacity-20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 bg-[#FF3FD1] opacity-20 blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            Build worlds.{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] via-[#FF3FD1] to-[#FFB800] bg-clip-text text-transparent">
              Train models.
            </span>{' '}
            Ship stories.
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
            From Jakarta to the world — Spectralysium is Indonesia's creative-tech engine for
            film, XR and IP.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="group">
              <Link href="/showcase">
                See Showcase
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </div>
        </motion.div>

        {/* Video reel placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 sm:mt-24"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 glass-panel">
            <div className="aspect-video bg-gradient-to-br from-card to-muted flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Demo reel placeholder</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
