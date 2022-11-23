/**
 * A bpmn-js service that provides the actual plug-in feature.
 *
 * Checkout the bpmn-js examples to learn about its capabilities
 * and the extension points it offers:
 *
 * https://github.com/bpmn-io/bpmn-js-examples
 */


 import {
  append as svgAppend,
  create as svgCreate,
  attr as svgAttr,
  prepend as svgPrepend,
  innerSVG as svgInner,
} from 'tiny-svg';


import {
  query as domQuery
} from 'min-dom';

export default function ExampleBpmnJsExtension(eventBus, canvas, editorActions) {

  var self = this;

  editorActions.register({
    toggleWatermark: function() {
      if(document.getElementById('draftwatermark') !== null) {
        document.getElementById('draftwatermark').remove();
      } else {
        AddWatermark();
      }
    }
  });

  eventBus.on('import.done', function() {
    AddWatermark();
  });

  function AddWatermark() {
    // Get g tag from SVG container
    let g = domQuery('g.layer-root-1', canvas.viewer);
  
    var txt = svgCreate('text');
    svgAttr(txt, {
      x: '200',
      y: '0',
      transform: 'rotate(45deg)',
      style: 'transform: rotate(45deg); fill: black; font-size: 150px; opacity: 0.05',
      id: 'draftwatermark',
    })
  
    svgInner(txt, "DRAFT");
  
    svgAppend(g, txt);
  }

}

ExampleBpmnJsExtension.$inject = [
  'eventBus',
  'canvas',
  'editorActions'
];