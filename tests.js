
/*	
QUnit.test( "hello test", function( assert ) {
	assert.ok( 1 == "1", "Passed!" );
	});
*/



QUnit.test("Graph addNode", function( assert ) {
    
    var house = new Object();
    house.rooms = 5;
    house.size = 11;
    house.address = "425 Baker"
    
    
    var myGraph = new graph();
  
    myGraph.addNode("My House", house,[]);
   //console.log(myGraph.getNodes());
    assert.deepEqual(myGraph.getNodes(), {"My House": {node: house, edges: []}});
	
    
    myGraph.addNode("String", "str", []);
    assert.deepEqual(myGraph.getNodes(), {"My House": {node: house, edges: []}, "String": {node:"str", edges:[]}}); 
});

QUnit.test("Graph addEdges", function( assert ) {
    var myGraph = new graph();
    myGraph.addNode("k", "kitchen", []);
    myGraph.addNode("bath", "bathroom", []);
    myGraph.addNode("living room", "living room", []);
    myGraph.addNode("bed1", "bedroom 1", []);
    myGraph.addNode("bed2", "bedroom 2", []);
    myGraph.addEdge("bed1", "bed2");
    myGraph.addEdge("k", "bath");
    myGraph.addEdge("bath", "bed1");
    //console.log(myGraph.getEdges());
    
    //console.log(myGraph.getNodes());
    //assert.deepEqual(myGraph.getNodes(), [["bed1", "bed2"],["k", "bath"], ["bath", "bed1"]]);
    assert.deepEqual(myGraph.getNodes()["bath"].edges,["k", "bed1"])
    
    
});
/*
QUnit.test("Graph removeNodes", function( assert ) {
});
QUnit.test("Graph removeEdges", function( assert ) {
    
});
QUnit.test("duplicate ID", function(assert){
    
    
});
QUnit.test("edges equal test", function(assert){
    //on second thought maybe I should get rid of edges object
    //because duplication of data is bad
    
});
           

*/
