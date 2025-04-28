
import { Helmet } from "react-helmet-async";
import NavbarWrapper from "@/components/NavbarWrapper";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AIAgentsSection from "@/components/AIAgentsSection";
import BenefitsSection from "@/components/BenefitsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ThemePaletteSwitcher from "@/components/ThemePaletteSwitcher";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>WhiteTable.ai | AI Agents for Modern Hiring</title>
        <meta name="description" content="WhiteTable.ai provides AI agents designed to simplify modern hiring with efficient search, structured evaluation, and faster decisions." />
        <meta name="keywords" content="AI hiring, recruitment tools, resume parser, candidate evaluation, HR tech, hiring automation" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="WhiteTable.ai | AI Agents for Modern Hiring" />
        <meta property="og:description" content="Smarter hiring starts here—with AI agents and tools designed for efficient search, structured evaluation, and faster decisions." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WhiteTable.ai | AI Agents for Modern Hiring" />
        <meta name="twitter:description" content="Smarter hiring starts here—with AI agents and tools designed for efficient search, structured evaluation, and faster decisions." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <NavbarWrapper />
        <main>
          <HeroSection />
          <section id="products">
            <ProductsSection />
          </section>
          <section id="agents">
            <AIAgentsSection />
          </section>
          <section id="why">
            <BenefitsSection />
          </section>
          <CtaSection />
        </main>
        <Footer />
        <ThemePaletteSwitcher />
      </div>
    </>
  );
};

export default Index;
