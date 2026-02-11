import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "Suppression de compte | Movenco",
    description:
        "Comment supprimer votre compte Movenco et quelles données sont supprimées.",
    robots: { index: true, follow: true },
};

const SUPPORT_EMAIL = "movencoapp@gmail.com";

// ✅ Ajuste si besoin selon ton app
const INAPP_PATH_FR = "Profil → Paramètres → Supprimer mon compte";
const INAPP_PATH_EN = "Profile → Settings → Delete my account";

// ✅ Cadre clair (recommandé)
const DELETION_EFFECT = "immédiate (désactivation du compte)";
const FULL_PURGE_MAX_DAYS = 30;

// ✅ Conservation “raisonnable” (à adapter à ton backend réel)
const SECURITY_LOGS_RETENTION = "6 à 12 mois (journaux techniques / anti-abus)";

export default function DeleteAccountPage() {
    return (
        <main style={{ maxWidth: 860, margin: "0 auto", padding: "48px 20px" }}>
            <header style={{ marginBottom: 24 }}>
                <h1 style={{ fontSize: 36, lineHeight: 1.1, marginBottom: 10 }}>
                    Suppression de compte
                </h1>
                <p style={{ color: "#6B7280", margin: 0 }}>
                    Cette page explique comment supprimer votre compte Movenco
                    et ce qui est supprimé.
                </p>
            </header>

            <section
                style={{
                    border: "1px solid #E5E7EB",
                    borderRadius: 16,
                    padding: 18,
                    marginBottom: 18,
                    background: "#FAFAFA",
                }}
            >
                <h2 style={{ fontSize: 20, marginTop: 0 }}>
                    Supprimer son compte depuis l’application
                </h2>

                <p style={{ marginTop: 10, marginBottom: 0 }}>
                    Chemin : <strong>{INAPP_PATH_FR}</strong>
                </p>

                <ol style={{ margin: "10px 0 0 18px" }}>
                    <li>Ouvrez l’app Movenco</li>
                    <li>Ouvrez le menu indiqué ci-dessus</li>
                    <li>
                        Touchez <strong>Supprimer mon compte</strong>
                    </li>
                    <li>Confirmez la suppression</li>
                </ol>

                <p style={{ color: "#6B7280", marginTop: 12 }}>
                    Une fois confirmée, la suppression est irréversible.
                </p>
            </section>

            <section style={{ marginBottom: 18 }}>
                <h2 style={{ fontSize: 20 }}>Données supprimées</h2>
                <ul style={{ margin: "10px 0 0 18px" }}>
                    <li>
                        Votre compte et vos informations de profil (nom, avatar,
                        etc.)
                    </li>
                    <li>Vos préférences et paramètres liés au compte</li>
                    <li>
                        Vos contenus associés au compte (selon les
                        fonctionnalités de l’app)
                    </li>
                </ul>
            </section>

            <section style={{ marginBottom: 18 }}>
                <h2 style={{ fontSize: 20 }}>
                    Données pouvant être conservées (cas limités)
                </h2>
                <p style={{ color: "#6B7280", marginTop: 10 }}>
                    Pour des raisons de sécurité, de modération ou d’obligations
                    légales, certaines données peuvent être conservées
                    temporairement ou anonymisées :
                </p>
                <ul style={{ margin: "10px 0 0 18px" }}>
                    <li>
                        <strong>Journaux techniques / sécurité</strong> :{" "}
                        {SECURITY_LOGS_RETENTION}
                    </li>
                    <li>
                        <strong>Contenu signalé</strong> : peut être conservé le
                        temps du traitement/modération, puis supprimé ou
                        anonymisé
                    </li>
                    <li>
                        <strong>Contraintes légales</strong> : si applicable,
                        conservation minimale imposée par la loi
                    </li>
                </ul>
            </section>

            <section style={{ marginBottom: 18 }}>
                <h2 style={{ fontSize: 20 }}>Délais</h2>
                <p style={{ marginTop: 10 }}>
                    La suppression est <strong>{DELETION_EFFECT}</strong> après
                    confirmation. La purge complète des données peut prendre
                    jusqu’à <strong>{FULL_PURGE_MAX_DAYS} jours</strong>
                    (selon les contraintes techniques et de sécurité).
                </p>
            </section>

            <section
                style={{
                    border: "1px solid #E5E7EB",
                    borderRadius: 16,
                    padding: 18,
                    background: "#FFFFFF",
                }}
            >
                <h2 style={{ fontSize: 20, marginTop: 0 }}>Besoin d’aide ?</h2>
                <p style={{ marginTop: 10 }}>
                    Contact support :{" "}
                    <a
                        href={`mailto:${SUPPORT_EMAIL}`}
                        style={{ fontWeight: 700 }}
                    >
                        {SUPPORT_EMAIL}
                    </a>
                </p>
                <p style={{ color: "#6B7280", marginTop: 10 }}>
                    Consultez aussi notre{" "}
                    <Link
                        href="/privacy"
                        style={{ textDecoration: "underline" }}
                    >
                        Politique de confidentialité
                    </Link>
                    .
                </p>
            </section>

            <hr
                style={{
                    border: "none",
                    borderTop: "1px solid #E5E7EB",
                    margin: "28px 0",
                }}
            />

            <section>
                <h2 style={{ fontSize: 20 }}>English</h2>
                <p style={{ color: "#6B7280", marginTop: 6 }}>
                    How to delete your Movenco account
                </p>

                <h3 style={{ fontSize: 16, marginTop: 14 }}>In-app deletion</h3>
                <p style={{ marginTop: 10, marginBottom: 0 }}>
                    Path: <strong>{INAPP_PATH_EN}</strong>
                </p>
                <ol style={{ margin: "10px 0 0 18px" }}>
                    <li>Open the Movenco app</li>
                    <li>Open the menu shown above</li>
                    <li>
                        Tap <strong>Delete my account</strong>
                    </li>
                    <li>Confirm</li>
                </ol>

                <h3 style={{ fontSize: 16, marginTop: 14 }}>Data removed</h3>
                <ul style={{ margin: "10px 0 0 18px" }}>
                    <li>
                        Your account and profile information (name, avatar,
                        etc.)
                    </li>
                    <li>Your account-related preferences and settings</li>
                    <li>
                        Your account-associated content (depending on app
                        features)
                    </li>
                </ul>

                <h3 style={{ fontSize: 16, marginTop: 14 }}>
                    Data that may be retained (limited cases)
                </h3>
                <ul style={{ margin: "10px 0 0 18px" }}>
                    <li>
                        <strong>Security/technical logs</strong>:{" "}
                        {SECURITY_LOGS_RETENTION}
                    </li>
                    <li>
                        <strong>Reported content</strong>: may be retained for
                        moderation then deleted/anonymized
                    </li>
                    <li>
                        <strong>Legal obligations</strong>: if applicable
                    </li>
                </ul>

                <p style={{ marginTop: 12 }}>
                    Support:{" "}
                    <a
                        href={`mailto:${SUPPORT_EMAIL}`}
                        style={{ fontWeight: 700 }}
                    >
                        {SUPPORT_EMAIL}
                    </a>
                </p>
            </section>
        </main>
    );
}
