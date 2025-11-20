# Quick Start (30 seconds)

Beautiful UI components. Copy-paste ready. No overthinking.

---

## Install

```bash
npm install @radix-ui/themes
```

## Use

```jsx
import { Theme, Button, Card, Flex } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export default function App() {
  return (
    <Theme>
      <Flex direction="column" gap="4" p="4">
        <h1>Hello World</h1>

        <Card>
          <p>This is a card. It looks great.</p>
          <Button>Click me</Button>
        </Card>
      </Flex>
    </Theme>
  );
}
```

That's it. You now have a beautiful, accessible UI.

---

## Next Steps

- **Need a specific component?** → See [COMPONENT_MENU.md](./COMPONENT_MENU.md)
- **Want to customize colors/spacing?** → See [REMIX.md](./REMIX.md)
- **Looking for templates?** → Check `/examples` folder
- **Building with an AI agent?** → See `/agent-specs` folder

---

## Theme Wrapper

Every app needs `<Theme>` at the root. This enables theming and component styles.

```jsx
<Theme>
  {/* Your app here */}
</Theme>
```

That's optional styling on top:

```jsx
<Theme appearance="light"> {/* Force light theme */}
<Theme accentColor="blue"> {/* Change accent color */}
<Theme radius="large"> {/* Larger border radius */}
```

---

## Common Patterns

### Layout

```jsx
<Flex gap="2" direction="column">
  <Button>Vertical stack</Button>
  <Button>Easy</Button>
</Flex>

<Grid columns="3" gap="2">
  <Card>Grid item</Card>
  <Card>Grid item</Card>
  <Card>Grid item</Card>
</Grid>
```

### Forms

```jsx
<TextField placeholder="Name" />
<TextArea placeholder="Message" />
<Button>Submit</Button>
```

### Data Display

```jsx
<Table>
  <Table.Header>
    <Table.Row>
      <Table.Cell>Name</Table.Cell>
      <Table.Cell>Status</Table.Cell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Alice</Table.Cell>
      <Table.Cell><Badge color="green">Active</Badge></Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

---

## Props Cheat Sheet

Every component supports these layout/spacing props:

| Prop | Values | Example |
|------|--------|---------|
| `p` (padding) | `1` - `9` | `<Box p="4">` |
| `m` (margin) | `1` - `9` | `<Box m="2">` |
| `gap` | `1` - `9` | `<Flex gap="3">` |
| `size` | `1` - `4` | `<Button size="3">` |
| `color` | 20+ colors | `<Button color="blue">` |
| `variant` | varies | `<Button variant="soft">` |
| `disabled` | boolean | `<Button disabled>` |

See [COMPONENT_MENU.md](./COMPONENT_MENU.md) for full prop lists per component.

---

## Light Theme

Light theme is the default and looks beautiful. Dark mode is available if you need it:

```jsx
<Theme appearance="dark">
```

See [LIGHT_THEME.md](./LIGHT_THEME.md) for customization.

---

## That's It

You're ready to build. Enjoy! 🎨
