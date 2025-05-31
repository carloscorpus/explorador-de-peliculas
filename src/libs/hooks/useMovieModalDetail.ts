import type { URLAPIMovie } from '../types/typeMovie';
import { useApi } from './useApi';
type useMovieModalDetail = {
	movieSelected: string;
};
export const useMovieModalDetail = (movieSelected: string) => {
	const API_KEY_OMDB = import.meta.env.VITE_API_KEY_OMDB;
	const URL_OMDB = `http://www.omdbapi.com/?apikey=${API_KEY_OMDB}&i=${movieSelected}&plot=full`;
	const { data, error, loading } = useApi<URLAPIMovie>(URL_OMDB);
	return { data, error, loading };
};
