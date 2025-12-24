export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="page-footer">
      <div className="copyright">
        © {currentYear} Ömer Şerif Yıldız. All rights reserved.
      </div>

      <div className="system-status-minimal">
        <div className="status-indicator">
          <span className="status-dot-pulse"></span>
          <span className="status-dot-center"></span>
        </div>
        <span className="version-tag">v1.0.0</span>
      </div>
    </footer>
  )
}