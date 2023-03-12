import styled from 'styled-components';

export const ProjectsWrapper = styled.section`
	border: 1px solid ${({ theme }) => theme.colors.grayShades100};
	color: ${({ theme }) => theme.colors.black};
	padding: 2rem;

	ul.projects-list-items {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 3rem;
		margin: 0;
		list-style: none;
		padding: 0;
	}
`;
