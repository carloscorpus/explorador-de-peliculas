import { CardActions } from '@mui/material';
import type { ReactNode } from 'react';
type CardActionsMain = {
	children: ReactNode;
};
export const CardActionsMain = ({ children }: CardActionsMain) => {
	return <CardActions>{children}</CardActions>;
};
