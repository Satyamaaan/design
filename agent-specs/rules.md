# Design System Decision Rules

Guidelines for AI agents generating UI code.

---

## Component Selection Rules

### When to Use What

#### Layout

| Question | Answer | Use This |
|----------|--------|----------|
| Need 1D layout (row/column)? | Yes | `<Flex>` |
| Need 2D grid layout? | Yes | `<Grid>` |
| Need centered max-width container? | Yes | `<Container>` |
| Need generic box with spacing? | Yes | `<Box>` |
| Need page section with padding? | Yes | `<Section>` |

#### Text & Typography

| Question | Answer | Use This |
|----------|--------|----------|
| Need page/section title? | Yes | `<Heading>` |
| Need body text? | Yes | `<Text>` |
| Need code/monospace? | Yes | `<Code>` |
| Need quoted text? | Yes | `<Quote>` |
| Need bold emphasis? | Yes | `<Strong>` |
| Need italic emphasis? | Yes | `<Em>` |

#### Buttons & Actions

| Question | Answer | Use This |
|----------|--------|----------|
| Need clickable action? | Yes | `<Button>` |
| Icon-only button? | Yes | `<IconButton>` |
| Navigation link? | Yes | `<Link>` |
| Need button in toolbar? | Yes | `<IconButton>` with icon |

#### Forms & Input

| Question | Answer | Use This |
|----------|--------|----------|
| Text input field? | Yes | `<TextField.Root>` |
| Multi-line text? | Yes | `<TextArea>` |
| Choose from options? | Yes | `<Select.Root>` |
| Multiple selections? | Yes | `<Checkbox>` or `<CheckboxGroup>` |
| Single selection? | Yes | `<Radio>` or `<RadioGroup>` |
| Toggle on/off? | Yes | `<Switch>` |
| Numeric range? | Yes | `<Slider>` |

#### Data Display

| Question | Answer | Use This |
|----------|--------|----------|
| Structured data table? | Yes | `<Table>` |
| Key-value pairs? | Yes | `<DataList>` |
| Status/label tag? | Yes | `<Badge>` |
| User profile image? | Yes | `<Avatar>` |
| Progress indicator? | Yes | `<Progress>` |
| Loading spinner? | Yes | `<Spinner>` |
| Placeholder while loading? | Yes | `<Skeleton>` |

#### Content Containers

| Question | Answer | Use This |
|----------|--------|----------|
| Content block/card? | Yes | `<Card>` |
| Important notice/alert? | Yes | `<Callout>` |
| Modal dialog? | Yes | `<Dialog>` |
| Confirmation dialog? | Yes | `<AlertDialog>` |
| Dropdown menu? | Yes | `<DropdownMenu>` |
| Context menu? | Yes | `<ContextMenu>` |
| Floating content? | Yes | `<Popover>` |
| Hover preview? | Yes | `<HoverCard>` |
| Brief hint on hover? | Yes | `<Tooltip>` |

#### Visual Elements

| Question | Answer | Use This |
|----------|--------|----------|
| Visual divider? | Yes | `<Separator>` |
| Scrollable area? | Yes | `<ScrollArea>` |
| Fixed aspect ratio? | Yes | `<AspectRatio>` |
| Top navigation? | Yes | `<TabNav>` |
| Tab content? | Yes | `<Tabs>` |

---

## Prop Selection Rules

### Variants

**For buttons:**
- Use `solid` (default) for primary actions
- Use `soft` for secondary actions
- Use `outline` for tertiary actions
- Use `ghost` for minimal/text-only actions

**For badges:**
- Use `solid` for important status
- Use `soft` for secondary status
- Use `outline` for subtle status

### Colors

**Status colors:**
- `green` (or `jade`, `mint`, `grass`) for success, active, positive
- `red` (or `crimson`, `tomato`, `ruby`) for error, danger, negative
- `yellow`, `orange`, `amber` for warning, caution
- `blue`, `cyan`, `sky` for info, primary
- `gray` for neutral, disabled

**Brand colors:**
Use for buttons, links, and primary UI elements:
- `blue`, `purple`, `indigo`, `violet` - tech/professional
- `green`, `jade`, `mint` - eco/health
- `orange`, `amber`, `gold` - warm/friendly
- `red`, `ruby`, `crimson` - urgent/important
- `pink`, `plum` - modern/creative

### Sizes

**Text sizes (1-9):**
- 1-2: Captions, small hints
- 3: Body text (default)
- 4-5: Large body
- 6: Extra large
- 7-8: Headings
- 9: Page title

**Component sizes (1-4):**
- 1: Compact/small (forms, tight spaces)
- 2: Medium (default for most)
- 3: Large (prominent elements)
- 4: Extra large (page-level)

**Spacing (1-9):**
- 1-2: Tight spacing (6-8px)
- 3-4: Default spacing (12-16px)
- 5-6: Comfortable spacing (20-24px)
- 7-9: Generous spacing (28-36px)

---

## Layout Rules

### Flexbox (Flex Component)

**Direction:**
- Use `direction="row"` (default) for horizontal layout
- Use `direction="column"` for vertical layout

**Alignment:**
- Use `align="center"` + `justify="center"` for centered content
- Use `justify="between"` to spread items apart
- Use `align="baseline"` for text alignment
- Use `align="stretch"` to fill container

**Spacing:**
- Always use `gap` instead of margin on children
- `gap="2"` for tight spacing
- `gap="4"` for standard spacing
- `gap="6"` for generous spacing

### Grid (Grid Component)

**Columns:**
- `columns="1"` for single column (mobile)
- `columns="2"` for 2-column layout
- `columns="3"` for 3-column layout
- `columns="4"` for 4-column grid
- Use responsive object: `columns={{ initial: "1", md: "3" }}`

**Spacing:**
- Always use `gap` for spacing
- Match gap size to visual hierarchy

---

## Responsiveness Rules

### Breakpoints

```typescript
// Radix UI breakpoints
// xs: 0px (default, mobile)
// sm: 640px (tablets)
// md: 1024px (desktop)
// lg: 1280px (large)
// xl: 1440px (extra large)
```

### Responsive Props

Use object syntax for responsive values:

```jsx
// Grid responsive
<Grid columns={{ initial: "1", sm: "2", md: "3" }} />

// Direction responsive
<Flex direction={{ initial: "column", sm: "row" }} />

// Padding responsive
<Box p={{ initial: "2", md: "4" }} />
```

### Mobile-First Approach

- Design for mobile first (smallest breakpoint)
- Add `initial:` for mobile defaults
- Enhance for larger screens

---

## Accessibility Rules

### Always Follow These

1. **Semantic HTML**
   - Use `<Heading>` for headings (not styled `<Text>`)
   - Use `<Label>` for form labels
   - Use `<Button>` for buttons (not divs)

2. **ARIA & Accessibility**
   - Add `htmlFor` on labels linking to inputs
   - Use `aria-label` on icon-only buttons
   - Ensure color isn't the only status indicator (use badge + color)

3. **Keyboard Navigation**
   - All interactive elements must be keyboard accessible
   - Buttons, links, and form inputs support keyboard by default
   - No keyboard traps

4. **Color Contrast**
   - This library ensures WCAG AA (4.5:1) by default
   - Don't override colors in ways that reduce contrast

5. **Focus States**
   - Never remove focus indicators
   - Visible focus states are built-in

---

## Common Patterns

### Form Layout

```jsx
<Flex direction="column" gap="4">
  <Flex direction="column" gap="2">
    <Label htmlFor="field">Label</Label>
    <TextField.Root id="field" />
  </Flex>
  <Button type="submit">Submit</Button>
</Flex>
```

### Card Grid

```jsx
<Grid columns={{ initial: "1", md: "3" }} gap="4">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
```

### Modal Dialog

```jsx
<Dialog.Root>
  <Dialog.Trigger><Button>Open</Button></Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>Title</Dialog.Title>
    <Flex direction="column" gap="4">
      <Text>Content here</Text>
      <Flex gap="2" justify="end">
        <Dialog.Close><Button variant="soft">Cancel</Button></Dialog.Close>
        <Button>Confirm</Button>
      </Flex>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
```

### Data Table

```jsx
<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Value</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
```

---

## Validation Rules

### Constraints

- Button variants: must be `solid`, `soft`, `outline`, or `ghost`
- Sizes: must be `1`, `2`, `3`, or `4` (where applicable)
- Colors: must be valid color name (20+ options available)
- Spacing: must be `1` through `9`
- Direction: must be `row` or `column`
- Alignment: must be valid flex alignment value

### Never Do This

❌ Use div instead of semantic components
❌ Override internal component structure
❌ Use invalid prop values
❌ Remove focus indicators
❌ Use color alone for status
❌ Create custom themes without CSS variables
❌ Nest deeply without layout components
❌ Ignore accessibility attributes

### Always Do This

✅ Use semantic components
✅ Add labels to form inputs
✅ Use `gap` for spacing between items
✅ Include `htmlFor` on labels
✅ Use responsive props for mobile
✅ Test keyboard navigation
✅ Provide fallback text for icons
✅ Use `aria-label` when needed

---

## Code Generation Rules for Agents

### Props Ordering

Always order props as:
1. `id`, `name` (identifiers)
2. `value`, `onChange` (state)
3. `placeholder`, `label` (content)
4. `variant`, `color`, `size` (styling)
5. `disabled`, `required` (behavior)
6. `className` (custom)
7. `children` (content)

### Import Structure

```typescript
import {
  Theme,
  Container,
  Flex,
  Grid,
  Card,
  Heading,
  Text,
  Button,
  // ... other components
} from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
```

### Component Wrapping

All apps must be wrapped with `<Theme>`:

```jsx
export default function App() {
  return (
    <Theme appearance="light" accentColor="blue">
      {/* Your app */}
    </Theme>
  );
}
```

---

## Validation Checklist

Before generating code, verify:

- [ ] All components imported from `@radix-ui/themes`
- [ ] `<Theme>` wraps entire app
- [ ] All props are valid values
- [ ] Form inputs have labels with `htmlFor`
- [ ] Icon-only buttons have `aria-label`
- [ ] Layout uses `Flex` or `Grid`, not hardcoded spacing
- [ ] Responsive layout using responsive props
- [ ] No color overrides that reduce contrast
- [ ] Focus states preserved
- [ ] Component structure follows semantic HTML
