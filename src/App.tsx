import { useState } from "react";
import { AbacProvider } from "react-abac";

import { Post } from "./models/Post";
import users from "./data/users.json";
import "./styles.css";
import { User } from "./models/User";
import { rules } from "./abac.config";
import Intro from "./components/Intro";
import Options from "./components/Options";
import EditPost from "./components/EditPost";
import DeletePost from "./components/DeletePost";

export default function App() {
    const [post, setPost] = useState<Post>({
        id: 1,
        createdBy: 1,
        content: "",
    });
    const [user, setUser] = useState<User>(users[0] as User);
    const setPostOwner = (user: User) =>
        setPost((post) => ({ ...post, createdBy: user.id }));

    return (
        <AbacProvider
            rules={rules}
            user={user}
            roles={user.roles}
            permissions={user.permissions}
        >
            <div className="App">
                <Intro />
                <Options
                    post={post}
                    user={user}
                    setPostOwner={setPostOwner}
                    setUser={setUser}
                />
                <EditPost post={post} />
                <DeletePost post={post} />
            </div>
        </AbacProvider>
    );
}
