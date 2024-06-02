import enCommon from './en/common';
import enFMHome from './en/fm/home-page';
import enCSHome from './en/cs/home-page';
import enFMAbout from './en/fm/about-page';
import enCSAbout from './en/cs/about-page';
import enFMServices from './en/fm/services-page';
import enCSConstruction from './en/cs/construction-page';
import enFMProjects from './en/fm/projects-page';
import enContactUs from './en/fm/contactUs-page';

import arCommon from './ar/common';
import arFMHome from './ar/fm/home-page';
import arCSHome from './ar/cs/home-page';
import arFMAbout from './ar/fm/about-page';
import arCSAbout from './ar/cs/about-page';
import arFMServices from './ar/fm/services-page';
import arCSConstruction from './ar/cs/construction-page';
import arFMProjects from './ar/fm/projects-page';
import arContactUs from './ar/fm/contactUs-page';

export default {
	en: {
		...enCommon,
		...enFMHome,
		...enCSHome,
		...enFMAbout,
		...enCSAbout,
		...enFMServices,
		...enCSConstruction,
		...enFMProjects,
		...enContactUs
	},
	ar: {
		...arCommon,
		...arFMHome,
		...arCSHome,
		...arFMAbout,
		...arCSAbout,
		...arFMServices,
		...arCSConstruction,
		...arFMProjects,
		...arContactUs
	}
};
