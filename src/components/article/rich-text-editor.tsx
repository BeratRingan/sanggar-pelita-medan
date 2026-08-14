"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { Extension } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";

const FontSize = Extension.create({
  name: "fontSize",

  addGlobalAttributes() {
    return [
      {
        types: ["textStyle"],
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) =>
              element.style.fontSize || null,
            renderHTML: (attributes) => {
              if (!attributes.fontSize) {
                return {};
              }

              return {
                style: `font-size: ${attributes.fontSize}`,
              };
            },
          },
        },
      },
    ];
  },
});

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
        TextStyle,
        FontSize,
    ],
    content: value,
    immediatelyRender: false,
    // Perubahan 1: Menambahkan properti editorProps untuk styling area ketik internal
    editorProps: {
        attributes: {
            class:
            "min-h-55 w-full cursor-text outline-none focus:outline-none [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:leading-tight [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:leading-tight",
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

        <select
        value={
            editor.isActive("heading", { level: 1 })
            ? "h1"
            : editor.isActive("heading", { level: 2 })
            ? "h2"
            : "paragraph"
        }
        onChange={(e) => {
            const value = e.target.value;

            if (value === "paragraph") {
                editor.chain().focus().setParagraph().run();
                return;
            }

            if (value === "h1") {
                editor.chain().focus().setHeading({ level: 1 }).run();
                return;
            }

            if (value === "h2") {
                editor.chain().focus().setHeading({ level: 2 }).run();
            }
        }}
        className="rounded-md border bg-background px-3 py-1.5 text-sm"
        aria-label="Format teks"
        >
            <option value="paragraph">Normal</option>
            <option value="h1">Judul</option>
            <option value="h2">Subjudul</option>
            </select>

            <button
             type="button"
             onClick={() =>
                editor
                .chain()
                .focus()
                .setMark("textStyle", { fontSize: "12px" })
                .run()
            }
            className="rounded px-3 py-1.5 text-sm hover:bg-muted"
            aria-label="Ukuran kecil"
            >
                Kecil
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
                    onClick={() => {
                        editor.chain().focus().undo().run();
                    }}
                    className="rounded px-3 py-1.5 text-sm hover:bg-muted"
                    aria-label="Urungkan"
                    >
                        ↶
                    </button>

                <button
                  type="button"
                    onClick={() => {
                        editor.chain().focus().redo().run();
                    }}
                    className="rounded px-3 py-1.5 text-sm hover:bg-muted"
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
