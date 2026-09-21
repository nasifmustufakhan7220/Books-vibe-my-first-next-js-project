'use client'
import { BooksContest } from '@/context/BookContext';
import IBookType from '@/types/book.type';
import { BookOpen, ChevronRight } from 'lucide-react';
import { useContext } from 'react';

const ReadBook = ({book}:{book:IBookType}) => {

    const {readBooks, setReadBooks} = useContext(BooksContest)

    const handelReadBook = ()=>{
        setReadBooks([...readBooks, book]);
    }

    return (
        <div>
            <button onClick={handelReadBook} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#172B2A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#274541] dark:bg-emerald-700 cursor-pointer dark:hover:bg-emerald-600">
              <BookOpen size={17} />
              Read Book
              <ChevronRight size={16} />
            </button>

            
        </div>
    );
};

export default ReadBook;