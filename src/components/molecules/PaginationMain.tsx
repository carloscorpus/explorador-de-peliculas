import { Pagination, PaginationItem } from '@mui/material';
import { useContextAllMovies } from '../../libs/hooks/useContextAllCategories';
import { Link, useSearchParams } from 'react-router-dom';

export const PaginationMain = () => {
	const { amountPages } = useContextAllMovies();

	const [searchParams, setSearchParams] = useSearchParams();
	const pageActuality = Number(searchParams.get('page')) || 1;

	const _handleOnChange = (_: React.ChangeEvent<unknown>, value: number) => {
		setSearchParams({ page: value.toString() });
	};
	return (
		<Pagination
			count={amountPages}
			page={pageActuality}
			variant="outlined"
			shape="circular"
			renderItem={(item) => <PaginationItem component={Link} to={`/allmovies?page=${item.page}`} {...item} />}
			onChange={_handleOnChange}
			sx={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}
		/>
	);
};
