// Overwriting the global window interface
export {};

declare global {
	// eslint-disable-next-line no-unused-vars
	interface Window {
		Kipper: any;
	}
}
