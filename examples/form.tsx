import React, { useState } from 'react';
import {
  Theme,
  Box,
  Container,
  Flex,
  Card,
  Heading,
  Text,
  Button,
  TextField,
  TextArea,
  Select,
  Checkbox,
  RadioGroup,
  Radio,
  Label,
  Callout,
} from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

/**
 * Form Example
 * Complete form with:
 * - Text inputs
 * - Textarea
 * - Select dropdown
 * - Radio buttons
 * - Checkboxes
 * - Form validation
 * - Success message
 */

export default function FormExample() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    type: 'question',
    message: '',
    subscribe: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Theme appearance="light" accentColor="blue">
      <Box style={{ minHeight: '100vh', backgroundColor: 'var(--color-surface)' }} p="6">
        <Container size="1">
          <Flex direction="column" gap="6" style={{ maxWidth: '500px', margin: '0 auto' }}>
            <Flex direction="column" gap="2">
              <Heading size="7">Contact Us</Heading>
              <Text size="3" color="gray">
                Fill out the form below and we'll get back to you as soon as possible.
              </Text>
            </Flex>

            {submitted && (
              <Callout.Root color="green">
                <Callout.Icon>✓</Callout.Icon>
                <Callout.Text>Thank you! We'll be in touch shortly.</Callout.Text>
              </Callout.Root>
            )}

            <Card>
              <form onSubmit={handleSubmit}>
                <Flex direction="column" gap="5">
                  {/* Name Field */}
                  <Flex direction="column" gap="2">
                    <Label htmlFor="name">
                      <Text weight="medium" size="2">
                        Full Name *
                      </Text>
                    </Label>
                    <TextField.Root
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </Flex>

                  {/* Email Field */}
                  <Flex direction="column" gap="2">
                    <Label htmlFor="email">
                      <Text weight="medium" size="2">
                        Email Address *
                      </Text>
                    </Label>
                    <TextField.Root
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </Flex>

                  {/* Subject Select */}
                  <Flex direction="column" gap="2">
                    <Label htmlFor="subject">
                      <Text weight="medium" size="2">
                        Subject
                      </Text>
                    </Label>
                    <Select.Root
                      value={formData.subject}
                      onValueChange={(value) =>
                        setFormData({ ...formData, subject: value })
                      }
                    >
                      <Select.Trigger id="subject" placeholder="Select a subject" />
                      <Select.Content>
                        <Select.Item value="general">General Inquiry</Select.Item>
                        <Select.Item value="support">Technical Support</Select.Item>
                        <Select.Item value="sales">Sales Question</Select.Item>
                        <Select.Item value="feedback">Feedback</Select.Item>
                      </Select.Content>
                    </Select.Root>
                  </Flex>

                  {/* Type Radio */}
                  <Flex direction="column" gap="2">
                    <Text weight="medium" size="2">
                      Inquiry Type *
                    </Text>
                    <RadioGroup.Root
                      value={formData.type}
                      onValueChange={(value) =>
                        setFormData({ ...formData, type: value })
                      }
                    >
                      <Flex gap="4">
                        <Flex align="center" gap="2">
                          <Radio value="question" id="type-question" />
                          <Label htmlFor="type-question">
                            <Text size="2">Question</Text>
                          </Label>
                        </Flex>
                        <Flex align="center" gap="2">
                          <Radio value="bug" id="type-bug" />
                          <Label htmlFor="type-bug">
                            <Text size="2">Bug Report</Text>
                          </Label>
                        </Flex>
                        <Flex align="center" gap="2">
                          <Radio value="feature" id="type-feature" />
                          <Label htmlFor="type-feature">
                            <Text size="2">Feature Request</Text>
                          </Label>
                        </Flex>
                      </Flex>
                    </RadioGroup.Root>
                  </Flex>

                  {/* Message Field */}
                  <Flex direction="column" gap="2">
                    <Label htmlFor="message">
                      <Text weight="medium" size="2">
                        Message *
                      </Text>
                    </Label>
                    <TextArea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      style={{ minHeight: '150px', fontFamily: 'inherit' }}
                      required
                    />
                  </Flex>

                  {/* Checkbox */}
                  <Flex align="center" gap="2">
                    <Checkbox
                      id="subscribe"
                      checked={formData.subscribe}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, subscribe: !!checked })
                      }
                    />
                    <Label htmlFor="subscribe">
                      <Text size="2">
                        I'd like to receive updates about new features
                      </Text>
                    </Label>
                  </Flex>

                  {/* Submit Button */}
                  <Flex gap="2" justify="end" style={{ marginTop: '8px' }}>
                    <Button variant="outline" type="reset">
                      Clear
                    </Button>
                    <Button type="submit">Send Message</Button>
                  </Flex>
                </Flex>
              </form>
            </Card>

            {/* Form Notes */}
            <Text size="2" color="gray" style={{ textAlign: 'center' }}>
              * Required fields. We respect your privacy and will never share your information.
            </Text>
          </Flex>
        </Container>
      </Box>
    </Theme>
  );
}
