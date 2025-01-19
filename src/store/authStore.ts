import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  name: string | null;
  email: string | null;
  signIn: (token: string, name: string, email: string) => void;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      token: null,
      name: null,
      email: null,

      signIn: (token: string, name: string, email: string) => {
        set({ isAuthenticated: true, token, name, email });
      },

      signOut: () => {
        set({ isAuthenticated: false, token: null, name: null, email: null });
      },
    }),
    {
      name: "auth-storage", // Chave do localStorage
    }
  )
);
