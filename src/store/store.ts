import create from 'zustand';

interface AppState {
  hideIcon: string;
  activeService: string;
  alreadySelected: boolean;
  setHideIcon: (hideIcon: string) => void;
  setActiveService: (activeService: string) => void;
  setAlreadySelected: (alreadySelected: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  hideIcon: '',
  activeService: '',
  alreadySelected: false,
  setHideIcon: (hideIcon) => set({ hideIcon }),
  setActiveService: (activeService) => set({ activeService }),
  setAlreadySelected: (alreadySelected) => set({ alreadySelected }),
}));