import Reveal from "@/components/Reveal";
export default function ResearchInterests() {
  return (
    <Reveal>
      <section className="research">
        <div className="research-inner">
          <div className="research-text">
            <h2>Research Interests</h2>
            <p>
              Areas of psychology that spark curiosity, guide academic exploration,
              and shape long-term research goals.
            </p>
          </div>

          <div className="research-grid">
            <div className="research-card">
              <span className="research-icon">🧠</span>
              <h3>Cognitive Processes</h3>
              <p>
                Exploring attention, memory, perception, and decision-making
                through experimental and theoretical approaches.
              </p>
            </div>

            <div className="research-card">
              <span className="research-icon">🧪</span>
              <h3>Clinical Psychology</h3>
              <p>
                Interest in assessment, diagnosis, and evidence-based therapeutic
                interventions.
              </p>
            </div>

            <div className="research-card">
              <span className="research-icon">📊</span>
              <h3>Behavioral Data Analysis</h3>
              <p>
                Using data-driven methods to uncover behavioral patterns and
                psychological trends.
              </p>
            </div>

            <div className="research-card">
              <span className="research-icon">🌱</span>
              <h3>Developmental Psychology</h3>
              <p>
                Understanding emotional and cognitive development across different
                life stages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}