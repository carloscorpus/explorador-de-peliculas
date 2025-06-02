import { CardContent, type SxProps, type Theme } from '@mui/material';
import type { ReactNode } from 'react';

type CardContentMainProps = {
	children: ReactNode;
	sx?: SxProps<Theme> | undefined;
};

export const CardContentMain = ({ children, sx = {} }: CardContentMainProps) => {
	return <CardContent sx={sx}>{children}</CardContent>;
};
