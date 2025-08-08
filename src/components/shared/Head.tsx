import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "@/config/site";

type HeadProps = {
  title?: string;
  description?: string;
  canonicalPath?: string;
};

const Head = ({ title, description, canonicalPath }: HeadProps) => {
  const location = useLocation();

  useEffect(() => {
    const t = title || siteConfig.seo.defaultTitle;
    const d = description || siteConfig.seo.defaultDescription;
    document.title = t;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", d);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const base = siteConfig.url.replace(/\/$/, "");
    canonical.setAttribute("href", `${base}${canonicalPath || location.pathname}`);
  }, [title, description, canonicalPath, location.pathname]);

  return null;
};

export default Head;
