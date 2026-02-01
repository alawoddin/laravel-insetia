import { Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/App-layout";
import { Post } from "./types";

interface PostsIndexProps {
    posts: Post[];
}

export default function PostsIndex({ posts }: PostsIndexProps) {
    return (
        <AppLayout>
            <h1>Posts</h1>

            {posts.length === 0 ? (
                <p>No posts found.</p>
            ) : (
                <div>
                    {posts.map((post) => (
                        <div key={post.id}>
                            <h2>
                                <Link href={`/posts/${post.id}`}>
                                    {post.title}
                                </Link>
                            </h2>
                            <p>
                                {post.body.substring(0, 200)}
                                {post.body.length > 200 && "..."}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </AppLayout>
    );
}
