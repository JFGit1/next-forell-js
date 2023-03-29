import styled from 'styled-components';

export const HeaderWrapper = styled.header`
	background: ${({ theme }) => theme.colors.white};
	height: 4rem;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 999;
	${({ theme }) => theme.boxShadow};

	.headerContent {
		align-items: center;
		display: flex;
		height: 4rem;
		justify-content: flex-start;
		padding: 0 1rem;
		${({ theme }) => theme.containerWidth}

		h1 {
			color: ${({ theme }) => theme.colors.orange};
			margin: 0;
		}

		.navMenu {
			margin-left: auto;
			padding: 1rem;

			ul {
				display: flex;
				list-style: none;
				margin: 0;
				padding: 0;

				li + li {
					margin-left: 1.5rem;
				}

				a {
					color: ${({ theme }) => theme.colors.black};
					transition: all 250ms ease-in-out;

					&:hover {
						color: ${({ theme }) => theme.colors.orange};
					}

					&.active {
						color: ${({ theme }) => theme.colors.orange};
					}
				}
			}
		}
	}
`;
