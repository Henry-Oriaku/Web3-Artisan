import { create } from 'zustand';


export const useMainStore = create((set) => ({
  isAuthenticated: false,
  setAuthData: (token) => {
    set((state) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('_token', token);
        return { ...state, id: id, isAuthenticated: !!token };
      }
      return state;
    })
  },
  checkAuth: () => {
    set((state) => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('_token');
        return { ...state, isAuthenticated: !!token };
      }
      return state;
    });
  },
}));
