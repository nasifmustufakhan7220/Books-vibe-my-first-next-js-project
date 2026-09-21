"use client";

import ReadOrWish from "@/components/BookDetailsBtn/ListedBooks/ReadOrWish";
import { BooksContest } from "@/context/BookContext";
import IBookType from "@/types/book.type";
import { useContext, useState } from "react";

const ListedBooksPage = () => {
  const { readBooks, whishlist } = useContext(BooksContest);
  const [sortBy, setSortBy] = useState<"Rating" | "Pages" | "Year">("Rating");

  const sortBooks = (books:IBookType[])=>{
    const sortedBooks = [...books];

    if(sortBy === "Rating"){
       sortedBooks.sort((a,b)=> b.rating - a.rating);
    }else if(sortBy === "Pages"){
       sortedBooks.sort((a,b)=> b.totalPages - a.totalPages);
    }else if(sortBy === "Year"){
       sortedBooks.sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  }

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishList = sortBooks(whishlist);

  return (
    <div className="max-w-263 mx-auto">
      <div className="bg-[#F3F3F3] p-5 mt-7 flex justify-center text-4xl font-bold  rounded-2xl">
        Books
      </div>

      <div className="mt-7 flex justify-center">
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value as "Rating" | "Pages" | "Year")} className="select  select-success">
          <option value={"Rating"}>Rating</option>
          <option value={"Pages"}>Number of Pages</option>
          <option value={"Year"}>Year of Published</option>
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
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((read, index) => (
              <ReadOrWish key={read.bookId + index} read={read} />
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
          {sortedWishList.length > 0 ? (
            sortedWishList.map((read, index) => (
              <ReadOrWish key={read.bookId + index} read={read} />
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
