import React from 'react';
import Layout from '@theme-original/Layout';
import { ProgressProvider } from '@site/src/context/ProgressContext';

export default function LayoutWrapper(props) {
  return (
    <ProgressProvider>
      <Layout {...props} />
    </ProgressProvider>
  );
} 