import AppLayout from "@/Layouts/App-layout";

interface PostsShowProps {
    post: {
        title: string;
        body: string;
    };
}

export default function PostsShow({ post }: PostsShowProps) {
    return (
        <AppLayout>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
        </AppLayout>
    );
}