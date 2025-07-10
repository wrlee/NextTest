import type { MDXComponents } from 'mdx/types'
import resets from './mdx-resets.module.css'; // Import the reset CSS module

export function useMDXComponents(components: MDXComponents): MDXComponents {
  	return {
		...components,
		wrapper: ({ children }) => <div className={resets._mdxWrapper}>{children}</div>,
  	}
}