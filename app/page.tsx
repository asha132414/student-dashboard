"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import ActivityTile from '@/components/ActivityTile';

interface ActivityItem {
  day: string;
  hours: number;
}

export default function Dashboard() {
  const [activityData, setActivityData] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // ఇక్కడ టేబుల్ పేరు 'weekly_activity' నుండి 'courses' గా మార్చాము
        const { data, error } = await supabase
          .from('courses') 
          .select('day, hours')
          .order('id', { ascending: true });

        if (error) {
          console.error('Supabase error:', error.message);
        } else if (data) {
          // డేటాను స్టేట్ లో పెడుతున్నాము
          setActivityData(data as ActivityItem[]);
        }
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Student Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="bg-[#121212] p-6 rounded-2xl border border-[#222] h-64 flex items-center justify-center col-span-1 md:col-span-2">
              <span className="text-gray-400 animate-pulse text-sm">Loading activity data...</span>
            </div>
          ) : (
            // లోడింగ్ అయిపోయాక గ్రాఫ్ ఇక్కడ డిస్‌ప్లే అవుతుంది
            <ActivityTile data={activityData} />
          )}
        </div>
      </div>
    </main>
  );
}