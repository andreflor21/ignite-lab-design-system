import { clsx } from 'clsx';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ReactNode } from 'react';
import { Check } from 'phosphor-react';

export interface CheckboxProps {
  children: ReactNode;
  asChild: boolean;
}

export function Checkbox({}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className="w-6 h-6 p-0.5 bg-gray-800 rounded">
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="w-5 h-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
