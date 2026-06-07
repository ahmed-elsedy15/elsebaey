'use client';

import { Sparkles, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WelcomeSection() {
  const scrollToDetails = () => {
    const element = document.getElementById('event-details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <div className="mb-12 reveal">
          <Sparkles className="mx-auto w-10 h-10 text-primary mb-6 animate-pulse" />
          <h2 className="font-headline text-4xl md:text-6xl mb-8 text-primary">أهلاً بكم في ليلة العمر</h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-xl leading-relaxed mb-12">
            بكل الحب والبهجة، ندعوكم لمشاركتنا أجمل لحظات حياتنا. حضوركم يكتمل به فرحنا، ويسعدنا جداً أن تكونوا شاهدين على بداية رحلتنا معاً.
          </p>
          
          <Button 
            onClick={scrollToDetails}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-xl rounded-full shadow-2xl transition-all hover:scale-105 group"
          >
            تفاصيل الحفل
            <ArrowDown className="ml-2 h-6 w-6 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
    </section>
  );
}
