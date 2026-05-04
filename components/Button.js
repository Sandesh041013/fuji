import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  arrow = false,
  className = '',
  type = 'button',
}) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    arrow ? styles.arrow : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {arrow && <span className={styles.arrowIcon} aria-hidden>→</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {content}
    </button>
  );
}
