import Image from "next/image";
import Link from "next/link";

import CrispChat from "../chat/CrispChat";
import MainFooter from "../footer/MainFooter";
import Nav from "../MobileNav";
import TestimonialsSection from "../TestimonialsSection";
import TrustpilotPill from "../trustpilot/TrustpilotPill";
import TrustpilotJsonLd from "./TrustPilotJsonLD";
import { londonLocations } from "../../lib/location";
import { CONTACT_NUMBERS } from "../../lib/contact";
import { SITE, type SeoLandingData } from "../../lib/seo-types";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function SeoLandingPage({ page }: { page: SeoLandingData }) {
  const url = `${SITE}/${page.slug}`;

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    serviceType: page.serviceType,
    description: page.metaDescription,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: "KXH Storage & Logistics",
      url: SITE,
    },
    areaServed: { "@type": "City", name: "London" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
      { "@type": "ListItem", position: 3, name: page.eyebrow, item: url },
    ],
  };

  return (
    <>
      <CrispChat />
      <Nav />

      <main className="min-h-screen bg-white text-slate-900">
        <JsonLd data={service} />
        <JsonLd data={breadcrumb} />
        <TrustpilotJsonLd />

        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-6xl overflow-x-auto px-5 pt-4 text-xs text-slate-500 sm:px-6 sm:pt-6 sm:text-sm lg:px-8"
        >
          <Link href="/" className="transition hover:text-emerald-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="transition hover:text-emerald-700">Services</Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-slate-700">{page.eyebrow}</span>
        </nav>

        <section className="border-b border-slate-200 bg-slate-50 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {page.eyebrow}
            </div>
            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-6 sm:text-5xl">
              {page.h1}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              {page.lead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/get-a-quote?service=storage"
                className="w-full rounded-xl bg-emerald-700 px-6 py-4 text-center font-semibold text-white shadow-lg transition hover:bg-emerald-800 sm:w-auto"
              >
                {page.ctaLabel}
              </Link>
              {CONTACT_NUMBERS.map((contact) => (
                <a
                  key={contact.href}
                  href={contact.href}
                  className="w-full rounded-xl border border-slate-300 bg-white px-6 py-4 text-center font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
                >
                  Call {contact.label}
                </a>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <TrustpilotPill />
            </div>
            <div className="mt-12">
              <Image
                src={page.image.src}
                alt={page.image.alt}
                width={1200}
                height={800}
                quality={80}
                priority
                sizes="(max-width: 768px) 100vw, 960px"
                className="h-auto w-full rounded-2xl border border-slate-200 object-cover shadow-sm"
              />
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-5 py-14 sm:px-6 sm:py-20">
          {page.sections.map((section, index) => (
            <section key={section.heading} className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 leading-8 text-slate-700">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {index === 1 && page.secondImage && (
                <Image
                  src={page.secondImage.src}
                  alt={page.secondImage.alt}
                  width={1200}
                  height={800}
                  quality={75}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="mt-8 h-auto w-full rounded-2xl border border-slate-200 object-cover shadow-sm"
                />
              )}
            </section>
          ))}

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-950">Related KXH services</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {page.related.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-semibold text-emerald-700 hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </article>

        <TestimonialsSection />

        <section className="border-t border-emerald-800 bg-emerald-800 py-14 text-center text-white sm:py-20">
          <div className="mx-auto max-w-2xl px-5 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight !text-white sm:text-4xl">
              Get a storage quote for your items
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-200">
              Tell us what you need to store and where to collect it from. We
              come back with a quote based on your items, locations and storage
              term.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/get-a-quote?service=storage"
                className="w-full rounded-xl bg-emerald-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-emerald-500 sm:w-auto sm:px-8"
              >
                {page.ctaLabel}
              </Link>
              {CONTACT_NUMBERS.map((contact) => (
                <a
                  key={contact.href}
                  href={contact.href}
                  className="w-full rounded-xl border border-slate-300 bg-white px-6 py-4 text-center font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
                >
                  Call {contact.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50 py-12">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                  <summary className="cursor-pointer font-semibold">{faq.question}</summary>
                  <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <MainFooter locations={londonLocations} />
      </main>
    </>
  );
}
