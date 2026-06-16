import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'

const BIFOLD_COVER_SRC = `${import.meta.env.BASE_URL}images/doors/bifolddoor-cover.png`

// Gallery — restore when bifold project photos are ready.
// import { GalleryItemCard, type GalleryItem } from '../components/GalleryItemCard'
//
// const items: GalleryItem[] = [
//   {
//     id: 'open-001',
//     imageSrc: `${import.meta.env.BASE_URL}images/doors/bifold-01.jpg`,
//     alt: 'Bifold door',
//     kicker: 'Bifold — 4 Panel',
//     title: 'Open Series 001',
//   },
//   // Add more items here…
// ]

export function BifoldPage() {
  return (
    <div className="w-full pt-24">
      <PageHero
        imageSrc={BIFOLD_COVER_SRC}
        imageAlt="Iron bifold door design concept"
        seriesLabel="Series 03 · Design Concept"
        title="Bifold Systems"
        description="Custom iron bifold systems — engineered, fabricated, and installed by our team."
        imageClassName="absolute inset-0 w-full h-full object-contain object-center grayscale-[60%] brightness-[0.45]"
      />

      <div className="py-20 px-[4vw] pb-24 bg-base">
        <div className="mx-auto max-w-2xl text-center border border-line-subtle bg-black/20 px-8 py-12 md:px-12 md:py-16">
          <div className="text-[0.65rem] uppercase tracking-[0.25em] text-secondary mb-4">Made to Order</div>
          <h2 className="font-brand text-3xl md:text-4xl tracking-[0.06em] leading-tight mb-6">
            Portfolio photography coming soon
          </h2>
          <p className="text-[0.9rem] text-secondary leading-relaxed tracking-[0.03em] mb-10">
            We build and install iron bifold systems for residential and commercial projects. Finished project
            photos are on the way — the image above is a design concept showing the level of craft we deliver.
            Contact us to discuss dimensions, configuration, and installation for your space.
          </p>
          <Link
            to="/#contact"
            className="inline-block bg-transparent border border-primary text-primary py-4 px-12 text-[0.7rem] uppercase tracking-[0.2em] transition-all hover:bg-primary hover:text-base cursor-pointer"
          >
            Speak With Sales
          </Link>
        </div>

        {/* Gallery — uncomment when bifold project photos are ready.
        <div className="masonry-grid mt-20">
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
        */}
      </div>
    </div>
  )
}
