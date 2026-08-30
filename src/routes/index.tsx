import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

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
  useEffect(() => {
    window.location.replace("/site.html");
  }, []);
  return (
    <noscript>
      <meta httpEquiv="refresh" content="0; url=/site.html" />
    </noscript>
  );
}
