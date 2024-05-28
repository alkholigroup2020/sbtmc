import { json } from '@sveltejs/kit';
import { CMS_URL } from '$env/static/private';
import { request, gql } from 'graphql-request';

const query = gql`
	{
		projects {
			data {
				id
				attributes {
					localizations {
						data {
							attributes {
								projectTitle
							}
						}
					}
					projectTitle
					projectYear
					projectCategory
					projectImage_600x360 {
						data {
							attributes {
								url
							}
						}
					}
				}
			}
		}
	}
`;

export async function GET() {
	const projectsData: unknown = await request(`${CMS_URL}/graphql`, query);

	return json(projectsData);
}
