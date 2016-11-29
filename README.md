# -向前端框架更近一步！
为了更好的学习框架，试着用原生的js来操作dom,脱离jquery
原理：html和text分开处理
html:nodeType==1
text:(nodeType==3) or (node.textContent.trim())
子集：childNodes
自定义正则：new RegExp(value,"g")
空元素节点:var arr=['IMG','SCRIPT','HR','BR']
          arr.indexOf(text.nodeName)>-1
