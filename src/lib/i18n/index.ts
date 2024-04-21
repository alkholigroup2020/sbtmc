// src/i18n/index.ts
import enCommon from './en/common';
import enFMCommon from './en/fm/common';
import enFMHome from './en/fm/home-page';

import arCommon from './ar/common';
import arFMCommon from './ar/fm/common';
import arFMHome from './ar/fm/home-page';

export default {
	en: {
		...enCommon,
		...enFMCommon,
		...enFMHome
	},
	ar: {
		...arCommon,
		...arFMCommon,
		...arFMHome
	}
};
