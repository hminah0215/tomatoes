'use client';

import GridView from "@/components/ui/grid/GridView";
import { useEffect, useState } from "react";
import HomeGridItem from "./HomeGridItem";
import { fetchRecoActivityData } from "@/lib/fetchRecoActivityGridView";

export default function RecoActivityGridView() {
  const [activities, setActivities] = useState<ContestActivityDataProps []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await fetchRecoActivityData();
      if (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error.message);
      } else {
        setActivities(data || []);
      }
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