import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://your-project-id.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBycXp2aHdrYmVpcXljb2xybGNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMjkyNjUsImV4cCI6MjA5NTgwNTI2NX0.BEPO1fXklUTJerKhufLHa-OcSQmj2nc3p36KQKjtvMs"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)