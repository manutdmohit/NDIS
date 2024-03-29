'use client';

import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import JoinUsSection from '@/components/JoinUs/JoinUs';
import NDISProviderInfo from '@/components/NDISProviderInfo/NDISProviderInfo';
import WhyUs from '@/components/WhyUs/WhyUs';

export default function Website() {
  return (
    <div className="">
      <div className="relative bg-video mb-5">
        <div className="video-container">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="./assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <Header />
            <Hero />
          </div>
        </div>
      </div>

      <WhyUs />
      <NDISProviderInfo />
      <JoinUsSection />
    </div>
  );
}
