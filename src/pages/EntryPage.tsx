import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { GalleryItemCard, type GalleryItem } from '../components/GalleryItemCard'
import { PageHero } from '../components/PageHero'

const ENTRY_COVER_SRC = `${import.meta.env.BASE_URL}images/doors/entry-cover.jpg`
const ENTRY_01_SRC = `${import.meta.env.BASE_URL}images/doors/entry-01.jpg`
const ENTRY_02_SRC = `${import.meta.env.BASE_URL}images/doors/entry-02.jpg`
const ENTRY_03_SRC = `${import.meta.env.BASE_URL}images/doors/entry-03.jpg`
const ENTRY_04_SRC = `${import.meta.env.BASE_URL}images/doors/entry-04.jpg`
const ENTRY_05_SRC = `${import.meta.env.BASE_URL}images/doors/entry-05.jpg`
const ENTRY_06_SRC = `${import.meta.env.BASE_URL}images/doors/entry-06.jpg`

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
  category: 'single',
  imageSrc: ENTRY_COVER_SRC,
  alt: 'Entry door cover',
  kicker: 'Single — Cover',
  title: 'Entry Doors',
}

const items: GalleryItem[] = [
  {
    id: 'estate-001',
    category: 'single',
    imageSrc: ENTRY_01_SRC,
    alt: 'Entry door',
    kicker: 'Single',
    title: 'Entry 01',
  },
  {
    id: 'monolith-002',
    category: 'double',
    imageSrc: ENTRY_02_SRC,
    alt: 'Entry door',
    kicker: 'Double',
    title: 'Entry 02',
  },
  {
    id: 'arch-003',
    category: 'double',
    imageSrc: ENTRY_03_SRC,
    alt: 'Entry door',
    kicker: 'Double',
    title: 'Entry 03',
  },
  {
    id: 'entry-004',
    category: 'single',
    imageSrc: ENTRY_04_SRC,
    alt: 'Entry door',
    kicker: 'Single',
    title: 'Entry 04',
  },
  {
    id: 'entry-005',
    category: 'double',
    imageSrc: ENTRY_05_SRC,
    alt: 'Entry door',
    kicker: 'Double',
    title: 'Entry 05',
  },
  {
    id: 'entry-006',
    category: 'single',
    imageSrc: ENTRY_06_SRC,
    alt: 'Entry door',
    kicker: 'Single',
    title: 'Entry 06',
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
          {(active === 'all' || active === coverItem.category || active === 'arch') && <GalleryItemCard {...coverItem} />}
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

