# Raphael Autos - Project Context

## Overview
Raphael Autos is a high-end luxury automobile dealership web application. The platform provides a premium digital experience for users looking to buy, sell, trade-in, or source curated luxury vehicles. It embodies a "Rolls-Royce style" aesthetic, emphasizing craftsmanship, provenance, and performance.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript

## Architecture & File Structure
The project uses the Next.js App Router paradigm.
- `/app/page.tsx`: The main landing page featuring a Hero Slider, Featured Collections, Featured Inventory, Concierge Services, Testimonials, and a Final Call to Action.
- `/app/inventory/`: Page detailing the available vehicle inventory.
- `/app/sell-trade-in/`: Page dedicated to users wanting to sell or trade in their vehicles.
- `/app/vehicle-sourcing/`: Page for concierge vehicle sourcing services.
- `/components/`: Contains modular React components (e.g., `HeroSlider`, `FeaturedInventory`, `Navbar`, `Footer`, `ConciergeServices`, `SellTradeInContent`, `VehicleSourcingContent`) emphasizing reusability and a premium UI.
- `/components/ui/`: Contains smaller, reusable UI elements.

## Design System & Aesthetics ("Rolls-Royce Style")
The UI is strictly defined by a luxurious, high-end automotive brand aesthetic (inspired by Rolls-Royce) that emphasizes exclusivity, craftsmanship, and performance. All UI development must strictly adhere to these specific tokens and patterns defined in `app/globals.css`:

- **Typography Strategy:**
  - **Display / Headers:** `Gilda Display` (Serif) is used for all prominent headings to evoke a classic, timeless elegance.
  - **Body / Labels:** `Space Mono` (Monospace) is used for body text, tags, tracking labels, and technical specifications, providing a modern, precise, and engineered contrast to the elegant headers.
  - **Typography Tokens:**
    - `Display`: Responsive sizing (`clamp(2.25rem, 5vw, 3.5rem)`), `-0.02em` tracking.
    - `Body`: `14px` sizing, `0.05em` tracking for legibility.
    - `Body Large`: `16px` sizing, `0.15em` tracking for prominent labels.

- **Color Palette:** High-contrast, strictly controlled color palette:
  - **Primary Background:** Crisp White (`#ffffff`) - ensures a clean gallery-like showcase for the vehicles.
  - **Primary Foreground:** Deep Charcoal Black (`#111111`) - used for primary text and major UI sections.
  - **Accent:** Raphael Gold (`#c9a227` or `--color-cooliocns-gold`) - used sparingly for active states, elegant borders, buttons, and text highlights.
  - **Grays:** Very limited use of `#1a1a1a` and `#f5f5f5` for subtle section distinctions.

- **Vibe & Interactivity:**
  - **Minimalism & Polish:** UI should feel highly curated. Use glassmorphism or sleek, thin borders (`border-cooliocns-gold/20`) when dividing sections, never bulky dividers.
  - **Animations:** Subtle, smooth animations are key to the premium feel. The system utilizes:
    - `animate-slide-zoom`: Slow, 15-second Ken Burns style zoom for hero images.
    - `animate-fade-in`: 0.8s smooth cubic-bezier transitions.
    - `animate-story-progress`: 15s linear progress indicators for carousels.
  - **Clean Presentation:** All side scrollbars are completely hidden globally (`scrollbar-width: none`) to maintain a flawless, app-like cinematic experience.
## Guidelines for Claude
- **Next.js Conventions:** Maintain the Next.js App Router conventions. Be mindful of Server vs Client components (e.g., using `"use client"` only when necessary).
- **Styling:** Adhere strictly to the luxury design principles when adding or modifying components. Avoid generic styling. Use the existing Tailwind configuration, custom colors, and ensure pixel-perfect alignment.
- **Brand Voice:** Ensure all new features, copy, and interactions align with the high-end concierge experience the Raphael Autos brand aims to deliver.
- **Next.js 15+ Compatibility:** The project is using recent Next.js and React versions. Heed breaking changes and deprecation notices as per the modern Next.js documentation.
