/**
 * Container Component
 * Feature: 009-apple-hig-ui-redesign
 * Content deference through proper content width constraints
 */

'use client';

import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/lib/design-system/classNames';

/**
 * Size variants for container max-width
 */
export type ContainerSize = 'sm' | 'md' | 'lg' | 'full';

/**
 * Padding sizes for horizontal spacing
 */
export type ContainerPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * HTML elements that can be used for the container
 */
export type ContainerElement = 'div' | 'section' | 'main' | 'article' | 'header' | 'footer' | 'nav';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  /** Container content */
  children: ReactNode;
  /** Maximum width variant */
  size?: ContainerSize;
  /** Horizontal padding */
  padding?: ContainerPadding;
  /** Center the container horizontally */
  center?: boolean;
  /** HTML element to render as */
  as?: ContainerElement;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Container Component
 *
 * Apple HIG-compliant container for constraining content width and
 * ensuring proper readability. Supports various max-width options,
 * responsive padding, and semantic HTML elements.
 *
 * @example
 * ```tsx
 * <Container size="lg" padding="lg">
 *   <h1>Page Title</h1>
 *   <p>Page content with proper width constraints</p>
 * </Container>
 * ```
 *
 * @example
 * ```tsx
 * <Container as="section" size="sm">
 *   <article>Narrow content for better readability</article>
 * </Container>
 * ```
 *
 * @example
 * ```tsx
 * <Container size="full" padding="none">
 *   <div>Full-width hero section</div>
 * </Container>
 * ```
 */
export function Container({
  children,
  size = 'md',
  padding = 'md',
  center = true,
  as: Component = 'div',
  className,
  ...props
}: ContainerProps) {
  // Base styles
  const baseStyles = classNames('container-base', 'w-full');

  // Size styles - max-width constraints
  const sizeStyles = {
    sm: classNames('container-sm', 'max-w-3xl'), // ~768px
    md: classNames('container-md', 'max-w-5xl'), // ~1024px
    lg: classNames('container-lg', 'max-w-7xl'), // ~1280px
    full: classNames('container-full', 'max-w-full'),
  };

  // Padding styles - horizontal padding
  const paddingStyles = {
    none: 'px-0',
    sm: 'px-2', // 8px
    md: 'px-4', // 16px
    lg: 'px-6', // 24px
    xl: 'px-8', // 32px
  };

  // Centering
  const centerStyles = center ? 'mx-auto' : '';

  const containerClassName = classNames(
    baseStyles,
    sizeStyles[size],
    paddingStyles[padding],
    centerStyles,
    className
  );

  return (
    <Component className={containerClassName} {...props}>
      {children}
    </Component>
  );
}
