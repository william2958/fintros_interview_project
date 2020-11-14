import styled, { css } from 'styled-components';

const HeaderStyles = css`
	
	color: ${({color, theme}) => {
			if (color) {
				switch (color) {
					case 'primary':
						return theme.primary
				}
			} else {
				return theme.primary;
			}
		}
	};
	
	${({bold}) => bold
		? css`font-weight: 700`
		: css`font-weight: 400`
	};
	
`;

export const H1 = styled.h1`
	${HeaderStyles};
	
	font-size: 48px;
`;
