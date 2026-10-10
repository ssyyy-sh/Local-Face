import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section notfound">
      <div className="container">
        <h1 className="page-title">Page not found</h1>
        <p>The scent you are looking for has drifted away.</p>
        <Link to="/" className="btn btn--accent">Back to Home</Link>
      </div>
    </section>
  );
}
