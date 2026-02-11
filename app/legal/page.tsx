// app/legal/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Mentions légales — Movenco",
    description:
        "Mentions légales Movenco (LCEN) : éditeur, hébergeur, contact, propriété intellectuelle, responsabilité, données personnelles.",
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

    // ✅ À personnaliser (mais déjà “store-ready”)
    const updatedAt = "11/02/2026";

    // Éditeur
    const editorName = "Maxence Derepas";
    const editorStatus = "Auto-entrepreneur";
    const siret = "897 929 717 00022"; // ✅ ton SIRET

    // ⚠️ À renseigner (idéalement via domiciliation)
    const address = "36 rue de migneaux, Poissy 78300";

    const email = "movencoapp@gmail.com";

    // Hébergeur (site)
    const hostName = "Vercel Inc.";
    const hostAddress = "340 S Lemon Ave #4133, Walnut, CA 91789, USA";
    const hostWebsite = "https://vercel.com";

    const toc = [
        { id: "editor", label: "1. Éditeur du site" },
        { id: "app", label: "2. Éditeur de l’application" },
        { id: "director", label: "3. Directeur de publication" },
        { id: "host", label: "4. Hébergeur" },
        { id: "contact", label: "5. Contact" },
        { id: "ip", label: "6. Propriété intellectuelle" },
        { id: "liability", label: "7. Responsabilité" },
        { id: "links", label: "8. Liens externes" },
        { id: "privacy", label: "9. Données personnelles" },
        { id: "cookies", label: "10. Cookies / traceurs" },
        { id: "reporting", label: "11. Signalement & modération" },
        { id: "law", label: "12. Droit applicable" },
    ];

    return (
        <main style={styles.page}>
            <a id="top" />
            <div style={styles.container}>
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
                            <h2 style={styles.h2}>1. Éditeur du site</h2>
                            <p style={styles.p}>
                                <strong>Éditeur :</strong> {editorName}
                                <br />
                                <strong>Statut :</strong> {editorStatus}
                                <br />
                                <strong>SIRET :</strong> {siret}
                                <br />
                                <strong>Adresse :</strong> {address}
                            </p>

                            <div style={styles.callout}>
                                <p style={styles.calloutTitle}>
                                    ✅ Adresse : recommandation pro
                                </p>
                                <p style={styles.calloutText}>
                                    Pour éviter d’afficher une adresse
                                    personnelle, il est courant d’utiliser une
                                    société de domiciliation. L’important est
                                    d’indiquer une{" "}
                                    <strong>adresse légale</strong> permettant
                                    de contacter l’éditeur.
                                </p>
                            </div>
                        </section>

                        <section id="app" style={styles.section}>
                            <h2 style={styles.h2}>
                                2. Éditeur de l’application
                            </h2>
                            <p style={styles.p}>
                                L’application mobile <strong>Movenco</strong>{" "}
                                est éditée par {editorName} ({editorStatus}),
                                SIRET {siret}.
                            </p>
                            <p style={styles.p}>
                                Les informations relatives aux traitements de
                                données, à la gestion du consentement
                                publicitaire et à la suppression de compte sont
                                détaillées dans la{" "}
                                <Link
                                    href="/privacy"
                                    style={{
                                        color: palette.primary,
                                        fontWeight: 950,
                                        textDecoration: "none",
                                    }}
                                >
                                    Politique de confidentialité
                                </Link>{" "}
                                et sur la page{" "}
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

                        <section id="director" style={styles.section}>
                            <h2 style={styles.h2}>
                                3. Directeur de publication
                            </h2>
                            <p style={styles.p}>
                                <strong>Directeur de publication :</strong>{" "}
                                {editorName}
                            </p>
                        </section>

                        <section id="host" style={styles.section}>
                            <h2 style={styles.h2}>4. Hébergeur</h2>
                            <p style={styles.p}>
                                <strong>Hébergeur :</strong> {hostName}
                                <br />
                                <strong>Adresse :</strong> {hostAddress}
                                <br />
                                <strong>Site :</strong>{" "}
                                <a
                                    href={hostWebsite}
                                    style={{
                                        color: palette.primary,
                                        fontWeight: 900,
                                        textDecoration: "none",
                                    }}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {hostWebsite}
                                </a>
                            </p>
                            <p style={styles.p}>
                                Le site est hébergé et servi via
                                l’infrastructure de {hostName}.
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
                                Pour toute demande liée à vos données ou à la
                                suppression de compte, vous pouvez également
                                consulter la page{" "}
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
                                L’ensemble des éléments du site (textes,
                                graphismes, logos, interface, structure, etc.)
                                et, le cas échéant, de l’application Movenco,
                                sont protégés par le droit de la propriété
                                intellectuelle.
                            </p>
                            <p style={styles.p}>
                                Toute reproduction, représentation,
                                modification, publication, adaptation totale ou
                                partielle des éléments du site, quel que soit le
                                moyen ou le procédé utilisé, est interdite, sauf
                                autorisation écrite préalable.
                            </p>
                        </section>

                        <section id="liability" style={styles.section}>
                            <h2 style={styles.h2}>7. Responsabilité</h2>
                            <p style={styles.p}>
                                Les informations diffusées sur le site sont
                                fournies à titre indicatif. Malgré le soin
                                apporté, l’éditeur ne peut garantir
                                l’exactitude, l’exhaustivité ou l’actualité des
                                contenus.
                            </p>
                            <p style={styles.p}>
                                L’éditeur ne saurait être tenu responsable des
                                dommages directs ou indirects pouvant résulter
                                de l’accès au site ou de son utilisation, sauf
                                dispositions légales impératives contraires.
                            </p>
                        </section>

                        <section id="links" style={styles.section}>
                            <h2 style={styles.h2}>8. Liens externes</h2>
                            <p style={styles.p}>
                                Le site peut contenir des liens vers des sites
                                tiers. L’éditeur n’exerce aucun contrôle sur ces
                                sites et décline toute responsabilité quant à
                                leur contenu ou à leurs pratiques.
                            </p>
                        </section>

                        <section id="privacy" style={styles.section}>
                            <h2 style={styles.h2}>9. Données personnelles</h2>
                            <p style={styles.p}>
                                Le traitement des données personnelles est
                                décrit dans la{" "}
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
                                . Vous y trouverez notamment les informations
                                relatives aux données collectées, aux finalités,
                                aux bases légales et à l’exercice de vos droits
                                (RGPD).
                            </p>
                            <p style={styles.p}>
                                <strong>Autorité de contrôle :</strong> CNIL
                                (Commission nationale de l’informatique et des
                                libertés).
                            </p>
                        </section>

                        <section id="cookies" style={styles.section}>
                            <h2 style={styles.h2}>10. Cookies / traceurs</h2>
                            <p style={styles.p}>
                                Le site peut utiliser des cookies strictement
                                nécessaires au fonctionnement. Si des cookies de
                                mesure d’audience ou marketing sont ajoutés, un
                                mécanisme de consentement sera mis en place
                                conformément à la réglementation.
                            </p>
                            <p style={styles.p}>
                                Dans l’application, la gestion du consentement
                                publicitaire peut être proposée via une
                                plateforme de gestion du consentement (CMP) et
                                un écran de “Paramètres de confidentialité”.
                                Détails dans la{" "}
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

                        <section id="reporting" style={styles.section}>
                            <h2 style={styles.h2}>
                                11. Signalement & modération
                            </h2>
                            <p style={styles.p}>
                                Movenco est une application communautaire. En
                                cas de contenu inapproprié ou de comportement
                                abusif, des outils de signalement et de
                                modération peuvent être proposés. Les règles
                                d’usage et contenus interdits sont décrites dans
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
                                droit français. En cas de litige, une solution
                                amiable sera recherchée avant toute action
                                judiciaire.
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
            .layout { grid-template-columns: 1fr !important; }
          }
        `}</style>
            </div>
        </main>
    );
}
