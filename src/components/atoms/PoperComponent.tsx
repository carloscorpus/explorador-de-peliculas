import { Paper, type PaperProps } from '@mui/material';
import { useRef, type RefObject } from 'react';
import Draggable from 'react-draggable';

export const PoperComponent = (props: PaperProps) => {
	const nodeRef = useRef<HTMLDivElement>(null);
	return (
		<Draggable
			nodeRef={nodeRef as RefObject<HTMLDivElement>}
			handle="#draggable-dialog-title"
			cancel={'[class*="MuiDialogContent-root"]'}
		>
			<Paper {...props} ref={nodeRef} />
		</Draggable>
	);
};
