import { Header } from './components/organisms/Header';
import { useApi } from './hooks/useApi';
import type { URLAPIResponseID } from './types/typeAllMoviesSearch';

export const App = () => {
	const API_KEY_OMDB = import.meta.env.VITE_API_KEY_OMDB;
	const URL_OMBD = `http://www.omdbapi.com/?apikey=${API_KEY_OMDB}&s=marvel`;
	const { data, error, loading } = useApi<URLAPIResponseID>(URL_OMBD);
	console.log(data, error, loading);
	return (
		<>
			<Header></Header>
		</>
	);
};
