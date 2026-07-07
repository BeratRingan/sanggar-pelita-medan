import { getArticleBySlug } from "@/services/public-article.service";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
type ArticlePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ArticlePage({
    params,
}: ArticlePageProps) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);
    if (!article) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-4xl px-6 py-16">
            {article.image_url && (
                <div className="relative mb-10 h-80 w-full
                overflow-hiden rounded-xl">
                    <Image
                        src={article.image_url}
                        alt={article.title}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
            )}
            <h1 className="text-4xl font-bold">
                {article.title}
            </h1>

            <p className="mt-4 text-muted-foreground">
                {new
            Date(article.created_at).toLocaleDateString("id-ID"
            , {
                day: "numeric",
                month: "long",
                year: "numeric",
            })}
            </p>

            <article className="mt-10 whitespace-pre-wrap leading-8">
                {article.content}
            </article>
            <div className="mt-12">
                <Link
                    href="/"
                    className="font-medium text-primary transition
                    hover:underline"
                >
                    Kembali Ke Beranda
                </Link>
            </div>
        </main>
    );
}