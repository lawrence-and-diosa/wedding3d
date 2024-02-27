//audio
BOOK=function(pagesFront,pagesBack,pageOffsetWhenClosed, mainMaterial){

mp=new Audio();
mp.src='res/page.mp3';
mp.play2=function(){
this.currentTime=.3;
this.play();
}



scenev=scene;

num=-1;

//page
var pgs=[];
PAGE=function(str,str2){
I=pgs.length;
gm=new THREE.PlaneGeometry(1,1*1.3,2,1);
gm.translate(.5,0,0);
gmm=new THREE.PlaneGeometry(1,1*1.3,2,1);
gmm.translate(.5,0,0);
gm.merge(gmm);
gm.verticesNeedUpdate=true;
gm.computeVertexNormals();
for(var ii=0;ii<3;ii++){gm.faces[ii].materialIndex=0;}
for(var ii=4;ii<8;ii++){gm.faces[ii].materialIndex=1;}
txd=new THREE.ImageUtils.loadTexture(str);
txd2=new THREE.ImageUtils.loadTexture(str2);
txd2.wrapS = THREE.RepeatWrapping;
txd2.repeat.x = - 1;
//txd.magFilter=THREE.NearestFilter;
//txd2.magFilter=THREE.NearestFilter;
mt=new mainMaterial({map:txd,side:0});
mtt=new mainMaterial({map:txd2,side:THREE.BackSide });
mt.normalMap=new THREE.ImageUtils.loadTexture('res/norm.png');
mtt.normalMap=new THREE.ImageUtils.loadTexture('res/norm2.png');

pgs[I]=new THREE.Mesh(gm,[mt,mtt]);

pgs[I].receiveShadow=true;
pgs[I].castShadow=true;
pgs[I].sw=-1,pgs[I].ang=0,pgs[I].ang2=0;

pgs[I].F=function(){
if(this.sw==-1){num=pgs.indexOf(this);}
if(this.sw==1){num=pgs.indexOf(this)-1;}
mp.play2();
}
return pgs[I]
}
//pagetick
setInterval(function(){
for(var i=0;i<pgs.length;i++){
if(pgs[i].sw==1){pgs[i].ang+=(pgs[i].ang-(-Math.PI))*-.0125;}
if(pgs[i].sw==-1){pgs[i].ang+=(pgs[i].ang-0)*-.0125;}
pgs[i].ang2+=(pgs[i].ang2-pgs[i].ang)*-.025;
pgs[i].rotation.y=pgs[i].ang;

pgs[i].sw=-1;
pgs[i].position.z+=
((pgs[i].position.z-(-i*.01))*-.05)
+(num*.001)
;
if(i<=num){
pgs[i].sw=1;
pgs[i].position.z+=
((pgs[i].position.z-(i*.01))*-.05)
-(num*.001)
;

}


pgs[i].geometry.vertices[1].z=pgs[i].geometry.vertices[4].z=(pgs[i].ang2-pgs[i].ang)*.25
pgs[i].geometry.vertices[2].x=pgs[i].geometry.vertices[5].x=1+(((pgs[i].ang2-pgs[i].ang)*-pgs[i].sw)*.1)
pgs[i].geometry.vertices[7].z=pgs[i].geometry.vertices[10].z=(pgs[i].ang2-pgs[i].ang)*.25
pgs[i].geometry.vertices[8].x=pgs[i].geometry.vertices[11].x=1+(((pgs[i].ang2-pgs[i].ang)*-pgs[i].sw)*.1)

pgs[i].geometry.verticesNeedUpdate=true;
pgs[i].geometry.computeVertexNormals();

}
});





//page init
grp=new THREE.Group();scenev.add(grp);grp.translateX(-.5);
arr=pagesFront,arr2=pagesBack;
for(var i=0;i<arr.length;i++){
v=PAGE('res/'+(arr[i])+'.png','res/'+arr2[i]+'.png');
grp.add(v);
}
setInterval(function(){
v=pageOffsetWhenClosed
if(num<=-1){
grp.position.x+=(-.5-grp.position.x)*.05;
}
if(num>-1&&num<pgs.length-1){
grp.position.x+=(v-grp.position.x)*.05;
}
if(num>=pgs.length-1){
grp.position.x+=(.5-grp.position.x)*.05;
}
});








}


