interface MReportCoustomAlertProps {
  message: React.ReactNode;
  onClose: () => void;
}

const MReportCoustomAlert = ({
  message,
  onClose,
}: MReportCoustomAlertProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="inline-flex h-[160px] w-[311px] flex-col items-center justify-start gap-4 rounded-2xl bg-white p-6">
        <div className="flex h-[52px] flex-col items-center justify-center gap-2 self-stretch">
          <div className="w-[263px] text-center text-base font-semibold leading-relaxed text-neutral-900">
            {message}
          </div>
        </div>
        <div className="inline-flex w-[263px] items-center justify-start gap-3">
          <div
            className="flex h-11 shrink grow basis-0 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-[#D9D9D9] bg-white px-5 py-[9px]"
            onClick={onClose}
          >
            <div className="text-base font-semibold leading-relaxed text-[#E2483D]">
              닫기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MReportCoustomAlert;
