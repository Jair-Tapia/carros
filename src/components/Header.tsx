import { Link } from "react-router-dom"

function Header() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px"
    }}>
      <h2>Autos App</h2>

      <div>
        <Link to="/" style={{ marginRight: "10px" }}>Catálogo</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  )
}

export default Header