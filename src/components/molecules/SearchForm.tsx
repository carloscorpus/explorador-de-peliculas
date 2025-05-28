import { Box, Button } from '@mui/material';
import { TextFieldApp } from '../atoms/TextFieldApp';
import type { Dispatch, FormEvent, SetStateAction } from 'react';
type SearchForm = {
	_handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
	valueInput: string;
	setValueInput: Dispatch<SetStateAction<string>>;
	error: boolean;
	setError: Dispatch<SetStateAction<boolean>>;
	messageError: string;
	setMessageError: Dispatch<SetStateAction<string>>;
};
export const SearchForm = ({
	_handleOnSubmit,
	valueInput,
	setValueInput,
	error,
	setError,
	messageError,
	setMessageError,
}: SearchForm) => {
	return (
		<Box
			sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'end' }}
			component={'form'}
			onSubmit={_handleOnSubmit}
		>
			<TextFieldApp
				id="nameMovieH"
				variant="standard"
				label="Nombre de la película"
				sx={{ width: '100%', maxWidth: 600 }}
				value={valueInput}
				setValueInput={setValueInput}
				error={error}
				setError={setError}
				helperText={messageError}
				setMessageError={setMessageError}
			/>
			<Button sx={{ color: 'text.primary' }} variant="contained" color="inherit" type="submit">
				Search
			</Button>
		</Box>
	);
};
