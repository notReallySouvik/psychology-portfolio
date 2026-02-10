import Reveal from "@/components/Reveal";
export default function Skills() {
  return (
    <Reveal>
      <section className="skills">
        <div className="skills-inner">
          <h2>Skills</h2>
          <p className="skills-subtitle">
            Academic, analytical, and technical competencies developed through
            coursework and independent practice.
          </p>

          <div className="skills-grid">
            <div className="skills-card">
              <h3>Psychological Skills</h3>
              <div className="skills-list">
                <span>Psychological Assessment</span>
                <span>Clinical Observation</span>
                <span>Cognitive Analysis</span>
                <span>Behavioral Interpretation</span>
                <span>Case Study Writing</span>
              </div>
            </div>

            <div className="skills-card">
              <h3>Research & Analysis</h3>
              <div className="skills-list">
                <span>Literature Review</span>
                <span>Qualitative Research</span>
                <span>Quantitative Analysis</span>
                <span>Data Interpretation</span>
                <span>SPSS / R (Placeholder)</span>
              </div>
            </div>

            <div className="skills-card">
              <h3>Professional & Technical</h3>
              <div className="skills-list">
                <span>Academic Writing</span>
                <span>Presentation Skills</span>
                <span>Ethical Research Practice</span>
                <span>Basic Programming (Placeholder)</span>
                <span>Digital Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}