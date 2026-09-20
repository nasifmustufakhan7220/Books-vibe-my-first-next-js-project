import IBookType from "@/types/book.type";
import Image from "next/image";
import Link from "next/link";


interface IBookProps{
    book:IBookType;
}

const BookCard = ({ book }:IBookProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Book Image */}
      <div className="relative overflow-hidden bg-base-200">
        <Image
          src={book.image}
          alt={book.bookName}
          width={400}
          height={500}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-700 shadow backdrop-blur">
          {book.category}
        </span>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm text-white backdrop-blur">
          <span className="text-yellow-400">★</span>
          {book.rating}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Title & Author */}
        <div>
          <h2 className="line-clamp-1 text-xl font-bold text-base-content transition-colors group-hover:text-green-600">
            {book.bookName}
          </h2>

          <p className="mt-1 text-sm text-base-content/60">
            by <span className="font-medium">{book.author}</span>
          </p>
        </div>

        {/* Book Info */}
        <div className="grid grid-cols-2 gap-3 rounded-xl bg-base-200 p-3 text-sm">
          <div>
            <p className="text-xs text-base-content/50">Publisher</p>
            <p className="font-semibold">{book.publisher}</p>
          </div>

          <div>
            <p className="text-xs text-base-content/50">Published</p>
            <p className="font-semibold">{book.yearOfPublishing}</p>
          </div>

          <div>
            <p className="text-xs text-base-content/50">Pages</p>
            <p className="font-semibold">{book.totalPages}</p>
          </div>

          <div>
            <p className="text-xs text-base-content/50">Rating</p>
            <p className="font-semibold">★ {book.rating}/5</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
          <button className="btn w-full rounded-xl bg-green-600 text-white transition-all duration-300 hover:bg-green-700 group-hover:shadow-lg">
          View Details →
        </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
