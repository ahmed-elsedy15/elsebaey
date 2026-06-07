import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <Heart className="mx-auto w-10 h-10 text-accent fill-accent mb-8" />
        <h2 className="font-headline text-4xl md:text-5xl mb-6">We can't wait to celebrate with you</h2>
        <p className="font-body text-lg opacity-80 max-w-2xl mx-auto mb-12 italic leading-relaxed">
          "Your presence is the greatest gift we could ever receive. We look forward to sharing this 
          beautiful beginning of our forever with those we love most."
        </p>
        <div className="w-24 h-px bg-white/20 mx-auto mb-12" />
        <div className="space-y-4">
          <p className="font-headline text-2xl">Mohammed & Dina</p>
          <p className="font-body text-sm uppercase tracking-[0.4em] opacity-60">Lumina Vows © 2026</p>
        </div>
      </div>

      {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>
    </footer>
  );
}
