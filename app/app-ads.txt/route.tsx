export const runtime = "nodejs"; // safe
export const dynamic = "force-static";

export async function GET() {
    // ✅ Remplace la ligne ci-dessous par celle fournie par AdMob
    const body = `google.com, pub-2905713812989990, DIRECT, f08c47fec0942fa0
`;

    return new Response(body, {
        status: 200,
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
}
