
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zwvuwbhgphmvdxthhtpg.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dnV3YmhncGhtdmR4dGhodHBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3ODU2MTMsImV4cCI6MjA1MTM2MTYxM30.lqXM_gmI5FFVXdsPjcuojlb56ISvLXgiiz7cCCAcV_g"
export const supabase = createClient(supabaseUrl, supabaseKey)