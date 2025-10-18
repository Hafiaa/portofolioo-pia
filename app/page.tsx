import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutSection from "@/components/AboutSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Projects */}
      <section className="border-t border-neutral-200">
        <div className="container">
          <FeaturedProjects />
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-neutral-200 bg-white/60">
        <div className="container">
          <AboutSection />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-neutral-200">
        <div className="container">
          <ContactCTA />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
