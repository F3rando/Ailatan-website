import { useMemo, useState } from 'react'
import { CollectionCard } from '../components/CollectionCard'
import { IronHeroBackground } from '../components/IronHeroBackground'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT
const ENTRY_COVER_SRC = `${import.meta.env.BASE_URL}images/doors/entry-cover.jpg`
const PIVOT_COVER_SRC = `${import.meta.env.BASE_URL}images/doors/pivot-cover.jpg`

export function HomePage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const canSubmit = useMemo(() => Boolean(FORMSPREE_ENDPOINT), [])

  return (
    <div className="block w-full">
      <header id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <IronHeroBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10" />

        <div className="relative z-20 text-center flex flex-col items-center gap-6">
          <div className="text-[0.65rem] uppercase tracking-[0.25em] text-secondary">Forged in Steel</div>
          <h1 className="font-brand text-[8vw] md:text-[6vw] tracking-[0.15em] uppercase leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            Ailatan
          </h1>
          <div className="flex items-center gap-4 text-[0.85rem] tracking-[0.4em] uppercase text-secondary">
            <div className="w-10 h-[1px] bg-secondary" />
            Custom Iron Doors
            <div className="w-10 h-[1px] bg-secondary" />
          </div>
        </div>
      </header>

      <section id="collections" className="py-[10vw] max-w-[1600px] mx-auto px-[4vw] border-b border-line">
        <div className="flex flex-col items-center gap-4 mb-[6vw] text-center">
          <div className="text-[0.65rem] uppercase tracking-[0.25em] text-secondary">Portfolio</div>
          <h2 className="font-brand text-4xl tracking-[0.1em]">Masterworks in Iron</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-line border border-line">
          <CollectionCard
            to="/entry"
            imageSrc={ENTRY_COVER_SRC}
            imageAlt="Custom iron entry door"
            seriesLabel="Series 01"
            title="Entry Doors"
          />
          <CollectionCard
            to="/pivot"
            imageSrc={PIVOT_COVER_SRC}
            imageAlt="Custom pivot door"
            seriesLabel="Series 02"
            title="Pivot Doors"
          />
          <CollectionCard
            to="/bifold"
            imageSrc="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2000&auto=format&fit=crop"
            imageAlt="Iron Bifold Doors"
            seriesLabel="Series 03"
            title="Bifold Systems"
          />
        </div>
      </section>

      <section id="contact" className="py-[10vw] bg-[radial-gradient(circle_at_center_top,var(--bg-elevated)_0%,var(--bg-base)_100%)]">
        <div className="max-w-[1600px] mx-auto px-[4vw] grid grid-cols-1 lg:grid-cols-2 gap-[8vw] items-start">
          <div className="flex flex-col gap-12">
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.25em] text-secondary mb-4">Inquiries</div>
              <h2 className="font-brand text-4xl lg:text-5xl leading-[1.1] tracking-[0.02em]">
                Architectural severity, uncompromising craft.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-line pt-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-secondary"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 13.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <div className="flex flex-col gap-1">
                    <div className="text-[0.65rem] uppercase tracking-[0.25em] text-secondary">Based in</div>
                    <span className="text-[0.85rem] tracking-[0.05em]">Southern California</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-secondary"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 14.5V21h8v-6.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 9.5h10l-1 5H8l-1-5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 3h6v6H9V3Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex flex-col gap-1">
                    <div className="text-[0.65rem] uppercase tracking-[0.25em] text-secondary">Experience</div>
                    <span className="text-[0.85rem] tracking-[0.05em]">Metalwork — 25+ years</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[0.65rem] uppercase tracking-[0.25em] text-secondary">Direct</div>
                <span className="text-[0.85rem] tracking-[0.05em]">+1 714 932 9975</span>
                <span className="text-[0.85rem] tracking-[0.05em]">coronaiw@gmail.com</span>
              </div>
            </div>
          </div>

          <form
            className="flex flex-col"
            onSubmit={async (e) => {
              e.preventDefault()
              if (!FORMSPREE_ENDPOINT) return

              setStatus('sending')
              try {
                const formEl = e.currentTarget
                const data = new FormData(formEl)
                const res = await fetch(FORMSPREE_ENDPOINT, {
                  method: 'POST',
                  body: data,
                  headers: { Accept: 'application/json' },
                })
                if (!res.ok) throw new Error('Request failed')
                formEl.reset()
                setStatus('success')
              } catch {
                setStatus('error')
              }
            }}
          >
            <div className="mb-8 relative">
              <input
                name="name"
                type="text"
                placeholder="Client Name"
                required
                className="w-full bg-transparent border-b border-line py-4 text-primary text-sm transition-colors placeholder:text-secondary placeholder:uppercase placeholder:tracking-[0.1em] placeholder:text-[0.7rem]"
              />
            </div>
            <div className="mb-8 relative">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-transparent border-b border-line py-4 text-primary text-sm transition-colors placeholder:text-secondary placeholder:uppercase placeholder:tracking-[0.1em] placeholder:text-[0.7rem]"
              />
            </div>
            <div className="mb-8 relative">
              <input
                name="location"
                type="text"
                placeholder="Project Location"
                className="w-full bg-transparent border-b border-line py-4 text-primary text-sm transition-colors placeholder:text-secondary placeholder:uppercase placeholder:tracking-[0.1em] placeholder:text-[0.7rem]"
              />
            </div>
            <div className="mb-8 relative">
              <textarea
                name="specs"
                placeholder="Project Specifications"
                className="w-full bg-transparent border-b border-line py-4 text-primary text-sm transition-colors placeholder:text-secondary placeholder:uppercase placeholder:tracking-[0.1em] placeholder:text-[0.7rem] resize-y min-h-[120px]"
              />
            </div>

            <button
              type="submit"
              disabled={!canSubmit || status === 'sending'}
              className="bg-transparent border border-primary text-primary py-4 px-12 text-[0.75rem] uppercase tracking-[0.2em] transition-all hover:bg-primary hover:text-base cursor-pointer mt-4 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Request Consultation
            </button>

            {!FORMSPREE_ENDPOINT && (
              <div className="mt-6 text-[0.7rem] uppercase tracking-[0.18em] text-secondary">
                Set <span className="text-primary">VITE_FORMSPREE_ENDPOINT</span> to enable submissions.
              </div>
            )}
            {status === 'success' && (
              <div className="mt-6 text-[0.7rem] uppercase tracking-[0.18em] text-secondary">
                Received. We’ll respond shortly.
              </div>
            )}
            {status === 'error' && (
              <div className="mt-6 text-[0.7rem] uppercase tracking-[0.18em] text-secondary">
                Submission failed. Please try again.
              </div>
            )}
          </form>
        </div>
      </section>

      <footer className="border-t border-line py-16 px-[4vw] flex flex-col items-center gap-8">
        <div className="font-brand text-3xl tracking-[0.1em]">AILATAN</div>
        <div className="text-[0.65rem] uppercase tracking-[0.25em] text-secondary">Bespoke Ironworks</div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-[4vw] text-center w-full justify-center">
          <div className="flex flex-col gap-1">
            <div className="text-[0.65rem] uppercase tracking-[0.25em] text-primary">Los Angeles</div>
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[#555]">01 310 555 0198</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[0.65rem] uppercase tracking-[0.25em] text-primary">New York</div>
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[#555]">01 212 555 0144</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[0.65rem] uppercase tracking-[0.25em] text-primary">London</div>
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[#555]">44 20 7946 0958</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[0.65rem] uppercase tracking-[0.25em] text-primary">Dubai</div>
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[#555]">971 4 339 8333</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

