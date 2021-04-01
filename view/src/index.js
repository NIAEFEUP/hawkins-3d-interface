import * as THREE from 'three';

function createBoard(scene) {
    const boardTexture = new THREE.ImageUtils.loadTexture("/textures/board-pattern.png");
    boardTexture.repeat.set(4,4);
    boardTexture.wrapS = THREE.RepeatWrapping;
    boardTexture.wrapT = THREE.RepeatWrapping;
    
    const boardMaterials = [    
        new THREE.MeshLambertMaterial({color: 0x555555}),
        new THREE.MeshLambertMaterial({color: 0x555555}),
        new THREE.MeshLambertMaterial({color: 0x555555}),
        new THREE.MeshLambertMaterial({color: 0x555555}),
        new THREE.MeshLambertMaterial({ map: boardTexture }),
        new THREE.MeshLambertMaterial({color: 0x555555})
    ];
    
    const boardGeometry = new THREE.BoxGeometry( 4, 4, 0.4);
    const board = new THREE.Mesh( boardGeometry, new THREE.MeshFaceMaterial(boardMaterials) );
    board.rotateOnAxis(new THREE.Vector3(-1,0,0), Math.PI/3);
    scene.add( board );
}

function createLights(scene) {
    var light = new THREE.AmbientLight( 0x555555 ); // soft white light
    scene.add( light );
    
    var spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( 50, 100, 50 );
    scene.add(spotLight);
}

function createCube(scene, renderer) {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    cube.translateY(2);

    scene.add( cube );

    const animate = function () {
        requestAnimationFrame( animate );
    
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    
        renderer.render( scene, camera );
    };
    animate();
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

createLights(scene);
createBoard(scene);
createCube(scene, renderer);