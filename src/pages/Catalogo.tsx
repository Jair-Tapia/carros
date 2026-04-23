import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getAutos } from "../services/localStorage"
import AutoItem from "../components/AutoItem"
import { categorias } from "../data/categorias"
import Header from "../components/Header"
import AutoModal from "../components/AutoModal"
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

function Catalogo() {
    const [autos, setAutos] = useState<Auto[]>([])
    const [categoria, setCategoria] = useState<string>("")
    const [autoSeleccionado, setAutoSeleccionado] = useState<Auto | null>(null)
    const location = useLocation()

    // 🔥 Cargar datos cada vez que cambias de página
    useEffect(() => {
        const data = getAutos()
        setAutos(data)
    }, [location])

    const autosFiltrados = categoria
        ? autos.filter(a => a.marca === categoria)
        : autos

    return (
        <div className="container">
            <Header />
            <h1>Catálogo de Autos</h1>

            {/* BOTONES DE FILTRO */}
            <div className="filtros">
                <button
                    className={`filtro-btn ${categoria === "" ? "activo" : ""}`}
                    onClick={() => setCategoria("")}
                >
                    Todos
                </button>

                {categorias.map(cat => (
                    <button
                        key={cat}
                        className={`filtro-btn ${categoria === cat ? "activo" : ""}`}
                        onClick={() => setCategoria(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* LISTA */}
            <div className="list">
                {autosFiltrados.length === 0 ? (
                    <p>No hay autos en esta categoría</p>
                ) : (
                    autosFiltrados.map(auto => (
                        <div key={auto.id} onClick={() => setAutoSeleccionado(auto)}>
                            <AutoItem auto={auto} />
                        </div>
                    ))
                )}
            </div>
            <AutoModal
                auto={autoSeleccionado}
                onClose={() => setAutoSeleccionado(null)}
            />
        </div>
    )
}

export default Catalogo