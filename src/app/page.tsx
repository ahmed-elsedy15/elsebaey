import Hero from '@/components/Hero';
import WelcomeSection from '@/components/WelcomeSection';
import AboutTimeline from '@/components/AboutTimeline';
import MediaGallery from '@/components/MediaGallery';
import EventDetails from '@/components/EventDetails';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Cinematic Hero Section */}
      <Hero />

      {/* 2. Welcome Message and Navigation */}
      <WelcomeSection />

      {/* 3. Narrative Story: About the Couple */}
      <AboutTimeline />

      {/* 4. Interactive Media Storeyboard */}
      <MediaGallery />

      {/* 5. Event Detail Dashboard */}
      <EventDetails />

      {/* 6. Romantic Footer */}
      <Footer />
    </main>
  );
}
