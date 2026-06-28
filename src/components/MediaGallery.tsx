'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { useEffect, useRef, useState } from 'react';
import './es.css';

const galleryImages = [
  { id: 'gallery-1', imageUrl: '/g1.jpeg', description: '..' },
  { id: 'gallery-2', imageUrl: '/e4.jpeg', description: '..' },
  { id: 'gallery-3', imageUrl: '/e1.jpeg', description: '..' },
];

export default function MediaGallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section ref={sectionRef} className="media-section">
      <div className="media-container">

        {/* Header */}
        <div className="media-header reveal">
          <h2>لحظات لا تُنسى</h2>
          <p>لمحات من رحلتنا الجميلة معاً.</p>
        </div>

        {/* Video */}
        <div className="media-video reveal">
          <div
            className={`video-card ${isPlaying ? 'playing' : ''}`}
            onClick={toggleVideo}
          >
            <video
              ref={videoRef}
              src="/vv2.mp4"
              className="video-element"
              playsInline
              preload="metadata"
            />

            {!isPlaying && (
              <div className="video-overlay">
                <div className="play-btn">
                  <Play />
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Gallery */}
        <div className="media-grid">
          {galleryImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div className="media-item reveal">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="media-img"
                  />

                  <div className="media-hover">
                    <span>عرض الصورة</span>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="media-dialog">
                <DialogTitle>{image.description}</DialogTitle>
                <DialogDescription>
                  لحظة من ذكرياتنا الجميلة.
                </DialogDescription>

                <div className="dialog-image">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="dialog-img"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

      </div>
    </section>
  );
}