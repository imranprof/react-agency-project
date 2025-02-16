
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const hasImageReveal = (
  imgReveal: any,
  start?: string
) => {

  let pos = start ? start : "80%"
  if (imgReveal) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgReveal,
        start: `center ${pos}`,
      },
    });

    tl.set(imgReveal, { autoAlpha: 1 });
    tl.from(imgReveal, {
      duration: 1.5,
      xPercent: -100, // Slide in from left
      ease: "power2.out",
    });
  }
}

export default hasImageReveal