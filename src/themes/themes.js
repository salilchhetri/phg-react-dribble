import { createMuiTheme } from '@material-ui/core/styles';

import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

export const baseTheme = createMuiTheme({
	palette: {
		primary: {
			c100: red[100],
			c200: red[200],
			light: red[300],
			main: red[500],
			dark: red[700]
		},
		secondary: {
			light: pink[300],
			main: pink[500],
			dark: pink[700]
		}
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500
	},
	anchor: {
		main: red[500],
		selected: red[700]
	},
});