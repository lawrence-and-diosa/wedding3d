


TABLE=function(scenev,mainMaterial2,  sz){


//table
gm=new THREE.PlaneGeometry(4,4);
//if(isPortrait){gm.rotateZ(-Math.PI/2);}
gm.translate(0,0,-.5);
txd=new THREE.ImageUtils.loadTexture('res/table.png');
txd.wrapS=txd.wrapT=THREE.RepeatTexture;
txd.repeat.set(1,1);
mt=new mainMaterial2({map:txd,side:2});
msh=new THREE.Mesh(gm,mt);
scenev.add(msh);
msh.receiveShadow=true;

}