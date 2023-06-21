import { create } from 'zustand'
import { useUserStore } from './userStore'

export const useBearStore = create((set) => ({
    bears: 0,
    title: useUserStore.getState().title ,
    increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))