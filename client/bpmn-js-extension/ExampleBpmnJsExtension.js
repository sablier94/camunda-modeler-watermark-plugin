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
    //AddWatermark();
  });

  function AddWatermark() {

    let g = document.querySelector("[class^='layer-root']>g>g>g");
  
    var txt = svgCreate('text');
    svgAttr(txt, {
      x: '400 px',
      y: '0',
      style: 'transform: rotate(45deg); fill: black; font-size: 200px; opacity: 0.05',
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
