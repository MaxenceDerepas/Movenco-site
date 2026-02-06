// app/press/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Press Kit — Movenco",
    description:
        "Press kit officiel Movenco : pitch, logos, screenshots, contact.",
};

const palette = {
    primary: "#2b6a5c",
    primary2: "#1f4f45",
    bg: "#f6f7f8",
    text: "#0f172a",
    sub: "#64748b",
    card: "#ffffff",
    border: "#e5e7eb",
};

const styles: Record<string, React.CSSProperties> = {
    page: { minHeight: "100vh", background: palette.bg, color: palette.text },
    container: { maxWidth: 980, margin: "0 auto", padding: "22px 18px 54px" },

    top: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
        paddingBottom: 12,
    },
    brand: { display: "flex", alignItems: "center", gap: 10 },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 12,
        background: `linear-gradient(135deg, ${palette.primary}, ${palette.primary2})`,
        boxShadow: "0 12px 35px rgba(0,0,0,0.14)",
        display: "grid",
        placeItems: "center",
        color: "white",
        fontWeight: 950,
        letterSpacing: -0.5,
    },
    brandName: { fontSize: 16, fontWeight: 950, letterSpacing: -0.2 },

    btnRow: { display: "flex", gap: 10, flexWrap: "wrap" },
    btn: {
        textDecoration: "none",
        padding: "10px 12px",
        borderRadius: 999,
        border: `1px solid ${palette.border}`,
        background: "rgba(255,255,255,0.9)",
        color: palette.text,
        fontWeight: 900,
        fontSize: 13,
    },
    btnPrimary: {
        textDecoration: "none",
        padding: "10px 12px",
        borderRadius: 999,
        border: "1px solid rgba(0,0,0,0.06)",
        background: `linear-gradient(135deg, ${palette.primary}, ${palette.primary2})`,
        color: "white",
        fontWeight: 950,
        fontSize: 13,
        boxShadow: "0 16px 42px rgba(43,106,92,0.22)",
    },

    hero: {
        marginTop: 12,
        borderRadius: 24,
        border: `1px solid ${palette.border}`,
        background: "white",
        boxShadow: "0 20px 70px rgba(15,23,42,0.09)",
        overflow: "hidden",
    },
    heroInner: { padding: "18px 18px" },
    title: { margin: 0, fontSize: 28, letterSpacing: -0.6, fontWeight: 980 },
    sub: { marginTop: 8, marginBottom: 0, color: palette.sub, lineHeight: 1.6 },

    grid2: {
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 14,
        marginTop: 14,
    },
    card: {
        background: "white",
        borderRadius: 18,
        border: `1px solid ${palette.border}`,
        padding: 16,
        boxShadow: "0 14px 40px rgba(15,23,42,0.06)",
    },
    cardTitle: {
        margin: 0,
        fontSize: 14,
        fontWeight: 980,
        letterSpacing: -0.2,
    },
    text: {
        marginTop: 8,
        marginBottom: 0,
        color: palette.sub,
        lineHeight: 1.65,
        fontSize: 14,
    },

    assetRow: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 },
    asset: {
        textDecoration: "none",
        padding: "10px 12px",
        borderRadius: 14,
        border: `1px solid ${palette.border}`,
        background: "rgba(255,255,255,0.9)",
        color: palette.text,
        fontWeight: 900,
        fontSize: 13,
    },

    shots: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 12,
        marginTop: 12,
    },
    shot: {
        position: "relative",
        borderRadius: 18,
        overflow: "hidden",
        border: `1px solid ${palette.border}`,
        background: "#eef2f3",
        aspectRatio: "9 / 16",
    },

    footer: {
        marginTop: 22,
        color: palette.sub,
        fontSize: 13,
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
    },
};

export default function PressPage() {
    const year = new Date().getFullYear();

    return (
        <main style={styles.page}>
            <div style={styles.container}>
                <header style={styles.top}>
                    <div style={styles.brand}>
                        <div style={styles.logo}>M</div>
                        <div style={styles.brandName}>Movenco — Press Kit</div>
                    </div>

                    <div style={styles.btnRow}>
                        <Link href="/" style={styles.btn}>
                            ← Retour
                        </Link>
                        <Link href="/privacy" style={styles.btn}>
                            Confidentialité
                        </Link>
                        <Link href="/terms" style={styles.btn}>
                            Conditions
                        </Link>
                        <a href="#contact" style={styles.btnPrimary}>
                            📩 Contact
                        </a>
                    </div>
                </header>

                <section style={styles.hero}>
                    <div style={styles.heroInner}>
                        <h1 style={styles.title}>Press Kit</h1>
                        <p style={styles.sub}>
                            Ressources officielles : pitch, logos, screenshots
                            et infos produit. Remplace les assets quand tu veux
                            — la page est déjà prête.
                        </p>
                    </div>
                </section>

                <section style={styles.grid2}>
                    <div style={styles.card}>
                        <h2 style={styles.cardTitle}>Pitch court</h2>
                        <p style={styles.text}>
                            Movenco connecte les sportifs proches (trail, route,
                            VTT, rando, ski…), pour échanger et organiser des
                            sorties simplement.
                        </p>
                    </div>

                    <div style={styles.card}>
                        <h2 style={styles.cardTitle}>Pitch long</h2>
                        <p style={styles.text}>
                            Movenco est une application de réseau sportif local.
                            Elle permet de découvrir des profils pertinents
                            autour de soi selon ses sports, de discuter en
                            messages privés ou en groupes, puis de créer et
                            rejoindre des événements en quelques secondes.
                            L’objectif : moins d’organisation, plus de terrain.
                        </p>
                    </div>

                    <div style={styles.card}>
                        <h2 style={styles.cardTitle}>Fiche produit</h2>
                        <p style={styles.text}>
                            • Plateformes : iOS / Android (bientôt) <br />
                            • Catégories : sport, outdoor, social <br />
                            • Fonctionnalités : autour de moi, filtres, chats,
                            groupes, événements <br />• Données : transparence +
                            pages légales accessibles
                        </p>
                    </div>

                    <div style={styles.card}>
                        <h2 style={styles.cardTitle}>Assets (à télécharger)</h2>
                        <p style={styles.text}>
                            Place ces fichiers dans{" "}
                            <strong>/public/press</strong> (logos, screenshots,
                            etc.). Ensuite, ces boutons fonctionneront.
                        </p>
                        <div style={styles.assetRow}>
                            <a
                                className="btnHover"
                                style={styles.asset}
                                href="/press/movenco-logo-pack.zip"
                            >
                                📦 Logo pack (zip)
                            </a>
                            <a
                                className="btnHover"
                                style={styles.asset}
                                href="/press/movenco-screenshots.zip"
                            >
                                🖼️ Screenshots (zip)
                            </a>
                            <a
                                className="btnHover"
                                style={styles.asset}
                                href="/press/movenco-brand-guidelines.pdf"
                            >
                                🎨 Brand guidelines (pdf)
                            </a>
                        </div>
                    </div>
                </section>

                <section style={{ marginTop: 14 }}>
                    <div style={styles.card}>
                        <h2 style={styles.cardTitle}>
                            Screenshots (placeholders)
                        </h2>
                        <p style={styles.text}>
                            Mets 3 images dans <strong>/public/press</strong> :
                            <code> screen-1.jpg</code>,{" "}
                            <code>screen-2.jpg</code>, <code>screen-3.jpg</code>
                            .
                        </p>

                        <div style={styles.shots} className="shots">
                            {[
                                "screen-1.jpg",
                                "screen-2.jpg",
                                "screen-3.jpg",
                            ].map((f) => (
                                <div
                                    key={f}
                                    style={styles.shot}
                                    className="cardHover"
                                >
                                    <Image
                                        src={`/press/${f}`}
                                        alt={`Movenco screenshot ${f}`}
                                        fill
                                        sizes="(max-width: 980px) 33vw, 260px"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" style={{ marginTop: 14 }}>
                    <div style={styles.card}>
                        <h2 style={styles.cardTitle}>Contact</h2>
                        <p style={styles.text}>
                            Email : <strong>movencoapp@gmail.com</strong>{" "}
                            (remplace par ton vrai mail)
                            <br />
                            Option : ajoute un numéro / une adresse / un media
                            kit Notion plus tard.
                        </p>
                    </div>
                </section>

                <footer style={styles.footer}>
                    <div>© {year} Movenco</div>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <Link
                            href="/"
                            style={{
                                color: palette.sub,
                                textDecoration: "none",
                            }}
                        >
                            Accueil
                        </Link>
                        <Link
                            href="/privacy"
                            style={{
                                color: palette.sub,
                                textDecoration: "none",
                            }}
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            style={{
                                color: palette.sub,
                                textDecoration: "none",
                            }}
                        >
                            Terms
                        </Link>
                    </div>
                </footer>

                <style>{`
          html { scroll-behavior: smooth; }

          .cardHover {
            transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
          }
          .cardHover:hover {
            transform: translateY(-3px);
            box-shadow: 0 22px 65px rgba(15,23,42,0.10);
            border-color: rgba(43,106,92,0.22);
          }

          .btnHover {
            transition: transform 160ms ease, filter 160ms ease, box-shadow 160ms ease;
          }
          .btnHover:hover {
            transform: translateY(-1px);
            filter: brightness(1.02);
            box-shadow: 0 18px 45px rgba(15,23,42,0.10);
          }

          @media (max-width: 980px) {
            .shots { grid-template-columns: 1fr !important; }
          }
        `}</style>
            </div>
        </main>
    );
}
