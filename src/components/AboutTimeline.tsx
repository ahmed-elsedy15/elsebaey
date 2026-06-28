'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import './es.css';

const timelineEvents = [
  {
    title: "قراءة الفاتحة",
    date: "February 24, 2025",
    description: "بسم الله بدأت الحكاية.",
    image: "/e2.jpeg"
  },
  {
    title: "الخطوبة",
    date: "April 1, 2025",
    description: "في هذا اليوم بدأ مشوارنا معًا بهدوء ورضا، على أمل أن يكون القادم أجمل وأقرب.",
    image: "/e3.jpeg"
  },
  {
    title: "عقد القِران",
    date: "April 17, 2026",
    description: "في هذا اليوم تم عقد القِران، وربط الله بين قلبين على سنة الله ورسوله.",
    image: "/e6.jpeg"
  },
];

export default function AboutTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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
    <section ref={sectionRef} className="timeline-section">
      <div className="timeline-container">
        <div className="timeline-header reveal">
          <h2>حكايتنا </h2>
          <span className="line" />
        </div>

        <div className="timeline-wrapper">
          <span className="center-line" />

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`timeline-item reveal ${index % 2 === 0 ? 'reverse' : ''}`}
            >
              <div className="timeline-content">
                <span className="date">{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>

              <div className="timeline-dot" />

              <div className="timeline-image">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}