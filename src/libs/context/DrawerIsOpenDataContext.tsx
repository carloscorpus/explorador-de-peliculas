import { createContext, type Dispatch, type SetStateAction } from 'react';

type DrawerIsOpenDataContextProps = {
	openDrawer: boolean;
	setOpenDrawer: Dispatch<SetStateAction<boolean>>;
};

export const DrawerIsOpenDataContext = createContext<DrawerIsOpenDataContextProps | null>(null);
