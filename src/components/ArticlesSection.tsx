import React, { useState } from "react";

type Article = {
  id: string;
  title: string;
  date: string;
  summary: string;
  cover: string;
  tags?: string[];
  content: React.ReactNode;
};

const FullArticle: React.FC = () => (
  <div className="text-white">
    <section className="mx-auto max-w-4xl">
      <header className="mb-6">
        <p className="uppercase tracking-wide text-xs text-mist-500">Research Article</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white">Drivers of Residential Real‑Estate Prices in Poland: An Exploratory Data Analysis</h2>
        <p className="mt-2 text-mist-200">
          Abstract: We examine distributions, regional differences, and correlates of listing prices using a large sample of Polish housing offers.
          We focus on price, area, rooms, building type, construction year, macro indicators, and coordinates.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
        <aside className="md:sticky md:top-6 h-max bg-white/[0.03]/[0.03] border border-white/10 rounded-xl p-3 text-sm text-mist-200">
          <nav className="space-y-2">
            <a className="block hover:underline" href="#data">Data</a>
            <a className="block hover:underline" href="#methods">Methods</a>
            <a className="block hover:underline" href="#price-dist">Price distribution</a>
            <a className="block hover:underline" href="#area-dist">Area distribution</a>
            <a className="block hover:underline" href="#price-area">Price vs area</a>
            <a className="block hover:underline" href="#regional">Regional patterns</a>
            <a className="block hover:underline" href="#building">Building type</a>
            <a className="block hover:underline" href="#correlations">Correlations</a>
            <a className="block hover:underline" href="#ppsqm">Median price per m²</a>
            <a className="block hover:underline" href="#limits">Limitations</a>
            <a className="block hover:underline" href="#future">Future work</a>
          </nav>
        </aside>

        <div className="space-y-8 text-white">
          <section id="data">
            <h3 className="text-xl font-semibold mb-2">Data</h3>
            <p>Listings contain <strong>price</strong>, <strong>area</strong>, <strong>rooms</strong>, <strong>building type</strong>,
            <strong> construction year</strong>, regional macro indicators, and <strong>latitude/longitude</strong>.</p>
          </section>

          <section id="methods">
            <h3 className="text-xl font-semibold mb-2">Methods</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Cleaning and feature engineering in Python (pandas).</li>
              <li>Visualizations in matplotlib; kernel density overlays for distributions.</li>
              <li>Derived metrics such as <em>price per m²</em>.</li>
            </ul>
          </section>

          <section id="price-dist">
            <h3 className="text-xl font-semibold mb-3">Price distribution</h3>
            <figure className="space-y-2">
              <img src="/articles/price_distribution.png" alt="Price distribution" className="rounded-xl border border-white/10 w-full" />
              <figcaption className="text-sm text-mist-400">Right-skewed with a long upper tail.</figcaption>
            </figure>
          </section>

          <section id="area-dist">
            <h3 className="text-xl font-semibold mb-3">Area distribution</h3>
            <figure className="space-y-2">
              <img src="/articles/area_distribution.png" alt="Area distribution" className="rounded-xl border border-white/10 w-full" />
              <figcaption className="text-sm text-mist-400">Most homes cluster between 30–80 m².</figcaption>
            </figure>
          </section>

          <section id="price-area">
            <h3 className="text-xl font-semibold mb-3">Price vs area</h3>
            <figure className="space-y-2">
              <img src="/articles/price_vs_area_scatter.png" alt="Price vs area" className="rounded-xl border border-white/10 w-full" />
              <figcaption className="text-sm text-mist-400">Prices increase with area but with wide variance.</figcaption>
            </figure>
          </section>

          <section id="regional">
            <h3 className="text-xl font-semibold mb-3">Regional patterns</h3>
            <figure className="space-y-2">
              <img src="/articles/listings_per_voivodeship.png" alt="Listings per voivodeship" className="rounded-xl border border-white/10 w-full" />
              <figcaption className="text-sm text-mist-400">Mazowieckie has the most listings.</figcaption>
            </figure>
            <figure className="space-y-2">
              <img src="/articles/price_by_voivodeship_box.png" alt="Price by voivodeship" className="rounded-xl border border-white/10 w-full" />
              <figcaption className="text-sm text-mist-400">Higher medians around Warsaw and coastal regions.</figcaption>
            </figure>
          </section>

          <section id="building">
            <h3 className="text-xl font-semibold mb-3">Building type effects</h3>
            <figure className="space-y-2">
              <img src="/articles/price_by_building_type_box.png" alt="Price by building type" className="rounded-xl border border-white/10 w-full" />
              <figcaption className="text-sm text-mist-400">Type matters for pricing.</figcaption>
            </figure>
          </section>

          <section id="correlations">
            <h3 className="text-xl font-semibold mb-3">Correlations</h3>
            <figure className="space-y-2">
              <img src="/articles/correlation_matrix.png" alt="Correlation matrix" className="rounded-xl border border-white/10 w-full" />
              <figcaption className="text-sm text-mist-400">Price relates to area and regional salaries.</figcaption>
            </figure>
          </section>

          <section id="ppsqm">
            <h3 className="text-xl font-semibold mb-3">Median price per m² by region</h3>
            <figure className="space-y-2">
              <img src="/articles/median_price_per_m2.png" alt="Median price per m2" className="rounded-xl border border-white/10 w-full" />
              <figcaption className="text-sm text-mist-400">Affordability gaps persist by region.</figcaption>
            </figure>
          </section>

          <section id="limits">
            <h3 className="text-xl font-semibold mb-2">Limitations</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Asking prices ≠ transactions.</li>
              <li>Omitted variables may bias simple correlations.</li>
              <li>Temporal effects need explicit modeling.</li>
            </ul>
          </section>

          <section id="appendix" className="pt-4 border-t">
            <h3 className="text-xl font-semibold mb-2">Appendix</h3>
            <p className="text-sm">Download original document: <a className="text-brand-300 underline" href="/articles/original_article.docx" download>original_article.docx</a></p>
          </section>
        </div>
      </div>
    </section>
  </div>
);

const CaseStudyBody: React.FC = () => (
  <div className="text-white">
    <section className="mx-auto max-w-4xl">
      <header className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Case Study: Poland's Residential Real‑Estate Market</h2>
        <p className="mt-2 text-mist-200">A focused case study aligned with the portfolio styling.</p>
      </header>

      <article className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-2">Introduction</h3>
          <p>
            This study presents a comprehensive analysis of the residential real estate market in Poland. The objective is to identify and evaluate
            the key factors influencing property valuation.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Part 1: Data and Methodology</h3>
          <p>
            The analysis uses a CSV dataset of listings with core parameters (price, area, rooms) and detailed attributes such as construction materials,
            heating systems, year built, and macro indicators.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Part 2: Preliminary Analysis and Market Characteristics</h3>
          <p>Price and area show positive skewness. Most properties cluster at lower price and size segments.</p>
          <img src="/articles/price_distribution.png" alt="Distribution of Prices" className="rounded-xl border border-white/10 w-full" />
          <img src="/articles/area_distribution.png" alt="Distribution of Area" className="rounded-xl border border-white/10 w-full" />
          <p className="mt-3">Geographical activity is uneven. Mazowieckie dominates by listing counts.</p>
          <img src="/articles/listings_per_voivodeship.png" alt="Number of Listings by Voivodeship" className="rounded-xl border border-white/10 w-full" />
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Part 3: Key Pricing Relationships</h3>
          <p>Property value scales with total area with substantial variance.</p>
          <img src="/articles/price_vs_area_scatter.png" alt="Price vs Area" className="rounded-xl border border-white/10 w-full" />
          <p className="mt-3">Regional medians vary widely. Building type is an important factor.</p>
          <img src="/articles/price_by_voivodeship_box.png" alt="Price by Voivodeship" className="rounded-xl border border-white/10 w-full" />
          <img src="/articles/price_by_building_type_box.png" alt="Price by Building Type" className="rounded-xl border border-white/10 w-full" />
          <p className="mt-3">Correlation matrix highlights area and average salary as strongest correlates with price.</p>
          <img src="/articles/correlation_matrix.png" alt="Correlation Matrix" className="rounded-xl border border-white/10 w-full" />
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Part 4: Price per Square Meter</h3>
          <p>Mazowieckie and Pomorskie are the most expensive regions on a per‑m² basis.</p>
          <img src="/articles/median_price_per_m2.png" alt="Price per Square Meter by Voivodeship" className="rounded-xl border border-white/10 w-full" />
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
          <p>
            Pricing is determined by the combination of location, physical characteristics, regional economics, market segment, and building age.
            Warsaw stands out as the most expensive market.
          </p>
        </section>
      </article>
    </section>
  </div>
);

const articles: Article[] = [
  {
    id: "poland-real-estate-eda",
    title: "Polish Real‑Estate EDA: Distributions and Price Drivers",
    date: "2025-08-26",
    summary: "Full research article with charts, correlations, and regional patterns. Includes original .docx download.",
    cover: "/articles/price_distribution.png",
    tags: ["EDA", "Real Estate", "Poland"],
    content: <FullArticle />,
  },
  {
    id: "poland-real-estate-case-study",
    title: "Case Study: Poland's Residential Real‑Estate Market",
    date: "2025-08-26",
    summary: "Case study formatted for the portfolio. Distributions, geography, and price drivers.",
    cover: "/articles/median_price_per_m2.png",
    tags: ["Case Study", "Real Estate"],
    content: <CaseStudyBody />,
  },
];

const Card: React.FC<{ a: Article; onOpen: (a: Article) => void }> = ({ a, onOpen }) => (
  <div className="bg-white/[0.03] border border-white/[0.07] overflow-hidden transition hover:border-white/10 hover:shadow-md w-full">
    <div className="aspect-video w-full overflow-hidden bg-transparent">
      <img src={a.cover} alt={a.title} className="w-full h-full object-contain" />
    </div>
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-light text-white">{a.title}</h3>
      <p className="text-xs uppercase tracking-wider text-mist-500">{a.date}</p>
      <p className="text-sm text-mist-300 font-light">{a.summary}</p>
      <div className="flex flex-wrap gap-2">
        {a.tags?.map((t) => (
          <span key={t} className="text-xs px-3 py-1 border border-white/10 text-mist-300 uppercase tracking-wider">
            {t}
          </span>
        ))}
      </div>
      <button
        onClick={() => onOpen(a)}
        className="mt-3 px-6 py-2 bg-brand-500 hover:bg-brand-400 text-ink-900 text-xs uppercase tracking-wider font-medium transition-colors duration-200 flex items-center gap-2"
        aria-label={`Read full article: ${a.title}`}
      >
        Read Full Article
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
);

const Modal: React.FC<{ open: boolean; onClose: () => void; children: React.ReactNode }> = ({ open, onClose, children }) => {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-ink-800 text-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="sticky top-0 h-16 flex items-center justify-between px-6 border-b border-white/10 bg-ink-800 z-10">
                <h2 className="text-lg font-light text-white">Full Article</h2>
                <button 
                  onClick={onClose} 
                  className="px-6 py-2 bg-brand-500 hover:bg-brand-400 text-ink-900 text-xs uppercase tracking-wider font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Close
                </button>
              </div>
        <div className="h-[calc(90vh-4rem)] overflow-y-auto p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

const ArticlesSection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Article | null>(null);

  const openArticle = (a: Article) => {
    setCurrent(a);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  // Manage body scroll based on modal state
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <section id="writing" className="section border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-mist-500" />
            <span className="text-xs uppercase tracking-[0.2em] text-mist-300 font-light">
              Writing
            </span>
            <div className="h-px w-12 bg-mist-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Articles</h2>
          <p className="text-mist-300 font-light">Research, notes, data visualizations.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <Card key={a.id} a={a} onOpen={openArticle} />
          ))}
        </div>

        <Modal open={open} onClose={closeModal}>
          {current?.content}
        </Modal>
      </div>
    </section>
  );
};

export default ArticlesSection;