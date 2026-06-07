'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function MediaGallery() {
  const images = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl mb-4">Cherished Moments</h2>
          <p className="font-body text-muted-foreground text-lg">A glimpse into our beautiful journey together.</p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            <Image 
              src="https://picsum.photos/seed/love-video/1200/675" 
              alt="Love Story Video" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:bg-black/20">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-transform group-hover:scale-110">
                <Play className="text-white fill-current w-8 h-8 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="font-headline text-2xl mb-1">Our Love Story</h3>
              <p className="font-body opacity-80 uppercase tracking-widest text-sm">Cinematic Film</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                  <Image 
                    src={image.imageUrl} 
                    alt={image.description} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                    <span className="text-white font-body border border-white px-4 py-2 rounded-full text-sm">View Larger</span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-6 bg-card border-none">
                <DialogTitle className="font-headline text-2xl mb-2">{image.description}</DialogTitle>
                <DialogDescription className="font-body text-muted-foreground mb-4">
                  A beautiful captured moment from Mohammed and Dina's journey.
                </DialogDescription>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                  <Image src={image.imageUrl} alt={image.description} fill className="object-contain" />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
