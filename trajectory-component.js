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
      x: currentPosition.x, //these to strings make it work
      y: ((Math.sin(this.t * (2*Math.PI) * -(1/3))) * speed + currentPosition.y), //these to strings make it work
      z: ((Math.cos(this.t * (2*Math.PI) * (1/3))) * speed + currentPosition.z), //these to strings make it work
    })
  }

});