import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
    title: "Delete Account — Movenco",
    description:
        "How to delete your Movenco account and what happens to your data.",
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
                        <div style={styles.logo}>M</div>
                        <div style={styles.brandName}>Movenco</div>
                    </div>
                    <div style={styles.navLinks}>
                        <Link href="/" style={styles.btn} className="btnHover">
                            ← Home
                        </Link>
                        <Link
                            href="/privacy"
                            style={styles.btn}
                            className="btnHover"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            style={styles.btn}
                            className="btnHover"
                        >
                            Terms
                        </Link>
                    </div>
                </header>

                <section style={styles.hero}>
                    <div style={styles.heroBg} />
                    <div style={styles.heroInner}>
                        <h1 style={styles.title}>
                            Delete your Movenco account
                        </h1>
                        <p style={styles.subtitle}>
                            You can request account deletion directly in the
                            Movenco app or by contacting support from this page.
                        </p>
                        <div style={styles.pillRow}>
                            <span style={styles.pill}>🗑️ Account deletion</span>
                            <span style={styles.pill}>📱 In-app available</span>
                            <span style={styles.pill}>🌐 Web help page</span>
                            <span style={styles.pill}>
                                📅 Updated: {updatedAt}
                            </span>
                        </div>
                    </div>
                </section>

                <article style={styles.content}>
                    <section style={styles.section}>
                        <h2 style={styles.h2}>
                            How to delete your account (in-app)
                        </h2>
                        <ul style={styles.ul}>
                            <li>Open Movenco and sign in to your account.</li>
                            <li>Go to your Profile / Settings.</li>
                            <li>Tap “Delete my account”.</li>
                            <li>Confirm the deletion request.</li>
                        </ul>

                        <div style={styles.calloutWarn}>
                            <p style={styles.calloutTitle}>Important</p>
                            <p style={styles.calloutText}>
                                Account deletion is permanent. Once confirmed,
                                you will lose access to your Movenco account.
                            </p>
                        </div>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.h2}>What is deleted</h2>
                        <p style={styles.p}>
                            When your account is deleted, Movenco deletes or
                            cleans related data, including:
                        </p>
                        <ul style={styles.ul}>
                            <li>Your user account and profile access</li>
                            <li>Your avatar (profile image), when available</li>
                            <li>Your block relationships (both directions)</li>
                            <li>Your verification codes</li>
                            <li>Events created by you</li>
                            <li>
                                Group chats linked to events you created (and
                                related messages)
                            </li>
                            <li>Your participation in joined events</li>
                        </ul>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.h2}>What happens to messages</h2>
                        <ul style={styles.ul}>
                            <li>
                                Private conversations (DMs) are removed from
                                your side (“deleted for me”).
                            </li>
                            <li>
                                If both participants deleted the same DM, the
                                conversation and messages may be permanently
                                removed.
                            </li>
                            <li>
                                Group conversations are updated to remove your
                                account. For events you created, related group
                                chats are deleted with the event.
                            </li>
                        </ul>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.h2}>What may be kept temporarily</h2>
                        <p style={styles.p}>
                            Some limited technical data may remain temporarily
                            in backups or security logs for legal, fraud
                            prevention, or technical reasons. This data is not
                            used to reactivate your account.
                        </p>
                    </section>

                    <section
                        style={{ ...styles.section, borderBottom: "none" }}
                    >
                        <h2 style={styles.h2}>
                            Need help or cannot access the app?
                        </h2>
                        <p style={styles.p}>
                            If you cannot log in and still want your account
                            deleted, contact support:
                        </p>
                        <div style={styles.callout}>
                            <p style={styles.calloutTitle}>Support contact</p>
                            <p style={styles.calloutText}>
                                Email:{" "}
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
                                You can include your account email / phone
                                number used in Movenco to help us locate your
                                account.
                            </p>
                        </div>

                        <p style={styles.p}>
                            See also our{" "}
                            <Link
                                href="/privacy"
                                style={{
                                    color: palette.primary,
                                    fontWeight: 950,
                                    textDecoration: "none",
                                }}
                            >
                                Privacy Policy
                            </Link>{" "}
                            for details about personal data processing.
                        </p>
                    </section>
                </article>

                <footer style={styles.footer}>
                    <div>© {year} Movenco</div>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <Link href="/" style={styles.link}>
                            Home
                        </Link>
                        <Link href="/privacy" style={styles.link}>
                            Privacy
                        </Link>
                        <Link href="/terms" style={styles.link}>
                            Terms
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
