/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import {renderBarchart} from './render/barchart';
import {renderConfusionMatrix} from './render/confusion_matrix';
import {renderHeatmap} from './render/heatmap';
import {renderHistogram} from './render/histogram';
import {renderLinechart} from './render/linechart';
import {renderScatterplot} from './render/scatterplot';
import {renderTable} from './render/table';
import {fitCallbacks, history} from './show/history';
import {layer, modelSummary} from './show/model';
import {showPerClassAccuracy} from './show/quality';
import {valuesDistribution} from './show/tensor';
import {accuracy, confusionMatrix, perClassAccuracy} from './util/math';

const render = {
  barchart: renderBarchart,
  table: renderTable,
  histogram: renderHistogram,
  linechart: renderLinechart,
  scatterplot: renderScatterplot,
  confusionMatrix: renderConfusionMatrix,
  heatmap: renderHeatmap,
};

const metrics = {
  accuracy,
  perClassAccuracy,
  confusionMatrix,
};

const show = {
  history,
  fitCallbacks,
  perClassAccuracy: showPerClassAccuracy,
  valuesDistribution,
  layer,
  modelSummary,
};

export {visor} from './visor';
export {render};
export {metrics};
export {show};

export * from './types';
