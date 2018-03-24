'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function proccessRequest(options) {
    return (0, _requestPromise2.default)(options).then(function ($) {
        try {
            var projects = [];
            $('.link-to-software').each(function (i, elem) {
                // console.log(elem.attribs.href)
                if (elem.attribs) {
                    projects.push(elem.attribs.href);
                }
            });
            return Promise.resolve(projects);
        } catch (e) {
            return Promise.reject(e);
        }
    });
}

exports.default = proccessRequest;