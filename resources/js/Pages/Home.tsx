import AppLayout from "@/Layouts/App-layout";
import { Link } from "@inertiajs/react";

export default function Home() {
    return (
        <AppLayout>
            <h1>Home</h1>
            <div>Welcome to homepage</div>
            <Link href="/about">About page</Link>
        </AppLayout>
    );
}