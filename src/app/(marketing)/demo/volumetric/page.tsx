'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import Link from 'next/link';

export default function VolumetricDemoPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 100; // Mock duration

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Volumetric Player Demo
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Experience our web-based 4DViews player with chunked HTTP range streaming for smooth playback.
          </p>
        </div>

        {/* Player */}
        <Card className="glass-panel mb-12">
          <CardContent className="p-0">
            <div className="aspect-video bg-gradient-to-br from-card to-muted relative overflow-hidden rounded-t-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 border-2 border-primary/20 mb-4">
                    <Play className="h-10 w-10 text-primary ml-1" />
                  </div>
                  <p className="text-sm text-muted-foreground">4DS Preview Placeholder</p>
                  <p className="text-xs text-muted-foreground mt-1">Volumetric content would render here</p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentTime(Math.max(0, currentTime - 10))}
                >
                  <SkipBack className="h-4 w-4" />
                </Button>
                <Button
                  variant="default"
                  size="icon"
                  onClick={togglePlay}
                  className="h-12 w-12"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5 ml-0.5" />
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentTime(Math.min(duration, currentTime + 10))}
                >
                  <SkipForward className="h-4 w-4" />
                </Button>

                {/* Timeline */}
                <div className="flex-1">
                  <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={(e) => setCurrentTime(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Time */}
                <div className="text-sm text-muted-foreground tabular-nums">
                  {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')} /{' '}
                  {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
                </div>
              </div>

              <div className="text-xs text-muted-foreground">
                Sample: 50–150 MB • HTTP Range enabled • Chunked streaming
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="glass-panel">
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Format:</span>
                <span className="font-medium">4DS (4DViews)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Compression:</span>
                <span className="font-medium">H.264 + Depth</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Streaming:</span>
                <span className="font-medium">HTTP Range Requests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rendering:</span>
                <span className="font-medium">WebGL 2.0</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader>
              <CardTitle>Performance Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Recommended: 25+ Mbps connection</p>
              <p>• Desktop: Chrome, Firefox, Edge</p>
              <p>• Mobile: WebXR-compatible browsers</p>
              <p>• CDN-optimized for global delivery</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Integrate Volumetric Content?</h2>
          <p className="text-muted-foreground mb-6">
            Our volumetric suite includes capture, processing, and web player SDK.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Book a Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
