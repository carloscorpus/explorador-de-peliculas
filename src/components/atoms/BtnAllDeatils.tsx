import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
type BtnAllDeatilsProps = {
	id?: string;
};
export const BtnAllDeatils = ({ id }: BtnAllDeatilsProps) => {
	return (
		<Button
			component={Link}
			to={`/detail/${id}`}
			variant="contained"
			color="inherit"
			sx={{ color: 'text.primary' }}
		>
			All deatils
		</Button>
	);
};
