import { getEnumObjectFromArray } from '@/lib/arrayToEnum';

export const inputStates = ['default', 'disabled', 'error'] as const;
export type TInputStateEnum = (typeof inputStates)[number];
export const inputStateEnumObject = getEnumObjectFromArray(inputStates);

export const inputStateClasses = {
  [inputStateEnumObject.default]: '',
  [inputStateEnumObject.disabled]:
    'cursor-not-allowed placeholder:dark:text-gray-500',
  [inputStateEnumObject.error]: '',
};
