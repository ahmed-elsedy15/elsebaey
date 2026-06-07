'use client';

import { MapPin, Clock, Calendar as CalendarIcon, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export default function EventDetails() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Avoid onLoad prop issue in NextJS 15 by using ref
    const iframe = iframeRef.current;
    if (iframe) {
      const handleLoad = () => setMapLoaded(true);
      iframe.addEventListener('load', handleLoad);
      // If it's already loaded
      if (iframe.contentDocument?.readyState === 'complete') {
        handleLoad();
      }
      return () => iframe.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="font-headline text-4xl md:text-5xl mb-4 text-primary">Join Us</h2>
          <p className="font-body text-muted-foreground text-lg">Every detail has been crafted with love.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-none shadow-xl bg-card/80 backdrop-blur transition-all hover:-translate-y-2 opacity-0 animate-fade-in-up animate-delay-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-headline text-2xl mb-4">The Ceremony</h3>
              <p className="font-body text-muted-foreground mb-2">قاعة لوريف - Lorev Hall</p>
              <p className="font-body text-muted-foreground mb-6">جمصة، محافظة الدقهلية</p>
              <div className="h-px bg-border w-12 mx-auto mb-6" />
              <div className="flex items-center justify-center text-primary font-semibold">
                <Clock className="text-primary w-4 h-4 mr-2" />
                <span>6:00 PM Sharp</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-2xl bg-primary text-primary-foreground transition-all hover:-translate-y-2 scale-105 z-20 opacity-0 animate-fade-in-up animate-delay-400">
            <CardContent className="p-8 text-center flex flex-col justify-center h-full">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CalendarIcon className="text-white w-8 h-8" />
              </div>
              <h3 className="font-headline text-3xl mb-4">Thursday</h3>
              <p className="font-headline text-6xl mb-4">23</p>
              <p className="font-body uppercase tracking-[0.3em] text-sm mb-6">July 2026</p>
              <div className="bg-white/10 py-3 px-6 rounded-full inline-block mx-auto">
                <span className="font-body">Formal Attire Requested</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl bg-card/80 backdrop-blur transition-all hover:-translate-y-2 opacity-0 animate-fade-in-up animate-delay-600">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Info className="text-accent w-8 h-8" />
              </div>
              <h3 className="font-headline text-2xl mb-4">The Celebration</h3>
              <p className="font-body text-muted-foreground mb-2">Lorev Pavilion</p>
              <p className="font-body text-muted-foreground mb-6">Dinner & Dancing to follow</p>
              <div className="h-px bg-border w-12 mx-auto mb-6" />
              <div className="flex items-center justify-center text-accent font-semibold">
                <Clock className="w-4 h-4 mr-2" />
                <span>8:00 PM Until Late</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-6xl mx-auto overflow-hidden rounded-3xl shadow-xl h-96 relative opacity-0 animate-fade-in-up animate-delay-800">
          {!mapLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-2" />
                <p className="font-body text-muted-foreground italic">Loading Interactive Map...</p>
              </div>
            </div>
          )}
          <iframe 
            ref={iframeRef}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.847589578278!2d31.54522222442461!3d31.443234174360693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f759003d7387fb%3A0x8a862886e0035c4c!2zTG9yZXYgSGFsbCAtINmC2KfYudipINmE2YjYsdmK2YE!5e0!3m2!1sen!2seg!4v1717250000000!5m2!1sen!2seg" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className={cn(
              "transition-opacity duration-1000",
              mapLoaded ? "opacity-100" : "opacity-0"
            )}
          ></iframe>
        </div>
      </div>
    </section>
  );
}