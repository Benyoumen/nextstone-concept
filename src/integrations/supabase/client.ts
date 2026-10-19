import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Configure in .env (see .env.example). Without them the app runs in demo mode:
// no backend calls are made and the login page offers demo roles.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const DEMO_MODE = !SUPABASE_URL || !SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(
  SUPABASE_URL || 'http://localhost:54321',
  SUPABASE_ANON_KEY || 'demo-mode-no-backend'
);
