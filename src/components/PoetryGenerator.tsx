'use client';

import { useState } from 'react';
import { generateWelcomePoem } from '@/ai/flows/guest-reads-ai-generated-poem';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Sparkles, Feather } from 'lucide-react';

export default function PoetryGenerator() {
  const [poem, setPoem] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateWelcomePoem({
        mohammedName: 'Mohammed',
        dinaName: 'Dina'
      });
      setPoem(result.poem);
    } catch (error) {
      console.error('Poem generation failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <div className="mb-12">
          <Sparkles className="mx-auto w-8 h-8 text-primary mb-4" />
          <h2 className="font-headline text-4xl md:text-5xl mb-6">A Blessing of Words</h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Welcome, dear guest. In celebration of our union, we invite you to receive a unique, 
            AI-crafted romantic blessing inspired by our love story.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <Button 
            onClick={handleGenerate} 
            disabled={loading}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105"
          >
            {loading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Feather className="mr-2 h-5 w-5" />
            )}
            {poem ? 'Generate Another Blessing' : 'Reveal Our Blessing'}
          </Button>
        </div>

        {poem && (
          <Card className="border-none bg-card/50 backdrop-blur-sm shadow-xl overflow-hidden animate-fade-in-up">
            <CardContent className="p-8 md:p-12">
              <div className="relative">
                <span className="absolute -top-4 -left-4 text-6xl text-primary/10 font-serif">"</span>
                <p className="font-headline text-xl md:text-2xl italic leading-relaxed whitespace-pre-line text-foreground/90">
                  {poem}
                </p>
                <span className="absolute -bottom-10 -right-4 text-6xl text-primary/10 font-serif">"</span>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
    </section>
  );
}
