var drag = {
  is: false,
  mode: "body",
  _listeners: {},
  on: function(eventName, callback){
    this._listeners[eventName] = callback 
  },
  emit: function(eventName, event){
    if(typeof this._listeners[eventName] == "function")
      this._listeners[eventName](event)
  },
  start: function(){
    this.is = true
  },
  end: function(){
    this.is = false
  },
  listen: function(){
    var controls = document.querySelectorAll("[drag-mode]")
    for(var i = 0; i < controls.length; i++){
      var control = controls[i]
      control.addEventListener("click", function(event){
        this.mode = event.target.getAttribute("drag-mode") 
	for(var j = 0; j < controls.length; j++){
	  var control = controls[j]
	  control.classList.remove("active")
	}
        event.target.classList.add("active")
      }.bind(this))
    }
    document.body.addEventListener("mousedown", function(event){
      this.is = true
      this.emit("start", event)
    }.bind(this))
    document.body.addEventListener("mousemove", function(event){
      if(this.is){
	this.emit("move", event)
      }
    }.bind(this))
    document.body.addEventListener("mouseup", function(event){
      this.emit("end", event)
      this.is = false
    }.bind(this))
  }
}
drag.listen()