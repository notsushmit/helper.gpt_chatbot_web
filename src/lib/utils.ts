import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Simple clsx implementation for className merging
function clsx(...inputs: ClassValue[]): string {
  return inputs
    .flat()
    .filter(Boolean)
    .join(' ');
}

export function twMerge(input: string): string {
  // Simple implementation - in production you'd use the actual tailwind-merge library
  return input;
}

export type ClassValue = string | number | boolean | undefined | null | ClassValue[];