"use client";

import { useEffect, useState } from "react";

/** Tracks which section is on screen so the index can highlight it. */
function useActiveSection(items) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean);
    // A section counts as current once its top passes 30% down the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return active;
}

/** Desktop sidebar index. */
export function ReportToc({ items }) {
  const active = useActiveSection(items);

  return (
    <nav aria-label="On this page" className="rp-toc">
      <p className="rp-toc-label">On this page</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              className={`rp-toc-link${active === item.id ? " is-active" : ""}`}
            >
              {item.nav}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Mobile: the same index in a collapsible menu under the top bar. */
export function ReportTocMobile({ items }) {
  const active = useActiveSection(items);
  const [open, setOpen] = useState(false);
  const current = items.find((i) => i.id === active)?.nav ?? "On this page";

  return (
    <div className="rp-toc-mobile">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="rp-toc-mobile-toggle"
      >
        <span>
          <span className="rp-toc-mobile-label">On this page</span>
          {current}
        </span>
        <span aria-hidden="true" className={`rp-toc-caret${open ? " is-open" : ""}`}>
          ▾
        </span>
      </button>
      {open && (
        <ul className="rp-toc-mobile-list">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`rp-toc-link${active === item.id ? " is-active" : ""}`}
              >
                {item.nav}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
