import { ListItem, ListItemText } from '@mui/material';
import { ListItemIconCard } from '../atoms/ListItemIconCard';
import type { ReactElement } from 'react';

type ListItemCardProps = {
	type: string | undefined;
	data: string | undefined;
	iconCard: ReactElement;
};

export const ListItemCard = ({ iconCard, type, data }: ListItemCardProps) => {
	return (
		<ListItem disablePadding>
			<ListItemIconCard>{iconCard}</ListItemIconCard>
			<ListItemText primary={`${type}: ${data}`} />
		</ListItem>
	);
};
