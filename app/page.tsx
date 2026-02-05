import Link from "next/link";
import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
    wrap: { minHeight: "100vh", background: "#f6f7f8" },
    container: { maxWidth: 980, margin: "0 auto", padding: "32px 18px" },
    hero: {
        borderRadius: 20,
        padding: "28px 22px",
        background: "linear-gradient(135deg, #2b6a5c, #1f4f45)",
        color: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
    },
    title: { fontSize: 34, margin: 0, lineHeight: 1.1, letterSpacing: -0.5 },
    subtitle: { marginTop: 10, marginBottom: 0, opacity: 0.92, fontSize: 16 },
    cards: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 14,
        marginTop: 18,
    },
    card: {
        background: "white",
        borderRadius: 16,
        padding: 16,
        border: "1px solid #e5e7eb",
    },
    cardTitle: { margin: 0, fontSize: 16, color: "#111827" },
    cardText: {
        marginTop: 6,
        marginBottom: 0,
        color: "#6b7280",
        fontSize: 14,
        lineHeight: 1.4,
    },
    footer: { marginTop: 22, color: "#6b7280", fontSize: 13 },
    links: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 },
    link: { color: "white", textDecoration: "underline", opacity: 0.95 },
    pillRow: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 },
    pill: {
        background: "rgba(255,255,255,0.14)",
        border: "1px solid rgba(255,255,255,0.22)",
        padding: "8px 10px",
        borderRadius: 999,
        fontSize: 13,
    },
};

export default function Home() {
    return (
        <main style={styles.wrap}>
            <div style={styles.container}>
                <section style={styles.hero}>
                    <h1 style={styles.title}>Movenco</h1>
                    <p style={styles.subtitle}>
                        Découvre des sportifs autour de toi, échange, organise
                        des sorties et des événements — simplement.
                    </p>

                    <div style={styles.pillRow}>
                        <div style={styles.pill}>📍 Autour de moi</div>
                        <div style={styles.pill}>🏃‍♂️ Sports & filtres</div>
                        <div style={styles.pill}>💬 Chats & groupes</div>
                        <div style={styles.pill}>🗓️ Événements</div>
                    </div>

                    <div style={styles.links}>
                        <Link href="/privacy" style={styles.link}>
                            Politique de confidentialité
                        </Link>
                        <Link href="/terms" style={styles.link}>
                            Conditions d’utilisation
                        </Link>
                    </div>
                </section>

                <section style={styles.cards}>
                    <div style={styles.card}>
                        <h2 style={styles.cardTitle}>
                            Une app pensée pour le terrain
                        </h2>
                        <p style={styles.cardText}>
                            Trail, route, VTT, rando, ski… Tu choisis tes
                            sports, on te propose les profils pertinents.
                        </p>
                    </div>

                    <div style={styles.card}>
                        <h2 style={styles.cardTitle}>Respect des données</h2>
                        <p style={styles.cardText}>
                            Transparence, consentement, et contrôle. Les pages
                            légales sont accessibles ici.
                        </p>
                    </div>

                    <div style={styles.card}>
                        <h2 style={styles.cardTitle}>Contact</h2>
                        <p style={styles.cardText}>
                            Email : <strong>contact@movenco.com</strong>{" "}
                            (remplace par ton vrai mail si besoin)
                        </p>
                    </div>
                </section>

                <footer style={styles.footer}>
                    © {new Date().getFullYear()} Movenco —{" "}
                    <Link href="/privacy">Privacy</Link> ·{" "}
                    <Link href="/terms">Terms</Link>
                </footer>
            </div>
        </main>
    );
}
