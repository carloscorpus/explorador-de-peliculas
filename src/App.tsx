import { AllMovies } from './components/organisms/AllMovies';
import { Header } from './components/organisms/Header';
import { useApi } from './libs/hooks/useApi';
import type { URLAPIResponseID } from './libs/types/typeAllMoviesSearch';

export const App = () => {
	const API_KEY_OMDB = import.meta.env.VITE_API_KEY_OMDB;
	const URL_OMBD = `http://www.omdbapi.com/?apikey=${API_KEY_OMDB}&s=marvel`;
	const { data, error, loading } = useApi<URLAPIResponseID>(URL_OMBD);
	return (
		<>
			<Header />
			<AllMovies data={data} error={error} loading={loading} />
		</>
	);
};
