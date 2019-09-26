AFRAME.registerComponent('drag-rotate-component',{
  schema : { speed : {default:1}},
  init : function(){
    this.ifMouseDown = false;
    this.x_cord = 0;
    this.y_cord = 0;
    document.addEventListener('mousedown',this.OnDocumentMouseDown.bind(this));
    document.addEventListener('mouseup',this.OnDocumentMouseUp.bind(this));
    document.addEventListener('mousemove',this.OnDocumentMouseMove.bind(this));
  }
});