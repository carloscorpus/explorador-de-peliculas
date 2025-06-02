import { ContainerApp } from '../atoms/ContainerApp';
import { useState, type FormEvent } from 'react';
import { useContextAllMovies } from '../../libs/hooks/useContextAllCategories';
import { SearchForm } from '../molecules/SearchForm';
import { useContextDrawerIsOpen } from '../../libs/hooks/useContextDrawerIsOpen';
import { useNavigate } from 'react-router-dom';

type SearchMovieProps = {
	xs?: string | undefined;
	md?: string | undefined;
};

export const SearchMovie = ({ xs = 'none', md = 'block' }: SearchMovieProps) => {
	const [valueInput, setValueInput] = useState('');
	const [error, setError] = useState(false);
	const [messageError, setMessageError] = useState('');
	const { setMovie } = useContextAllMovies();
	const { setOpenDrawer } = useContextDrawerIsOpen();
	const navigate = useNavigate();
	const _handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (valueInput.trim() === '') {
			setError(true);
			setMessageError('Do not leave fields empty');
			return;
		}
		setMessageError('');
		setError(false);
		setMovie(valueInput);
		setOpenDrawer(false);
		navigate(`/allmovies?s=${encodeURIComponent(valueInput)}&page=1`);
		_handleReset();
	};

	const _handleReset = () => {
		setValueInput('');
	};

	return (
		<ContainerApp disableGutters={false} component={'div'} sx={{ my: 2, display: { xs: `${xs}`, md: `${md}` } }}>
			<SearchForm
				_handleOnSubmit={_handleOnSubmit}
				error={error}
				messageError={messageError}
				setError={setError}
				setMessageError={setMessageError}
				setValueInput={setValueInput}
				valueInput={valueInput}
			/>
		</ContainerApp>
	);
};
