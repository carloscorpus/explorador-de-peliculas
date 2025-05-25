import { useContext } from 'react';
import { AllCategoriesDataContext } from '../context/AllCategoriesDataContext';

export const useContextAllMovies = () => {
	const context = useContext(AllCategoriesDataContext);
	if (!context) {
		throw new Error('El useContextAllMovies debe usarse dentro de AllCategoriesDataContext.Provider');
	}
	return context;
};
