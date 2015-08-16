var drag = {
  is: false,
  mode: "body",
  on: function(eventName, callback){
    this._listeners[eventName] = callback 
  },
  emit: function(eventName){
    this._listeners[eventName]()
  },
  start: function(){
    this.is = true
    document.body.addEventListner("mousedown", function(event){

    })
    document.body.addEventListner("mousemove", function(event){

    })
  },
  end: function(){
    this.is = false
  }
}