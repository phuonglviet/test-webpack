import _ from 'lodash';
import * as commnon from './modules/common';

console.log(
    _.join(['Another', 'module', 'loaded!'], ' ')
);

var rslt = commnon.add(10, 20);
console.log(rslt);