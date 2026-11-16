import { useState } from 'react'
import left from '../assets/arrow-left.svg'
import right from '../assets/arrow-right.svg'
import './Gallery.css'

export default function Gallery({ images, width = '100%', height = 400, radius = '0px', showThumbs, className = '' }) {
  const [i, setI] = useState(0)
  const num = v => (/^\d+(px)?$/.test(String(v)) ? parseInt(v) : null)
  const wn = num(width), hn = num(height)
  const w = wn ? `${wn}px` : width
  // com medidas em px, usa proporção (a altura acompanha a largura em telas menores)
  const viewSize = wn && hn ? { aspectRatio: `${wn} / ${hn}` } : { height: hn ? `${hn}px` : height }
  return (
    <div className={`gallery ${className}`} style={{ width: w, maxWidth: '100%' }}>
      <div className="gallery-view" style={{ ...viewSize, borderRadius: radius }}>
        <div className="gallery-track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {images.map((img, k) => <img key={k} src={img.src} alt={`Imagem ${k + 1}`} />)}
        </div>
        <button className="arrow l" disabled={i === 0} onClick={() => setI(i - 1)} aria-label="Anterior"><img src={left} alt="" /></button>
        <button className="arrow r" disabled={i === images.length - 1} onClick={() => setI(i + 1)} aria-label="Próxima"><img src={right} alt="" /></button>
      </div>
      {showThumbs && (
        <div className="gallery-thumbs">
          {images.map((img, k) => (
            <img key={k} src={img.src} alt="" onClick={() => setI(k)}
              className={k === i ? 'selected' : ''} style={{ borderRadius: radius }} />
          ))}
        </div>
      )}
    </div>
  )
}
