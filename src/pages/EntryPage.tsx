import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { GalleryItemCard, type GalleryItem } from '../components/GalleryItemCard'
import { PageHero } from '../components/PageHero'

const ENTRY_COVER_SRC = `${import.meta.env.BASE_URL}images/doors/entry-cover.jpg`

const filters = [
  { id: 'all', label: 'All' },
  { id: 'single', label: 'Single' },
  { id: 'double', label: 'Double' },
  { id: 'arch', label: 'Arched' },
  { id: 'glass', label: 'Glass Panel' },
] as const

type FilterId = (typeof filters)[number]['id']

const coverItem: GalleryItem = {
  id: 'entry-cover',
  imageSrc: ENTRY_COVER_SRC,
  alt: 'Entry door cover',
  kicker: 'Entry — Cover',
  title: 'Entry Doors',
}

const items: GalleryItem[] = [
  {
    id: 'estate-001',
    category: 'double',
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    alt: 'Door',
    kicker: 'Double — Glass Panel',
    title: 'Estate Series 001',
  },
  {
    id: 'monolith-002',
    category: 'single',
    imageSrc: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
    alt: 'Door',
    kicker: 'Single — Solid Panel',
    title: 'Monolith Series 002',
  },
  {
    id: 'arch-003',
    category: 'arch',
    imageSrc: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop',
    alt: 'Door',
    kicker: 'Arched — Ironwork Detail',
    title: 'Arch Series 003',
  },
  {
    id: 'lumiere-004',
    category: 'glass',
    imageSrc: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop',
    alt: 'Door',
    kicker: 'Single — Full Glass',
    title: 'Lumière Series 004',
  },
  {
    id: 'grand-005',
    category: 'double',
    imageSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    alt: 'Door',
    kicker: 'Double — Sidelights',
    title: 'Grand Series 005',
  },
  {
    id: 'cathedral-006',
    category: 'arch',
    imageSrc: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    alt: 'Door',
    kicker: 'Arched — Sidelights',
    title: 'Cathedral Series 006',
  },
  {
    id: 'noir-007',
    category: 'single',
    imageSrc: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop',
    alt: 'Door',
    kicker: 'Single — Minimalist',
    title: 'Noir Series 007',
  },
  {
    id: 'pane-008',
    category: 'glass',
    imageSrc: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
    alt: 'Door',
    kicker: 'Double — Glass Grid',
    title: 'Pane Series 008',
  },
  {
    id: 'heritage-009',
    category: 'double',
    imageSrc: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop',
    alt: 'Door',
    kicker: 'Double — Transitional',
    title: 'Heritage Series 009',
  },
]

export function EntryPage() {
  const [active, setActive] = useState<FilterId>('all')

  const filtered = useMemo(() => {
    if (active === 'all') return items
    return items.filter((i) => i.category === active)
  }, [active])

  return (
    <div className="w-full pt-20">
      <PageHero
        imageSrc={ENTRY_COVER_SRC}
        imageAlt="Entry doors cover"
        seriesLabel="Series 01"
        title="Entry Doors"
        description="Each entry door is handcrafted to order — designed to command presence and endure generations."
      />

      <div className="border-b border-line py-6 px-[4vw] flex flex-wrap gap-8 items-center bg-base sticky top-20 z-40">
        <span className="text-[0.65rem] uppercase tracking-[0.25em] text-secondary">Filter:</span>
        {filters.map((f) => {
          const isActive = active === f.id
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              className={[
                'filter-btn bg-transparent border-none border-b border-transparent pb-1 text-[0.7rem] uppercase tracking-[0.15em] cursor-pointer transition-colors',
                isActive ? 'active text-primary border-primary' : 'text-secondary hover:text-primary',
              ].join(' ')}
            >
              {f.label}
            </button>
          )
        })}
      </div>

      <div className="py-12 px-[4vw] pb-24 bg-base">
        <div className="masonry-grid">
          <GalleryItemCard {...coverItem} />
          {filtered.map((item) => (
            <GalleryItemCard key={item.id} {...item} />
          ))}
        </div>

        <div className="text-center mt-16 pt-16 border-t border-line">
          <div className="text-[0.65rem] uppercase tracking-[0.25em] text-secondary mb-4">Ready to Begin?</div>
          <h3 className="font-brand text-3xl tracking-[0.08em] mb-8">Commission Your Entry Door</h3>
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

