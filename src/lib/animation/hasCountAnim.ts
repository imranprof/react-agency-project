
import gsap, { Power1 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const hasCountAnim = (
  element: any,
  count?: any
) => {

  ScrollTrigger.create({
    trigger: element,
    start: "bottom bottom",
    once: true,
    onEnter: () => {
      gsap.fromTo(
        element,
        { textContent: 0 }, // Start counting from 0
        {
          textContent: count || 150, // Animate to 150
          duration: 1.5,
          ease: "power1.inOut",
          snap: { textContent: 1 }
        }
      );
    }
  });
}

export default hasCountAnim