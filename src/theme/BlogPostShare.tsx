import React from 'react';
import SocialShareButtons from '../components/SocialShareButtons';
import './BlogPostShare.css';

const BlogPostShare = ({ permalink, title }) => {
  const url = typeof window !== 'undefined' ? window.location.href : permalink;
  return (
    <div className="blog-post-footer-share">
      <SocialShareButtons url={url} title={title} />
    </div>
  );
};

export default BlogPostShare;
