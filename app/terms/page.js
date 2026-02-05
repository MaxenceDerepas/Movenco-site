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

export default function Terms() {
    const updated = "05/02/2026";

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
                    <h1 style={S.h1}>Conditions d’utilisation (Movenco)</h1>
                    <p style={S.p}>
                        En utilisant Movenco, vous acceptez ces conditions.
                        Elles peuvent évoluer.
                    </p>

                    <h2 style={S.h2}>1) Objet</h2>
                    <p style={S.p}>
                        Movenco est une application permettant de découvrir des
                        utilisateurs autour de soi, échanger, et organiser des
                        activités/événements.
                    </p>

                    <h2 style={S.h2}>2) Compte & sécurité</h2>
                    <ul>
                        <li style={S.li}>
                            Vous êtes responsable de la confidentialité de vos
                            accès.
                        </li>
                        <li style={S.li}>
                            Vous vous engagez à fournir des informations exactes
                            et à jour.
                        </li>
                    </ul>

                    <h2 style={S.h2}>3) Règles de conduite</h2>
                    <ul>
                        <li style={S.li}>
                            Pas de harcèlement, contenu illégal, discrimination,
                            menaces.
                        </li>
                        <li style={S.li}>
                            Pas de spam, arnaques, usurpation d’identité.
                        </li>
                        <li style={S.li}>
                            Respect des lois locales et des autres utilisateurs.
                        </li>
                    </ul>

                    <h2 style={S.h2}>4) Contenus & échanges</h2>
                    <p style={S.p}>
                        Vous restez responsable des contenus publiés (messages,
                        posts, images). Movenco peut modérer/supprimer des
                        contenus ou comptes en cas d’abus.
                    </p>

                    <h2 style={S.h2}>5) Événements</h2>
                    <p style={S.p}>
                        Les événements sont organisés par les utilisateurs.
                        Movenco n’est pas responsable des incidents liés aux
                        rencontres. Prenez vos précautions (sécurité, météo,
                        niveau requis, etc.).
                    </p>

                    <h2 style={S.h2}>6) Publicité</h2>
                    <p style={S.p}>
                        L’app peut afficher des publicités. Les paramètres de
                        consentement peuvent varier selon la région.
                    </p>

                    <h2 style={S.h2}>7) Limitation de responsabilité</h2>
                    <p style={S.p}>
                        Movenco est fourni “en l’état”. Dans les limites
                        autorisées par la loi, Movenco ne peut être tenu
                        responsable de dommages indirects, pertes de données, ou
                        incidents entre utilisateurs.
                    </p>

                    <h2 style={S.h2}>8) Contact</h2>
                    <p style={S.p}>
                        Support : <strong>contact@movenco.com</strong>
                    </p>
                </section>
            </div>
        </main>
    );
}
