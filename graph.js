function graph() {
    var nodes = {};
  

  //can only add edges to nodes already in the graph
    this.addNode = function (id, obj, nodeEdges) {
      
        var x = {
            node: obj,
            edges: nodeEdges
        };
        nodes[id] = x;
    

    //add new edges to node lists, and edge main list
        nodeEdges.forEach(function iter(element) {
      
    

            for (var inner in nodes){
            if(inner == element){
                nodes[inner].edges.push(id);
            }
        }
        

    });

  }
  this.addEdge = function(id1, id2) {
  
    
    
      nodes[id1].edges.push(id2);
      nodes[id2].edges.push(id1);
    

  }
  this.removeNode = function(id) {
     //remove all references to node
     //1)remove node from node array
     //2)remove node from node's edge array
      

     
      //2)
      //iter through nodes
      for(var node in nodes){
          //iter thourgh it's edges
          var len = nodes[node].edges.length;
          for(var i=0; i<len; i++){
                  if(nodes[node].edges[i] == id){
                      
                      nodes[node].edges = nodes[node].edges.slice(0, i).concat(nodes[node].edges.slice(i+1, len));
                      len--;
                      i--;
                  }
              }
      }
    delete nodes[id];
  }
  this.removeEdge = function(id1, id2) {
     //remove all reference to edge
     
     //1)remove edge from node's edge array
   //nodes.id1.edges
   nodes.id1.edges.forEach(function(edge, index){
       if(edge == id2){
           nodes.id1.edges = nodes.id1.edges.slice(0, index).concat(nodes.id1.edges.slice(index+1, nodes.id1.length));
       }
   });
      
   nodes.id2.edges.forEach(function(edge, index){
       if(edge == id1){
            nodes.id2.edges = nodes.id2.edges.slice(0, index).concat(nodes.id2.edges.slice(index+1, nodes.id2.length));
           
       }
   });

  }
 
  this.getNodes= function(){
      return nodes;
  }
  this.getEdges = function(){
      //produce big edge list from individual nodes
      
      return edges;
  }

}
