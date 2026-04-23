import { useEffect, useState } from "react"
import AutoForm from "../components/AutoForm"
import AutoList from "../components/AutoList"
import Header from "../components/Header"
import { supabase } from "../services/supabase"
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

  // 🔥 CARGAR desde base de datos
  useEffect(() => {
    const fetchAutos = async () => {
      const { data, error } = await supabase
        .from("autos")
        .select("*")

      if (error) {
        console.log(error)
        return
      }

      setAutos(data || [])
    }

    fetchAutos()
  }, [])

  return (
    <div className="container">
      <Header />

      <h1>Panel Admin</h1>

      <AutoForm/>
      <AutoList autos={autos} setAutos={setAutos} />
    </div>
  )
}

export default Admin