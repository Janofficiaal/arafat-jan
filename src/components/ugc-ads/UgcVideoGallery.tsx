import { useState, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon } from 'lucide-react';
import FadeIn from '../FadeIn';

type Category = 'tiktok' | 'product' | 'lifestyle' | 'testimonial';

interface VideoItem {
  id: number;
  src: string;
  title: string;
  category: Category;
  type: 'video';
}

interface ImageItem {
  id: number;
  src: string;
  title: string;
  category: 'image';
  type: 'image';
}

type GalleryItem = VideoItem | ImageItem;

const videos: VideoItem[] = [
  { id: 1, src: '/ugc/video1.mp4', title: 'Packing Tips UGC Ad', category: 'tiktok', type: 'video' },
  { id: 2, src: '/ugc/video2.mp4', title: 'Tiny House Showcase', category: 'tiktok', type: 'video' },
  { id: 3, src: '/ugc/video3.mp4', title: 'Hidden Gems Travel Ad', category: 'tiktok', type: 'video' },
  { id: 4, src: '/ugc/video4.mp4', title: 'Summer Dessert Promo', category: 'tiktok', type: 'video' },
  { id: 5, src: '/ugc/video5.mp4', title: 'Europe Travel UGC', category: 'tiktok', type: 'video' },
  { id: 6, src: '/ugc/video6.mp4', title: 'Skincare Routine Ad', category: 'product', type: 'video' },
  { id: 7, src: '/ugc/video7.mp4', title: 'Face Mask Product Demo', category: 'product', type: 'video' },
  { id: 8, src: '/ugc/video8.mp4', title: 'Garden Wedding Promo', category: 'product', type: 'video' },
  { id: 9, src: '/ugc/video9.mp4', title: 'Business Growth Ad', category: 'product', type: 'video' },
  { id: 10, src: '/ugc/video10.mp4', title: 'Cultural Travel Showcase', category: 'product', type: 'video' },
  { id: 11, src: '/ugc/video11.mp4', title: 'Travel Inspiration Reel', category: 'lifestyle', type: 'video' },
  { id: 12, src: '/ugc/video12.mp4', title: 'Curly Hair Care Ad', category: 'lifestyle', type: 'video' },
  { id: 13, src: '/ugc/video13.mp4', title: 'Sunrise Lifestyle Reel', category: 'lifestyle', type: 'video' },
  { id: 14, src: '/ugc/video14.mp4', title: 'Ocean Vibes Promo', category: 'lifestyle', type: 'video' },
  { id: 15, src: '/ugc/video15.mp4', title: 'Nail Design Showcase', category: 'lifestyle', type: 'video' },
  { id: 16, src: '/ugc/video16.mp4', title: 'Car Care Routine #1', category: 'testimonial', type: 'video' },
  { id: 17, src: '/ugc/video17.mp4', title: 'Car Care Routine #2', category: 'testimonial', type: 'video' },
  { id: 18, src: '/ugc/video18.mp4', title: 'Car Care Routine #3', category: 'testimonial', type: 'video' },
  { id: 19, src: '/ugc/video19.mp4', title: 'Clean Car Lifestyle', category: 'testimonial', type: 'video' },
  { id: 20, src: '/ugc/video20.mp4', title: 'Weekend Routine Ad', category: 'testimonial', type: 'video' },
];

const images: ImageItem[] = [
  { id: 101, src: '/ugc/image1.jfif', title: 'UGC Ad Creative 1', category: 'image', type: 'image' },
  { id: 102, src: '/ugc/image2.jfif', title: 'UGC Ad Creative 2', category: 'image', type: 'image' },
  { id: 103, src: '/ugc/image3.jfif', title: 'UGC Ad Creative 3', category: 'image', type: 'image' },
];

const allItems: GalleryItem[] = [...videos, ...images];

type FilterTab = 'All' | 'TikTok Ads' | 'Product Showcase' | 'Lifestyle' | 'Testimonial';

const filterTabs: FilterTab[] = ['All', 'TikTok Ads', 'Product Showcase', 'Lifestyle', 'Testimonial'];

const categoryMap: Record<FilterTab, Category | 'all'> = {
  'All': 'all',
  'TikTok Ads': 'tiktok',
  'Product Showcase': 'product',
  'Lifestyle': 'lifestyle',
  'Testimonial': 'testimonial',
};

const categoryLabels: Record<string, string> = {
  tiktok: 'TikTok',
  product: 'Product',
  lifestyle: 'Lifestyle',
  testimonial: 'Testimonial',
  image: 'Image',
};

/* ─── Video Card ─── */
const VideoCard = ({
  item,
  onClick,
}: {
  item: VideoItem;
  onClick: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = useCallback(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  return (
    <div
      className="rounded-2xl overflow-hidden aspect-[9/16] bg-gray-950 relative cursor-pointer group"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={item.src}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Play icon center */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-12 h-12 rounded-full bg-[#7C3AED]/80 flex items-center justify-center backdrop-blur-sm">
          <Play className="w-5 h-5 text-white fill-white ml-0.5" />
        </div>
      </div>

      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

      {/* Bottom gradient + info */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
        <span className="inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-[#7C3AED] text-white mb-1">
          {categoryLabels[item.category]}
        </span>
        <p className="text-white text-xs font-medium leading-tight line-clamp-2">
          {item.title}
        </p>
      </div>
    </div>
  );
};

/* ─── Image Card ─── */
const StaticImageCard = ({
  item,
  onClick,
}: {
  item: ImageItem;
  onClick: () => void;
}) => (
  <div
    className="rounded-2xl overflow-hidden aspect-[9/16] bg-gray-950 relative cursor-pointer group"
    onClick={onClick}
  >
    <img
      src={item.src}
      alt={item.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />

    {/* Image icon badge */}
    <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#7C3AED]/80 flex items-center justify-center backdrop-blur-sm">
      <ImageIcon className="w-4 h-4 text-white" />
    </div>

    {/* Bottom gradient + info */}
    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
      <span className="inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-[#7C3AED] text-white mb-1">
        Image
      </span>
      <p className="text-white text-xs font-medium leading-tight line-clamp-2">
        {item.title}
      </p>
    </div>
  </div>
);

/* ─── Lightbox Modal ─── */
const Lightbox = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  const current = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Left arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 sm:left-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-[#7C3AED]/60 flex items-center justify-center transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Right arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-[#7C3AED]/60 flex items-center justify-center transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Content */}
      <div
        className="relative max-w-md w-full mx-4 aspect-[9/16] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {current.type === 'video' ? (
          <video
            key={current.src}
            src={current.src}
            controls
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={current.src}
            alt={current.title}
            className="w-full h-full object-cover"
          />
        )}

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
          <p className="text-white text-sm font-semibold">{current.title}</p>
          <p className="text-white/60 text-xs mt-0.5">
            {currentIndex + 1} / {items.length}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Component ─── */
const UgcVideoGallery = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems: GalleryItem[] =
    activeTab === 'All'
      ? allItems
      : videos.filter((v) => v.category === categoryMap[activeTab]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1,
    );
  };

  const goToNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1,
    );
  };

  // Keyboard nav
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lightboxIndex, filteredItems.length],
  );

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#F5F3FF] via-[#FAFAFE] to-white"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <FadeIn className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#7C3AED]/10 text-[#7C3AED] rounded-full text-sm font-semibold tracking-wide mb-4">
            UGC Ad Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Scroll-Stopping Ads We&apos;ve Created
          </h2>
          <div className="w-16 h-1 bg-[#7C3AED] rounded-full mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Hover to preview. Click to expand. Every ad engineered to stop the
            scroll and drive conversions.
          </p>
        </FadeIn>

        {/* ── Filter Tabs ── */}
        <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </FadeIn>

        {/* ── Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredItems.map((item, index) => (
            <FadeIn key={item.id} delay={Math.min(index * 0.04, 0.6)}>
              {item.type === 'video' ? (
                <VideoCard
                  item={item}
                  onClick={() => openLightbox(index)}
                />
              ) : (
                <StaticImageCard
                  item={item}
                  onClick={() => openLightbox(index)}
                />
              )}
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </section>
  );
};

export default UgcVideoGallery;
