'use client'

import IBookType from "@/types/book.type";
import React, { createContext, ReactNode, useState } from "react";

interface IDataProps{
    readBooks: IBookType[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBookType[]>>
    whishlist: IBookType[];
    setWishList: React.Dispatch<React.SetStateAction<IBookType[]>>
}

export const BooksContest = createContext<IDataProps>({
    readBooks:[],
    setReadBooks:()=>{},
    whishlist:[],
    setWishList:()=>{}
});

const ContextProvider = ({children}:{children: ReactNode}) => {

    const [readBooks, setReadBooks] = useState<IBookType[]>([]);
    const [whishlist, setWishList] = useState<IBookType[]>([]);

    const sharedData:IDataProps={
        readBooks,
        setReadBooks,
        whishlist,
        setWishList,
    }

    return (
        <BooksContest.Provider value={sharedData}>
            {children}
        </BooksContest.Provider>
    );
};

export default ContextProvider;