////////////////////////////////////
import $ from 'jquery';
import _ from 'lodash'
import * as commnon from './modules/common';

$(document).ready(function () {
    document.body.appendChild(component());
    document.body.appendChild(subtrack());
});

function component() {
    const element = document.createElement('div');
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

function subtrack() {
    const element = document.createElement('div');
    var rslt = commnon.subtrack(10, 20);
    element.innerHTML = rslt;
    return element;
}


