# Component Menu

Quick reference: when to use what.

---

## Layout & Structure

| Component | Use When | Example |
|-----------|----------|---------|
| **Flex** | Need 1D layout (row/column) | Stack items, align buttons |
| **Grid** | Need 2D layout (rows + columns) | Dashboard, card grid |
| **Box** | Need a basic container | Wrapper, custom padding |
| **Container** | Need centered max-width | Page content wrapper |
| **Section** | Need a page section | Vertical section with padding |
| **Inset** | Need padding from edges | Spacing inside containers |

---

## Text & Headings

| Component | Use When | Example |
|-----------|----------|---------|
| **Text** | Regular body text | Paragraphs, descriptions |
| **Heading** | Page/section titles | `<Heading size="6">` |
| **Quote** | Block quote | Testimonials, citations |
| **Code** | Inline code | `<Code>const x = 1</Code>` |
| **Kbd** | Keyboard keys | `Press <Kbd>Ctrl+S</Kbd>` |
| **Blockquote** | Long quotes | Article quotes |
| **Em** | Emphasis (italic) | `<Em>Important</Em>` |
| **Strong** | Bold text | `<Strong>Critical</Strong>` |

---

## Buttons & Actions

| Component | Use When | Example |
|-----------|----------|---------|
| **Button** | Clickable action | `<Button>Click me</Button>` |
| **IconButton** | Icon-only button | `<IconButton><Icon /></IconButton>` |
| **Link** | Navigate or link | `<Link href="/page">Go</Link>` |

**Button Props:**
- `variant`: `solid` (default), `soft`, `outline`, `ghost`
- `size`: `1` (small), `2` (medium), `3`, `4` (large)
- `color`: `blue`, `red`, `green`, etc.
- `disabled`: `true` to disable

---

## Forms & Input

| Component | Use When | Example |
|-----------|----------|---------|
| **TextField** | Text input | Names, emails, URLs |
| **TextArea** | Multi-line text | Messages, descriptions |
| **Select** | Dropdown choice | Pick one from list |
| **Checkbox** | Multiple selections | Agree to terms |
| **CheckboxCards** | Checkbox with card layout | Multiple options visual |
| **Radio** | Single choice | Pick one (radio buttons) |
| **RadioCards** | Radio with card layout | Single option visual |
| **SegmentedControl** | Toggle between options | Filter: Active/Inactive |
| **Switch** | Toggle on/off | Dark mode, notifications |
| **Slider** | Numeric range | Volume, price filter |

---

## Data Display

| Component | Use When | Example |
|-----------|----------|---------|
| **Table** | Structured data | Users, transactions, logs |
| **DataList** | Key-value pairs | Profile info, metadata |
| **Badge** | Label/status | `Status: Active` |
| **Avatar** | User/profile image | Team members, comments |
| **Progress** | Progress bar | File upload, loading |
| **Spinner** | Loading indicator | Fetching data |
| **Skeleton** | Placeholder while loading | Fake content loading |

**Table Example:**
```jsx
<Table>
  <Table.Header><Table.Row>
    <Table.Cell>Name</Table.Cell>
    <Table.Cell>Status</Table.Cell>
  </Table.Row></Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Alice</Table.Cell>
      <Table.Cell><Badge>Active</Badge></Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

---

## Cards & Containers

| Component | Use When | Example |
|-----------|----------|---------|
| **Card** | Content block | Blog post, product card |
| **Callout** | Important notice | Tips, warnings, alerts |
| **Dialog** | Modal popup | Confirm action, alert |
| **AlertDialog** | Warning confirmation | Delete confirmation |
| **DropdownMenu** | Menu popup | Actions, settings |
| **ContextMenu** | Right-click menu | File operations |
| **Popover** | Floating content | Help text, details |
| **HoverCard** | On-hover popup | User preview |
| **Tooltip** | Quick hint on hover | Icon explanation |

---

## Visual Elements

| Component | Use When | Example |
|-----------|----------|---------|
| **Separator** | Visual divider | Between sections |
| **ScrollArea** | Scrollable content | Long list, custom scroll |
| **AspectRatio** | Fixed ratio container | Video, images |
| **TabNav** | Top navigation | Page sections, docs |
| **Tabs** | Tabbed content | Multiple views, settings |

---

## Common Props (All Components)

These work on almost every component:

| Prop | Values | Example |
|------|--------|---------|
| `p` | `1`-`9` | Padding |
| `m` | `1`-`9` | Margin |
| `size` | Varies | Component size |
| `color` | 20+ colors | Text/button color |
| `variant` | Varies | Visual style |
| `disabled` | `true/false` | Disable interaction |
| `className` | string | Custom CSS class |

**Colors:** `blue`, `red`, `green`, `yellow`, `orange`, `purple`, `pink`, `gray`, `bronze`, `gold`, `violet`, `indigo`, `cyan`, `mint`, `teal`, `jade`, `lime`, `grass`, `sage`, `olive`, `sand`, `mauve`, `slate`, `plum`, `ruby`, `brown`

---

## Props by Size Category

**Size 1** (small): Buttons, badges, inputs
**Size 2** (medium): Default for most components
**Size 3** (large): Prominent buttons, large cards
**Size 4** (extra large): Page-level elements

---

## Variants

**Buttons:**
- `solid` (default) - Filled button
- `soft` - Light background
- `outline` - Bordered
- `ghost` - Text only

**Text Variants:**
- `body` - Regular text
- `caption` - Small text
- `mono` - Monospace/code

**Colors:**
- `accent` - Theme accent color
- `gray` - Neutral
- `tomato`, `red`, `ruby`, `crimson` - Reds
- `amber`, `yellow`, `gold` - Yellows
- `grass`, `lime`, `mint`, `green` - Greens
- `teal`, `cyan`, `sky`, `blue` - Blues
- `violet`, `purple`, `iris`, `indigo` - Purples
- `pink`, `plum` - Pinks

---

## Need Help?

- Full docs: https://radix-ui.com/themes/docs
- Examples: `/examples` folder
- Agent specs: `/agent-specs` folder
- Customization: [REMIX.md](./REMIX.md)
