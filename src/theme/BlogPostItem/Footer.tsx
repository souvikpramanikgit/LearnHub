import React from 'react';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import BlogPostShare from '@theme/BlogPostShare';

export default function BlogPostItemFooter() {
  const { metadata } = useBlogPost();
  return (
    <>
      <BlogPostShare permalink={metadata.permalink} title={metadata.title} />
    </>
  );
}
