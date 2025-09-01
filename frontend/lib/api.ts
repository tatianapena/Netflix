const ABS_BASE = "http://localhost:3000"

export type Shows = {
  id: number
  name: string
  shows: Show[]
}

export type Show = {
  id: number
  slug: string
  title: string
  synopsis: string
  created_at: string
  popularity: number
  poster_url: string
  category_id: number
}

export type Episode = {
  id: number
  title: string
  episode_number: number
  created_at: string
  show_id: number
  description: string
  season_number: number
}

export async function fetchShows(): Promise<Shows[]> {
  const res = await fetch(`${ABS_BASE}/shows`)
  if (!res.ok) throw new Error(`Shows fetch failed: ${res.status}`)
  return res.json()
}

export async function fetchShowById(
  id: number
): Promise<Show & { episodes?: Episode[] }> {
  const res = await fetch(`${ABS_BASE}/shows/${id}`)
  if (!res.ok) throw new Error(`Show fetch failed: ${res.status}`)
  return res.json()
}
