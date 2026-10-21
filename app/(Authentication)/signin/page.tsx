"use client";

import { useRouter } from "next/navigation";

export default function LoginButton() {
    const router = useRouter();

    function handleLogin() {
        // Perform and verify authentication first.
        router.push("/dashboard");
    }

    return (
        <>
            <h1>This is the signin page</h1>
            <button onClick={handleLogin}>Log In</button>
        </>

    );
}
