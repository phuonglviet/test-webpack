import $ from 'jquery';
// import velocity from 'velocity-animate';
import * as commnon from './modules/common';
import * as string from './modules/string.extend';

const text = 'app2';
const $body = $('body');

$body.html(text);
// velocity($body, 'fadeOut', {
//     duration: 1000
// });

$(document).ready(function () {
    var rslt = commnon.add(10, 20);
    rslt = commnon.subtrack(50, 20);
    console.log(rslt);
});

var strJoin = string.joinString('the cat', 'is eating');