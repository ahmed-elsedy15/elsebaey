import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Heart } from 'lucide-react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Zoom Animation */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || 'https://picsum.photos/seed/wedding-hero/1920/1080'}
          alt="Mohammed and Dina"
          fill
          className="object-cover animate-zoom-out"
          priority
          data-ai-hint="wedding couple"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 text-center text-white px-4 w-full flex flex-col items-center">
        {/* Entrance Animations */}
        <span className="block font-body text-sm uppercase tracking-[0.5em] mb-8 opacity-0 animate-fade-in-up">
          Save The Date
        </span>

        {/* Names and Heart Stacked Vertically */}
        <div className="flex flex-col items-center gap-y-6 md:gap-y-8">
          <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl lg:text-9xl opacity-0 animate-fade-in-up animate-delay-200">
            Mohammed
          </h1>
          
          <div className="opacity-0 animate-fade-in-up animate-delay-400">
             <Heart className="text-accent w-14 h-14 md:w-20 md:h-20 fill-accent animate-pulse-soft drop-shadow-[0_0_25px_rgba(255,100,100,0.8)]" />
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl lg:text-9xl opacity-0 animate-fade-in-up animate-delay-600">
            Dina
          </h1>
        </div>

        {/* Date, Day and Hall Information */}
        <div className="flex flex-col items-center mt-12 opacity-0 animate-fade-in-up animate-delay-800">
          <div className="w-24 h-px bg-white/40 mb-8" />
          
          <p className="font-headline text-3xl md:text-5xl tracking-widest italic mb-4">
            23 . 07 . 2026
          </p>
          
          <div className="flex flex-col items-center space-y-4">
            <p className="font-body text-xl md:text-2xl uppercase tracking-[0.3em] opacity-90">
              Thursday | الخميس
            </p>
            <div className="bg-white/10 backdrop-blur-md px-10 py-4 rounded-full border border-white/20 shadow-2xl transition-all hover:bg-white/20">
               <p className="font-headline text-xl md:text-2xl tracking-wide">Lorev Hall | قاعة لوريف</p>
            </div>
          </div>

          <div className="w-24 h-px bg-white/40 mt-8" />
        </div>
      </div>
    </section>
  );
}
