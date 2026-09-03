import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HotSecrets +18 — Os Segredos Que Poucos Homens Conhecem" },
      {
        name: "description",
        content:
          "HotSecrets — Combo com 3 cursos + bônus exclusivos. Conteúdo destinado exclusivamente a maiores de 18 anos.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "HotSecrets +18" },
      {
        property: "og:description",
        content: "Combo com 3 cursos + bônus. Conteúdo +18.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      try {
        const doc = iframe.contentDocument;
        if (doc) {
          doc.body.style.background = "#0a0707";
          doc.documentElement.style.scrollBehavior = "smooth";
        }
      } catch {
        // cross-origin — can't access
      }
    };

    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="/site.html"
      title="HotSecrets"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
        display: "block",
      }}
    />
  );
}
