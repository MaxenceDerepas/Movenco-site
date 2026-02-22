// app/delete-data/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
    title: "Suppression des données — Movenco",
    description:
        "Demander la suppression de votre compte Movenco et des données associées.",
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
    container: { maxWidth: 900, margin: "0 auto", padding: "22px 18px 54px" },

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
    pillRow: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 },
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

    content: {
        marginTop: 14,
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
    },
    calloutWarn: {
        marginTop: 12,
        borderRadius: 16,
        border: `1px solid rgba(239,68,68,0.20)`,
        background: "rgba(239,68,68,0.05)",
        padding: 12,
    },
    calloutTitle: {
        margin: 0,
        fontSize: 13,
        fontWeight: 980,
        color: palette.text,
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

export default function DeleteDataPage() {
    const year = new Date().getFullYear();
    const updatedAt = "22/02/2026";
    const contactEmail = "support@movencoapp.com";

    return (
        <main style={styles.page}>
            <div style={styles.container}>
                <header style={styles.nav}>
                    <div style={styles.brand}>
                        <Image
                            src="/logo-movenco.png"
                            alt="Movenco"
                            width={140}
                            height={40}
                            priority
                            style={{
                                height: "44px",
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
                        <h1 style={styles.title}>
                            Suppression des données — Movenco
                        </h1>
                        <p style={styles.subtitle}>
                            Vous pouvez supprimer votre compte et les données
                            associées à tout moment, directement dans
                            l’application ou en contactant le support si vous
                            n’avez plus accès à votre compte.
                        </p>

                        <div style={styles.pillRow}>
                            <span style={styles.pill}>🗑️ Suppression</span>
                            <span style={styles.pill}>📱 Dans l’app</span>
                            <span style={styles.pill}>📩 Support</span>
                            <span style={styles.pill}>
                                📅 Mise à jour : {updatedAt}
                            </span>
                        </div>
                    </div>
                </section>

                <article style={styles.content}>
                    <section style={styles.section}>
                        <h2 style={styles.h2}>
                            1) Supprimer vos données depuis l’application
                        </h2>
                        <ul style={styles.ul}>
                            <li>
                                Ouvrez l’application Movenco et connectez-vous.
                            </li>
                            <li>
                                Allez dans <b>Profil → Paramètres</b>.
                            </li>
                            <li>
                                Choisissez <b>“Supprimer mon compte”</b> puis
                                confirmez.
                            </li>
                        </ul>

                        <div style={styles.calloutWarn}>
                            <p style={styles.calloutTitle}>Important</p>
                            <p style={styles.calloutText}>
                                La suppression du compte est définitive. Une
                                fois confirmée, l’accès au compte Movenco est
                                perdu.
                            </p>
                        </div>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.h2}>
                            2) Si vous n’avez plus accès à votre compte
                        </h2>
                        <p style={styles.p}>
                            Envoyez une demande de suppression à :
                        </p>

                        <div style={styles.callout}>
                            <p style={styles.calloutTitle}>
                                Contact du support
                            </p>
                            <p style={styles.calloutText}>
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
                                Indiquez l’email du compte et/ou le numéro de
                                téléphone utilisé sur Movenco pour nous aider à
                                retrouver votre compte.
                            </p>
                        </div>

                        <p style={styles.p}>
                            La demande est traitée dans un délai maximum de{" "}
                            <b>30 jours</b>.
                        </p>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.h2}>3) Données supprimées</h2>
                        <p style={styles.p}>
                            La suppression du compte entraîne la suppression ou
                            l’anonymisation des données associées, notamment :
                        </p>
                        <ul style={styles.ul}>
                            <li>Compte utilisateur et profil</li>
                            <li>Avatar / photos de profil</li>
                            <li>
                                Messages et conversations
                                (suppression/anonymisation selon le cas)
                            </li>
                            <li>Événements créés et contenus associés</li>
                            <li>Participations aux événements</li>
                            <li>Données de localisation associées au compte</li>
                        </ul>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.h2}>
                            4) Conversations : ce que l’utilisateur peut faire
                        </h2>
                        <ul style={styles.ul}>
                            <li>
                                Vous pouvez{" "}
                                <b>supprimer une conversation de votre côté</b>{" "}
                                (elle disparaît de votre liste).
                            </li>
                            <li>
                                Selon la configuration de Movenco, certains
                                messages peuvent être <b>anonymisés</b> (ex:
                                “Utilisateur supprimé”) plutôt que supprimés
                                immédiatement pour l’autre participant.
                            </li>
                        </ul>
                    </section>

                    <section
                        style={{ ...styles.section, borderBottom: "none" }}
                    >
                        <h2 style={styles.h2}>5) Conservation limitée</h2>
                        <p style={styles.p}>
                            Certaines données techniques peuvent être conservées
                            temporairement dans des sauvegardes ou journaux de
                            sécurité pour des raisons légales, de sécurité ou de
                            prévention des abus, puis supprimées. Aucune de ces
                            données n’est utilisée pour réactiver un compte
                            supprimé.
                        </p>
                    </section>
                </article>

                <footer style={styles.footer}>
                    <div>© {year} Movenco</div>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <Link href="/" style={styles.link}>
                            Accueil
                        </Link>
                        <Link href="/privacy" style={styles.link}>
                            Confidentialité
                        </Link>
                        <Link href="/terms" style={styles.link}>
                            Conditions
                        </Link>
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
        `}</style>
            </div>
        </main>
    );
}
