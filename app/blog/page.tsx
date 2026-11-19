import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import CrispChat from "../components/chat/CrispChat";
import MainFooter from "../components/footer/MainFooter";
import Nav from "../components/MobileNav";
import { blogPosts } from "../lib/blog-posts";
import { londonLocations } from "../lib/location";

export const metadata: Metadata = {
  title: "Storage and Moving Blog | KXH Storage & Logistics London",
  description:
    "Practical guides on storage, packing, moving and decluttering in London from KXH Storage & Logistics.",
  alternates: { canonical: "https://kxhlogistics.co.uk/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <CrispChat />
      <Nav />
      <main className="min-h-screen bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-slate-50 py-14 text-center">
          <div className="mx-auto max-w-3xl px-5">
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              KXH Storage and Moving Blog
            </h1>
            <p className="mt-4 leading-7 text-slate-600">
              Practical guides on storing, packing and moving in London.
            </p>
          </div>
        </section>
        <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <Image
                src={post.image.src}
                alt={post.image.alt}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-lg font-bold text-slate-950">{post.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                <p className="mt-3 text-sm font-semibold text-emerald-700">Read article</p>
              </div>
            </Link>
          ))}
        </section>
        <MainFooter locations={londonLocations} />
      </main>
    </>
  );
}
