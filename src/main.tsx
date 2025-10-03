import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { RouterProvider } from "react-router-dom";
// import { router } from "@/routes";
import { restaurants } from '@/db';

import 'normalize.css';
import '@/assets/styles/fonts.scss';
import '@/assets/styles/main.scss'

import ItemsGrid from '@/components/restaurants/items-grid';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// )

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ItemsGrid items={restaurants} />
  </StrictMode>
)
