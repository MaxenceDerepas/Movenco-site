import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
    title: "Support — Movenco",
    description:
        "Support Movenco : contact, FAQ, problèmes fréquents, suppression de compte et confidentialité.",
    robots: { index: true, follow: true },
};

const palette = {
    primary: "#2b6a5c",
    primary2: "#1f4f45",
    bg: "#f6f7f8",
    text: "#0f172a",
    sub: "#64748b",
    border: "#e5e7eb",
    card: "#ffffff",
    danger: "#B00020",
};

const SUPPORT_EMAIL = "movencoapp@gmail.com";

const styles: Record<string, CSSProperties> = {
    page: {
        minHeight: "100vh",
        background: palette.bg,
        color: palette.text,
    },
    container: {
        maxWidth: 980,
        margin: "0 auto",
        padding: "22px 18px 54px",
    },

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
    link: { color: palette.sub, textDecoration: "none", fontSize: 13 },

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

    actionsRow: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        marginTop: 14,
    },
    actionPrimary: {
        textDecoration: "none",
        padding: "10px 12px",
        borderRadius: 999,
        border: `1px solid rgba(43,106,92,0.22)`,
        background: "rgba(43,106,92,0.08)",
        color: palette.primary,
        fontWeight: 950,
        fontSize: 13,
    },
    actionDanger: {
        textDecoration: "none",
        padding: "10px 12px",
        borderRadius: 999,
        border: `1px solid rgba(176,0,32,0.22)`,
        background: "rgba(176,0,32,0.06)",
        color: palette.danger,
        fontWeight: 950,
        fontSize: 13,
    },

    card: {
        marginTop: 14,
        border: `1px solid ${palette.border}`,
        background: palette.card,
        borderRadius: 22,
        overflow: "hidden",
        boxShadow: "0 14px 40px rgba(15,23,42,0.06)",
    },
    cardHead: {
        padding: 16,
        borderBottom: `1px solid ${palette.border}`,
    },
    cardTitle: {
        margin: 0,
        fontSize: 16,
        fontWeight: 980,
        letterSpacing: -0.2,
    },
    cardSub: {
        margin: "8px 0 0",
        color: palette.sub,
        lineHeight: 1.7,
        fontSize: 14,
    },
    cardBody: { padding: 16 },

    details: {
        padding: "10px 0",
        borderBottom: `1px solid ${palette.border}`,
    },
    summary: { cursor: "pointer", fontWeight: 950 },
    p: {
        margin: "10px 0 0",
        color: palette.sub,
        lineHeight: 1.7,
        fontSize: 14,
    },

    callout: {
        marginTop: 14,
        borderRadius: 16,
        border: `1px solid rgba(43,106,92,0.20)`,
        background: "rgba(43,106,92,0.06)",
        padding: 12,
    },
    calloutTitle: {
        margin: 0,
        fontSize: 13,
        fontWeight: 980,
    },
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

export default function SupportPage() {
    const year = new Date().getFullYear();

    return (
        <main style={styles.page}>
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
                        <h1 style={styles.title}>Support</h1>
                        <p style={styles.subtitle}>
                            Besoin d’aide avec Movenco (connexion, localisation,
                            événements, chat, compte) ? Voici les réponses
                            rapides et un contact direct.
                        </p>

                        <div style={styles.metaRow}>
                            <span style={styles.pill}>🛟 Assistance</span>
                            <span style={styles.pill}>📱 App mobile</span>
                            <span style={styles.pill}>🔒 Compte & données</span>
                        </div>

                        <div style={styles.actionsRow}>
                            <a
                                href={`mailto:${SUPPORT_EMAIL}`}
                                style={styles.actionPrimary}
                                className="btnHover"
                            >
                                ✉️ Contacter le support
                            </a>

                            <Link
                                href="/privacy"
                                style={styles.btn}
                                className="btnHover"
                            >
                                🔒 Confidentialité
                            </Link>

                            <Link
                                href="/delete-account"
                                style={styles.actionDanger}
                                className="btnHover"
                            >
                                🗑️ Suppression de compte
                            </Link>
                        </div>
                    </div>
                </section>

                <section style={styles.card}>
                    <div style={styles.cardHead}>
                        <h2 style={styles.cardTitle}>FAQ rapide</h2>
                        <p style={styles.cardSub}>
                            Les points qui bloquent le plus souvent dans
                            l’application.
                        </p>
                    </div>

                    <div style={styles.cardBody}>
                        <details style={styles.details}>
                            <summary style={styles.summary}>
                                Je ne vois pas les utilisateurs / événements
                                “autour de moi”
                            </summary>
                            <p style={styles.p}>
                                Vérifie les autorisations de localisation dans
                                les réglages de ton téléphone, puis relance
                                l’app. Sur iPhone : Réglages → Confidentialité
                                et sécurité → Service de localisation → Movenco.
                            </p>
                        </details>

                        <details style={styles.details}>
                            <summary style={styles.summary}>
                                Problème de connexion / inscription
                            </summary>
                            <p style={styles.p}>
                                Vérifie que le numéro ou l’email saisi est
                                correct. Si tu ne peux plus accéder à ton
                                compte, contacte le support avec l’identifiant
                                utilisé dans Movenco (sans envoyer de mot de
                                passe).
                            </p>
                        </details>

                        <details style={styles.details}>
                            <summary style={styles.summary}>
                                Problème d’avatar / photo de profil
                            </summary>
                            <p style={styles.p}>
                                Vérifie l’autorisation Photos/Galerie sur ton
                                téléphone et ta connexion internet. Les médias
                                sont traités via Cloudinary : si un upload
                                échoue, réessaie quelques secondes plus tard.
                            </p>
                        </details>

                        <details style={styles.details}>
                            <summary style={styles.summary}>
                                Comment signaler un utilisateur ou un contenu ?
                            </summary>
                            <p style={styles.p}>
                                Utilise les options de signalement/blocage
                                disponibles dans l’application. En cas de
                                comportement abusif, tu peux aussi écrire au
                                support avec un maximum de détails (sans
                                partager d’informations sensibles inutiles).
                            </p>
                        </details>

                        <details style={{ padding: "10px 0" }}>
                            <summary style={styles.summary}>
                                Comment supprimer mon compte ?
                            </summary>
                            <p style={styles.p}>
                                La suppression se fait dans l’app (Profil /
                                Paramètres → Supprimer mon compte). La procédure
                                détaillée est disponible sur la page{" "}
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

                        <div style={styles.callout}>
                            <p style={styles.calloutTitle}>
                                ℹ️ État actuel du service
                            </p>
                            <p style={styles.calloutText}>
                                Movenco n’intègre pas de publicité pour le
                                moment. L’app s’appuie sur Vercel (site web),
                                Hostinger (backend API), MongoDB (base de
                                données) et Cloudinary (médias).
                            </p>
                        </div>
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

                <footer style={styles.footer}>
                    <div>© {year} Movenco</div>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <Link href="/" style={styles.link}>
                            Accueil
                        </Link>
                        <Link href="/legal" style={styles.link}>
                            Legal
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
                    </div>
                </footer>

                <style>{`
          .btnHover {
            transition: transform 160ms ease, filter 160ms ease, box-shadow 160ms ease;
          }
          .btnHover:hover {
            transform: translateY(-1px);
            filter: brightness(1.02);
            box-shadow: 0 18px 45px rgba(15,23,42,0.10);
          }
        `}</style>
            </div>
        </main>
    );
}
