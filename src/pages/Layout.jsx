import React from "react";
import { Link } from "react-router-dom";
const Layout = () => {
  return (
    <main className="first-section">
      <div className="intro-section">
        <ul>
          <h1>Women Fitness</h1>
          <li>
            <Link className="btn cm-btn" to="/dress-home">
              Women Dress
            </Link>
          </li>
          <li>
            <Link className="btn cm-btn" to="/food-home">
              Women Food
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Layout;
