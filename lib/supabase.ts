import { createClient } from '@supabase/supabase-js';

// మీ సుపాబేస్ లింక్‌లను నేరుగా ఇక్కడే యాడ్ చేశాను
const supabaseUrl = 'https://prqzvhwkbeiqycolrlck.supabase.co';
const supabaseAnonKey = 'sb_publishable_RH3z04113M2QnQuI7KAnT4vsh73Isk3K';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);