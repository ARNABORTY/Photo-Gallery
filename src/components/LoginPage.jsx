import { useEffect, useState } from 'react'

const loginPhotos = [
  { src: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Ducati racing motorcycle at the start line' },
  { src: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Red Ducati racing motorcycle' },
  { src: 'https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Ducati motorcycle on a race circuit' },
]

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('alex@framefolk.com')
  const [password, setPassword] = useState('password')
  const [activePhoto, setActivePhoto] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActivePhoto((currentPhoto) => (currentPhoto + 1) % loginPhotos.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin(email.toLowerCase().includes('admin') ? 'admin' : 'member', email)
  }

  return (
    <section className="auth-shell">
      <div className="auth-art">
        <div className="login-photo-stack" aria-label="Featured gallery photos">
          {loginPhotos.map((photo, index) => (
            <img
              className={index === activePhoto ? 'login-photo is-active' : 'login-photo'}
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
            />
          ))}
        </div>
        <div className="login-photo-shade" />
        <p className="eyebrow">Framefolk / 01</p>
        <h1>Keep the good light.</h1>
        <p>One calm home for the photographs worth remembering.</p>
        <div className="auth-art-note">Private by default. Shared with intention.</div>
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <span className="form-kicker">Welcome back</span>
        <h2>Sign in to your gallery</h2>
        <p className="form-copy">Enter your details to pick up where you left off.</p>
        <label>Email address<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label>
        <label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
        <button className="primary-button" type="submit">Enter gallery <span aria-hidden="true">-&gt;</span></button>
        <p className="demo-hint">Try <strong>admin@framefolk.com</strong> to preview the admin view.</p>
      </form>
    </section>
  )
}

export default LoginPage
