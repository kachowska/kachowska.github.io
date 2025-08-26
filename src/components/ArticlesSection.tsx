import React, { useState } from "react";

type Article = {
  id: string;
  title: string;
  date: string;
  summary: string;
  cover: string; // e.g. "/articles/price_distribution.png"
  tags?: string[];
  content: React.ReactNode;
};

const ArticleBody: React.FC = () => (
  <article className="prose prose-slate max-w-none">
    <h2>Analytical Study of Drivers of Residential Real-Estate Prices in Poland</h2>
    <p>
      Goal: identify key determinants of price and show distributions, correlations,
      and regional differences in the Polish housing market. The dataset includes
      price, area, rooms, building type, year built, regional macro indicators, and coordinates.
    </p>

    <h3>Methodology</h3>
    <ul>
      <li>Data cleaning and prep in Python (pandas).</li>
      <li>EDA and charts in matplotlib/seaborn.</li>
      <li>Derived metrics such as price per m².</li>
    </ul>

    <h3>Distributions</h3>
    <figure>
      <img src="/articles/price_distribution.png" alt="Distribution of Price" />
      <figcaption>Right-skewed price distribution with a long tail.</figcaption>
    </figure>
    <figure>
      <img src="/articles/area_distribution.png" alt="Distribution of Area" />
      <figcaption>Most listings are 30–80 m².</figcaption>
    </figure>

    <h3>Geography</h3>
    <figure>
      <img src="/articles/listings_per_voivodeship.png" alt="Listings per voivodeship" />
      <figcaption>Regional activity. Mazowieckie leads by count.</figcaption>
    </figure>

    <h3>Price vs Area</h3>
    <figure>
      <img src="/articles/price_vs_area_scatter.png" alt="Price vs area scatter" />
      <figcaption>Price grows with area, variance remains high.</figcaption>
    </figure>

    <h3>Regional and Building-type Effects</h3>
    <figure>
      <img src="/articles/price_by_voivodeship_box.png" alt="Price by voivodeship" />
      <figcaption>Highest medians around Warsaw (Mazowieckie).</figcaption>
    </figure>
    <figure>
      <img src="/articles/price_by_building_type_box.png" alt="Price by building type" />
      <figcaption>Type matters: apartments/row houses tend to be pricier.</figcaption>
    </figure>

    <h3>Correlations and Price per m²</h3>
    <figure>
      <img src="/articles/correlation_matrix.png" alt="Correlation matrix" />
      <figcaption>Strongest links: price with area and regional average salary.</figcaption>
    </figure>
    <figure>
      <img src="/articles/median_price_per_m2.png" alt="Median price per m² by voivodeship" />
      <figcaption>Median price per m² varies by region; Mazowieckie and Pomorskie are higher.</figcaption>
    </figure>

    <h3>Conclusions</h3>
    <ul>
      <li>Main drivers: location, area, building type, regional incomes.</li>
      <li>Newer stock carries a premium over secondary market.</li>
      <li>Long-term price growth outpaced CPI and wages in several regions.</li>
    </ul>
  </article>
);

const articles: Article[] = [
  {
    id: "poland-real-estate-eda",
    title: "Polish Real-Estate EDA: Distributions and Price Drivers",
    date: "2025-08-26",
    summary:
      "EDA of the Polish housing market: price and area distributions, regional differences, correlations, and building-type effects.",
    cover: "/articles/price_distribution.png",
    tags: ["EDA", "Real Estate", "Poland"],
    content: <ArticleBody />,
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

const Modal: React.FC<{ open: boolean; onClose: () => void; children: React.ReactNode }> = ({
  open,
  onClose,
  children,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-0 md:inset-10 bg-white text-slate-900 rounded-none md:rounded-2xl overflow-hidden shadow-2xl">
        <div className="h-14 flex items-center justify-between px-4 border-b">
          <h2 className="text-base font-semibold">Article</h2>
          <button onClick={onClose} className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200">
            Close
          </button>
        </div>
        <div className="h-[calc(100%-3.5rem)] overflow-y-auto p-4 md:p-8">{children}</div>
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
