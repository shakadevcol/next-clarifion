export async function POST() {
    const random = Math.floor(Math.random() * 2);

    if (random) {
        return Response.json({
            message: "successful",
            transactionId: "abc123",
        });
    }

    return Response.json(
        {
            message: "An error occurred. Try again.",
        },
        { status: 503 }
    );
}
