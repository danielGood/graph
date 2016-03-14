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
      
    
        
        /////
            for (var inner in nodes){
            if(inner == element){
                nodes[inner].edges.push(id);
            }
        }
        
        ////


    });

  }
  this.addEdge = function(id1, id2) {
    //add edge to edge array
    //search through node array, find nodes
    //add edges to the node's edge arrays
    
    
      nodes[id1].edges.push(id2);
      nodes[id2].edges.push(id1);
    

  }
  this.removeNode = function(id) {
     //remove all references to node
     //1)remove node from node array
     //2)remove node from node's edge array
      
      
      //1)
      /*
      var len = nodes.length;
      for(var i=0; i<len; i++){
          if(nodes[i].id == id){
              nodes = nodes.slice(0, i).concat(nodes.slice(i+1, len));
              len--;
              i--;
          }else{
              var elen = nodes[i].edges.length;
              for(var j=0; j<elen; j++){
                  if(nodes[i].edges[j][0] == id || nodes[i].edges[j][0]==id){
                      //3)
                      nodes[i].edges = nodes[i].edges.slice(0, j).concat(nodes[i].edges.slice(i+1, elen));
                      elen--;
                      j--;
                  }
              }
              
          }
      }
      */
      //1)
      delete nodes.id;
      //2)
      //iter through nodes
      for(var node in nodes){
          //iter thourgh it's edges
          var len = node.edges.length;
          for(var i=0; i<len; i++){
                  if(node.edges[i] == id){
                      
                      node.edges = node.edges.slice(0, i).concat(node.edges.slice(i+1, len));
                      len--;
                      i--;
                  }
              }
      }
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
  this.print = function() {
    console.log("Nodes");
    console.log("");
   
  
  }
  this.getNodes= function(){
      return nodes;
  }
  this.getEdges = function(){
      //produce big edge list from individual nodes
      
      return edges;
  }

}
