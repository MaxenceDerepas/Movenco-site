// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
    title: "Movenco — Trouve des sportifs autour de toi",
    description:
        "Movenco connecte les passionnés (trail, route, VTT, rando, ski…). Découvre des sportifs autour de toi, échange, organise des sorties et événements simplement.",
    metadataBase: new URL("https://movenco.com"), // ✅ change si besoin (ex: https://www.movenco.com)
    openGraph: {
        title: "Movenco — Trouve des sportifs autour de toi",
        description:
            "Découvre des sportifs autour de toi, échange, organise des sorties et événements — simplement.",
        url: "https://movenco.com",
        siteName: "Movenco",
        images: [
            {
                url: "/og.jpg",
                width: 1200,
                height: 630,
                alt: "Movenco — Réseau sportif local",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Movenco — Trouve des sportifs autour de toi",
        description:
            "Découvre des sportifs autour de toi, échange, organise des sorties et événements — simplement.",
        images: ["/og.jpg"],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

const palette = {
    primary: "#2b6a5c",
    primary2: "#1f4f45",
    bg: "#f6f7f8",
    text: "#0f172a",
    sub: "#64748b",
    card: "#ffffff",
    border: "#e5e7eb",
    subtle: "#eef2f3",
};

const dot = (c: string): CSSProperties => ({
    width: 10,
    height: 10,
    borderRadius: 999,
    background: c,
    opacity: 0.9,
});

const styles = {
    page: { minHeight: "100vh", background: palette.bg, color: palette.text },
    container: { maxWidth: 1120, margin: "0 auto", padding: "18px 18px 54px" },

    // Sticky nav (premium)
    nav: {
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "12px 4px",
        background: "rgba(246,247,248,0.72)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(229,231,235,0.9)",
    },
    brand: { display: "flex", alignItems: "center", gap: 10, minWidth: 220 },
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
    brandTag: { fontSize: 12, color: palette.sub, marginTop: 2 },

    navLinks: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap",
    },
    navLink: { color: palette.sub, textDecoration: "none", fontSize: 13 },
    navButton: {
        textDecoration: "none",
        padding: "10px 12px",
        borderRadius: 999,
        border: `1px solid ${palette.border}`,
        background: "rgba(255,255,255,0.85)",
        color: palette.text,
        fontSize: 13,
        fontWeight: 900,
    },

    // Hero
    heroWrap: {
        marginTop: 16,
        borderRadius: 28,
        position: "relative",
        overflow: "hidden",
        border: `1px solid ${palette.border}`,
        background: "white",
        boxShadow: "0 20px 70px rgba(15,23,42,0.09)",
    },
    heroBg: {
        position: "absolute",
        inset: 0,
        background: `radial-gradient(1200px 420px at 25% 0%, rgba(43,106,92,0.18), transparent 60%),
      radial-gradient(900px 380px at 85% 20%, rgba(31,79,69,0.16), transparent 55%),
      linear-gradient(180deg, rgba(255,255,255,0.88), rgba(255,255,255,1))`,
        pointerEvents: "none",
    },
    heroInner: {
        position: "relative",
        padding: "30px 22px",
        display: "grid",
        gridTemplateColumns: "1.15fr 0.85fr",
        gap: 18,
        alignItems: "center",
    },
    heroTitle: {
        fontSize: 46,
        margin: 0,
        lineHeight: 1.03,
        letterSpacing: -1.2,
        fontWeight: 980,
    },
    heroSub: {
        marginTop: 12,
        marginBottom: 0,
        color: palette.sub,
        fontSize: 16,
        lineHeight: 1.6,
        maxWidth: 600,
    },
    heroCtas: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 },
    ctaPrimary: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: "12px 14px",
        borderRadius: 999,
        border: "1px solid rgba(0,0,0,0.06)",
        background: `linear-gradient(135deg, ${palette.primary}, ${palette.primary2})`,
        color: "white",
        fontWeight: 950,
        fontSize: 14,
        boxShadow: "0 16px 42px rgba(43,106,92,0.24)",
        textDecoration: "none",
    },
    ctaSecondary: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: "12px 14px",
        borderRadius: 999,
        border: `1px solid ${palette.border}`,
        background: "white",
        color: palette.text,
        fontWeight: 950,
        fontSize: 14,
        textDecoration: "none",
    },
    pills: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 },
    pill: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "9px 10px",
        borderRadius: 999,
        border: `1px solid ${palette.border}`,
        background: "rgba(255,255,255,0.78)",
        color: palette.text,
        fontSize: 13,
        fontWeight: 900,
    },

    // Right mock/visual
    phoneCard: {
        borderRadius: 22,
        border: `1px solid ${palette.border}`,
        background: "rgba(255,255,255,0.78)",
        backdropFilter: "blur(10px)",
        padding: 14,
        boxShadow: "0 18px 60px rgba(15,23,42,0.08)",
    },
    phoneTop: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        marginBottom: 12,
    },
    dotRow: { display: "flex", gap: 6 },
    phoneTitle: { fontSize: 13, fontWeight: 980, color: palette.text },
    phoneShot: {
        borderRadius: 18,
        overflow: "hidden",
        border: `1px solid ${palette.border}`,
        background: "#eaf1ef",
        position: "relative",
        aspectRatio: "9 / 16",
    },
    phoneOverlay: {
        position: "absolute",
        inset: 0,
        background:
            "linear-gradient(180deg, rgba(0,0,0,0.00) 30%, rgba(0,0,0,0.28) 100%)",
        pointerEvents: "none",
    },
    phoneLabel: {
        position: "absolute",
        left: 12,
        right: 12,
        bottom: 12,
        color: "white",
        fontWeight: 980,
        fontSize: 14,
        letterSpacing: -0.2,
        textShadow: "0 8px 18px rgba(0,0,0,0.35)",
    },

    // Sections
    section: { marginTop: 26 },
    sectionHead: {
        marginTop: 10,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
    },
    h2: { margin: 0, fontSize: 22, letterSpacing: -0.45, fontWeight: 980 },
    h2Sub: {
        margin: 0,
        color: palette.sub,
        fontSize: 13,
        lineHeight: 1.55,
        maxWidth: 720,
    },

    grid3: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 14,
        marginTop: 14,
    },

    card: {
        background: palette.card,
        borderRadius: 18,
        border: `1px solid ${palette.border}`,
        padding: 16,
        boxShadow: "0 14px 40px rgba(15,23,42,0.06)",
    },
    cardTitle: {
        margin: 0,
        fontSize: 15,
        fontWeight: 980,
        letterSpacing: -0.2,
    },
    cardText: {
        marginTop: 8,
        marginBottom: 0,
        color: palette.sub,
        fontSize: 14,
        lineHeight: 1.6,
    },

    stats: {
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: 12,
        marginTop: 14,
    },
    stat: {
        background: "white",
        borderRadius: 18,
        border: `1px solid ${palette.border}`,
        padding: 14,
    },
    statNum: { margin: 0, fontSize: 18, fontWeight: 980, letterSpacing: -0.3 },
    statLbl: { margin: "6px 0 0", color: palette.sub, fontSize: 12 },

    // Big feature section with image
    featureBlock: {
        borderRadius: 24,
        border: `1px solid ${palette.border}`,
        background: "white",
        overflow: "hidden",
        boxShadow: "0 18px 60px rgba(15,23,42,0.08)",
    },
    featureInner: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 0,
        alignItems: "stretch",
    },
    featureText: { padding: "18px 18px" },
    featureImg: {
        position: "relative",
        minHeight: 320,
        background: palette.subtle,
    },
    featureList: {
        margin: "12px 0 0",
        paddingLeft: 18,
        color: palette.sub,
        lineHeight: 1.8,
        fontSize: 14,
    },

    // Store badges
    badgeRow: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 },
    storeBadge: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 12px",
        borderRadius: 14,
        border: `1px solid ${palette.border}`,
        background: "rgba(255,255,255,0.85)",
        color: palette.text,
        textDecoration: "none",
        fontWeight: 950,
        fontSize: 13,
    },
    badgeIcon: {
        width: 34,
        height: 34,
        borderRadius: 10,
        background: palette.subtle,
        display: "grid",
        placeItems: "center",
        border: `1px solid ${palette.border}`,
    },

    // FAQ
    faq: {
        background: "white",
        borderRadius: 24,
        border: `1px solid ${palette.border}`,
        overflow: "hidden",
        boxShadow: "0 18px 60px rgba(15,23,42,0.08)",
    },
    faqItem: {
        padding: "14px 16px",
        borderBottom: `1px solid ${palette.border}`,
    },
    faqQ: { margin: 0, fontSize: 14, fontWeight: 980, letterSpacing: -0.2 },
    faqA: {
        margin: "6px 0 0",
        color: palette.sub,
        fontSize: 13,
        lineHeight: 1.6,
    },

    // CTA strip
    ctaStrip: {
        marginTop: 26,
        borderRadius: 24,
        overflow: "hidden",
        border: `1px solid ${palette.border}`,
        background: `linear-gradient(135deg, ${palette.primary}, ${palette.primary2})`,
        color: "white",
        boxShadow: "0 18px 60px rgba(43,106,92,0.22)",
    },
    ctaStripInner: {
        padding: "18px 18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
    },
    ctaStripTitle: {
        margin: 0,
        fontSize: 16,
        fontWeight: 980,
        letterSpacing: -0.3,
    },
    ctaStripText: {
        margin: "6px 0 0",
        opacity: 0.92,
        fontSize: 13,
        maxWidth: 640,
        lineHeight: 1.45,
    },
    ctaStripButtons: { display: "flex", gap: 10, flexWrap: "wrap" },
    ctaStripBtnLight: {
        textDecoration: "none",
        padding: "10px 12px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 980,
        color: palette.text,
        background: "white",
        border: "1px solid rgba(255,255,255,0.25)",
    },
    ctaStripBtnGhost: {
        textDecoration: "none",
        padding: "10px 12px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 980,
        color: "white",
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.22)",
    },
} satisfies Record<string, CSSProperties>;

export default function Home() {
    const year = new Date().getFullYear();

    return (
        <main style={styles.page}>
            <a id="top" />
            <div style={styles.container}>
                {/* NAV */}
                <header style={styles.nav}>
                    <div style={styles.brand}>
                        <div style={styles.logo}>M</div>
                        <div>
                            <div style={styles.brandName}>Movenco</div>
                            <div style={styles.brandTag}>
                                Le réseau sportif local, simple & premium
                            </div>
                        </div>
                    </div>

                    <nav style={styles.navLinks} aria-label="Navigation">
                        <Link href="#features" style={styles.navLink}>
                            Fonctionnalités
                        </Link>
                        <Link href="#how" style={styles.navLink}>
                            Comment ça marche
                        </Link>
                        <Link href="#faq" style={styles.navLink}>
                            FAQ
                        </Link>
                        <Link href="#contact" style={styles.navLink}>
                            Contact
                        </Link>
                        <Link
                            href="/terms"
                            style={styles.navButton}
                            className="btnHover"
                        >
                            Conditions
                        </Link>
                        <Link
                            href="/privacy"
                            style={styles.navButton}
                            className="btnHover"
                        >
                            Confidentialité
                        </Link>
                    </nav>
                </header>

                {/* HERO */}
                <section style={styles.heroWrap}>
                    <div style={styles.heroBg} />
                    <div style={styles.heroInner} className="heroInner">
                        <div>
                            <h1 style={styles.heroTitle}>
                                Trouve des sportifs autour de toi.
                                <br />
                                Organise, rejoins, partage.
                            </h1>
                            <p style={styles.heroSub}>
                                Movenco connecte les passionnés (trail, route,
                                VTT, rando, ski…) avec une expérience claire,
                                rapide et élégante : profils pertinents, chats,
                                groupes, événements.
                            </p>

                            <div style={styles.heroCtas}>
                                <Link
                                    href="#contact"
                                    style={styles.ctaPrimary}
                                    className="btnHover"
                                >
                                    🚀 Demander l’accès
                                </Link>
                                <Link
                                    href="#features"
                                    style={styles.ctaSecondary}
                                    className="btnHover"
                                >
                                    ✨ Voir les fonctionnalités
                                </Link>
                            </div>

                            <div style={styles.pills}>
                                <span style={styles.pill}>
                                    📍 Autour de moi
                                </span>
                                <span style={styles.pill}>
                                    🏃 Sports & filtres
                                </span>
                                <span style={styles.pill}>
                                    💬 Chats & groupes
                                </span>
                                <span style={styles.pill}>🗓️ Événements</span>
                                <span style={styles.pill}>
                                    🛡️ RGPD & contrôle
                                </span>
                            </div>

                            <div style={styles.badgeRow}>
                                <a
                                    href="#contact"
                                    style={styles.storeBadge}
                                    className="btnHover"
                                    aria-label="App Store (bientôt)"
                                >
                                    <span style={styles.badgeIcon}></span>
                                    <span>
                                        <div
                                            style={{
                                                fontSize: 11,
                                                color: palette.sub,
                                                fontWeight: 900,
                                            }}
                                        >
                                            Bientôt sur
                                        </div>
                                        <div style={{ marginTop: 1 }}>
                                            App Store
                                        </div>
                                    </span>
                                </a>

                                <a
                                    href="#contact"
                                    style={styles.storeBadge}
                                    className="btnHover"
                                    aria-label="Google Play (bientôt)"
                                >
                                    <span style={styles.badgeIcon}>▶︎</span>
                                    <span>
                                        <div
                                            style={{
                                                fontSize: 11,
                                                color: palette.sub,
                                                fontWeight: 900,
                                            }}
                                        >
                                            Bientôt sur
                                        </div>
                                        <div style={{ marginTop: 1 }}>
                                            Google Play
                                        </div>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <aside
                            style={styles.phoneCard}
                            aria-label="Aperçu Movenco"
                        >
                            <div style={styles.phoneTop}>
                                <div style={styles.dotRow}>
                                    <span style={dot("#ff5f57")} />
                                    <span style={dot("#febc2e")} />
                                    <span style={dot("#28c840")} />
                                </div>
                                <div style={styles.phoneTitle}>
                                    Aperçu Movenco
                                </div>
                            </div>

                            <div style={styles.phoneShot}>
                                <Image
                                    src="/hero-1.jpg"
                                    alt="Sport outdoor"
                                    fill
                                    priority
                                    sizes="(max-width: 980px) 70vw, 34vw"
                                    style={{ objectFit: "cover" }}
                                />
                                <div style={styles.phoneOverlay} />
                                <div style={styles.phoneLabel}>
                                    “Autour de moi” — découvre des profils
                                    compatibles & propose une sortie.
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>

                {/* STATS */}
                <section style={styles.section}>
                    <div style={styles.sectionHead}>
                        <div>
                            <h2 style={styles.h2}>
                                Une app pensée pour le terrain
                            </h2>
                            <p style={styles.h2Sub}>
                                Rapide, claire, et construite pour passer de “je
                                cherche” à “on y va” — sans friction.
                            </p>
                        </div>
                    </div>

                    <div style={styles.stats} className="stats">
                        <div style={styles.stat} className="cardHover">
                            <p style={styles.statNum}>⚡ Instant</p>
                            <p style={styles.statLbl}>
                                Matching local & filtres sportifs
                            </p>
                        </div>
                        <div style={styles.stat} className="cardHover">
                            <p style={styles.statNum}>💬 Social</p>
                            <p style={styles.statLbl}>
                                Chats privés & groupes d’événements
                            </p>
                        </div>
                        <div style={styles.stat} className="cardHover">
                            <p style={styles.statNum}>🗓️ Simple</p>
                            <p style={styles.statLbl}>
                                Créer / rejoindre une sortie en 30s
                            </p>
                        </div>
                        <div style={styles.stat} className="cardHover">
                            <p style={styles.statNum}>🛡️ Confiance</p>
                            <p style={styles.statLbl}>
                                Données contrôlées & transparence
                            </p>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section id="features" style={styles.section}>
                    <div style={styles.sectionHead}>
                        <div>
                            <h2 style={styles.h2}>Fonctionnalités clés</h2>
                            <p style={styles.h2Sub}>
                                L’essentiel pour rencontrer, organiser et garder
                                le lien — avec une UX premium.
                            </p>
                        </div>
                    </div>

                    <div style={styles.grid3} className="grid3">
                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>
                                📍 Découverte autour de toi
                            </h3>
                            <p style={styles.cardText}>
                                Voir les sportifs proches, filtrer par activités
                                et repérer les profils pertinents.
                            </p>
                        </div>
                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>
                                🗓️ Événements & sorties
                            </h3>
                            <p style={styles.cardText}>
                                Crée une sortie, fixe un nombre de participants,
                                et gère tout sans friction.
                            </p>
                        </div>
                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>
                                💬 Messages & groupes
                            </h3>
                            <p style={styles.cardText}>
                                Discussions privées et groupes liés aux
                                événements pour coordonner facilement.
                            </p>
                        </div>

                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>
                                🏃 Sports & filtres
                            </h3>
                            <p style={styles.cardText}>
                                Trail, route, gravel, VTT, rando, ski… Choisis
                                tes sports, Movenco s’adapte.
                            </p>
                        </div>
                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>
                                ✨ Expérience premium
                            </h3>
                            <p style={styles.cardText}>
                                Interface moderne, rapide, et agréable : l’app
                                doit donner envie d’y revenir.
                            </p>
                        </div>
                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>
                                🛡️ Confiance & contrôle
                            </h3>
                            <p style={styles.cardText}>
                                Transparence sur l’usage des données, pages
                                légales accessibles, et choix utilisateur.
                            </p>
                        </div>
                    </div>
                </section>

                {/* BIG FEATURE BLOCK */}
                <section style={styles.section}>
                    <div style={styles.sectionHead}>
                        <div>
                            <h2 style={styles.h2}>
                                Une expérience fluide, du matching à la sortie
                            </h2>
                            <p style={styles.h2Sub}>
                                Des interactions simples : repérer les bons
                                profils, échanger, créer une sortie, puis se
                                retrouver sur le terrain.
                            </p>
                        </div>
                    </div>

                    <div style={styles.featureBlock}>
                        <div
                            style={styles.featureInner}
                            className="featureInner"
                        >
                            <div style={styles.featureText}>
                                <h3
                                    style={{
                                        ...styles.cardTitle,
                                        fontSize: 16,
                                    }}
                                >
                                    🔎 Conçu pour être utile (pas bruyant)
                                </h3>
                                <p style={styles.cardText}>
                                    Movenco met en avant l’essentiel :
                                    proximité, sports, disponibilités, et
                                    événements. Tu passes moins de temps à
                                    scroller, plus de temps à pratiquer.
                                </p>

                                <ul style={styles.featureList}>
                                    <li>
                                        Filtres sportifs + découverte locale
                                    </li>
                                    <li>
                                        Chats privés et groupes d’événements
                                    </li>
                                    <li>
                                        Création d’événements claire et rapide
                                    </li>
                                    <li>
                                        Respect de la confidentialité et du
                                        contrôle utilisateur
                                    </li>
                                </ul>

                                <div style={styles.heroCtas}>
                                    <Link
                                        href="#how"
                                        style={styles.ctaSecondary}
                                        className="btnHover"
                                    >
                                        👀 Comment ça marche
                                    </Link>
                                    <Link
                                        href="#contact"
                                        style={styles.ctaPrimary}
                                        className="btnHover"
                                    >
                                        📩 Rejoindre la beta
                                    </Link>
                                </div>
                            </div>

                            <div style={styles.featureImg}>
                                <Image
                                    src="/features-v2.jpg"
                                    alt="Sortie sportive"
                                    fill
                                    sizes="(max-width: 980px) 100vw, 50vw"
                                    style={{ objectFit: "cover" }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background:
                                            "linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0))",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section id="how" style={styles.section}>
                    <div style={styles.sectionHead}>
                        <div>
                            <h2 style={styles.h2}>Comment ça marche</h2>
                            <p style={styles.h2Sub}>
                                3 étapes, et tu passes en mode action.
                            </p>
                        </div>
                    </div>

                    <div style={styles.grid3} className="grid3">
                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>1) Découvre</h3>
                            <p style={styles.cardText}>
                                Active ta zone, choisis tes sports et repère les
                                profils et sorties proches.
                            </p>
                        </div>
                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>2) Échange</h3>
                            <p style={styles.cardText}>
                                Discute en DM ou dans le groupe d’un événement
                                pour coordonner sans prise de tête.
                            </p>
                        </div>
                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>3) Rejoins</h3>
                            <p style={styles.cardText}>
                                Participe, retrouve le groupe, et profite :
                                l’objectif, c’est le sport — pas l’organisation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* PRIVACY / LEGAL */}
                <section id="privacy" style={styles.section}>
                    <div style={styles.sectionHead}>
                        <div>
                            <h2 style={styles.h2}>Données & transparence</h2>
                            <p style={styles.h2Sub}>
                                Pages légales disponibles en permanence.
                                Approche “privacy by design”.
                            </p>
                        </div>
                    </div>

                    <div style={styles.grid3} className="grid3">
                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>
                                Politique de confidentialité
                            </h3>
                            <p style={styles.cardText}>
                                Usage des données, stockage, droits utilisateur
                                (RGPD), transparence.
                            </p>
                            <div style={{ marginTop: 12 }}>
                                <Link
                                    href="/privacy"
                                    style={styles.ctaSecondary}
                                    className="btnHover"
                                >
                                    Lire
                                </Link>
                            </div>
                        </div>

                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>
                                Conditions d’utilisation
                            </h3>
                            <p style={styles.cardText}>
                                Règles, responsabilités et cadre d’usage de
                                Movenco.
                            </p>
                            <div style={{ marginTop: 12 }}>
                                <Link
                                    href="/terms"
                                    style={styles.ctaSecondary}
                                    className="btnHover"
                                >
                                    Lire
                                </Link>
                            </div>
                        </div>

                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>Sécurité</h3>
                            <p style={styles.cardText}>
                                Amélioration continue des protections + contrôle
                                utilisateur.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section id="faq" style={styles.section}>
                    <div style={styles.sectionHead}>
                        <div>
                            <h2 style={styles.h2}>FAQ</h2>
                            <p style={styles.h2Sub}>
                                Les réponses aux questions les plus fréquentes.
                            </p>
                        </div>
                    </div>

                    <div style={styles.faq}>
                        <div style={styles.faqItem}>
                            <p style={styles.faqQ}>
                                Movenco est disponible quand ?
                            </p>
                            <p style={styles.faqA}>
                                La sortie se fait progressivement. Tu peux
                                demander l’accès à la beta via le contact.
                            </p>
                        </div>
                        <div style={styles.faqItem}>
                            <p style={styles.faqQ}>
                                Quels sports sont supportés ?
                            </p>
                            <p style={styles.faqA}>
                                Outdoor et urbain : trail, route, gravel, VTT,
                                rando, ski… La liste évolue.
                            </p>
                        </div>
                        <div style={styles.faqItem}>
                            <p style={styles.faqQ}>
                                Comment sont gérées les données ?
                            </p>
                            <p style={styles.faqA}>
                                Transparence + pages légales accessibles.
                                L’objectif : contrôle et simplicité (RGPD).
                            </p>
                        </div>
                        <div style={styles.faqItem}>
                            <p style={styles.faqQ}>Est-ce gratuit ?</p>
                            <p style={styles.faqA}>
                                Le cœur de l’expérience est pensé pour rester
                                simple. Le modèle final sera communiqué
                                clairement.
                            </p>
                        </div>
                        <div
                            style={{ ...styles.faqItem, borderBottom: "none" }}
                        >
                            <p style={styles.faqQ}>
                                Comment participer à une sortie ?
                            </p>
                            <p style={styles.faqA}>
                                Tu découvres une sortie, tu échanges si besoin,
                                puis tu rejoins. L’organisation est minimaliste.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA STRIP */}
                <section style={styles.ctaStrip}>
                    <div style={styles.ctaStripInner}>
                        <div>
                            <p style={styles.ctaStripTitle}>
                                Prêt à lancer Movenco ?
                            </p>
                            <p style={styles.ctaStripText}>
                                On peut ensuite ajouter une page “Press kit”,
                                des screenshots, et une FAQ plus complète.
                            </p>
                        </div>
                        <div style={styles.ctaStripButtons}>
                            <Link
                                href="#contact"
                                style={styles.ctaStripBtnLight}
                                className="btnHover"
                            >
                                📩 Contact
                            </Link>
                            <Link
                                href="/privacy"
                                style={styles.ctaStripBtnGhost}
                                className="btnHover"
                            >
                                🔒 Confidentialité
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" style={styles.section}>
                    <div style={styles.sectionHead}>
                        <div>
                            <h2 style={styles.h2}>Contact</h2>
                            <p style={styles.h2Sub}>
                                Remplace par ton vrai email quand tu veux.
                            </p>
                        </div>
                    </div>

                    <div style={styles.grid3} className="grid3">
                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>📧 Email</h3>
                            <p style={styles.cardText}>
                                <strong>movencoapp@gmail.com</strong>
                            </p>
                            <p style={{ ...styles.cardText, marginTop: 10 }}>
                                Réponse sous 24–48h (tu ajusteras plus tard).
                            </p>
                        </div>
                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>🌍 Réseaux</h3>
                            <p style={styles.cardText}>
                                Ajoute Instagram / TikTok / X quand tu veux
                                (liens + icônes).
                            </p>
                        </div>
                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>📰 Presse</h3>
                            <p style={styles.cardText}>
                                Plus tard : logo pack, screenshots, description
                                courte/longue.
                            </p>
                        </div>
                    </div>
                </section>

                <div>© {year} Movenco</div>
                <div>
                    <Link href="/privacy" style={styles.navLink}>
                        Privacy
                    </Link>
                    <Link href="/terms" style={styles.navLink}>
                        Terms
                    </Link>
                    <Link href="/legal" style={styles.navLink}>
                        Mentions légales
                    </Link>
                    <a href="#top" style={styles.navLink}>
                        Haut de page ↑
                    </a>
                </div>

                {/* ✅ CSS global (no JS / no handlers) */}
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
            .heroInner { grid-template-columns: 1fr !important; }
            .grid3 { grid-template-columns: 1fr !important; }
            .stats { grid-template-columns: 1fr 1fr !important; }
            .featureInner { grid-template-columns: 1fr !important; }
          }

          @media (max-width: 520px) {
            .stats { grid-template-columns: 1fr !important; }
          }
        `}</style>
            </div>
        </main>
    );
}
