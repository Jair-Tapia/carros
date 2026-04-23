import { supabase } from "./supabase"

export const getAutos = async () => {
  const { data } = await supabase.from("autos").select("*")
  return data || []
}

export const saveAuto = async (auto: any) => {
  await supabase.from("autos").insert([auto])
}

export const deleteAuto = async (id: number) => {
  await supabase.from("autos").delete().eq("id", id)
}