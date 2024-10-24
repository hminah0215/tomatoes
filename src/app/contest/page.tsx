import Pagination from '@/components/ui/pagination/Pagination';
import CategoryPanel from './components/CategoryPanel';

export default function page() {
  const dummyActivities: Activity[] = [
    {
      imageUrl: '/assets/test_image.png',
      title: '2024 대외활동 모집',
      organization: '청년연합회',
      dDay: '10',
      receptionPeriod: '10월 9일(수) ~ 10월 18일(금)',
      category: '대외활동',
      viewCount: 1390,
    },
    {
      imageUrl: '/assets/test_image.png',
      title: '창의력 공모전',
      organization: '창의력 협회',
      dDay: '5',
      receptionPeriod: '10월 1일(일) ~ 10월 20일(금)',
      category: '공모전',
      viewCount: 5230,
    },
    {
      imageUrl: '/assets/test_image.png',
      title: '프로그래밍 교육 강연',
      organization: 'IT 아카데미',
      dDay: '2',
      receptionPeriod: '10월 10일(화) ~ 10월 15일(일)',
      category: '교육・강연',
      viewCount: 2250,
    },
    {
      imageUrl: '/assets/test_image.png',
      title: '디자인 공모전',
      organization: '디자인 협회',
      dDay: '15',
      receptionPeriod: '10월 12일(목) ~ 10월 22일(일)',
      category: '공모전',
      viewCount: 3200,
    },
    {
      imageUrl: '/assets/test_image.png',
      title: '국제 청년 프로그램 모집',
      organization: '국제 청년 회의',
      dDay: '3',
      receptionPeriod: '10월 11일(수) ~ 10월 20일(금)',
      category: '대외활동',
      viewCount: 1800,
    },
    {
      imageUrl: '/assets/test_image.png',
      title: '청소년 창의력 대회',
      organization: '창의력 연구소',
      dDay: '7',
      receptionPeriod: '10월 5일(목) ~ 10월 12일(목)',
      category: '공모전',
      viewCount: 2750,
    },
    {
      imageUrl: '/assets/test_image.png',
      title: '국내 IT 컨퍼런스',
      organization: 'IT 컨퍼런스 협회',
      dDay: '1',
      receptionPeriod: '10월 2일(월) ~ 10월 10일(화)',
      category: '교육・강연',
      viewCount: 4500,
    },
    {
      imageUrl: '/assets/test_image.png',
      title: '대외활동 참여 프로그램',
      organization: '대외활동 위원회',
      dDay: '9',
      receptionPeriod: '10월 8일(일) ~ 10월 16일(월)',
      category: '대외활동',
      viewCount: 2100,
    },
    {
      imageUrl: '/assets/test_image.png',
      title: '국제 디자인 공모전',
      organization: '국제 디자인 협회',
      dDay: '8',
      receptionPeriod: '10월 10일(화) ~ 10월 20일(금)',
      category: '공모전',
      viewCount: 3950,
    },
    {
      imageUrl: '/assets/test_image.png',
      title: '창의력 퀴즈 대회',
      organization: '퀴즈 협회',
      dDay: '4',
      receptionPeriod: '10월 3일(화) ~ 10월 12일(목)',
      category: '공모전',
      viewCount: 1500,
    },
    {
      imageUrl: '/assets/test_image.png',
      title: '프로그래밍 교육 과정',
      organization: '소프트웨어 아카데미',
      dDay: '11',
      receptionPeriod: '10월 15일(일) ~ 10월 22일(일)',
      category: '교육・강연',
      viewCount: 2750,
    },
    {
      imageUrl: '/assets/test_image.png',
      title: '국내 청소년 프로그램',
      organization: '청소년 위원회',
      dDay: '12',
      receptionPeriod: '10월 8일(일) ~ 10월 18일(수)',
      category: '대외활동',
      viewCount: 2600,
    },
    {
      imageUrl: '/assets/test_image.png',
      title: '전국 디자인 공모전',
      organization: '전국 디자인 협회',
      dDay: '13',
      receptionPeriod: '10월 7일(토) ~ 10월 17일(화)',
      category: '공모전',
      viewCount: 3400,
    },
    {
      imageUrl: '/assets/test_image.png',
      title: '프로그래밍 교육 세미나',
      organization: '개발자 커뮤니티',
      dDay: '6',
      receptionPeriod: '10월 9일(월) ~ 10월 15일(일)',
      category: '교육・강연',
      viewCount: 1400,
    },
    {
      imageUrl: '/assets/test_image.png',
      title: '대외활동 리더십 캠프',
      organization: '국제 리더십 협회',
      dDay: '14',
      receptionPeriod: '10월 3일(화) ~ 10월 12일(목)',
      category: '대외활동',
      viewCount: 1700,
    },
    {
      imageUrl: '/assets/test_image.png',
      title: '국제 교육 강연',
      organization: '글로벌 교육 위원회',
      dDay: '5',
      receptionPeriod: '10월 10일(화) ~ 10월 19일(목)',
      category: '교육・강연',
      viewCount: 3000,
    },
  ];

  return (
    <>
      <CategoryPanel />
      <Pagination contents={dummyActivities} />
    </>
  );
}
