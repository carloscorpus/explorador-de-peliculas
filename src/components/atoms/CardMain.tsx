import { Card, type SxProps, type Theme } from '@mui/material';
import type { ReactNode } from 'react';

type CardMainProps = {
	children: ReactNode;
	sx?: SxProps<Theme> | undefined;
};

export const CardMain = ({ children, sx = {} }: CardMainProps) => {
	return <Card sx={sx}>{children}</Card>;
};
