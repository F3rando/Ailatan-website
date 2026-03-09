type PageHeroProps = {
  imageSrc: string
  imageAlt: string
  seriesLabel: string
  title: string
  description: string
}

export function PageHero({ imageSrc, imageAlt, seriesLabel, title, description }: PageHeroProps) {
  return (
    <div className="relative h-[55vh] overflow-hidden flex items-end py-16 px-[4vw]">
      <img
        src={imageSrc}
        className="absolute inset-0 w-full h-full object-cover grayscale-[60%] brightness-[0.45]"
        alt={imageAlt}
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-base/95 to-base/15" />
      <div className="relative z-10 max-w-3xl">
        <div className="text-[0.65rem] uppercase tracking-[0.25em] text-secondary mb-3">{seriesLabel}</div>
        <h1 className="font-brand text-5xl md:text-6xl tracking-[0.1em] leading-none text-primary">{title}</h1>
        <p className="text-[0.85rem] text-secondary mt-4 max-w-md tracking-[0.05em] leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

