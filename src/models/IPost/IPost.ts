export interface IPost {
    id: number,
    title: string,
    body: number,
    tags: string[],
    reactions: {
        likes: number,
        dislikes: number
    },
    views: number,
    userId: number
}