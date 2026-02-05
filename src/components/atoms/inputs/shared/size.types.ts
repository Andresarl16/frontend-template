import { getEnumObjectFromArray } from '@/lib/arrayToEnum';

export const inputSizes = ['sm', 'md'] as const;
export type TInputSizeEnum = (typeof inputSizes)[number];
export const inputSizeEnumObject = getEnumObjectFromArray(inputSizes);

export const inputSizeClasses = {
  [inputSizeEnumObject.sm]: 'h-10',
  [inputSizeEnumObject.md]: 'h-11',
};
