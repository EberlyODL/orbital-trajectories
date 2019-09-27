AFRAME.registerComponent('scene-controller',{
  init : function() {
    window.addEventListener('fire', e => {
      this.el.removeAttribute('animation-mixer')
      this.el.setAttribute('animation-mixer', {
        repetitions: 1
      })
    });
  },
  tick: function(time) {
    console.log(Math.sin(time) * 10)
  }
});