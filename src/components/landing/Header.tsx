import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { navItems } from './content'
import { RequestFormButton } from './RequestFormDialog'
import { containerClass } from './shared'

export function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isHome = location.pathname === '/'
  const { scrollY } = useScroll()
  const headerHeight = useTransform(scrollY, [0, 120], [64, 56])
  const logoSize = useTransform(scrollY, [0, 120], [48, 40])
  const backgroundColor = useTransform(
    scrollY,
    [0, 120],
    ['rgba(255, 255, 255, 0.92)', 'rgba(255, 255, 255, 0.98)'],
  )
  const backdropFilter = useTransform(
    scrollY,
    [0, 120],
    ['blur(8px)', 'blur(18px)'],
  )
  const boxShadow = useTransform(
    scrollY,
    [0, 120],
    ['0 0 0 rgba(24, 24, 27, 0)', '0 12px 30px rgba(24, 24, 27, 0.08)'],
  )

  function scrollToTopOnHome(event: MouseEvent<HTMLAnchorElement>) {
    if (!isHome) {
      return
    }

    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleHomeClick(event: MouseEvent<HTMLAnchorElement>) {
    scrollToTopOnHome(event)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <>
      <motion.header
        className="sticky top-0 z-[80] border-b border-zinc-200"
        style={{ backdropFilter, backgroundColor, boxShadow }}
      >
        <motion.div
          className={`${containerClass} flex items-center justify-between gap-5`}
          style={{ minHeight: headerHeight }}
        >
          <Link
            className="flex min-w-0 items-center gap-3 no-underline"
            onClick={handleHomeClick}
            to="/"
          >
            <motion.img
              alt="Samurai Katana Swords Philippines"
              className="h-12 w-12 shrink-0 object-cover"
              height={48}
              src="/katana-logo.png"
              style={{ height: logoSize, width: logoSize }}
              width={48}
            />
            <span className="flex min-w-0 flex-col font-heading text-sm leading-tight font-bold uppercase text-zinc-950 sm:text-base">
              <span>Samurai Katana</span>
              <span className="text-red-600">Swords Philippines</span>
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 lg:flex"
          >
            {navItems.map((item) => (
              <Link
                activeProps={{
                  className: 'text-red-600 after:scale-x-100',
                }}
                className="relative py-2 font-mono text-xs uppercase text-zinc-600 no-underline after:absolute after:right-0 after:-bottom-0.5 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-red-600 after:transition-transform hover:text-red-600 hover:after:scale-x-100"
                key={item.to}
                onClick={item.to === '/' ? scrollToTopOnHome : undefined}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <RequestFormButton
              aria-label="Start an order"
              className="hidden min-h-11 items-center justify-center gap-2 rounded border border-red-700 bg-red-700 px-4 font-heading text-xs font-bold uppercase text-white no-underline hover:bg-white hover:text-red-700 sm:inline-flex"
            >
              <span>Order Now</span>
            </RequestFormButton>
            <button
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded border border-red-100 bg-white text-red-700 lg:hidden"
              onClick={() => setIsMenuOpen((current) => !current)}
              type="button"
            >
              <Menu
                className={`absolute transition duration-200 ${
                  isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`}
                size={18}
              />
              <X
                className={`absolute transition duration-200 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                }`}
                size={18}
              />
            </button>
          </div>
        </motion.div>
      </motion.header>

      <div
        aria-hidden={!isMenuOpen}
        className={`fixed inset-x-0 top-16 bottom-0 z-[60] bg-zinc-950/45 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        aria-hidden={!isMenuOpen}
        className={`fixed top-16 right-0 bottom-0 z-[70] w-[min(360px,calc(100vw-32px))] border-l border-red-100 bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-menu"
      >
        <div className="flex h-full flex-col">
          <div className="border-b border-red-100 px-6 py-5">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-red-600">
              Navigation
            </div>
          </div>

          <nav aria-label="Mobile navigation" className="grid gap-1 px-4 py-5">
            {navItems.map((item) => (
              <Link
                activeProps={{ className: 'text-red-600 bg-red-50' }}
                className="rounded px-3 py-3 font-heading text-sm font-bold uppercase text-zinc-700 no-underline hover:bg-red-50 hover:text-red-600"
                key={item.to}
                onClick={
                  item.to === '/' ? handleHomeClick : () => setIsMenuOpen(false)
                }
                tabIndex={isMenuOpen ? 0 : -1}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}

            <RequestFormButton
              className="mt-3 inline-flex min-h-11 items-center justify-center rounded border border-red-700 bg-red-700 px-4 font-heading text-xs font-bold uppercase text-white hover:bg-white hover:text-red-700"
              onClick={() => setIsMenuOpen(false)}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Order Now
            </RequestFormButton>
          </nav>

          <div className="mt-auto border-t border-red-100 px-6 py-5">
            <div className="font-heading text-sm font-bold uppercase text-zinc-950">
              Samurai Katana
            </div>
            <div className="font-heading text-sm font-bold uppercase text-red-600">
              Swords Philippines
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
