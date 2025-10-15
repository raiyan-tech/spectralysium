'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Languages } from 'lucide-react';

export default function AvatarDemoPage() {
  const [isMicActive, setIsMicActive] = useState(false);
  const [language, setLanguage] = useState<'en' | 'id'>('en');
  const [transcript, setTranscript] = useState('');

  const toggleMic = () => {
    setIsMicActive(!isMicActive);
    if (!isMicActive) {
      // Simulate mic activation
      setTimeout(() => {
        setTranscript('This is a demo. Actual speech recognition would appear here.');
      }, 1000);
    } else {
      setTranscript('');
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <div className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Conversational Avatar Demo
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Real-time web avatar with speech recognition, TTS, and bilingual support (EN/ID).
          </p>
        </div>

        {/* Avatar Display */}
        <Card className="glass-panel mb-12">
          <CardContent className="p-0">
            <div className="aspect-video bg-gradient-to-br from-card to-muted relative overflow-hidden rounded-t-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {/* Avatar Placeholder */}
                  <div className="inline-flex items-center justify-center h-32 w-32 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse" />
                    <div className="relative text-4xl font-bold text-background">AI</div>
                  </div>
                  <p className="text-lg font-medium mb-2">Spectralysium Avatar</p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Speaking in English' : 'Berbicara dalam Bahasa Indonesia'}
                  </p>
                </div>
              </div>

              {/* Microphone Status */}
              {isMicActive && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-red-500/20 border border-red-500/30">
                    <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs text-red-400">Recording</span>
                  </div>
                </div>
              )}

              {/* Language Indicator */}
              <div className="absolute top-4 left-4">
                <div className="px-3 py-2 rounded-full bg-card/80 backdrop-blur border border-white/10">
                  <span className="text-xs font-medium">{language.toUpperCase()}</span>
                </div>
              </div>
            </div>

            {/* Transcript/Subtitles */}
            <div className="p-6 border-t border-white/10 min-h-[100px]">
              <p className="text-sm font-medium mb-2">Transcript:</p>
              {transcript ? (
                <p className="text-muted-foreground">{transcript}</p>
              ) : (
                <p className="text-muted-foreground italic">
                  {language === 'en'
                    ? 'Click the microphone button to start speaking...'
                    : 'Klik tombol mikrofon untuk mulai berbicara...'}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Controls */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            size="lg"
            variant={isMicActive ? 'destructive' : 'default'}
            onClick={toggleMic}
            className="min-w-[140px]"
          >
            {isMicActive ? (
              <>
                <MicOff className="mr-2 h-5 w-5" />
                Stop
              </>
            ) : (
              <>
                <Mic className="mr-2 h-5 w-5" />
                Start Mic
              </>
            )}
          </Button>

          <Button size="lg" variant="outline" onClick={toggleLanguage}>
            <Languages className="mr-2 h-5 w-5" />
            Switch to {language === 'en' ? 'ID' : 'EN'}
          </Button>
        </div>

        {/* Feature Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="text-lg">Speech Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Real-time ASR (Automatic Speech Recognition) with support for English and Bahasa Indonesia.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="text-lg">LLM Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Powered by advanced language models for natural, context-aware conversations.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="text-lg">Text-to-Speech</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Natural voice synthesis with emotional inflection and bilingual support.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Technical Stack */}
        <Card className="glass-panel mb-12">
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Speech Recognition</p>
                <p className="font-medium">WebRTC / Whisper</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">LLM</p>
                <p className="font-medium">GPT-4 / Custom</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">TTS</p>
                <p className="font-medium">ElevenLabs / Azure</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Rendering</p>
                <p className="font-medium">Three.js / WebGL</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Build Your Own Conversational Avatar</h2>
          <p className="text-muted-foreground mb-6">
            Custom avatars for customer service, training, entertainment, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/contact">Discuss Your Use Case</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/services">View Services</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
