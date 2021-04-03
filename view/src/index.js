import * as THREE from 'three';
import ChessBoard from './objects/ChessBoard';
import Pawn from './objects/chessPieces/Pawn';
import Bishop from './objects/chessPieces/Bishop';
import King from './objects/chessPieces/King';
import Knight from './objects/chessPieces/Knight';
import Queen from './objects/chessPieces/Queen';
import Rook from './objects/chessPieces/Rook';

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

function setupBoard(scene) {
    const chessBoardSide = 4;
    const chessBoardThickness = 0.4;

    const group = new THREE.Group();

    // chess board
    const chessBoard = new ChessBoard(chessBoardSide, chessBoardThickness);
    group.add(chessBoard);
    
    // pawn
    const pawn = new Pawn();
    pawn.position.set(-1,chessBoardThickness/2,1);
    group.add(pawn);
    
    // bishop
    const bishop = new Bishop();
    bishop.position.set(-1,chessBoardThickness/2,0);
    group.add(bishop);
    
    // king
    const king = new King();
    king.position.set(0,chessBoardThickness/2, -0.5 );
    group.add(king);
    
    // knight
    const knight = new Knight();
    knight.position.set(0,chessBoardThickness/2,1.5);
    group.add(knight);
    
    // queen
    const queen = new Queen();
    queen.position.set(1,chessBoardThickness/2,1);
    group.add(queen);
    
    // rook
    const rook = new Rook();
    rook.position.set(1,chessBoardThickness/2,0);
    group.add(rook);
    
    group.rotateOnAxis(new THREE.Vector3(1,0,0), Math.PI/6);
    scene.add(group);
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

createLights(scene);
createCube(scene, renderer);
setupBoard(scene);