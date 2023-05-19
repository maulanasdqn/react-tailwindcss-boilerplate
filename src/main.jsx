import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { routes } from './routers/index.jsx';
import 'tailwindcss/tailwind.css';

const htmlElement = document.getElementById("root");
const root = createRoot(htmlElement);

root.render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
