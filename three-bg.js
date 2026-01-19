const s=new THREE.Scene();
const c=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,.1,1000);
c.position.z=5;
const r=new THREE.WebGLRenderer({canvas:bg3d,alpha:true});
r.setSize(innerWidth,innerHeight);

const g=new THREE.BufferGeometry();
const p=new Float32Array(1400*3);
for(let i=0;i<p.length;i++)p[i]=(Math.random()-.5)*16;
g.setAttribute("position",new THREE.BufferAttribute(p,3));

const m=new THREE.PointsMaterial({color:0xffffff,size:.02});
const pts=new THREE.Points(g,m);
s.add(pts);

function a(){
requestAnimationFrame(a);
pts.rotation.y+=.0006;
pts.rotation.x+=.0003;
r.render(s,c);
}
a();
