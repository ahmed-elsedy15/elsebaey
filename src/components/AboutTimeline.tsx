import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const timelineEvents = [
  {
    title: "The First Glance",
    date: "March 2022",
    description: "In a small, sunlit café, our eyes met for the first time. A simple 'hello' that changed everything.",
    image: PlaceHolderImages.find(img => img.id === 'timeline-1')?.imageUrl
  },
  {
    title: "Falling in Love",
    date: "September 2023",
    description: "Through seasons of laughter and quiet moments, we realized that we were each other's home.",
    image: "https://picsum.photos/seed/love/400/400"
  },
  {
    title: "The Question",
    date: "February 2025",
    description: "Under the starlit sky, Mohammed asked the question that would bind our lives forever. Dina said 'Yes'.",
    image: PlaceHolderImages.find(img => img.id === 'timeline-2')?.imageUrl
  }
];

export default function AboutTimeline() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl mb-4">Our Journey</h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />

          {timelineEvents.map((event, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2 px-8 mb-8 md:mb-0">
                <div className={`text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="font-body text-accent font-semibold text-lg">{event.date}</span>
                  <h3 className="font-headline text-3xl mb-4 text-primary">{event.title}</h3>
                  <p className="font-body text-muted-foreground text-lg leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="relative z-10 hidden md:block">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md" />
              </div>

              <div className="w-full md:w-1/2 px-8">
                <div className="relative aspect-square max-w-[300px] mx-auto overflow-hidden rounded-2xl shadow-xl ring-8 ring-background">
                  <Image 
                    src={event.image || 'https://picsum.photos/400/400'} 
                    alt={event.title} 
                    fill 
                    className="object-cover"
                    data-ai-hint="romantic photo"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
