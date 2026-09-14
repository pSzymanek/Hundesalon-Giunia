import { Heart, Phone, Mail, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  onOpenLegal: (type: "impressum" | "datenschutz" | "agb") => void;
  onOpenBooking: () => void;
}

export const Footer = ({ onOpenLegal, onOpenBooking }: FooterProps) => {
  return (
    <footer className="bg-[#181615] text-stone-300 pt-16 pb-12 border-t border-stone-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/95 p-3 rounded-2xl inline-block shadow-sm">
              <img
                src="/logo.png"
                alt="Hundesalon Giunia Logo"
                className="h-14 w-auto object-contain"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Exklusiver Salon für Hunde und Katzen. Liebevolles Grooming, rassetypische Scherenschnitte,
              schonende Unterwollentfernung und Ultraschall-Zahnreinigung ohne Narkose und ohne Stress.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><Link to="/" className="hover:text-white transition-colors">Startseite</Link></li>
              <li><Link to="/preise" className="hover:text-white transition-colors">Leistungen &amp; Preise</Link></li>
              <li><Link to="/ueber-uns" className="hover:text-white transition-colors">Über uns</Link></li>
              <li><a href="/#faq" className="hover:text-white transition-colors">Häufige Fragen (FAQ)</a></li>
              <li><a href="/#kontakt" className="hover:text-white transition-colors">Kontakt &amp; Anfahrt</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Salon &amp; Kontakt
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/place/Affenbergstr.+5,+74189+Weinsberg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Affenbergstr. 5, 74189 Weinsberg
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="tel:+491791700661" className="hover:text-white">+49 179 1700661</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:giuniahundesalon@gmail.com" className="hover:text-white">giuniahundesalon@gmail.com</a>
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all shadow-md cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Termin anfragen</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Rechtliches
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onOpenLegal("impressum")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Impressum
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal("datenschutz")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Datenschutzerklärung
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal("agb")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Salonordnung &amp; AGB
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Hundesalon Giunia. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-1.5">
            <span>Mit Liebe &amp; Hingabe für Tiere gepflegt</span>
            <Heart className="w-3.5 h-3.5 text-[var(--color-primary)] fill-current" />
          </div>
        </div>

      </div>
    </footer>
  );
};
