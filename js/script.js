
let camera,scene,renderer,container,controls;
camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.001,800);
var aspect = window.innerWidth / window.innerHeight;
var d = 1;
//camera = new THREE.OrthographicCamera( - d * aspect, d * aspect, d, - d, 1, 1000 );
scene=new THREE.Scene();
renderer=new THREE.WebGLRenderer({alpha:true});
renderer.setPixelRatio(window.devicePixelRatio*1);
renderer.setSize( window.innerWidth, window.innerHeight);
container=document.createElement('div'); 
document.body.appendChild(container);
container.appendChild(renderer.domElement);
controls=new THREE.OrbitControls(camera,renderer.domElement);
render=function(){
controls.update();
renderer.render(scene,camera);
}
RENDER=function(){
requestAnimationFrame(RENDER);
render();}
RENDER();




