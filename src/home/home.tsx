import {MainHero} from "@/home/components/main-hero/main-hero.tsx";
import {FeaturesHero} from "@/home/components/features-hero/features-hero.tsx";
import {SecurityHero} from "@/home/components/security-hero/security-hero.tsx";
import {TestimonialsHero} from "@/home/components/testimonials-hero.tsx";
import {DownloadHero} from "@/home/components/download-hero/download-hero.tsx";

const Home = () => {

  return <>
    <MainHero/>
    <FeaturesHero/>
    <SecurityHero/>
    <TestimonialsHero/>
    <DownloadHero/>
  </>
}

export default Home;