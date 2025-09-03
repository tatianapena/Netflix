import { supabase } from "./supabase";

export type Show = {
  id: number;
  slug: string;
  title: string;
  synopsis: string;
  created_at: string;
  popularity: number;
  poster_url: string;
  category_id: number;
};

export type Episode = {
  id: number;
  title: string;
  episode_number: number;
  created_at: string;
  show_id: number;
  description: string;
  season_number: number;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  created_at: string;
};

export async function fetchShows(): Promise<
  (Show & { category?: Category })[]
> {
  let { data: shows, error } = await supabase.from("shows").select("*");
  if (error) throw new Error(error.message);
  return shows ?? [];
}

export async function fetchShowsGroupedByCategory(): Promise<
  (Category & { shows: Show[] })[]
> {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("id, name, slug, created_at, shows(*)");

  if (error) throw new Error(error.message);
  return categories ?? [];
}

export async function fetchShowById(
  id: number
): Promise<Show & { episodes?: Episode[]; category?: Category }> {
  const { data, error } = await supabase
    .from("shows")
    .select("*, episodes(*), category:categories(*)")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}
