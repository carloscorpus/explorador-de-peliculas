import type { OMDBSuccessResponse, URLAPIResponseID } from "../types/typeAllMoviesSearch";

export const isSuccessResponse = (data: URLAPIResponseID): data is OMDBSuccessResponse => {
	return data.Response === 'True';
};