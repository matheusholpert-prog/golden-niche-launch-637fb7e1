import { createFileRoute } from "@tanstack/react-router";

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
    ],
  }),
  component: () => null,
});
