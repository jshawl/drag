var drag = {
  is: false,
  mode: "body",
  _listeners: {},
  on: function(eventName, callback){
    this._listeners[eventName] = callback 
  },
  emit: function(eventName){
    if(typeof this._listeners[eventName] == "function")
      this._listeners[eventName]()
  },
  start: function(){
    this.is = true
  },
  end: function(){
    this.is = false
  },
  listen: function(){
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