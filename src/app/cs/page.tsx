'use client';

import { useState } from 'react';
import TomatoReport from './components/TomatoReport';
import BusinessIntro from './components/BusinessIntro';
import AdInquiry from './components/AdInquiry';
import Terms from './components/Terms';
import LegalNotice from './components/LegalNotice';
import SideBar from './components/SideBar';

export default function CsPage() {
  const [activeContent, setActiveContent] = useState('business-intro');

  const renderContent = () => {
    switch (activeContent) {
      case 'tomato-report':
        return <TomatoReport />;
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
    <div className="flex flex-col px-7 py-8 md:px-0 md:py-0 md:flex-row">
      <div className="md:mr-[64px] md:ml-[84px] md:mt-[104px]">
        <SideBar
          activeContent={activeContent}
          setActiveContent={setActiveContent}
        />
      </div>
      <div className="flex-grow">{renderContent()}</div>
    </div>
  );
}
