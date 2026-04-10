'use client';

import dynamic from 'next/dynamic';
import { Navbar } from '../components/Navbar';

const InfiniteGallery = dynamic(() => import('@/components/InfiniteGallery'), { ssr: false });

const images = [
  { src: '/photography/photo-01.jpg', alt: 'Photo 1' },
  { src: '/photography/photo-02.jpg', alt: 'Photo 2' },
  { src: '/photography/photo-03.jpg', alt: 'Photo 3' },
  { src: '/photography/photo-04.jpg', alt: 'Photo 4' },
  { src: '/photography/photo-05.jpg', alt: 'Photo 5' },
  { src: '/photography/photo-06.jpg', alt: 'Photo 6' },
  { src: '/photography/photo-07.jpg', alt: 'Photo 7' },
  { src: '/photography/photo-08.jpg', alt: 'Photo 8' },
  { src: '/photography/photo-09.jpg', alt: 'Photo 9' },
  { src: '/photography/photo-10.jpg', alt: 'Photo 10' },
  { src: '/photography/photo-11.jpg', alt: 'Photo 11' },
  { src: '/photography/photo-12.jpg', alt: 'Photo 12' },
  { src: '/photography/photo-13.jpg', alt: 'Photo 13' },
  { src: '/photography/photo-14.jpg', alt: 'Photo 14' },
  { src: '/photography/photo-15.jpg', alt: 'Photo 15' },
  { src: '/photography/photo-16.jpg', alt: 'Photo 16' },
];

export default function PhotographyPage() {
  return (
    <main className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <InfiniteGallery
        images={images}
        speed={1.2}
        visibleCount={12}
        className="h-screen w-full overflow-hidden"
      />
      <div className="h-screen inset-0 pointer-events-none fixed flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
        <p className="font-serif text-[45px] italic tracking-tight">
          stoic.
        </p>
      </div>
    </main>
  );
}
