import { useEffect, useState } from "react"
import AutoForm from "../components/AutoForm"
import AutoList from "../components/AutoList"
import { getAutos, saveAutos } from "../services/localStorage"
import Header from "../components/Header"
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

function Admin() {
  const [autos, setAutos] = useState<Auto[]>([])
  const [loaded, setLoaded] = useState(false)

  // 🔥 1. Cargar datos primero
  useEffect(() => {
    const data = getAutos()
    setAutos(data)
    setLoaded(true)
  }, [])

  // 🔥 2. Guardar SOLO después de cargar
  useEffect(() => {
    if (loaded) {
      saveAutos(autos)
    }
  }, [autos, loaded])

  return (
    <div className="container">
      <Header />

      <h1>Panel Admin</h1>
      <AutoForm autos={autos} setAutos={setAutos} />
      <AutoList autos={autos} setAutos={setAutos} />
    </div>
  )
}

export default Admin