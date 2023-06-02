import React from 'react';
import LeftSection from './LeftSection/LeftSection';
import './LandingPage.css';
import RightSection from './RightSection/RightSection';


export default function LandingPage() {
  return (
    <div class="landingBackground">
      <LeftSection/>
      <RightSection/>
    </div>
  )
}
