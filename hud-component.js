AFRAME.registerComponent('hud',{
  init : function(){
    this.el.addEventListener('click', e => {
      this.el.removeAttribute('animation-mixer')
      this.el.setAttribute('animation-mixer', {
        repetitions: 1
      })
    })
  }
});