import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { useContextDrawerIsOpen } from '../../libs/hooks/useContextDrawerIsOpen';

export const HamburgerButton = () => {
	const { setOpenDrawer } = useContextDrawerIsOpen();

	return (
		<IconButton onClick={() => setOpenDrawer(true)} sx={{ display: { sx: 'block', md: 'none' } }}>
			<MenuIcon />
		</IconButton>
	);
};
