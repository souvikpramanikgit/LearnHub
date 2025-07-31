import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';
import CategoryProgress from '@site/src/components/CategoryProgress';

function getDocIds(item) {
    if (item.type === 'category') {
        return item.items.flatMap(getDocIds);
    }
    if (item.type === 'link') {
        return [item.docId].filter(Boolean);
    }
    return [];
}

export default function DocCard({item}) {
  const docIds = getDocIds(item);

  return (
    <article className="margin-bottom--lg">
      <Link
        to={item.href}
        className={clsx('card padding--lg', styles.cardContainer)}>
        <h2 className={clsx('text--truncate', styles.cardTitle)} title={item.label}>
          {item.label}
        </h2>
        {/* This block adds the description back */}
        {item.description && (
          <p
            className={clsx('text--truncate', styles.cardDescription)}
            title={item.description}>
            {item.description}
          </p>
        )}
        <CategoryProgress docIds={docIds} />
      </Link>
    </article>
  );
}