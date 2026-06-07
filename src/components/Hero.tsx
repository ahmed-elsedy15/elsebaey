import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
        <h1 className="font-headline text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-8 opacity-0 animate-fade-in-up animate-delay-200 flex flex-wrap items-center justify-center gap-x-4 md:gap-x-10">
          <span>Mohammed</span>
          <span className="text-accent inline-block animate-pulse drop-shadow-2xl transform hover:scale-110 transition-transform">❤️</span>
          <span>Dina</span>
        </h1>
        <div className="flex flex-col items-center opacity-0 animate-fade-in-up animate-delay-400">
          <div className="w-24 h-px bg-white/60 mb-6" />
          <p className="font-headline text-3xl md:text-4xl tracking-widest italic">
            23 . 07 . 2026
          </p>
          <div className="w-24 h-px bg-white/60 mt-6" />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <div className="w-px h-12 bg-white" />
      </div>
    </section>
  );
}
