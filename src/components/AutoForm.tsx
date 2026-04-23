import { useState } from "react"
import { categorias } from "../data/categorias"
import "../styles.css"
import { supabase } from "../services/supabase"

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

function AutoForm() {

  const [form, setForm] = useState<Omit<Auto, "id">>({
    marca: "",
    modelo: "",
    imagen: "",
    descripcion: "",
    precio: "" as number | "",
    ubicacion: "",
    publicacion: ""
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: name === "precio"
  ? (value === "" ? "" : Number(value))
  : value
    })
  }

const agregarAuto = async () => {
  if (!form.marca || !form.modelo) return

  const nuevo = {
    marca: form.marca,
    modelo: form.modelo,
    imagen: form.imagen,
    descripcion: form.descripcion,
    precio: form.precio,
    ubicacion: form.ubicacion,
    publicacion: form.publicacion
  }

  const { error } = await supabase.from("autos").insert([nuevo])

  if (error) {
    console.log("Error al guardar:", error)
    return
  }

  setForm({
    marca: "",
    modelo: "",
    imagen: "",
    descripcion: "",
    precio: "",
    ubicacion: "",
    publicacion: ""
  })
}

  return (
    <div className="form">
      <h2>Agregar Auto</h2>

      <input
        name="modelo"
        placeholder="Modelo"
        value={form.modelo}
        onChange={handleChange}
      />

      <select name="marca" value={form.marca} onChange={handleChange}>
        <option value="">Selecciona marca</option>
        {categorias.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <input
        name="imagen"
        placeholder="URL imagen"
        value={form.imagen}
        onChange={handleChange}
      />

      {/* 👇 NUEVO */}
      <textarea
        name="descripcion"
        placeholder="Descripción"
        value={form.descripcion}
        onChange={handleChange}
      />

      <input
        name="ubicacion"
        placeholder="Link ubicación"
        value={form.ubicacion}
        onChange={handleChange}
      />

      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={form.precio}
        onChange={handleChange}
      />
      <input
        name="publicacion"
        placeholder="Link publicación"
        value={form.publicacion}
        onChange={handleChange}
      />

      <button onClick={agregarAuto}>Agregar</button>
    </div>
  )
}

export default AutoForm