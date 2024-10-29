import Image from 'next/image';
import Dday from '@/components/common/Dday';

export default function ActivityDetail({item}: ) {
  return (
    <section>
      <div>
        <div>
          <Image src={} alt="" width={} height={} className="block sm:hidden" />
          <Image src={} alt="" width={} height={} className="hidden sm:block" />
        </div>
        <div>
          <Dday type="" day="" color="" />
          <h2></h2>
          <div>
            <span className="pr-[30px] md:pr-[50px]">등록일: </span>
            <span>조회 회</span>
          </div>
          <div>
            <span className="pr-[30px] md:pr-[50px]">공모 분야</span>
            <span></span>
          </div>
          <div>
            <span className="pr-[30px] md:pr-[50px]">공모 기간</span>
            <span></span>
          </div>
          <div>
            <span className="pr-[30px] md:pr-[50px]">주최 기관</span>
            <span></span>
          </div>
          <div>
            <span className="pr-[30px] md:pr-[50px]">참여 대상</span>
            <span></span>
          </div>
          <div>
            <span className="pr-[30px] md:pr-[50px]">이지</span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
