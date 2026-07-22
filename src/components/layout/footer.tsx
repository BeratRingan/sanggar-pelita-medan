// src/components/layout/footer.tsx

import { siteConfig } from "@/lib/site-config";
import { MapPin, Mail, Phone } from "lucide-react";
import { SiInstagram, SiTiktok } from "@icons-pack/react-simple-icons";
import type { IconType } from "@icons-pack/react-simple-icons";

// Mapping icon di luar component (hanya sekali render)
const socialIcons: Record<string, IconType> = {
  Instagram: SiInstagram,
  TikTok: SiTiktok,
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Helper untuk membuat WhatsApp link
  const createWhatsAppLink = (phone: string) => {
    const cleanPhone = phone.replace(/[+\s-]/g, "");
    return `https://wa.me/${cleanPhone}`;
  };

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              {siteConfig.name}
            </h3>
            <p className="text-sm font-medium text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-1">
              <p>{siteConfig.description}</p>
              <p className="text-sm text-muted-foreground">{siteConfig.founded}</p>
              <p className="text-sm text-muted-foreground">{siteConfig.schedule}</p>
              <p className="text-sm text-muted-foreground pt-1">
                {siteConfig.mission}
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-sm">
              {/* Addresses */}
              {siteConfig.contact.address.map((address) => (
                <li key={address} className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{address}</span>
                </li>
              ))}
              
              {/* WhatsApp */}
              {siteConfig.contact.whatsapp.map((phone) => (
                <li key={phone} className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a
                    href={createWhatsAppLink(phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              
              {/* Email */}
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Ikuti Kami
            </h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.socials.map((social) => {
                const Icon = socialIcons[social.name];
                return (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Kunjungi ${social.name} Sanggar Pelita Medan`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                      <span>{social.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
            <span>
              © {currentYear} {siteConfig.name}. Semua hak cipta dilindungi.
            </span>
            
            {siteConfig.developer && (
              <>
                <span className="hidden sm:inline text-muted-foreground/50">|</span>
                <span>
                  Website Design & Development by{" "}
                  <a
                    href={siteConfig.developer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    {siteConfig.developer.name}
                  </a>
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}