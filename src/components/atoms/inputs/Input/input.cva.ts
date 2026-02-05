import { cva, type VariantProps } from 'class-variance-authority';
import { inputSizeClasses, inputSizeEnumObject } from '../shared/size.types';
import {
  inputStateClasses,
  inputStateEnumObject,
} from '../shared/states.types';
import { inputGeneralClasses } from '../shared/general.classes';

export const inputVariants = cva(inputGeneralClasses, {
  variants: {
    inputSize: inputSizeClasses,

    inputState: inputStateClasses,
  },

  defaultVariants: {
    inputSize: inputSizeEnumObject.md,
    inputState: inputStateEnumObject.default,
  },
});

export type InputVariantProps = VariantProps<typeof inputVariants>;
