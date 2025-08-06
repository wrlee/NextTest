import { MDXComponents } from 'mdx/types';
import './mdx-components.css';

import styles from './mdx-components.module.css'; // Import the reset CSS module

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		wrapper: ({ children }: { children: React.ReactNode }) => <div className={styles._mdxWrapper}>{children}</div>,
	}
}