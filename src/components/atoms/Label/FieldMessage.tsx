import { cn } from '@/lib/cn';
import { Text } from '../Text';
import type { TextProps } from '../Text/Text';
import {
  fontFamilyEnumObject,
  fontSizeEnumObject,
  fontWeightEnumObject,
} from '../Text/text.cva';
import {
  fieldMessageIntentEnumObject,
  fieldMessageVariants,
  type TFieldMessageIntentEnum,
} from './fieldMessage.cva';

export interface FieldMessageProps extends Omit<TextProps, 'as'> {
  intent?: TFieldMessageIntentEnum;
}

function FieldMessage({
  children,
  className,
  fontFamily = fontFamilyEnumObject.text,
  fontWeight = fontWeightEnumObject.medium,
  fontSize = fontSizeEnumObject.sm,
  intent = fieldMessageIntentEnumObject.default,
  ...props
}: FieldMessageProps) {
  return (
    <Text
      as="p"
      className={cn(fieldMessageVariants({ intent }), className)}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...props}
    >
      {children}
    </Text>
  );
}

export default FieldMessage;
