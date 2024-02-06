import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { sendEmail } from '$lib/serverFiles/emailService.js';

const schema = z.object({
	question: z.string(),
	someThingWrong: z.boolean().default(false)
});

export const load = async () => {
	// Server API:
	const form = await superValidate(schema);

	// Unless you throw, always return { form } in load and form actions.
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);

		if (!form.valid) {
			form.data.someThingWrong = true;
			return fail(400, { form });
		}

		// TODO: Do something with the validated form.data
		console.log('🚀 form.data:', form.data);

		const emailTemplate = `
			<table align="center" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc; margin-bottom: 25px;">
		
				<tr style="background-color: rgb(96 165 250 / 2;" bgcolor="#70bbd9">
					<td style="padding: 40px 30px 40px 30px;">
						<span style="color: rgb(255 255 255 ); font-size: 30px; line-height: 1.4; font-weight:600">
							Message From The Footer Section
						</span>
					</td>
				</tr>

				<tr bgcolor="#ffffff">
					<td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
						<p style="font-size: 18px;"><strong>Message:</strong> ${form.data.question}</p>
					</td>
				</tr>

				<tr style="background-color: rgb(96 165 250 / 2;" bgcolor="#70bbd9">
					<td style="padding: 10px 10px;">
						<span style="color: rgb(255 255 255 ); font-size: 20px;">BuildingTek Website.</span>
					</td>
				</tr>

			</table>
		`;

		await sendEmail(
			'fawzy.mohamed@alkholi.com',
			'BuildingTek Website Messages.',
			emailTemplate,
			emailTemplate,
			undefined
		);

		return { form };
	}
};
