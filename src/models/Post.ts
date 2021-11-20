export interface Post {
    id: number;
    // reference to an id of a user
    createdBy: number;
    content: string;
}
