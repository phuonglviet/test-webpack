import $ from 'jquery';
// import * as velocity from 'velocity-animate';
import * as commnon from './modules/common';
import * as string from './modules/string.extend';
import _ from 'lodash'

// import '../css/styles.css';
// import '../css/cart.css';

const text = 'app';
const $body = $('body');

$body.html(text);
// velocity($body, 'fadeOut', {
//     duration: 1000
// });
console.log("Hello world!");
$(document).ready(function () {
    console.log("document ready!");
    var rslt = commnon.add(10, 20);
    $("#myLbl").text(rslt);
    document.body.appendChild(styleComponent());
    document.body.appendChild(cartComponent());
});

var rslt2 = commnon.subtrack(10, 20);
var strJoin = string.joinString('the cat', 'is eating');

function styleComponent() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack style'], ' ');
    element.className = "styleText";
    return element;
}

function cartComponent() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack cart'], ' ');
    element.className = "cartText";
    return element;
}