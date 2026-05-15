import Link from 'next/link';

export default function ServiceCard({
  icon,
  title,
  description,
  index = 0,
  featured = false,
}) {
  return (
    <div
      className={`service-card ${featured ? 'featured' : ''} animate-fadeUp`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-icon-wrap">
        <span className="card-icon">{icon}</span>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
      <Link href="/contact" className="card-cta">
        Learn more <span>→</span>
      </Link>
    </div>
  );
}
