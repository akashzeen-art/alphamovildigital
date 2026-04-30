interface PageBannerProps {
  title: string;
  description?: string | string[];
}

export default function PageBanner({ title, description }: PageBannerProps) {
  const descriptionLines = Array.isArray(description) ? description : description ? [description] : [];

  return (
    <section className="page_banner py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="section_head section-head mb-6 text-foreground">{title}</h1>
        {descriptionLines.length > 0 && (
          <div className="space-y-4">
            {descriptionLines.map((line, idx) => (
              <p key={idx} className="section_content section-content max-w-4xl">
                {line}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

