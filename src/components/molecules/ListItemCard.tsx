import { ListItem, ListItemText } from '@mui/material';
import { ListItemIconCard } from '../atoms/ListItemIconCard';
import type { ReactElement } from 'react';
import { capitalize } from '../../libs/helpers/capitalize';

type ListItemCardProps = {
	type: string | undefined;
	data: string | undefined;
	iconCard?: ReactElement;
};

export const ListItemCard = ({ iconCard, type, data }: ListItemCardProps) => {
	return (
		<ListItem disablePadding>
			<ListItemIconCard>{iconCard}</ListItemIconCard>
			<ListItemText primary={`${type}: ${capitalize(data)}`} />
		</ListItem>
	);
};
