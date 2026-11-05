function HomePage({ onNavigate }) {
  return (
    <section className="page-card home-page">
      <div className="home-hero">
        <div>
          <p className="eyebrow">New experience</p>
          <h2>Bring your favorite moments to life</h2>
          <p>
            Create a warm welcome for your visitors with a story-driven home page,
            highlights, and quick access to the gallery.
          </p>
        </div>
        <div className="home-badge">✨ Curated memories</div>
      </div>

      <div className="home-highlights">
        <div className="highlight-card">
          <strong>4+</strong>
          <span>Featured photos</span>
        </div>
        <div className="highlight-card">
          <strong>100%</strong>
          <span>Responsive layout</span>
        </div>
        <div className="highlight-card">
          <strong>1</strong>
          <span>Click to preview</span>
        </div>
      </div>

      <div className="home-cta">
        <p>Ready to explore the full collection?</p>
        <button type="button" onClick={() => onNavigate('gallery')}>
          Visit Gallery
        </button>
      </div>
    </section>
  )
}

export default HomePage;
