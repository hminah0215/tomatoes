import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-main-beige">
      <div className="flex flex-col items-center gap-4 px-8 py-8 md:hidden">
        <div className="relative flex h-8 w-[100px] items-center rounded-[5px] bg-white shadow">
          <Link href="/intro" className="absolute inset-0 flex items-center">
            <span className="pl-[9px] text-[10px] font-medium">
              토마토들 소개 →
            </span>
          </Link>
          <div className="absolute bottom-0 right-0 flex items-end">
            <Image
              src="/assets/common/MO_button_t.svg"
              alt="토마토들 소개 버튼 토마토 이미지"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-4">
            <Link href="/" className="text-xs underline">
              공지사항
            </Link>
            <Link href="/" className="text-xs underline">
              FAQ
            </Link>
            <Link href="/" className="text-xs underline">
              1:1 문의
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="/" className="text-xs underline">
              이용약관
            </Link>
            <Link href="/" className="text-xs underline">
              개인정보처리방침
            </Link>
            <Link href="/" className="text-xs underline">
              책임한계와 법적고지
            </Link>
          </div>
        </div>
        <div className="text-center text-xs">
          Copyright ©Tomato.DLE. All Rights Reserved.
        </div>
        <div className="mt-2">
          <Image
            src="/assets/common/MO_logo_text.svg"
            alt="토마토들 로고 모바일"
            width={78}
            height={18}
          />
        </div>
      </div>

      <div className="hidden h-[536px] flex-col items-start justify-start gap-2.5 px-[84px] py-16 md:flex">
        <div className="flex h-[408px] w-full items-start justify-between gap-[72px]">
          <div className="flex items-start justify-start gap-[88px]">
            <div className="flex flex-col items-start justify-start gap-6">
              <div>TOMATO.DLE</div>
              <div className="flex h-[216px] flex-col items-start justify-start gap-6">
                <Link href="/intro" className="font-semibold">
                  토마토들 소개
                </Link>
                <Link href="/magazine" className="font-semibold">
                  매거진
                </Link>
                <Link href="/contest" className="font-semibold">
                  공모전
                </Link>
                <Link href="/activity" className="font-semibold">
                  대외활동
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-6">
              <div>공고등록/문의</div>
              <div className="flex h-[120px] flex-col items-start justify-start gap-6">
                <Link href="/cs" className="font-semibold">
                  사업소개
                </Link>
                <Link href="/cs" className="font-semibold">
                  광고문의
                </Link>
                <Link href="/cs" className="font-semibold">
                  대행문의
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-6">
              <div>고객문의</div>
              <div className="flex h-[120px] flex-col items-start justify-start gap-6">
                <Link href="/" className="font-semibold">
                  공지사항
                </Link>
                <Link href="/" className="font-semibold">
                  FAQ
                </Link>
                <Link href="/" className="font-semibold">
                  1:1 문의
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end justify-start gap-8">
            <div>
              <Image
                src="/assets/common/PC_logo_text.svg"
                alt="토마토들 로고"
                width={78}
                height={18}
              />
            </div>
            <div>
              <Link href="https://www.instagram.com" target="_blank">
                <Image
                  src="/assets/common/PC_Instagram.svg"
                  alt="Instagram 아이콘"
                  width={31}
                  height={32}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex h-[72px] w-full flex-col items-start justify-start gap-6">
          <div className="flex items-center justify-start gap-10">
            <div>Copyright ©Tomato.DLE. All Rights Reserved.</div>
            <div>사업자등록번호 000-00000-00000</div>
            <div>주소: 구로구 가마산로 242 3층 306,7호</div>
            <div>대표: 고경표</div>
          </div>
          <div className="flex items-center justify-start gap-10">
            <Link href="/" className="underline">
              이용약관
            </Link>
            <Link href="/" className="underline">
              개인정보처리방침
            </Link>
            <Link href="/" className="underline">
              책임한계와 법적고지
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
