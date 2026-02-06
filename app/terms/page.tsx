// app/terms/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conditions d’utilisation — Movenco",
    description:
        "Conditions d’utilisation Movenco : accès, compte, règles, contenus, responsabilité, suspension, contact.",
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

    nav: {
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
        padding: "12px 4px",
        background: "rgba(246,247,248,0.72)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(229,231,235,0.9)",
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
    brandName: { fontSize: 15, fontWeight: 950, letterSpacing: -0.2 },

    navLinks: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "center",
    },
    link: { color: palette.sub, textDecoration: "none", fontSize: 13 },
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

    hero: {
        marginTop: 14,
        borderRadius: 24,
        border: `1px solid ${palette.border}`,
        background: "white",
        overflow: "hidden",
        boxShadow: "0 20px 70px rgba(15,23,42,0.09)",
        position: "relative",
    },
    heroBg: {
        position: "absolute",
        inset: 0,
        background: `radial-gradient(900px 340px at 15% 0%, rgba(43,106,92,0.16), transparent 60%),
                 radial-gradient(900px 340px at 90% 10%, rgba(31,79,69,0.12), transparent 55%),
                 linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,1))`,
        pointerEvents: "none",
    },
    heroInner: { position: "relative", padding: "18px 18px" },
    title: { margin: 0, fontSize: 28, letterSpacing: -0.7, fontWeight: 980 },
    subtitle: {
        marginTop: 10,
        marginBottom: 0,
        color: palette.sub,
        lineHeight: 1.6,
        fontSize: 14,
    },
    metaRow: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 },
    pill: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 10px",
        borderRadius: 999,
        border: `1px solid ${palette.border}`,
        background: "rgba(255,255,255,0.8)",
        fontSize: 12,
        fontWeight: 900,
        color: palette.text,
    },

    layout: {
        display: "grid",
        gridTemplateColumns: "280px 1fr",
        gap: 14,
        marginTop: 14,
        alignItems: "start",
    },

    toc: {
        position: "sticky",
        top: 84,
        borderRadius: 18,
        border: `1px solid ${palette.border}`,
        background: "white",
        boxShadow: "0 14px 40px rgba(15,23,42,0.06)",
        overflow: "hidden",
    },
    tocHead: {
        padding: "14px 14px",
        borderBottom: `1px solid ${palette.border}`,
    },
    tocTitle: { margin: 0, fontSize: 13, fontWeight: 980, letterSpacing: -0.2 },
    tocList: { listStyle: "none", margin: 0, padding: 10 },
    tocItem: { margin: 0, padding: 0 },
    tocLink: {
        display: "block",
        padding: "9px 10px",
        borderRadius: 12,
        textDecoration: "none",
        color: palette.text,
        fontSize: 13,
        fontWeight: 800,
    },

    content: {
        borderRadius: 18,
        border: `1px solid ${palette.border}`,
        background: "white",
        boxShadow: "0 14px 40px rgba(15,23,42,0.06)",
        overflow: "hidden",
    },
    section: {
        padding: "16px 16px",
        borderBottom: `1px solid ${palette.border}`,
    },
    h2: { margin: 0, fontSize: 16, fontWeight: 980, letterSpacing: -0.3 },
    p: {
        marginTop: 10,
        marginBottom: 0,
        color: palette.sub,
        lineHeight: 1.75,
        fontSize: 14,
    },
    ul: {
        marginTop: 10,
        marginBottom: 0,
        paddingLeft: 18,
        color: palette.sub,
        lineHeight: 1.8,
        fontSize: 14,
    },

    callout: {
        marginTop: 12,
        borderRadius: 16,
        border: `1px solid rgba(43,106,92,0.20)`,
        background: "rgba(43,106,92,0.06)",
        padding: 12,
        color: palette.text,
    },
    calloutTitle: { margin: 0, fontSize: 13, fontWeight: 980 },
    calloutText: {
        margin: "6px 0 0",
        fontSize: 13,
        color: palette.sub,
        lineHeight: 1.6,
    },

    footer: {
        marginTop: 18,
        color: palette.sub,
        fontSize: 13,
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
        padding: "6px 2px 0",
    },
};

export default function TermsPage() {
    const year = new Date().getFullYear();
    const updatedAt = "06/02/2026"; // ✅ tu peux changer

    const toc = [
        { id: "intro", label: "1. Objet" },
        { id: "access", label: "2. Accès au service" },
        { id: "account", label: "3. Compte & sécurité" },
        { id: "rules", label: "4. Règles de conduite" },
        { id: "content", label: "5. Contenus & propriété" },
        { id: "events", label: "6. Événements & rencontres" },
        { id: "moderation", label: "7. Modération & suspension" },
        { id: "liability", label: "8. Responsabilité" },
        { id: "changes", label: "9. Modification des CGU" },
        { id: "contact", label: "10. Contact" },
    ];

    return (
        <main
            style={{
                minHeight: "100vh",
                background: palette.bg,
                color: palette.text,
            }}
        >
            <a id="top" />
            <div style={styles.container}>
                {/* NAV */}
                <header style={styles.nav}>
                    <div style={styles.brand}>
                        <div style={styles.logo}>M</div>
                        <div style={styles.brandName}>Movenco</div>
                    </div>

                    <div style={styles.navLinks}>
                        <Link href="/" style={styles.btn} className="btnHover">
                            ← Accueil
                        </Link>
                        <Link
                            href="/privacy"
                            style={styles.btn}
                            className="btnHover"
                        >
                            Confidentialité
                        </Link>
                        <a
                            href="#contact"
                            style={styles.btn}
                            className="btnHover"
                        >
                            Contact
                        </a>
                    </div>
                </header>

                {/* HERO */}
                <section style={styles.hero}>
                    <div style={styles.heroBg} />
                    <div style={styles.heroInner}>
                        <h1 style={styles.title}>Conditions d’utilisation</h1>
                        <p style={styles.subtitle}>
                            Ces conditions encadrent l’accès et l’usage de
                            Movenco. Adapte-les selon ton modèle
                            (gratuit/payant, pro…).
                        </p>

                        <div style={styles.metaRow}>
                            <span style={styles.pill}>📜 CGU</span>
                            <span style={styles.pill}>⚖️ Règles</span>
                            <span style={styles.pill}>
                                📅 Mise à jour : {updatedAt}
                            </span>
                        </div>
                    </div>
                </section>

                {/* LAYOUT */}
                <div style={styles.layout} className="layout">
                    {/* TOC */}
                    <aside style={styles.toc} aria-label="Sommaire">
                        <div style={styles.tocHead}>
                            <p style={styles.tocTitle}>Sommaire</p>
                        </div>
                        <ul style={styles.tocList}>
                            {toc.map((t) => (
                                <li key={t.id} style={styles.tocItem}>
                                    <a
                                        href={`#${t.id}`}
                                        style={styles.tocLink}
                                        className="tocHover"
                                    >
                                        {t.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* CONTENT */}
                    <article style={styles.content}>
                        <section id="intro" style={styles.section}>
                            <h2 style={styles.h2}>1. Objet</h2>
                            <p style={styles.p}>
                                Movenco est un service permettant de découvrir
                                des sportifs autour de soi, d’échanger et
                                d’organiser des sorties. Les présentes
                                conditions encadrent l’accès et l’utilisation du
                                service.
                            </p>
                            <div style={styles.callout}>
                                <p style={styles.calloutTitle}>
                                    ⚠️ À personnaliser
                                </p>
                                <p style={styles.calloutText}>
                                    Ajoute ton identité légale (raison sociale,
                                    adresse, email) si nécessaire.
                                </p>
                            </div>
                        </section>

                        <section id="access" style={styles.section}>
                            <h2 style={styles.h2}>2. Accès au service</h2>
                            <p style={styles.p}>
                                L’accès peut nécessiter la création d’un compte
                                et l’acceptation des présentes conditions.
                                Certaines fonctionnalités peuvent être
                                disponibles progressivement (beta).
                            </p>
                        </section>

                        <section id="account" style={styles.section}>
                            <h2 style={styles.h2}>3. Compte & sécurité</h2>
                            <ul style={styles.ul}>
                                <li>
                                    Tu es responsable de la confidentialité de
                                    tes identifiants.
                                </li>
                                <li>
                                    Tu t’engages à fournir des informations
                                    exactes et à jour.
                                </li>
                                <li>
                                    En cas de suspicion d’accès non autorisé,
                                    contacte-nous rapidement.
                                </li>
                            </ul>
                        </section>

                        <section id="rules" style={styles.section}>
                            <h2 style={styles.h2}>4. Règles de conduite</h2>
                            <p style={styles.p}>
                                Tu t’engages à utiliser Movenco de manière
                                respectueuse. Sont notamment interdits :
                            </p>
                            <ul style={styles.ul}>
                                <li>
                                    Harcèlement, menaces, contenus
                                    discriminatoires ou haineux.
                                </li>
                                <li>
                                    Spam, phishing, usurpation d’identité,
                                    fraude.
                                </li>
                                <li>
                                    Contenus illégaux ou portant atteinte aux
                                    droits d’autrui.
                                </li>
                            </ul>
                        </section>

                        <section id="content" style={styles.section}>
                            <h2 style={styles.h2}>5. Contenus & propriété</h2>
                            <p style={styles.p}>
                                Tu restes propriétaire des contenus que tu
                                publies. En publiant, tu accordes à Movenco une
                                licence non exclusive permettant l’affichage et
                                la diffusion technique au sein du service.
                            </p>
                            <p style={styles.p}>
                                Les éléments de Movenco (marque, design, code,
                                logos) sont protégés et ne peuvent être
                                reproduits sans autorisation.
                            </p>
                        </section>

                        <section id="events" style={styles.section}>
                            <h2 style={styles.h2}>
                                6. Événements & rencontres
                            </h2>
                            <p style={styles.p}>
                                Les événements sont organisés par les
                                utilisateurs. Movenco ne garantit pas la tenue,
                                la qualité ou la sécurité des sorties. Chaque
                                participant reste responsable de sa pratique
                                sportive, de son matériel et du respect des
                                règles locales.
                            </p>
                            <div style={styles.callout}>
                                <p style={styles.calloutTitle}>🧠 Conseil</p>
                                <p style={styles.calloutText}>
                                    Pour l’outdoor, ajoute une mention
                                    “sécurité” (météo, niveau, équipement) si tu
                                    veux être très carré.
                                </p>
                            </div>
                        </section>

                        <section id="moderation" style={styles.section}>
                            <h2 style={styles.h2}>
                                7. Modération & suspension
                            </h2>
                            <p style={styles.p}>
                                Nous pouvons modérer des contenus ou suspendre
                                un compte en cas de violation des règles, abus,
                                fraude, ou pour protéger la communauté. Les
                                décisions peuvent être prises sans préavis en
                                cas de risque.
                            </p>
                        </section>

                        <section id="liability" style={styles.section}>
                            <h2 style={styles.h2}>8. Responsabilité</h2>
                            <p style={styles.p}>
                                Movenco fournit un service de mise en relation
                                et d’organisation. Sauf disposition légale
                                contraire, notre responsabilité ne saurait être
                                engagée pour des dommages indirects ou liés à
                                l’usage de la plateforme.
                            </p>
                        </section>

                        <section id="changes" style={styles.section}>
                            <h2 style={styles.h2}>9. Modification des CGU</h2>
                            <p style={styles.p}>
                                Nous pouvons faire évoluer ces conditions. La
                                date de mise à jour est indiquée en haut. En
                                continuant d’utiliser le service après
                                modification, tu acceptes la version mise à
                                jour.
                            </p>
                        </section>

                        <section
                            id="contact"
                            style={{ ...styles.section, borderBottom: "none" }}
                        >
                            <h2 style={styles.h2}>10. Contact</h2>
                            <p style={styles.p}>
                                Email : <strong>movencoapp@gmail.com</strong>
                                <br />
                                Dernière mise à jour : {updatedAt}
                            </p>
                        </section>
                    </article>
                </div>

                <footer style={styles.footer}>
                    <div>© {year} Movenco</div>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <Link href="/" style={styles.link}>
                            Accueil
                        </Link>
                        <Link href="/privacy" style={styles.link}>
                            Privacy
                        </Link>
                        <a href="#top" style={styles.link}>
                            Haut de page ↑
                        </a>
                    </div>
                </footer>

                <style>{`
          html { scroll-behavior: smooth; }

          .btnHover {
            transition: transform 160ms ease, filter 160ms ease, box-shadow 160ms ease;
          }
          .btnHover:hover {
            transform: translateY(-1px);
            filter: brightness(1.02);
            box-shadow: 0 18px 45px rgba(15,23,42,0.10);
          }

          .tocHover {
            transition: background 160ms ease, transform 160ms ease;
          }
          .tocHover:hover {
            background: rgba(43,106,92,0.06);
            transform: translateY(-1px);
          }

          @media (max-width: 980px) {
            .layout { grid-template-columns: 1fr !important; }
          }
        `}</style>
            </div>
        </main>
    );
}
