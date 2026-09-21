'use client'
import { BooksContest } from "@/context/BookContext";
import IBookType from "@/types/book.type";
import { BookOpen, ChevronRight } from "lucide-react";
import { useContext } from "react";


const WishlistBooks = ({book}:{book: IBookType}) => {

    const {whishlist, setWishList} = useContext(BooksContest);
    const handelWishListBook = ()=>{
        setWishList([...whishlist, book]);
    }


    return (
        <button onClick={handelWishListBook} className="flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white bg-[#50B1C9] transition hover:bg-[#4ea2b8] cursor-pointer">
              <BookOpen size={17} />
              Wish list
              <ChevronRight size={16} />
            </button>
    );
};

export default WishlistBooks;