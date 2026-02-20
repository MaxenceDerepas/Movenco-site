// app/terms/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import React from "react";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Conditions d’utilisation — Movenco",
    description:
        "Conditions Générales d’Utilisation de Movenco : compte, règles de conduite, géolocalisation, contenus, messagerie, modération, responsabilité, suppression de compte et contact.",
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

    brandName: { fontSize: 15, fontWeight: 950, letterSpacing: -0.2 },

    navLinks: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "center",
    },
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
    const updatedAt = "20/02/2026";
    const contactEmail = "movencoapp@gmail.com";
    const minAge = 16;

    const toc = [
        { id: "objet", label: "1. Objet" },
        { id: "access", label: "2. Conditions d’accès" },
        { id: "account", label: "3. Compte utilisateur" },
        { id: "conduct", label: "4. Règles de conduite" },
        { id: "content", label: "5. Contenus publiés" },
        { id: "location", label: "6. Géolocalisation" },
        { id: "moderation", label: "7. Signalement & modération" },
        { id: "messaging", label: "8. Messagerie" },
        { id: "availability", label: "9. Disponibilité" },
        { id: "ip", label: "10. Propriété intellectuelle" },
        { id: "liability", label: "11. Responsabilité" },
        { id: "safety", label: "12. Sécurité & événements" },
        { id: "delete", label: "13. Suppression de compte" },
        { id: "changes", label: "14. Évolution des CGU" },
        { id: "law", label: "15. Droit applicable" },
        { id: "contact", label: "16. Contact" },
    ];

    return (
        <main style={styles.page}>
            <a id="top" />
            <div style={styles.container}>
                {/* NAV */}
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
                            Ces Conditions Générales d’Utilisation (CGU)
                            encadrent l’accès et l’usage de l’application mobile
                            Movenco. Elles complètent la{" "}
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
                            <span style={styles.pill}>
                                🛡️ Communauté sportive
                            </span>
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
                        <section id="objet" style={styles.section}>
                            <h2 style={styles.h2}>1. Objet</h2>
                            <p style={styles.p}>
                                Movenco est une application mobile communautaire
                                permettant notamment de découvrir des sportifs
                                autour de soi, consulter et créer des événements
                                sportifs, discuter avec d’autres utilisateurs et
                                gérer un profil sportif.
                            </p>
                            <p style={styles.p}>
                                En créant un compte ou en utilisant Movenco, tu
                                acceptes les présentes CGU.
                            </p>
                        </section>

                        <section id="access" style={styles.section}>
                            <h2 style={styles.h2}>2. Conditions d’accès</h2>
                            <p style={styles.p}>
                                L’utilisation de Movenco nécessite un appareil
                                compatible, une connexion Internet et, pour
                                certaines fonctionnalités, la création d’un
                                compte utilisateur.
                            </p>
                            <p style={styles.p}>
                                Certaines fonctionnalités peuvent évoluer, être
                                ajoutées ou déployées progressivement.
                            </p>
                        </section>

                        <section id="account" style={styles.section}>
                            <h2 style={styles.h2}>3. Compte utilisateur</h2>
                            <ul style={styles.ul}>
                                <li>
                                    Tu t’engages à fournir des informations
                                    exactes, complètes et à jour.
                                </li>
                                <li>
                                    Tu es responsable de la confidentialité de
                                    tes identifiants et de l’usage de ton
                                    compte.
                                </li>
                                <li>
                                    En cas d’accès non autorisé suspecté,
                                    contacte-nous rapidement afin de sécuriser
                                    le compte.
                                </li>
                            </ul>
                            <div style={styles.callout}>
                                <p style={styles.calloutTitle}>
                                    🔐 Bon réflexe sécurité
                                </p>
                                <p style={styles.calloutText}>
                                    Utilise un mot de passe fort et unique, et
                                    évite de partager tes accès, même avec un
                                    proche.
                                </p>
                            </div>
                        </section>

                        <section id="conduct" style={styles.section}>
                            <h2 style={styles.h2}>4. Règles de conduite</h2>
                            <p style={styles.p}>
                                Tu t’engages à utiliser Movenco de manière
                                loyale, respectueuse et conforme à la loi. Sont
                                notamment interdits :
                            </p>
                            <ul style={styles.ul}>
                                <li>
                                    harcèlement, menaces, haine, intimidation ;
                                </li>
                                <li>
                                    spam, phishing, fraude, usurpation
                                    d’identité ;
                                </li>
                                <li>
                                    publication de contenus illégaux, trompeurs
                                    ou portant atteinte aux droits de tiers ;
                                </li>
                                <li>
                                    tentative de contourner la sécurité, la
                                    modération ou le bon fonctionnement de
                                    l’application.
                                </li>
                            </ul>
                        </section>

                        <section id="content" style={styles.section}>
                            <h2 style={styles.h2}>5. Contenus publiés</h2>
                            <p style={styles.p}>
                                Tu restes responsable des contenus que tu
                                publies (profil, images, descriptions, messages,
                                événements, etc.) et tu garantis disposer des
                                droits nécessaires.
                            </p>
                            <p style={styles.p}>
                                Pour permettre le fonctionnement de Movenco, tu
                                accordes une licence non exclusive, mondiale et
                                gratuite d’hébergement, reproduction technique
                                et affichage de ces contenus dans le cadre du
                                service.
                            </p>
                        </section>

                        <section id="location" style={styles.section}>
                            <h2 style={styles.h2}>6. Géolocalisation</h2>
                            <p style={styles.p}>
                                Certaines fonctionnalités (utilisateurs proches,
                                événements à proximité) nécessitent l’accès à la
                                géolocalisation.
                            </p>
                            <p style={styles.p}>
                                L’activation de la localisation est facultative,
                                mais le refus peut limiter certaines
                                fonctionnalités.
                            </p>
                        </section>

                        <section id="moderation" style={styles.section}>
                            <h2 style={styles.h2}>
                                7. Signalement & modération
                            </h2>
                            <p style={styles.p}>
                                Movenco met à disposition des outils de
                                signalement et de blocage. Nous pouvons examiner
                                les signalements et prendre des mesures adaptées
                                (avertissement, restriction, suspension ou
                                suppression de contenu/compte).
                            </p>
                            <ul style={styles.ul}>
                                <li>
                                    Tu peux bloquer un utilisateur directement
                                    dans l’app.
                                </li>
                                <li>
                                    Tu peux signaler un comportement ou contenu
                                    abusif.
                                </li>
                            </ul>
                        </section>

                        <section id="messaging" style={styles.section}>
                            <h2 style={styles.h2}>8. Messagerie</h2>
                            <p style={styles.p}>
                                La messagerie privée et de groupe est fournie
                                pour faciliter les échanges entre utilisateurs
                                autour des activités et événements.
                            </p>
                            <p style={styles.p}>
                                Elle ne doit pas être utilisée pour le spam, le
                                démarchage non sollicité, le harcèlement ou
                                toute activité illicite.
                            </p>
                        </section>

                        <section id="availability" style={styles.section}>
                            <h2 style={styles.h2}>9. Disponibilité</h2>
                            <p style={styles.p}>
                                Nous faisons de notre mieux pour assurer la
                                disponibilité du service, mais nous ne
                                garantissons pas un accès ininterrompu.
                            </p>
                            <p style={styles.p}>
                                L’application peut être temporairement
                                indisponible (maintenance, évolution, incident
                                technique, prestataire tiers, etc.).
                            </p>
                        </section>

                        <section id="ip" style={styles.section}>
                            <h2 style={styles.h2}>
                                10. Propriété intellectuelle
                            </h2>
                            <p style={styles.p}>
                                Les éléments de Movenco (nom, marque, logo,
                                design, textes, code, interface, visuels) sont
                                protégés par les lois sur la propriété
                                intellectuelle.
                            </p>
                            <p style={styles.p}>
                                Toute reproduction, adaptation ou exploitation
                                non autorisée est interdite.
                            </p>
                        </section>

                        <section id="liability" style={styles.section}>
                            <h2 style={styles.h2}>11. Responsabilité</h2>
                            <p style={styles.p}>
                                Movenco est une plateforme de mise en relation
                                et d’organisation communautaire. Nous ne sommes
                                pas responsables des contenus publiés par les
                                utilisateurs ni de leurs comportements.
                            </p>
                            <p style={styles.p}>
                                Sauf disposition légale impérative contraire,
                                Movenco ne pourra pas être tenu responsable des
                                dommages indirects liés à l’utilisation du
                                service.
                            </p>
                        </section>

                        <section id="safety" style={styles.section}>
                            <h2 style={styles.h2}>
                                12. Sécurité & événements sportifs
                            </h2>
                            <p style={styles.p}>
                                Les événements et sorties sont organisés par les
                                utilisateurs. Chaque participant est seul
                                responsable de sa pratique sportive, de son
                                matériel, de son niveau et du respect des
                                consignes de sécurité.
                            </p>
                            <div style={styles.callout}>
                                <p style={styles.calloutTitle}>
                                    🧭 Conseil sécurité outdoor
                                </p>
                                <p style={styles.calloutText}>
                                    Vérifie météo, itinéraire, niveau du groupe,
                                    équipement, visibilité, autonomie et
                                    conditions locales avant toute sortie. En
                                    cas de doute, renonce.
                                </p>
                            </div>
                        </section>

                        <section id="delete" style={styles.section}>
                            <h2 style={styles.h2}>13. Suppression de compte</h2>
                            <p style={styles.p}>
                                Tu peux supprimer ton compte depuis
                                l’application ou via la page dédiée :{" "}
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
                            <p style={styles.p}>
                                La suppression du compte entraîne la
                                désactivation de l’accès au service et le
                                traitement des données selon la{" "}
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
                            <h2 style={styles.h2}>14. Évolution des CGU</h2>
                            <p style={styles.p}>
                                Nous pouvons modifier les présentes CGU à tout
                                moment. La date de mise à jour affichée en haut
                                de cette page fait foi.
                            </p>
                            <p style={styles.p}>
                                En continuant à utiliser Movenco après une mise
                                à jour, tu acceptes la version en vigueur.
                            </p>
                        </section>

                        <section id="law" style={styles.section}>
                            <h2 style={styles.h2}>15. Droit applicable</h2>
                            <p style={styles.p}>
                                Les présentes CGU sont soumises au droit
                                français, sous réserve des dispositions
                                impératives applicables dans ton pays de
                                résidence.
                            </p>
                            <p style={styles.p}>
                                En cas de litige, une solution amiable sera
                                recherchée avant toute action judiciaire.
                            </p>
                        </section>

                        <section
                            id="contact"
                            style={{ ...styles.section, borderBottom: "none" }}
                        >
                            <h2 style={styles.h2}>16. Contact</h2>
                            <p style={styles.p}>
                                Support :{" "}
                                <Link
                                    href="/support"
                                    style={{
                                        color: palette.primary,
                                        fontWeight: 950,
                                        textDecoration: "none",
                                    }}
                                >
                                    movencoapp.com/support
                                </Link>
                                <br />
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
                                Âge minimum recommandé : {minAge} ans
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

  /* ✅ Tablette / mobile : une seule colonne + sommaire non sticky */
  @media (max-width: 980px) {
    .layout {
      grid-template-columns: 1fr !important;
    }

    aside[aria-label="Sommaire"] {
      position: static !important;
      top: auto !important;
      max-height: none !important;
      margin-bottom: 12px;
    }

    header {
      align-items: flex-start !important;
    }
  }

  /* ✅ Mobile compact */
  @media (max-width: 640px) {
    aside[aria-label="Sommaire"] ul {
      max-height: 220px;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }

    .btnHover {
      font-size: 12px !important;
      padding: 8px 10px !important;
    }

    h1 {
      font-size: 22px !important;
      line-height: 1.1 !important;
    }
  }
        `}</style>
            </div>
        </main>
    );
}
