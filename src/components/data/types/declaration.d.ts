export interface CustomType {
  id: string;
  name: string;
  value: number;
}

// This is a placeholder for the original declaration file
// Original any types have been replaced with more specific types
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: Record<string, unknown>;
  export default content;
}
