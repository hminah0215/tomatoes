'use client';

import GridView from "@/components/ui/grid/GridView";
import { useEffect, useState } from "react";
import HomeGridItem from "./HomeGridItem";

async function FetchData(): Promise<ContestActivityDataProps []> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/activities_contests?select=*&order=view_count.desc&limit=8`, {
    headers: {
      'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''}`,
    },
  });

  if (!response.ok) {
    console.error("데이터를 가져오는 중 오류 발생");
    return [];
  }

  const data: ContestActivityDataProps[] = await response.json();
  return data;
}

export default function BestPickGridView() {
  const [activities, setActivities] = useState<ContestActivityDataProps []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchData();
      setActivities(data);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full">
      <GridView
        items={activities}
        GridItem={HomeGridItem}
        columnStyle="web4mobile2"
        gapStyle="gapStyle2"
      />
    </div>
  );
}