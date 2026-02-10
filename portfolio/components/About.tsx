export default function About() {
  return (
    <section className="about">
      <div className="about-grid">
        {/* Left: Visual */}
        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc"
            alt="Psychology themed visual"
          />
        </div>

        {/* Right: Text */}
        <div className="about-content">
          <h2>About</h2>

          <p className="about-lead">
            I am a psychology student with a growing interest in how internal
            mental processes shape outward behavior.
          </p>

          <p>
            My academic focus lies in cognition, emotional regulation, and the
            subtle mechanisms that guide everyday decision-making. I am
            particularly interested in how theoretical frameworks translate
            into lived human experience.
          </p>

          <p>
            I approach psychology as both a science and a reflective discipline.
            Through coursework, independent reading, and early research
            exposure, I aim to build a thoughtful, ethical, and research-driven
            foundation.
          </p>
        </div>
      </div>
    </section>
  );
}
