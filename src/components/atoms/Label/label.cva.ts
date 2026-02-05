import { cva, type VariantProps } from 'class-variance-authority';

import { getEnumObjectFromArray } from '@/lib/arrayToEnum';

export const labelIntents = [
  'default',
  'error',
  'info',
  'success',
  'warning',
] as const;
export type TLabelIntentEnum = (typeof labelIntents)[number];
export const labelIntentEnumObject = getEnumObjectFromArray(labelIntents);

export const labelVariants = cva('flex flex-row gap-0.5 mb-1', {
  variants: {
    intent: {
      [labelIntentEnumObject.default]: 'txt-secondary-700',
      [labelIntentEnumObject.error]: 'txt-error-primary-600',
      [labelIntentEnumObject.info]: 'txt-info-700', // FIXME: Missing info-primary-600 in the design system
      [labelIntentEnumObject.success]: 'txt-success-primary-600',
      [labelIntentEnumObject.warning]: 'txt-warning-primary-600',
    },
    defaultVariants: {
      intent: labelIntentEnumObject.default,
    },
  },
});

export type LabelVariantsProps = VariantProps<typeof labelVariants>;
