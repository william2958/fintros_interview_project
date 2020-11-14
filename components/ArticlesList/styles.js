import styled from 'styled-components';

export const ArticlesListWrapper = styled.div`
	
	& > * + * {
		border-top: 2px solid ${({theme}) => theme.border};
	}
	
`;
