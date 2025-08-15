// src/types/mdx.d.ts
declare module '*.mdx' {
  const content: any;
  export const notesMeta: {
    id: string;
    title: string;
    subject: string;
    pdf: string;
  }[];
  export default content;
}
