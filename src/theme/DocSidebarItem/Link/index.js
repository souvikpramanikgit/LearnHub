import React from 'react';
import Link from '@theme-original/DocSidebarItem/Link';
import { useProgress } from '@site/src/context/ProgressContext';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {isSamePath} from '@docusaurus/theme-common/internal';

export default function LinkWrapper(props) {
  const { item } = props;
  const { progress } = useProgress();
  
  // We get the unique ID of the document this link points to.
  const docId = item.docId;
  const isCompleted = docId ? progress[docId] : false;

  // This is a bit of logic to handle external links safely
  const isExternalLink = !isInternalUrl(item.href) || isSamePath(item.href, '.');
  
  return (
    <>
      <Link {...props} />
      {/* If the lesson is completed and it's not an external link, show a checkmark */}
      {isCompleted && !isExternalLink && <span style={{ marginLeft: '8px' }}>✅</span>}
    </>
  );
}