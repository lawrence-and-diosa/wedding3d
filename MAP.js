MAP=function(){
    

gm=new THREE.PlaneGeometry(10,10);
mt=new THREE.MeshBasicMaterial({color:0x000000,opacity:.5,transparent:true});
drk=new THREE.Mesh(gm,mt);
scene.add(drk);
drk.position.z=-99;

    
    
    
    
SHOWDESK=function(elm){
elm.width='50%';
elm.height='100%';
elm.style.position='absolute';
elm.style.left='25%';
elm.style.top='0%';
//elm.style.textAlign='center';
}
HIDEDESK=function(elm){
elm.width='0%';
elm.height='0%';
elm.style.position='absolute';
elm.style.left='-9999%';
elm.style.top='-9999%';
//elm.style.textAlign='center';
}
SHOWMOB=function(elm){
elm.width='100%';
elm.height='50%';
elm.style.position='absolute';
elm.style.left='0%';
elm.style.top='25%';
//elm.style.textAlign='center';
}
HIDEMOB=HIDEDESK;












//HELP
help=document.createElement('div');
document.body.appendChild(help);
imgv=new Image();
imgv.src='res/help.png';
help.appendChild(imgv);
help.width= help.height='100%'
//document.body.appendChild(help);
if(window.innerWidth>window.innerHeight){
SHOWDESK(help);
}
else{
SHOWMOB(help);
}
drk.position.z=.4;
setTimeout(function(){
HIDEDESK(help);
drk.position.z=-999;
},1000*5);
    
    
    
    
/*
zoom=document.createElement('div');
document.body.appendChild(zoom);
imgv=new Image();
imgv.src='res/tap.png';
zoom.appendChild(imgv);
zoom.width= help.height='100%'
zoom.zIndex=99999
*/




// MAP
map=document.createElement('IFRAME');
map.src=
"https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7709.970391358275!2d120.58300364102928!3d14.937918142357388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x33965e8b6a56c083%3A0x8c6fd64f21fd1565!2sSan%20Antonio%20de%20Padua%20Parish%20Church%20-%20San%20Antonio%2C%20Lubao%2C%20Pampanga%20(Archdiocese%20of%20San%20Fernando)%2C%20Purok%201%20San%20Antonio%202005%2C%20Lubao!3m2!1d14.9383863!2d120.57847869999999!4m5!1s0x0%3A0x666d3b0714da6ed2!2sCVRazon%20Function%20hall!3m2!1d14.9435614!2d120.59765689999999!5e0!3m2!1sen!2sph!4v1708978622948!5m2!1sen!2sph"
document.body.appendChild(map);
map.style='z-index:9999;scrolling:no;border:0;allowfullscreen:;loading:"lazy";referrerpolicy:no-referrer-when-downgrade;';
HIDEDESK(map);

gm=new THREE.PlaneGeometry(.2,.2);
txd=new THREE.ImageUtils.loadTexture('res/iconmap.png');
mt=new THREE.MeshBasicMaterial({map:txd,alphaTest:.5});
mshwz=new THREE.Mesh(gm,mt);
scene.add(mshwz);
mshwz.sw=-1;
mshwz.F=function(){this.sw*=-1;
if(this.sw==1){
drk.position.z=.4;
mshwz.scale.set(2,2,2);
if(window.innerWidth>window.innerHeight){
SHOWDESK(map);
}
else{
SHOWMOB(map);
}
}
else{
HIDEDESK(map);

drk.position.z=-99;
mshwz.scale.set(1,1,1);
}
}
if(window.innerWidth>window.innerHeight){
mshwz.position.set(0,0,.5);
setInterval(function(){
if(num==0){
mshwz.position.x+=((.75-mshwz.position.x)*.05);
}
else{
mshwz.position.x+=((5-mshwz.position.x)*.05);
}
});
}
else{
mshwz.position.set(0,0,.5);
setInterval(function(){
if(num==1){
mshwz.position.y+=((-.8-mshwz.position.y)*.05);
}
else{
mshwz.position.y+=((-5-mshwz.position.y)*.05);
}
});
}



}




FB=function(){

str=`
<font color=black>
<h3>

<a href='https://www.facebook.com/LNJ.Mariano'>
<image src='res/iconfb.png' width=3%>

LN JM - https://www.facebook.com/LNJ.Mariano</a>
<br><br>
<a href='https://www.facebook.com/profile.php?id=61550971187932'>
<image src='res/iconfb.png' width=3%>

Dio Dionicio - https://www.facebook.com/profile.php?id=61550971187932</a>
<br><br>
<a>+639506537139</a>


</font>
`;
fb=document.createElement('div');
document.body.appendChild(fb);
HIDEDESK(fb);
fb.innerHTML=str;


gm=new THREE.PlaneGeometry(.2,.2);
txd=new THREE.ImageUtils.loadTexture('res/iconfb.png');
mt=new THREE.MeshBasicMaterial({map:txd,alphaTest:.5});
mshrs=new THREE.Mesh(gm,mt);
scene.add(mshrs);
mshrs.sw=-1;
mshrs.F=function(){mshrs.sw*=-1;
if(mshrs.sw==1){
drk.position.z=.4;
mshrs.scale.set(2,2,2);
if(window.innerWidth>window.innerHeight){
SHOWDESK(fb);
}
else{
SHOWMOB(fb);
}
}
else{
HIDEDESK(fb);
drk.position.z=-99;
mshrs.scale.set(1,1,1);
}
//window.location.href='https://www.facebook.com/LNJ.Mariano';
}
//deskto icons sequences
if(window.innerWidth>window.innerHeight){
mshrs.position.set(0,0,.5);
setInterval(function(){
if(num==2){
mshrs.position.x+=((.8-mshrs.position.x)*.05);
}
else{
mshrs.position.x+=((5-mshrs.position.x)*.05);
}
});
}
//mobil ico sequences
else{
mshrs.position.set(0,0,.5);
setInterval(function(){
if(num==5){
mshrs.position.y+=((-.75-mshrs.position.y)*.05);
}
else{
mshrs.position.y+=((-5-mshrs.position.y)*.05);
}
});
}




}