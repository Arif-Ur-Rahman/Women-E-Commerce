import React from "react";

const Layout = () => {
  return (
    <main className="first-section">
      <div className="intro-section">
        <ul>
          <h1>Women Fitness</h1>
          <li>
            <a className="btn cm-btn" href="/dress-home">
              Women Dress
            </a>
          </li>
          <li>
            <a className="btn cm-btn" href="/food-home">
              Women Food
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Layout;
