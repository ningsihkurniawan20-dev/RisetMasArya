"use client";

import { useState } from "react";
import { Share2, Link2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const shareSocial = (platform: string) => {
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    };
    if (urls[platform]) {
      window.open(urls[platform], "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500 flex items-center gap-1">
        <Share2 className="h-4 w-4" /> Bagikan:
      </span>
      <Button variant="ghost" size="sm" onClick={() => shareSocial("twitter")}>
        Twitter
      </Button>
      <Button variant="ghost" size="sm" onClick={() => shareSocial("facebook")}>
        Facebook
      </Button>
      <Button variant="ghost" size="sm" onClick={() => shareSocial("linkedin")}>
        LinkedIn
      </Button>
      <Button variant="ghost" size="icon" onClick={copyLink} title="Salin tautan">
        {copied ? <Check className="h-4 w-4 text-green-600" /> : <Link2 className="h-4 w-4" />}
      </Button>
    </div>
  );
}
