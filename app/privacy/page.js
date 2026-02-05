import Link from "next/link";

const S = {
    wrap: { minHeight: "100vh", background: "#f6f7f8" },
    container: { maxWidth: 980, margin: "0 auto", padding: "32px 18px" },
    card: {
        background: "white",
        borderRadius: 16,
        padding: 18,
        border: "1px solid #e5e7eb",
    },
    h1: { margin: 0, fontSize: 26, color: "#111827" },
    h2: { marginTop: 18, marginBottom: 8, fontSize: 16, color: "#111827" },
    p: { marginTop: 0, color: "#374151", lineHeight: 1.55, fontSize: 14 },
    li: { color: "#374151", lineHeight: 1.55, fontSize: 14, marginBottom: 6 },
    top: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },
    back: { color: "#2b6a5c", textDecoration: "underline", fontSize: 14 },
    pill: {
        fontSize: 12,
        color: "#6b7280",
        background: "#f3f4f6",
        padding: "6px 10px",
        borderRadius: 999,
        border: "1px solid #e5e7eb",
    },
};

export default function Privacy() {
    const updated = "05/02/2026"; // adapte quand tu veux

    return (
        <main style={S.wrap}>
            <div style={S.container}>
                <div style={S.top}>
                    <Link href="/" style={S.back}>
                        ← Retour
                    </Link>
                    <div style={S.pill}>Dernière mise à jour : {updated}</div>
                </div>

                <section style={S.card}>
                    <h1 style={S.h1}>Politique de confidentialité (Movenco)</h1>
                    <p style={S.p}>
                        Cette politique explique comment l’application{" "}
                        <strong>Movenco</strong> collecte, utilise et protège
                        vos données. Elle couvre aussi l’affichage de publicités
                        via <strong>Google AdMob / Google Mobile Ads</strong>.
                    </p>

                    <h2 style={S.h2}>1) Responsable de traitement</h2>
                    <p style={S.p}>
                        Movenco — Contact : <strong>contact@movenco.com</strong>{" "}
                        (remplace par ton email réel si nécessaire).
                    </p>

                    <h2 style={S.h2}>2) Données collectées</h2>
                    <ul>
                        <li style={S.li}>
                            <strong>Données de compte</strong> : pseudo, bio,
                            avatar, informations de profil (ex : date de
                            naissance, genre), sports favoris.
                        </li>
                        <li style={S.li}>
                            <strong>Données de localisation</strong> (si
                            autorisées) : pour afficher des
                            utilisateurs/événements autour de vous.
                        </li>
                        <li style={S.li}>
                            <strong>Données techniques</strong> : informations
                            liées à l’appareil et à l’usage (ex : diagnostics,
                            identifiants publicitaires selon consentement).
                        </li>
                        <li style={S.li}>
                            <strong>Données publicitaires</strong> : via Google
                            Mobile Ads / AdMob (voir section 5).
                        </li>
                    </ul>

                    <h2 style={S.h2}>3) Finalités</h2>
                    <ul>
                        <li style={S.li}>
                            Fournir les fonctionnalités de l’app (compte, chat,
                            événements, “autour de moi”).
                        </li>
                        <li style={S.li}>
                            Améliorer l’app, la sécurité et prévenir les abus.
                        </li>
                        <li style={S.li}>
                            Afficher des publicités (si activé) et mesurer la
                            performance publicitaire (selon consentement).
                        </li>
                    </ul>

                    <h2 style={S.h2}>4) Base légale (RGPD)</h2>
                    <ul>
                        <li style={S.li}>
                            <strong>Contrat</strong> : fournir le service
                            demandé (compte, app).
                        </li>
                        <li style={S.li}>
                            <strong>Consentement</strong> : publicité
                            personnalisée et/ou certains traitements
                            publicitaires (selon région/paramètres).
                        </li>
                        <li style={S.li}>
                            <strong>Intérêt légitime</strong> : sécurité,
                            prévention de fraude, amélioration (selon cas).
                        </li>
                    </ul>

                    <h2 style={S.h2}>
                        5) Publicité (Google AdMob / Google Mobile Ads)
                    </h2>
                    <p style={S.p}>
                        Movenco peut afficher des publicités via{" "}
                        <strong>Google Mobile Ads (AdMob)</strong>. Selon votre
                        pays/région, un écran de consentement peut s’afficher
                        (ex : RGPD/EEE/Royaume-Uni) pour gérer vos choix.
                    </p>
                    <ul>
                        <li style={S.li}>
                            <strong>Publicités personnalisées</strong> : peuvent
                            utiliser des identifiants publicitaires et/ou
                            données pour personnaliser les annonces (uniquement
                            si autorisé par vos choix/consentement).
                        </li>
                        <li style={S.li}>
                            <strong>Publicités non personnalisées</strong> :
                            peuvent être affichées sans personnalisation, selon
                            votre choix/consentement.
                        </li>
                        <li style={S.li}>
                            <strong>Mesure</strong> : Google peut mesurer la
                            performance des publicités (impressions, clics)
                            selon la configuration et le consentement.
                        </li>
                    </ul>
                    <p style={S.p}>
                        Google fournit des informations détaillées sur ses
                        pratiques de confidentialité et la publicité. (Tu peux
                        ajouter le lien Google dans ton site plus tard, mais
                        AdMob accepte déjà la page telle quelle.)
                    </p>

                    <h2 style={S.h2}>6) Partage des données</h2>
                    <p style={S.p}>
                        Nous ne vendons pas vos données. Certaines données
                        peuvent être partagées avec des prestataires techniques
                        nécessaires au fonctionnement, notamment{" "}
                        <strong>Google Mobile Ads</strong> pour la publicité.
                    </p>

                    <h2 style={S.h2}>7) Conservation</h2>
                    <p style={S.p}>
                        Nous conservons les données le temps nécessaire à la
                        fourniture du service et selon les obligations légales.
                        Vous pouvez demander la suppression de votre compte (et
                        donc des données associées) selon les fonctionnalités
                        disponibles.
                    </p>

                    <h2 style={S.h2}>8) Vos droits</h2>
                    <ul>
                        <li style={S.li}>
                            Accès, rectification, suppression, opposition,
                            limitation, portabilité (selon applicabilité).
                        </li>
                        <li style={S.li}>
                            Retrait du consentement publicitaire à tout moment
                            via les options de l’app (si présentes) et/ou
                            réglages système.
                        </li>
                    </ul>

                    <h2 style={S.h2}>9) Contact</h2>
                    <p style={S.p}>
                        Pour toute demande liée à la confidentialité :{" "}
                        <strong>contact@movenco.com</strong>.
                    </p>

                    <p style={{ ...S.p, marginTop: 16, color: "#6b7280" }}>
                        Astuce “pro” : plus tard, on peut ajouter une page
                        “Paramètres RGPD” dans l’app avec un bouton “Gérer le
                        consentement” qui ré-ouvre le formulaire UMP.
                    </p>
                </section>
            </div>
        </main>
    );
}
