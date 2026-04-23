type Auto = {
  id: number
  marca: string
  modelo: string
  imagen: string
  descripcion: string
precio: number | ""
  ubicacion: string
  publicacion: string
}

type Props = {
  auto: Auto
  eliminar?: (id: number) => void
  mostrarDescripcion?: boolean // 👈 ESTO FALTABA
}

function AutoItem({ auto, eliminar, mostrarDescripcion }: Props) {
  return (
    <div className="card">
      {auto.imagen && <img src={auto.imagen} />}

      <div className="card-content">
        <h3>{auto.marca} - {auto.modelo}</h3>
        <h4 className="precio">S/ {auto.precio}</h4>
        {/* 👇 SOLO SI SE ACTIVA */}
        {mostrarDescripcion && (
          <p>{auto.descripcion}</p>
        )}

        <a href={auto.ubicacion} target="_blank">Ubicación</a>
        <a href={auto.publicacion} target="_blank">Publicación</a>

        {eliminar && (
          <button onClick={() => eliminar(auto.id)}>
            Eliminar
          </button>
        )}
      </div>
    </div>
  )
}

export default AutoItem