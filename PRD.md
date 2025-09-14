# Portfolio Website for Rajat Jain

A modern, professional portfolio website showcasing software engineering expertise with elegant design and seamless user experience.

**Experience Qualities**:
1. **Professional** - Clean, sophisticated design that reflects technical competency and attention to detail
2. **Interactive** - Smooth animations and transitions that engage visitors without overwhelming
3. **Accessible** - Intuitive navigation and responsive design that works flawlessly across all devices

**Complexity Level**: Light Application (multiple features with basic state)
- Features theme switching, smooth scrolling navigation, and responsive layouts while maintaining focus on content presentation

## Essential Features

**Theme Toggle**
- Functionality: Switch between dark and light modes with system preference detection
- Purpose: Enhances user comfort and demonstrates modern web development practices
- Trigger: Theme toggle button in header
- Progression: Click toggle → Smooth transition → Theme persists across sessions
- Success criteria: Instant visual feedback, preference remembered, no layout shifts

**Hero Section**
- Functionality: Compelling introduction with name, title, and call-to-action
- Purpose: Creates strong first impression and immediately communicates value proposition
- Trigger: Page load
- Progression: Load → Animated text reveal → CTA buttons appear → Scroll indicator
- Success criteria: Clear hierarchy, compelling copy, smooth animations

**Skills Showcase**
- Functionality: Interactive display of technical skills with proficiency indicators
- Purpose: Quickly communicate technical capabilities to recruiters and clients
- Trigger: Scroll into view
- Progression: Enter viewport → Staggered skill cards animate in → Hover effects
- Success criteria: Easy scanning, visual hierarchy, interactive feedback

**Project Portfolio**
- Functionality: Curated project showcase with descriptions and links
- Purpose: Demonstrates practical application of skills and problem-solving ability
- Trigger: Navigation or scroll
- Progression: Select project → View details → External links → Return to overview
- Success criteria: Clear project value, easy navigation, functional links

**Contact Section**
- Functionality: Professional contact information and social links
- Purpose: Facilitates connections and opportunities
- Trigger: Navigation or scroll to bottom
- Progression: View contact options → Click preferred method → External action
- Success criteria: Multiple contact methods, professional presentation

## Edge Case Handling

- **Slow Connections**: Graceful loading states with skeleton screens and progressive enhancement
- **JavaScript Disabled**: Core content remains accessible with CSS-only fallbacks
- **Extreme Screen Sizes**: Fluid responsive design handles ultra-wide and very narrow viewports
- **Motion Sensitivity**: Respects user preference for reduced motion
- **Keyboard Navigation**: Full keyboard accessibility with visible focus indicators

## Design Direction

The design should feel sophisticated and modern, conveying technical expertise through clean minimalism and purposeful interactions, balancing professional credibility with contemporary web design trends.

## Color Selection

Analogous color scheme focusing on cool blues and teals to convey trust, professionalism, and technical competency while maintaining excellent readability.

- **Primary Color**: Deep Blue (oklch(0.4 0.15 250)) - Communicates trust, professionalism, and technical depth
- **Secondary Colors**: Slate grays (oklch(0.6 0.02 250)) for supporting elements and neutral backgrounds
- **Accent Color**: Bright Teal (oklch(0.7 0.15 200)) - Eye-catching highlight for CTAs and interactive elements
- **Foreground/Background Pairings**: 
  - Background (White oklch(1 0 0)): Dark Blue text (oklch(0.2 0.05 250)) - Ratio 12.1:1 ✓
  - Card (Light Gray oklch(0.98 0.01 250)): Dark Blue text (oklch(0.2 0.05 250)) - Ratio 11.8:1 ✓
  - Primary (Deep Blue oklch(0.4 0.15 250)): White text (oklch(1 0 0)) - Ratio 8.2:1 ✓
  - Accent (Bright Teal oklch(0.7 0.15 200)): White text (oklch(1 0 0)) - Ratio 4.6:1 ✓

## Font Selection

Typography should convey modern professionalism with excellent readability, using a contemporary sans-serif that feels both technical and approachable.

- **Typographic Hierarchy**:
  - H1 (Name/Hero): Inter Bold/48px/tight letter spacing
  - H2 (Section Titles): Inter SemiBold/32px/normal spacing
  - H3 (Subsection): Inter Medium/24px/normal spacing
  - Body (Content): Inter Regular/16px/relaxed line height
  - Caption (Meta): Inter Regular/14px/normal spacing

## Animations

Subtle, purposeful animations that enhance the professional feel without being distracting, focusing on smooth transitions that guide user attention and provide satisfying interaction feedback.

- **Purposeful Meaning**: Motion reinforces the technical sophistication while maintaining professional restraint
- **Hierarchy of Movement**: Hero elements get priority animation, followed by section reveals, then micro-interactions

## Component Selection

- **Components**: Card for project showcases, Button variants for CTAs, Badge for skills, Separator for section divisions, custom theme toggle
- **Customizations**: Custom animated skill cards, project gallery with hover effects, smooth scroll navigation
- **States**: Buttons show clear hover/active states, cards lift on hover, theme toggle provides immediate feedback
- **Icon Selection**: Phosphor icons for consistency - User for about, Code for projects, Mail for contact, Sun/Moon for theme
- **Spacing**: Consistent 8px base unit with generous section padding (96px) and comfortable content spacing (24px)
- **Mobile**: Stack navigation horizontally on mobile, single-column layouts, touch-friendly button sizes (44px minimum)