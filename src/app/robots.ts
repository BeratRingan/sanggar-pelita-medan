import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        //sementara kosong - akan diisi nanti
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/admin",
        },
    };
}