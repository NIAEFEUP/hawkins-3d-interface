import * as THREE from 'three';

export default class ChessBoard extends THREE.Mesh {
    constructor() {
        const boardGeometry = new THREE.BoxGeometry( 4, 4, 0.4);

        const boardTexture = new THREE.ImageUtils.loadTexture("/textures/board-pattern.png");
        boardTexture.repeat.set(4,4);
        boardTexture.wrapS = THREE.RepeatWrapping;
        boardTexture.wrapT = THREE.RepeatWrapping;
        
        const sideMaterial = new THREE.MeshLambertMaterial({color: 0x555555});
        const boardMaterials = [    
            sideMaterial,
            sideMaterial,
            sideMaterial,
            sideMaterial,
            new THREE.MeshLambertMaterial({ map: boardTexture }),
            sideMaterial
        ];
        super(boardGeometry, new THREE.MeshFaceMaterial(boardMaterials));
    }
}