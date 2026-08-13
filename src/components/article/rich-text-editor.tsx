"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";

type RichTextEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export function RichTextEditor({
  value,
  onChange,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
        StarterKit.configure({
            bulletList: {
                HTMLAttributes: {
                    class: "list-disc pl-6",
                },
            },
            orderedList: {
                HTMLAttributes: {
                    class: "list-decimal pl-6",
                },
            },
            blockquote: {
                HTMLAttributes: {
                    class: "border-l-4 pl-4 italic",
                },
            },
        }),
        TextAlign.configure({
            types: ["heading", "paragraph"],
        }),
    ],
    content: value,
    immediatelyRender: false,
    // Perubahan 1: Menambahkan properti editorProps untuk styling area ketik internal
    editorProps: {
      attributes: {
        class:
          "min-h-55 w-full cursor-text outline-none focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="overflow-hidden rounded-md border">
      <div className="flex flex-wrap gap-1 border-b bg-muted/30 p-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="rounded px-3 py-1.5 text-sm font-bold hover:bg-muted"
          aria-label="Tebal"
        >
          B
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="rounded px-3 py-1.5 text-sm italic hover:bg-muted"
          aria-label="Miring"
        >
          I
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
        className="rounded px-3 py-1.5 text-sm font-semibold hover:bg-muted"
        aria-label="Heading 2"
        >
            H2
        </button>

        <button
          type="button"
          onClick={() => {
            editor.chain().focus().toggleBulletList().run();
        }}
        className="rounded px-3 py-1.5 text-sm hover:bg-muted"
        aria-label="Daftar"
        >
            • List
            </button>

            <button
              type="button"
              onClick={() =>
                editor.chain().focus().setTextAlign("left").run()
            }
            className="rounded px-3 py-1.5 text-sm hover:bg-muted"
            aria-label="Rata kiri"
            >
                𝌆
            </button>

            <button
              type="button"
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
            }
            className="rounded px-3 py-1.5 text-sm hover:bg-muted"
            aria-label="Rata tengah"
            >
                𝌇
            </button>

            <button
              type="button"
              onClick={() =>
                editor.chain().focus().setTextAlign("right").run()
            }
            className="rounded px-3 py-1.5 text-sm hover:bg-muted"
            aria-label="Rata kanan"
            >
                𝌈
            </button>

            <button
             type="button"
             onClick={() => {
                editor.chain().focus().toggleOrderedList().run();
            }}
            className="rounded px-3 py-1.5 text-sm hover:bg-muted"
            aria-label="Daftar bernomor"
            >
                1. List
                </button>

                <button
                  type="button"
                  onClick={() => {
                    editor.chain().focus().toggleBlockquote().run();
                }}
                className="rounded px-3 py-1.5 text-sm hover:bg-muted"
                aria-label="Kutipan"
                >
                    ❝
                    </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="rounded px-3 py-1.5 text-sm hover:bg-muted disabled:opacity-40"
          aria-label="Urungkan"
        >
          ↶
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="rounded px-3 py-1.5 text-sm hover:bg-muted disabled:opacity-40"
          aria-label="Ulangi"
        >
          ↷
        </button>
      </div>

      {/* Perubahan 2: Membungkus EditorContent dengan div ber-class "px-4 py-3" */}
      <div
       className="px-4 py-3 cursor-text"
       onClick={() => editor.commands.focus()}
       >
        <EditorContent
        editor={editor}
        className="min-h-55"
        />
        </div>
    </div>
  );
}
