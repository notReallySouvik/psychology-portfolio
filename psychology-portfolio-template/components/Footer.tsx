export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          © {new Date().getFullYear()} Name — Psychology Portfolio
        </p>

        <div className="footer-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </div>
      </div>
    </footer>
  );
}
