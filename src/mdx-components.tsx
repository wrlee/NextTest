import { MDXComponents } from 'mdx/types';

import styles from './mdx-components.module.css'; // Import the reset CSS module

export function useMDXComponents(components: MDXComponents): MDXComponents {
  	return {
		...components,
		wrapper: ({ children }) => <div className={styles._mdxWrapper}>{children}</div>,
  	}
}