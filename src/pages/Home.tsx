import { useEffect, useState } from "react"
import AutoForm from "../components/AutoForm"
import AutoList from "../components/AutoList"
import { getAutos, saveAutos } from "../services/localStorage"
import "../styles.css"

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

function Home() {
  const [autos, setAutos] = useState<Auto[]>([])

  useEffect(() => {
    setAutos(getAutos())
  }, [])

  useEffect(() => {
    saveAutos(autos)
  }, [autos])

  return (
    <div className="container">
      <h1>Autos</h1>

      <AutoForm autos={autos} setAutos={setAutos} />
      <AutoList autos={autos} setAutos={setAutos} />
    </div>
  )
}

export default Home