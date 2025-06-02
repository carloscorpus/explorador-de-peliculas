import { Pagination, PaginationItem } from '@mui/material';
import { useContextAllMovies } from '../../libs/hooks/useContextAllCategories';
import { Link } from 'react-router-dom';

export const PaginationMain = () => {
	const { amountPages, parametroMovies, pageActuality } = useContextAllMovies();

	return (
		<Pagination
			count={amountPages}
			page={pageActuality}
			variant="outlined"
			shape="circular"
			renderItem={(item) => (
				<PaginationItem component={Link} to={`/allmovies?s=${parametroMovies}&page=${item.page}`} {...item} />
			)}
			sx={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}
		/>
	);
};
