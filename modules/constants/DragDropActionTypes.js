'use strict';

var keyMirror = require('keymirror');

var DragDropActionTypes = keyMirror({
  DRAG_START: null,
  DRAG_END: null,
  DRAG: null,
  DROP: null
});

module.exports = DragDropActionTypes;
