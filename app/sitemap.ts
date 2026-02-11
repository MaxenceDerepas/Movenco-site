import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://movencoapp.com/"; // ✅ adapte si tu utilises www
    const now = new Date();

    // ✅ Liste des pages publiques importantes
    const routes = [
        "",
        "/legal",
        "/privacy",
        "/terms",
        "/delete-account",
        "/press",
    ];

    return routes.map((path) => ({
        url: `${base}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.6,
    }));
}
