import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const TypesMovies = [
	{
		type: 'Linkedin',
		url: 'https://linkedin.com/in/corpusdev',
		icon: <LinkedInIcon sx={{ fontSize: 32 }} />,
	},
	{
		type: 'Github',
		url: 'https://github.com/carloscorpus/explorador-de-peliculas',
		icon: <GitHubIcon sx={{ fontSize: 32 }} />,
	},
	{
		type: 'Facebook',
		url: 'https://www.facebook.com/roberto.corpussusanibar/',
		icon: <FacebookIcon sx={{ fontSize: 32 }} />,
	},
] as const;
