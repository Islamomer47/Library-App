import React, { useState, useEffect } from "react";
import axios from "axios";

// import "../css/BookCatalog.css";

const BookCatalog = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "", isbn: "" });
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://books-88c23-default-rtdb.firebaseio.com/books.json"
      );
      if (response.data) {
        const booksArray = Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }));
        setBooks(booksArray);
      }
    } catch (error) {
      console.error("Error fetching books: ", error);
    }
  };

  const handleAddBook = async () => {
    try {
      if (newBook.title && newBook.author && newBook.isbn) {
        await axios.post(
          "https://books-88c23-default-rtdb.firebaseio.com/books.json",
          { ...newBook, deleted: false }
        );
        setNewBook({ title: "", author: "", isbn: "" });
        fetchBooks();
      }
    } catch (error) {
      console.error("Error adding book: ", error);
    }
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
    setNewBook(book);
  };

  const handleUpdateBook = async () => {
    try {
      if (editingBook) {
        await axios.put(
          `https://books-88c23-default-rtdb.firebaseio.com/books/${editingBook.id}.json`,
          newBook
        );
        setNewBook({ title: "", author: "", isbn: "" });
        setEditingBook(null);
        fetchBooks();
      }
    } catch (error) {
      console.error("Error updating book: ", error);
    }
  };

  const handleSoftDeleteBook = async (id) => {
    try {
      await axios.put(
        `https://books-88c23-default-rtdb.firebaseio.com/books/${id}.json`,
        { ...books.find((book) => book.id === id), deleted: true }
      );
      fetchBooks();
    } catch (error) {
      console.error("Error soft deleting book: ", error);
    }
  };

  const addInitialBooks = async () => {
    const initialBooks = [
      {
        title: "مقدمة ابن خلدون",
        author: "ابن خلدون",
        isbn: "1289499030",
        url: "https://example.com/book1",
      },
      {
        title: "الحاوي في الطب",
        author: "ابو بكر الرازي",
        isbn: "893847239479",
        url: "https://example.com/book2",
      },
      {
        title: "الأغاني",
        author: "أبو الفرج الأصفهاني",
        isbn: "9781234567890",
        url: "https://example.com/book3",
      },
      {
        title: "كليلة ودمنة",
        author: "ابن المقفع",
        isbn: "9789876543210",
        url: "https://example.com/book4",
      },
      {
        title: "رسالة الغفران",
        author: "أبو العلاء المعري",
        isbn: "9781591234567",
        url: "https://example.com/book5",
      },
      {
        title: "ألف ليلة وليلة",
        author: "غير معروف",
        isbn: "9784567891230",
        url: "https://example.com/book6",
      },
      {
        title: "العقد الفريد",
        author: "ابن عبد ربه",
        isbn: "9781234598765",
        url: "https://example.com/book7",
      },
      {
        title: "كتاب الحيوان",
        author: "الجاحظ",
        isbn: "9786543210987",
        url: "https://example.com/book8",
      },
      {
        title: "تاريخ الطبري",
        author: "الطبري",
        isbn: "9781597534862",
        url: "https://example.com/book9",
      },
      {
        title: "مروج الذهب",
        author: "المسعودي",
        isbn: "9787531594826",
        url: "https://example.com/book10",
      },
      {
        title: "كتاب الأمالي",
        author: "أبو علي القالي",
        isbn: "9789513574862",
        url: "https://example.com/book11",
      },
      {
        title: "الإمتاع والمؤانسة",
        author: "التوحيدي",
        isbn: "9787531849625",
        url: "https://example.com/book12",
      },
      {
        title: "السيرة النبوية",
        author: "ابن هشام",
        isbn: "9781538469573",
        url: "https://example.com/book13",
      },
      {
        title: "المعجم المفهرس لألفاظ الحديث النبوي",
        author: "محمد فؤاد عبد الباقي",
        isbn: "9781538471593",
        url: "https://example.com/book14",
      },
      {
        title: "إحياء علوم الدين",
        author: "أبو حامد الغزالي",
        isbn: "9789876543120",
        url: "https://example.com/book15",
      },
      {
        title: "فصل المقال",
        author: "ابن رشد",
        isbn: "9787531598462",
        url: "https://example.com/book16",
      },
      {
        title: "تاريخ الأمم والملوك",
        author: "الطبري",
        isbn: "9781234987654",
        url: "https://example.com/book17",
      },
      {
        title: "الفتوحات المكية",
        author: "ابن عربي",
        isbn: "9783571596842",
        url: "https://example.com/book18",
      },
      {
        title: "حي بن يقظان",
        author: "ابن طفيل",
        isbn: "9787531684920",
        url: "https://example.com/book19",
      },
      {
        title: "المستطرف في كل فن مستظرف",
        author: "الأبشيهي",
        isbn: "9784567983215",
        url: "https://example.com/book20",
      },
      {
        title: "مقامات الحريري",
        author: "الحريري",
        isbn: "9787531968742",
        url: "https://example.com/book21",
      },
      {
        title: "شرح ديوان الحماسة",
        author: "المرزوقي",
        isbn: "9787532158746",
        url: "https://example.com/book22",
      },
    ];

    try {
      for (const book of initialBooks) {
        await axios.post(
          "https://books-88c23-default-rtdb.firebaseio.com/books.json",
          { ...book, deleted: false }
        );
      }
      fetchBooks();
    } catch (error) {
      console.error("Error adding initial books: ", error);
    }
  };

  const filteredBooks = books.filter((book) => !book.deleted);

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-center mb-8 text-4xl text-black font-bold">
        معرض الكتب العربيّة
      </h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="عنوانُ الكتاب"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          className="p-2 mr-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="المؤلّف"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          className="p-2 mr-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="ISBN"
          value={newBook.isbn}
          onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
          className="p-2 mr-2 border border-gray-300 rounded"
        />
        {editingBook ? (
          <button
            onClick={handleUpdateBook}
            className="p-2 bg-[#495057] text-white rounded transition duration-300 mr-[5%] hover:bg-[#ffd700] hover:text-black"
          >
            عدّل الكتاب
          </button>
        ) : (
          <button
            onClick={handleAddBook}
            className="p-2 bg-[#495057] text-white rounded transition duration-300  hover:bg-[#ffd700] hover:text-black mr-9 "
          >
            أضف كتاباً جديداً
          </button>
        )}
        <button
          onClick={addInitialBooks}
          className="p-2 bg-[#495057] text-white rounded transition duration-300 hover:bg-[#ffd700] hover:text-black mr-9  "
        >
          إضافة الكتب الأساسية
        </button>
      </div>
      <div className="flex flex-wrap justify-around">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white border border-gray-300 rounded-lg p-4 m-4 w-[calc(20%-2rem)] shadow-md transition-transform transform hover:-translate-y-2"
          >
            <h2 className="text-xl text-gray-800 text-center">{book.title}</h2>
            <h3 className="text-lg text-gray-500 pr-[7%] rtl">{book.author}</h3>
            <p className="text-sm text-gray-500 pr-[7%] rtl">
              ISBN: {book.isbn}
            </p>
            {!book.deleted && (
              <button
                className="p-2 bg-[#495057] text-white rounded transition duration-300  hover:bg-[#ffd700] hover:text-black mr-9 mt-10"
                onClick={() => handleEditBook(book)}
              >
                تعديل
              </button>
            )}
            <button
              className="p-2 bg-[#495057] text-white rounded transition duration-300  hover:bg-[#ffd700] hover:text-black mr-9 mt-10"
              onClick={() => handleSoftDeleteBook(book.id)}
            >
              {book.deleted ? "محذوف" : "حذف"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCatalog;
