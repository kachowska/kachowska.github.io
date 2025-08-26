
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
  <div className="text-slate-900">
<section className="mx-auto max-w-4xl">
  <header className="mb-6">
    <p className="uppercase tracking-wide text-xs text-slate-500">Research Article</p>
    <h2 id="title" className="text-2xl md:text-3xl font-bold text-slate-900">Drivers of Residential Real‑Estate Prices in Poland: An Exploratory Data Analysis</h2>
    <p className="mt-2 text-slate-700">Abstract: We examine distributions, regional differences, and correlates of listing prices using a large sample of Polish housing offers.
    We focus on price, area, rooms, building type, construction year, macro indicators, and coordinates. We summarize central tendencies, visualize patterns,
    and discuss limitations and next steps.</p>
  </header>

  <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
    <aside className="md:sticky md:top-6 h-max bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-700">
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

    <div className="space-y-8 text-slate-900">
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
          <img src="/articles/price_distribution.png" alt="Price distribution" className="rounded-xl border border-slate-200 w-full" />
          <figcaption className="text-sm text-slate-600">Right-skewed with a long upper tail, indicating high-end outliers.</figcaption>
        </figure>
      </section>

      <section id="area-dist">
        <h3 className="text-xl font-semibold mb-3">Area distribution</h3>
        <figure className="space-y-2">
          <img src="/articles/area_distribution.png" alt="Area distribution" className="rounded-xl border border-slate-200 w-full" />
          <figcaption className="text-sm text-slate-600">Most homes cluster between 30–80 m².</figcaption>
        </figure>
      </section>

      <section id="price-area">
        <h3 className="text-xl font-semibold mb-3">Price vs area</h3>
        <figure className="space-y-2">
          <img src="/articles/price_vs_area_scatter.png" alt="Price vs area" className="rounded-xl border border-slate-200 w-full" />
          <figcaption className="text-sm text-slate-600">Prices increase with area but with wide variance across sizes.</figcaption>
        </figure>
      </section>

      <section id="regional">
        <h3 className="text-xl font-semibold mb-3">Regional patterns</h3>
        <figure className="space-y-2">
          <img src="/articles/listings_per_voivodeship.png" alt="Listings per voivodeship" className="rounded-xl border border-slate-200 w-full" />
          <figcaption className="text-sm text-slate-600">Mazowieckie has the most listings, consistent with Warsaw’s market size.</figcaption>
        </figure>
        <figure className="space-y-2">
          <img src="/articles/price_by_voivodeship_box.png" alt="Price by voivodeship" className="rounded-xl border border-slate-200 w-full" />
          <figcaption className="text-sm text-slate-600">Distribution of prices by voivodeship shows higher medians around Warsaw and coastal regions.</figcaption>
        </figure>
      </section>

      <section id="building">
        <h3 className="text-xl font-semibold mb-3">Building type effects</h3>
        <figure className="space-y-2">
          <img src="/articles/price_by_building_type_box.png" alt="Price by building type" className="rounded-xl border border-slate-200 w-full" />
          <figcaption className="text-sm text-slate-600">Apartments and row houses generally price above blocks and old tenements.</figcaption>
        </figure>
      </section>

      <section id="correlations">
        <h3 className="text-xl font-semibold mb-3">Correlations</h3>
        <figure className="space-y-2">
          <img src="/articles/correlation_matrix.png" alt="Correlation matrix" className="rounded-xl border border-slate-200 w-full" />
          <figcaption className="text-sm text-slate-600">Price correlates strongly with area and regional average salary.</figcaption>
        </figure>
      </section>

      <section id="ppsqm">
        <h3 className="text-xl font-semibold mb-3">Median price per m² by region</h3>
        <figure className="space-y-2">
          <img src="/articles/median_price_per_m2.png" alt="Median price per m2" className="rounded-xl border border-slate-200 w-full" />
          <figcaption className="text-sm text-slate-600">Regional medians show persistent affordability gaps.</figcaption>
        </figure>
      </section>

      <section id="limits">
        <h3 className="text-xl font-semibold mb-2">Limitations</h3>
        <ul className="list-disc ml-5 space-y-1">
          <li>Listings reflect asking prices, not transactions.</li>
          <li>Omitted variables may bias simple correlations.</li>
          <li>Temporal changes not fully controlled without panel modeling.</li>
        </ul>
      </section>

      <section id="future">
        <h3 className="text-xl font-semibold mb-2">Future work</h3>
        <ul className="list-disc ml-5 space-y-1">
          <li>Hedonic regression with fixed effects.</li>
          <li>Temporal models to quantify growth by region and segment.</li>
          <li>Geospatial smoothing and travel-time accessibility features.</li>
        </ul>
      </section>
    </div>
  </div>
</section>
</div>
);


const articles: Article[] = [
  {
    id: "poland-real-estate-eda",
    title: "Polish Real‑Estate EDA: Distributions and Price Drivers",
    date: "2025-08-26",
    summary:
      "Substantial research article with full text, charts, methodology, and limitations. Original uploaded document attached.",
    cover: "/articles/price_distribution.png",
    tags: ["EDA", "Real Estate", "Poland"],
    content: <FullArticle />,
  },
];

const Card: React.FC<{ a: Article; onOpen: (a: Article) => void }> = ({ a, onOpen }) => (
  <button
    className="text-left bg-white text-slate-900 hover:bg-white rounded-2xl shadow-lg border border-slate-200 p-4 transition w-full"
    onClick={() => onOpen(a)}
    aria-label={`Open article: ${a.title}`}
  >
    <div className="aspect-video w-full overflow-hidden rounded-xl mb-3 bg-gray-100">
      <img src={a.cover} alt={a.title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-lg font-semibold">{a.title}</h3>
    <p className="text-sm text-slate-600 mt-1">{a.date}</p>
    <p className="text-sm mt-2">{a.summary}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {a.tags?.map((t) => (
        <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200">
          {t}
        </span>
      ))}
    </div>
  </button>
);

const Modal: React.FC<{ open: boolean; onClose: () => void; children: React.ReactNode }> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-0 md:inset-8 bg-white text-slate-900 rounded-none md:rounded-2xl overflow-hidden shadow-2xl">
        <div className="h-14 flex items-center justify-between px-4 border-b">
          <h2 className="text-base font-semibold">Article</h2>
          <div className="flex items-center gap-2">
            <a href="/articles/original_article.docx" download className="px-3 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-sm border">Download .docx</a>
            <button onClick={onClose} className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200">Close</button>
          </div>
        </div>
        <div className="h-[calc(100%-3.5rem)] overflow-y-auto p-4 md:p-8">
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

  return (
    <section id="articles" className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8 md:mb-12">
          <h2 className="text-3xl font-bold text-white">Articles</h2>
          <p className="text-slate-300 mt-2">Research, notes, data visualizations.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <Card key={a.id} a={a} onOpen={openArticle} />
          ))}
        </div>

        <Modal open={open} onClose={() => setOpen(false)}>
          {current?.content}
        </Modal>
      </div>
    </section>
  );
};

export default ArticlesSection;
