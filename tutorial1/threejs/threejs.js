import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.BoxGeometry(3, 2, 0);
const material = new THREE.MeshBasicMaterial({color: 'blue'});

const cube = new THREE.Mesh(geometry, material);

// default position is (0,0,0)
scene.add(cube);

// move away a bit from (0,0,0)
camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 1;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();


