// src/i18n/index.ts
import enCommon from './en/common';
import enFMCommon from './en/fm/common';
import enFMHome from './en/fm/home-page';
import enFMAbout from './en/fm/about-page';
import enFMServices from './en/fm/services-page';

import arCommon from './ar/common';
import arFMCommon from './ar/fm/common';
import arFMHome from './ar/fm/home-page';
import arFMAbout from './ar/fm/about-page';
import arFMServices from './ar/fm/services-page';

export default {
	en: {
		...enCommon,
		...enFMCommon,
		...enFMHome,
		...enFMAbout,
		...enFMServices
	},
	ar: {
		...arCommon,
		...arFMCommon,
		...arFMHome,
		...arFMAbout,
		...arFMServices
	}
};
