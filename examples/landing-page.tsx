import React from 'react';
import {
  Theme,
  Box,
  Container,
  Flex,
  Grid,
  Card,
  Heading,
  Text,
  Button,
  Separator,
} from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

/**
 * Landing Page Example
 * Clean, modern landing page with:
 * - Hero section
 * - Feature grid
 * - CTA section
 * - Footer
 */

export default function LandingPageExample() {
  return (
    <Theme appearance="light" accentColor="blue">
      <Box style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        {/* Header/Nav */}
        <Box
          style={{
            backgroundColor: 'white',
            borderBottom: '1px solid var(--color-border)',
            position: 'sticky',
            top: 0,
            zIndex: 10,
          }}
          p="4"
        >
          <Container>
            <Flex justify="between" align="center">
              <Heading size="5">Your Product</Heading>
              <Flex gap="2">
                <Button variant="ghost">Docs</Button>
                <Button variant="ghost">Pricing</Button>
                <Button>Get Started</Button>
              </Flex>
            </Flex>
          </Container>
        </Box>

        {/* Hero Section */}
        <Box
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
          }}
          p="8"
        >
          <Container>
            <Flex direction="column" gap="6" align="center" style={{ textAlign: 'center' }}>
              <Heading size="8" style={{ color: 'white' }}>
                Build Better Products
              </Heading>
              <Text size="5" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Fast, accessible UI components for modern applications.
              </Text>
              <Flex gap="3">
                <Button size="3">Start Now</Button>
                <Button size="3" variant="outline" style={{ color: 'white', borderColor: 'white' }}>
                  Watch Demo
                </Button>
              </Flex>
            </Flex>
          </Container>
        </Box>

        {/* Features Section */}
        <Box p="8" style={{ backgroundColor: 'var(--color-surface)' }}>
          <Container>
            <Flex direction="column" gap="8">
              <Flex direction="column" gap="2" align="center" style={{ textAlign: 'center' }}>
                <Heading size="7">Why Choose Us</Heading>
                <Text size="4" color="gray">
                  Everything you need to build beautiful, accessible UIs
                </Text>
              </Flex>

              <Grid columns={{ initial: '1', md: '3' }} gap="6">
                <FeatureCard
                  title="Accessible"
                  description="Built with accessibility first. WCAG compliant, keyboard navigation, screen reader support."
                />
                <FeatureCard
                  title="Beautiful"
                  description="Carefully designed components with thoughtful animations and modern aesthetics."
                />
                <FeatureCard
                  title="Developer-Friendly"
                  description="Simple API, great TypeScript support, extensive documentation and examples."
                />
                <FeatureCard
                  title="Customizable"
                  description="Theme colors, spacing, and radius without touching the source code."
                />
                <FeatureCard
                  title="Production-Ready"
                  description="Used by thousands of applications. Battle-tested and trusted."
                />
                <FeatureCard
                  title="Open Source"
                  description="MIT licensed, transparent development, active community."
                />
              </Grid>
            </Flex>
          </Container>
        </Box>

        <Separator />

        {/* Testimonials Section */}
        <Box p="8">
          <Container>
            <Flex direction="column" gap="8">
              <Flex direction="column" gap="2" align="center" style={{ textAlign: 'center' }}>
                <Heading size="7">Loved by Developers</Heading>
              </Flex>

              <Grid columns={{ initial: '1', md: '3' }} gap="6">
                <TestimonialCard
                  quote="This design system saved us months of development time. Highly recommend."
                  author="Alex Chen"
                  title="CTO, StartupCo"
                />
                <TestimonialCard
                  quote="Beautiful, accessible, and a joy to use. Finally a design system that gets it right."
                  author="Maya Patel"
                  title="Design Lead, TechCorp"
                />
                <TestimonialCard
                  quote="The best component library I've used. Documentation is top-notch."
                  author="Jordan Smith"
                  title="Senior Engineer, WebApp Inc"
                />
              </Grid>
            </Flex>
          </Container>
        </Box>

        <Separator />

        {/* CTA Section */}
        <Box
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
          }}
          p="8"
        >
          <Container>
            <Flex direction="column" gap="4" align="center" style={{ textAlign: 'center' }}>
              <Heading size="7" style={{ color: 'white' }}>
                Ready to Get Started?
              </Heading>
              <Text size="4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Join thousands of developers building with our design system.
              </Text>
              <Flex gap="3">
                <Button size="3" style={{ backgroundColor: 'white', color: '#667eea' }}>
                  Start Free
                </Button>
                <Button size="3" variant="outline" style={{ borderColor: 'white', color: 'white' }}>
                  Schedule Demo
                </Button>
              </Flex>
            </Flex>
          </Container>
        </Box>

        {/* Footer */}
        <Box
          style={{
            backgroundColor: 'var(--color-panel-solid)',
            borderTop: '1px solid var(--color-border)',
          }}
          p="6"
        >
          <Container>
            <Flex justify="between" align="center">
              <Text size="2" color="gray">
                © 2024 Your Product. All rights reserved.
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

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card>
      <Flex direction="column" gap="3">
        <Heading size="4">{title}</Heading>
        <Text size="3" color="gray">
          {description}
        </Text>
      </Flex>
    </Card>
  );
}

function TestimonialCard({
  quote,
  author,
  title,
}: {
  quote: string;
  author: string;
  title: string;
}) {
  return (
    <Card>
      <Flex direction="column" gap="4">
        <Text size="3" style={{ fontStyle: 'italic' }}>
          "{quote}"
        </Text>
        <Flex direction="column" gap="1">
          <Text weight="medium">{author}</Text>
          <Text size="2" color="gray">
            {title}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
