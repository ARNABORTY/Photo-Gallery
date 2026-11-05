const benefits = [
  { number: '01', title: 'A home for every story', text: 'Group the moments that matter into clear, easy-to-browse collections.' },
  { number: '02', title: 'Upload without friction', text: 'Drop in one image or a whole folder and see it appear instantly.' },
  { number: '03', title: 'Share at your pace', text: 'Keep your library private while you decide which memories to make public.' },
]

function DashboardPage({ user, photos, onNavigate, onOpenUpload }) {
  const recentPhotos = photos.slice(0, 3)

  return (
    <section className="dashboard-page">
      <div className="dashboard-intro">
        <div>
          <p className="eyebrow">Your space / {user.name}</p>
          <h1>Good to see you, {user.firstName}.</h1>
          <p className="subtitle">A thoughtful home for the images you want to keep close.</p>
        </div>
        <button className="primary-button" type="button" onClick={onOpenUpload}>+ Add photos</button>
      </div>

      <div className="dashboard-grid">
        <div className="stat-panel featured-stat"><span>Library total</span><strong>{photos.length + 12}</strong><small>images in your collection</small></div>
        <div className="stat-panel"><span>Collections</span><strong>04</strong><small>organized and growing</small></div>
        <div className="stat-panel"><span>Storage used</span><strong>18%</strong><small>of your private space</small></div>
      </div>

      <div className="section-heading"><div><span className="form-kicker">A little inspiration</span><h2>Recent additions</h2></div><button className="text-button" type="button" onClick={() => onNavigate('gallery')}>View all -&gt;</button></div>
      <div className="dashboard-photos">
        {recentPhotos.map((photo) => <button className="mini-photo" type="button" key={photo.id} onClick={() => onNavigate('gallery')}><img src={photo.src} alt={photo.title} /><span>{photo.title}</span></button>)}
        {recentPhotos.length === 0 && <button className="upload-empty" type="button" onClick={onOpenUpload}>Your latest memories will land here.<strong>Upload your first photo -&gt;</strong></button>}
      </div>

      <div className="section-heading benefits-heading"><div><span className="form-kicker">Why Framefolk</span><h2>Made for the way you remember</h2></div></div>
      <div className="benefits-grid">{benefits.map((benefit) => <article className="benefit" key={benefit.number}><span>{benefit.number}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div>
    </section>
  )
}

export default DashboardPage
