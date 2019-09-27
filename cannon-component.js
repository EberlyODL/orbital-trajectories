AFRAME.registerComponent('cannon',{
  init : function() {
    this.el.addEventListener('click', e => {
      this.el.emit('fire', {}, true)
    })

    window.addEventListener('fire', e => {
    });
  },
});