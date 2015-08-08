var drag = {
  on: function(eventName, callback){
    this._listeners[eventName] = callback 
  },
  trigger: function(eventName){
    this._listeners[eventName]()
  }
}