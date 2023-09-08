import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as booleansBlockRouterMetaData } from './Boolean/router-data';
import { blockRouterMetaData as IfSwitchBlockRouterMetaData } from './IfSwitch/router-data';
import { blockRouterMetaData as NumbersBlockRouterMetaData } from './Numbers/router-data';
import { blockRouterMetaData as JsNumbersTrainingRouterMetaData } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as blockRouterJSComplexTypes } from './JSComplexTypes/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  booleansBlockRouterMetaData,
  IfSwitchBlockRouterMetaData,
  NumbersBlockRouterMetaData,
  JsNumbersTrainingRouterMetaData,
  blockRouterJSComplexTypes,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
