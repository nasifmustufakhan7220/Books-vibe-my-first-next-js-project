# 📚 Book Vibe

A modern and responsive book-management web application built with
**Next.js**, **TypeScript**, **Tailwind CSS**, and **DaisyUI**. The
application allows users to explore books, view detailed book
information, add books to their reading list, and manage wishlist
actions through a simple and user-friendly interface.

------------------------------------------------------------------------

## 🔗 Live Demo

-   **Live Website:**  https://books-vibe-my-first-next-js-project.vercel.app/
-   **Repository:**  https://github.com/nasifmustufakhan7220/Books-vibe-my-first-next-js-project

------------------------------------------------------------------------

## 📖 Project Overview

**Book Vibe** is a book discovery and reading-list application. It
provides users with a clean interface to browse books, open individual
book details, and interact with books using separate actions such as:

-   Adding a book to the **Read Books** list
-   Adding a book to the **Wishlist**
-   Viewing book information through a dynamic route
-   Navigating between different sections using the common navbar
-   Using tab to see **Read Books** list and **Wishlist Books** list
-   Adding a graph to visualized pages of each books based on **Read Books** list

The project was developed as a practice project to strengthen my
understanding of **Next.js App Router, TypeScript, Context API,
client-side interactions, reusable components, and responsive UI
design**.

------------------------------------------------------------------------

## ✨ Current Features

### 1. Responsive Navbar

-   A common navbar is implemented in the root layout.
-   The navbar is visible across the application's different routes.
-   Includes navigation links for:
    -   Home
    -   Listed Books
    -   Pages to Read
-   Includes Sign In and Sign Up buttons for UI purposes.

> Authentication functionality can be added in a future update.

### 2. Banner Section

-   A visually appealing banner section is available on the homepage.
-   Includes a headline, supporting book visual, and a call-to-action
    button.
-   The current buttons are primarily used for design and presentation.

### 3. Books Listing Section

-   Book information is fetched from a local JSON file.
-   The JSON file is stored inside the project's `public` folder.
-   Books are displayed using reusable book-card components.
-   Each card contains information such as:
    -   Book title
    -   Author
    -   Category
    -   Tags
    -   Rating
    -   Book cover image

### 4. Dynamic Book Details Route

-   A dynamic route is used to display individual book details.
-   Each book can be opened through its unique book ID.
-   The details page fetches book data from the local JSON file.
-   The page displays information such as:
    -   Book title
    -   Author
    -   Category
    -   Review
    -   Tags
    -   Total pages
    -   Publisher
    -   Publication year
    -   Rating
    -   Book cover

### 5. Read Books Functionality

-   A **Read Books** button is available on the book details page.
-   The button has its own event handler.
-   Selected books are added to the read-books collection.
-   The Context API is used to manage read-book state across components.

### 6. Wishlist Functionality

-   A separate **Wishlist Books** button is available on the book details 
    page.
-   The wishlist button has an independent event handler.
-   Wishlist data is managed separately from the read-books collection.
-   The implementation is designed to support future wishlist-related
    features.

### 7. Short By functionality

-   A separate button to sort books list based on number of pages, rating 
    and year of publishing

### 8. Context API

-   React Context API is used for shared book-related state.
-   It helps avoid passing the same state through multiple component
    levels.
-   Read books and wishlist information can be accessed by the
    components that need them.

### 9. Toast Notifications

-   `react-toastify` is used to display toast messages.
-   Toasts can be used to provide feedback after actions such as:
    -   Adding a book to the read list
    -   Adding a book to the wishlist
    -   Preventing duplicate entries
    -   Handling invalid actions

### 10. Icons

-   `react-icons` is used for several interface icons.
-   Icons help improve the visual appearance and usability of buttons
    and cards.

### 11. Chart Integration

-   `react-chartjs` / `react-recharts` chart functionality is planned or
    integrated for displaying graphical information.
-   The chart section can be used to visualize reading-related
    statistics.

------------------------------------------------------------------------

## 🛠️ Technologies Used

  Technology       Purpose
  ---------------- -----------------------------------------
  Next.js          React framework and routing
  TypeScript       Static typing and safer development
  React            Building reusable UI components
  Tailwind CSS     Utility-first styling
  DaisyUI          Ready-made UI components
  Context API      Managing shared application state
  React Toastify   Displaying toast notifications
  Lucid Icons      Adding icons to the interface
  Recharts         Creating charts and data visualizations
  JSON             Local book data storage

------------------------------------------------------------------------

## 🗂️ Suggested Project Structure
```
my-first-next-js-project/
├── public/
│   └── booksData.json
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── global.css
│   │   │
│   │   ├── books/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── [bookId]/
│   │   │       ├── page.tsx
│   │   │       └── loading.tsx
│   │   │
│   │   ├── listed-books/
│   │   │   └── page.tsx
│   │   │
│   │   └── pages-to-read/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── BookDetailsBtn/
│   │   │   ├── ListedBooks/
│   │   │   │   └── ReadOrWish.tsx
│   │   │   ├── ReadBook.tsx
│   │   │   └── WishlistBooks.tsx
│   │   │
│   │   ├── BookDetailsCard/
│   │   │   └── BookDetails.tsx
│   │   │
│   │   ├── HomePage/
│   │   │   ├── Banner.tsx
│   │   │   ├── BookCard.tsx
│   │   │   └── BooksContent.tsx
│   │   │
│   │   └── Shared/
│   │       └── page.tsx
│   │
│   ├── assets/
│   │   ├── book.ico
│   │   ├── hero_img.jpg
│   │   └── pngwing1.jpg
│   │
│   ├── context/
│   │   └── BookContext.tsx
│   │
│   └── types/
│       └── book.types.ts
│
├── .env
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

------------------------------------------------------------------------

## 🚀 Getting Started

### 1. Clone the Repository

``` bash
git clone https://github.com/nasifmustufakhan7220/Books-vibe-my-first-next-js-project.git
```

### 2. Open the Project Directory

``` bash
cd Books-vibe-my-first-next-js-project
```

### 3. Install Dependencies

``` bash
npm install
```

### 4. Run the Development Server

``` bash
npm run dev
```

### 5. Open the Application

Visit:

``` text
http://localhost:3000
```

------------------------------------------------------------------------

## 📦 Available Scripts

  Script            Description
  ----------------- ---------------------------------------
  `npm run dev`     Starts the development server
  `npm run build`   Creates an optimized production build
  `npm run start`   Starts the production server
  `npm run lint`    Runs the linting process

------------------------------------------------------------------------

## 🧠 Key Learning Outcomes

Through this project, I practiced and improved my understanding of:

-   Next.js App Router
-   Root layouts and shared UI
-   Dynamic routes
-   Fetching local JSON data
-   TypeScript interfaces and props
-   Client and server component concepts
-   React Context API
-   State management
-   Event handlers
-   Reusable React components
-   Responsive design with Tailwind CSS
-   DaisyUI components
-   Toast notifications
-   Data visualization with charts

------------------------------------------------------------------------

## 🔮 Upcoming Features

The following section is reserved for additional features that will be
added later.

### Additional Feature 1

**Feature name:** `<!-- Add feature name -->`

**Description:**

```{=html}
<!-- Explain what the feature does and why it is useful. -->
```
**Implementation details:**

-   ```{=html}
    <!-- Add implementation detail -->
    ```

-   ```{=html}
    <!-- Add implementation detail -->
    ```

### Additional Feature 2

**Feature name:** `<!-- Add feature name -->`

**Description:**

```{=html}
<!-- Explain what the feature does and why it is useful. -->
```
**Implementation details:**

-   ```{=html}
    <!-- Add implementation detail -->
    ```

-   ```{=html}
    <!-- Add implementation detail -->
    ```

### Additional Feature 3

**Feature name:** `<!-- Add feature name -->`

**Description:**

```{=html}
<!-- Explain what the feature does and why it is useful. -->
```
**Implementation details:**

-   ```{=html}
    <!-- Add implementation detail -->
    ```

-   ```{=html}
    <!-- Add implementation detail -->
    ```
------------------------------------------------------------------------

## 📸 Screenshots

Add screenshots of the main sections here.

### Homepage

```{=html}
<!-- Add homepage screenshot here -->
```
### Books Listing Page

```{=html}
<!-- Add books listing screenshot here -->
```
### Book Details Page

```{=html}
<!-- Add book details screenshot here -->
```
### Additional Feature Screenshots

```{=html}
<!-- Add screenshots for the remaining features here -->
```

------------------------------------------------------------------------

## 🧪 Future Improvements

Possible improvements for future versions:

-   Add authentication and user accounts
-   Persist read books and wishlist data using a database
-   Add search functionality
-   Add category-based filtering
-   Add sorting by rating, title, or publication year
-   Add pagination or infinite scrolling
-   Improve accessibility
-   Add loading and error states
-   Add form validation
-   Add unit and integration tests
-   Improve SEO and metadata
-   Add dark mode
-   Improve mobile navigation
-   Add persistent storage using a backend or browser storage

------------------------------------------------------------------------

## 🤝 Contribution

This project was created for learning and practice. Suggestions,
feedback, and improvements are welcome.

If you want to contribute:

1.  Fork the repository.
2.  Create a new branch.
3.  Make your changes.
4.  Commit your changes.
5.  Open a pull request.

------------------------------------------------------------------------

## 👨‍💻 Author

**Nasif Mustufa Khan**

-   GitHub: https://github.com/nasifmustufakhan7220
-   Email: https://github.com/nasifmustufakhan7220
-   Simple Portfolio: https://nasifmustufakhan7220.github.io/Simple-protfolio/



