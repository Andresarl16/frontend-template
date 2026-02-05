import { cva, type VariantProps } from 'class-variance-authority';

import { getEnumObjectFromArray } from '@/lib/arrayToEnum';

export const fieldMessageIntents = [
  'default',
  'error',
  'info',
  'success',
  'warning',
] as const;
export type TFieldMessageIntentEnum = (typeof fieldMessageIntents)[number];
export const fieldMessageIntentEnumObject =
  getEnumObjectFromArray(fieldMessageIntents);

export const fieldMessageVariants = cva('flex flex-row gap-0.5 mt-1', {
  variants: {
    intent: {
      [fieldMessageIntentEnumObject.default]: 'txt-secondary-700',
      [fieldMessageIntentEnumObject.error]: 'txt-error-primary-600',
      [fieldMessageIntentEnumObject.info]: 'txt-info-700', // FIXME: Missing info-primary-600 in the design system
      [fieldMessageIntentEnumObject.success]: 'txt-success-primary-600',
      [fieldMessageIntentEnumObject.warning]: 'txt-warning-primary-600',
    },
    defaultVariants: {
      intent: fieldMessageIntentEnumObject.default,
    },
  },
});

export type FieldMessageVariantsProps = VariantProps<
  typeof fieldMessageVariants
>;
