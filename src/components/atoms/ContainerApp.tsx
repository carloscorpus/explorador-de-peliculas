import { Container, type SxProps, type Theme } from '@mui/material';
import type { ElementType, ReactNode } from 'react';
type ContainerAppProps = {
	children: ReactNode;
	disableGutters?: boolean | undefined;
	component: ElementType;
	sx?: SxProps<Theme> | undefined;
};
export const ContainerApp = ({ children, disableGutters, component,sx={} }: ContainerAppProps) => {
	return (
		<Container
			maxWidth={'xl'}
			disableGutters={disableGutters}
			sx={sx}
			component={component}
		>
			{children}
		</Container>
	);
};
