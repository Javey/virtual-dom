var h = require("../h.js")
var isArray = require('x-is-array');
var isVNode = require('../vnode/is-vnode');
var isVText = require('../vnode/is-vtext');
var isVComment = require('../vnode/is-vcomment');
var isWidget = require('../vnode/is-widget');
var isVThunk = require('../vnode/is-thunk');
var parseTag = require('../virtual-hyperscript/parse-tag')

module.exports = function(tag, properties, children) {
    var props;
    if (!children && isChildren(properties)) {
        children = properties;
        props = {};
    }

    props = props || properties || {};

    tag = parseTag(tag, props)

    return h(tag, props, children)
}
module.exports.c = h.c

function isChildren(x) {
    return typeof x === 'string' || isArray(x) || isChild(x);
}

function isChild(x) {
    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x) || isVComment(x);
}

