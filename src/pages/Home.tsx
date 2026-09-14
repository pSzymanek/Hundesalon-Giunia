import { Hero } from "../components/Hero";
import { ServicesPricing } from "../components/ServicesPricing";
import { FaqSection } from "../components/FaqSection";
import { ContactSection } from "../components/ContactSection";
import type { ServiceItem } from "../types";

interface HomeProps {
  onOpenBooking: () => void;
  onSelectService: (categoryName: string, service: ServiceItem) => void;
}

export function Home({ onOpenBooking, onSelectService }: HomeProps) {
  return (
    <main className="flex-grow">
      <Hero onOpenBooking={onOpenBooking} />
      <ServicesPricing onSelectService={onSelectService} />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
