import { create } from 'zustand';

export interface ModalStoreInterface{
    movieId?: string;
    isOpen: boolean;
    openModal: (movieId: string) => void;
    close: () => void;
    
    // closeModal: () => void;
};

const useInfoModal = create<ModalStoreInterface>((set) => ({
    movieId: undefined,
    isOpen: false,
    openModal: (movieId: string) => set({isOpen: true, movieId}),
    close : () => set({isOpen: false, movieId:undefined})
    //  CloseModal: (movieId: string) => set({isOpen: false, movieId}),
}));

export default useInfoModal