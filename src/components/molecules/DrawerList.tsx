import { Drawer } from '@mui/material';
import { NavbarListDrawer } from '../organisms/NavbarListDrawer';
import type { Dispatch, SetStateAction } from 'react';

type DrawerListProps = {
	openDrawer: boolean;
	setOpenDrawer: Dispatch<SetStateAction<boolean>>;
};

export const DrawerList = ({ openDrawer, setOpenDrawer }: DrawerListProps) => {
	return (
		<Drawer
			open={openDrawer}
			anchor="left"
			onClose={() => setOpenDrawer(false)}
			sx={{ display: { xs: 'flex', md: 'none' } }}
		>
			<NavbarListDrawer />
		</Drawer>
	);
};
