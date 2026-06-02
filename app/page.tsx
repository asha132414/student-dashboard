"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import ActivityTile from '@/components/ActivityTile';

export default function Dashboard() {
  const [activityData, setActivityData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // 1. సుపాబేస్ నుండి డేటా తెచ్చుకుంటున్నాము
      const { data, error } = await supabase
        .from('weekly_activity') // మీ టేబుల్ పేరు
        .select('day, hours')     // మీ కాలమ్ పేర్లు
        .order('id', { ascending: true }); // వరుస క్రమం కోసం

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        // 2. వచ్చిన డేటాను స్టేట్ లో సేవ్ చేస్తున్నాము
        setActivityData(data || []);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <div className="p-10 text-white">Loading scores...</div>;

  return (
    <main className="min-h-screen bg-[#0a0a0a] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Student Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 3. మనం తెచ్చిన డేటాను గ్రాఫ్ కి పంపిస్తున్నాము */}
          <ActivityTile data={activityData} />
          
          {/* ఇతర కార్డ్స్ ఇక్కడ యాడ్ చేసుకోవచ్చు */}
        </div>
      </div>
    </main>
  );
}