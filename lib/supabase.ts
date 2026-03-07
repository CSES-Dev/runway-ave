import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// 1. Standard Client (Safe for Client Components/Hooks)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 2. Admin Client (Server-side ONLY - bypasses RLS)
// This is what you'll use for Task 7 (Reliability Engine) and Ingestion[cite: 6, 28].
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);