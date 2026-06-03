import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://your-project-id.supabase.co"
const supabaseAnonKey = "sb_publishable_RH3z04113M2QnQEsWrmd0w_mqzdY9j8"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)