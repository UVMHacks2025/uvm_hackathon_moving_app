import { createClient } from "@supabase/supabase-js";

NEXT_PUBLIC_SUPABASE_URL = "https://ntxlgjxipdxbkjswleiu.supabase.co";
NEXT_PUBLIC_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50eGxnanhpcGR4Ymtqc3dsZWl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4NDA0MjYsImV4cCI6MjA1NjQxNjQyNn0._4aZV3rwhd3Exx-NIr_SUeJNU_qenbVWwYsxcOsLnSs";

export const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY
);
