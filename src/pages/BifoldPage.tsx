import { Link } from 'react-router-dom'
import { GalleryItemCard, type GalleryItem } from '../components/GalleryItemCard'
import { PageHero } from '../components/PageHero'

const items: GalleryItem[] = [
  {
    id: 'open-001',
    imageSrc: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=800&auto=format&fit=crop',
    alt: 'Bifold Door',
    kicker: 'Bifold — 4 Panel',
    title: 'Open Series 001',
  },
  {
    id: 'horizon-002',
    imageSrc: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
    alt: 'Bifold Door',
    kicker: 'Bifold — 6 Panel',
    title: 'Horizon Series 002',
  },
  {
    id: 'zenith-003',
    imageSrc: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
    alt: 'Bifold Door',
    kicker: 'Bifold — Floor to Ceiling',
    title: 'Zenith Series 003',
  },
  {
    id: 'corner-004',
    imageSrc: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop',
    alt: 'Bifold Door',
    kicker: 'Bifold — Corner System',
    title: 'Corner Series 004',
  },
  {
    id: 'aqua-005',
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    alt: 'Bifold Door',
    kicker: 'Bifold — Pool Surround',
    title: 'Aqua Series 005',
  },
  {
    id: 'trade-006',
    imageSrc: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop',
    alt: 'Bifold Door',
    kicker: 'Bifold — Commercial',
    title: 'Trade Series 006',
  },
]

export function BifoldPage() {
  return (
    <div className="w-full pt-20">
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2400&auto=format&fit=crop"
        imageAlt="Bifold Doors Hero"
        seriesLabel="Series 03"
        title="Bifold Systems"
        description="Seamless indoor-outdoor transitions — iron bifold systems engineered for grand openings."
      />

      <div className="py-16 px-[4vw] pb-24 bg-base">
        <div className="masonry-grid">
          {items.map((item) => (
            <GalleryItemCard key={item.id} {...item} />
          ))}
        </div>

        <div className="text-center mt-16 pt-16 border-t border-line">
          <div className="text-[0.65rem] uppercase tracking-[0.25em] text-secondary mb-4">Ready to Begin?</div>
          <h3 className="font-brand text-3xl tracking-[0.08em] mb-8">Commission Your Bifold System</h3>
          <Link
            to="/#contact"
            className="inline-block bg-transparent border border-primary text-primary py-4 px-12 text-[0.7rem] uppercase tracking-[0.2em] transition-all hover:bg-primary hover:text-base cursor-pointer"
          >
            Request a Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}

