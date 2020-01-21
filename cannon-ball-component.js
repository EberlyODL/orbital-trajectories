AFRAME.registerComponent('cannon-ball',{
  init : function(){
    const currentPosition = this.el.object3D.position;  // Reference to the component's entity.

    window.addEventListener('fire', e => {
      this.el.setAttribute('animate-trajectory', {
        speed: 1.9
      })
    })
  }
});