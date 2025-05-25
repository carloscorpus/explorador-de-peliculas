import { createContext } from 'react';
import type { URLAPIResponseID } from '../types/typeAllMoviesSearch';
import type { ApiErrorType } from '../const/ErrorApiType';

type AllCategoriesDataContextType = {
	data: URLAPIResponseID | null;
	error: ApiErrorType;
	loading: boolean;
	amountPages: number;
	pageActuality: number;
};

export const AllCategoriesDataContext = createContext<AllCategoriesDataContextType | null>(null);
