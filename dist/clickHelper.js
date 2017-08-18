/**
 * v-clickHelper
 *
 * desc: A Vue directive to distinguish between click and double click
 *
 * author:https://github.com/huangshuwei
 *
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = {
    bind: function bind(el, binding, vNode) {

        var msg = '',
            clicks = 0,
            delay = 300,
            timer = null;

        if (typeof binding.value !== 'function') {

            msg = 'in [clickHelper] directives, provided expression \'' + binding.expression + '\' is not a function. ';

            var compName = vNode.context.name;

            if (compName) {
                msg += 'in ' + compName;
            }
        }

        if (binding.arg) {

            if (/^\+?(0|[1-9]\d*)$/.test(binding.arg)) {

                delay = binding.arg;
            } else {

                msg = 'in [clickHelper] directives, provided arg \'' + binding.arg + '\' is not a positive integer. ';
            }
        }

        if (msg.length > 0) {

            console.error(msg);
        }

        var handler = function handler(e) {

            clicks++;

            if (clicks === 1) {

                timer = setTimeout(function () {

                    binding.value(e, false);

                    clicks = 0;
                }, delay);
            } else {

                clearTimeout(timer);

                binding.value(e, true);

                clicks = 0;
            }
        };

        el.__clickHelper__ = handler;

        el.addEventListener('click', handler, true);
    },

    unbind: function unbind(el) {
        el.removeEventListener('click', el.__clickHelper__, true);
        el.__clickHelper__ = null;
    }
};