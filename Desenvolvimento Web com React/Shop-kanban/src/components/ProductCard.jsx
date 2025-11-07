import React, { useState } from 'react';
import styles from './ProductCard.module.css';

const formatPrice = (v) => {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export default function ProductCard({ product, onAdd, buttonVariant = 'solid', loading = false }) {
  const [pending, setPending] = useState(false);
  const ratingLabel = product ? `${product.rating} de 5 estrelas` : 'Carregando';

  const handleClick = () => {
    if (!product || pending) return;
    setPending(true);
    setTimeout(() => {
      onAdd(product.id);
      setPending(false);
    }, 600);
  };

  if (loading) {
    return (
      <article className={styles.card} aria-busy="true" aria-label="Produto carregando">
        <div className={`${styles.media} ${styles.skeleton}`} />
        <div className={`${styles.content}`}>
          <div className={`${styles.title} ${styles.skeleton}`} />
          <div className={`${styles.price} ${styles.skeleton}`} />
          <div className={`${styles.rating} ${styles.skeleton}`} />
          <div className={`${styles.actions}`}>
            <div className={`${styles.button} ${styles.skeleton}`} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={styles.card} aria-label={product.title}>
      <div className={styles.badges}>
        {product.tag && (
          <span className={styles.badge} aria-label={`Tag: ${product.tag}`}>{product.tag}</span>
        )}
      </div>

      <a href="#" className={styles.mediaLink} aria-label={`Ver detalhes de ${product.title}`}>
        <img
          className={styles.media}
          src={product.image}
          alt={product.title}
          loading="lazy"
          width="512"
          height="512"
        />
      </a>

      <div className={styles.content}>
        <h2 className={styles.title} title={product.title}>
          {product.title}
        </h2>

        <p className={styles.price}>
          {formatPrice(product.price)}
        </p>

        <div className={styles.rating} role="img" aria-label={ratingLabel}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} aria-hidden="true">
              {i < Math.round(product.rating) ? '★' : '☆'}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.button} ${styles[buttonVariant]}`}
            onClick={handleClick}
            disabled={pending}
            aria-disabled={pending}
            aria-busy={pending}
          >
            {pending ? 'Adicionando…' : 'Adicionar'}
          </button>
        </div>
      </div>
    </article>
  );
}