'use client';

import { useState } from 'react';
import BusinessIntro from '@/containers/cs/BusinessIntro';
import AdInquiry from '@/containers/cs/AdInquiry';
import Terms from '@/containers/cs/Terms';
import LegalNotice from '@/containers/cs/LegalNotice';
import SideBar from '@/containers/cs/SideBar';

export default function CsPage() {
  const [activeContent, setActiveContent] = useState('business-intro');

  const renderContent = () => {
    switch (activeContent) {
      case 'business-intro':
        return <BusinessIntro />;
      case 'ad-inquiry':
        return <AdInquiry />;
      case 'terms':
        return <Terms />;
      case 'legal-notice':
        return <LegalNotice />;
      default:
        return <BusinessIntro />;
    }
  };

  return (
    <div className="flex flex-col px-7 py-8 md:flex-row md:px-0 md:py-0">
      <div className="md:ml-[84px] md:mr-[64px] md:mt-[104px]">
        <SideBar
          activeContent={activeContent}
          setActiveContent={setActiveContent}
        />
      </div>
      <div className="flex-grow">{renderContent()}</div>
    </div>
  );
}
