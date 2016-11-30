# -向前端框架更近一步！
##为了更好的学习框架，试着用原生的js来操作dom,脱离jquery
##原理：html和text分开处理
##html:nodeType==1
##text:(nodeType==3) or (node.textContent.trim())
##子集：childNodes
##递归dom树节点   //每次调用，开辟新运行空间，原理类似于for(var i,a=[1,2,3];i<a.length;i++){}
## 查找当前文本节点在父节点的位置，原理类似于for(var i,a=[1,2,3];i<a.length;i++){if(a[i]===3){console.log(i);break}}
##自定义正则：new RegExp(value,"g")
##非文本节点:var arr=['IMG','SCRIPT','HR','BR']
arr.indexOf(text.nodeName)>-1
## document.getElementById().insertBefore(new,old)
