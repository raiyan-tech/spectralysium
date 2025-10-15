import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const articles = [
  {
    title: 'The Future of Volumetric Storytelling',
    excerpt: 'Exploring how 4D capture is revolutionizing immersive narratives and changing the way we tell stories.',
    tags: ['Volumetric', 'VFX', 'Innovation'],
    date: '2024-10-10',
    readTime: '5 min read',
  },
  {
    title: 'AI in Film Production: Beyond the Hype',
    excerpt: 'A practical guide to implementing AI tools in your production pipeline without losing the creative touch.',
    tags: ['AI', 'Film', 'Production'],
    date: '2024-10-05',
    readTime: '7 min read',
  },
  {
    title: 'Building IP for the Indonesian Market',
    excerpt: 'Strategies for developing intellectual property that resonates locally and scales globally.',
    tags: ['IP Business', 'Indonesia', 'Strategy'],
    date: '2024-09-28',
    readTime: '6 min read',
  },
];

export default function InsightsPage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">Insights</h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Thoughts on VFX, volumetric capture, AI for film, IP business, and the Indonesian creative tech landscape.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="outline" size="sm">All</Button>
            <Button variant="ghost" size="sm">VFX</Button>
            <Button variant="ghost" size="sm">AI</Button>
            <Button variant="ghost" size="sm">Indonesia</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Card key={index} className="glass-panel hover:border-primary/50 transition-all group">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription>{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            More articles coming soon.
          </p>
          <Button asChild variant="outline">
            <Link href="/contact">Subscribe to Newsletter</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
