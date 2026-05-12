import { create } from 'zustand';

interface UserState {
  user: {
    id: string;
    phone: string;
    nickname?: string;
    avatar?: string;
  } | null;
  setUser: (user: { id: string; phone: string; nickname?: string; avatar?: string } | null) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
}));