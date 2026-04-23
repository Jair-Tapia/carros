import "../styles.css"

type Auto = {
  id: number
  marca: string
  modelo: string
  imagen: string
  descripcion: string
  precio: number,
  ubicacion: string
  publicacion: string
}

type Props = {
  auto: Auto | null
  onClose: () => void
}

function AutoModal({ auto, onClose }: Props) {
  if (!auto) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>✖</span>

        <img src={auto.imagen} className="modal-img" />

        <h2>{auto.marca} - {auto.modelo}</h2>
<h4>S/ {auto.precio}</h4>
        <p>{auto.descripcion}</p>

        <div className="modal-links">
          <a href={auto.ubicacion} target="_blank">Ubicación</a>
          <a href={auto.publicacion} target="_blank">Publicación</a>
        </div>
      </div>
    </div>
  )
}

export default AutoModal