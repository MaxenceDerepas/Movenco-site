import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Suppression de compte — Movenco",
    description:
        "Comment supprimer votre compte Movenco et ce qu’il advient de vos données.",
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

export default function DeleteAccountPage() {
    const year = new Date().getFullYear();
    const updatedAt = "20/02/2026";
    const contactEmail = "movencoapp@gmail.com";

    return (
        <main style={styles.page}>
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
                            Supprimer votre compte Movenco
                        </h1>
                        <p style={styles.subtitle}>
                            Vous pouvez demander la suppression de votre compte
                            directement dans l’application Movenco ou en
                            contactant le support depuis cette page.
                        </p>
                        <div style={styles.pillRow}>
                            <span style={styles.pill}>
                                🗑️ Suppression de compte
                            </span>
                            <span style={styles.pill}>
                                📱 Disponible dans l’app
                            </span>
                            <span style={styles.pill}>🌐 Page d’aide web</span>
                            <span style={styles.pill}>
                                📅 Mise à jour : {updatedAt}
                            </span>
                        </div>
                    </div>
                </section>

                <article style={styles.content}>
                    <section style={styles.section}>
                        <h2 style={styles.h2}>
                            Comment supprimer votre compte (dans l’app)
                        </h2>
                        <ul style={styles.ul}>
                            <li>Ouvrez Movenco et connectez-vous.</li>
                            <li>Allez dans votre Profil / Paramètres.</li>
                            <li>Appuyez sur « Supprimer mon compte ».</li>
                            <li>Confirmez la demande de suppression.</li>
                        </ul>

                        <div style={styles.calloutWarn}>
                            <p style={styles.calloutTitle}>Important</p>
                            <p style={styles.calloutText}>
                                La suppression du compte est définitive. Une
                                fois confirmée, vous perdrez l’accès à votre
                                compte Movenco.
                            </p>
                        </div>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.h2}>Ce qui est supprimé</h2>
                        <p style={styles.p}>
                            Lorsque votre compte est supprimé, Movenco supprime
                            ou nettoie les données liées, notamment :
                        </p>
                        <ul style={styles.ul}>
                            <li>
                                Votre compte utilisateur et l’accès au profil
                            </li>
                            <li>
                                Votre avatar (photo de profil), lorsqu’il est
                                disponible
                            </li>
                            <li>
                                Vos relations de blocage (dans les deux sens)
                            </li>
                            <li>Vos codes de vérification</li>
                            <li>Les événements créés par vous</li>
                            <li>
                                Les chats de groupe liés aux événements que vous
                                avez créés (et les messages associés)
                            </li>
                            <li>Votre participation aux événements rejoints</li>
                        </ul>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.h2}>Que deviennent les messages</h2>
                        <ul style={styles.ul}>
                            <li>
                                Les conversations privées (DM) sont retirées de
                                votre côté (« supprimé pour moi »).
                            </li>
                            <li>
                                Si les deux participants ont supprimé le même
                                DM, la conversation et les messages peuvent être
                                supprimés définitivement.
                            </li>
                            <li>
                                Les conversations de groupe sont mises à jour
                                pour retirer votre compte. Pour les événements
                                que vous avez créés, les groupes associés sont
                                supprimés avec l’événement.
                            </li>
                        </ul>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.h2}>
                            Ce qui peut être conservé temporairement
                        </h2>
                        <p style={styles.p}>
                            Certaines données techniques limitées peuvent rester
                            temporairement dans des sauvegardes ou des journaux
                            de sécurité pour des raisons légales, de prévention
                            de la fraude ou techniques. Ces données ne sont pas
                            utilisées pour réactiver votre compte.
                        </p>
                    </section>

                    <section
                        style={{ ...styles.section, borderBottom: "none" }}
                    >
                        <h2 style={styles.h2}>
                            Besoin d’aide ou impossible d’accéder à l’app ?
                        </h2>
                        <p style={styles.p}>
                            Si vous ne pouvez pas vous connecter et souhaitez
                            quand même supprimer votre compte, contactez le
                            support :
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
                                Vous pouvez indiquer l’email du compte / le
                                numéro de téléphone utilisé dans Movenco pour
                                nous aider à retrouver votre compte.
                            </p>
                        </div>

                        <p style={styles.p}>
                            Consultez aussi notre{" "}
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
                            pour les détails sur le traitement des données
                            personnelles.
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

          @media (max-width: 980px) {
            .layout { grid-template-columns: 1fr !important; }
          }
        `}</style>
            </div>
        </main>
    );
}
