import { Heart } from 'lucide-react';
import './es.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Heart className="footer-heart" />

        <h2 className="footer-title">
          لحظات لا تكتمل فرحتها إلا بحضوركم
        </h2>

        <p className="footer-quote">
          "حضوركم يضيء هذه اللحظة الغالية على قلوبنا،
          ويزيدها بهجة وجمالاً.
          نتمنى أن تكونوا معنا لنبدأ معًا
          أجمل فصول حياتنا."
        </p>

        <div className="footer-divider" />

        <div className="footer-names">
          <p className="names">Mohammed & Dina</p>
          <p className="copyright"> © 2026</p>
        </div>
      </div>

      {/* Background Shape */}
      <div className="footer-bg">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" />
        </svg>
      </div>
    </footer>
  );
}