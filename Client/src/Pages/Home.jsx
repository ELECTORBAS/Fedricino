import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
gsap.registerPlugin(SplitText)

import About from '../Pages/About'
import Contact from '../Pages/Contact'

const Home = () => {

  useGSAP(()=> {

    const chars = new SplitText('.title', {type: 'chars'})
    const lines = new SplitText('.fade-in', {type: 'lines'})

    const tl = gsap.timeline();
    
    tl.from(chars.chars, {
      opacity: 0,
      y: 50,
      stagger: 0.05,
      duration: 1.8,
      ease: 'power3.out'
    })
    tl.from(lines.lines, {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.05
    })

  })

  return (
    <>
      <section id="Home">
        <h1 className="title ">FABRICINO</h1>
        <div className="body z-10">
          <div className="content">
              <p className="fade-in">
                The finest Cuisine
                <br />
                <span>Money Can BUY</span>
              </p>
              <p className="fade-in">
                Menu that makes you crave for More.<br />View our menu.<br />
                <a href="/menu">View Menu</a>
              </p>
          </div>
        </div>
        {/* <div className="Video absolute inset-0">
          <video src="Videos/bg.mov" muted />
        </div> */}
      </section>
      <About />
      <Contact />
    </>
  );
};

export default Home;
