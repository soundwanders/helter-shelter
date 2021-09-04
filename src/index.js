// const style = require('./index.css');
// const shelterMap = require('./map.js');
// const mapTable = require('./mapTable.js');
// const validate = require('./dataValidation.js');

import '../index.css';
import pageMap from './map.js';
import mapTable from './mapTable.js';
import validate from './dataValidation.js';
import resetMap from './resetMap.js';

pageMap();
mapTable();
resetMap();
validate();

__webpack_nonce__ = 'c29tZSBjb29sIHN0cmluZyB3aWxsIHBvcCB1cCAxMjM=';