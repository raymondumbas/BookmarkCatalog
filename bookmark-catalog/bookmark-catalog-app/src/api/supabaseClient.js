/*
    Initialize Supabase client 
 */

import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with your URL and anon key
const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseURL, supabaseKey);
