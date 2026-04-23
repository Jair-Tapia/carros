export const getAutos = () => {
  try {
    return JSON.parse(localStorage.getItem("autos") || "[]")
  } catch {
    return []
  }
}

export const saveAutos = (autos: any[]) => {
  localStorage.setItem("autos", JSON.stringify(autos))
}