
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SplitText } from '@/lib/plugins'


gsap.registerPlugin(ScrollTrigger);


const hasTextMovAnim = (element: any) => {

  if (element) {
    let delayValue = 0.1;

    if (element.getAttribute("data-delay")) {
      delayValue = parseFloat(element.getAttribute("data-delay") || "0");
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });

    const itemSplitted = new SplitText(element, { type: "lines" });

    gsap.set(element, { perspective: 400 });

    tl.from(itemSplitted.lines, {
      duration: 1,
      delay: delayValue,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    });

  }
}


export default hasTextMovAnim;