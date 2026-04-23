import AutoItem from "./AutoItem"
import "../styles.css"
type Auto = {
  id: number
  marca: string
  modelo: string
  imagen: string
  descripcion : string
  precio: number | "",
  ubicacion: string
  publicacion: string
}

type Props = {
  autos: Auto[]
  setAutos: React.Dispatch<React.SetStateAction<Auto[]>>
}

function AutoList({ autos, setAutos }: Props) {

  const eliminarAuto = (id: number) => {
    setAutos(autos.filter(a => a.id !== id))
  }

return (
  <div className="list">
    {autos.length === 0 && <p>No hay autos</p>}

    {autos.map(auto => (
      <AutoItem
  key={auto.id}
  auto={auto}
  eliminar={eliminarAuto}
  mostrarDescripcion={true} // 👈 importante
/>
    ))}
  </div>
)
}

export default AutoList