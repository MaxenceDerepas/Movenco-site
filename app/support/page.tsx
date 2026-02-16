import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "Support — Movenco",
    description:
        "Support Movenco : contact, problèmes fréquents, suppression de compte et confidentialité.",
    robots: { index: true, follow: true },
};

const palette = {
    primary: "#2b6a5c",
    bg: "#f6f7f8",
    text: "#0f172a",
    sub: "#64748b",
    border: "#e5e7eb",
    card: "#ffffff",
    danger: "#B00020",
};

const SUPPORT_EMAIL = "movencoapp@gmail.com";

export default function SupportPage() {
    return (
        <main
            style={{
                minHeight: "100vh",
                background: palette.bg,
                color: palette.text,
            }}
        >
            <div
                style={{
                    maxWidth: 980,
                    margin: "0 auto",
                    padding: "32px 18px 54px",
                }}
            >
                <header
                    style={{
                        border: `1px solid ${palette.border}`,
                        background: palette.card,
                        borderRadius: 22,
                        padding: 18,
                        boxShadow: "0 20px 70px rgba(15,23,42,0.09)",
                    }}
                >
                    <h1
                        style={{
                            margin: 0,
                            fontSize: 28,
                            fontWeight: 980,
                            letterSpacing: -0.6,
                        }}
                    >
                        Support
                    </h1>
                    <p
                        style={{
                            margin: "10px 0 0",
                            color: palette.sub,
                            lineHeight: 1.7,
                        }}
                    >
                        Besoin d’aide avec Movenco (connexion, localisation,
                        événements, chat, pubs) ? Voici les réponses rapides +
                        un contact direct.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: 10,
                            flexWrap: "wrap",
                            marginTop: 14,
                        }}
                    >
                        <a
                            href={`mailto:${SUPPORT_EMAIL}`}
                            style={{
                                textDecoration: "none",
                                padding: "10px 12px",
                                borderRadius: 999,
                                border: `1px solid rgba(43,106,92,0.22)`,
                                background: "rgba(43,106,92,0.08)",
                                color: palette.primary,
                                fontWeight: 950,
                                fontSize: 13,
                            }}
                        >
                            ✉️ Contacter le support
                        </a>

                        <Link
                            href="/privacy"
                            style={{
                                textDecoration: "none",
                                padding: "10px 12px",
                                borderRadius: 999,
                                border: `1px solid ${palette.border}`,
                                background: "rgba(255,255,255,0.9)",
                                color: palette.text,
                                fontWeight: 900,
                                fontSize: 13,
                            }}
                        >
                            🔒 Confidentialité
                        </Link>

                        <Link
                            href="/delete-account"
                            style={{
                                textDecoration: "none",
                                padding: "10px 12px",
                                borderRadius: 999,
                                border: `1px solid rgba(176,0,32,0.22)`,
                                background: "rgba(176,0,32,0.06)",
                                color: palette.danger,
                                fontWeight: 950,
                                fontSize: 13,
                            }}
                        >
                            🗑️ Suppression de compte
                        </Link>
                    </div>
                </header>

                <section
                    style={{
                        marginTop: 14,
                        border: `1px solid ${palette.border}`,
                        background: palette.card,
                        borderRadius: 22,
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            padding: 16,
                            borderBottom: `1px solid ${palette.border}`,
                        }}
                    >
                        <h2
                            style={{
                                margin: 0,
                                fontSize: 16,
                                fontWeight: 980,
                                letterSpacing: -0.2,
                            }}
                        >
                            FAQ rapide
                        </h2>
                        <p
                            style={{
                                margin: "8px 0 0",
                                color: palette.sub,
                                lineHeight: 1.7,
                                fontSize: 14,
                            }}
                        >
                            Les points qui bloquent le plus souvent lors de la
                            validation App Store / Google Play.
                        </p>
                    </div>

                    <div style={{ padding: 16 }}>
                        <details
                            style={{
                                padding: "10px 0",
                                borderBottom: `1px solid ${palette.border}`,
                            }}
                        >
                            <summary
                                style={{ cursor: "pointer", fontWeight: 950 }}
                            >
                                Je ne vois pas les utilisateurs / événements
                                “autour de moi”
                            </summary>
                            <p
                                style={{
                                    margin: "10px 0 0",
                                    color: palette.sub,
                                    lineHeight: 1.7,
                                }}
                            >
                                Vérifie les autorisations de localisation dans
                                les réglages du téléphone. Sur iOS : Réglages →
                                Confidentialité → Service de localisation →
                                Movenco.
                            </p>
                        </details>

                        <details
                            style={{
                                padding: "10px 0",
                                borderBottom: `1px solid ${palette.border}`,
                            }}
                        >
                            <summary
                                style={{ cursor: "pointer", fontWeight: 950 }}
                            >
                                Problème de connexion / code SMS
                            </summary>
                            <p
                                style={{
                                    margin: "10px 0 0",
                                    color: palette.sub,
                                    lineHeight: 1.7,
                                }}
                            >
                                Assure-toi que le numéro est correct (indicatif
                                pays) et que ton réseau SMS est ok. Si le code
                                n’arrive pas, contacte le support avec ton
                                numéro (sans mot de passe).
                            </p>
                        </details>

                        <details
                            style={{
                                padding: "10px 0",
                                borderBottom: `1px solid ${palette.border}`,
                            }}
                        >
                            <summary
                                style={{ cursor: "pointer", fontWeight: 950 }}
                            >
                                Publicités : comment changer mes choix ?
                            </summary>
                            <p
                                style={{
                                    margin: "10px 0 0",
                                    color: palette.sub,
                                    lineHeight: 1.7,
                                }}
                            >
                                Dans l’app : Profil → Paramètres de
                                confidentialité. Sur iOS, le suivi publicitaire
                                dépend aussi du réglage Apple (ATT).
                            </p>
                        </details>

                        <details style={{ padding: "10px 0" }}>
                            <summary
                                style={{ cursor: "pointer", fontWeight: 950 }}
                            >
                                Comment supprimer mon compte ?
                            </summary>
                            <p
                                style={{
                                    margin: "10px 0 0",
                                    color: palette.sub,
                                    lineHeight: 1.7,
                                }}
                            >
                                La suppression se fait dans l’app (Profil →
                                Supprimer mon compte). La procédure détaillée
                                est ici :{" "}
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
                        </details>
                    </div>
                </section>

                <section
                    style={{
                        marginTop: 14,
                        color: palette.sub,
                        fontSize: 13,
                        lineHeight: 1.7,
                    }}
                >
                    <p style={{ margin: 0 }}>
                        Pour les demandes liées aux données personnelles (RGPD)
                        :{" "}
                        <a
                            href={`mailto:${SUPPORT_EMAIL}`}
                            style={{
                                color: palette.primary,
                                fontWeight: 950,
                                textDecoration: "none",
                            }}
                        >
                            {SUPPORT_EMAIL}
                        </a>
                        .
                    </p>
                </section>
            </div>
        </main>
    );
}
