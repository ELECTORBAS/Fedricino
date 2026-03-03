import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/all";
import { Link } from "react-router-dom";

const Navbar = () => {

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
        scrub: 1
      }
    })

    tl.fromTo(
      "nav",
      {
        backgroundColor: "#4b3317",
      },
      {
        backgroundColor: "#5a422610",
        backdropFilter: "blur(10px)",
        duration: 1,
      },
    );
  })

  return (
    <nav>
      <div className="logo">
        <img src="/Images/logo.png" alt="logo" width={30} />
        <Link to="/">Fabricino</Link>
      </div>
      <div className="links">
        <Link to="/menu">Menu</Link>
        <a href="#About">About us</a>
        <a href="#Contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
