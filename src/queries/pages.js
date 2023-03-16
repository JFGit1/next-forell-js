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
	query AllProjects {
		projects(first: 0, where: { status: PUBLISH }) {
			nodes {
				title
				slug
				uri
				projHasPage
				featuredImage {
					node {
						mediaItemUrl
					}
				}
				projTeam(first: 0) {
					nodes {
						title
						slug
						uri
						staffCategories {
							nodes {
								name
							}
						}
					}
				}
				projSubTitle
				projectsCategories {
					edges {
						node {
							name
							slug
							uri
						}
					}
				}
			}
		}
	}
`;

export const ALL_PROJECT_CATEGORIES = gql`
	query AllProjectsCategory {
		projectsCategories(first: 50, where: { hideEmpty: false }) {
			nodes {
				name
				slug
				uri
			}
		}
	}
`;

export const PROJECTS_CATEGORY = gql`
	query ProjectsCategory($slug: [String] = "") {
		projectsCategories(first: 50, where: { hideEmpty: false, slug: $slug }) {
			nodes {
				name
				slug
				uri
				description
				projects(where: { orderby: { field: TITLE, order: ASC } }) {
					nodes {
						title
						slug
						projHasPage
					}
				}
			}
		}
	}
`;

export const PROJECTS_PAGE = gql`
	query ProjectsPage($id: ID = "") {
		project(id: $id, idType: SLUG) {
			title
			slug
			projHasPage
			projSubTitle
			content
			projCustomizedSolution
			projHighlights
			projTeam(first: 50) {
				nodes {
					slug
					title
				}
			}
			projectsCategories(first: 50) {
				nodes {
					name
					slug
				}
			}
		}
	}
`;
export const ALL_PROJECTS_PATH = gql`
	query AllProjectsPath {
		projects(first: 200, where: { status: PUBLISH }) {
			nodes {
				slug
			}
		}
	}
`;
