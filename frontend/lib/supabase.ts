import { createClient } from "@supabase/supabase-js";
import Constants from "expo-constants";

const SUPABASE_URL = Constants.expoConfig?.extra?.SUPABASE_URL;
const SUPABASE_ANON_KEY = Constants.expoConfig?.extra?.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    "❌ Supabase credentials are missing in Constants.expoConfig.extra"
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
