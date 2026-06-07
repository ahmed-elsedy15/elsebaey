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
        <span className="block font-body text-xs uppercase tracking-[0.5em] mb-4 opacity-0 animate-fade-in-up">
          Save The Date
        </span>

        {/* Vertical Stack: Mohammed -> Heart -> Dina */}
        <div className="flex flex-col items-center space-y-2 md:space-y-4">
          <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl opacity-0 animate-fade-in-up animate-delay-200 leading-tight">
            Mohammed
          </h1>
          
          <div className="opacity-0 animate-fade-in-up animate-delay-400 py-1">
             <Heart className="text-accent w-10 h-10 md:w-14 md:h-14 fill-accent animate-pulse-soft drop-shadow-[0_0_15px_rgba(255,100,100,0.8)]" />
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl opacity-0 animate-fade-in-up animate-delay-600 leading-tight">
            Dina
          </h1>
        </div>

        {/* Date and Hall Info */}
        <div className="flex flex-col items-center mt-8 md:mt-10 opacity-0 animate-fade-in-up animate-delay-800">
          <div className="w-12 h-px bg-white/40 mb-4" />
          
          <p className="font-headline text-2xl md:text-3xl tracking-widest italic mb-3">
            23 . 07 . 2026
          </p>
          
          <div className="flex flex-col items-center space-y-3">
            <p className="font-body text-base md:text-lg uppercase tracking-[0.3em] opacity-90">
              Thursday | الخميس
            </p>
            <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 shadow-xl transition-all hover:bg-white/20">
               <p className="font-headline text-lg md:text-xl tracking-wide">Lorev Hall | قاعة لوريف</p>
            </div>
          </div>

          <div className="w-12 h-px bg-white/40 mt-6" />
        </div>
      </div>
    </section>
  );
}
