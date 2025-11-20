import React, { useState } from 'react';
import {
  Theme,
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Card,
  IconButton,
  Dialog,
} from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

/**
 * Mobile Navigation Example
 * Responsive navigation with:
 * - Sticky header
 * - Mobile hamburger menu
 * - Dropdown navigation
 * - Active states
 * - Responsive layout
 */

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Docs', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function MobileNavExample() {
  const [activeNav, setActiveNav] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Theme appearance="light" accentColor="blue">
      <Box style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        {/* Sticky Header */}
        <Box
          style={{
            backgroundColor: 'white',
            borderBottom: '1px solid var(--color-border)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
          }}
          p="4"
        >
          <Container>
            <Flex justify="between" align="center">
              {/* Logo */}
              <Heading size="5">YourApp</Heading>

              {/* Desktop Nav - Show on larger screens */}
              <Flex
                gap="2"
                style={{
                  display: 'none',
                  '@media (min-width: 768px)': {
                    display: 'flex',
                  },
                }}
              >
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    label={item.label}
                    active={activeNav === item.label}
                    onClick={() => setActiveNav(item.label)}
                  />
                ))}
              </Flex>

              {/* Mobile Menu Toggle - Show on small screens */}
              <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <Dialog.Trigger asChild>
                  <IconButton
                    variant="ghost"
                    style={{
                      display: 'flex',
                      '@media (min-width: 768px)': {
                        display: 'none',
                      },
                    }}
                  >
                    ☰
                  </IconButton>
                </Dialog.Trigger>

                <Dialog.Content>
                  <Dialog.Title>Menu</Dialog.Title>
                  <Flex direction="column" gap="2">
                    {navItems.map((item) => (
                      <Box
                        key={item.label}
                        p="3"
                        style={{
                          backgroundColor:
                            activeNav === item.label ? 'var(--color-surface)' : 'transparent',
                          borderRadius: '6px',
                          cursor: 'pointer',
                        }}
                        onClick={() => {
                          setActiveNav(item.label);
                          setIsMenuOpen(false);
                        }}
                      >
                        <Text weight={activeNav === item.label ? 'medium' : 'regular'}>
                          {item.label}
                        </Text>
                      </Box>
                    ))}
                    <Box style={{ marginTop: '12px' }}>
                      <Button style={{ width: '100%' }}>Sign In</Button>
                    </Box>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
            </Flex>
          </Container>
        </Box>

        {/* Hero Section */}
        <Box
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
          }}
          p="6"
        >
          <Container>
            <Flex direction="column" gap="4" align="center" style={{ textAlign: 'center' }}>
              <Heading size="8" style={{ color: 'white' }}>
                Welcome to YourApp
              </Heading>
              <Text size="4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Mobile-first, responsive, and beautiful.
              </Text>
              <Flex gap="2" direction={{ initial: 'column', sm: 'row' }}>
                <Button size="3">Get Started</Button>
                <Button size="3" variant="outline" style={{ borderColor: 'white' }}>
                  Learn More
                </Button>
              </Flex>
            </Flex>
          </Container>
        </Box>

        {/* Content Sections */}
        <Container p="6">
          <Flex direction="column" gap="6">
            {/* Section 1 */}
            <Card>
              <Flex direction="column" gap="3">
                <Heading size="5">Responsive Design</Heading>
                <Text color="gray">
                  This layout automatically adapts to different screen sizes. The navigation menu
                  is visible on desktop and collapses into a hamburger menu on mobile.
                </Text>
                <Text color="gray">
                  Try resizing your browser to see the responsive behavior in action.
                </Text>
              </Flex>
            </Card>

            {/* Section 2 */}
            <Card>
              <Flex direction="column" gap="3">
                <Heading size="5">Mobile-First Development</Heading>
                <Text color="gray">
                  Built with mobile in mind first, then enhanced for larger screens. This ensures
                  great experience on all devices, from phones to desktops.
                </Text>
              </Flex>
            </Card>

            {/* Section 3 */}
            <Card>
              <Flex direction="column" gap="3">
                <Heading size="5">Touch-Friendly</Heading>
                <Text color="gray">
                  Buttons and interactive elements are sized appropriately for touch input on
                  mobile devices, ensuring good usability and accessibility.
                </Text>
              </Flex>
            </Card>

            {/* CTA */}
            <Card
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
              }}
            >
              <Flex direction="column" gap="3" align="center" style={{ textAlign: 'center' }}>
                <Heading size="5" style={{ color: 'white' }}>
                  Ready to Build?
                </Heading>
                <Button size="3" style={{ backgroundColor: 'white', color: '#667eea' }}>
                  Start Now
                </Button>
              </Flex>
            </Card>
          </Flex>
        </Container>

        {/* Footer */}
        <Box
          style={{
            backgroundColor: 'var(--color-panel-solid)',
            borderTop: '1px solid var(--color-border)',
            marginTop: 'auto',
          }}
          p="4"
        >
          <Container>
            <Flex direction={{ initial: 'column', sm: 'row' }} justify="between" gap="4">
              <Text size="2" color="gray">
                © 2024 YourApp. All rights reserved.
              </Text>
              <Flex gap="4">
                <Text as="a" href="#" size="2" color="gray">
                  Privacy
                </Text>
                <Text as="a" href="#" size="2" color="gray">
                  Terms
                </Text>
                <Text as="a" href="#" size="2" color="gray">
                  Contact
                </Text>
              </Flex>
            </Flex>
          </Container>
        </Box>
      </Box>
    </Theme>
  );
}

function NavLink({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      variant={active ? 'solid' : 'ghost'}
      onClick={onClick}
      style={{
        cursor: 'pointer',
      }}
    >
      {label}
    </Button>
  );
}
