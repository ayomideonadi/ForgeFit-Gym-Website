# ForgeFit Gym Website — Modern Fitness Prototype

A modern, fully responsive React & TypeScript gym web application focused on conversion, clarity, and exceptional user experience. Built as a capstone project for **ForgeFit Gym**.

![ForgeFit Preview](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Overview & Features

ForgeFit Gym is engineered to bridge the gap between hard-core athletic performance centers and luxury wellness facilities.

### Key Highlights & 9 Full Screens
1. **Home Page**: Hero section with ambient background glow, live proof counter (2,500+ members, 4.9★ rating), 4 core value props, featured class spotlights, coach roster, transformation carousel, and bottom conversion banner.
2. **Memberships Page**: Monthly vs. Annual billing toggle (saving 20%), tiered pricing cards (Basic Pass $49, Pro Fitness $89, Elite VIP $139), full feature comparison matrix, and accordion FAQs.
3. **Classes & Schedule**: Filterable weekly schedule by Day (Mon–Sun), Category (Strength, HIIT, Yoga, Boxing, Recovery), and Difficulty level, with real-time search and spot reservation.
4. **Coaches Roster**: Specialty-filtered grid of coaches with interactive detail modals showcasing bios, certifications, weekly schedule, and 1-on-1 booking.
5. **Interactive Macro & Calorie Calculator**: BMR, TDEE, and daily macro breakdown (Protein, Carbs, Fats) tuned for Fat Loss (-500 kcal), Maintenance, or Muscle Gain (+400 kcal).
6. **Forge Journal / Blog**: Science-backed athletic performance, nutrition, and recovery articles written by head coaches with full article reader modal.
7. **About & Facility**: Gym story, core values, amenities list, and an interactive category-filtered facility photo gallery.
8. **Contact & Location**: Validated contact form with field errors and instant feedback toast, operating hours, phone, email, and custom map component.
9. **404 Error Screen**: Friendly error page with flame graphic and quick return buttons.

---

## 🎨 Interactive Features

- **Digital Free Trial Pass Modal**: Multi-step booking form generating a digital pass with pass code (`FF-2026-XXXXXX`) and simulated QR code.
- **Custom Interactive Map**: Vector map canvas with clickable hotspots for Gym HQ, Covered Parking, and Metro Station with transit directions.
- **Dark/Light Theme Switcher**: High-contrast dark fitness aesthetic with smooth transition to clean light mode.
- **Toast Notification System**: Real-time feedback alerts for class reservations, form submissions, and newsletter subscriptions.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 + Custom Glassmorphic CSS Design Tokens
- **Icons**: Lucide React Icons
- **Utility Libraries**: `clsx`, `tailwind-merge`

---

## 💻 Getting Started

### Prerequisites
- Node.js v18+ or v24+
- `npm` or `pnpm`

### Installation & Execution

```bash
# 1. Clone or navigate to directory
cd C:\Users\DELL\.gemini\antigravity\scratch\forgefit-gym

# 2. Install dependencies
npm install

# 3. Launch local development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Production Build

```bash
npm run build
```

The output will be generated in `dist/`.

---

## 🎓 Capstone Defense & Design Rationales

1. **Conversion-Focused UX**: Dual CTAs ("Start Free Trial" & "View Memberships") remain accessible on header, hero, cards, and footer.
2. **Mobile-First Responsive Layout**: Drawer menu overlay and grid breakpoints ensure smooth operation across mobile phones, tablets, and desktop displays.
3. **Accessibility (a11y)**: High-contrast text colors, semantic HTML tags (`header`, `main`, `footer`, `nav`, `article`), keyboard support, and clear visual state changes.
