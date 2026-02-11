// app/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
    title: "Movenco",
    description: "Movenco — Trouve des sportifs autour de toi",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body
                suppressHydrationWarning
                style={{
                    margin: 0,
                    fontFamily:
                        'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
                    background: "#f6f7f8",
                    color: "#0f172a",
                }}
            >
                {children}
                <SiteFooter />
            </body>
        </html>
    );
}
