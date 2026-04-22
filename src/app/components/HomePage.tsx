import { HeroSection } from "./HeroSection";
import { BrandStory } from "./BrandStory";
import { MediaGrid } from "./MediaGrid";
import { FeaturedBanner } from "./FeaturedBanner";
import { BestSellers } from "./BestSellers";
import { Collaboration } from "./Collaboration";
import { BlogSection } from "./BlogSection";
import { Newsletter } from "./Newsletter";
import { PatternDivider } from "./PatternDivider";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandStory />
      <MediaGrid />
      <FeaturedBanner />
      <BestSellers />
      <Collaboration />
      <BlogSection />
      <Newsletter />
    </>
  );
}
