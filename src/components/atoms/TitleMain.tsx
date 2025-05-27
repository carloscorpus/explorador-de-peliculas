import { Typography, type SxProps, type Theme, type TypographyProps } from '@mui/material';
import type { ElementType, ReactNode } from 'react';
type TitleMainProps = {
	children: ReactNode;
	component: ElementType;
	variant?: TypographyProps['variant'];
	sx?: SxProps<Theme> | undefined;
};

export const TitleMain = ({ children, component, variant, sx = {} }: TitleMainProps) => {
	return (
		<Typography variant={variant} component={component} sx={sx}>
			{children}
		</Typography>
	);
};
