import { createClient } from '@supabase/supabase-js'

const supabaseKey = process.env.SUPABASE_KEY
export const supabaseUrl = 'https://tdzggviulrvfnltfrpbu.supabase.co'
export const supabase = createClient(supabaseUrl, supabaseKey)
