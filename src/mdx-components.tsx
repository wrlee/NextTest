import type { MDXComponents } from 'mdx/types'
import resets from './mdx-resets.module.css'; // Import the reset CSS module

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <h1 className={resets.h1}>{children}</h1>,
    ul: ({ children }) => <ul className={resets.ul}>{children}</ul>,
    li: ({ children }) => <li className={resets.li}>{children}</li>,
    // Add other elements you want to reset
  }
}