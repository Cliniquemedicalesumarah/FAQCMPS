import { createClient } from '@supabase/supabase-js'

// Vérification des variables d'environnement
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Les variables d\'environnement Supabase ne sont pas configurées. ' +
    'Veuillez cliquer sur le bouton "Connect to Supabase" pour configurer votre projet.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)