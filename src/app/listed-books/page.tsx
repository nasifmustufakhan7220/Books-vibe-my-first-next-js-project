"use client";

import ReadOrWish from "@/components/BookDetailsBtn/ListedBooks/ReadOrWish";
import { BooksContest } from "@/context/BookContext";
import { useContext } from "react";

const ListedBooksPage = () => {
  const { readBooks, whishlist } = useContext(BooksContest);
  return (
    <div className="max-w-263 mx-auto">
      <div className="bg-[#F3F3F3] p-5 mt-7 flex justify-center text-4xl font-bold  rounded-2xl">
        Books
      </div>

      <div className="mt-7 flex justify-center">
        <select defaultValue="Pick a Runtime" className="select  select-success">
          <option>Sort By</option>
          <option>npm</option>
          <option>Bun</option>
          <option>yarn</option>
        </select>
      </div>

      {/* name of each tab group should be unique */}
      <div className="mt-20 tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readBooks.length > 0 ? (
            readBooks.map((read) => (
              <ReadOrWish key={read.bookId} read={read} />
            ))
          ) : (
            <p className="bg-[#F3F3F3] p-3 mt-7 flex justify-center text-2xl font-bold max-w-6xl mx-auto rounded-4xl">
              No Books Read yet
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {whishlist.length > 0 ? (
            whishlist.map((read) => (
              <ReadOrWish key={read.bookId} read={read} />
            ))
          ) : (
            <p className="bg-[#F3F3F3] p-3 mt-7 flex justify-center text-2xl font-bold max-w-6xl mx-auto rounded-4xl">
              No Books Wish yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
