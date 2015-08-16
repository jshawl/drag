var expect = chai.expect

describe("drag", function(){
  it("is an object", function(){
    expect(drag).to.be.ok 
  })
  it("has a mode", function(){
    expect(drag.mode).to.be.ok
  })
  it("listens for events", function(){
    expect(typeof drag.on).to.eq("function") 
  })
  it("emits events", function(){
    expect(typeof drag.emit).to.eq("function") 
  })
})
