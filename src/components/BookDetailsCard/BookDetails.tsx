import IBookType from "@/types/book.type";
import {BookOpen, ChevronRight, Heart, Star } from "lucide-react";
import Image from "next/image";

interface IBookDetailsProps{
    book: IBookType;
}

const BookDetails = ({ book }:IBookDetailsProps) => {
  return (
    <section className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
        {/* Book Cover */}
        <div className="relative flex min-h-95 items-center justify-center overflow-hidden bg-[#f9f9f9] p-8">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-300/10 blur-3xl" />

          <div className="relative w-48 overflow-hidden rounded-xl shadow-2xl shadow-black/40 transition duration-500 hover:scale-105">
            <Image
              src={book.image}
              alt={book.bookName}
              width={400}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Book Information */}
        <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-10">
          {/* Heading */}
          <div>
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="rounded-full  bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black ">
                {book.category}
              </span>

              <span className="text-xs font-bold text-black">
                ID #{String(book.bookId).padStart(3, "0")}
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              {book.bookName}
            </h2>

            <p className="mt-2 text-base font-medium text-black">
              By {book.author}
            </p>

            {/* Rating */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1.5 text-sm font-semibold dark:text-white">
                <Star size={16} fill="currentColor" />
                {book.rating}
              </div>

              <span className="text-sm text-black">
                Excellent reader rating
              </span>
            </div>
          </div>

          {/* Book Stats */}
          <div className="grid grid-cols-3 gap-2 rounded-2xl border p-4 dark:border-slate-800 dark:bg-slate-900">
            <div>
              <p className="text-xs text-slate-400">Pages</p>
              <p className="mt-1 text-sm font-bold text-slate-800 dark:text-white">
                {book.totalPages}
              </p>
            </div>

            <div className="border-x border-slate-200 px-3 dark:border-slate-700">
              <p className="text-xs text-slate-400">Published</p>
              <p className="mt-1 text-sm font-bold text-slate-800 dark:text-white">
                {book.yearOfPublishing}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Publisher</p>
              <p className="mt-1 truncate text-sm font-bold text-slate-800 dark:text-white">
                {book.publisher}
              </p>
            </div>
          </div>

          {/* Review */}
          <div>
            <h3 className="mb-2 text-lg font-bold text-black">
              About this book
            </h3>

            <p className="text-sm leading-7 text-black">
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-black"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#172B2A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#274541] dark:bg-emerald-700 dark:hover:bg-emerald-600">
              <BookOpen size={17} />
              Read Book
              <ChevronRight size={16} />
            </button>

            <button
              aria-label="Bookmark book"
              className="flex  items-center justify-center gap-2 rounded-xl border  px-5 py-3 text-sm font-semibold transition  dark:bg-slate-900 dark:text-slate-200"
            >
              <Heart size={17} />
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
