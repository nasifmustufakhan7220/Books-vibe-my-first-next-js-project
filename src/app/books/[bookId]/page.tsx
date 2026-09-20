import BookDetails from "@/components/BookDetailsCard/BookDetails";
import IBookType from "@/types/book.type";

interface IParamsProps{
    params: Promise<{bookId: string}>
}

const getBooks = async()=>{
    const res = await fetch("http://localhost:3000/booksData.json");
    return res.json();
}

const BookDetailsPage = async({params}:IParamsProps) => {
    const books: IBookType[] = await getBooks();
    const {bookId} = await params;

    const book = books.find((book:IBookType) => book.bookId === Number(bookId))as IBookType;
    
    return (
        <div className="mt-8">
            <BookDetails book={book} />
        </div>
    );
};

export default BookDetailsPage;