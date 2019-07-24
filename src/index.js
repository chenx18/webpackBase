import $ from 'jquery';

const str = _.join(['hello', 'world'], '+');

const div = document.createElement('div');
$(div).text(str);

$('body').append(div);
console.log(0);


