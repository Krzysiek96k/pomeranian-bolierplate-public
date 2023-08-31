import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaTextFundaments } from './TextFundaments/router-data';
import { blockRouterMetaData as CSSCascadesBlockRouterMetaData } from './SelectrosAndCascade/router-data';
import { blockRouterMetaData as blockRouterMetaStandardTags } from './StandardTags/router-data';
import { blockRouterMetaData as blockRouterMetaGoogleFonts } from './GoogleFonts/router-data';
import { blockRouterMetaData as blockRouterMetaCssAnimations } from './CssAnimations/router-data';


export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  CSSCascadesBlockRouterMetaData,
  blockRouterMetaTextFundaments,
  blockRouterMetaStandardTags,
  blockRouterMetaGoogleFonts,
  blockRouterMetaCssAnimations,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
