import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

export default class ChessPiece extends THREE.Group {

    constructor(name) {
        super();

        this.name = name;
        new OBJLoader().load(`/models/chess/${name}.obj`, (object) => {
            object.material = new THREE.MeshLambertMaterial({color: 0x555555});
            object.position.set(0,0,0);
            object.scale.set(.025, .025, .025);
            this.add(object);
        });
    }
}