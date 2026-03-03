
const Contact = () => {
  return (
    <section id="Contact">
      <div className="contain">
        <h1>Contact</h1>
        <form>
          <input type="text" id="First" placeholder="First Name" required />
          <input type="text" id="Last" placeholder="Last Name" required />
          <input type="email" id="email" placeholder="Email" required />
          <input type="text" id="pho" placeholder="Phone Number" required />
          <textarea
            name="message"
            id="message"
            fixed
            placeholder="Additional information"
          ></textarea>
          <button type="submit">Submit</button>
          ---or---
          <div className="links">
            <a href="https://www.instagram.com/nxs._a1">
              <img src="/Images/instagram.png" alt="Instagram" width={30} />
            </a>

            <a href="https://github.com/ELECTORBAS/ELECTORBAS">
              <img src="/Images/github.png" alt="Github" width={30} />
            </a>

            <a href="https://pk.linkedin.com">
              <img src="/Images/linkedin.png" alt="Linkedin" width={30} />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact