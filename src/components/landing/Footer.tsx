import { Link } from '@tanstack/react-router'
import { Facebook, Instagram } from 'lucide-react'
import { navItems, socialProfiles } from './content'
import { XBrandIcon } from './SocialIcons'
import { containerClass } from './shared'

const footerLinks = [...navItems, { label: 'Contact', to: '/contact' }]
const socialIcons = {
  Facebook,
  Instagram,
  X: XBrandIcon,
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white text-zinc-950">
      <div className={`${containerClass} py-12 md:py-16`}>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <Link
              className="inline-flex items-center gap-4 text-zinc-950 no-underline"
              to="/"
            >
              <img
                alt="Samurai Katana Swords Philippines"
                className="h-16 w-16 object-cover"
                height={64}
                src="/katana-logo.png"
                width={64}
              />
              <span className="flex flex-col font-heading text-xl leading-none font-bold uppercase">
                <span>Samurai Katana</span>
                <span className="text-red-500">Swords Philippines</span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-600">
              We bring your vision to life through our signature "You Design It,
              We Forge It" service, crafting custom swords and blades tailored
              to your unique designs and specifications.
            </p>

          </div>

          <div className="flex flex-col items-start gap-10 sm:flex-row lg:justify-end lg:gap-16">
            <div className="flex flex-col items-start text-left">
              <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-red-500">
                Explore
              </h2>
              <nav
                aria-label="Footer navigation"
                className="mt-5 grid justify-items-start gap-3"
              >
                {footerLinks.map((item) => (
                  <Link
                    className="font-heading text-sm font-bold uppercase text-zinc-700 no-underline hover:text-red-600"
                    key={item.to}
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col items-start text-left">
              <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-red-500">
                Socials
              </h2>
              <div className="mt-5 grid justify-items-start gap-3">
                {socialProfiles.map((item) => {
                  const Icon = socialIcons[item.label]

                  return (
                    <a
                      aria-label={item.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded border border-zinc-200 text-zinc-700 no-underline hover:border-red-700 hover:bg-red-700 hover:text-white"
                      href={item.href}
                      key={item.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-500">
          Copyright 2026 Samurai Katana Swords Philippines. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
