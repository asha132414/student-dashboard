import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// URL లేదా కీ లేకపోతే బిల్డ్ ఆగిపోకుండా ఖాళీ స్ట్రింగ్ పంపిస్తున్నాం
export const supabase = createClient(supabaseUrl, supabaseAnonKey);