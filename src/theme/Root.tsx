import React from 'react';
import ScrollProgressBar from '../components/ScrollProgressBar';

// Default implementation, you can customize it to your needs
export default function Root({children}: {children: React.ReactNode}): React.ReactElement {
  return (
    <>
      <ScrollProgressBar />
      {children}
    </>
  );
}
