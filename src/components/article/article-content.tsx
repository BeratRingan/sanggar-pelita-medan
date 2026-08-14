import DOMPurify from "isomorphic-dompurify";

type ArticleContentProps = {
  content: string;
};

export function ArticleContent({ content }: ArticleContentProps) {
  const cleanContent = DOMPurify.sanitize(content);

  return (
    <div
      className="
        mx-auto mt-10 max-w-2xl leading-8
        [&_h1]:mb-6 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:leading-tight
        [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:leading-tight
        [&_p]:mb-4
        [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6
        [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6
        [&_li]:mb-2
        [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic
      "
      dangerouslySetInnerHTML={{ __html: cleanContent }}
    />
  );
}