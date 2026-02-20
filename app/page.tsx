// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
    title: "Movenco — Trouve des sportifs autour de toi",
    description:
        "Movenco te permet de découvrir des sportifs proches, discuter et organiser des sorties simplement.",
    metadataBase: new URL("https://www.movencoapp.com"),
    openGraph: {
        title: "Movenco — Trouve des sportifs autour de toi",
        description:
            "Découvre des sportifs proches, échange et organise des sorties sportives simplement.",
        url: "https://www.movencoapp.com",
        siteName: "Movenco",
        images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Movenco" }],
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Movenco — Trouve des sportifs autour de toi",
        description:
            "Découvre des sportifs proches, échange et organise des sorties sportives simplement.",
        images: ["/og.jpg"],
    },
};

const APP_STORE_URL = "#"; // ✅ remplace par ton lien App Store
const GOOGLE_PLAY_URL = "#"; // ✅ remplace par ton lien Google Play

const palette = {
    primary: "#2b6a5c",
    primary2: "#1f4f45",
    bg: "#f6f7f8",
    text: "#0f172a",
    sub: "#64748b",
    card: "#ffffff",
    border: "#e5e7eb",
};

const styles: Record<string, CSSProperties> = {
    page: { minHeight: "100vh", background: palette.bg, color: palette.text },
    container: { maxWidth: 1040, margin: "0 auto", padding: "20px 18px 48px" },

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
        background: "rgba(246,247,248,0.75)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(229,231,235,0.9)",
    },
    brand: { display: "flex", alignItems: "center", gap: 10 },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 12,
        background: `linear-gradient(135deg, ${palette.primary}, ${palette.primary2})`,
        display: "grid",
        placeItems: "center",
        color: "white",
        fontWeight: 950,
        letterSpacing: -0.5,
        boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
    },
    brandName: { fontSize: 15, fontWeight: 950, letterSpacing: -0.2 },

    navLinks: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        flexWrap: "wrap",
    },
    navLink: {
        textDecoration: "none",
        color: palette.sub,
        fontSize: 13,
        fontWeight: 700,
    },
    navBtn: {
        textDecoration: "none",
        padding: "9px 12px",
        borderRadius: 999,
        border: `1px solid ${palette.border}`,
        background: "white",
        color: palette.text,
        fontSize: 13,
        fontWeight: 900,
    },

    hero: {
        marginTop: 14,
        borderRadius: 24,
        border: `1px solid ${palette.border}`,
        background: "white",
        boxShadow: "0 18px 60px rgba(15,23,42,0.08)",
        overflow: "hidden",
        position: "relative",
    },
    heroBg: {
        position: "absolute",
        inset: 0,
        background: `radial-gradient(900px 320px at 15% 0%, rgba(43,106,92,0.15), transparent 60%),
                 radial-gradient(900px 320px at 90% 10%, rgba(31,79,69,0.12), transparent 55%),
                 linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,1))`,
        pointerEvents: "none",
    },
    heroInner: {
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1.1fr 0.9fr",
        gap: 14,
        padding: 16,
        alignItems: "stretch",
    },
    heroLeft: {
        padding: "8px 4px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    heroTitle: {
        margin: 0,
        fontSize: 38,
        lineHeight: 1.05,
        letterSpacing: -1,
        fontWeight: 980,
    },
    heroSub: {
        margin: "12px 0 0",
        color: palette.sub,
        lineHeight: 1.65,
        fontSize: 15,
        maxWidth: 560,
    },
    heroCtas: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        marginTop: 16,
    },
    ctaPrimary: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        padding: "11px 14px",
        borderRadius: 999,
        background: `linear-gradient(135deg, ${palette.primary}, ${palette.primary2})`,
        color: "white",
        fontWeight: 950,
        fontSize: 13,
        border: "1px solid rgba(0,0,0,0.05)",
        boxShadow: "0 14px 34px rgba(43,106,92,0.20)",
    },
    ctaSecondary: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        padding: "11px 14px",
        borderRadius: 999,
        background: "white",
        color: palette.text,
        fontWeight: 900,
        fontSize: 13,
        border: `1px solid ${palette.border}`,
    },
    heroList: {
        margin: "14px 0 0",
        paddingLeft: 18,
        color: palette.sub,
        fontSize: 14,
        lineHeight: 1.8,
    },

    storeRow: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        marginTop: 14,
    },

    heroVisual: {
        borderRadius: 18,
        border: `1px solid ${palette.border}`,
        background: "rgba(255,255,255,0.75)",
        overflow: "hidden",
        position: "relative",
        minHeight: 320,
    },
    heroVisualOverlay: {
        position: "absolute",
        inset: 0,
        background:
            "linear-gradient(180deg, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.38) 100%)",
        pointerEvents: "none",
    },
    heroVisualText: {
        position: "absolute",
        left: 12,
        right: 12,
        bottom: 12,
        color: "white",
        fontWeight: 900,
        fontSize: 13,
        lineHeight: 1.4,
        textShadow: "0 6px 18px rgba(0,0,0,0.35)",
    },

    section: { marginTop: 18 },
    sectionTitle: {
        margin: 0,
        fontSize: 20,
        fontWeight: 950,
        letterSpacing: -0.3,
    },
    sectionSub: {
        margin: "6px 0 0",
        color: palette.sub,
        fontSize: 13,
        lineHeight: 1.6,
    },

    grid3: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0,1fr))",
        gap: 12,
        marginTop: 12,
    },
    card: {
        borderRadius: 16,
        border: `1px solid ${palette.border}`,
        background: palette.card,
        padding: 14,
        boxShadow: "0 10px 30px rgba(15,23,42,0.05)",
    },
    cardTitle: {
        margin: 0,
        fontSize: 14,
        fontWeight: 900,
        letterSpacing: -0.2,
    },
    cardText: {
        margin: "8px 0 0",
        color: palette.sub,
        fontSize: 13,
        lineHeight: 1.6,
    },

    ctaStrip: {
        marginTop: 18,
        borderRadius: 18,
        border: `1px solid ${palette.border}`,
        background: `linear-gradient(135deg, ${palette.primary}, ${palette.primary2})`,
        color: "white",
        boxShadow: "0 14px 40px rgba(43,106,92,0.22)",
    },
    ctaStripInner: {
        padding: "14px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
    },
    ctaStripTitle: {
        margin: 0,
        fontSize: 15,
        fontWeight: 950,
        letterSpacing: -0.2,
    },
    ctaStripText: {
        margin: "6px 0 0",
        fontSize: 13,
        opacity: 0.92,
        lineHeight: 1.5,
        maxWidth: 620,
    },
    ctaStripBtns: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "center",
    },

    footer: {
        marginTop: 20,
        paddingTop: 10,
        borderTop: `1px solid ${palette.border}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        flexWrap: "wrap",
        color: palette.sub,
        fontSize: 13,
    },
    footerLinks: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap",
    },
    footerLink: {
        color: palette.sub,
        textDecoration: "none",
        fontSize: 13,
    },
};

export default function HomePage() {
    const year = new Date().getFullYear();

    return (
        <main style={styles.page}>
            <a id="top" />
            <div style={styles.container}>
                <header style={styles.nav}>
                    <div style={styles.brand}>
                        <div style={styles.logo}>M</div>
                        <div style={styles.brandName}>Movenco</div>
                    </div>

                    <nav
                        style={styles.navLinks}
                        aria-label="Navigation principale"
                    >
                        <a href="#features" style={styles.navLink}>
                            Fonctionnalités
                        </a>
                        <a href="#contact" style={styles.navLink}>
                            Contact
                        </a>
                        <Link
                            href="/support"
                            style={styles.navBtn}
                            className="btnHover"
                        >
                            Support
                        </Link>
                        <Link
                            href="/privacy"
                            style={styles.navBtn}
                            className="btnHover"
                        >
                            Confidentialité
                        </Link>
                    </nav>
                </header>

                <section style={styles.hero}>
                    <div style={styles.heroBg} />
                    <div style={styles.heroInner} className="heroGrid">
                        <div style={styles.heroLeft}>
                            <h1 style={styles.heroTitle}>
                                Le réseau sportif
                                <br />
                                autour de toi.
                            </h1>

                            <p style={styles.heroSub}>
                                Trouve des sportifs proches, échange facilement
                                et organise des sorties outdoor en quelques
                                secondes. Movenco est pensé pour le terrain :
                                simple, rapide, utile.
                            </p>

                            <div style={styles.heroCtas}>
                                <a
                                    href="#features"
                                    style={styles.ctaPrimary}
                                    className="btnHover"
                                >
                                    Voir les fonctionnalités
                                </a>
                                <a
                                    href="#contact"
                                    style={styles.ctaSecondary}
                                    className="btnHover"
                                >
                                    Nous contacter
                                </a>
                            </div>

                            <ul style={styles.heroList}>
                                <li>
                                    📍 Nearby : découvre les sportifs à
                                    proximité
                                </li>
                                <li>🗓️ Events : crée ou rejoins une sortie</li>
                                <li>💬 Chat : discute en privé ou en groupe</li>
                            </ul>

                            <div style={styles.storeRow}>
                                <a
                                    href={APP_STORE_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="badgeLink"
                                    aria-label="Télécharger sur l’App Store"
                                >
                                    <Image
                                        src="/badge-app-store-fr.svg"
                                        alt="Télécharger dans l’App Store"
                                        width={170}
                                        height={56}
                                        style={{
                                            height: "auto",
                                            width: "auto",
                                            maxWidth: "170px",
                                        }}
                                    />
                                </a>

                                <a
                                    href={GOOGLE_PLAY_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="badgeLink"
                                    aria-label="Disponible sur Google Play"
                                >
                                    <Image
                                        src="/badge-google-play-fr.svg"
                                        alt="Disponible sur Google Play"
                                        width={188}
                                        height={56}
                                        style={{
                                            height: "auto",
                                            width: "auto",
                                            maxWidth: "188px",
                                        }}
                                    />
                                </a>
                            </div>
                        </div>

                        <div style={styles.heroVisual}>
                            <Image
                                src="/hero-1.jpg"
                                alt="Sport outdoor"
                                fill
                                priority
                                sizes="(max-width: 900px) 100vw, 42vw"
                                style={{ objectFit: "cover" }}
                            />
                            <div style={styles.heroVisualOverlay} />
                            <div style={styles.heroVisualText}>
                                Une app conçue pour passer de la découverte à la
                                sortie, sans friction.
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        Fonctionnalités principales
                    </h2>
                    <p style={styles.sectionSub}>
                        Tout ce qu’il faut pour rencontrer, organiser et
                        pratiquer.
                    </p>

                    <div style={styles.grid3} className="grid3">
                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>📍 Autour de moi</h3>
                            <p style={styles.cardText}>
                                Affiche les utilisateurs proches avec filtres
                                par sport et activité.
                            </p>
                        </div>

                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>🗓️ Événements</h3>
                            <p style={styles.cardText}>
                                Crée une sortie, rejoins un groupe et retrouve
                                les infos utiles en un seul endroit.
                            </p>
                        </div>

                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>💬 Chat</h3>
                            <p style={styles.cardText}>
                                Messagerie privée et discussions de groupe liées
                                aux événements.
                            </p>
                        </div>
                    </div>
                </section>

                <section style={styles.ctaStrip}>
                    <div style={styles.ctaStripInner}>
                        <div>
                            <p style={styles.ctaStripTitle}>Movenco</p>
                            <p style={styles.ctaStripText}>
                                Télécharge l’application sur ton store et
                                retrouve des sportifs près de chez toi.
                            </p>
                        </div>

                        <div style={styles.ctaStripBtns}>
                            <a
                                href={APP_STORE_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="badgeLink"
                                aria-label="Télécharger sur l’App Store"
                            >
                                <Image
                                    src="/badge-app-store-fr.svg"
                                    alt="Télécharger dans l’App Store"
                                    width={150}
                                    height={50}
                                    style={{
                                        height: "auto",
                                        width: "auto",
                                        maxWidth: "150px",
                                    }}
                                />
                            </a>

                            <a
                                href={GOOGLE_PLAY_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="badgeLink"
                                aria-label="Disponible sur Google Play"
                            >
                                <Image
                                    src="/badge-google-play-fr.svg"
                                    alt="Disponible sur Google Play"
                                    width={168}
                                    height={50}
                                    style={{
                                        height: "auto",
                                        width: "auto",
                                        maxWidth: "168px",
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </section>

                <section id="contact" style={styles.section}>
                    <h2 style={styles.sectionTitle}>Contact</h2>
                    <p style={styles.sectionSub}>
                        Support, questions, demandes liées au compte ou à la
                        confidentialité.
                    </p>

                    <div style={styles.grid3} className="grid3">
                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>📧 Email</h3>
                            <p style={styles.cardText}>
                                <a
                                    href="mailto:movencoapp@gmail.com"
                                    style={{
                                        color: palette.primary,
                                        fontWeight: 900,
                                        textDecoration: "none",
                                    }}
                                >
                                    movencoapp@gmail.com
                                </a>
                            </p>
                        </div>

                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>🔒 Confidentialité</h3>
                            <p style={styles.cardText}>
                                Consulte la politique de confidentialité et tes
                                droits RGPD.
                            </p>
                            <p style={{ ...styles.cardText, marginTop: 10 }}>
                                <Link
                                    href="/privacy"
                                    style={{
                                        color: palette.primary,
                                        fontWeight: 900,
                                        textDecoration: "none",
                                    }}
                                >
                                    Voir la page confidentialité
                                </Link>
                            </p>
                        </div>

                        <div style={styles.card} className="cardHover">
                            <h3 style={styles.cardTitle}>
                                🗑️ Suppression de compte
                            </h3>
                            <p style={styles.cardText}>
                                Une page dédiée explique la procédure de
                                suppression de compte.
                            </p>
                            <p style={{ ...styles.cardText, marginTop: 10 }}>
                                <Link
                                    href="/delete-account"
                                    style={{
                                        color: palette.primary,
                                        fontWeight: 900,
                                        textDecoration: "none",
                                    }}
                                >
                                    Voir la procédure
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>

                <footer style={styles.footer}>
                    <div>© {year} Movenco</div>
                    <div style={styles.footerLinks}>
                        <Link href="/support" style={styles.footerLink}>
                            Support
                        </Link>
                        <Link href="/privacy" style={styles.footerLink}>
                            Privacy
                        </Link>
                        <Link href="/terms" style={styles.footerLink}>
                            Terms
                        </Link>
                        <Link href="/legal" style={styles.footerLink}>
                            Mentions légales
                        </Link>
                        <a href="#top" style={styles.footerLink}>
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
            box-shadow: 0 14px 36px rgba(15,23,42,0.10);
          }

          .cardHover {
            transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
          }
          .cardHover:hover {
            transform: translateY(-2px);
            box-shadow: 0 16px 40px rgba(15,23,42,0.08);
            border-color: rgba(43,106,92,0.20);
          }

          @media (max-width: 900px) {
            .heroGrid { grid-template-columns: 1fr !important; }
            .grid3 { grid-template-columns: 1fr !important; }
          }
            .badgeLink {
  display: inline-flex;
  align-items: center;
  border-radius: 10px;
  transition: transform 160ms ease, opacity 160ms ease;
}
.badgeLink:hover {
  transform: translateY(-1px);
  opacity: 0.96;
}
        `}</style>
            </div>
        </main>
    );
}
