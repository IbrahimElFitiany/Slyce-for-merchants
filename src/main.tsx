import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { router } from "@/Routes/Routes";
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BranchProvider } from './context/BranchContext';

const client = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
      <BranchProvider>
        <RouterProvider router={router} />
      </BranchProvider>
  </QueryClientProvider>
);