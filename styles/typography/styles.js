import {css} from "styled-components";

export const TypoStyles = css`
	
	color: ${({color, theme}) => {
		if (color) {
			switch (color) {
				case 'primary':
					return theme.primary
			}
		} else {
			return theme.primary;
		}
	}};
	
	${({bold}) => bold
		? css`font-weight: 700`
		: css`font-weight: 400`
	};
	
	
	${({center}) => center && css`text-align: center`};
	
`;
