import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Heart } from 'lucide-react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || 'https://picsum.photos/seed/wedding-hero/1920/1080'}
          alt="Mohammed and Dina"
          fill
          className="object-cover"
          priority
          data-ai-hint="wedding couple"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 text-center text-white px-4 w-full">
        <span className="block font-body text-sm uppercase tracking-[0.5em] mb-4 opacity-0 animate-fade-in-up">
          Save The Date
        </span>
        <h1 className="font-headline text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-8 opacity-0 animate-fade-in-up animate-delay-200 flex flex-col items-center justify-center gap-y-6">
          <span>Mohammed</span>
          <div className="flex items-center justify-center">
             <Heart className="text-accent w-14 h-14 md:w-20 md:h-20 fill-accent animate-pulse drop-shadow-2xl transform hover:scale-125 transition-transform duration-500" />
          </div>
          <span>Dina</span>
        </h1>
        <div className="flex flex-col items-center opacity-0 animate-fade-in-up animate-delay-400">
          <div className="w-24 h-px bg-white/60 mb-6" />
          <p className="font-headline text-3xl md:text-4xl tracking-widest italic mb-2">
            23 . 07 . 2026
          </p>
          <p className="font-body text-xl md:text-2xl uppercase tracking-[0.3em] mb-4 opacity-80">
            Thursday | الخميس
          </p>
          <div className="bg-white/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/20 shadow-2xl">
             <p className="font-headline text-xl md:text-2xl tracking-wide">Lorev Hall | قاعة لوريف</p>
          </div>
          <div className="w-24 h-px bg-white/60 mt-6" />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <div className="w-px h-12 bg-white" />
      </div>
    </section>
  );
}
