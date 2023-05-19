import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { routes } from '@/routers/';
import 'tailwindcss/tailwind.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LoadingSpinner } from "@/components"

const htmlElement = document.getElementById("root");
const root = createRoot(htmlElement);
const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} fallbackElement={<LoadingSpinner/>} />
    </QueryClientProvider>
  </StrictMode>,
)
