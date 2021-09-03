__webpack_nonce__ = 'c29tZSBjb29sIHN0cmluZyB3aWxsIHBvcCB1cCAxMjM=';

// const style = require('./index.css');
// const shelterMap = require('./map.js');
// const mapTable = require('./mapTable.js');
// const validate = require('./dataValidation.js');

import './index.css';
import pageMap from './map';
import mapTable from './mapTable';
import validate from './dataValidation';

pageMap();
mapTable();
validate();