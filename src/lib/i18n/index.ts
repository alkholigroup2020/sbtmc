// src/i18n/index.ts
import enCommon from './en/common';
import enFMCommon from './en/fm/common';

import arCommon from './ar/common';
import arFMCommon from './ar/fm/common';

export default {
	en: {
		...enCommon,
		...enFMCommon
	},
	ar: {
		...arCommon,
		...arFMCommon
	}
};
