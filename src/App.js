import React from 'react';
import { css, Global } from '@emotion/react';
import AppRouter from './routes';
// import AppLayout from './layouts/AppLayout'; // AppLayout kullanılmıyorsa kaldırılabilir
import Header from './layouts/Header';
// import ThemeContext, { useThemeContext } from './contexts/ThemeContext'; // Kaldırılacak

// AppWithTheme ve useThemeContext kullanımı kaldırılacak
// const AppWithTheme = () => {
//   const { themeVariables } = useThemeContext();

//   return (
//     <>
//       <Global
//         styles={css`
//           :root {
//             ${themeVariables}
//           }
//           body {
//             background-color: var(--color-page-bg);
//             color: var(--color-text-primary);
//             transition: background-color 0.3s ease, color 0.3s ease;
//             margin: 0;
//             font-family: 'Inter', sans-serif;
//             -webkit-font-smoothing: antialiased;
//             -moz-osx-font-smoothing: grayscale;
//           }
//           * {
//             box-sizing: border-box;
//           }
//           a {
//             text-decoration: none;
//             color: inherit;
//           }
//           h1, h2, h3, h4, h5, h6 {
//             margin: 0;
//           }
//         `}
//       />
//       <Header />
//       <AppRouter />
//     </>
//   );
// }

function App() {
  return (
    // <ThemeContext> // Kaldırıldı
    //   <AppWithTheme />
    // </ThemeContext> // Kaldırıldı
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            /* Temel arka plan ve metin renkleri burada tanımlanabilir veya CSS değişkenleri kullanılabilir */
            background-color: #F9FAFB; /* Örnek açık tema arka planı */
            color: #1F2937; /* Örnek açık tema metin rengi */
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
          /* Yeni renk değişkenlerini buraya veya ayrı bir stil dosyasına ekleyebilirsiniz */
          :root {
            --color-primary: #10B981; /* Yeşil */
            --color-primary-light: #ECFDF5;
            --color-primary-dark: #059669;
            --color-secondary: #3B82F6; /* Mavi */
            --color-secondary-light: #EFF6FF; 
            --color-accent: #F97316; /* Turuncu */
            --color-accent-dark: #EA580C;
            --color-accent-rgb: 249, 115, 22; /* Turuncu RGB */

            --color-nav-link-text-on-gradient: #1F2937; /* Koyu gri/siyah */
            --color-nav-link-hover-text-on-gradient: var(--color-accent); /* Turuncu */
            
            /* Diğer genel renkler */
            --color-text-primary: #1F2937;
            --color-text-secondary: #4B5563;
            --color-page-bg: #F9FAFB;
            --color-card-bg: white;
            --color-border: #E5E7EB;
          }
        `}
      />
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
