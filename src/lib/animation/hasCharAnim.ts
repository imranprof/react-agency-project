
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SplitText } from '@/lib/plugins'


gsap.registerPlugin(ScrollTrigger);


const hasCharAnim = (element: any) => {


  if (element) {

    const split = new SplitText(element, { type: "chars, words" });

    const chars = split.chars;

    const excludeChars = element.querySelectorAll(".no-animate");
    const animateChars = Array.from(chars).filter((char: any) => {
      return !Array.from(excludeChars).some((exclude) => {

        const excludeElement = exclude as HTMLElement;
        return excludeElement.contains(char);
      });
    });


    gsap.fromTo(
      animateChars,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.05,
        duration: 1.5,
        ease: "power2.out",
      }
    );
  }

}


export default hasCharAnim;