// src/i18n/index.ts
import enCommon from './en/common';
import enFMCommon from './en/fm/common';
import enFMHome from './en/fm/home-page';
import enFMAbout from './en/fm/about-page';
import enFMServices from './en/fm/services-page';
import enFMProjects from './en/fm/projects-page';
import enContactUs from './en/fm/contactUs-page';

import arCommon from './ar/common';
import arFMCommon from './ar/fm/common';
import arFMHome from './ar/fm/home-page';
import arFMAbout from './ar/fm/about-page';
import arFMServices from './ar/fm/services-page';
import arFMProjects from './ar/fm/projects-page';
import arContactUs from './ar/fm/contactUs-page';

export default {
	en: {
		...enCommon,
		...enFMCommon,
		...enFMHome,
		...enFMAbout,
		...enFMServices,
		...enFMProjects,
		...enContactUs
	},
	ar: {
		...arCommon,
		...arFMCommon,
		...arFMHome,
		...arFMAbout,
		...arFMServices,
		...arFMProjects,
		...arContactUs
	}
};
