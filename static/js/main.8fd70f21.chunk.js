(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"max",clicked:!1,image:"http://disneyexaminer.com/wp-content/uploads/2015/09/disney-sidekicks-tangled-maximus.gif",msg:""},{id:2,name:"mikey",clicked:!1,image:"http://24.media.tumblr.com/acc3bd9f4ea4cf109c691a0ce07f7730/tumblr_mm5xrdw7vY1rlmpm0o1_500.gif",msg:""},{id:3,name:"pua",clicked:!1,image:"https://www.gifvideo.net/files/photos/2017/11/little-pig-friend-who8217s-already-stolen-my-heart-in-disney8217s-moana.gif",msg:""},{id:4,name:"minion",clicked:!1,image:"https://media1.giphy.com/media/QbkL9WuorOlgI/giphy.gif?cid=790b76115cca75282e5837784954bde0&rid=giphy.gif",msg:""},{id:5,name:"zootopia",clicked:!1,image:"https://media1.giphy.com/media/16bJmyPvRbCDu/giphy.gif?cid=790b76115cca754b35332e4e73ee04dc&rid=giphy.gif",msg:""},{id:6,name:"baymax",clicked:!1,image:"https://media3.giphy.com/media/HOdcpVdGGKjRK/giphy.gif?cid=790b76115cca741d4e7a6d3077f4d88a&rid=giphy.gif",msg:""},{id:7,name:"olaf",clicked:!1,image:"https://media2.giphy.com/media/12LHSf56POPTgs/giphy.gif?cid=790b76115cca74b1556339686396d5f5&rid=giphy.gif",msg:""},{id:9,name:"up",clicked:!1,image:"https://media1.giphy.com/media/zMmcyhHu5Fol2/giphy.gif?cid=790b76115cca735357575765519b6f53&rid=giphy.gif",msg:""}]},,,function(e,i,a){e.exports=a(20)},,,,,,function(e,i,a){},function(e,i,a){},function(e,i,a){},function(e,i,a){},function(e,i,a){},function(e,i,a){"use strict";a.r(i);var t=a(0),c=a.n(t),n=a(2),r=a.n(n),o=(a(15),a(3)),m=a(4),d=a(7),l=a(5),s=a(8);a(16),a(17);var g=function(e){return e.children,c.a.createElement("div",{className:"jumbotron"},"Click Click",c.a.createElement("h2",null,"Click on any images! But no repeats!"))};a(18);var u=function(e){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark"},c.a.createElement("p",{className:"name"},"Clicky Game"),c.a.createElement("p",{className:"score"},"Score:",e.correctScore))};a(19);var f=function(e){return c.a.createElement("div",{onClick:function(){return e.newFriend(e.id)},className:"card"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image,id:e.id})))},h=a(6),p=function(e){function i(){var e,a;Object(o.a)(this,i);for(var t=arguments.length,c=new Array(t),n=0;n<t;n++)c[n]=arguments[n];return(a=Object(d.a)(this,(e=Object(l.a)(i)).call.apply(e,[this].concat(c)))).state={friends:h,correctScore:0},a.newFriend=function(e){console.log(a.state);var i=a.state.friends,t=i.filter(function(i){return i.id===e})[0];console.log("matched;",t),t.clicked?(a.setState({msg:"Already clicked. Try again"}),console.log(t,"match000"),i.sort(function(e,i){return.5-Math.random()}),a.setState({correctScore:0})):(t.clicked=!0,console.log("pic clicked",t.clicked,"id of pic clicked"),i.sort(function(e,i){return.5-Math.random()}),a.setState({correctScore:a.state.correctScore+1,msg:"Good Job"}))},a}return Object(s.a)(i,e),Object(m.a)(i,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(u,{correctScore:this.state.correctScore}),c.a.createElement(g,null),c.a.createElement("h3",null,this.state.msg),this.state.friends.map(function(i){return c.a.createElement(f,{id:i.id,key:i.id,image:i.image,newFriend:e.newFriend})}))}}]),i}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.8fd70f21.chunk.js.map