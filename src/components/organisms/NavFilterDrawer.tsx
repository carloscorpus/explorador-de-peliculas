import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
	Box,
	Collapse,
	FormControlLabel,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Radio,
	RadioGroup,
	TextField,
} from '@mui/material';
import { useState } from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { TypesMovies } from '../../const/SearchType';

export const NavFilterDrawer = () => {
	const [open, setOpen] = useState(false);

	const _handleClick = () => {
		setOpen(!open);
	};
	return (
		<>
			<ListItemButton onClick={_handleClick}>
				<ListItemIcon>
					<FilterAltIcon />
				</ListItemIcon>
				<ListItemText primary="Filtros" />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>

			<Collapse in={open} timeout={'auto'} unmountOnExit>
				<Box component={'form'}>
					<ListItem component={'div'}>
						<TextField
							id="nameMovie"
							label="Nombre de la película"
							variant="standard"
							sx={{ width: '100%' }}
						/>
					</ListItem>
					<Box>
						<RadioGroup
							aria-labelledby="demo-radio-buttons-group-label"
							defaultValue="female"
							name="radio-buttons-group"
						>
							<List>
								{TypesMovies.map((type, i) => {
									return (
										<ListItem key={i}>
											<FormControlLabel value={type.type} control={<Radio />} label={type.type} />
										</ListItem>
									);
								})}
							</List>
						</RadioGroup>
					</Box>
				</Box>
			</Collapse>
		</>
	);
};
