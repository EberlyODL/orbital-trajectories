AFRAME.registerComponent('animate-trajectory',{
  schema : { speed : {default: 1}, time: {default: .01}},

  init : function(){
    this.t = 0
  },

  tick: function (time, timeDelta) {
    // console.log('timeDelta:', timeDelta)
    const currentPosition = this.el.object3D.position;  // Reference to the component's entity.

    // https://stackoverflow.com/questions/23541879/move-object-along-splinecircle-in-three-js
    this.t += this.data.time
    const speed = this.data.speed
    this.el.setAttribute('position', {
      x: ((Math.cos(this.t) * -.1) * speed + currentPosition.x), //these to strings make it work
      y: ((Math.sin(this.t) * -.1) * speed + currentPosition.y), //these to strings make it work
      z: currentPosition.z
    })
  }

});