import { Link } from 'react-router-dom'
import { GalleryItemCard, type GalleryItem } from '../components/GalleryItemCard'
import { PageHero } from '../components/PageHero'

const PIVOT_COVER_SRC = `${import.meta.env.BASE_URL}images/doors/pivot-cover.jpg`

const coverItem: GalleryItem = {
  id: 'pivot-cover',
  imageSrc: PIVOT_COVER_SRC,
  alt: 'Pivot door cover',
  kicker: 'Pivot — Cover',
  title: 'Pivot Doors',
}

const items: GalleryItem[] = [
  {
    id: 'axis-001',
    imageSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    alt: 'Pivot Door',
    kicker: 'Pivot — Minimal',
    title: 'Axis Series 001',
  },
  {
    id: 'lux-002',
    imageSrc: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=800&auto=format&fit=crop',
    alt: 'Pivot Door',
    kicker: 'Pivot — Full Glass',
    title: 'Lux Series 002',
  },
  {
    id: 'forge-003',
    imageSrc: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop',
    alt: 'Pivot Door',
    kicker: 'Pivot — Iron Frame',
    title: 'Forge Series 003',
  },
  {
    id: 'monument-004',
    imageSrc: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    alt: 'Pivot Door',
    kicker: 'Pivot — Oversized',
    title: 'Monument Series 004',
  },
  {
    id: 'crown-005',
    imageSrc: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop',
    alt: 'Pivot Door',
    kicker: 'Pivot — Arched Top',
    title: 'Crown Series 005',
  },
  {
    id: 'grid-006',
    imageSrc: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop',
    alt: 'Pivot Door',
    kicker: 'Pivot — Steel Grid',
    title: 'Grid Series 006',
  },
]

export function PivotPage() {
  return (
    <div className="w-full pt-20">
      <PageHero
        imageSrc={PIVOT_COVER_SRC}
        imageAlt="Pivot doors cover"
        seriesLabel="Series 02"
        title="Pivot Doors"
        description="Statement pivots that redefine thresholds — engineered for drama, built to last forever."
      />

      <div className="py-16 px-[4vw] pb-24 bg-base">
        <div className="masonry-grid">
          <GalleryItemCard {...coverItem} />
          {items.map((item) => (
            <GalleryItemCard key={item.id} {...item} />
          ))}
        </div>

        <div className="text-center mt-16 pt-16 border-t border-line">
          <div className="text-[0.65rem] uppercase tracking-[0.25em] text-secondary mb-4">Ready to Begin?</div>
          <h3 className="font-brand text-3xl tracking-[0.08em] mb-8">Commission Your Pivot Door</h3>
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

