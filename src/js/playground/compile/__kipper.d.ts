// Define global '__kipper' on the window (d.ts file)
export {};

declare global {
	var __kipper: { [key: string]: any };

	interface Window {
		__kipper: { [key: string]: any };
	}
}
