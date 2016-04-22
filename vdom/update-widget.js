var isWidget = require("../vnode/is-widget.js")

module.exports = updateWidget

function updateWidget(a, b) {
    if (isWidget(a) && isWidget(b)) {
        if ("name" in a && "name" in b) {
            return a.id === b.id
        } else if (!(a.constructor instanceof a.constructor) || !(b.constructor instanceof b.constructor)) {
            return a.constructor === b.constructor
        } else {
            return a.init === b.init
        }
    }

    return false
}
