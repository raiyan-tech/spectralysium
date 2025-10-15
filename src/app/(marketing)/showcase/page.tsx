'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Volumetric Performance Capture',
    description: 'High-fidelity 4D capture for immersive storytelling',
    type: 'Volumetric',
    year: 2024,
    industry: 'Entertainment',
    tags: ['4DViews', 'Real-time', 'WebXR'],
    image: '/placeholder.jpg',
  },
  {
    id: 2,
    title: 'AI-Powered VFX Pipeline',
    description: 'Automated shot generation and style transfer',
    type: 'Film',
    year: 2024,
    industry: 'Film Production',
    tags: ['AI', 'LoRA', 'VFX'],
    image: '/placeholder.jpg',
  },
  {
    id: 3,
    title: 'AR Safety Training',
    description: 'Interactive workplace safety training for enterprise',
    type: 'XR',
    year: 2023,
    industry: 'Enterprise',
    tags: ['AR', 'Unity', 'Training'],
    image: '/placeholder.jpg',
  },
  {
    id: 4,
    title: 'Interactive Web Experience',
    description: 'Immersive brand storytelling with WebGL',
    type: 'Web',
    year: 2024,
    industry: 'Brand',
    tags: ['WebGL', 'Three.js', 'Interactive'],
    image: '/placeholder.jpg',
  },
  {
    id: 5,
    title: 'Cultural Heritage Preservation',
    description: 'Digitizing Indonesian cultural artifacts in 3D',
    type: 'Volumetric',
    year: 2023,
    industry: 'Government',
    tags: ['3D Scanning', 'NeRF', 'Heritage'],
    image: '/placeholder.jpg',
  },
  {
    id: 6,
    title: 'Animated Short Film',
    description: 'Original IP with AI-assisted animation pipeline',
    type: 'Film',
    year: 2024,
    industry: 'Entertainment',
    tags: ['Animation', 'AI', 'Storytelling'],
    image: '/placeholder.jpg',
  },
];

const types = ['All', 'Film', 'Volumetric', 'XR', 'Web'];
const years = ['All', '2024', '2023', '2022'];

export default function ShowcasePage() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const filteredProjects = projects.filter(
    (project) =>
      (selectedType === 'All' || project.type === selectedType) &&
      (selectedYear === 'All' || project.year.toString() === selectedYear)
  );

  return (
    <div className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Showcase</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From concept to reality: explore our portfolio of films, volumetric experiences,
            and interactive installations.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-4">
          <div>
            <p className="text-sm font-medium mb-2">Type</p>
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Year</p>
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="glass-panel hover:border-primary/50 transition-all group overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-card to-muted relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">Project Preview</p>
                </div>
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{project.industry}</span>
                  <span>{project.year}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found matching your filters.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-muted-foreground mb-6">
            Let's discuss how we can bring your vision to life.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
