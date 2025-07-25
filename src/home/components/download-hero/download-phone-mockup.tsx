import TenpoMockup from "@/assets/mockups/tenpo.webp";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const DownloadPhoneMockup = () => {
  useGSAP(() => {
    gsap.fromTo("#download-phone-mockup",
      {
        x: "0vw",
        rotation: 0,
        scale: 1,
        filter: "brightness(1)"
      },
      {
        x: "-75vw",
        scale: 1.3,
        rotation: 15,
        filter: "brightness(1.1)",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#download-hero",
          start: "top top",
          end: "bottom top",
          scrub: 2,
          pin: true,
          invalidateOnRefresh: true
        }
      }
    );
  });

  return (
    <div className="absolute right-4 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 pointer-events-none">
      <img
        id="download-phone-mockup"
        src={TenpoMockup}
        alt="NeoBank App Download"
        className="w-[200px] md:w-[250px] lg:w-[300px] h-auto drop-shadow-2xl will-change-transform opacity-30 md:opacity-60"
        style={{
          filter: 'brightness(1)',
          transition: 'filter 0.3s ease-out'
        }}
      />
    </div>
  );
};
