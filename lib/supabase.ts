import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://prqzvhwkbeiqycolrlck.supabase.co';
const supabaseAnonKey = 'sb_publishable_RH3z04113M2QnQuI7KAnT4vsh73Isk3K';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);