import { useEffect, useState } from "react";

export default function ReactionButton({ slug }: { slug: string }) {
  const storageKey = `reaction:${slug}`;
  const [count, setCount] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) setCount(Number(stored));
  }, []);

  const handleClick = () => {
    if (count >= 10) return;
    const next = count + 1;
    setCount(next);
    localStorage.setItem(storageKey, String(next));
    setAnimating(true);
    setTimeout(() => setAnimating(false), 300);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={`Like this post (${count})`}
      className="group flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-all duration-200 hover:border-primary hover:text-primary dark:border-darkmode-border dark:hover:border-darkmode-primary dark:hover:text-darkmode-primary"
    >
      <span
        className={`inline-block text-lg transition-transform duration-300 ${animating ? "scale-125" : "scale-100"}`}
      >
        {count > 0 ? "❤️" : "🤍"}
      </span>
      {count > 0 && <span>{count}</span>}
    </button>
  );
}
