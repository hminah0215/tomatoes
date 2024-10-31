import Image from 'next/image';
import Link from 'next/link';
import { TomatoTipDataType } from '@/types/tomatoTips';
import Tag from '@/components/common/Tag';

interface TomatoTipItemProps {
  item: TomatoTipDataType; 
}

const TomatoTipItem = ({ item }: TomatoTipItemProps) => {
  const { id, title, author } = item;

  const imageIndex = id % 3;
  const thumbnailImages = [
    `/assets/magazine/PC_tips_thumbnail_${imageIndex + 1}.svg`,
    `/assets/magazine/MO_tips_thumbnail_${imageIndex + 1}.svg`,
  ];

  return (
    <Link href={`/magazine/tomatoTip/${id}`} className="">
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
      <div className="flex h-[40px] flex-col items-start justify-between gap-2 md:h-[74px]">
        <div className="inline-flex items-center justify-start gap-3">
          <Tag type="hot" label="HOT" />
          <div className="md:text- line-clamp-2 text-ellipsis text-[16px] font-semibold leading-5 text-sub-gray-500">
            {title}
          </div>
        </div>

        <div className="hidden h-[30px] w-[120px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium text-sub-gray-300 md:block md:text-base">
          {author}
        </div>
      </div>
    </Link>
  );
};

export default TomatoTipItem;