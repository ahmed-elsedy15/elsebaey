'use client';

import { ArrowDown, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import './es.css';

export default function WelcomeSection() {
  const sectionRef = useRef<HTMLElement>(null);

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

  const scrollToDetails = () => {
    const element = document.getElementById('event-details');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="welcome-section">
      <div className="welcome-container">
        <div className="welcome-content reveal">
          <div className="heart-wrapper">
            <Heart className="heart-icon" />
          </div>

          <h2 className="welcome-title">أهلاً بكم في فرحتنا</h2>

          <p className="welcome-text">
            بكل ما تحمله القلوب من حب وامتنان، ندعوكم لتكونوا شهودًا
            على أجمل بداية في حياتنا. فحضوركم يضيء هذه اللحظة
            ويجعلها أكمل وأجمل، ونحن في غاية السعادة لمشاركتكم هذا الفرح.
          </p>

          <Button onClick={scrollToDetails} size="lg" className="welcome-btn">
            Join Us
            <ArrowDown className="arrow-icon" />
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="decor decor-top" />
      <div className="decor decor-bottom" />
    </section>
  );
}