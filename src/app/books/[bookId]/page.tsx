import BookDetails from "@/components/BookDetailsCard/BookDetails";
import IBookType from "@/types/book.type";

interface IParamsProps{
    params: Promise<{bookId: string}>
}

const getBooks = async()=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        return res.json();
    } catch (error) {
        console.error("Error fetching Book Dynsmic pages: ", error);
        return [];
    }
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