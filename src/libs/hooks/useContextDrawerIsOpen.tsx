import { useContext } from 'react';
import { DrawerIsOpenDataContext } from '../context/DrawerIsOpenDataContext';

export const useContextDrawerIsOpen = () => {
	const context = useContext(DrawerIsOpenDataContext);
	if (!context) {
		throw new Error('El useContextDrawerIsOpen debe usarse dentro de DrawerIsOpenStateContext.Provider');
	}
	return context;
};
