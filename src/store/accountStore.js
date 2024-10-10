import api from "@/lib/api";
import { create } from "zustand";
import { toast } from 'react-toastify';
import { useMainStore } from ".";



export const useAccountStore = create((set) => ({
    isAdmin: false,
    wallet: null,
    referralId: null,
    referredUsers: [],
    user: null,
    setUser: (user) => set({ user }),
    // auth
    logout: () => set((state) => {
        localStorage.clear();
        useMainStore.getState().checkAuth();
        return { ...state, user: null }
    }),
    register: async (user) => {
        try {
            if (!user.inputReferralCode) {
                delete user.inputReferralCode;
            }
            await api.post("auth/signup", user);
            toast.success("Account Created Successfully");
            await useAccountStore.getState().login({ email: user.email, password: user.password })
            return true;
        } catch (error) {
            console.error("Register failed", error);
            return false;
        }
    },
    login: async ({ wallet }) => {
        try {
            const response = await api.post("user/", { email, password });
            const data = response.data.data;
            const role = String(data.role).toLowerCase();

            if (accountType == "Admin" && role != 'admin') {
                toast.loginerror("Sorry, you cannot Access this Page");
                return false;
            } else if (accountType == "User" && role != 'user') {
                toast.error("Sorry, you Cannot Access this Page");
                return false;
            }
            set({ user: { ...data, id: data._id }, isAdmin: data.role == 'admin' });
            useMainStore.getState().setAuthData(data.token, data._id);
            toast.success("User Logged In Successfully");
            return true;
        } catch (error) {
            console.error("failed", error);
            return false
        }
    },
    // profile
    fetchProfile: async () => {
        try {
            useMainStore.getState().checkAuth();
            if (useMainStore.getState().isAuthenticated) {
                const response = await api.get(`users/profile/${useMainStore.getState().id}`);
                const data = response.data.data;
                set({ user: { ...data, id: data._id }, isAdmin: data.role == 'admin' });
            }
        } catch (error) {
            console.error("failed", error);
        }
    },
    fetchWalletBalance: async () => {
        try {
            const response = await api.get('deposit/balance', {
                params: {
                    _id: useMainStore.getState().id
                }
            }
            );
            const data = response.data.data;
            set({
                ...useAccountStore.getState(), wallet: {
                    id: data._id,
                    walletId: data.walletId,
                    balance: data.balance
                }
            })
        } catch (error) {
            console.error("failed", error);
        }
    },
    // referals
    fetchReferalId: async () => {
        try {
            const userId = useMainStore.getState().id;
            const response = await api.get(`auth/ref-link/${userId}`);
            set({ ...useAccountStore.getState(), referralId: response.data.data.referralLink });
        } catch (error) {
            console.error("failed", error);
        }
    },
    fetchReferredUsers: async () => {
        try {
            const userId = useMainStore.getState().id;
            const response = await api.get(`auth/ref-users/${userId}`);
            set({ ...useAccountStore.getState(), referredUsers: response.data.data.referredUsers });
        } catch (error) {
            console.error("failed", error);
        }
    },
    // password
    sendResetCode: async (email) => {
        try {
            await api.post("auth/forgot-password", { email });
            return true;
        } catch (error) {
            // console.error("failed", error);
            return false;
        }
    },
    verifyResetCode: async (code) => {
        try {
            await api.post("auth/verify-reset-code", {
                verificationCode: code
            });
            return true;
        } catch (error) {
            // console.error("failed", error);
            return false;
        }
    },
    resetPassword: async (email, password) => {
        try {
            await api.patch("auth/change-password", {
                email, newPassword: password
            });
            toast.success("Password Changed Successfully");
            return true;
        } catch (error) {
            console.error("failed", error);
            return false;
        }
    },
}));
