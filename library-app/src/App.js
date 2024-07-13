import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/js/NavBar";
import Footer from "./Components/js/Footer";
import BookCatalog from "./Components/js/BookCatalog";
import About from "./Components/js/AboutUs";
import Contact from "./Components/js/ContactUs";
import SignUp from "./Components/js/SignUp";
import "./App.css";

const App = () => {
  // const initState = {
  //   books: [
  //     {
  //       id: 1,
  //       title: "مقدمة ابن خلدون",
  //       author: "ابن خلدون",
  //       isbn: "1289499030",
  //       url: "https://example.com/book1",
  //     },
  //     {
  //       id: 2,
  //       title: "الحاوي في الطب",
  //       author: "ابو بكر الرازي",
  //       isbn: "893847239479",
  //       url: "https://example.com/book2",
  //     },
  //     {
  //       id: 3,
  //       title: "الأغاني",
  //       author: "أبو الفرج الأصفهاني",
  //       isbn: "9781234567890",
  //       url: "https://example.com/book3",
  //     },
  //     {
  //       id: 4,
  //       title: "كليلة ودمنة",
  //       author: "ابن المقفع",
  //       isbn: "9789876543210",
  //       url: "https://example.com/book4",
  //     },
  //     {
  //       id: 5,
  //       title: "رسالة الغفران",
  //       author: "أبو العلاء المعري",
  //       isbn: "9781591234567",
  //       url: "https://example.com/book5",
  //     },
  //     {
  //       id: 6,
  //       title: "ألف ليلة وليلة",
  //       author: "غير معروف",
  //       isbn: "9784567891230",
  //       url: "https://example.com/book6",
  //     },
  //     {
  //       id: 7,
  //       title: "العقد الفريد",
  //       author: "ابن عبد ربه",
  //       isbn: "9781234598765",
  //       url: "https://example.com/book7",
  //     },
  //     {
  //       id: 8,
  //       title: "كتاب الحيوان",
  //       author: "الجاحظ",
  //       isbn: "9786543210987",
  //       url: "https://example.com/book8",
  //     },
  //     {
  //       id: 9,
  //       title: "تاريخ الطبري",
  //       author: "الطبري",
  //       isbn: "9781597534862",
  //       url: "https://example.com/book9",
  //     },
  //     {
  //       id: 10,
  //       title: "مروج الذهب",
  //       author: "المسعودي",
  //       isbn: "9787531594826",
  //       url: "https://example.com/book10",
  //     },
  //     {
  //       id: 11,
  //       title: "كتاب الأمالي",
  //       author: "أبو علي القالي",
  //       isbn: "9789513574862",
  //       url: "https://example.com/book11",
  //     },
  //     {
  //       id: 12,
  //       title: "الإمتاع والمؤانسة",
  //       author: "التوحيدي",
  //       isbn: "9787531849625",
  //       url: "https://example.com/book12",
  //     },
  //     {
  //       id: 13,
  //       title: "السيرة النبوية",
  //       author: "ابن هشام",
  //       isbn: "9781538469573",
  //       url: "https://example.com/book13",
  //     },
  //     {
  //       id: 14,
  //       title: "المعجم المفهرس لألفاظ الحديث النبوي",
  //       author: "محمد فؤاد عبد الباقي",
  //       isbn: "9781538471593",
  //       url: "https://example.com/book14",
  //     },
  //     {
  //       id: 15,
  //       title: "إحياء علوم الدين",
  //       author: "أبو حامد الغزالي",
  //       isbn: "9789876543120",
  //       url: "https://example.com/book15",
  //     },
  //     {
  //       id: 16,
  //       title: "فصل المقال",
  //       author: "ابن رشد",
  //       isbn: "9787531598462",
  //       url: "https://example.com/book16",
  //     },
  //     {
  //       id: 17,
  //       title: "تاريخ الأمم والملوك",
  //       author: "الطبري",
  //       isbn: "9781234987654",
  //       url: "https://example.com/book17",
  //     },
  //     {
  //       id: 18,
  //       title: "الفتوحات المكية",
  //       author: "ابن عربي",
  //       isbn: "9783571596842",
  //       url: "https://example.com/book18",
  //     },
  //     {
  //       id: 19,
  //       title: "حي بن يقظان",
  //       author: "ابن طفيل",
  //       isbn: "9787531684920",
  //       url: "https://example.com/book19",
  //     },
  //     {
  //       id: 20,
  //       title: "المستطرف في كل فن مستظرف",
  //       author: "الأبشيهي",
  //       isbn: "9784567983215",
  //       url: "https://example.com/book20",
  //     },
  //     {
  //       id: 21,
  //       title: "مقامات الحريري",
  //       author: "الحريري",
  //       isbn: "9787531968742",
  //       url: "https://example.com/book21",
  //     },
  //     {
  //       id: 22,
  //       title: "شرح ديوان الحماسة",
  //       author: "المرزوقي",
  //       isbn: "9787532158746",
  //       url: "https://example.com/book22",
  //     },
  //   ],
  // };

  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<BookCatalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
