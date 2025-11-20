# Design Systems for AI Agents & Vibe Coders

Beautiful, accessible UI components. Copy-paste ready. Built with agents in mind.

---

## What This Is

A curated, **production-ready** design system based on Radix UI Themes, optimized for:

- **Vibe Coders** - Minimal learning curve, maximum creativity
- **AI Agents** - Formal specs, clear rules, zero ambiguity
- **Everyone** - Accessible by default, beautiful by design

Light theme. ~60 components. 30+ colors. Plug and play.

---

## Quick Start (30 Seconds)

```bash
npm install @radix-ui/themes
```

```jsx
import { Theme, Button, Card, Flex } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export default function App() {
  return (
    <Theme>
      <Flex gap="4" p="4">
        <Card>
          <Button>You're ready to go</Button>
        </Card>
      </Flex>
    </Theme>
  );
}
```

That's it. You now have a beautiful, accessible UI.

---

## Documentation

### For Vibe Coders (Humans)

- **[QUICK_START.md](./QUICK_START.md)** - 30-second intro + copy-paste examples
- **[COMPONENT_MENU.md](./COMPONENT_MENU.md)** - "When to use what" quick reference
- **[REMIX.md](./REMIX.md)** - Customization without breaking things
- **[LIGHT_THEME.md](./LIGHT_THEME.md)** - Beautiful light theme guide
- **[/examples](./examples)** - 5 production-ready templates
  - Dashboard
  - Landing page
  - Form
  - Data table
  - Mobile navigation

### For AI Agents

- **[agent-specs/components.json](./agent-specs/components.json)** - Formal component specs
- **[agent-specs/tokens.json](./agent-specs/tokens.json)** - Design tokens (colors, spacing, typography)
- **[agent-specs/rules.md](./agent-specs/rules.md)** - Decision trees & constraints
- **[agent-specs/validation.ts](./agent-specs/validation.ts)** - Validation helpers & checklist

### Reference

- **[ADAPTATION_STRATEGY.md](./ADAPTATION_STRATEGY.md)** - How this repo was built
- **[themes/](./themes/)** - Full Radix UI Themes source code

---

## What's Included

### Components (60+)

**Layout:** Flex, Grid, Container, Box, Section, Inset
**Text:** Text, Heading, Code, Quote, Strong, Em, Blockquote, Kbd
**Buttons:** Button, IconButton, Link
**Forms:** TextField, TextArea, Select, Checkbox, Radio, Switch, Slider, SegmentedControl
**Data:** Table, DataList, Badge, Avatar, Progress, Spinner, Skeleton
**Containers:** Card, Callout, Dialog, AlertDialog
**Menus:** DropdownMenu, ContextMenu, Popover, HoverCard, Tooltip
**Other:** Separator, ScrollArea, AspectRatio, TabNav, Tabs

### Design System Features

✅ **Accessibility First** - WCAG AAA compliant by default
✅ **Light Theme** - Beautiful, optimized for readability
✅ **Dark Mode** - Optional, also fully accessible
✅ **Responsive** - Mobile-first, works everywhere
✅ **TypeScript** - Full type support
✅ **CSS Variables** - Easy customization without forking
✅ **30+ Colors** - Semantic, accessible palette
✅ **Spacing Scale** - 9-point spacing system
✅ **Typography** - 9-level text sizing
✅ **Open Source** - MIT licensed

---

## Philosophy

### For Vibe Coders

- **Minimal rules.** Intuitive defaults.
- **Copy-paste ready.** No boilerplate.
- **Visual harmony by default.** Not rigid constraints.
- **Remixable.** Easy to customize without fear.

### For AI Agents

- **Formal specifications.** No ambiguity.
- **Decision trees.** Clear rules for every choice.
- **Validation helpers.** Self-check generated code.
- **Constraint clarity.** Never hallucinate beyond bounds.

### For Everyone

- **Accessible by default.** Not an afterthought.
- **Beautiful immediately.** No tweaking needed.
- **Scales effortlessly.** From 1-page sites to large apps.
- **No opinion wars.** Light theme all the way.

---

## Usage Examples

### Simple Button

```jsx
<Button>Click me</Button>
<Button variant="soft" color="green">Success</Button>
<Button variant="outline" disabled>Disabled</Button>
```

### Form

```jsx
<Flex direction="column" gap="4">
  <Flex direction="column" gap="2">
    <Label htmlFor="name"><Text weight="medium">Name</Text></Label>
    <TextField.Root id="name" placeholder="Enter name" />
  </Flex>
  <Button type="submit">Submit</Button>
</Flex>
```

### Grid Layout

```jsx
<Grid columns={{ initial: "1", md: "3" }} gap="4">
  <Card><Text>Item 1</Text></Card>
  <Card><Text>Item 2</Text></Card>
  <Card><Text>Item 3</Text></Card>
</Grid>
```

### Data Table

```jsx
<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Alice</Table.Cell>
      <Table.Cell><Badge color="green">Active</Badge></Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
```

More examples in [/examples](./examples).

---

## Customization

### Change Accent Color

```jsx
<Theme accentColor="green">
  <App />
</Theme>
```

Available colors: blue, red, green, purple, pink, orange, yellow, cyan, teal, jade, and 20+ more.

### Adjust Spacing

```jsx
<Box p="4" m="2">   {/* 16px padding, 8px margin */}
  <Text>Content</Text>
</Box>
```

### Customize CSS

```css
:root {
  --color-background: #fafafa;
  --color-text: #1a1a1a;
  --radius: large;
}
```

See [REMIX.md](./REMIX.md) for full customization guide.

---

## Theming

### Light Theme (Default)

Perfect for daytime use, high contrast, highly readable.

```jsx
<Theme appearance="light">
  <App />
</Theme>
```

### Dark Theme

Optional dark mode for evening use.

```jsx
<Theme appearance="dark">
  <App />
</Theme>
```

Both themes maintain WCAG AAA accessibility standards.

---

## Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Android Chrome 90+

---

## Performance

- **Tiny bundle** - ~30KB (CSS + JS)
- **No runtime** - Styling is pure CSS
- **Zero dependencies** - Except React/Vue/Angular
- **Fast startup** - CSS-in-JS free
- **Responsive CSS** - Built-in media queries

---

## Accessibility

All components follow:
- ✅ **WCAG 2.1 AAA** - Highest accessibility standard
- ✅ **ARIA** - Proper semantic HTML and ARIA labels
- ✅ **Keyboard** - Full keyboard navigation support
- ✅ **Screen Readers** - Works with all major screen readers
- ✅ **Color Blind** - Accessible color palette (tested)
- ✅ **Motion** - Respects `prefers-reduced-motion`

See [LIGHT_THEME.md](./LIGHT_THEME.md) for contrast details.

---

## File Structure

```
design/
├── themes/                    # Radix UI Themes source
├── examples/                  # Copy-paste templates
│   ├── dashboard.tsx
│   ├── landing-page.tsx
│   ├── form.tsx
│   ├── table-view.tsx
│   └── mobile-nav.tsx
├── agent-specs/              # For AI agents
│   ├── components.json
│   ├── tokens.json
│   ├── rules.md
│   └── validation.ts
├── QUICK_START.md            # Get started in 30 seconds
├── COMPONENT_MENU.md         # Component reference
├── REMIX.md                  # Customization guide
├── LIGHT_THEME.md            # Light theme deep dive
├── ADAPTATION_STRATEGY.md    # How this was built
└── README.md                 # This file
```

---

## For AI Agents

If you're an AI generating code with this design system:

1. **Read [agent-specs/rules.md](./agent-specs/rules.md)** for decision rules
2. **Check [agent-specs/components.json](./agent-specs/components.json)** for component specs
3. **Use [agent-specs/validation.ts](./agent-specs/validation.ts)** to validate your output
4. **Never violate [agent-specs/rules.md](./agent-specs/rules.md) constraints**

Quick checklist:
- [ ] All components from `@radix-ui/themes`
- [ ] `<Theme>` wraps entire app
- [ ] All props are valid values
- [ ] Form inputs have labels
- [ ] Icon buttons have `aria-label`
- [ ] Responsive layout used
- [ ] No hardcoded colors reducing contrast
- [ ] Validation passing

---

## Links

- **Official Radix Docs:** https://radix-ui.com/themes/docs
- **Radix GitHub:** https://github.com/radix-ui/themes
- **License:** MIT

---

## Contributing

This is a curated, light-theme focused version of Radix UI Themes. To contribute:

1. Check [ADAPTATION_STRATEGY.md](./ADAPTATION_STRATEGY.md) for the vision
2. Read [agent-specs/rules.md](./agent-specs/rules.md) for constraints
3. Test with both human users and agents
4. Ensure accessibility (WCAG AAA)

---

## License

MIT License. Based on [Radix UI Themes](https://github.com/radix-ui/themes) (also MIT).

---

## Quick Links

**Just getting started?**
→ [QUICK_START.md](./QUICK_START.md)

**Need a component?**
→ [COMPONENT_MENU.md](./COMPONENT_MENU.md)

**Want to customize?**
→ [REMIX.md](./REMIX.md)

**Building with an agent?**
→ [agent-specs/rules.md](./agent-specs/rules.md)

**Looking for examples?**
→ [/examples](./examples)

---

## Summary

Everything you need to build beautiful, accessible UIs. For humans and AI. For vibe coders and production teams. Light theme, no gatekeeping.

**Get started in 30 seconds.** Build something beautiful today.
