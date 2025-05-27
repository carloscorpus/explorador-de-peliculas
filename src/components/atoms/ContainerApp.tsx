import { Container } from '@mui/material';
import type { ElementType, ReactNode } from 'react';
type ContainerAppProps = {
	children: ReactNode;
	disableGutters?: boolean | undefined;
	component: ElementType;
};
export const ContainerApp = ({ children, disableGutters, component }: ContainerAppProps) => {
	return (
		<Container
			maxWidth={'xl'}
			disableGutters={disableGutters}
			sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}
			component={component}
		>
			{children}
		</Container>
	);
};
