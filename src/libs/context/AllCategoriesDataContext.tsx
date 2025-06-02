import { createContext, type Dispatch, type SetStateAction } from 'react';
import type { URLAPIResponseID } from '../types/typeAllMoviesSearch';
import type { ApiErrorType } from '../const/ErrorApiType';

type AllCategoriesDataContextType = {
	data: URLAPIResponseID | null;
	error: ApiErrorType;
	loading: boolean;
	amountPages: number;
	pageActuality: number;
	setMovie: Dispatch<SetStateAction<string>>;
	movie: string;

	parametroMovies: string;
};

export const AllCategoriesDataContext = createContext<AllCategoriesDataContextType | null>(null);
