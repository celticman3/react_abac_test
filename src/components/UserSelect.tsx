import React from "react";
import { findUserById, User } from "../models/User";
import users from "../data/users.json";

interface Props {
    value: User;
    onChange(user: User): any;
}

const UserSelect = ({ value, onChange }: Props) => {
    const handleUserSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (
        e,
    ) => onChange(findUserById(e.target.value));

    return (
        <select value={value.id} onChange={handleUserSelectChange}>
            {users.map((u) => (
                <option key={u.id} value={u.id}>
                    {u.name}
                </option>
            ))}
        </select>
    );
};

export default UserSelect;
