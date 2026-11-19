import Image from "next/image";
import Link from "next/link";

import CrispChat from "../chat/CrispChat";
import MainFooter from "../footer/MainFooter";
import Nav from "../MobileNav";
import { londonLocations } from "../../lib/location";
import { CONTACT_NUMBERS } from "../../lib/contact";
import { SITE, type BlogPostData } from "../../lib/seo-types";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function BlogPostPage({ post }: { post: BlogPostData }) {
  const url = `${SITE}/blog/${post.slug}`;
  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    mainEntityOfPage: url,
    image: `${SITE}${post.image.src}`,
    author: { "@type": "Organization", name: "KXH Storage & Logistics", url: SITE },
    publisher: { "@type": "Organization", name: "KXH Storage & Logistics", url: SITE },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <CrispChat />
      <Nav />
      <main className="min-h-screen bg-white text-slate-900">
        <JsonLd data={article} />
        <JsonLd data={breadcrumb} />

        <nav aria-label="Breadcrumb" className="mx-auto max-w-3xl px-5 pt-4 text-xs text-slate-500 sm:px-6 sm:pt-6 sm:text-sm">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-emerald-700">Blog</Link>
        </nav>

        <article className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            {post.readMinutes} min read
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            By KXH Storage &amp; Logistics ·{" "}
            <time dateTime={post.datePublished}>
              {new Date(post.datePublished).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </time>
          </p>
          <Image
            src={post.image.src}
            alt={post.image.alt}
            width={1200}
            height={800}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="mt-8 h-auto w-full rounded-2xl border border-slate-200 object-cover shadow-sm"
          />

          {post.sections.map((s) => (
            <section key={s.heading} className="mt-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 leading-8 text-slate-700">{p}</p>
              ))}
              {s.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
                  {s.bullets.map((b) => (<li key={b}>{b}</li>))}
                </ul>
              )}
            </section>
          ))}

          <section className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-xl font-bold text-slate-950">Need storage with collection?</h2>
            <p className="mt-3 leading-7 text-slate-700">
              See how it works on our{" "}
              <Link href={post.landingLink.href} className="font-semibold text-emerald-700 hover:underline">
                {post.landingLink.label}
              </Link>{" "}
              page, or get a quote for your items.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href="/get-a-quote?service=storage" className="rounded-xl bg-emerald-700 px-6 py-3 text-center font-semibold text-white hover:bg-emerald-800">
                Get a storage quote
              </Link>
              {CONTACT_NUMBERS.map((c) => (
                <a key={c.href} href={c.href} className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50">
                  Call {c.label}
                </a>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">Frequently asked questions</h2>
            <div className="mt-5 space-y-3">
              {post.faqs.map((f) => (
                <details key={f.question} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <summary className="cursor-pointer font-semibold">{f.question}</summary>
                  <p className="mt-3 leading-7 text-slate-600">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-bold text-slate-950">Keep reading</h2>
            <ul className="mt-3 space-y-2">
              {post.related.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-semibold text-emerald-700 hover:underline">{l.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </article>

        <MainFooter locations={londonLocations} />
      </main>
    </>
  );
}
