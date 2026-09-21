import IBookType from "@/types/book.type";
import { BookOpen, CalendarDays, FileText, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReadOrWish = ({read}:{read:IBookType}) => {
  return (
    <div>
      {" "}
      <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">
        <div className="flex flex-col gap-6 p-5 sm:p-6 md:flex-row md:gap-8">
          {/* Book Cover */}
          <div className="relative mx-auto w-full max-w-55 shrink-0 md:mx-0 md:w-55">
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-slate-100 shadow-md">
              <Image
                src={read.image}
                alt={read.bookName}
                fill
                sizes="(max-width: 768px) 220px, 220px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Category Badge */}
              <div className="absolute left-3 top-3">
                <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-sm">
                  {read.category}
                </span>
              </div>
            </div>
          </div>

          {/* Book Content */}
          <div className="flex min-w-0 flex-1 flex-col">
            {/* Title and Author */}
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                  Featured Book
                </span>

                <span className="text-xs font-medium text-slate-400">
                  #{read.bookId}
                </span>
              </div>

              <h2 className="text-2xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-indigo-600 sm:text-3xl dark:text-white">
                {read.bookName}
              </h2>

              <p className="mt-2 text-sm font-medium text-slate-500 sm:text-base dark:text-slate-400">
                By {read.author}
              </p>
            </div>

            {/* Rating and Details */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
              <div className="flex items-center gap-1.5">
                <Star size={18} className="fill-amber-400 text-amber-400" />
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  {read.rating}
                </span>
                <span className="text-slate-400">/ 5.0</span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                <FileText size={16} />
                <span>{read.totalPages} Pages</span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                <CalendarDays size={16} />
                <span>{read.yearOfPublishing}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-5 h-px bg-slate-100 dark:bg-slate-800" />

            {/* Publisher */}
            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
              <span className="font-semibold text-slate-700 dark:text-slate-200">
                Publisher:
              </span>

              <span className="text-slate-500 dark:text-slate-400">
                {read.publisher}
              </span>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {read.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-[0.98]"
              >
                <BookOpen size={18} />
                Read Book
              </button>

              <Link href={`/books/${read.bookId}`}>
              
              <button
                type="button"
                className="flex-1 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 active:scale-[0.98] dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                View Details
              </button>
              
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ReadOrWish;
