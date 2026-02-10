import Reveal from "@/components/Reveal";
export default function Hero() {
  return (
    <Reveal>
      <section className="hero">
        <div className="hero-grid">
          {/* LEFT: TEXT */}
          <div className="hero-content">
            <p className="hero-name">Hi, I’m <span>Your Name</span></p>
            <p className="hero-eyebrow">Psychology Student</p>

            <h1>
              Understanding the mind,<br />
              one question at a time.
            </h1>

            <p className="hero-subtext">
              Academic portfolio focused on cognition, behavior, and psychological
              research.
            </p>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136"
              alt="Portrait placeholder"
            />
          </div>
        </div>
      </section>
    </Reveal>
  );
}