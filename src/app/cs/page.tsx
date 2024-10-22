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
    <div className="flex">
      <SideBar
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
      <div className="flex">{renderContent()}</div>
    </div>
  );
}
