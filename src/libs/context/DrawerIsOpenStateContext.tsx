import { useState, type ReactNode } from 'react';
import { DrawerIsOpenDataContext } from './DrawerIsOpenDataContext';
type DrawerIsOpenStateContextProps = {
	children: ReactNode;
};
export const DrawerIsOpenStateContext = ({ children }: DrawerIsOpenStateContextProps) => {
	const [openDrawer, setOpenDrawer] = useState(false);

	return (
		<DrawerIsOpenDataContext.Provider value={{ openDrawer, setOpenDrawer }}>
			{children}
		</DrawerIsOpenDataContext.Provider>
	);
};
