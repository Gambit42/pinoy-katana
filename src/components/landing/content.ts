export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Order', to: '/contact' },
]

export const requestForm = {
  title: 'Start Your Custom Blade Request',
  text: 'Send your design and specifications for review by our blacksmiths. We will check feasibility, estimate pricing, and confirm the next steps before forging begins.',
  jotformUrl: '',
}

export const socialProfiles = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/SamuraiKatanaSwordsPhilippines',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
  },
  {
    label: 'X',
    href: 'https://x.com/',
  },
] as const

export const imageSources = {
  hero: '/katana-ph.png',
  bladeCloseup:
    'https://images.unsplash.com/photo-1689493720621-fbf73d28bb52?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800',
  displayStand:
    'https://unsplash.com/photos/FgaMsJDOaok/download?force=true&w=1800',
  blueBackdrop:
    'https://unsplash.com/photos/zIOrZH4Hkmc/download?force=true&w=1800',
  fieldBlade:
    'https://unsplash.com/photos/ULqwK2XREx0/download?force=true&w=1800',
  grassBlade:
    'https://unsplash.com/photos/wTAUVTsMRLk/download?force=true&w=1800',
  knifeBlock:
    'https://unsplash.com/photos/PrzmLSlBNzQ/download?force=true&w=1800',
  woodenSword:
    'https://unsplash.com/photos/5XV2h8VINzY/download?force=true&w=1800',
  customBlade:
    'https://unsplash.com/photos/Y4P1fJLOIGc/download?force=true&w=1800',
}

export const homepage = {
  title: 'Custom Katana Philippines',
  eyebrow: 'You Design It, We Forge It',
  intro:
    'Samurai Katana Swords Philippines crafts custom katana, handmade samurai swords, daisho sets, and traditional Filipino blades from your design references.',
  body: 'Forged in the Philippines and shipped worldwide, each blade is tailored to your dimensions, fittings, finish, and intended use. Our skilled Filipino blacksmiths combine traditional sword-forging techniques with high-quality materials to create functional and artistic blades.',
  cta: 'Start designing your custom blade with us today.',
}

export const aboutSections = [
  {
    title: 'Excellence and Professionalism',
    text: 'At Samurai Katana Swords Philippines, we specialize in handcrafted custom swords built around your ideas and specifications. Guided by our motto, "You Design It, We Forge It," our experienced swordsmiths combine traditional Japanese craftsmanship with modern techniques to create durable, high-quality blades made with precision and care.',
  },
  {
    title: 'Licensed and Insured',
    text: 'We take pride in maintaining professionalism, quality workmanship, and reliable customer service. As a licensed and insured business, we are committed to delivering products that meet high standards of safety, craftsmanship, and customer satisfaction.',
  },
  {
    title: 'Personalized Approach',
    text: 'Every blade we create is unique. Whether you are a collector, martial artist, cosplayer, or simply looking for a custom-made piece, we work closely with you throughout the process to ensure your sword matches your exact vision and expectations.',
  },
]

export const services = [
  {
    title: 'Handmade Swords',
    text: 'At Samurai Katana Swords Philippines, we create handcrafted swords customized to your preferred design and specifications. Each blade is carefully forged, shaped, and finished by skilled craftsmen with close attention to detail and authenticity.',
    action: 'Bring your ideas to life with a one-of-a-kind custom sword.',
  },
  {
    title: 'Blade Refurbishment',
    text: 'Restore the beauty and functionality of your old blades with our professional refurbishment services. Our artisans carefully repair, polish, and revive worn or damaged swords, giving them a renewed appearance and extended lifespan.',
    action: 'Restore worn or damaged swords with careful repair and polishing.',
  },
  {
    title: 'Sword Maintenance',
    text: 'Keep blades in excellent condition with sharpening, polishing, cleaning, and general care. We help preserve the quality, performance, and appearance of your swords for years to come.',
    action: 'Preserve quality, performance, and appearance.',
  },
]

export const customOrders = {
  title: 'Customize Your Katana Sword Design',
  text: 'Samurai Katana Swords Philippines proudly offers custom-made blades under our "You Design It, We Forge It" service, allowing you to fully personalize your sword design according to your preferences.',
  detail:
    'We craft a wide variety of blades and weapons based on your desired design and specifications. Simply send us your concept along with complete details, and our skilled Filipino blacksmiths will review your request. Once approved, forging begins, with an estimated production time of approximately 2 months depending on design complexity and material availability.',
}

export const bladeLineup = [
  'Japanese Katana Sword and Daisho Set',
  'Movie / European Long Swords',
  'Philippines Traditional Weapons',
  'Knives, Daggers, Falchion and Kitchen Tools',
  'Practice Sword and Knives (Unsharpened)',
  'Practice Wooden Swords and Knives',
  'Custom Made Swords and Knives by Client Design',
]

export const products = [
  {
    name: 'Japanese Katana Sword',
    slug: 'japanese-katana-sword',
    category: 'Japanese Katana Sword and Daisho Set',
    image: imageSources.displayStand,
    alt: 'Handcrafted Japanese katana on a wooden display stand',
    text: 'Handcrafted katana swords customized to your preferred design, blade dimensions, fittings, finish, and intended use.',
  },
  {
    name: 'Daisho Set',
    slug: 'daisho-set',
    category: 'Japanese Katana Sword and Daisho Set',
    image: imageSources.blueBackdrop,
    alt: 'Custom daisho set with matching katana and short sword styling',
    text: 'Coordinated blade sets for collectors who want a complete long and short sword presentation.',
  },
  {
    name: 'Movie / European Long Swords',
    slug: 'movie-european-long-swords',
    category: 'Movie / European Long Swords',
    image: imageSources.bladeCloseup,
    alt: 'Custom European long sword blade closeup for collectors',
    text: 'Custom long swords inspired by movie, fantasy, or European sword designs, reviewed and crafted based on your specifications.',
  },
  {
    name: 'Philippines Traditional Weapons',
    slug: 'philippines-traditional-weapons',
    category: 'Philippines Traditional Weapons',
    image: imageSources.fieldBlade,
    alt: 'Traditional Filipino blade design displayed outdoors',
    text: 'Traditional Filipino weapon designs made for collectors, display, martial arts use, or custom client concepts.',
  },
  {
    name: 'Knives, Daggers, Falchion and Kitchen Tools',
    slug: 'knives-daggers-falchion-kitchen-tools',
    category: 'Knives, Daggers, Falchion and Kitchen Tools',
    image: imageSources.knifeBlock,
    alt: 'Custom knife and dagger blade work for utility and display',
    text: 'Custom knives, daggers, falchions, and kitchen tools shaped around your preferred size, profile, handle, and finish.',
  },
  {
    name: 'Practice Sword and Knives',
    slug: 'practice-sword-knives',
    category: 'Practice Sword and Knives (Unsharpened)',
    image: imageSources.grassBlade,
    alt: 'Unsharpened practice sword for martial arts training',
    text: 'Training swords and knives for martial arts practice, cosplay handling, or display without a sharpened edge.',
  },
  {
    name: 'Practice Wooden Swords and Knives',
    slug: 'practice-wooden-swords-knives',
    category: 'Practice Wooden Swords and Knives',
    image: imageSources.woodenSword,
    alt: 'Wooden practice sword for safe training and choreography',
    text: 'Wooden practice swords and knives for safe training, costume use, choreography, and display.',
  },
  {
    name: 'Custom Made Swords and Knives by Client Design',
    slug: 'custom-made-swords-knives-client-design',
    category: 'Custom Made Swords and Knives by Client Design',
    image: imageSources.customBlade,
    alt: 'Custom sword commission based on client blade design references',
    text: 'Fully custom-made swords and knives built from your concept, measurements, references, materials, and finishing direction.',
  },
]

export const orderSteps = [
  'Send your design and specifications through our order form or social channels for pricing and inquiries.',
  'Your request is forwarded to the blacksmiths for feasibility review and price estimation.',
  'Once the design, pricing, and scope are approved, a 50% down payment is required before forging begins.',
  'Forging usually takes around 2 months, depending on material availability, design complexity, and current blacksmith workload.',
  'When the blade is finished, the remaining balance and shipping fee, if applicable, are settled before delivery.',
]

export const orderUses = [
  'Cosplay and costume use',
  'Martial arts training with unsharpened blades',
  'Souvenir and display pieces',
  'Bulk orders are welcome and eligible for discounts',
  'Nationwide and worldwide shipping outside the Philippines',
]

export const orderFaqs = [
  {
    question: 'How do I request a custom blade?',
    answer:
      'Send your design references, measurements, materials, finish, and intended use through the order form or social channels. The blacksmiths will confirm whether the design can be made and estimate the price.',
  },
  {
    question: 'Why is a down payment required?',
    answer:
      'A 50% down payment is required before forging starts to reserve the work and prevent cancelled custom orders after production has begun.',
  },
  {
    question: 'How long does forging take?',
    answer:
      'Most custom orders take about 2 months, but timing can change depending on materials, design complexity, and the number of active blacksmith job orders.',
  },
  {
    question: 'Do you ship outside NCR or worldwide?',
    answer:
      'Yes. Shipping fees are settled with the remaining balance before delivery. Worldwide shipping is available for customers outside the Philippines.',
  },
  {
    question: 'Do you make cosplay, training, or souvenir blades?',
    answer:
      'Yes. Custom blades can be made for cosplay, unsharpened martial arts training, souvenirs, display, and bulk orders with possible discounts.',
  },
]

export const imageCredits = [
  {
    label: 'Close-up photo by Pramod Tiwari',
    href: 'https://unsplash.com/photos/a-close-up-of-a-sword-I8UIUEjyCeg',
  },
  {
    label: 'Display photo by Stepan Konev',
    href: 'https://unsplash.com/photos/a-japanese-katana-rests-on-a-wooden-display-FgaMsJDOaok',
  },
  {
    label: 'Backdrop photo by Carlos Felipe Ramirez Mesa',
    href: 'https://unsplash.com/photos/a-sword-on-a-blue-surface-zIOrZH4Hkmc',
  },
  {
    label: 'Field photo by Adrian Rosco Stef',
    href: 'https://unsplash.com/photos/a-sword-laying-on-top-of-a-rock-in-the-grass-ULqwK2XREx0',
  },
  {
    label: 'Grass blade photo by Adrian Rosco Stef',
    href: 'https://unsplash.com/photos/a-sword-laying-on-top-of-a-rock-in-the-grass-wTAUVTsMRLk',
  },
  {
    label: 'Knife photo by Gage Grizzle',
    href: 'https://unsplash.com/photos/a-knife-is-stuck-in-a-piece-of-wood-PrzmLSlBNzQ',
  },
  {
    label: 'Wooden sword photo by Ted Balmer',
    href: 'https://unsplash.com/photos/a-wooden-sword-laying-on-top-of-a-rock-5XV2h8VINzY',
  },
  {
    label: 'Katana portrait photo by Alireza heidarpour',
    href: 'https://unsplash.com/photos/woman-in-black-dress-holding-a-katana-sword-Y4P1fJLOIGc',
  },
]
