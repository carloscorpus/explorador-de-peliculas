import { TextField, type SxProps, type TextFieldVariants, type Theme } from '@mui/material';
import { type ChangeEvent, type Dispatch, type ReactNode, type SetStateAction } from 'react';
type TextFieldAppProps = {
	id?: string | undefined;
	label?: ReactNode;
	variant: TextFieldVariants;
	sx?: SxProps<Theme> | undefined;
	value: string;
	setValueInput: Dispatch<SetStateAction<string>>;
	error?: boolean | undefined;
	setError: Dispatch<React.SetStateAction<boolean>>;
	helperText?: ReactNode;
	setMessageError: Dispatch<SetStateAction<string>>;
};
export const TextFieldApp = ({
	id,
	label,
	variant,
	sx = {},
	value,
	setValueInput,
	error,
	setError,
	helperText,
	setMessageError,
}: TextFieldAppProps) => {
	const _handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (value.trim() !== '' && error === true) {
			setMessageError('');
			setError(false);

			return;
		}
		setValueInput(e.target.value);
	};

	return (
		<TextField
			id={id}
			label={label}
			variant={variant}
			sx={sx}
			color="secondary"
			value={value}
			onChange={_handleOnChange}
			error={error}
			helperText={helperText}
		/>
	);
};
