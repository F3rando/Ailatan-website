import { Link } from 'react-router-dom'
import { GalleryItemCard, type GalleryItem } from '../components/GalleryItemCard'
import { PageHero } from '../components/PageHero'

const PIVOT_COVER_SRC = `${import.meta.env.BASE_URL}images/doors/pivot-cover.jpg`
const PIVOT_01_SRC = `${import.meta.env.BASE_URL}images/doors/pivot-01.jpg`

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
    imageSrc: PIVOT_01_SRC,
    alt: 'Pivot Door',
    kicker: 'Pivot — Minimal',
    title: 'Axis Series 001',
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

