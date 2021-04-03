import * as THREE from 'three';

export default class ChessBoard extends THREE.Mesh {
    constructor(size, thickness) {
        const boardGeometry = new THREE.BoxGeometry( size, size, thickness );

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
        this.rotateOnAxis(new THREE.Vector3(-1,0,0), Math.PI/2);
    }
}