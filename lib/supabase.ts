import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://cpistifrzgzijryslmto.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwaXN0aWZyemd6aWpyeXNsbXRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2NzI1NDcsImV4cCI6MjA5NzI0ODU0N30.VUtclzPX9P_d7Hdzr_-EFYT8TcIadTOrwIIohQP3Tf0"

const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)

export default supabase