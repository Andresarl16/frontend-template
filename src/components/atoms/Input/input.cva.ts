import { cva, type VariantProps } from 'class-variance-authority';
import { getEnumObjectFromArray } from '@/lib/arrayToEnum';

export const inputSizes = ['sm', 'md'] as const;
export type TInputSizeEnum = (typeof inputSizes)[number];
export const inputSizeEnumObject = getEnumObjectFromArray(inputSizes);

export const inputStates = ['default', 'disabled', 'error'] as const;
export type TInputStateEnum = (typeof inputStates)[number];
export const inputStateEnumObject = getEnumObjectFromArray(inputStates);

export const inputBorders = ['normal', 'error'] as const;
export type TInputBorderEnum = (typeof inputBorders)[number];
export const inputBorderEnumObject = getEnumObjectFromArray(inputBorders);

export const controlVariants = cva(
  'flex flex-row w-full border rounded-lg placeholder:txt-placeholder items-center shadow-sm txt-primary-900 px-3 gap-2',
  {
    variants: {
      inputState: {
        [inputStateEnumObject.default]: '',
        [inputStateEnumObject.disabled]:
          'bg-disabled_subtle border-disabled cursor-not-allowed',
        [inputStateEnumObject.error]:
          'border-error focus-within:ring-2 focus-within:ring-error-600',
      },
    },

    defaultVariants: {
      inputState: inputStateEnumObject.default,
    },
  }
);

export const inputVariants = cva(
  'w-full h-full m-0 border-0 bg-transparent focus:border-0 focus:ring-0 txt-primary-900 font-text outline-none focus:outline-none',
  {
    variants: {
      inputSize: {
        [inputSizeEnumObject.sm]: 'h-10',
        [inputSizeEnumObject.md]: 'h-11',
      },

      inputState: {
        [inputStateEnumObject.default]: '',
        [inputStateEnumObject.disabled]:
          'cursor-not-allowed placeholder:dark:text-gray-500',
        [inputStateEnumObject.error]: '',
      },
    },

    defaultVariants: {
      inputSize: inputSizeEnumObject.md,
      inputState: inputStateEnumObject.default,
    },
  }
);

export type InputVariantProps = VariantProps<typeof inputVariants>;
