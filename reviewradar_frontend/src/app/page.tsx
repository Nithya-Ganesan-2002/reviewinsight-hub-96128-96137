import React from "react";

// PUBLIC_INTERFACE
export default function Home() {
  /**
   * Home page displaying ReviewRadar interface skeleton:
   * - Header: Branding + product search bar.
   * - Main: Product grid & reviews.
   * - Sidebar: Insights (AI summaries etc.)
   * Design: clean, modern, minimalistic, responsive.
   */
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-logo" aria-label="ReviewRadar logo and title">
          <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <circle cx={16} cy={16} r={16} fill="#2563eb" />
            <path
              d="M11.2 17.7c.2 1.2.7 2.1 1.5 2.7 1.1.9 2.8 1.2 5.7 1.1 1.7-.1 2.3.3 2.6-1.5.5-2.8-.3-5.8-1.4-7.2-1-1.2-3.2-1.7-5.6-1.2-2.1.5-2.7 2.1-2.4 3.6l.6 2.5zm7.3 2.7c-3.7.2-5.4-.2-6.5-1-.6-.4-.9-1.1-1.1-2.1l-.4-1.8c-.2-1 0-1.9.6-2.6C12.7 11 14.8 11 16.5 11.2c2.5.3 4.1 1.4 4.8 2.3 1.4 1.8 2 5.1 1.5 8-.4 1.9-1.5 1.8-3.3 1.8z"
              fill="#fff"
            />
          </svg>
          ReviewRadar
        </div>
        <form className="header-search" role="search" aria-label="Product search bar">
          <input
            type="search"
            placeholder="Search products, e.g. 'headphones'"
            aria-label="Search for a product"
            autoComplete="off"
            name="search"
            disabled
          />
        </form>
        <div style={{ minWidth: 32, width: 32, height: 32, opacity: 0 }} />
      </header>

      {/* Main layout: main content + sidebar */}
      <div className="main-layout">
        {/* Main content */}
        <section className="content-section" aria-label="Product reviews">
          <div style={{ marginBottom: "1.7rem" }}>
            <h2 style={{
              fontSize: "1.25rem",
              color: "var(--secondary)",
              margin: 0,
              fontWeight: 600,
              letterSpacing: "-0.5px"
            }}>
              Popular Products
            </h2>
            <p style={{
              fontSize: "1rem",
              color: "#64748b",
              marginTop: "0.4rem"
            }}>
              Search for a product to see detailed aggregated reviews and AI-powered insights.
            </p>
          </div>
          <div className="products-grid">
            {/* product cards placeholders */}
            {[1, 2, 3].map(k => (
              <div className="product-card" key={k} aria-label="Product card skeleton">
                <div style={{
                  width: "100%",
                  height: 130,
                  borderRadius: "0.8rem",
                  background: "linear-gradient(90deg, #eceef4 30%, #e8f3fd 100%)",
                  marginBottom: 15
                }} />
                <div style={{
                  fontWeight: 600,
                  color: "var(--secondary)",
                  fontSize: "1.08rem",
                  marginBottom: 5,
                  lineHeight: 1.4
                }}>
                  Product Title
                </div>
                <div style={{
                  background: "var(--accent)",
                  color: "#fff",
                  fontWeight: 500,
                  display: "inline-block",
                  fontSize: "0.97rem",
                  padding: "3px 11px 2px 11px",
                  borderRadius: "0.6rem",
                  marginBottom: 6
                }}>
                  4.8 <span style={{fontWeight: 400}}>/ 5</span>
                </div>
                <div style={{color: "#888", fontSize: "0.97rem", marginBottom: 7}}>
                  2,298 reviews
                </div>
                <div
                  style={{
                    marginTop: 7,
                    color: "#51535a",
                    fontSize: "0.97rem",
                    lineHeight: 1.4
                  }}
                >
                  “Great product! Would buy again.” <span style={{color:"#bbb"}}>(AI summary)</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sidebar for AI-generated insights */}
        <aside className="sidebar" aria-label="AI-generated insights and highlights">
          <h2
            style={{
              color: "var(--primary)",
              fontWeight: 700,
              fontSize: "1.15rem",
              margin: "0 0 1.3rem 0"
            }}
          >
            Insights <span style={{ color: "var(--accent)" }}>🔎</span>
          </h2>
          <div style={{fontSize: "1.02rem", color: "var(--secondary)"}}>
            <p>
              See top product pros, common downsides, and smart comparisons powered by AI, here.
            </p>
            <hr style={{
              margin: "1.4rem 0",
              border: "none",
              borderTop: "1.5px solid #e4e7ee"
            }} />
            <ul style={{padding: 0, margin: 0, listStyle: "inside disc"}}>
              <li style={{marginBottom: "0.9rem"}}>
                <span style={{color: "var(--primary)", fontWeight: 500}}>Smart Summaries</span> <br/>
                Short digest of what buyers praise or dislike
              </li>
              <li style={{marginBottom: "0.9rem"}}>
                <span style={{color: "var(--primary)", fontWeight: 500}}>Comparisons</span> <br/>
                Quick pros & cons vs. other products
              </li>
              <li>
                <span style={{color: "var(--primary)", fontWeight: 500}}>Personalized Tips</span> <br/>
                Guidance tailored to your search
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
