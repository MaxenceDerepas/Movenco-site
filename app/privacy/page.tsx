// app/privacy/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de confidentialité — Movenco",
    description:
        "Politique de confidentialité Movenco : données collectées, finalités, bases légales, conservation, sous-traitants, sécurité et droits RGPD.",
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

    tableWrap: {
        marginTop: 12,
        borderRadius: 16,
        border: `1px solid ${palette.border}`,
        overflow: "hidden",
        background: "white",
    },
    table: { width: "100%", borderCollapse: "collapse" as const },
    th: {
        textAlign: "left" as const,
        fontSize: 12,
        color: palette.sub,
        padding: "10px 12px",
        background: "rgba(246,247,248,0.9)",
        borderBottom: `1px solid ${palette.border}`,
        fontWeight: 900,
    },
    td: {
        verticalAlign: "top" as const,
        padding: "10px 12px",
        borderBottom: `1px solid ${palette.border}`,
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

    // ✅ À personnaliser
    const updatedAt = "06/02/2026";
    const controllerName = "MOVENCO (À REMPLACER — raison sociale / nom)";
    const controllerAddress = "Adresse (À REMPLACER)";
    const controllerEmail = "movencoapp@gmail.com"; // remplace si besoin
    const dpoEmail = "movencoapp@gmail.com"; // si tu as un DPO dédié, remplace
    const hostingProvider = "Hébergeur (À REMPLACER : nom + adresse)";

    const toc = [
        { id: "who", label: "1. Qui est responsable ?" },
        { id: "scope", label: "2. Portée" },
        { id: "data", label: "3. Données collectées" },
        { id: "purposes", label: "4. Finalités" },
        { id: "legal", label: "5. Bases légales" },
        { id: "retention", label: "6. Conservation" },
        { id: "recipients", label: "7. Destinataires" },
        { id: "processors", label: "8. Sous-traitants" },
        { id: "transfers", label: "9. Transferts hors UE" },
        { id: "security", label: "10. Sécurité" },
        { id: "rights", label: "11. Vos droits (RGPD)" },
        { id: "minors", label: "12. Mineurs" },
        { id: "cookies", label: "13. Cookies / traceurs" },
        { id: "contact", label: "14. Contact & CNIL" },
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
                            href="/terms"
                            style={styles.btn}
                            className="btnHover"
                        >
                            Conditions
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
                            Ce document décrit comment {controllerName} traite
                            les données personnelles dans le cadre de
                            l’utilisation de Movenco (site vitrine et
                            application).
                        </p>
                        <div style={styles.metaRow}>
                            <span style={styles.pill}>🛡️ RGPD</span>
                            <span style={styles.pill}>🔒 Confidentialité</span>
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
                        <section id="who" style={styles.section}>
                            <h2 style={styles.h2}>1. Qui est responsable ?</h2>
                            <p style={styles.p}>
                                Le responsable de traitement est :{" "}
                                <strong>{controllerName}</strong>,{" "}
                                {controllerAddress}.
                                <br />
                                Contact : <strong>{controllerEmail}</strong>.
                            </p>
                            <div style={styles.callout}>
                                <p style={styles.calloutTitle}>
                                    📌 Mentions à compléter
                                </p>
                                <p style={styles.calloutText}>
                                    Ajoute ici : forme juridique, SIRET,
                                    directeur de publication (LCEN), et un
                                    contact DPO si applicable.
                                </p>
                            </div>
                        </section>

                        <section id="scope" style={styles.section}>
                            <h2 style={styles.h2}>2. Portée</h2>
                            <p style={styles.p}>
                                Cette politique s’applique au site movenco.com
                                (vitrine) et à l’application Movenco. Certains
                                traitements dépendent des fonctionnalités
                                activées (géolocalisation, chat, événements,
                                etc.).
                            </p>
                        </section>

                        <section id="data" style={styles.section}>
                            <h2 style={styles.h2}>3. Données collectées</h2>
                            <ul style={styles.ul}>
                                <li>
                                    <strong>Compte</strong> : identifiants,
                                    nom/pseudo, photo de profil, âge/date de
                                    naissance, genre (si renseigné).
                                </li>
                                <li>
                                    <strong>Sports & préférences</strong> :
                                    sports sélectionnés, filtres, préférences
                                    d’affichage.
                                </li>
                                <li>
                                    <strong>Localisation</strong> : position
                                    (précise ou approximative) si l’utilisateur
                                    l’active.
                                </li>
                                <li>
                                    <strong>Contenus</strong> : messages,
                                    contenus publiés, commentaires, réactions
                                    (si activés).
                                </li>
                                <li>
                                    <strong>Événements</strong> : sorties
                                    créées/rejointes, participation,
                                    informations associées.
                                </li>
                                <li>
                                    <strong>Données techniques</strong> : logs,
                                    adresse IP, identifiants techniques,
                                    diagnostics/crash (sécurité & performance).
                                </li>
                            </ul>
                            <p style={styles.p}>
                                Les données marquées comme obligatoires sont
                                nécessaires au fonctionnement du service. Les
                                autres sont optionnelles.
                            </p>
                        </section>

                        <section id="purposes" style={styles.section}>
                            <h2 style={styles.h2}>4. Finalités</h2>
                            <ul style={styles.ul}>
                                <li>
                                    Création et gestion du compte utilisateur.
                                </li>
                                <li>
                                    Fourniture du service (matching local,
                                    filtres, chats, groupes, événements).
                                </li>
                                <li>
                                    Prévention de la fraude, modération et
                                    sécurité.
                                </li>
                                <li>
                                    Support utilisateurs et gestion des
                                    demandes.
                                </li>
                                <li>
                                    Amélioration continue (performance,
                                    stabilité, UX) via analyses techniques.
                                </li>
                                <li>
                                    Respect des obligations légales (si
                                    applicables).
                                </li>
                            </ul>
                        </section>

                        <section id="legal" style={styles.section}>
                            <h2 style={styles.h2}>5. Bases légales (RGPD)</h2>
                            <ul style={styles.ul}>
                                <li>
                                    <strong>Exécution du contrat</strong> :
                                    fournir les fonctionnalités essentielles du
                                    service.
                                </li>
                                <li>
                                    <strong>Consentement</strong> : localisation
                                    précise, notifications, cookies non
                                    essentiels, communications marketing (si
                                    activées).
                                </li>
                                <li>
                                    <strong>Intérêt légitime</strong> :
                                    sécurité, lutte anti-abus, amélioration du
                                    service.
                                </li>
                                <li>
                                    <strong>Obligation légale</strong> :
                                    conservation imposée par la réglementation
                                    (si applicable).
                                </li>
                            </ul>
                        </section>

                        <section id="retention" style={styles.section}>
                            <h2 style={styles.h2}>6. Durées de conservation</h2>
                            <p style={styles.p}>
                                Les données sont conservées pour la durée
                                nécessaire aux finalités, puis supprimées ou
                                anonymisées. Exemple de grille (à adapter à ton
                                fonctionnement réel) :
                            </p>

                            <div style={styles.tableWrap}>
                                <table style={styles.table}>
                                    <thead>
                                        <tr>
                                            <th style={styles.th}>Catégorie</th>
                                            <th style={styles.th}>
                                                Durée indicative
                                            </th>
                                            <th style={styles.th}>Détail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={styles.td}>
                                                <strong>
                                                    Données de compte
                                                </strong>
                                            </td>
                                            <td style={styles.td}>
                                                Durée du compte + 30 jours
                                            </td>
                                            <td style={styles.td}>
                                                Suppression à la demande / après
                                                suppression, purge différée pour
                                                sécurité & restauration.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>
                                                <strong>
                                                    Messages & contenus
                                                </strong>
                                            </td>
                                            <td style={styles.td}>
                                                Durée du compte
                                            </td>
                                            <td style={styles.td}>
                                                À adapter : suppression par
                                                l’utilisateur, ou anonymisation
                                                après fermeture du compte.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>
                                                <strong>Localisation</strong>
                                            </td>
                                            <td style={styles.td}>
                                                Temps nécessaire
                                            </td>
                                            <td style={styles.td}>
                                                Idéalement en temps réel /
                                                stockage limité (ex: dernière
                                                position récente).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>
                                                <strong>Logs sécurité</strong>
                                            </td>
                                            <td style={styles.td}>
                                                6 à 12 mois
                                            </td>
                                            <td style={styles.td}>
                                                Pour prévention fraude, sécurité
                                                et investigations.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={styles.td}>
                                                <strong>Support</strong>
                                            </td>
                                            <td style={styles.td}>
                                                12 à 24 mois
                                            </td>
                                            <td style={styles.td}>
                                                Historique des échanges pour
                                                suivi et qualité de service.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div style={styles.callout}>
                                <p style={styles.calloutTitle}>✅ Très carré</p>
                                <p style={styles.calloutText}>
                                    Si tu as des paiements/abonnements plus
                                    tard, ajoute une ligne “données de
                                    facturation” + durée légale.
                                </p>
                            </div>
                        </section>

                        <section id="recipients" style={styles.section}>
                            <h2 style={styles.h2}>
                                7. Destinataires des données
                            </h2>
                            <p style={styles.p}>
                                Les données sont accessibles uniquement aux
                                personnes habilitées (équipe Movenco) et, si
                                nécessaire, aux prestataires techniques
                                (sous-traitants) listés ci-dessous, dans la
                                limite de leurs missions.
                            </p>
                        </section>

                        <section id="processors" style={styles.section}>
                            <h2 style={styles.h2}>
                                8. Sous-traitants (exemples)
                            </h2>
                            <ul style={styles.ul}>
                                <li>
                                    <strong>
                                        Hébergement / base de données
                                    </strong>{" "}
                                    : {hostingProvider} (à compléter).
                                </li>
                                <li>
                                    <strong>Stockage médias</strong> :
                                    Cloudinary (si utilisé).
                                </li>
                                <li>
                                    <strong>Vérification SMS</strong> : Sinch /
                                    Twilio (selon intégration).
                                </li>
                                <li>
                                    <strong>Email transactionnel</strong> :
                                    Brevo (si utilisé).
                                </li>
                            </ul>
                            <p style={styles.p}>
                                Chaque sous-traitant est tenu contractuellement
                                à des obligations de confidentialité et de
                                sécurité.
                            </p>
                        </section>

                        <section id="transfers" style={styles.section}>
                            <h2 style={styles.h2}>
                                9. Transferts hors Union Européenne
                            </h2>
                            <p style={styles.p}>
                                Certains prestataires peuvent traiter des
                                données hors de l’UE. Dans ce cas, nous mettons
                                en place des garanties appropriées (par exemple,
                                clauses contractuelles types) conformément au
                                RGPD.
                            </p>
                            <div style={styles.callout}>
                                <p style={styles.calloutTitle}>📌 À vérifier</p>
                                <p style={styles.calloutText}>
                                    Selon tes fournisseurs (Cloudinary / SMS /
                                    analytics), précise les pays et les
                                    garanties mises en place.
                                </p>
                            </div>
                        </section>

                        <section id="security" style={styles.section}>
                            <h2 style={styles.h2}>10. Sécurité</h2>
                            <ul style={styles.ul}>
                                <li>Chiffrement en transit (HTTPS/TLS).</li>
                                <li>
                                    Contrôles d’accès, authentification, gestion
                                    des rôles.
                                </li>
                                <li>
                                    Journalisation et surveillance anti-abus.
                                </li>
                                <li>
                                    Mesures de sauvegarde et de restauration (si
                                    mises en place).
                                </li>
                                <li>
                                    Principe de minimisation : seules les
                                    données nécessaires sont traitées.
                                </li>
                            </ul>
                        </section>

                        <section id="rights" style={styles.section}>
                            <h2 style={styles.h2}>11. Vos droits (RGPD)</h2>
                            <p style={styles.p}>
                                Vous disposez des droits suivants : accès,
                                rectification, suppression, opposition,
                                limitation, portabilité, et retrait du
                                consentement (lorsqu’il s’applique).
                            </p>
                            <div style={styles.callout}>
                                <p style={styles.calloutTitle}>
                                    📩 Exercer vos droits
                                </p>
                                <p style={styles.calloutText}>
                                    Contact : <strong>{dpoEmail}</strong>. Nous
                                    pouvons demander une preuve d’identité en
                                    cas de doute raisonnable.
                                </p>
                            </div>
                        </section>

                        <section id="minors" style={styles.section}>
                            <h2 style={styles.h2}>12. Mineurs</h2>
                            <p style={styles.p}>
                                Le service est destiné à des utilisateurs
                                capables de consentir au traitement de leurs
                                données. Si tu cibles des mineurs, il faut
                                définir des règles spécifiques (âge minimal,
                                consentement parental, etc.).
                            </p>
                            <div style={styles.callout}>
                                <p style={styles.calloutTitle}>⚠️ À décider</p>
                                <p style={styles.calloutText}>
                                    Indique un âge minimum d’accès (ex: 16+ ou
                                    18+) selon ton positionnement.
                                </p>
                            </div>
                        </section>

                        <section id="cookies" style={styles.section}>
                            <h2 style={styles.h2}>13. Cookies / traceurs</h2>
                            <p style={styles.p}>
                                Sur le site vitrine, nous utilisons soit aucun
                                traceur, soit uniquement des cookies strictement
                                nécessaires. Si des outils d’audience/marketing
                                sont ajoutés, un bandeau de consentement sera
                                mis en place.
                            </p>
                        </section>

                        <section
                            id="contact"
                            style={{ ...styles.section, borderBottom: "none" }}
                        >
                            <h2 style={styles.h2}>14. Contact & CNIL</h2>
                            <p style={styles.p}>
                                Contact : <strong>{controllerEmail}</strong>
                                <br />
                                Vous pouvez également déposer une réclamation
                                auprès de la CNIL (autorité française de
                                protection des données).
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
                        <Link href="/terms" style={styles.link}>
                            Terms
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
