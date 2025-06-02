import { List, type SxProps, type Theme } from '@mui/material';
import type { ReactNode } from 'react';
type CardListMainProps = {
	children: ReactNode;
	sx?: SxProps<Theme> | undefined;
};
export const CardListMain = ({ children, sx = {} }: CardListMainProps) => {
	return <List sx={sx}>{children}</List>;
};
