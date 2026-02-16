import Link from "next/link";
import React from "react";

const palette = {
    bg: "#f6f7f8",
    text: "#0f172a",
    sub: "#64748b",
    border: "#e5e7eb",
};

export default function SiteFooter() {
    const year = new Date().getFullYear();

    return (
        <footer
            style={{
                borderTop: `1px solid ${palette.border}`,
                background: palette.bg,
                color: palette.sub,
                padding: "18px 0",
                marginTop: 28,
            }}
        >
            <div
                style={{
                    maxWidth: 1120,
                    margin: "0 auto",
                    padding: "0 18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    flexWrap: "wrap",
                    fontSize: 13,
                }}
            >
                <div style={{ color: palette.sub }}>
                    © {year}{" "}
                    <span style={{ color: palette.text, fontWeight: 900 }}>
                        Movenco
                    </span>
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <Link
                        href="/privacy"
                        style={{ color: palette.sub, textDecoration: "none" }}
                    >
                        Confidentialité
                    </Link>
                    <Link
                        href="/terms"
                        style={{ color: palette.sub, textDecoration: "none" }}
                    >
                        Conditions
                    </Link>
                    <Link
                        href="/legal"
                        style={{ color: palette.sub, textDecoration: "none" }}
                    >
                        Mentions légales
                    </Link>
                    <Link
                        href="/support"
                        style={{ color: palette.sub, textDecoration: "none" }}
                    >
                        Support
                    </Link>
                    <Link
                        href="/delete-account"
                        style={{ color: palette.sub, textDecoration: "none" }}
                    >
                        Suppression de compte
                    </Link>
                    <a
                        href="mailto:movencoapp@gmail.com"
                        style={{ color: palette.sub, textDecoration: "none" }}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
