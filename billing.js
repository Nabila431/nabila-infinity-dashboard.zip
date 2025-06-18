import { supabase } from "@/lib/supabaseClient";

export default async function handler(req, res) {
  const { data, error } = await supabase.from("users").select("username, email, credit");
  if (error) return res.status(500).json({ error });
  res.status(200).json(data);
}