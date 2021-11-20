import users from "../data/users.json";
export interface User {
    id: number;
    name: string;
    roles: Role[];
    permissions: Permission[];
}

export enum Permission {
    EDIT_POST = "EDIT_POST",
    DELETE_POST = "DELETE_POST",
}

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN",
}

export function findUserById(id: string | number) {
    return users.find((user) => Number(id) === user.id) as User;
}
