import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type CollectionCardProps = {
  to: string
  imageSrc: string
  imageAlt: string
  seriesLabel: string
  title: string
  footer?: ReactNode
}

export function CollectionCard({ to, imageSrc, imageAlt, seriesLabel, title, footer }: CollectionCardProps) {
  return (
    <Link to={to} className="group relative bg-surface aspect-[3/4] overflow-hidden cursor-pointer text-left w-full">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover grayscale brightness-50 transition-[transform,filter] duration-[0.8s] ease-slow scale-105 group-hover:scale-110 group-hover:grayscale-[40%] group-hover:brightness-75 group-hover:contrast-125"
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black/90 to-transparent flex flex-col gap-2 translate-y-4 transition-transform duration-[0.8s] ease-slow group-hover:translate-y-0">
        <div className="text-[0.65rem] uppercase tracking-[0.25em] text-secondary">{seriesLabel}</div>
        <h3 className="font-brand text-2xl tracking-[0.05em] text-primary">{title}</h3>
        <div className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mt-2">
          Explore Collection <span className="font-serif">→</span>
        </div>
        {footer}
      </div>
    </Link>
  )
}

