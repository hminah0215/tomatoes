import Image from 'next/image';
import Link from 'next/link';
import { TomatoTipDataType } from '@/types/tomatoTips';
import Tag from '@/components/common/Tag';

interface TomatoTipItemProps {
  item: TomatoTipDataType; // 원래 tip 속성
}

const TomatoTipItem = ({ item }: TomatoTipItemProps) => {
  // console.log('Rendering item:', item);

  const { id, title, author } = item;

  // 인덱스 없이 이미지를 설정
  const imageIndex = id % 3;
  const thumbnailImages = [
    `/assets/magazine/PC_tips_thumbnail_${imageIndex + 1}.svg`,
    `/assets/magazine/MO_tips_thumbnail_${imageIndex + 1}.svg`,
  ];

  return (
    <Link href={`/magazine/tomatoTip/${id}`}>
      <div className="relative mb-[12px] h-[230px] overflow-hidden rounded-[20px] bg-main-beige md:mb-[16px] md:h-[290px]">
        <Image
          className="absolute hidden h-full w-full object-cover md:block"
          src={thumbnailImages[0]}
          alt={title}
          width={401}
          height={290}
        />
        <Image
          className="absolute block h-full w-full object-cover md:hidden"
          src={thumbnailImages[1]}
          alt={title}
          width={319}
          height={230}
        />
      </div>
      <div className="flex h-[40px] flex-col flex-wrap items-start justify-between gap-2 md:h-[74px]">
        <div className="inline-flex items-center justify-start gap-3">
          <Tag type="hot" label="HOT" />
          <div className="h-[24px] w-[250px] overflow-hidden text-ellipsis whitespace-nowrap text-[16px] font-semibold leading-5 text-sub-gray-500 md:h-[36px] md:w-[329px] md:text-2xl">
            {title}
          </div>
        </div>
        <div className="inline-flex items-start justify-start gap-3">
          <div className="hidden h-[30px] w-[120px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium text-sub-gray-300 md:block md:text-xl">
            {author}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TomatoTipItem;
