import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Mentions légales — Movenco",
    description:
        "Mentions légales Movenco (LCEN) : éditeur, hébergeurs, contact, propriété intellectuelle, responsabilité, données personnelles et modération.",
};

const palette = {
    primary: "#2b6a5c",
    primary2: "#1f4f45",
    bg: "#f6f7f8",
    text: "#0f172a",
    sub: "#64748b",
    border: "#e5e7eb",
};

const styles: Record<string, CSSProperties> = {
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

export default function LegalPage() {
    const year = new Date().getFullYear();
    const updatedAt = "20/02/2026";

    // Éditeur
    const editorName = "Maxence Derepas";
    const editorStatus = "Auto-entrepreneur";
    const siret = "897 929 717 00022";
    const address = "36 rue de Migneaux, 78300 Poissy, France";
    const email = "movencoapp@gmail.com";

    // Hébergement site
    const webHostName = "Vercel Inc.";
    const webHostAddress = "340 S Lemon Ave #4133, Walnut, CA 91789, USA";
    const webHostWebsite = "https://vercel.com";

    // Infra app
    const apiHostName = "Hostinger";
    const apiHostWebsite = "https://www.hostinger.com";
    const databaseName = "MongoDB";
    const mediaProvider = "Cloudinary";

    const toc = [
        { id: "editor", label: "1. Éditeur" },
        { id: "publication", label: "2. Directeur de publication" },
        { id: "hosting", label: "3. Hébergement du site" },
        { id: "app", label: "4. Application mobile" },
        { id: "contact", label: "5. Contact" },
        { id: "ip", label: "6. Propriété intellectuelle" },
        { id: "liability", label: "7. Responsabilité" },
        { id: "links", label: "8. Liens externes" },
        { id: "privacy", label: "9. Données personnelles" },
        { id: "cookies", label: "10. Cookies / traceurs" },
        { id: "moderation", label: "11. Signalement & modération" },
        { id: "law", label: "12. Droit applicable" },
    ];

    return (
        <main style={styles.page}>
            <a id="top" />
            <div style={styles.container}>
                <header style={styles.nav}>
                    <div style={styles.brand}>
                        <Image
                            src="/logo-movenco.png" // ou /logo-movenco.png
                            alt="Movenco"
                            width={140}
                            height={40}
                            priority
                            style={{
                                height: "100px", // ou 56px si tu veux encore plus visible
                                width: "auto",
                                display: "block",
                                objectFit: "contain",
                            }}
                        />
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
                            href="/terms"
                            style={styles.btn}
                            className="btnHover"
                        >
                            Conditions
                        </Link>
                    </div>
                </header>

                <section style={styles.hero}>
                    <div style={styles.heroBg} />
                    <div style={styles.heroInner}>
                        <h1 style={styles.title}>Mentions légales</h1>
                        <p style={styles.subtitle}>
                            Informations légales relatives au site et à
                            l’application Movenco, conformément notamment à la
                            loi n°2004-575 du 21 juin 2004 pour la confiance
                            dans l’économie numérique (LCEN).
                        </p>

                        <div style={styles.metaRow}>
                            <span style={styles.pill}>📌 LCEN</span>
                            <span style={styles.pill}>⚖️ France</span>
                            <span style={styles.pill}>📱 App + site</span>
                            <span style={styles.pill}>
                                📅 Mise à jour : {updatedAt}
                            </span>
                        </div>
                    </div>
                </section>

                <div style={styles.layout} className="layout">
                    <aside style={styles.toc} aria-label="Sommaire">
                        <div style={styles.tocHead}>
                            <p style={styles.tocTitle}>Sommaire</p>
                        </div>
                        <ul style={styles.tocList}>
                            {toc.map((t) => (
                                <li key={t.id}>
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

                    <article style={styles.content}>
                        <section id="editor" style={styles.section}>
                            <h2 style={styles.h2}>1. Éditeur</h2>
                            <p style={styles.p}>
                                <strong>Nom / Éditeur :</strong> {editorName}
                                <br />
                                <strong>Statut :</strong> {editorStatus}
                                <br />
                                <strong>SIRET :</strong> {siret}
                                <br />
                                <strong>Adresse :</strong> {address}
                            </p>

                            <div style={styles.callout}>
                                <p style={styles.calloutTitle}>
                                    ℹ️ Information
                                </p>
                                <p style={styles.calloutText}>
                                    Ces mentions concernent le site vitrine
                                    Movenco ainsi que l’application mobile
                                    Movenco, sauf mention contraire.
                                </p>
                            </div>
                        </section>

                        <section id="publication" style={styles.section}>
                            <h2 style={styles.h2}>
                                2. Directeur de publication
                            </h2>
                            <p style={styles.p}>
                                <strong>Directeur de publication :</strong>{" "}
                                {editorName}
                            </p>
                        </section>

                        <section id="hosting" style={styles.section}>
                            <h2 style={styles.h2}>3. Hébergement du site</h2>
                            <p style={styles.p}>
                                <strong>Hébergeur :</strong> {webHostName}
                                <br />
                                <strong>Adresse :</strong> {webHostAddress}
                                <br />
                                <strong>Site :</strong>{" "}
                                <a
                                    href={webHostWebsite}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        color: palette.primary,
                                        fontWeight: 900,
                                        textDecoration: "none",
                                    }}
                                >
                                    {webHostWebsite}
                                </a>
                            </p>
                            <p style={styles.p}>
                                Le site web Movenco est hébergé et servi via
                                l’infrastructure de {webHostName}.
                            </p>
                        </section>

                        <section id="app" style={styles.section}>
                            <h2 style={styles.h2}>4. Application mobile</h2>
                            <p style={styles.p}>
                                L’application mobile <strong>Movenco</strong>{" "}
                                est éditée par {editorName} ({editorStatus}).
                            </p>
                            <p style={styles.p}>
                                L’API backend de l’application est hébergée chez{" "}
                                <strong>{apiHostName}</strong> (
                                <a
                                    href={apiHostWebsite}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        color: palette.primary,
                                        fontWeight: 900,
                                        textDecoration: "none",
                                    }}
                                >
                                    {apiHostWebsite}
                                </a>
                                ).
                            </p>
                            <p style={styles.p}>
                                Les données applicatives sont stockées via{" "}
                                <strong>{databaseName}</strong>, et les médias
                                utilisateurs (ex. avatars) sont gérés via{" "}
                                <strong>{mediaProvider}</strong>.
                            </p>
                            <p style={styles.p}>
                                À ce jour, l’application n’utilise pas de
                                service publicitaire intégré.
                            </p>
                            <p style={styles.p}>
                                Pour plus d’informations :
                                <br />-{" "}
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
                                <br />-{" "}
                                <Link
                                    href="/terms"
                                    style={{
                                        color: palette.primary,
                                        fontWeight: 950,
                                        textDecoration: "none",
                                    }}
                                >
                                    Conditions d’utilisation
                                </Link>
                                <br />-{" "}
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
                            </p>
                        </section>

                        <section id="contact" style={styles.section}>
                            <h2 style={styles.h2}>5. Contact</h2>
                            <p style={styles.p}>
                                <strong>Email :</strong>{" "}
                                <a
                                    href={`mailto:${email}`}
                                    style={{
                                        color: palette.primary,
                                        fontWeight: 950,
                                        textDecoration: "none",
                                    }}
                                >
                                    {email}
                                </a>
                            </p>
                            <p style={styles.p}>
                                Pour les demandes relatives aux données
                                personnelles ou à la suppression de compte,
                                merci de consulter également les pages{" "}
                                <Link
                                    href="/privacy"
                                    style={{
                                        color: palette.primary,
                                        fontWeight: 950,
                                        textDecoration: "none",
                                    }}
                                >
                                    Confidentialité
                                </Link>{" "}
                                et{" "}
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

                        <section id="ip" style={styles.section}>
                            <h2 style={styles.h2}>
                                6. Propriété intellectuelle
                            </h2>
                            <p style={styles.p}>
                                L’ensemble des contenus et éléments composant le
                                site et l’application Movenco (textes, visuels,
                                graphismes, logos, interface, structure, code,
                                éléments de marque, etc.) est protégé par les
                                lois relatives à la propriété intellectuelle.
                            </p>
                            <p style={styles.p}>
                                Toute reproduction, représentation,
                                modification, publication ou adaptation, totale
                                ou partielle, de ces éléments est interdite sans
                                autorisation écrite préalable de l’éditeur, sauf
                                cas expressément prévus par la loi.
                            </p>
                        </section>

                        <section id="liability" style={styles.section}>
                            <h2 style={styles.h2}>7. Responsabilité</h2>
                            <p style={styles.p}>
                                Les informations publiées sur le site sont
                                fournies à titre informatif. Malgré le soin
                                apporté à leur mise à jour, l’éditeur ne peut
                                garantir l’exactitude, l’exhaustivité ou
                                l’actualité de toutes les informations.
                            </p>
                            <p style={styles.p}>
                                L’éditeur ne pourra être tenu responsable des
                                dommages directs ou indirects liés à
                                l’utilisation du site ou de l’application, sauf
                                disposition légale impérative contraire.
                            </p>
                        </section>

                        <section id="links" style={styles.section}>
                            <h2 style={styles.h2}>8. Liens externes</h2>
                            <p style={styles.p}>
                                Le site et/ou l’application peuvent contenir des
                                liens vers des services ou sites tiers.
                                L’éditeur n’exerce pas de contrôle sur ces
                                ressources externes et ne peut être tenu
                                responsable de leur contenu, disponibilité ou
                                pratiques.
                            </p>
                        </section>

                        <section id="privacy" style={styles.section}>
                            <h2 style={styles.h2}>9. Données personnelles</h2>
                            <p style={styles.p}>
                                Les informations relatives au traitement des
                                données personnelles (catégories de données,
                                finalités, bases légales, conservation, droits
                                RGPD, etc.) sont disponibles dans la{" "}
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
                            <p style={styles.p}>
                                <strong>Autorité de contrôle (France) :</strong>{" "}
                                CNIL (Commission nationale de l’informatique et
                                des libertés).
                            </p>
                        </section>

                        <section id="cookies" style={styles.section}>
                            <h2 style={styles.h2}>10. Cookies / traceurs</h2>
                            <p style={styles.p}>
                                Le site peut utiliser des cookies ou traceurs
                                strictement nécessaires à son fonctionnement. Si
                                des traceurs de mesure d’audience ou marketing
                                sont ajoutés, un mécanisme de consentement sera
                                mis en place conformément à la réglementation
                                applicable.
                            </p>
                            <p style={styles.p}>
                                À ce jour, l’application Movenco n’intègre pas
                                de publicité. Si des services publicitaires sont
                                ajoutés à l’avenir, les mentions légales et la
                                politique de confidentialité seront mises à jour
                                en conséquence.
                            </p>
                        </section>

                        <section id="moderation" style={styles.section}>
                            <h2 style={styles.h2}>
                                11. Signalement & modération
                            </h2>
                            <p style={styles.p}>
                                Movenco est une application communautaire. Des
                                mécanismes de signalement, blocage et modération
                                peuvent être proposés afin de préserver la
                                sécurité des utilisateurs et la qualité des
                                échanges.
                            </p>
                            <p style={styles.p}>
                                Les règles d’usage, les comportements interdits
                                et les mesures de modération sont décrits dans
                                les{" "}
                                <Link
                                    href="/terms"
                                    style={{
                                        color: palette.primary,
                                        fontWeight: 950,
                                        textDecoration: "none",
                                    }}
                                >
                                    Conditions d’utilisation
                                </Link>
                                .
                            </p>
                        </section>

                        <section
                            id="law"
                            style={{ ...styles.section, borderBottom: "none" }}
                        >
                            <h2 style={styles.h2}>12. Droit applicable</h2>
                            <p style={styles.p}>
                                Les présentes mentions légales sont soumises au
                                droit français.
                            </p>
                            <p style={styles.p}>
                                En cas de litige, une solution amiable sera
                                recherchée avant toute action judiciaire, sauf
                                disposition légale contraire.
                            </p>
                            <p style={styles.p}>
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
                        <Link href="/terms" style={styles.link}>
                            Terms
                        </Link>
                        <Link href="/delete-account" style={styles.link}>
                            Delete account
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
    .layout {
      grid-template-columns: 1fr !important;
    }

    /* ✅ Le sommaire ne colle plus et ne masque plus le contenu */
    aside[aria-label="Sommaire"] {
      position: static !important;
      top: auto !important;
      max-height: none !important;
      margin-bottom: 12px;
    }
  }

  @media (max-width: 640px) {
    /* Optionnel : rend le sommaire compact si beaucoup d'items */
    aside[aria-label="Sommaire"] ul {
      max-height: 220px;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
        `}</style>
            </div>
        </main>
    );
}
