import React, { useState } from "react";
import { css, Global } from '@emotion/react';
import { Send, CheckCircle, BookOpen, Box, Zap, Users, Award, MessageSquare, Instagram, Twitter, Facebook, Mail, Moon, Sun } from "lucide-react";

import productImage1 from '../assets/products/product-1.jpg';
import productImage2 from '../assets/products/product-2.jpg';
import productImage3 from '../assets/products/product-3.jpg';
import productImage4 from '../assets/products/product-4.jpg';
import productImage5 from '../assets/products/product-5.jpg';
import productImage6 from '../assets/products/product-6.jpg';
import productImage7 from '../assets/products/product-7.jpg';
// import productImage2 from '../assets/products/product-2.jpg'; // Henüz eklenmediyse yorumda kalsın
// import productImage3 from '../assets/products/product-3.jpg'; // Henüz eklenmediyse yorumda kalsın

// Ürün görselleri için şimdilik boş bir dizi tanımlayalım.
// Kullanıcı ürün sayısını belirttiğinde burası güncellenecek.
const productImagesData = [
  { src: productImage1, alt: 'Techinfly Robotik Kiti' }, // İlk ürün için alt metni

  { src: productImage3, alt: 'Techinfly Robotik Kiti' }, // İlk ürün için alt metni
  { src: productImage6, alt: 'Techinfly Robotik Kiti' }, // İlk ürün için alt metni

  { src: productImage2, alt: 'Techinfly Robotik Kiti' }, // İlk ürün için alt metni
  { src: productImage5, alt: 'Techinfly Robotik Kiti' }, // İlk ürün için alt metni
  { src: productImage4, alt: 'Techinfly Robotik Kiti' }, // İlk ürün için alt metni
  { src: productImage7, alt: 'Techinfly Robotik Kiti' }, // İlk ürün için alt metni
];

const GlobalStyles = css`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #374151;
    background-color: #F9FAFB;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 640px) {
    .container {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 768px;
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }
  @media (min-width: 1024px) {
    .container {
      max-width: 1024px;
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }
  @media (min-width: 1280px) {
    .container {
      max-width: 1280px;
    }
  }
`;

const HomePageStyle = css`
  .hero-section {
    background-image: linear-gradient(to bottom right, #ECFDF5, #EFF6FF);
    padding-top: 4rem;
    padding-bottom: 4rem;
    @media (min-width: 768px) {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  }
  .hero-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  .hero-text-content {
    margin-bottom: 3rem;
    @media (min-width: 768px) {
      width: 50%;
      margin-bottom: 0;
    }
    h1 {
      font-size: 2.25rem;
      font-weight: bold;
      color: #1F2937;
      margin-bottom: 1.5rem;
      @media (min-width: 768px) {
        font-size: 3rem;
      }
      span {
        color: #10B981;
      }
    }
    p {
      font-size: 1.125rem;
      color: #4B5563;
      margin-bottom: 2rem;
      @media (min-width: 768px) {
        font-size: 1.25rem;
      }
    }
  }
  .hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (min-width: 640px) {
      flex-direction: row;
    }
    a {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      padding-left: 2rem;
      padding-right: 2rem;
      border-radius: 9999px;
      font-weight: 500;
      text-align: center;
    }
    .btn-primary {
      background-color: #F97316;
      color: white;
      &:hover {
        background-color: #EA580C;
      }
    }
    .btn-secondary {
      background-color: white;
      border: 1px solid #10B981;
      color: #10B981;
      &:hover {
        background-color: #ECFDF5;
      }
    }
  }
  .hero-image-content {
    display: flex;
    justify-content: center;
    @media (min-width: 768px) {
      width: 50%;
    }
  }
  .hero-image-card-wrapper {
    position: relative;
    width: 100%;
    max-width: 28rem;
    .deco-circle-1 {
      position: absolute;
      top: -1.5rem;
      left: -1.5rem;
      width: 6rem;
      height: 6rem;
      background-color: #93C5FD;
      border-radius: 9999px;
      opacity: 0.2;
    }
    .deco-circle-2 {
      position: absolute;
      bottom: -2.5rem;
      right: -2.5rem;
      width: 8rem;
      height: 8rem;
      background-color: #FDBA74;
      border-radius: 9999px;
      opacity: 0.2;
    }
    .hero-image-card {
      background-color: white;
      border-radius: 1rem;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
      padding: 2rem;
      position: relative;
      z-index: 10;
      .grid-icons {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
        div {
          border-radius: 0.75rem;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .icon-bg-green { background-color: #D1FAE5; svg { color: #10B981; } }
        .icon-bg-orange { background-color: #FFEDD5; svg { color: #F97316; } }
        .icon-bg-blue { background-color: #DBEAFE; svg { color: #3B82F6; } }
      }
    }
  }

  .how-it-works-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-color: white;
  }
  .section-title {
    font-size: 1.875rem;
    font-weight: bold;
    text-align: center;
    color: #1F2937;
    margin-bottom: 3rem;
    @media (min-width: 768px) {
      font-size: 2.25rem;
    }
  }
  .how-it-works-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .how-it-works-card {
    background-color: #F9FAFB;
    border-radius: 0.75rem;
    padding: 2rem;
    text-align: center;
    transition-property: box-shadow;
    transition-duration: 0.3s;
    &:hover {
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    }
    .icon-circle {
      border-radius: 9999px;
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1.5rem;
    }
    h3 {
      font-size: 1.25rem;
      font-weight: bold;
      color: #1F2937;
      margin-bottom: 1rem;
    }
    p {
      color: #4B5563;
    }
  }

  .features-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-image: linear-gradient(to bottom right, #EFF6FF, #ECFDF5);
  }
  .features-subtitle {
    text-align: center;
    color: #4B5563;
    margin-bottom: 3rem;
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
  }
  .features-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
    @media (min-width: 768px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    @media (min-width: 1024px) { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }
  .feature-card {
    background-color: white;
    border-radius: 0.75rem;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
    padding: 1.5rem;
    transition-property: box-shadow;
    transition-duration: 0.3s;
    &:hover {
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    }
    .feature-icon-circle {
      border-radius: 9999px;
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
    }
     h3 {
      font-size: 1.25rem;
      font-weight: bold;
      color: #1F2937;
      margin-bottom: 0.5rem;
    }
    p {
      color: #4B5563;
    }
  }
  
  .why-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-color: white;
  }
  .why-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 3rem;
    align-items: center;
    @media (min-width: 1024px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  .why-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    .why-icon-wrapper {
      border-radius: 9999px;
      padding: 0.5rem;
      margin-right: 1rem;
      margin-top: 0.25rem;
    }
    h3 {
      font-size: 1.25rem;
      font-weight: bold;
      color: #1F2937;
      margin-bottom: 0.5rem;
    }
    p { color: #4B5563; }
  }
  .why-stats-card-wrapper {
    display: flex;
    justify-content: center;
    .why-stats-card-inner {
      position: relative;
      width: 100%;
      max-width: 28rem;
      .deco-circle-3 { }
      .deco-circle-4 { }
      .why-stats-gradient-border {
        background-image: linear-gradient(to top right, #10B981, #3B82F6);
        border-radius: 1rem;
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
        padding: 0.25rem;
        position: relative;
        z-index: 10;
        .why-stats-content {
          background-color: white;
          border-radius: 0.75rem;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          .stat-item {
            display: flex;
            align-items: center;
            .stat-number {
              font-size: 3.75rem;
              font-weight: bold;
              margin-right: 1rem;
            }
            .stat-text { color: #4B5563; }
          }
        }
      }
    }
  }

  .testimonials-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-image: linear-gradient(to bottom right, #FFF7ED, #EFF6FF);
  }
  .testimonial-card {
    background-color: white;
    border-radius: 0.75rem;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
    padding: 1.5rem;
    transition-property: box-shadow;
    transition-duration: 0.3s;
    &:hover {
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    }
    .testimonial-author {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      .author-avatar {
        width: 3rem;
        height: 3rem;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
        font-weight: bold;
      }
      h4 {
        font-size: 1.125rem;
        font-weight: bold;
        color: #1F2937;
      }
      p {
        color: #6B7280;
        font-size: 0.875rem;
      }
    }
  }
  .avatar-orange { background-color: #FED7AA; span {color: #F97316;} }
  .avatar-green { background-color: #A7F3D0; span {color: #10B981;} }
  .avatar-blue { background-color: #BFDBFE; span {color: #3B82F6;} }

  .form-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-color: white;
  }
  .form-wrapper {
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
  }
  .form-success {
    background-color: #ECFDF5;
    border: 1px solid #A7F3D0;
    border-radius: 0.75rem;
    padding: 2rem;
    text-align: center;
    .icon-circle { }
    h3 { }
    p { }
  }
  .form-content {
    background-color: #F9FAFB;
    border-radius: 0.75rem;
    padding: 2rem;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
    label {
      display: block;
      color: #374151;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    input {
      width: 100%;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      border: 1px solid #D1D5DB;
      outline: none;
      transition: border-color 0.3s, box-shadow 0.3s;
      &:focus {
        border-color: #FDBA74;
        box-shadow: 0 0 0 2px #FFE4B8;
      }
    }
    .form-group { margin-bottom: 1.5rem; }
    .submit-button {
      width: 100%;
      background-color: #F97316;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
      &:hover {
        background-color: #EA580C;
      }
      span { margin-right: 0.5rem; }
    }
  }

  .footer {
    background-color: #F9FAFB;
    padding-top: 3rem;
    padding-bottom: 3rem;
    border-top: 1px solid #F3F4F6;
  }
  .footer-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
    @media (min-width: 768px) { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }
  .footer-logo-section p {
    color: #4B5563;
    margin-bottom: 1.5rem;
  }
  .footer-social-links {
    display: flex;
    gap: 1rem;
    a {
      color: #9CA3AF;
      transition: color 0.3s;
      &:hover { color: #F97316; }
    }
  }
  .footer-links-title {
    font-weight: bold;
    color: #1F2937;
    margin-bottom: 1rem;
  }
  .footer-links-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    a {
      color: #4B5563;
      &:hover { color: #10B981; }
    }
  }
  .footer-contact-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
      display: flex;
      align-items: center;
      svg { color: #9CA3AF; margin-right: 0.5rem; }
      a { color: #4B5563; &:hover { color: #10B981; } }
      p { color: #4B5563; }
    }
  }
  .footer-copyright {
    padding-top: 2rem;
    border-top: 1px solid #E5E7EB;
    text-align: center;
    color: #6B7280;
    font-size: 0.875rem;
  }

  .icon-bg-orange-100 { background-color: #FFEDD5; svg { color: #F97316; } }
  .icon-bg-green-100 { background-color: #D1FAE5; svg { color: #10B981; } }
  .icon-bg-blue-100 { background-color: #DBEAFE; svg { color: #3B82F6; } }

  .product-gallery-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-color: var(--color-page-bg); /* veya white */
    overflow: hidden; /* Önemli: Kayma efekti için */
  }
  .gallery-title {
    font-size: 1.875rem;
    font-weight: bold;
    text-align: center;
    color: var(--color-text-primary);
    margin-bottom: 3rem;
    @media (min-width: 768px) {
      font-size: 2.25rem;
    }
  }
  .gallery-wrapper {
    display: flex;
    width: fit-content; /* İçerik kadar genişlik */
    animation: scrollGallery 30s linear infinite; /* 30 saniyede bir tekrar eden animasyon */
  }

  @keyframes scrollGallery {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%); /* Resimlerin toplam genişliğinin yarısı kadar kaydır */
      /* Eğer resimleriniz iki set halinde tekrar ediyorsa -50% işe yarar.
         Tek set ve başa dönme için daha farklı bir mantık gerekebilir veya JS kullanılabilir.
         Şimdilik basit bir sonsuz döngü varsayıyoruz. */
    }
  }

  .gallery-item {
    width: 250px; /* Resim genişliği */
    height: 200px; /* Resim yüksekliği */
    margin-right: 1.5rem;
    border-radius: 0.75rem;
    background-color: var(--color-card-bg);
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: var(--color-text-secondary);
    /* Gerçek resimler için img etiketi kullanılacak */
    border: 1px solid var(--color-border);
    overflow: hidden; /* Resimlerin taşmasını engelle */
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  }
`;

const HomePage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", submitted: false });

  const handleNameChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      name: e.target.value
    }));
  };

  const handleEmailChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      email: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(prevState => ({
      ...prevState,
      submitted: true
    }));
    console.log("Form submitted:", formData.name, formData.email);
  };

  return (
    <>
      <Global styles={GlobalStyles} />
      <div css={[HomePageStyle]}>
        <section className="hero-section">
          <div className="container hero-content-wrapper">
            <div className="hero-text-content">
              <h1>Eğitim, <span className="text-green-500">Maceraya</span> Dönüşsün!</h1>
              <p>
                Techinfly ile öğrenciler, oyunlaştırılmış hibrit STEM eğitimi sayesinde hem eğleniyor hem öğreniyor. Dijital içerik ve fiziksel setlerle bilim ve teknoloji dünyasına adım atın!
              </p>
              <div className="hero-buttons">
                <a href="#pre-register" className="btn-primary">
                  Ön Talep Formu
                </a>
                <a href="#features" className="btn-secondary">
                  Detaylı Bilgi
                </a>
              </div>
            </div>
            <div className="hero-image-content">
              <div className="hero-image-card-wrapper">
                <div className="deco-circle-1"></div>
                <div className="deco-circle-2"></div>
                <div className="hero-image-card">
                  <div className="grid-icons">
                    <div className="icon-bg-green"><BookOpen size={40} /></div>
                    <div className="icon-bg-orange"><Zap size={40} /></div>
                    <div className="icon-bg-blue"><Box size={40} /></div>
                    <div className="icon-bg-green"><Users size={40} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="product-gallery" className="product-gallery-section">
          <div className="container">
            <h2 className="gallery-title">Ürünlerimizden Kareler</h2>
          </div>
          <div className="gallery-wrapper">
            {/* productImagesData boş olsa bile hata vermemesi için kontrol eklenebilir veya map boş döner */}
            {productImagesData.map((image, i) => (
              <div className="gallery-item" key={`gallery-a-${i}`}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
            {/* Sonsuz döngü illüzyonu için ikinci set */}
            {productImagesData.map((image, i) => (
              <div className="gallery-item" key={`gallery-b-${i}`}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="how-it-works-section">
          <div className="container">
            <h2 className="section-title">Nasıl Çalışır?</h2>
            <div className="how-it-works-grid">
              <div className="how-it-works-card">
                <div className="icon-circle icon-bg-orange-100">
                  <BookOpen size={28} />
                </div>
                <h3>1. Tema Seç</h3>
                <p>Robotik, kodlama, biyoloji, fizik, kimya ve daha birçok STEM alanından ilgini çeken konuyu seç.</p>
              </div>
              <div className="how-it-works-card">
                <div className="icon-circle icon-bg-green-100">
                  <Box size={28} />
                </div>
                <h3>2. Setini Al</h3>
                <p>Seçtiğin temaya özel hazırlanmış dijital içerik ve fiziksel STEM kitini kapında karşıla.</p>
              </div>
              <div className="how-it-works-card">
                <div className="icon-circle icon-bg-blue-100">
                  <Zap size={28} />
                </div>
                <h3>3. Macerana Başla</h3>
                <p>Uygulamamız eşliğinde fiziksel setlerle deneyler yap, görevleri tamamla ve rozetler kazan.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="container">
            <h2 className="section-title">Özellikler</h2>
            <p className="features-subtitle">
              Techinfly, benzersiz özelliklerle STEM eğitimini bir sonraki seviyeye taşıyor.
            </p>
            <div className="features-grid">
              {[
                { icon: <Zap size={24} />, title: "Oyunlaştırma", text: "Maceralı hikayeler, seviyeler ve rozetlerle öğrenme yolculuğunu heyecanlı hale getir.", bgColor: "icon-bg-orange-100" },
                { icon: <Box size={24} />, title: "Uygulamalı STEM Kitleri", text: "Her temaya özel fiziksel setlerle gerçek deney ve projeler gerçekleştir.", bgColor: "icon-bg-green-100" },
                { icon: <Award size={24} />, title: "Beceri Gelişimi", text: "Problem çözme, yaratıcılık ve eleştirel düşünme becerilerini geliştir.", bgColor: "icon-bg-blue-100" },
                { icon: <Users size={24} />, title: "Topluluk", text: "Forum ve sosyal etkinliklerle diğer bilim meraklılarıyla tanış ve fikir alışverişinde bulun.", bgColor: "icon-bg-orange-100" },
                { icon: <BookOpen size={24} />, title: "Kişiselleştirilmiş Öğrenme", text: "İlgi alanların ve öğrenme hızına göre sana özel içerik ve öneriler al.", bgColor: "icon-bg-green-100" },
                { icon: <MessageSquare size={24} />, title: "Uzman Desteği", text: "Merak ettiğin her konuda uzman eğitimcilere sor, yardım al.", bgColor: "icon-bg-blue-100" },
              ].map(feature => (
                <div className="feature-card" key={feature.title}>
                  <div className={`feature-icon-circle ${feature.bgColor}`}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="why-section">
          <div className="container">
            <h2 className="section-title">Neden Techinfly?</h2>
            <div className="why-grid">
              <div>
                {[
                  { icon: <CheckCircle size={20} />, title: "Hibrit Öğrenme Modeli", text: "Dijital içerik ve fiziksel setleri bir araya getirerek hem teorik hem pratik öğrenme fırsatı sunuyoruz.", bgColor: "icon-bg-green-100" },
                  { icon: <CheckCircle size={20} />, title: "Müfredata Uygun", text: "MEB müfredatıyla uyumlu içeriklerle okul derslerine destek olurken, keyifli bir öğrenme deneyimi sunuyoruz.", bgColor: "icon-bg-orange-100" },
                  { icon: <CheckCircle size={20} />, title: "Teknoloji ile Arkadaş Ol", text: "Teknolojiyi sadece tüketen değil, üreten nesiller yetiştirmek için gerekli becerileri kazandırıyoruz.", bgColor: "icon-bg-blue-100" },
                ].map(item =>(
                  <div className="why-item" key={item.title}>
                    <div className={`why-icon-wrapper ${item.bgColor}`}>{item.icon}</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="why-stats-card-wrapper">
                <div className="why-stats-card-inner">
                  <div className="deco-circle-1 deco-circle-3"></div>
                  <div className="deco-circle-2 deco-circle-4"></div>
                  <div className="why-stats-gradient-border">
                    <div className="why-stats-content">
                      <div className="stat-item"><div className="stat-number" style={{color: '#10B981'}}>84%</div><div className="stat-text">öğrencide bilime karşı artan ilgi</div></div>
                      <div className="stat-item"><div className="stat-number" style={{color: '#F97316'}}>92%</div><div className="stat-text">veli memnuniyeti</div></div>
                      <div className="stat-item"><div className="stat-number" style={{color: '#3B82F6'}}>5+</div><div className="stat-text">farklı STEM alanı</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials-section">
          <div className="container">
            <h2 className="section-title">Yorumlar</h2>
            <p className="features-subtitle">Techinfly ailesinin deneyimlerini dinleyin.</p>
            <div className="features-grid">
              {[
                { name: "Ahmet Y.", role: "7. Sınıf Öğrencisi", text: "\"Robotik setini çok sevdim! Arkadaşlarımla birlikte çalışıyor, uygulama üzerindeki görevleri tamamlayarak puan topluyoruz.\"", avatar: "AY", avatarClass: "avatar-orange" },
                { name: "Neslihan K.", role: "Veli", text: "\"Kızım için aldığımız Techinfly setleri sayesinde bilime olan ilgisi arttı. Ekran başında vakit geçirmek yerine deneyler yaparak öğreniyor.\"", avatar: "NK", avatarClass: "avatar-green" },
                { name: "Mehmet B.", role: "Fen Bilgisi Öğretmeni", text: "\"Öğrencilerimde gördüğüm motivasyon artışı inanılmaz. Müfredata uygun içerikler sayesinde derslerde öğrendiklerini pekiştirme fırsatı buluyorlar.\"", avatar: "MB", avatarClass: "avatar-blue" },
              ].map(testimonial => (
                <div className="testimonial-card" key={testimonial.name}>
                  <div className="testimonial-author">
                    <div className={`author-avatar ${testimonial.avatarClass}`}><span>{testimonial.avatar}</span></div>
                    <div>
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                  <p>{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pre-register" className="form-section">
          <div className="form-wrapper container">
            <h2 className="section-title">Ön Talep Formu</h2>
            <p className="features-subtitle">
              Techinfly lansmanında öncelikli olmak için formu doldurarak bizimle iletişime geçin.
            </p>
            {formData.submitted ? (
              <div className="form-success">
                <div className="icon-circle icon-bg-green-100" style={{margin: '0 auto 1.5rem auto'}}>
                  <CheckCircle size={32} />
                </div>
                <h3>Teşekkürler!</h3>
                <p>Talebiniz alındı. En kısa sürede size geri dönüş yapacağız.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form-content">
                <div className="form-group">
                  <label htmlFor="name">İsim Soyisim</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleNameChange} placeholder="Adınız Soyadınız" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-posta Adresi</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleEmailChange} placeholder="ornek@email.com" required />
                </div>
                <div>
                  <button type="submit" className="submit-button">
                    <span>Gönder</span>
                    <Send size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-logo-section">
                <p>Oyunlaştırılmış hibrit STEM eğitimi ile geleceğin yeteneklerini bugünden keşfedin.</p>
                <div className="footer-social-links">
                  <a href="#"><Instagram size={20} /></a>
                  <a href="#"><Twitter size={20} /></a>
                  <a href="#"><Facebook size={20} /></a>
                </div>
              </div>
              <div>
                <h4 className="footer-links-title">Hızlı Bağlantılar</h4>
                <ul className="footer-links-list">
                  <li><a href="#how-it-works">Nasıl Çalışır?</a></li>
                  <li><a href="#features">Özellikler</a></li>
                  <li><a href="#why">Neden Techinfly?</a></li>
                  <li><a href="#testimonials">Yorumlar</a></li>
                  <li><a href="#">SSS</a></li>
                </ul>
              </div>
              <div>
                <h4 className="footer-links-title">İletişim</h4>
                <ul className="footer-contact-list">
                  <li><Mail size={18} /><a href="mailto:info@techinfly.com">info@techinfly.com</a></li>
                  <li><p>Kozyatağı Mah. Teknoloji Cad. No:42<br/>Kadıköy / İstanbul</p></li>
                </ul>
              </div>
            </div>
            <div className="footer-copyright">
              <p>&copy; {new Date().getFullYear()} Techinfly. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
