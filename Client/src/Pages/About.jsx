import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText)

const About = () => {

  useGSAP(() => {

    const container = new SplitText('.container', {type: 'lines'})

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#About',
        start: 'top 10%',
        end: 'bottom 60%'
      }
    })
    container.lines.forEach(lines => {
      tl.from(lines, {
        opacity: 0,
        y: 50,
        ease: 'power2.out',
        duration: 0.4,
        stagger: 0.05
      })
    })
    
  })

  return (
    <section id="About">
      <div className="container mt-11">
        <h1>About us</h1>
        <h2>Our Story</h2>
        <p>We are from Pakistan and we love to make delicious food.</p>
        <div className="points">
          <p><span>5+</span>years of experience <span>|</span></p>
          <p><span>1000+</span>satisfied customers <span>|</span></p>
          <p><span>10+</span>Branches across Pakistan</p>
        </div>
        <div className="bento">
          <img src="" alt="Bento1" />
          <img src="" alt="Bento2" />
          <img src="" alt="Bento3" />
          <img src="" alt="Bento4" />
        </div>
      </div>
    </section>
  );
};

export default About;
