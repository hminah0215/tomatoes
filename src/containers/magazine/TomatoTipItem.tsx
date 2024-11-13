import Image from 'next/image';
import Link from 'next/link';
import { TomatoTipDataType } from '@/types/tomatoTips';
import Tag from '@/components/common/Tag';
import { getTagLabel } from '@/utils/getTagLabel';

interface TomatoTipItemProps {
  item: TomatoTipDataType;
}

const TomatoTipItem = ({ item }: TomatoTipItemProps) => {
  // console.log('Rendering item:', item);
  const { id, title, author, views, created_at } = item;
  const tagLabel = getTagLabel(views, created_at);

  // 토마토 썸네일 이미지 설정
  const imageIndex = id % 3;
  const thumbnailImages = [
    `/assets/magazine/PC_tips_thumbnail_${imageIndex + 1}.svg`,
    `/assets/magazine/MO_tips_thumbnail_${imageIndex + 1}.svg`,
  ];

  return (
    <Link href={`/magazine/tomatoTip/${id}`}>
      <div className="relative mb-3 h-[230px] overflow-hidden rounded-[20px] bg-main-beige md:mb-4 md:h-[290px]">
        <Image
          className="absolute hidden h-full w-full object-cover md:block"
          src={thumbnailImages[0]}
          alt={title}
          width={401}
          height={290}
        />
        <Image
          className="absolute block h-full w-full rounded-2xl object-cover md:hidden"
          src={thumbnailImages[1]}
          alt={title}
          width={319}
          height={230}
        />
      </div>
      <div className="flex h-10 flex-col items-start justify-between gap-2 md:h-[74px]">
        <div className="inline-flex items-center gap-3">
          <Tag type={tagLabel} label={tagLabel.toUpperCase()} />
          <div className="line-clamp-2 text-sm font-semibold text-sub-gray-500 md:text-base">
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
