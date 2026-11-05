import { useRef, useState } from 'react'

function GalleryPage({ photos, onUpload, showUpload, setShowUpload }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [category, setCategory] = useState('All')
  const fileInputRef = useRef(null)

  const addPhotos = (fileList) => {
    const files = Array.from(fileList)
    const newPhotos = files
      .filter((file) => file.type.startsWith('image/'))
      .map((file, index) => ({
        id: `${file.name}-${file.lastModified}-${index}`,
        title: file.name.replace(/\.[^/.]+$/, ''),
        category: 'Personal',
        location: 'Personal collection',
        src: URL.createObjectURL(file),
      }))

    onUpload(newPhotos)
  }

  const handleUpload = (event) => {
    addPhotos(event.target.files ?? [])
    event.target.value = ''
  }

  const handleDrop = (event) => {
    event.preventDefault()
    setIsDragging(false)
    addPhotos(event.dataTransfer.files)
    setShowUpload(false)
  }

  return (
    <section className="page-card">
      <div className="hero gallery-hero">
        <div><p className="eyebrow">The collection / 04</p><h1>Images with a point of view.</h1></div>
        <p className="subtitle">
          Browse the shared collection, or add a few moments of your own.
        </p>
      </div>

      {showUpload && <div
        className={`upload-panel${isDragging ? ' is-dragging' : ''}`}
        onDragEnter={(event) => {
          event.preventDefault()
          setIsDragging(true)
        }}
        onDragOver={(event) => event.preventDefault()}
        onDragLeave={(event) => {
          if (event.currentTarget === event.target) setIsDragging(false)
        }}
        onDrop={handleDrop}
      >
        <div>
          <p className="upload-label">Personal collection</p>
          <h2>Add your own memories</h2>
          <p>Browse any folder or drive on your device, or drag photos here.</p>
        </div>
        <button
          type="button"
          className="upload-button"
          onClick={() => fileInputRef.current?.click()}
        >
          <span aria-hidden="true">+</span>
          Browse device
        </button>
        <input
          ref={fileInputRef}
          className="photo-file-input"
          type="file"
          accept="image/*"
          multiple
          onChange={handleUpload}
        />
      </div>}

      <div className="gallery-toolbar"><div className="category-tabs">{['All', 'Travel', 'Portraits', 'Places', 'Nature', 'Animal', 'MotoGP', 'Formula 1', 'Ducati Racing'].map((item) => <button type="button" className={category === item ? 'selected' : ''} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div><button className="text-button" type="button" onClick={() => setShowUpload(true)}>+ Upload images</button></div>

      {photos.filter((photo) => category === 'All' || photo.category === category).length === 0 ? (
        <div className="gallery-grid" aria-label="Empty gallery">
          <div className="gallery-card empty-gallery-card">
            <div className="card-info">
              <h2>No photos uploaded yet</h2>
              <p>Add your first image using the upload section above.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="gallery-grid" aria-label="Photo gallery">
          {photos.filter((photo) => category === 'All' || photo.category === category).map((photo) => (
            <button
              key={photo.id}
              type="button"
              className="gallery-card"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img src={photo.src} alt={photo.title} loading="lazy" />
              <div className="card-info">
                <h2>{photo.title}</h2>
                <p>{photo.location}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {selectedPhoto && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <img src={selectedPhoto.src} alt={selectedPhoto.title} />
            <div className="modal-content">
              <div>
                <h3>{selectedPhoto.title}</h3>
                <p>{selectedPhoto.location}</p>
              </div>
              <button type="button" onClick={() => setSelectedPhoto(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default GalleryPage;
