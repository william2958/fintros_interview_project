import styled from 'styled-components';

export const ThemeToggleWrapper = styled.div`
	position: absolute;
	top: 24px;
	right: 24px;
	
	border: 1px solid ${({theme}) => theme.secondary};
	
	padding: 12px;
`;

export const ToggleButton = styled.button`
	padding: 8px 12px;
	background-color: ${({theme}) => theme.highlight};
	border: 0;
	border-radius: 5px;
	cursor: pointer;
`;
