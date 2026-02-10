import Reveal from "@/components/Reveal";
export default function CV() {
  return (
    <Reveal>
      <section className="cv">
        <div className="cv-inner">
          <h2>Curriculum Vitae</h2>
          <p>
            A concise overview of academic background, research experience, and
            professional skills.
          </p>

          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button"
          >
            Download CV
          </a>
        </div>
      </section>
    </Reveal>
  );
}