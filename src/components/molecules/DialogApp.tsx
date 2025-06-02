import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { PoperComponent } from '../atoms/PoperComponent';

import { ListItemCard } from './ListItemCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MovieEditIcon from '@mui/icons-material/MovieEdit';
import { useMovieDetail } from '../../libs/hooks/useMovieDetail';
type DialogAppProps = {
	open: boolean;
	_handleClickClose: () => void;
	movieSelectedModal: string;
};

export const DialogApp = ({ open, _handleClickClose, movieSelectedModal }: DialogAppProps) => {
	const { data } = useMovieDetail(movieSelectedModal);

	return (
		<Dialog
			open={open}
			onClose={_handleClickClose}
			PaperComponent={PoperComponent}
			aria-labelledby="draggable-dialog-title"
			maxWidth="md"
		>
			<DialogTitle
				style={{ cursor: 'move' }}
				variant="h2"
				sx={{
					fontSize: {
						xs: '1.3rem',
						sm: '1.75rem',
						md: '2.5rem',
						lg: '3rem',
					},
					color: 'secondary.main',
				}}
				id="draggable-dialog-title"
			>
				{data?.Title}
			</DialogTitle>
			<DialogContent
				sx={{
					display: { xs: 'block', md: 'flex' },
					gap: 3,
				}}
			>
				<Box
					component="img"
					alt={`Poster of ${data?.Title}`}
					title={data?.Title}
					src={data?.Poster}
					sx={{ width: { xs: '220px', md: 'auto' } }}
					onError={(e) => {
						e.currentTarget.src = `https://placehold.co/300x400?text=${data?.Title} :(`;
					}}
				/>
				<Box>
					<ListItemCard data={data?.Released} type="Premier" iconCard={<CalendarMonthIcon />} />
					<ListItemCard data={data?.Type} type="Category" iconCard={<MovieEditIcon />} />
					<DialogContentText>{data?.Plot}</DialogContentText>
				</Box>
			</DialogContent>
			<DialogActions>
				<Button autoFocus type="button" onClick={_handleClickClose} sx={{ color: 'secondary.main' }}>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
};
