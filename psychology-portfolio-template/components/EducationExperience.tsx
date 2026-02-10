import Reveal from "@/components/Reveal";
export default function EducationExperience() {
  return (
    <Reveal>
      <section className="timeline">
        <div className="timeline-inner">
          <h2>Education & Experience</h2>

          <div className="timeline-container">
            <div className="timeline-item">
              <span className="timeline-year">2024 – Present</span>
              <div className="timeline-card">
                <h3>Bachelor’s in Psychology</h3>
                <p className="timeline-place">University Name (Placeholder)</p>
                <p>
                  Coursework focused on cognitive psychology, research methods,
                  and psychological assessment.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-year">2023</span>
              <div className="timeline-card">
                <h3>Research Assistant (Placeholder)</h3>
                <p className="timeline-place">Institution / Lab Name</p>
                <p>
                  Assisted in literature reviews, data organization, and basic
                  statistical analysis.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-year">2022</span>
              <div className="timeline-card">
                <h3>Academic Internship</h3>
                <p className="timeline-place">Organization Name</p>
                <p>
                  Gained exposure to applied psychological work, documentation,
                  and ethical research practices.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-year">2021</span>
              <div className="timeline-card">
                <h3>Higher Secondary Education</h3>
                <p className="timeline-place">School Name</p>
                <p>
                  Developed foundational interest in psychology, biology, and
                  human behavior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
