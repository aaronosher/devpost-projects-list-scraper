'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sources = require('./sources');

var _sources2 = _interopRequireDefault(_sources);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _getProjects = require('./getProjects');

var _getProjects2 = _interopRequireDefault(_getProjects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets projects for page
 * @param {number} page 
 */
function getProjects(page) {

    var options = {
        uri: _sources2.default.devpost + page,
        transform: function transform(body) {
            return _cheerio2.default.load(body);
        }
    };

    return (0, _getProjects2.default)(options);
}

exports.default = getProjects;