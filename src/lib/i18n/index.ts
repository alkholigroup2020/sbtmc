import enCommon from './en/common';
import enFMHome from './en/fm/home-page';
import enCSHome from './en/cs/home-page';
import enFMAbout from './en/fm/about-page';
import enFMServices from './en/fm/services-page';
import enFMProjects from './en/fm/projects-page';
import enContactUs from './en/fm/contactUs-page';

import arCommon from './ar/common';
import arFMHome from './ar/fm/home-page';
import arCSHome from './ar/cs/home-page';
import arFMAbout from './ar/fm/about-page';
import arFMServices from './ar/fm/services-page';
import arFMProjects from './ar/fm/projects-page';
import arContactUs from './ar/fm/contactUs-page';

export default {
	en: {
		...enCommon,
		...enFMHome,
		...enCSHome,
		...enFMAbout,
		...enFMServices,
		...enFMProjects,
		...enContactUs
	},
	ar: {
		...arCommon,
		...arFMHome,
		...arCSHome,
		...arFMAbout,
		...arFMServices,
		...arFMProjects,
		...arContactUs
	}
};
