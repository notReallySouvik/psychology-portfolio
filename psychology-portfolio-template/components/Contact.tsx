import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <Reveal>
      <section className="contact">
        <div className="contact-inner">
          <div className="contact-text">
            <h2>Contact</h2>
            <p>
              For academic collaboration, research opportunities, or general
              inquiries, feel free to reach out.
            </p>

            <div className="contact-details">
              <a href="mailto:example@email.com">
                📧 example@email.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼 LinkedIn Profile
              </a>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows={4}></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </Reveal>
  );
}