import { gql } from '@apollo/client';

export const PAGES_BY_SLUG = gql`
	query PageByIdQuery($id: ID!) {
		page(idType: URI, id: $id) {
			title
			content
		}
	}
`;

export const PROJECT_LIST = gql`
	{
		projectsACM(first: 10) {
			nodes {
				...ProjectACMFields
			}
		}
	}

	fragment ProjectACMFields on ProjectACM {
		title
		subtitle
		body
		images {
			mediaItemId
			mediaItemUrl
			altText
			caption
			description
			mediaDetails {
				height
				width
				sizes {
					file
					fileSize
					height
					mimeType
					name
					sourceUrl
					width
				}
			}
		}
		team {
			edges {
				node {
					id
					email
					name
				}
			}
		}
	}
`;
