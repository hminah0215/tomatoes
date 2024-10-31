import Dday from '@/components/common/Dday';

export default function SearchDdayDisplay({ d_day }: { d_day?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {d_day !== undefined ? (
        <Dday
          type="active"
          day={d_day}
          color={
            (d_day as number) <= 7 ? 'red' : d_day <= 31 ? 'yellow' : 'green'
          }
        />
      ) : (
        <span className="text-gray-500">D-Day 정보 없음</span>
      )}
    </div>
  );
}
