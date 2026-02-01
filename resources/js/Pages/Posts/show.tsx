import AppLayout from "@/Layouts/App-layout";
import { Post } from "./types";

interface PostsShowProps {
    post: Post;
}

export default function PostsShow({ post }: PostsShowProps) {
    return (
        <AppLayout>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
        </AppLayout>
    );
}