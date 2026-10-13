import JsonLd from "@/components/JsonLd";

// Breadcrumb structured data for pages that don't render the visible Breadcrumbs component.
export default function BreadcrumbSchema({ name, path }: { name: string; path: string }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://callpilot.pro" },
          { "@type": "ListItem", position: 2, name, item: `https://callpilot.pro${path}` },
        ],
      }}
    />
  );
}
