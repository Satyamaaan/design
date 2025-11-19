/**
 * Design System Validation Helpers
 * Use these functions to validate component props and generated code
 */

// Valid prop values
const VALID_BUTTON_VARIANTS = ['solid', 'soft', 'outline', 'ghost'] as const;
const VALID_SIZES = ['1', '2', '3', '4'] as const;
const VALID_SPACING = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const VALID_FLEX_DIRECTIONS = ['row', 'column'] as const;
const VALID_FLEX_ALIGNS = ['start', 'center', 'end', 'baseline', 'stretch'] as const;
const VALID_FLEX_JUSTIFIES = ['start', 'center', 'end', 'between', 'around'] as const;
const VALID_TEXT_WEIGHTS = ['light', 'normal', 'medium', 'bold'] as const;
const VALID_TEXT_SIZES = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

const VALID_COLORS = [
  'gray',
  'blue',
  'red',
  'orange',
  'green',
  'teal',
  'cyan',
  'purple',
  'pink',
  'jade',
  'indigo',
  'violet',
  'brown',
  'bronze',
  'gold',
  'amber',
  'lime',
  'mint',
  'olive',
  'sage',
  'sand',
  'slate',
  'sky',
  'mauve',
  'plum',
  'ruby',
  'crimson',
  'tomato',
  'yellow',
  'grass',
  'iris',
  'accent',
] as const;

// Validation functions
export function isValidButtonVariant(
  variant: string
): variant is (typeof VALID_BUTTON_VARIANTS)[number] {
  return VALID_BUTTON_VARIANTS.includes(variant as any);
}

export function isValidSize(size: string): size is (typeof VALID_SIZES)[number] {
  return VALID_SIZES.includes(size as any);
}

export function isValidSpacing(spacing: string): spacing is (typeof VALID_SPACING)[number] {
  return VALID_SPACING.includes(spacing as any);
}

export function isValidFlexDirection(
  direction: string
): direction is (typeof VALID_FLEX_DIRECTIONS)[number] {
  return VALID_FLEX_DIRECTIONS.includes(direction as any);
}

export function isValidFlexAlign(
  align: string
): align is (typeof VALID_FLEX_ALIGNS)[number] {
  return VALID_FLEX_ALIGNS.includes(align as any);
}

export function isValidFlexJustify(
  justify: string
): justify is (typeof VALID_FLEX_JUSTIFIES)[number] {
  return VALID_FLEX_JUSTIFIES.includes(justify as any);
}

export function isValidTextWeight(
  weight: string
): weight is (typeof VALID_TEXT_WEIGHTS)[number] {
  return VALID_TEXT_WEIGHTS.includes(weight as any);
}

export function isValidTextSize(size: string): size is (typeof VALID_TEXT_SIZES)[number] {
  return VALID_TEXT_SIZES.includes(size as any);
}

export function isValidColor(color: string): color is (typeof VALID_COLORS)[number] {
  return VALID_COLORS.includes(color as any);
}

// Component-specific validation
export interface ButtonProps {
  variant?: (typeof VALID_BUTTON_VARIANTS)[number];
  size?: (typeof VALID_SIZES)[number];
  color?: (typeof VALID_COLORS)[number];
  disabled?: boolean;
  children?: any;
}

export interface TextProps {
  size?: (typeof VALID_TEXT_SIZES)[number];
  weight?: (typeof VALID_TEXT_WEIGHTS)[number];
  color?: (typeof VALID_COLORS)[number];
  children?: any;
}

export interface FlexProps {
  direction?: (typeof VALID_FLEX_DIRECTIONS)[number];
  gap?: (typeof VALID_SPACING)[number];
  align?: (typeof VALID_FLEX_ALIGNS)[number];
  justify?: (typeof VALID_FLEX_JUSTIFIES)[number];
  children?: any;
}

export interface GridProps {
  columns?: string | Record<string, string>;
  gap?: (typeof VALID_SPACING)[number];
  children?: any;
}

export interface ValidationError {
  component: string;
  prop: string;
  value: string;
  message: string;
}

// Validate Button props
export function validateButtonProps(props: any): ValidationError[] {
  const errors: ValidationError[] = [];

  if (props.variant && !isValidButtonVariant(props.variant)) {
    errors.push({
      component: 'Button',
      prop: 'variant',
      value: props.variant,
      message: `Invalid variant. Must be one of: ${VALID_BUTTON_VARIANTS.join(', ')}`,
    });
  }

  if (props.size && !isValidSize(props.size)) {
    errors.push({
      component: 'Button',
      prop: 'size',
      value: props.size,
      message: `Invalid size. Must be one of: ${VALID_SIZES.join(', ')}`,
    });
  }

  if (props.color && !isValidColor(props.color)) {
    errors.push({
      component: 'Button',
      prop: 'color',
      value: props.color,
      message: `Invalid color. Must be one of: ${VALID_COLORS.join(', ')}`,
    });
  }

  return errors;
}

// Validate Text props
export function validateTextProps(props: any): ValidationError[] {
  const errors: ValidationError[] = [];

  if (props.size && !isValidTextSize(props.size)) {
    errors.push({
      component: 'Text',
      prop: 'size',
      value: props.size,
      message: `Invalid size. Must be one of: ${VALID_TEXT_SIZES.join(', ')}`,
    });
  }

  if (props.weight && !isValidTextWeight(props.weight)) {
    errors.push({
      component: 'Text',
      prop: 'weight',
      value: props.weight,
      message: `Invalid weight. Must be one of: ${VALID_TEXT_WEIGHTS.join(', ')}`,
    });
  }

  if (props.color && !isValidColor(props.color)) {
    errors.push({
      component: 'Text',
      prop: 'color',
      value: props.color,
      message: `Invalid color. Must be one of: ${VALID_COLORS.join(', ')}`,
    });
  }

  return errors;
}

// Validate Flex props
export function validateFlexProps(props: any): ValidationError[] {
  const errors: ValidationError[] = [];

  if (props.direction && !isValidFlexDirection(props.direction)) {
    errors.push({
      component: 'Flex',
      prop: 'direction',
      value: props.direction,
      message: `Invalid direction. Must be one of: ${VALID_FLEX_DIRECTIONS.join(', ')}`,
    });
  }

  if (props.gap && !isValidSpacing(props.gap)) {
    errors.push({
      component: 'Flex',
      prop: 'gap',
      value: props.gap,
      message: `Invalid gap. Must be one of: ${VALID_SPACING.join(', ')}`,
    });
  }

  if (props.align && !isValidFlexAlign(props.align)) {
    errors.push({
      component: 'Flex',
      prop: 'align',
      value: props.align,
      message: `Invalid align. Must be one of: ${VALID_FLEX_ALIGNS.join(', ')}`,
    });
  }

  if (props.justify && !isValidFlexJustify(props.justify)) {
    errors.push({
      component: 'Flex',
      prop: 'justify',
      value: props.justify,
      message: `Invalid justify. Must be one of: ${VALID_FLEX_JUSTIFIES.join(', ')}`,
    });
  }

  return errors;
}

// Validate Grid props
export function validateGridProps(props: any): ValidationError[] {
  const errors: ValidationError[] = [];

  if (props.gap && !isValidSpacing(props.gap)) {
    errors.push({
      component: 'Grid',
      prop: 'gap',
      value: props.gap,
      message: `Invalid gap. Must be one of: ${VALID_SPACING.join(', ')}`,
    });
  }

  return errors;
}

// Check for common mistakes
export interface CommonMistake {
  pattern: string;
  message: string;
  fix: string;
}

export const commonMistakes: CommonMistake[] = [
  {
    pattern: 'No Theme wrapper',
    message: 'App must be wrapped in <Theme> component',
    fix: 'Wrap root component with <Theme><YourApp /></Theme>',
  },
  {
    pattern: 'Using div instead of Flex for layout',
    message: 'Use Flex component for 1D layouts instead of div with CSS',
    fix: '<Flex direction="column" gap="2"><Item /><Item /></Flex>',
  },
  {
    pattern: 'Using margin for spacing between items',
    message: 'Use gap prop on Flex/Grid instead of margin on children',
    fix: '<Flex gap="4"><Item /><Item /></Flex>',
  },
  {
    pattern: 'Invalid color value',
    message: 'Color must be one of the predefined values',
    fix: `Use: ${VALID_COLORS.slice(0, 5).join(', ')}, etc.`,
  },
  {
    pattern: 'Form input without label',
    message: 'Always provide <Label> for form inputs',
    fix: '<Label><Text>Field</Text><TextField.Root /></Label>',
  },
  {
    pattern: 'Icon button without aria-label',
    message: 'Icon-only buttons must have aria-label for accessibility',
    fix: '<IconButton aria-label="Close"><Cross /></IconButton>',
  },
  {
    pattern: 'Using color alone for status',
    message: 'Use color + badge/text for accessible status indication',
    fix: '<Badge color="green">Active</Badge>',
  },
  {
    pattern: 'Hardcoded pixel values',
    message: 'Use spacing scale (1-9) instead of hardcoded px',
    fix: '<Box p="4"> instead of <Box style={{padding: "16px"}}>',
  },
];

// Validate accessibility
export interface AccessibilityIssue {
  level: 'error' | 'warning';
  element: string;
  issue: string;
  fix: string;
}

export function validateAccessibility(code: string): AccessibilityIssue[] {
  const issues: AccessibilityIssue[] = [];

  // Check for form inputs without labels
  if (code.includes('TextField.Root') && !code.includes('Label')) {
    issues.push({
      level: 'error',
      element: 'TextField',
      issue: 'Text input missing associated label',
      fix: 'Wrap input with <Label htmlFor="id"><Text>Label</Text></Label>',
    });
  }

  // Check for icon buttons without aria-label
  if (code.includes('IconButton') && !code.includes('aria-label')) {
    issues.push({
      level: 'warning',
      element: 'IconButton',
      issue: 'Icon-only button may need aria-label for screen readers',
      fix: 'Add aria-label="description" to IconButton',
    });
  }

  // Check for Theme wrapper
  if (!code.includes('<Theme')) {
    issues.push({
      level: 'error',
      element: 'App',
      issue: 'App not wrapped in Theme component',
      fix: 'Wrap root component: <Theme><App /></Theme>',
    });
  }

  // Check for focus states (can't be checked in string, but warn)
  if (!code.includes('focus')) {
    issues.push({
      level: 'warning',
      element: 'Interactive Elements',
      issue: 'Remember that focus states are built-in',
      fix: 'Do not override focus styles - Radix handles this',
    });
  }

  return issues;
}

// Summary validation
export interface ValidationSummary {
  valid: boolean;
  errors: ValidationError[];
  warnings: AccessibilityIssue[];
  score: number; // 0-100
}

export function validateComponent(componentCode: string, props: any): ValidationSummary {
  const errors: ValidationError[] = [];
  const warnings: AccessibilityIssue[] = [];

  // Check specific component props
  if (componentCode.includes('Button')) {
    errors.push(...validateButtonProps(props));
  }
  if (componentCode.includes('Text')) {
    errors.push(...validateTextProps(props));
  }
  if (componentCode.includes('Flex')) {
    errors.push(...validateFlexProps(props));
  }
  if (componentCode.includes('Grid')) {
    errors.push(...validateGridProps(props));
  }

  // Check accessibility
  warnings.push(...validateAccessibility(componentCode));

  // Calculate score
  const errorPenalty = errors.length * 10;
  const warningPenalty = warnings.length * 3;
  const score = Math.max(0, 100 - errorPenalty - warningPenalty);

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    score,
  };
}

// Export all validators as a single object
export const validators = {
  isValidButtonVariant,
  isValidSize,
  isValidSpacing,
  isValidFlexDirection,
  isValidFlexAlign,
  isValidFlexJustify,
  isValidTextWeight,
  isValidTextSize,
  isValidColor,
  validateButtonProps,
  validateTextProps,
  validateFlexProps,
  validateGridProps,
  validateAccessibility,
  validateComponent,
};
