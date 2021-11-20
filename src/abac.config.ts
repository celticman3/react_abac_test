import { Rules } from "react-abac";
import { Post } from "./models/Post";
import { Permission, Role, User } from "./models/User";

export const rules = {
    [Role.ADMIN]: {
        [Permission.EDIT_POST]: true,
        [Permission.DELETE_POST]: true,
    },
    [Role.USER]: {
        [Permission.EDIT_POST]: (post: Post, user?: User) =>
            user && post.createdBy === user.id,
    },
    [Permission.DELETE_POST]: (post: Post, user?: User) =>
        user && post.createdBy === user.id,
};
