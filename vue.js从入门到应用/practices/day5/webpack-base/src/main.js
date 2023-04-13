// 这是项目的入口文件

// 导入Jquery
// import $ from require('jquery');
// const $ = require('jquery');
import $ from 'jquery';

// 实现奇偶行变色we
$(function(){
    $('li:even').css('backgroundColor', 'orange');
    $('li:odd').css('backgroundColor', 'green');
});