import Image from 'next/image';
import { Heart } from 'lucide-react';
import './es.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background */}
      <div className="hero-bg">
        <Image
          src="/bg1.jpeg"
          alt="Mohammed and Dina"
          fill
          priority
          className="hero-bg-img"
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <span className="hero-subtitle">Save The Date</span>

        <div className="hero-names">
          <h1 className="hero-name delay-200">Mohammed</h1>

          <div className="hero-heart delay-400">
            <Heart />
          </div>

          <h1 className="hero-name delay-600">Dina</h1>
        </div>

        {/* Date */}
        <div className="hero-date delay-800">
          <div className="line" />

          <p className="date-number">24 . 07 . 2026</p>

          <div className="date-details">
            <p className="day2">Thursday | الخميس</p>

            <div className="location">
              <p>Lorev Hall | قاعة لوريف</p>
            </div>
          </div>

          <div className="line" />
        </div>
      </div>
    </section>
  );
}