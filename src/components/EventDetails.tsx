'use client';

import { MapPin, Clock, Calendar as CalendarIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import './es.css';

export default function EventDetails() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="event-details" ref={sectionRef} className="event-section">
      <div className="event-container">
        <div className="event-header reveal">
          <h2>تفاصيل الحفل</h2>
          <p>كل تفصيلة في هذا اليوم صُنعت بالحب.</p>
        </div>

        <div className="event-grid">
          {/* Location Card */}
          <Card className="event-card reveal">
            <CardContent className="event-card-content center">
              <div className="icon-circle">
                <CalendarIcon />
              </div>
              <h3>الحنة</h3>
              <div className="day">23</div>
              <div className="date-text">July 2026</div>
              <p>أمام المنزل - بمنشأة النصر</p>
            </CardContent>
          </Card>

          {/* Date Card */}
          <Card className="event-card featured reveal">
            <CardContent className="event-card-content center">
              <div className="icon-circle light">
                <CalendarIcon />
              </div>
              <h3>الفرح</h3>
              <div className="day">24</div>
              <div className="date-text">July 2026</div>
              <p>قاعة لوريف - Lorev Hall</p>
              <p>بمدينة جمصة  </p>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="map-wrapper reveal">
          {!mapLoaded && (
            <div className="map-loader">
              <MapPin />
              <p>جاري تحميل الخريطة...</p>
            </div>
          )}

          {isMounted && (
            <iframe
              onLoad={() => setMapLoaded(true)}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.847589578278!2d31.54522222442461!3d31.443234174360693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f759003d7387fb%3A0x8a862886e0035c4c!2zTG9yZXYgSGFsbCAtINmC2KfYudipINmE2YjYsdmK2YE!5e0!3m2!1sen!2seg!4v1717250000000!5m2!1sen!2seg"
              className={cn(
                'map-frame',
                mapLoaded ? 'show' : ''
              )}
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  );
}