export interface URLAPIResponseID {
	Search: Search[];
	totalResults: string;
	Response: string;
}

export interface Search {
	Title?: string;
	Year?: string;
	imdbID?: string;
	Type?: Type;
	Poster?: string;
}

export type Type = 'game' | 'movie' | 'series';
