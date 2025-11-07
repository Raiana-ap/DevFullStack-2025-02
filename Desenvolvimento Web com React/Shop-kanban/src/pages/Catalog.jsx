import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import styles from '../App.module.css';

export default function Catalog({ products, onAdd }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.grid} aria-label="Lista de produtos">
      {loading
        ? Array.from({ length: 6 }).map((_, i) => (
            <ProductCard key={'skeleton-' + i} loading />
          ))
        : products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAdd={() => onAdd(p.id)}
              buttonVariant={p.buttonVariant}
            />
          ))}
    </section>
  );
}