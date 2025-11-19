# Remix (Customization Guide)

Make it yours without breaking it.

---

## The Golden Rule

**Don't fork the library. Use CSS variables instead.**

All colors, spacing, and typography are CSS custom properties. Override them in your own CSS.

---

## Change Accent Color

Your primary brand color everywhere:

```jsx
<Theme accentColor="blue">
  {/* Now buttons, links, focus states use blue */}
</Theme>
```

**Available colors:**
`gray`, `blue`, `red`, `orange`, `green`, `teal`, `cyan`, `purple`, `pink`, `jade`, `indigo`, `violet`, `brown`, `bronze`, `gold`, `amber`, `lime`, `mint`, `olive`, `sage`, `sand`, `slate`, `sky`, `mauve`, `plum`, `ruby`, `crimson`, `tomato`, `yellow`, `grass`, `iris`

---

## Change Radius (Border Radius)

Control how "round" components are:

```jsx
<Theme radius="none">      {/* Perfectly square */}
<Theme radius="small">     {/* Subtle rounding */}
<Theme radius="medium">    {/* Default */}
<Theme radius="large">     {/* Very round */}
<Theme radius="full">      {/* Fully rounded (pills) */}
```

---

## Change Scaling

Control the overall size of components:

```jsx
<Theme scaling="90%">   {/* 10% smaller */}
<Theme scaling="100%">  {/* Default */}
<Theme scaling="110%">  {/* 10% larger */}
```

---

## Override Colors with CSS

Want a custom color that doesn't exist? Use CSS variables:

```css
/* In your app's CSS file */
:root {
  --color-background: #fafafa;      /* Page background */
  --color-surface: #f5f5f5;          /* Subtle backgrounds */
  --color-panel-solid: #ffffff;      /* Card backgrounds */
  --color-text: #1a1a1a;             /* Text color */
}
```

---

## Custom Font Stack

```css
:root {
  --font-family-heading: 'Georgia', serif;
  --font-family-body: 'System UI', sans-serif;
  --font-family-mono: 'Monaco', monospace;
}
```

---

## Spacing Values

All spacing uses a scale of 1-9:

| Value | Pixels |
|-------|--------|
| 1 | 4px |
| 2 | 8px |
| 3 | 12px |
| 4 | 16px |
| 5 | 20px |
| 6 | 24px |
| 7 | 28px |
| 8 | 32px |
| 9 | 36px |

```jsx
<Box p="4" m="2" gap="3">
  {/* 16px padding, 8px margin, 12px gap */}
</Box>
```

---

## Theme Configuration

Advanced customization via CSS:

```jsx
// Define your theme in CSS
<style>
  :root {
    --accent-color: blue;
    --radius: medium;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --appearance: dark;
    }
  }
</style>

<Theme>
  {/* Uses your CSS variables */}
</Theme>
```

---

## Dark Mode

Default is light. Force dark mode:

```jsx
<Theme appearance="dark">
  {/* All components use dark colors */}
</Theme>
```

Or let users choose with `localStorage`:

```jsx
const [isDark, setIsDark] = useState(() =>
  localStorage.getItem('theme') === 'dark'
);

return (
  <Theme appearance={isDark ? 'dark' : 'light'}>
    <Button onClick={() => {
      setIsDark(!isDark);
      localStorage.setItem('theme', isDark ? 'light' : 'dark');
    }}>
      Toggle Dark Mode
    </Button>
  </Theme>
);
```

---

## Custom Component Style

Components support `className` for custom CSS:

```jsx
<Button className="my-custom-button">
  Click me
</Button>

/* In your CSS */
.my-custom-button {
  font-weight: bold;
  letter-spacing: 0.05em;
}
```

---

## Don't Do This

❌ **Don't** import and modify the source CSS
❌ **Don't** use `!important` everywhere
❌ **Don't** change component structure/HTML
❌ **Don't** override internal Radix classes

✅ **Do** use CSS variables
✅ **Do** use `className` for custom styles
✅ **Do** use Theme props (accentColor, radius, appearance)
✅ **Do** build on top of components with new wrappers

---

## Example: Custom Button Style

```jsx
// CustomButton.tsx
import { Button, ButtonProps } from '@radix-ui/themes';

export function MyButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className="my-button"
      size="3"
      variant="soft"
    />
  );
}

/* In your CSS */
.my-button {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}
```

---

## Example: Custom Card

```jsx
// CustomCard.tsx
import { Card, CardProps } from '@radix-ui/themes';
import { ReactNode } from 'react';

interface CustomCardProps extends CardProps {
  title: string;
  children: ReactNode;
}

export function MyCard({ title, children, ...props }: CustomCardProps) {
  return (
    <Card {...props} className="my-card">
      <h3 style={{ margin: 0, marginBottom: 8 }}>{title}</h3>
      {children}
    </Card>
  );
}
```

---

## Color Palette Reference

All 20+ semantic colors are CSS variables:

```css
:root {
  /* Neutrals */
  --color-gray-1: #fcfcfc;
  --color-gray-9: #1f1f1f;

  /* Accent colors (theme.accentColor) */
  --color-primary: /* Your accent color */

  /* Semantic */
  --color-success: /* Green */
  --color-warning: /* Orange */
  --color-error: /* Red */
  --color-info: /* Blue */
}
```

---

## Need More?

- Radix UI docs: https://radix-ui.com/themes/docs
- Component source: `/themes/packages/radix-ui-themes/src/`
- Examples: `/examples` folder

---

## TL;DR

1. **Accent Color** → Use `<Theme accentColor="blue">`
2. **Border Radius** → Use `<Theme radius="large">`
3. **Sizing** → Use `<Theme scaling="110%">`
4. **Custom CSS** → Use CSS variables or `className`
5. **Dark Mode** → Use `<Theme appearance="dark">`

That's it. You're remixing now.
