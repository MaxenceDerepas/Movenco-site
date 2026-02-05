import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Movenco",
    description: "Movenco — l'app qui connecte les sportifs autour de toi.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body
                style={{
                    margin: 0,
                    fontFamily:
                        "system-ui, -apple-system, Segoe UI, Roboto, Arial",
                }}
            >
                {children}
            </body>
        </html>
    );
}
