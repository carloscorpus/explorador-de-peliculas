import type { URLAPIMovie } from '../types/typeMovie';
import { useApi } from './useApi';
import { useContextAllMovies } from './useContextAllCategories';

export const useMovieDetailBanner = () => {
	const { movie } = useContextAllMovies();
	const API_KEY_OMDB = import.meta.env.VITE_API_KEY_OMDB;
	const URL_OMDB = `https://www.omdbapi.com/?apikey=${API_KEY_OMDB}&t=${movie}&plot=full`;
	const { data, error, loading } = useApi<URLAPIMovie>(URL_OMDB);
	return { data, error, loading };
};
