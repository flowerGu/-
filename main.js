<script>
  var arr=['IMG','SCRIPT','HR','BR']
  function getNode(nodes,value){
    var me =new RegExp(value,"g");
    var len=nodes.length;
    if(value.trim()){
      for(var i = 0; i < len; i++){
        if(arr.indexOf(nodes[i].nodeName)==-1){
          if(nodes[i].nodeType == 1 ){//dom树节点
            if(nodes[i].childNodes.length > 1){
              getNode(nodes[i].childNodes,value);//每次调用，开辟新运行空间    递归
            }
            else {
              nodes[i].innerHTML = nodes[i].innerHTML.replace(me,'<s style="color:red">'+value+'</s>');
            }
          }else if(nodes[i].nodeType==3  && nodes[i].textContent.indexOf(value)>-1 ){//文本节点和其他结点混合 eg:<li><a>abcd</a>abc</li>
            var nodeP = nodes[i].parentNode;
            if(nodeP.childNodes.length > 1){         
              var len = nodeP.childNodes.length;
              var count = -1;
              for(var j = 0; j < len; j++){
                if(nodeP.childNodes[j] == nodes[i]){//当前文本节点在父节点的位置
                  count = j;
                  break;
                }
              }
              if(count!=-1){
                var nodeI = nodeP.childNodes[count + 1];
                var nodeV = nodes[i].textContent.trim(); //将匹配内容的所在文本节点存到变量
                nodeV = nodeV.replace(me,'<s style="color:red">'+value+'</s>');//高亮
                nodeP.removeChild(nodes[i]);//在dom中移除文本节点
                var span = document.createElement('d');//创建元素
                span.innerHTML = nodeV;//将格式化后的内容放在创建的元素里
                nodeP.insertBefore(span,nodeI);
              }
            }
          }
        }

      }
    }
  }
  document.getElementById('search').addEventListener('blur',function(){
    var value=this.value;
    var htmls=document.body.childNodes;//获取子结点
    getNode(htmls,value);

  },false)
</script>
