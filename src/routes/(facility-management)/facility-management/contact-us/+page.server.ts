import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { sendEmail } from '$lib/serverFiles/emailService.js';

const schema = z.object({
	question: z.string(),
	someThingWrong: z.boolean().default(false)
});

const contactUsFormSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.string().email(),
	mobile: z.string().min(10).max(10).optional(),
	companyName: z.string().optional(),
	subject: z.string().max(100).optional(),
	textArea: z.string().max(500)
});

export const load = async () => {
	// Server API:
	const form = await superValidate(schema);
	const theContactUsForm = await superValidate(contactUsFormSchema);

	// Unless you throw, always return { form } in load and form actions.
	return { form, theContactUsForm };
};

export const actions = {
	footerForm: async ({ request }) => {
		const form = await superValidate(request, schema);

		if (!form.valid) {
			form.data.someThingWrong = true;
			return fail(400, { form });
		}

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
	},

	contactUsForm: async ({ request }) => {
		const contactForm = await superValidate(request, contactUsFormSchema);

		if (!contactForm.valid) {
			return fail(400, { contactForm });
		}

		const emailTemplate = `
			<table align="center" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc; margin-bottom: 25px;">
				<tr style="background-color: rgb(96 165 250 / 2;" bgcolor="#70bbd9">
					<td style="padding: 40px 30px 40px 30px;">
						<span style="color: rgb(255 255 255 ); font-size: 30px; line-height: 1.4; font-weight:600">
							Message From The Contact Us Form
						</span>
					</td>
				</tr>
				<tr bgcolor="#ffffff">
					<td bgcolor="#ffffff" style="padding: 40px 30px 10px 30px;">
						<p style="font-size: 18px;"><strong>Name: </strong>${contactForm.data.firstName} ${contactForm.data.lastName}</p>
					</td>
				</tr>
				<tr bgcolor="#ffffff">
					<td bgcolor="#ffffff" style="padding: 10px 30px 10px 30px;">
						<p style="font-size: 18px;"><strong>Email: </strong> ${contactForm.data.email}</p>
					</td>
				</tr>
				<tr bgcolor="#ffffff">
					<td bgcolor="#ffffff" style="padding: 10px 30px 10px 30px;">
						<p style="font-size: 18px;"><strong>Mobile: </strong> ${contactForm.data.mobile}</p>
					</td>
				</tr>
				<tr bgcolor="#ffffff">
					<td bgcolor="#ffffff" style="padding: 10px 30px 10px 30px;">
						<p style="font-size: 18px;"><strong>Company: </strong> ${contactForm.data.companyName}</p>
					</td>
				</tr>
				<tr bgcolor="#ffffff">
					<td bgcolor="#ffffff" style="padding: 10px 30px 10px 30px;">
						<p style="font-size: 18px;"><strong>Subject: </strong> ${contactForm.data.subject}</p>
					</td>
				</tr>
				<tr bgcolor="#ffffff">
					<td bgcolor="#ffffff" style="padding: 10px 30px 40px 30px;">
						<p style="font-size: 18px;"><strong>Subject: </strong> ${contactForm.data.textArea}</p>
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
			'SBTMC Website - Contact Us Form.',
			emailTemplate,
			emailTemplate,
			undefined
		);

		return { contactForm };
	}
};
