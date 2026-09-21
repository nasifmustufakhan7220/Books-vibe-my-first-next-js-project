import BookCard from "@/components/HomePage/BookCard";
import IBookType from "@/types/book.type";

const getBooks = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    console.log(
  "BASE URL:",
  process.env.NEXT_PUBLIC_SERVER_BASE_URL
);
    return res.json();
    
  } catch (error) {
    console.error("Error fetching books data: ", error);
    return []; 
  }
  
};
const BooksContent = async () => {
  const books:IBookType[] = await getBooks();

  return (
    <div className="max-w-6xl mx-auto mt-8">
        <h1 className="text-3xl font-bold text-center mb-8">Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-4 lg:grid-cols-3 lg:px-8 gap-4">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksContent;
