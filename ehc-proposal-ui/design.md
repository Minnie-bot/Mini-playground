# Design System Document

## 1. Overview & Creative North Star

This design system is engineered to elevate a home maintenance utility into a high-end "Digital Concierge" experience. We are moving away from the cluttered, "builder-grade" aesthetic of traditional service apps toward a sophisticated, editorial-inspired interface.

**Creative North Star: The Architectural Editorial**

The vision is one of structural clarity and quiet authority. We achieve this by breaking the rigid, "boxed-in" layout of standard web templates. We use intentional asymmetry, generous white space (breathing room), and a hierarchy of layered surfaces rather than lines. The experience should feel like flipping through a premium architectural digest—authoritative yet inviting, efficient yet luxurious.

---

## 2. Colors & Surface Philosophy

Our palette balances the reliability of Deep Navy with the energy of Artisan Blue, grounded by a sophisticated range of neutral surfaces.

### Surface Hierarchy & Nesting

To achieve a premium feel, we strictly prohibit the use of 1px solid borders for sectioning. Boundaries are defined through **Tonal Layering**.

- **The "No-Line" Rule:** Never use a stroke to separate content. Use background color shifts. For example, a `surface-container-low` (#f3f3f3) card should sit on a `surface` (#f9f9f9) background to create organic separation.

- **Layered Depth:** Treat the UI as physical layers. An inner container should always move toward a "lighter" or "purer" surface token (e.g., `surface-container-lowest` / #ffffff) to signify its proximity to the user.

### Signature Textures

- **The Glass & Gradient Rule:** For floating elements or top-tier CTAs, use Glassmorphism. Implement `surface_container_lowest` at 80% opacity with a `backdrop-blur: 12px`.

- **Directional Light:** Primary CTAs should utilize a subtle linear gradient from `primary` (#0060a8) to `primary_container` (#1e96fc) at a 135-degree angle. This prevents the "flat" look and adds a sense of tactile polish.

---

## 3. Typography

The system utilizes **Plus Jakarta Sans**, a modern geometric sans-serif that strikes a balance between technical precision and human warmth.

- **Display & Headlines (The Editorial Voice):** Use `display-lg` and `headline-lg` with tight letter-spacing (-0.02em) to create an authoritative, "magazine-cover" feel. Large-scale typography is our primary tool for establishing hierarchy—not bold colors.

- **Body & Labels:** `body-md` serves as the workhorse for all service descriptions. It must maintain a line-height of 1.6 to ensure the "airy" premium feel is preserved even in dense information.

- **Intentional Contrast:** Pair a `display-sm` headline in `on_surface` with a `label-md` in `primary` (all caps, +0.05em tracking) for a sophisticated "Digital Concierge" metadata look.

---

## 4. Elevation & Depth

We convey importance through **Tonal Elevation** and **Ambient Light** rather than structural shadows.

- **The Layering Principle:** Depth is achieved by stacking the surface tokens. A `surface-container-lowest` element placed on a `surface-container-low` background creates a natural, soft lift.

- **Ambient Shadows:** When a shadow is technically required (e.g., a floating modal), it must be extra-diffused. Use a blur of 32px or higher with an opacity of 4%–8%. The shadow color must be a tinted version of `on_surface` (#1a1c1c), never a raw black.

- **Ghost Borders:** If a boundary is required for accessibility in complex forms, use the `outline_variant` token at 15% opacity. This "Ghost Border" provides a hint of structure without interrupting the visual flow.

---

## 5. Components

### Buttons & Interaction

- **Primary Action:** Rounded at `DEFAULT` (8px). Use the signature gradient (Primary to Primary Container). Text must be `on_primary`.

- **Secondary/Tertiary:** Use `surface-container-high` as a background with `on_surface` text. No border.

### Chips (Service Categories)

- **Filter Chips:** Use `surface-container-low` with `on_surface_variant` text. Upon selection, transition to `primary_container` with `on_primary_container` text.

### Input Fields

- **The Concierge Input:** Use `surface_container_low` for the fill. No border. On focus, transition the background to `surface_container_lowest` and add a 1px "Ghost Border" using `primary` at 20% opacity.

### Cards & Service Lists

- **Card Layout:** Forbid divider lines. Use a `spacing.8` (2rem) vertical gap to separate items.

- **Imagery:** All imagery within cards should have a subtle `outline_variant` (10% opacity) to prevent the image from "bleeding" into the white background.

### Concierge Progress Tracker

- A specialized component for home maintenance updates. Use a vertical `surface_container_high` line (2px) with `primary` nodes. The background of the active state should use a `backdrop-blur` glass effect.

---

## 6. Do’s and Don’ts

### Do:

- **DO** use white space as a structural element. If a section feels crowded, increase the spacing from `8` (2rem) to `12` (3rem) rather than adding a divider.

- **DO** use asymmetric layouts. For example, a large headline on the left with a smaller descriptive paragraph offset to the right.

- **DO** apply the `0.5rem` (8px) roundness consistently across all containers and buttons to maintain the brand’s "Modern/Trustworthy" balance.

### Don't:

- **DON'T** use 100% black text. Always use `on_surface` (#1a1c1c) for better visual comfort and a premium feel.

- **DON'T** use standard drop shadows. If it looks like a "box shadow," it's too heavy. It should look like "ambient light."

- **DON'T** use 1px solid borders to define cards. Use background color shifts (`surface` vs `surface-container-low`) instead.
