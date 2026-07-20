# Premium Website Component Documentation

## Hero Component

Full-screen hero section with cinematic background and call-to-action buttons.

**Features:**
- Animated gradient background
- Smooth title and subtitle animations
- Primary and secondary CTA buttons
- Scroll indicator with bounce animation
- Mobile responsive

**Props:** None
**State:** None

---

## About Component

Company information section with glassmorphism design.

**Features:**
- Company mission and vision
- Glassmorphic card design
- Scroll reveal animation
- Responsive grid layout

**Props:** None
**State:** None

---

## Models Component

Displays 5 premium e-scooter models with specifications.

**Features:**
- Product cards with specifications
- Motor, Battery, Range, Top Speed details
- Three action buttons (Details, Test Ride, WhatsApp)
- Hover scale effects
- Grid layout with responsiveness
- Model hover state

**Props:** None
**State:** `selectedModel` - Track hovered model

---

## WhyChoose Component

Showcases 8 key differentiators with icons.

**Features:**
- 8 reason cards with emoji icons
- Hover scale effects
- Glassmorphic design
- Grid layout (1, 2, 4 columns)
- Scroll animations

**Props:** None
**State:** None

---

## Gallery Component

Masonry-style gallery with hover animations.

**Features:**
- 6 gallery items
- Hover overlay with category
- Glassmorphic design
- Responsive grid
- Smooth animations

**Props:** None
**State:** `hoveredIndex` - Track hovered gallery item

---

## TestRide Component

Test ride booking form with validation.

**Features:**
- Name input
- Phone input
- Model selector dropdown
- Date picker
- Form validation
- Success message animation
- Responsive design

**Props:** None
**State:**
- `formData` - Form input values
- `submitted` - Success state

---

## Contact Component

Contact information and embedded map.

**Features:**
- 4 contact info cards (Location, Phone, Email, Instagram)
- Google Map embed
- Responsive layout
- Hover animations
- Contact details display

**Props:** None
**State:** `contactType` - Track selected contact method

---

## Footer Component

Footer with links, social media, and company info.

**Features:**
- Brand section
- Quick links
- Contact info
- Social media links
- Copyright notice
- Responsive grid

**Props:** None
**State:** None

---

## FloatingButtons Component

Fixed floating action buttons.

**Features:**
- WhatsApp button (links to chat)
- Call button (tel: link)
- Back to Top button (scroll to top)
- Animated appearance/disappearance
- Glow effects
- Mobile responsive

**Props:** None
**State:** `showBackToTop` - Show button after scroll

---

## Utility Functions (animations.js)

### initializeAnimations()
Initialize all scroll reveal animations on page load.

### animateOnScroll(element, options)
Animate element when scrolled into view.

### parallaxEffect(element, speed)
Create parallax scrolling effect.

### hoverScale3D(element)
Add 3D scale effect on hover.

### countUp(element, endValue, duration)
Animate number counting up.

### staggerAnimation(elements, options)
Stagger animation across multiple elements.

---

## Styling

### Global Styles (globals.css)
- Font imports
- Glassmorphism utility classes
- Green glow effects
- Custom scrollbar styling
- Custom animations
- Text selection styling

### Animation Classes (animations.css)
- `animate-fadeInUp`
- `animate-fadeInDown`
- `animate-slideInLeft`
- `animate-slideInRight`
- `animate-float`
- `animate-glow`

### Tailwind Config (tailwind.config.js)
- Custom colors (primary, secondary, accent, light)
- Custom font families
- Custom animations and keyframes
- Extended theme configuration

---

## Installation & Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:3000
```

---

## Dependencies

- **react**: UI library
- **react-dom**: React DOM rendering
- **gsap**: Advanced animations
- **framer-motion**: React animation library
- **tailwindcss**: Utility-first CSS
- **vite**: Build tool

---

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

---

## Performance Optimizations

- ✅ Code splitting with Vite
- ✅ Lazy loading images
- ✅ CSS purging with Tailwind
- ✅ Efficient animations with GSAP
- ✅ Scroll trigger optimization
- ✅ Component-based architecture

---

## SEO Features

- ✅ Meta tags (title, description, keywords)
- ✅ Semantic HTML
- ✅ Mobile responsive
- ✅ Fast loading
- ✅ Accessibility features
- ✅ Structured data ready

---

*Last Updated: 2026-07-20*
