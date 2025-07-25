import TenpoMockup from "@/assets/mockups/tenpo.webp";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

export const PhoneMockup = () => {
  useGSAP(() => {
    gsap.fromTo("#phone-mockup",
      {
        scale: 0.5,
        rotation: 0,
        y: 100,
        filter: "brightness(1)"
      },
      {
        scale: 1.3,
        rotation: 15,
        y: -300,
        filter: "brightness(1.05)",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#phone-mockup",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
          invalidateOnRefresh: true
        }
      }
    );
  });

  return (
    <img
      id={"phone-mockup"}
      src={TenpoMockup}
      alt={"NeoBank App"}
      className={"mx-auto drop-shadow-2xl w-[300px] md:w-[400px] xl:w-[450px] h-auto will-change-transform"}
      style={{
        filter: 'brightness(1)',
        transition: 'filter 0.3s ease-out'
      }}
    />
  )
}