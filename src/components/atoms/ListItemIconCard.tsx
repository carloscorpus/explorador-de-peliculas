import { ListItemIcon } from '@mui/material';
import type { ReactNode } from 'react';
type ListItemIconCardProp = {
	children: ReactNode;
};

export const ListItemIconCard = ({ children }: ListItemIconCardProp) => {
	return <ListItemIcon>{children}</ListItemIcon>;
};
