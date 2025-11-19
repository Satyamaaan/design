# Light Theme (Default)

Everything you need to know about the beautiful light theme.

---

## Overview

Light theme is the **default** and optimized appearance. It's designed for readability, accessibility, and modern aesthetics.

```jsx
<Theme appearance="light">
  {/* Light theme enabled (default) */}
</Theme>
```

---

## Light Theme Characteristics

### Background Colors

| Element | Color | Usage |
|---------|-------|-------|
| **Page Background** | `#ffffff` (white) | Main page/app background |
| **Surface** | `#fcfcfc` (very light gray) | Subtle backgrounds, hover states |
| **Panel Solid** | `#ffffff` (white) | Cards, panels, containers |
| **Overlay** | `rgba(0,0,0,0.04)` | Modal overlay, scrim |

### Text Colors

| Level | Color | Contrast | Usage |
|-------|-------|----------|-------|
| **Primary** | `#1a1a1a` (near black) | 21:1 | Body text, headings |
| **Secondary** | `#626262` (gray) | 7:1 | Muted text, hints |
| **Disabled** | `#a8a8a8` (light gray) | 4.5:1 | Disabled state |

All text colors meet **WCAG AAA** (7:1+) standards for accessibility.

### Border & Outline

| Element | Color | Usage |
|---------|-------|-------|
| **Subtle Border** | `#e5e5e5` | Input borders, separators |
| **Strong Border** | `#d1d1d1` | Card borders, visual separation |
| **Focus Ring** | Accent color | Keyboard focus indicator |

---

## Color Palette

The light theme includes 30+ semantic colors, all optimized for light backgrounds:

### Primary Colors

- **Blue** - Trust, tech, primary actions
- **Purple** - Creative, modern
- **Indigo** - Professional, corporate
- **Violet** - Modern, vibrant

### Success / Positive

- **Green** - Success, completion
- **Jade** - Health, growth
- **Mint** - Fresh, positive
- **Grass** - Natural, eco

### Warning / Caution

- **Yellow** - Warning, attention
- **Orange** - Caution, alert
- **Amber** - Important, secondary warning
- **Gold** - Premium, highlight

### Error / Negative

- **Red** - Error, danger, critical
- **Tomato** - Error, stop
- **Ruby** - Danger, critical action
- **Crimson** - Urgent, high priority

### Neutral / Secondary

- **Gray** - Neutral, disabled
- **Slate** - Professional, muted
- **Mauve** - Soft, elegant
- **Sand** - Warm, earthy

All colors are WCAG AAA compliant with sufficient contrast ratios.

---

## Typography

### Font Families

**Body & UI (sans-serif):**
- `-apple-system` (macOS/iOS)
- `BlinkMacSystemFont` (Chrome on macOS)
- `Segoe UI` (Windows)
- `Roboto` (Android)
- `Helvetica Neue` (fallback)
- `sans-serif` (system fallback)

**Headings:**
Same family as body, but with bold weights (600-700).

**Code/Monospace:**
- `SF Mono` (macOS)
- `Monaco` (fallback)
- `Menlo` (fallback)
- `Consolas` (Windows)
- `monospace` (system fallback)

### Type Scale (Text Sizes)

| Size | Pixels | Usage |
|------|--------|-------|
| 1 | 12px | Small captions, hints, timestamps |
| 2 | 13px | Secondary text, labels |
| 3 | 15px | Body text (default) |
| 4 | 17px | Large body text |
| 5 | 19px | Large text, important content |
| 6 | 21px | Extra large, emphasis |
| 7 | 27px | Heading, large title |
| 8 | 35px | Heading, section title |
| 9 | 46px | Heading, page title |

### Font Weights

- **Light (300)** - Not commonly used in light theme
- **Normal (400)** - Body text, regular weight
- **Medium (500)** - Emphasized text, labels
- **Bold (700)** - Headings, important text

### Line Height

- Headings: 1.2 (tight)
- Body: 1.5 (comfortable)
- Code: 1.6 (loose for readability)

---

## Spacing & Layout

### Space Scale

All spacing uses an 8px base unit:

| Token | Size | Usage |
|-------|------|-------|
| 1 | 4px | Tight, internal spacing |
| 2 | 8px | Default small gap |
| 3 | 12px | Standard small gap |
| 4 | 16px | Default gap |
| 5 | 20px | Comfortable spacing |
| 6 | 24px | Generous spacing |
| 7 | 28px | Large spacing |
| 8 | 32px | Extra large spacing |
| 9 | 36px | Maximum spacing |

### Border Radius

- **none** - 0px (square)
- **small** - 6px (subtle rounding)
- **medium** - 8px (default, balanced)
- **large** - 12px (rounded appearance)
- **full** - 50% (pill-shaped buttons)

Default is `medium` (8px) for a modern, balanced look.

---

## Component Sizing

### Component Sizes

| Size | Usage |
|------|-------|
| **1** | Compact, tight spaces (form inputs) |
| **2** | Default for most components |
| **3** | Large, prominent elements |
| **4** | Extra large, page-level |

Most components default to **size 2** unless specified.

---

## Shadows & Elevation

Light theme uses subtle shadows for elevation:

### Shadow Levels

| Level | Blur | Spread | Usage |
|-------|------|--------|-------|
| **Small** | 4px | 0 | Input focus, light lift |
| **Medium** | 8px | 0 | Cards, dropdowns (default) |
| **Large** | 12px | -2px | Modals, important cards |
| **Extra Large** | 24px | -4px | Maximum elevation |

Shadows are soft and dark enough to be visible but not harsh.

---

## Transitions & Animations

### Default Timing

- **Fast**: 100ms - Quick feedback (hover, active states)
- **Normal**: 200ms - Standard animations (fade, slide)
- **Slow**: 400ms - Dramatic effects (modal open, large transitions)

All animations are smooth and non-jarring.

---

## Contrast & Accessibility

### WCAG Compliance

All colors in light theme are designed to meet:

- **WCAG AAA** (7:1 contrast ratio) for text
- **WCAG AA** (4.5:1 minimum) for all elements
- Works for users with color blindness (50+ color combinations tested)

### Dark Text on Light

- Primary text: 21:1 contrast ratio (excellent)
- Secondary text: 7:1 contrast ratio (AAA)
- Disabled text: 4.5:1 contrast ratio (AA)

### Interactive Elements

- All buttons, links, and inputs have visible focus states
- Focus rings are always visible (no `outline: none`)
- Minimum 44x44px touch targets on mobile

---

## Best Practices for Light Theme

### DO

✅ Use light backgrounds (white or very light gray)
✅ Use dark text (near black or dark gray)
✅ Provide sufficient contrast (7:1+ for AAA)
✅ Use subtle shadows for elevation
✅ Use color + icon/badge for status (not color alone)
✅ Test with dark mode for comparison
✅ Use the default border radius (medium/8px)

### DON'T

❌ Use low-contrast text (light gray on white)
❌ Use harsh, vibrant colors for backgrounds
❌ Override shadows or remove elevation
❌ Use color alone for critical information
❌ Add custom shadows that conflict with system shadows
❌ Reduce border radius for a "flat" look (use subtle depth)

---

## Customizing Light Theme

### Change Accent Color

```jsx
<Theme appearance="light" accentColor="green">
  {/* Green is now primary color */}
</Theme>
```

### Custom Background Colors

```css
:root {
  --color-background: #fafafa;  /* Slightly off-white */
  --color-surface: #f5f5f5;     /* Subtle background */
}
```

### Custom Text Colors

```css
:root {
  --color-text: #1a1a1a;           /* Dark text */
  --color-text-secondary: #666666; /* Medium gray */
}
```

### Adjust Border Radius

```jsx
<Theme appearance="light" radius="large">
  {/* More rounded appearance */}
</Theme>
```

---

## Light Theme in Practice

### Button States

**Default (solid, size 2):**
- Background: Accent color
- Text: White
- Hover: Accent color darker
- Active: Accent color darkest
- Disabled: Light gray

**Soft variant:**
- Background: Accent color at 20% opacity
- Text: Accent color
- Hover: Accent color at 30% opacity
- Disabled: Light gray

**Outline variant:**
- Background: Transparent
- Border: Accent color
- Text: Accent color
- Hover: Light background
- Disabled: Light gray

### Card Styling

- Background: White (`#ffffff`)
- Border: Light gray
- Shadow: Subtle (4-8px blur)
- Border radius: 8px (medium)
- Padding: 16-24px (spacing 4-6)

### Form Input Styling

- Background: White
- Border: Light gray (1px)
- Focus: Blue border + focus ring
- Placeholder: Light gray text
- Text: Dark gray
- Padding: 8-12px (spacing 2-3)

---

## Comparison: Light vs Dark Theme

```jsx
// Light (default) - optimized for daytime use
<Theme appearance="light">
  <App />
</Theme>

// Dark - for evening/night use
<Theme appearance="dark">
  <App />
</Theme>
```

Both themes:
- Use the same component structure
- Have the same functionality
- Maintain WCAG AAA contrast
- Support all 30+ colors

---

## Optimizing for Light Theme

### Tips for Beautiful Light UIs

1. **Embrace whitespace** - Use generous spacing
2. **Subtle shadows** - For elevation without harshness
3. **Rounded corners** - Modern, friendly appearance
4. **Primary color accent** - Use one accent color consistently
5. **Hierarchy through size** - Not just darkness
6. **Icon + color combos** - For status, not color alone

### Performance

Light theme is lightweight:
- No additional CSS for dark theme needed
- Uses CSS custom properties (browser native)
- Zero JavaScript overhead
- Instant switching with CSS class toggle

---

## Light Theme Tokens (CSS Variables)

If you need to reference the exact values:

```css
:root {
  /* Backgrounds */
  --color-background: white;
  --color-surface: #fcfcfc;
  --color-panel-solid: white;
  --color-panel-translucent: rgba(255, 255, 255, 0.7);

  /* Text */
  --color-text: #1a1a1a;
  --color-text-secondary: #626262;

  /* Borders */
  --color-border: #e5e5e5;

  /* Shadows */
  --shadow-1: 0 4px 4px rgba(0,0,0,0.04);
  --shadow-2: 0 8px 8px rgba(0,0,0,0.08);

  /* Radius */
  --radius-small: 6px;
  --radius-medium: 8px;
  --radius-large: 12px;
}
```

---

## Troubleshooting

**Text is too dark?**
- Use `<Text color="gray">` for secondary text
- Reduce text size for visual hierarchy

**Shadows too subtle?**
- Use larger, more prominent cards
- Add more spacing between elements
- Consider color contrast instead of shadows

**Colors not appearing right?**
- Ensure `@radix-ui/themes/styles.css` is imported
- Check that theme colors are valid
- Verify CSS custom properties are not overridden

---

## Next Steps

- Explore [QUICK_START.md](./QUICK_START.md) for implementation
- Check [COMPONENT_MENU.md](./COMPONENT_MENU.md) for component choices
- See [REMIX.md](./REMIX.md) for customization
- Review `/examples` for light theme in action
