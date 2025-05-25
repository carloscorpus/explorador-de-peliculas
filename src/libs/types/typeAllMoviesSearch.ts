type ResponseTypeApi = 'True' | 'False';
export interface OMDBSuccessResponse {
	Search: Search[];
	totalResults: string;
	Response: ResponseTypeApi;
}

export interface Search {
	Title?: string;
	Year?: string;
	imdbID?: string;
	Type?: Type;
	Poster?: string;
}

export type Type = 'game' | 'movie' | 'series';

export type OMBDErrorResponse = {
	Response: 'False';
	Error: ResponseTypeApi;
};
export type URLAPIResponseID = OMBDErrorResponse | OMDBSuccessResponse;
