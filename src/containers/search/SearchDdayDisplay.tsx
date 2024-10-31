import Dday from '@/components/common/Dday';

export default function SearchDdayDisplay({ d_day }: { d_day?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <Dday
        type="active"
        day={d_day}
        color={d_day <= 7 ? 'red' : d_day <= 31 ? 'yellow' : 'green'}
      />
    </div>
  );
}
