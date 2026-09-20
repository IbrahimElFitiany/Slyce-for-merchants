import type { Branch } from "@/types.domain";
import { createContext, useContext, useState, type ReactNode } from "react";

interface BranchContextType {
  selectedBranch: Branch | null;
  setSelectedBranch: (branch: Branch | null) => void;
}

const BranchContext = createContext<BranchContextType | undefined>(undefined);

export function BranchProvider({ children }: { children:  ReactNode }) {

  const [selectedBranch, setSelectedBranch] = useState<Branch|null>(null);

  return (
    <BranchContext.Provider value={{ selectedBranch, setSelectedBranch }}>
      {children}
    </BranchContext.Provider>
  );
}

export function useBranchContext() {

  const context = useContext(BranchContext);

  if (!context) {
    throw new Error("useBranchContext must be used within a BranchProvider");
  }

  return context;
}