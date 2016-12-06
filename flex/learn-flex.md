# Learn Flex
>传统的布局解决方案是基于盒状模型，依赖display属性 + position属性 + float属性。但是对于那些特殊布局非常不方便，比如，垂直布局就不容易实现。

##一、什么是Flex布局
>`Flex`是Flexible Box的缩写，意思就是“弹性布局”，用来为盒状模型提供最大的奶油灵活性。
任何一个容器都可以指定为Flex布局。
```
.box{
	display:flex;
}
```
行内元素也可以使用`Flex`布局。
```
.box{
	display:inline-flex;
}
```
Webkit内核的浏览器，必须加上-webkit的前缀。
```
.box{
	display:-webkit-flex;
	display:flex;
}
```
>注意：设为Flex布局以后，子元素的`float`、`clear`、`vertical-align`属性将失效。

##二基本概念
>采用Flex布局的元素，称为Flex容器，(flex container)，简称“容器”。它的所有的子元素自动成为容器成员，称为Flex项目(flex item)，简称“项目”。

![img1](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

容器默认存在两根轴：水平的主轴(`main axis`)和垂直的交叉轴（`cross axis`）。主轴的开始位置（与边框的交叉点）叫作`main start`，结束的位置叫作`main end`；交叉轴的开始位置叫作`cross start`，结束位置叫作`cross end`。
项目默认沿主轴排列。单个项目占据的主轴空间叫作`main size`，占据的交叉轴空间叫作`cross zize`。

##三、容器的属性
以下6个属性设置在容器上。
```
flex-direction
flex-wrap
flex-flow
justity-content
align-items
align-content
```
###3.1 flex-direction属性
`flex-direction`属性决定主轴的方向（既项目的方向）。

![img0](http://img2.tuicool.com/VbM7niq.png!web)

**<font color="red">图片上的顺序错误，应该为3、4、2、1</font>**
```
.box{
	flex-direction : row | row-reverse | column | column-reverse;
}
```
* row（默认值）：主轴为水平方向，起点为左侧；
* row-reverse : 主轴为水平方向，起点为右侧；
* column : 主轴为垂直方向，起点为上沿；
* column-reverse : 主轴为垂直方向，起点为下沿。

###3.2 flex-wrap 属性
默认情况下，项目都排在一条线上（又称“轴线”上）。`flex-wrap`属性定义，如果 一条轴线排不下，如何换行。
![img2](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png)
```
.box{
	flex-wrap : nowrap | wrap | wrap-reverse;
}
```
* nowrap（默认）：不换行；
![img3](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png)
* wrap：换行，第一行在上方；
![img4](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg)
* wrap-reverse：换行，第一行在下方。
![img5](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg)

###3.3 flex-flow 属性
`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值 为`row nowrap`。
```
.box{
	flex-flow : flex-direction值 || flex-wrap值
}
```
###3.4 justify-content 属性
`justify-content`属性定义了项目在主轴上的对齐方式。
![img6](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png)
```
.box{
	justify-content : flex-start | flex-end | center | space-between | space-around;
}
```
具体的对齐方式写轴的方向有关。下面假设主轴为从左到右。

- flex-start (默认值) ：左对齐
- flex-end ：右对齐
- center ：居中
- space-betwwen ： 两端对齐，项目之前的间隔相等。
- space-around ： 每个项目两侧的间隔相等。所以，项目之前的间隔比项目与边框的间隔大一倍。

###3.5align-items属性
`align-items`属性定义项目在交叉轴上如何对齐。
![img7](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)
```CSS
.box{
	align-items : flex-start | flex-end | center | baseline | strech;
}
```
具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。

- flex-start ：交叉轴的起点对齐。
- flex-end ：交心轴的终点对齐。
- center ：交心轴的中点对齐。
- baseline ：项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

###3.6align-conte属性
`align-content`属性定义了多根轴线的对齐方式。如果 项目吸有一根轴线，该属性不起作用。
![img8](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)
```
.box{
	align-content : flex-start | flex-end | center | space-between | space-around | stretch;
}
```
- flex-start ：与交叉轴的起点对齐。
- flex-end ：与交叉轴的终点对齐。
- center ：与交叉轴的中点对齐。
- space-between ：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around ：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。

##四、项目的属性
```
order
flex-grow
flex-shrink
flex-basis
flex
align-self
```
###4.1 order属性
`order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
![img9](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png)
```
item:nth-child(1){
	order : 5;
}
```


###4.2 flex-grow 属性
`flex-grow`属性定义项目的放大比例，默认为0，即如果 存在剩余空间，也不放大。
![img10](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png)
```
item{
	flex-grow : 0; /* default 0 */
}
```
如果所有项目的`flex-grow`属性都为1，则它们将千分剩余空间（如果有的话）。如果 一个项目的`flex-grow`属性为2，其它项目都为1，则前者占据的剩余空间将比其它项多一倍。

###4.3 flex-shrink属性
`flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
![img11](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg)
```
.item{
	flex-shrink : 1; /* default 1*/	
}
```
如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其它项目都为1，则空间不足时，前者不缩小。
负值对该属性无效。

###4.4 flex-basis属性
`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。
```
.item{
	flex-basis : | auto; /* default auto */
}
```
它可以设为跟 `width` 或 `height` 属性一样的值（比如350px），则项目将占据固定空间。

###4.5 flex属性
`flex`属性是`flex-grow`，`flex-shrink`和`flex-basis`的简写，默认值为 `0 1 auto`。后两个属性可选。
```
.item{
	flex : none | [<flex-grow><flex-shrink> ? || <flex-basis>]
}
```
该属性有两个快捷值：auto(1 1 auto) 和 none(0 0 auto)。建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

###4.6 align-self属性
`align-self`属性允许单个项目有与其它项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于 `stretch`。后两个属性可选。
![img12](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png)
```
.item{
	align-self : auto | flex-start | flex-end | center | baseline | stretch ;
}
```
该属性可能取6个值 ，除了`auto`，其它都与`align-items`属性完全一致。

摘录自阮一峰博客：[http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

