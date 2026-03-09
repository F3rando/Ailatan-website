export type GalleryItem = {
  id: string
  imageSrc: string
  alt: string
  kicker: string
  title: string
  category?: string
}

export function GalleryItemCard({ imageSrc, alt, kicker, title }: GalleryItem) {
  return (
    <div className="group relative break-inside-avoid mb-[1px] overflow-hidden cursor-pointer">
      <img
        src={imageSrc}
        className="w-full block grayscale-[50%] brightness-[0.7] transition-all duration-700 ease-slow group-hover:grayscale-[10%] group-hover:brightness-90 group-hover:scale-105"
        alt={alt}
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="text-[0.65rem] uppercase tracking-[0.25em] text-secondary">{kicker}</div>
        <div className="font-brand text-base tracking-[0.05em] text-primary mt-1">{title}</div>
      </div>
    </div>
  )
}

