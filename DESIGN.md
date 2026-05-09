---
name: Kenshin Precision
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e3e2e2'
  on-secondary-container: '#646464'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  button:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.05em
spacing:
  base: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

This design system is built on the philosophy of "The Edge"—where lethal precision meets ethereal calm. It targets high-end collectors and martial arts practitioners who value craftsmanship and heritage. The UI evokes a sense of nobility, quiet confidence, and surgical sharpness. 

The aesthetic is a fusion of **Minimalism** and **Modern Corporate Elegance**. It utilizes expansive white space to mirror the discipline of a dojo, ensuring that the high-resolution photography of the katanas remains the singular focus. The visual language is intentional and sparse, avoiding unnecessary decoration to reflect the functional purity of a master-forged blade.

## Colors

The palette is monochromatic and high-contrast, designed to provide a "gallery" backdrop.

*   **Primary (Black):** Used for primary CTAs, headings, and critical iconography. It represents the ink of a scroll and the steel of the blade.
*   **Secondary (Charcoal/Gray):** Reserved for meta-data, secondary labels, and subtle borders.
*   **Tertiary (Light Gray):** Applied to section backgrounds and input fields to provide soft structural definition without breaking the minimalist flow.
*   **Surface (Pure White):** The dominant color. Large areas of white space drive the "premium" feel and ensure maximum readability.

## Typography

Typography in this design system creates a rhythmic tension between technical precision and modern readability.

*   **Headings:** Use **Space Grotesk**. Its geometric and slightly technical nature echoes industrial engineering and modern metallurgy. Use tight tracking for large displays to emphasize impact.
*   **Body:** Use **Inter**. It is selected for its neutral, high-legibility characteristics, ensuring that long product descriptions or historical contexts are effortless to read.
*   **Technical Data:** Use **JetBrains Mono** for specifications (blade length, steel type, weight). The monospaced nature reinforces the theme of "measured precision."

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to maintain a curated, editorial feel, while transitioning to a fluid model for mobile.

*   **Desktop:** 12-column grid with a 1440px max-width. Margins are intentionally wide (64px) to create a "frame" around the content.
*   **Spacing Rhythm:** Use a strict 8px base unit. Section vertical spacing is aggressive (120px+) to ensure the brand feels "spacious" and high-end.
*   **Reflow:** On mobile, columns collapse to a single stack. Gutters should be maintained at 20px to prevent content from touching the screen edges.

## Elevation & Depth

This design system avoids traditional shadows to maintain a "sharp" aesthetic. Depth is achieved through **Low-Contrast Outlines** and **Tonal Layering**.

*   **Layers:** Content sits on the Pure White (Surface) level. Secondary information or side-drawers (like the cart) use a Light Gray (#F5F5F5) background to create a "step-back" effect.
*   **Borders:** Use 1px solid borders in Light Gray (#E0E0E0) for card containers and separators. 
*   **Interactive State:** Upon hover, elements do not lift with shadows; instead, they utilize high-contrast color shifts (e.g., a white button filling with black) or subtle scale increases.

## Shapes

To mirror the uncompromising edge of a katana, the shape language is strictly **Sharp (0px)**. 

Every element—from buttons and input fields to product cards and image containers—must use square corners. This architectural rigidity communicates discipline and precision. Small exceptions are made for system-level icons, which should use a consistent stroke weight (1.5px) and sharp joins.

## Components

Use shadcn/ui for common UI primitives whenever the component exists in `src/components/ui`. Add missing primitives with the shadcn CLI before hand-rolling buttons, dialogs, inputs, selects, sheets, dropdowns, tabs, cards, tooltips, alerts, or similar reusable controls.

*   **Buttons:** Primary buttons are solid Black with White text in all-caps Space Grotesk. Secondary buttons are "Ghost" style with a 1px Black border and no fill.
*   **Product Cards:** Minimalist frames with no visible border by default. The border appears or the image zooms slightly on hover. Labels use the monospaced font for price and technical specs.
*   **Input Fields:** Bottom-border only (underline style) to keep the form feeling light and architectural. Labels float above in the monospaced font.
*   **Navigation:** A "sticky" transparent-to-white header with centered typography. Use a thin 1px hairline separator only when the user scrolls.
*   **Breadcrumbs & Chips:** Use the monospaced font at a small scale. Chips should be rectangular with a 1px border.
*   **Specialty Component (The Spec-Sheet):** A dedicated data grid for sword specifications using JetBrains Mono, featuring subtle alternating row highlights in light gray.
