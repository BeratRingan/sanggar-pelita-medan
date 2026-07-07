export type ArticleStatus = 
    | "draft"
    | "published";

export interface Article {
    id : string;
    title : string;
    slug: string;
    content: string;
    image_url: string | null;
    status: ArticleStatus;
    published: boolean;
    created_at: string;
    updated_at: string;

}