type profile = {
    params: Promise<{ slug?: string[] }>;
};

export default async function ProfilePage({params}: profile) {
    const { slug } = await params;

    

    return (
        <main>
        <h1>Documentation</h1>
        <p>Path: {slug?.join(" / ")}</p>
        </main>
    );
}
