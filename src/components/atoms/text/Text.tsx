import { cn } from '@/lib/cn';
import React from 'react';
import {
  fontFamilyEnumObject,
  fontSizeEnumObject,
  fontWeightEnumObject,
  textVariants,
  TextVariantsProps,
} from './text.cva';
import { responsiveCva, ResponsiveCVA } from '@/lib/responsive/cvaResponsive';

// If you don't want to limit the HTML tags, you can replace AllowedTags with React.ElementType
export type TextVariantsAllowedTags =
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'li';

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    TextVariantsProps {
  as?: TextVariantsAllowedTags;
  responsiveVariants?: ResponsiveCVA<TextVariantsProps>;
}

function Text({
  as: Component = 'p',
  children,
  className,
  fontFamily = fontFamilyEnumObject.text,
  fontWeight = fontWeightEnumObject.regular,
  fontSize = fontSizeEnumObject.md,
  responsiveVariants,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        responsiveCva(
          { fontFamily, fontWeight, fontSize },
          textVariants,
          responsiveVariants
        ),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Text;
