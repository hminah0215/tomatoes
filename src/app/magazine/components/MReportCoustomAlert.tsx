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
      <div className="w-[311px] h-[160px] p-6 bg-white rounded-2xl flex-col justify-start items-center gap-4 inline-flex">
        <div className="self-stretch h-[52px] flex-col justify-center items-center gap-2 flex">
          <div className="w-[263px] text-center text-neutral-900 text-base font-semibold leading-relaxed">
            {message}
          </div>
        </div>
        <div className="w-[263px] justify-start items-center gap-3 inline-flex">
          <div
            className="grow shrink basis-0 h-11 px-5 py-[9px] bg-white rounded-lg border border-[#D9D9D9] justify-center items-center gap-1.5 flex cursor-pointer"
            onClick={onClose}
          >
            <div className="text-[#E2483D] text-base font-semibold leading-relaxed">
              닫기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MReportCoustomAlert;
