import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';

type HamburgerButtonProps = {
	setOpenDrawer: Dispatch<SetStateAction<boolean>>;
};
export const HamburgerButton = ({ setOpenDrawer }: HamburgerButtonProps) => {
	return (
		<IconButton onClick={() => setOpenDrawer(true)} sx={{ display: { sx: 'block', md: 'none' } }}>
			<MenuIcon />
		</IconButton>
	);
};
