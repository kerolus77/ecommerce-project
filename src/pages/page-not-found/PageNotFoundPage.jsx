import { Link } from "react-router";
import { Header } from "../../components/Header";
import "./PageNotFoundPage.css";
export function PageNotFoundPage() {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/404-favicon.png" />

      <title>Page Not Found</title>

      <Header />
      <div className="page-not-found-page">
        <div className="page-not-found-content">
          <h1 className="page-not-found-title">404 - Page Not Found</h1>
          <p className="page-not-found-message">
            The page you are looking for does not exist.
          </p>
          <Link className="back-to-home-link link-primary" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
