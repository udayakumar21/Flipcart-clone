import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://mcuiuogtibsdavdanwqx.supabase.co",
  process. env.SUPABASE_KEY

);

export default supabase;
