// app/terms/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Conditions d’utilisation — Movenco",
    description:
        "Conditions d’utilisation Movenco : accès, compte, règles, contenus, événements, modération, publicité, suppression de compte, responsabilité, droit applicable, contact.",
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
};

export default function TermsPage() {
    const updatedAt = "11/02/2026";
    const contactEmail = "movencoapp@gmail.com";
    const minAge = 16;

    const toc = [
        { id: "intro", label: "1. Objet" },
        { id: "access", label: "2. Accès au service" },
        { id: "account", label: "3. Compte & sécurité" },
        { id: "minors", label: "4. Âge minimum" },
        { id: "rules", label: "5. Règles de conduite" },
        { id: "content", label: "6. Contenus & propriété" },
        { id: "events", label: "7. Événements & sécurité" },
        { id: "ads", label: "8. Publicité" },
        { id: "moderation", label: "9. Modération & signalements" },
        { id: "termination", label: "10. Résiliation & suppression" },
        { id: "liability", label: "11. Responsabilité" },
        { id: "third", label: "12. Services tiers" },
        { id: "changes", label: "13. Modification des CGU" },
        { id: "law", label: "14. Droit applicable" },
        { id: "contact", label: "15. Contact" },
    ];

    return (
        <main style={styles.page}>
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
                        <Link
                            href="/legal"
                            style={styles.btn}
                            className="btnHover"
                        >
                            Mentions légales
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
                            Movenco (site vitrine et application). Elles
                            complètent la{" "}
                            <Link
                                href="/privacy"
                                style={{
                                    color: palette.primary,
                                    fontWeight: 950,
                                    textDecoration: "none",
                                }}
                            >
                                Politique de confidentialité
                            </Link>
                            .
                        </p>

                        <div style={styles.metaRow}>
                            <span style={styles.pill}>📜 CGU</span>
                            <span style={styles.pill}>🛡️ Communauté</span>
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
                                d’organiser des sorties/événements. Les
                                présentes conditions encadrent l’accès et
                                l’utilisation du service.
                            </p>
                        </section>

                        <section id="access" style={styles.section}>
                            <h2 style={styles.h2}>2. Accès au service</h2>
                            <p style={styles.p}>
                                L’accès peut nécessiter la création d’un compte
                                et l’acceptation des présentes conditions.
                                Certaines fonctionnalités peuvent être déployées
                                progressivement (beta) et évoluer.
                            </p>
                        </section>

                        <section id="account" style={styles.section}>
                            <h2 style={styles.h2}>3. Compte & sécurité</h2>
                            <ul style={styles.ul}>
                                <li>
                                    Tu es responsable de la confidentialité de
                                    tes accès.
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

                        <section id="minors" style={styles.section}>
                            <h2 style={styles.h2}>4. Âge minimum</h2>
                            <p style={styles.p}>
                                Movenco n’est pas destiné aux enfants. Pour
                                utiliser Movenco, tu dois avoir au minimum{" "}
                                <strong>{minAge} ans</strong> (ou plus si la
                                législation de ton pays l’exige).
                            </p>
                        </section>

                        <section id="rules" style={styles.section}>
                            <h2 style={styles.h2}>5. Règles de conduite</h2>
                            <p style={styles.p}>
                                Tu t’engages à utiliser Movenco de manière
                                respectueuse. Sont notamment interdits :
                            </p>
                            <ul style={styles.ul}>
                                <li>
                                    Harcèlement, menaces, incitation à la haine.
                                </li>
                                <li>
                                    Spam, phishing, usurpation d’identité,
                                    fraude.
                                </li>
                                <li>
                                    Contenus illégaux ou portant atteinte aux
                                    droits d’autrui.
                                </li>
                                <li>
                                    Tentatives de contournement de la
                                    modération/sécurité.
                                </li>
                            </ul>
                        </section>

                        <section id="content" style={styles.section}>
                            <h2 style={styles.h2}>6. Contenus & propriété</h2>
                            <p style={styles.p}>
                                Tu restes propriétaire des contenus que tu
                                publies (messages, photos, descriptions, etc.).
                                Pour permettre le fonctionnement du service, tu
                                accordes à Movenco une licence non exclusive et
                                mondiale d’hébergement, de reproduction
                                technique et d’affichage au sein du service,
                                pour la durée nécessaire à la fourniture du
                                service.
                            </p>
                            <p style={styles.p}>
                                Les éléments Movenco (marque, design, code,
                                logos) sont protégés et ne peuvent être
                                reproduits sans autorisation.
                            </p>
                        </section>

                        <section id="events" style={styles.section}>
                            <h2 style={styles.h2}>7. Événements & sécurité</h2>
                            <p style={styles.p}>
                                Les événements sont organisés par les
                                utilisateurs. Movenco n’est pas organisateur, ni
                                un service de secours. Chaque participant est
                                responsable de sa pratique sportive, de son
                                niveau, de son matériel et du respect des règles
                                locales.
                            </p>
                            <div style={styles.callout}>
                                <p style={styles.calloutTitle}>
                                    🧭 Outdoor : bon réflexe
                                </p>
                                <p style={styles.calloutText}>
                                    Vérifie météo, itinéraire, niveau du groupe,
                                    équipement, et règles de sécurité. En cas de
                                    doute, renonce.
                                </p>
                            </div>
                        </section>

                        <section id="ads" style={styles.section}>
                            <h2 style={styles.h2}>8. Publicité</h2>
                            <p style={styles.p}>
                                Movenco peut afficher des publicités. Selon ton
                                pays et tes choix de consentement, les
                                publicités peuvent être personnalisées ou non
                                personnalisées. Les réglages de consentement
                                peuvent être modifiés dans l’application
                                (Paramètres de confidentialité).
                            </p>
                            <p style={styles.p}>
                                Pour plus d’informations, consulte la{" "}
                                <Link
                                    href="/privacy"
                                    style={{
                                        color: palette.primary,
                                        fontWeight: 950,
                                        textDecoration: "none",
                                    }}
                                >
                                    Politique de confidentialité
                                </Link>
                                .
                            </p>
                        </section>

                        <section id="moderation" style={styles.section}>
                            <h2 style={styles.h2}>
                                9. Modération & signalements
                            </h2>
                            <p style={styles.p}>
                                Nous pouvons modérer des contenus, limiter des
                                fonctionnalités ou suspendre/supprimer un compte
                                en cas de violation des règles, abus, fraude, ou
                                pour protéger la communauté.
                            </p>
                            <ul style={styles.ul}>
                                <li>
                                    Tu peux signaler un contenu ou un
                                    comportement abusif dans l’app.
                                </li>
                                <li>
                                    En cas d’urgence réelle, contacte les
                                    services d’urgence (112/15/17/18).
                                </li>
                            </ul>
                        </section>

                        <section id="termination" style={styles.section}>
                            <h2 style={styles.h2}>
                                10. Résiliation & suppression
                            </h2>
                            <p style={styles.p}>
                                Tu peux arrêter d’utiliser Movenco à tout
                                moment. La suppression de compte est disponible
                                depuis l’application et expliquée sur la page{" "}
                                <Link
                                    href="/delete-account"
                                    style={{
                                        color: palette.primary,
                                        fontWeight: 950,
                                        textDecoration: "none",
                                    }}
                                >
                                    Suppression de compte
                                </Link>
                                .
                            </p>
                        </section>

                        <section id="liability" style={styles.section}>
                            <h2 style={styles.h2}>11. Responsabilité</h2>
                            <p style={styles.p}>
                                Movenco fournit un service de mise en relation
                                et d’organisation. Sauf dispositions légales
                                impératives contraires, Movenco ne peut être
                                tenu responsable des dommages indirects, ni des
                                incidents survenus lors d’événements/rencontres
                                entre utilisateurs.
                            </p>
                            <p style={styles.p}>
                                Le service peut être interrompu temporairement
                                (maintenance, incidents techniques). Nous
                                faisons au mieux pour assurer la disponibilité,
                                sans garantie absolue.
                            </p>
                        </section>

                        <section id="third" style={styles.section}>
                            <h2 style={styles.h2}>12. Services tiers</h2>
                            <p style={styles.p}>
                                Certaines fonctionnalités peuvent s’appuyer sur
                                des services tiers (hébergement, stockage
                                médias, SMS, publicité…). Ces services peuvent
                                appliquer leurs propres conditions. Les détails
                                sont indiqués dans la{" "}
                                <Link
                                    href="/privacy"
                                    style={{
                                        color: palette.primary,
                                        fontWeight: 950,
                                        textDecoration: "none",
                                    }}
                                >
                                    Politique de confidentialité
                                </Link>
                                .
                            </p>
                        </section>

                        <section id="changes" style={styles.section}>
                            <h2 style={styles.h2}>13. Modification des CGU</h2>
                            <p style={styles.p}>
                                Nous pouvons faire évoluer ces conditions. La
                                date de mise à jour est indiquée en haut. En
                                continuant d’utiliser le service après
                                modification, tu acceptes la version mise à
                                jour.
                            </p>
                        </section>

                        <section id="law" style={styles.section}>
                            <h2 style={styles.h2}>14. Droit applicable</h2>
                            <p style={styles.p}>
                                Ces conditions sont soumises au droit français.
                                En cas de litige, une solution amiable sera
                                recherchée avant toute action judiciaire.
                            </p>
                        </section>

                        <section
                            id="contact"
                            style={{ ...styles.section, borderBottom: "none" }}
                        >
                            <h2 style={styles.h2}>15. Contact</h2>
                            <p style={styles.p}>
                                Email :{" "}
                                <a
                                    href={`mailto:${contactEmail}`}
                                    style={{
                                        color: palette.primary,
                                        fontWeight: 950,
                                        textDecoration: "none",
                                    }}
                                >
                                    {contactEmail}
                                </a>
                                <br />
                                Dernière mise à jour : {updatedAt}
                            </p>
                        </section>
                    </article>
                </div>

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
