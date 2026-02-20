import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Politique de confidentialité — Movenco",
    description:
        "Politique de confidentialité Movenco : données collectées, finalités, bases légales, géolocalisation, messagerie, sécurité, conservation, droits RGPD et suppression de compte.",
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

export default function PrivacyPage() {
    const year = new Date().getFullYear();
    const updatedAt = "20/02/2026";
    const contactEmail = "movencoapp@gmail.com";

    const controllerName = "Maxence Derepas (Movenco)";
    const controllerAddress = "36 rue de Migneaux, 78300 Poissy, France";

    const toc = [
        { id: "controller", label: "1. Responsable du traitement" },
        { id: "scope", label: "2. Portée" },
        { id: "data", label: "3. Données collectées" },
        { id: "purposes", label: "4. Finalités" },
        { id: "legal-basis", label: "5. Bases légales" },
        { id: "geo", label: "6. Géolocalisation" },
        { id: "providers", label: "7. Prestataires / sous-traitants" },
        { id: "recipients", label: "8. Destinataires" },
        { id: "retention", label: "9. Conservation" },
        { id: "delete", label: "10. Suppression de compte" },
        { id: "security", label: "11. Sécurité" },
        { id: "rights", label: "12. Vos droits" },
        { id: "minors", label: "13. Mineurs" },
        { id: "external", label: "14. Liens externes" },
        { id: "changes", label: "15. Modifications" },
        { id: "contact", label: "16. Contact" },
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
                            href="/terms"
                            style={styles.btn}
                            className="btnHover"
                        >
                            Conditions
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

                <section style={styles.hero}>
                    <div style={styles.heroBg} />
                    <div style={styles.heroInner}>
                        <h1 style={styles.title}>
                            Politique de confidentialité
                        </h1>
                        <p style={styles.subtitle}>
                            Cette politique explique comment Movenco collecte,
                            utilise, conserve et protège vos données
                            personnelles dans le cadre de l’utilisation du site
                            et de l’application mobile.
                        </p>
                        <div style={styles.metaRow}>
                            <span style={styles.pill}>🛡️ RGPD</span>
                            <span style={styles.pill}>📍 Géolocalisation</span>
                            <span style={styles.pill}>💬 Messagerie</span>
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
                        <section id="controller" style={styles.section}>
                            <h2 style={styles.h2}>
                                1. Responsable du traitement
                            </h2>
                            <p style={styles.p}>
                                Le responsable du traitement des données
                                personnelles est{" "}
                                <strong>{controllerName}</strong>,{" "}
                                {controllerAddress}.
                            </p>
                            <p style={styles.p}>
                                Pour toute question relative à la protection des
                                données :
                                <br />
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
                            </p>

                            <div style={styles.callout}>
                                <p style={styles.calloutTitle}>
                                    ✅ Infrastructure actuelle
                                </p>
                                <p style={styles.calloutText}>
                                    Movenco utilise actuellement Vercel (site
                                    web), Hostinger (backend API), MongoDB (base
                                    de données) et Cloudinary (stockage médias).
                                    L’application n’intègre pas de publicité à
                                    ce jour.
                                </p>
                            </div>
                        </section>

                        <section id="scope" style={styles.section}>
                            <h2 style={styles.h2}>2. Portée</h2>
                            <p style={styles.p}>Cette politique s’applique :</p>
                            <ul style={styles.ul}>
                                <li>au site vitrine Movenco ;</li>
                                <li>à l’application mobile Movenco ;</li>
                                <li>
                                    aux fonctionnalités sociales associées
                                    (profil, messagerie, événements,
                                    géolocalisation de proximité).
                                </li>
                            </ul>
                        </section>

                        <section id="data" style={styles.section}>
                            <h2 style={styles.h2}>3. Données collectées</h2>
                            <p style={styles.p}>
                                Selon votre utilisation de l’application, nous
                                pouvons collecter les catégories de données
                                suivantes :
                            </p>
                            <ul style={styles.ul}>
                                <li>
                                    <strong>Données de compte</strong> : nom /
                                    pseudo, adresse email et/ou numéro de
                                    téléphone, identifiants de connexion.
                                </li>
                                <li>
                                    <strong>Données de profil</strong> : photo
                                    de profil (avatar), date de naissance,
                                    genre, sports / activités sélectionnés,
                                    informations de profil que vous choisissez
                                    de renseigner.
                                </li>
                                <li>
                                    <strong>Données de géolocalisation</strong>{" "}
                                    : position géographique lorsque vous activez
                                    la localisation, afin d’afficher des
                                    utilisateurs et événements à proximité.
                                </li>
                                <li>
                                    <strong>
                                        Données de contenu et interactions
                                    </strong>{" "}
                                    : messages privés et de groupe, contenus
                                    publiés, commentaires, réactions,
                                    signalements, blocages, interactions liées
                                    au compte.
                                </li>
                                <li>
                                    <strong>Données d’événements</strong> :
                                    événements créés, événements rejoints,
                                    informations liées aux participations
                                    (titre, lieu, description, date, etc.).
                                </li>
                                <li>
                                    <strong>Données techniques</strong> :
                                    identifiants techniques de session, token
                                    d’authentification, langue, journaux
                                    techniques, adresse IP, informations
                                    nécessaires au fonctionnement et à la
                                    sécurité du service.
                                </li>
                            </ul>
                        </section>

                        <section id="purposes" style={styles.section}>
                            <h2 style={styles.h2}>
                                4. Finalités du traitement
                            </h2>
                            <p style={styles.p}>
                                Nous utilisons vos données pour :
                            </p>
                            <ul style={styles.ul}>
                                <li>
                                    créer et gérer votre compte utilisateur ;
                                </li>
                                <li>
                                    vous authentifier et sécuriser l’accès au
                                    service ;
                                </li>
                                <li>
                                    afficher votre profil, vos préférences
                                    sportives et vos contenus ;
                                </li>
                                <li>
                                    permettre la géolocalisation des
                                    utilisateurs et événements à proximité ;
                                </li>
                                <li>
                                    fournir la messagerie, les échanges de
                                    groupe et les interactions entre
                                    utilisateurs ;
                                </li>
                                <li>
                                    permettre la création, la gestion et la
                                    participation aux événements ;
                                </li>
                                <li>
                                    modérer la plateforme (signalements,
                                    blocages, sécurité) ;
                                </li>
                                <li>
                                    améliorer les performances et l’expérience
                                    utilisateur ;
                                </li>
                                <li>respecter nos obligations légales ;</li>
                                <li>
                                    prévenir les abus, fraudes et incidents de
                                    sécurité.
                                </li>
                            </ul>
                        </section>

                        <section id="legal-basis" style={styles.section}>
                            <h2 style={styles.h2}>5. Bases légales (RGPD)</h2>
                            <p style={styles.p}>
                                Les traitements reposent, selon les cas, sur :
                            </p>
                            <ul style={styles.ul}>
                                <li>
                                    <strong>l’exécution du contrat</strong> :
                                    fourniture des fonctionnalités de
                                    l’application ;
                                </li>
                                <li>
                                    <strong>votre consentement</strong> :
                                    notamment pour la géolocalisation et
                                    certaines autorisations système (ex.
                                    photos/caméra si vous les activez) ;
                                </li>
                                <li>
                                    <strong>notre intérêt légitime</strong> :
                                    sécurité, lutte contre les abus, prévention
                                    de la fraude, amélioration du service ;
                                </li>
                                <li>
                                    <strong>nos obligations légales</strong> :
                                    conservation ou communication de données
                                    lorsque la loi l’exige.
                                </li>
                            </ul>
                        </section>

                        <section id="geo" style={styles.section}>
                            <h2 style={styles.h2}>6. Géolocalisation</h2>
                            <p style={styles.p}>
                                La géolocalisation est utilisée pour proposer
                                les fonctionnalités de proximité de Movenco.
                            </p>
                            <ul style={styles.ul}>
                                <li>
                                    Vous pouvez refuser ou retirer
                                    l’autorisation depuis les réglages de votre
                                    téléphone.
                                </li>
                                <li>
                                    Certaines fonctionnalités (ex. “Autour de
                                    moi”) peuvent alors être limitées ou
                                    indisponibles.
                                </li>
                                <li>
                                    Votre position exacte n’a pas vocation à
                                    être affichée publiquement telle quelle aux
                                    autres utilisateurs.
                                </li>
                            </ul>
                        </section>

                        <section id="providers" style={styles.section}>
                            <h2 style={styles.h2}>
                                7. Prestataires / sous-traitants
                            </h2>
                            <p style={styles.p}>
                                Nous faisons appel à des prestataires techniques
                                pour faire fonctionner le service, notamment :
                            </p>
                            <ul style={styles.ul}>
                                <li>
                                    <strong>Vercel</strong> : hébergement du
                                    site web.
                                </li>
                                <li>
                                    <strong>Hostinger</strong> : hébergement du
                                    backend API.
                                </li>
                                <li>
                                    <strong>MongoDB</strong> : base de données
                                    applicative.
                                </li>
                                <li>
                                    <strong>Cloudinary</strong> : stockage et
                                    gestion des médias (ex. avatars).
                                </li>
                            </ul>
                            <p style={styles.p}>
                                Ces prestataires agissent en qualité de
                                sous-traitants techniques, dans la limite de
                                leurs missions, et sont soumis à des obligations
                                de sécurité et de confidentialité.
                            </p>
                        </section>

                        <section id="recipients" style={styles.section}>
                            <h2 style={styles.h2}>
                                8. Destinataires des données
                            </h2>
                            <p style={styles.p}>
                                Vos données peuvent être accessibles :
                            </p>
                            <ul style={styles.ul}>
                                <li>aux équipes habilitées de Movenco ;</li>
                                <li>
                                    à nos prestataires techniques (hébergement,
                                    infrastructure, base de données, stockage
                                    médias) ;
                                </li>
                                <li>
                                    aux autorités compétentes si la loi l’exige.
                                </li>
                            </ul>
                            <p style={styles.p}>
                                Nous ne vendons pas vos données personnelles à
                                des tiers.
                            </p>
                        </section>

                        <section id="retention" style={styles.section}>
                            <h2 style={styles.h2}>9. Durée de conservation</h2>
                            <p style={styles.p}>
                                Nous conservons vos données pendant la durée
                                nécessaire aux finalités décrites dans cette
                                politique, notamment :
                            </p>
                            <ul style={styles.ul}>
                                <li>
                                    <strong>données de compte</strong> : pendant
                                    la durée de vie du compte ;
                                </li>
                                <li>
                                    <strong>données de profil</strong> : jusqu’à
                                    suppression ou modification par
                                    l’utilisateur ;
                                </li>
                                <li>
                                    <strong>
                                        données de messagerie / interactions
                                    </strong>{" "}
                                    : pendant une durée nécessaire au service, à
                                    la sécurité et à la modération ;
                                </li>
                                <li>
                                    <strong>
                                        données de signalement / sécurité
                                    </strong>{" "}
                                    : aussi longtemps que nécessaire pour
                                    traiter les incidents et respecter nos
                                    obligations ;
                                </li>
                                <li>
                                    <strong>données techniques / logs</strong> :
                                    durée limitée et proportionnée.
                                </li>
                            </ul>
                            <p style={styles.p}>
                                En cas de suppression du compte, les données
                                sont supprimées ou anonymisées, sous réserve des
                                obligations légales et des nécessités de
                                sécurité, de preuve ou de lutte contre la
                                fraude.
                            </p>
                        </section>

                        <section id="delete" style={styles.section}>
                            <h2 style={styles.h2}>10. Suppression de compte</h2>
                            <p style={styles.p}>
                                Vous pouvez demander la suppression de votre
                                compte :
                            </p>
                            <ul style={styles.ul}>
                                <li>directement depuis l’application ;</li>
                                <li>
                                    via la page dédiée :{" "}
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
                                </li>
                            </ul>
                            <p style={styles.p}>
                                La suppression entraîne la désactivation de
                                votre accès et la suppression/anonymisation
                                progressive des données selon les contraintes
                                légales et techniques applicables.
                            </p>
                        </section>

                        <section id="security" style={styles.section}>
                            <h2 style={styles.h2}>11. Sécurité des données</h2>
                            <p style={styles.p}>
                                Nous mettons en place des mesures techniques et
                                organisationnelles raisonnables pour protéger
                                vos données contre l’accès non autorisé, la
                                perte, la divulgation ou l’altération.
                            </p>
                            <ul style={styles.ul}>
                                <li>chiffrement des échanges (HTTPS/TLS) ;</li>
                                <li>contrôles d’accès ;</li>
                                <li>mesures de sécurité applicatives ;</li>
                                <li>journalisation et prévention des abus.</li>
                            </ul>
                            <p style={styles.p}>
                                Aucun système n’étant totalement inviolable,
                                nous vous recommandons d’utiliser un mot de
                                passe fort et de ne pas partager vos
                                identifiants.
                            </p>
                        </section>

                        <section id="rights" style={styles.section}>
                            <h2 style={styles.h2}>12. Vos droits</h2>
                            <p style={styles.p}>
                                Conformément au RGPD et aux lois applicables,
                                vous disposez notamment des droits suivants :
                            </p>
                            <ul style={styles.ul}>
                                <li>droit d’accès ;</li>
                                <li>droit de rectification ;</li>
                                <li>droit d’effacement ;</li>
                                <li>droit d’opposition ;</li>
                                <li>droit à la limitation du traitement ;</li>
                                <li>
                                    droit à la portabilité (dans les cas prévus
                                    par la loi) ;
                                </li>
                                <li>
                                    droit de retirer votre consentement à tout
                                    moment (pour les traitements fondés sur le
                                    consentement).
                                </li>
                            </ul>
                            <div style={styles.callout}>
                                <p style={styles.calloutTitle}>
                                    📩 Exercer vos droits
                                </p>
                                <p style={styles.calloutText}>
                                    Contactez-nous via{" "}
                                    <a
                                        href={`mailto:${contactEmail}`}
                                        style={{
                                            color: palette.primary,
                                            fontWeight: 950,
                                            textDecoration: "none",
                                        }}
                                    >
                                        {contactEmail}
                                    </a>{" "}
                                    ou via la page support. Nous pourrons
                                    demander une preuve d’identité en cas de
                                    doute raisonnable.
                                </p>
                            </div>
                        </section>

                        <section id="minors" style={styles.section}>
                            <h2 style={styles.h2}>13. Mineurs</h2>
                            <p style={styles.p}>
                                Movenco n’est pas destiné aux enfants. L’usage
                                du service est réservé aux utilisateurs
                                respectant l’âge minimum prévu par les
                                conditions d’utilisation et la réglementation
                                applicable.
                            </p>
                            <p style={styles.p}>
                                Si vous pensez qu’un mineur nous a transmis des
                                données personnelles de manière inappropriée,
                                contactez-nous afin que nous puissions examiner
                                la situation.
                            </p>
                        </section>

                        <section id="external" style={styles.section}>
                            <h2 style={styles.h2}>14. Liens externes</h2>
                            <p style={styles.p}>
                                Le site ou l’application peut contenir des liens
                                vers des sites tiers (support, pages légales,
                                services externes). Nous ne sommes pas
                                responsables des pratiques de confidentialité de
                                ces sites tiers.
                            </p>
                        </section>

                        <section id="changes" style={styles.section}>
                            <h2 style={styles.h2}>
                                15. Modifications de la politique
                            </h2>
                            <p style={styles.p}>
                                Nous pouvons mettre à jour la présente Politique
                                de confidentialité à tout moment.
                            </p>
                            <p style={styles.p}>
                                En cas de modification importante, nous pourrons
                                vous en informer par un moyen approprié. La date
                                de mise à jour affichée en haut de cette page
                                fait foi.
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
                                Vous pouvez également introduire une réclamation
                                auprès de la CNIL si vous estimez que vos droits
                                ne sont pas respectés.
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
                        <Link href="/legal" style={styles.link}>
                            Legal
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

  /* ✅ Tablette / mobile : layout en une colonne + sommaire non sticky */
  @media (max-width: 980px) {
    .layout {
      grid-template-columns: 1fr !important;
    }

    /* Le sommaire ne masque plus le contenu */
    aside[aria-label="Sommaire"] {
      position: static !important;
      top: auto !important;
      max-height: none !important;
      margin-bottom: 12px;
    }

    /* Navbar plus souple */
    header {
      align-items: flex-start !important;
    }
  }

  /* ✅ Mobile : compacter un peu */
  @media (max-width: 640px) {
    /* Sommaire scrollable si trop long */
    aside[aria-label="Sommaire"] ul {
      max-height: 220px;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }

    /* Boutons nav plus compacts */
    .btnHover {
      font-size: 12px !important;
      padding: 8px 10px !important;
    }

    /* Hero un peu plus compact */
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
