import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const base = "https://www.movencoapp.com"; // ✅ adapte si tu utilises www

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: `${base}/sitemap.xml`,
    };
}
