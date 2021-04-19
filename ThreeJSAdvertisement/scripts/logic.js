import {GLTFLoader} from 'https://unpkg.com/three/examples/jsm/loaders/GLTFLoader.js';
import {FBXLoader} from 'https://unpkg.com/three/examples/jsm/loaders/FBXLoader.js';
const scene = new THREE.Scene();
const colorScene = new THREE.Color("#00bfff");
scene.background = colorScene;
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: '#d68f2f' } );
const obj = new THREE.Mesh( geometry, material );
const geometryCube = new THREE.BoxGeometry();
const materialCube = new THREE.MeshBasicMaterial( { color: '#d68f2f' } );
const geometryCube1 = new THREE.BoxGeometry();
const materialCube1 = new THREE.MeshBasicMaterial( { color: '#d68f2f' } );
const Cube = new THREE.Mesh( geometryCube, materialCube );
const Cube1 = new THREE.Mesh( geometryCube1, materialCube1 );
Cube1.position.z = -10;
Cube1.position.x = 3;
scene.add(Cube);
scene.add(Cube1);
obj.position.z = 5;
scene.add(obj);
var BulletMove = false;
camera.position.z = 5;
var MouseX = 0;
var MouseY = 0;
let canvas = renderer.domElement;
canvas.addEventListener('mousemove', function (evt) {
  MouseX = evt.clientX/200;
  MouseY = evt.clientY/200;
});
let pistolPos;

function animate() {
requestAnimationFrame( animate );
renderer.render( scene, camera );
//camera.rotation.y = -MouseX;
obj.rotation.y = -MouseX;

//camera.rotation.x = -MouseY;
obj.rotation.x = -MouseY;
obj.rotation.z = 0;
Cube.rotation.x += 0.1;
if(BulletMove == true){
Bulletmesh.position.set(Bulletmesh.position.x,Bulletmesh.position.y,Bulletmesh.position.z - 5);
if(Bulletmesh.position.z < Firstintersect.object.position.z){
  Bulletmesh.visible = false;
  BulletMove =false;
}
}
}

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchend', handleTouchMove, false);
document.addEventListener('mousedown', handleTouchStart, false);
document.addEventListener('mousemove', handleTouchMove, false);
document.addEventListener('mouseup', handleTouchEnd, false);
var xDown = null;
var yDown = null;
var xUpOld = null;
var yUpOld = null;
var isTouch = false;

function handleTouchStart(evt) {
    isTouch = true;
    switch (evt.type) {
        case 'mousedown':
            xUpOld = evt.clientX - screen.width/2;
            yUpOld = evt.clientY - screen.height/2;
            break;

        case 'touchstart':
            xUpOld = evt.touches[0].clientX - screen.width/2;
            yUpOld = evt.touches[0].clientY - screen.height/2;
            break;
    }
};

function handleTouchMove(evt) {
    if (isTouch){
        var xUpNew;
        var yUpNew;
        
        switch (evt.type) {
            case 'mousemove':
                xUpNew = evt.clientX - screen.width/2;
                yUpNew = evt.clientY - screen.height/2;
                break;

            case 'touchmove':
                xUpNew = evt.touches[0].clientX - screen.width/2;
                yUpNew = evt.touches[0].clientY - screen.height/2;
                break;
        }
        var xDiff = (xUpNew - xUpOld)/500;
        var yDiff = (yUpNew - yUpOld)/500;
        camera.rotation.x += yDiff;
        camera.rotation.y += xDiff;
        camera.rotation.x = clamp(camera.rotation.x, -0.5, 0.5)
        camera.rotation.y = clamp(camera.rotation.y, -0.7, 0.7)
        console.log(camera.rotation.x + '    ' + camera.rotation.y);
        xDown = null;
        yDown = null;
        xUpOld = xUpNew;
        yUpOld = yUpNew;   
    }
};

function handleTouchEnd(evt) {
    isTouch = false;
};

var data = JSON.stringify( {
    "asset": {
        "generator": "COLLADA2GLTF",
        "version": "2.0"
    },
    "scenes": [
        {
            "nodes": [
                0
            ]
        }
    ],
    "scene": 0,
    "nodes": [
        {
            "children": [
                5,
                4,
                3,
                2,
                1
            ],
            "matrix": [
                1.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                -1.0,
                0.0,
                0.0,
                1.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                1.0
            ],
            "name": "Z_UP"
        },
        {
            "mesh": 0,
            "name": "Brep"
        },
        {
            "matrix": [
                0.0,
                1.0,
                0.0,
                0.0,
                0.0,
                0.0,
                1.0,
                0.0,
                1.0,
                0.0,
                0.0,
                0.0,
                182.51576232910157,
                19.950035095214845,
                4.875007152557373,
                1.0
            ],
            "camera": 0,
            "name": "View-Right"
        },
        {
            "matrix": [
                1.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                1.0,
                0.0,
                0.0,
                -1.0,
                0.0,
                0.0,
                43.8691520690918,
                -332.5400695800781,
                12.504758834838868,
                1.0
            ],
            "camera": 1,
            "name": "View-Front"
        },
        {
            "matrix": [
                1.0,
                0.0,
                0.0,
                0.0,
                0.0,
                1.0,
                0.0,
                0.0,
                0.0,
                0.0,
                1.0,
                0.0,
                31.408903121948247,
                14.051705360412598,
                232.52386474609376,
                1.0
            ],
            "camera": 2,
            "name": "View-Top"
        },
        {
            "matrix": [
                -0.7431529760360718,
                -0.6691210269927979,
                0.0,
                0.0,
                0.3345620036125183,
                -0.37157899141311648,
                0.8660240173339844,
                0.0,
                -0.5794749855995178,
                0.6435880064964294,
                0.5000029802322388,
                0.0,
                39.03803253173828,
                20.40325164794922,
                22.984050750732427,
                1.0
            ],
            "camera": 3,
            "name": "View-Perspective"
        }
    ],
    "cameras": [
        {
            "orthographic": {
                "xmag": 1.0,
                "ymag": 0.5753114223480225,
                "zfar": 144.44171142578126,
                "znear": 127.8473892211914
            },
            "type": "orthographic",
            "name": "Camera-Right"
        },
        {
            "orthographic": {
                "xmag": 1.0,
                "ymag": 0.5701459050178528,
                "zfar": 359.5081481933594,
                "znear": 340.5594787597656
            },
            "type": "orthographic",
            "name": "Camera-Front"
        },
        {
            "orthographic": {
                "xmag": 1.0,
                "ymag": 0.5723904967308044,
                "zfar": 222.20835876464845,
                "znear": 205.61404418945313
            },
            "type": "orthographic",
            "name": "Camera-Top"
        },
        {
            "perspective": {
                "yfov": 0.454779714345932,
                "zfar": 12.957754135131836,
                "znear": 9.90760612487793
            },
            "type": "perspective",
            "name": "Camera-Perspective"
        }
    ],
    "meshes": [
        {
            "primitives": [
                {
                    "attributes": {
                        "NORMAL": 1,
                        "POSITION": 2
                    },
                    "indices": 0,
                    "mode": 4,
                    "material": 0
                }
            ],
            "name": "mesh-a881341f-2320-4e1c-b3d6-bcef9f0d82c4"
        }
    ],
    "accessors": [
        {
            "bufferView": 0,
            "byteOffset": 0,
            "componentType": 5123,
            "count": 6318,
            "max": [
                1913
            ],
            "min": [
                0
            ],
            "type": "SCALAR"
        },
        {
            "bufferView": 1,
            "byteOffset": 0,
            "componentType": 5126,
            "count": 1914,
            "max": [
                0.9950299859046936,
                0.9950299859046936,
                1.0
            ],
            "min": [
                -0.9950299859046936,
                -0.9950299859046936,
                -1.0
            ],
            "type": "VEC3"
        },
        {
            "bufferView": 1,
            "byteOffset": 22968,
            "componentType": 5126,
            "count": 1914,
            "max": [
                46.611549377441409,
                14.214917182922364,
                15.528172492980956
            ],
            "min": [
                45.71234893798828,
                13.315715789794922,
                15.235575675964356
            ],
            "type": "VEC3"
        }
    ],
    "materials": [
        {
            "pbrMetallicRoughness": {
                "baseColorFactor": [
                    0.9803919792175292,
                    0.9803919792175292,
                    0.9803919792175292,
                    1.0
                ],
                "metallicFactor": 0.0
            },
            "emissiveFactor": [
                0.0,
                0.0,
                0.0
            ],
            "name": "fx-cf2be1de-b81c-4d69-9418-dde91d266086"
        }
    ],
    "bufferViews": [
        {
            "buffer": 0,
            "byteOffset": 45936,
            "byteLength": 12636,
            "target": 34963
        },
        {
            "buffer": 0,
            "byteOffset": 0,
            "byteLength": 45936,
            "byteStride": 12,
            "target": 34962
        }
    ],
    "buffers": [
        {
            "byteLength": 58572,
            "uri": "data:application/octet-stream;base64,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Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7Sbp+Pz2dy706JLU7OLzAPSEecT8YJKW+uTS+PU30bT+Qvba+uTS+PU30bT+Qvba+gV/DPWprdD8rNJC+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PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7PZ3LPUm6fj86JLU7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XOeHvqpE2TwsuXY/QmC1vmX7ED0mOm8/fV7xvhPvQD0mcmE/OLp+v7acyz3QYb47iBF+v/kVyz1crZM9Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7Sbp+vz2dyz06JLU7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xoY4Qo/8VkE8x3dBato4QhbcVkFlc3hBzIY4QoH9VkFlc3hBAAABAAIAAwAEAAEAAQAAAAUAAQAFAAMABgAHAAQACAAJAAoACAALAAkACgAMAAgABwAGAAwABwAMAAoAAwAGAAQADQAOAA8AEAARAA0AEQASAA0ADQASAA4ABgAPAA4AEwAUAAYAFQAWABQAFgAVABcAFQAYABcAEwAVABQAEwAGAA4AAwAPAAYAGQAaABsAHAAbAB0AGwAcABkAHgAfACAAHgAhAB8AIgAjACQAIgAlACMAJAAhAB4AJgAlACcAIgAkACgAKQAkAB4AJgAqACsALAAtACsALgAsAC8AKwAvACwAMAAvACsAMQAtACwAJQAiACcAMgAeACAAMwAxACwANAA1ADMANgA3ADgAOQA6ADgAOwA2ADwANQA9AD4ANAAzACwAPwA1ADQAOgBAADgAQQA4AEIAQgA4AEAAQQBCAEMARABBAEMAPAA1AEUANAAsAC4ALgBGADQARwA8AEgAHgAyAEkAHgBJACkAPABHAEoASwA7ADwASgBLADwANgA7AEwATQBFADUAPgBNADUATgBIADwATwBQADwATgA8AFAARQBPADwAUQBJADIAUgBTADgAVABSADgAOQA4AFUAQQBEAFYAUwBVADgAVwBYADYATABXADYAWQBaADYANwA2AFoAWABZADYAVAA4ADcAQQBWAFsAXAAuAC8AMgAgAF0AXgBBAFsAXwBgAGEAYgBjAGQAZQBmAGIAZQBnAGYAaABiAGkAYQBqAGMAawBBAGwAZQBtAG4AZQBuAGcAbwBwAHEAZQBoAHIAZQBiAGgAZQByAHAAcAByAHEAbABBAHMAcwBBAF4AdABuAHUAbQB1AG4AdgB1AG0AbQB3AHYAeABwAHkAeAB3AG0AcAB4AG0AegB5AHsAeQBwAHwAfQB6AHsAfgB6AH0AfgB/AIAAfgB9AH8AeQB8AHsAawCBAEEAggCDAF8AggBfAEEAXwCEAIUAXwCGAIQAgwCGAF8AhwBfAIgAiQBfAIcAXwCKAIsAiwBgAF8AiQCKAF8AhQCIAF8AjABhAGAAYQCNAI4AjwBhAI4AkABwAJEAkgB8AHAAkwCSAHAAcACQAJMAjQBhAIwAlACVAGEAlQCWAGEAcgBoAJcAYQCWAGoAbwCRAHAAYwBqAJgAlABhAI8AggBBAIEAUQCZAEkAmgBRADIASQCbAJwAnQCbAEkAmQCdAEkAIACeAJ8AIACgAJ4AoQCiADIAMgBdAKMAowCkADIAIACfAF0AmgAyAKIAJAClAKYAJAApAKUAJACnACgAIgCoAKkAIgAoAKgAJACmAKcAqgAiAKsAqwAiAKwArQAiAK4ArQCvACIAIgCqAK4ArwCwACIAIgCpAKwASQCcACkAIgCxALIAIgCyALMAtAC1ACIAtAAiALMAtQC2ACIAIgC3ACcAuAC5ALoAtwC7ACcAuAC8AL0AuwC+ACcAtwAiALYAvAC4AL8AwAAmAMEAwgAmAMAAKwAqAMMAxAAqACYAwgDEACYAxQArAMMAvgC5ALgAuAAnAL4AxgDHACYAxgC4AL0AxwDBACYAuADGACYAuAC6AL8AsACxACIAyACgACAAyQArAMUAygDLAGMAmADKAGMAzADNAGMAzABjAMsAYwDNAM4AzwDQADUAPwDPADUAzgDRAGMA0gA1ANMA0ADTADUANQDSAD0AYwDRANQA1QDWAGgAaADWANcAZABjANgA2QBxAHIAlwDZAHIAaADXAJcA2ABjANQA2gDbAGIA2wDcAGIAaABpANUAaQBiAN0A3QBiANwAYgBkANoAXAAvAN4ALgBcAN8ALgDgAOEA3wDgAC4A4gDeAC8A4wDkAC8A5QAvAOQA4gAvAOYALwDlAOYAPwA0AOcA4wAvADAA4QDoAC4A6QA0AOoANADpAOsA7AA0AO0A7gDtADQA6wDuADQA7ADnADQA7wBGAC4A6gA0APAA8QDwADQA8gDxADQANABGAPIALgDzAO8A8wAuAOgAKwD0ADAA9AArAMkApAChADIA9QD2APcA+AD5APYA+gD1APsA/AD4APUA/QD+AP8AAAH3AAEB/QABAfcA9wD+AP0A+wAAAQIBAwH7AAQBBQEDAQQB9wAAAfsABgH+APYABwEIAfkACAEGAfkA+AAJAfkA+AD8AAkBCgELAQMB+gADAQsBDAENAQMBDgH6AAsBDQEPAQMBAwEQAQoBAwEPARABDQEMAREBEgETAfwAFAH8ABUBEwEVAfwAFgH8APoACQH8ABQB+gAXARYB/AAYARIBGAH8ABYB+gAZARcBGQH6AA4BAwEFAQwBGgEbARwBHQEeARwBGgEfASABIQEiASMBJAElASYBJwEoASkBKgEiASkBHgErAScBHwEsAS0BIQEuASIBLwEwATEBMgEzATEBNAE1ATYBNQE3ATgBOQExATMBOgE7ATwBPQE6AT4BPwFAAUEBQgE+AUABQwEsATwBQQE3AUQBRQEvAUYBNQE4ATYBRwFIAUkBSgFJAUgBRwFJAUsBTAFJAU0BSQFKAU0BLgEhAU4BTwFHAUsBSwFQAU8BUQFSAVMBVAFVAVMBTgFJAUwBVgFRAU8BVwFVAVgBWQFaAUsBWwFXAVwBXQFbAV4BXQFeAV8BYAFfAV4BYAFeAWEBYQFeAWIBYwFeAWQBXgFlAWIBZQFeAWYBZgFeAWMBZAFnAWMBaAFnAWQBMwFpAWoBagFrATMBbAE1AW0BbgFkAW8BaAFkAW4BNQE0AXABbwFkAXEBcgFtATUBcAFyATUBNQFsAXMBMwF0AXUBMwF2AXQBdwF2AXgBMwF4AXYBMwEyAXkBegF3AXgBMwF1AWkBewFxAWQBcwF8ATUBeAF8AXoBewF9AX4BIQFJAU4BfQF7AWQBcQF7AX8BfAF4ATUBgAF/AXsBMwFrATkBgQF7AYIBgQGDAXsBfgGEAYUBewGFAYIBhgF7AYMBhwGIAX4BhAF+AYgBhwF+AYkBigGJAX4BiwGKAX4BhgGAAXsBjAGNAX4BjgF+AY0BjwGQAX4BjAF+AZABkQGPAX4BfgGOAYsBkQGSAZMBkwGUAZUBlgGXAZgBmAGZAZoBmwGWAZUBnAGaAZ0BewF+AYUBNwE1AUQBngGfAUYBoAGhAaIBowGkAaUBpgGgAaUBpwGoAaMBqQGqAasBrAGtAasBrgGvAbABrAGvAbEBogGyAbABswGnAbQBtQG2AZwBtwG4AbYBuQG6AbsBvAG9AboBuwG4Ab4BvwHAAcEBwgHBAcMBxAHFAcYBxAHHAcMBtAHAAcgByQHKAcsBzAHFAcsBzQHOAc8B0AHRAc0B0gHTAdQB0AHUAdUB1gHPAc4B1wHOAdgBzgHXAdkB2gHOAdkB2gHWAc4B2AHbAdcB0gHcAd0B3gHfAeAB4QHiAeMB5AHcAeMB4AHlAd4B3wHbAdgB5gHnAeEB6AHpAeoB6gHrAegB7AHtAegB7QHpAegB5QHoAesB5gGqAe4B7wHwAfEB8gHzAfAB9AH1AfYB9wH4AfUB9gHzAfkB+gH7AfwB/QH+Af8B/wEAAgECAgL7AfoBAAL4AQMCBAIFAgYCBwIIAgUC+wEJAgoC+wELAgkCCgIIAvsB+wEMAg0C+wEOAgwC+wEPAhAC+wERAg8C+wENAhECEAILAvsBBgL+ARICEwL7AQICFAIVAhYCFwIUAhgCGQIaAvsBGwIZAvsBFQIbAvsBHAIdAh4CHgIfAhwCFwIgAskBIQIiAiMCIgIdAiQC4AHfAdgBJQL7ARoCHwImAhwC6AEnAigC7AHoAR8C4AHoAeUBJAIjAiICHAIkAh0CJwLoAeABHwLoASYC6AEpAiYC6AEqAikC6AEoAisCKwIqAugBLALgAdgB/AH7ASUCLQLxAb0BEwIOAvsBkQF+AS4CeQEyAS8CMAIvAjIBMgExAjACMgEyAjECMgIyATMCNAI1AjYCNwI1AXkBGgEgARsBeQE4AjkCeQE6AjgCOgJ5AS8CeQE5AjcCOwI1ATwCMgE9Aj4CPgIzAjIBPwI1ATsCQAJBAjUCNQE/AkICXgE2AjUCNQJDAkACQwI1AjQCNQFCAkQCPAI1ATcCPQIyATABfQE1AkECfgFFAkYCRQJ+AUcCfgFGAkgCfgFJAkcCSQJ+AUoCfgFLAkoCmwGXAZYBlAGbAZUBLgKSAZEBSAIuAn4BlAGTAZIBlwGZAZgBfQFMAk0CTgJMAn0BTgJ9AU8CUAJPAn0BUQJ9AU0CUgJTAn4BSwJ+AVMCfgFUAlICVAJ9AVUCVQJ9AVECVgJQAn0BVgJ9AUECVwJYAjUBMQEwATIBRQEwAS8BPwFCAUABQQFEAT8BOgE9ATsBPQE+AUIBOwFDATwBRAE1AVgCLQEgAR8BHAEbAR0BKwEeAR0BKQEoASoBIgEqASMBWQFZAloCIwEkASYBIQEjASYBKwEoAScBLAFDAS0BRQFGAZ8BWwJcAlkBXQJeAVwBXgFdAl4CVwFYAVwBXgFbAVwBXgJfAl4BYAJhAl4BYAJeAWICXgFjAmQCZAJiAl4BYwJeAV8CYQI2Al4BWQElAVkCJQFZASYBJgFZAUkBUQFWAVIBUgFUAVMBWgFZAWUCXAJlAlkBUAFaAWUCUAFWAU8BVQFUAVgBWgFQAUsBWwJZAVoCVwI1AUQCnwGeAWYC+wFnAmgC+wFpAmoC+wEHAmkCagJnAvsBawL7AWwCaAJsAvsBbQL7AWsC+wFuAm8C+wFtAm4CcAL7AW8CBwL7AQgC9wEDAvgB9AH3AfUB8gH5AfMB7wHyAfAB9AH2AfkBBAIHAgUC/QESAv4BAQL9Af8BBAIGAhICAwIBAgAC8QEtAu8BcQL7AXACcgJzAicCdAInAnUCJwJ2AnICJwIsAncCLAJ4AnkCegJ1AicCewJ8An0CJwJ0AnYCdAJ1AnsCfgJ/An0CfgKAAn8CfgJ9AnwCgQL7AYICggL7AYMCFgL7AYQChAL7AYUChQL7AYECfAJ7AoYChgJ7AnUCeALOAYcCqgGpAe4BGAIUAhYCGAIgAhcCgwL7AYgCiAL7AXECFgIVAvsBvAEtAr0BuQG8AboBtwG+AbgBtQG3AbYBuQG7Ab4BzAHLAcoBxgHFAcwBwwHHAcIBxgHHAcQBwQHCAb8BygHJASACtAHIAbMBowGoAaQBswGoAacBpAGmAaUBogGhAbIBsAGyAa4BsQGtAawBsQGvAa4BoQGgAaYByAHAAb8BtQGcAZ0BqQGrAa0BeQKJAiwCiQJ3AiwC4gHkAeMBeQJ4AocC3AHkAd0B4QHnAeIBegInAooCigInAosCJwKMAosCjAInAo0CJwJ3Ao0C5gHuAecB1QHUAdMB0QHQAdUBzgHNAY4C0QGOAs0BjgKPAs4BkAKRAs4BhwLOAZECkgKTAs4BkALOAZMCjwKSAs4B0gHdAdMBmgGZAZ0BlAKVApYClwKYApQCmQKaApcCmwKcApkCnQKeApwCnwKUAqACoQKXAp8CogKZAqECowKbAqICpAKdApsCpQKfAqYCpwKhAqUCqAKiAqECqQKjAqgCqgKkAqMCqwKlAqYCrAKnAqsCrQKoAqcCrgKpAq0CrwKqAq4CsAKrArECsgKsArACswKtArICtAKuArMCtQKvArQCtgK3ArgCuQK3ArYCuQK6ArcClQK7AroClQK8ArsCvQK8ApUCvgK5ArYClgK/AsAClgLBAsIClgLAAsECugK5ApUClgLCAqACvwKWArkCwgLDAqACmAK9ApUCvgK/ArkCxAKcAsUCxgKaAsQCmgLGAscCnALIAsUCyQLKAssCygLMAp4CnALMAsgCmALHAs0CxwKYApoCzAKcAp4CxAKaApwCnQLOAssCpALPAs4CzwKkAqoCygKeAssCmALNAr0CwwLQAqACpgLQAtECsQLSAtMCpgLRAtICsQKmAtICsQLUAtUCsQLTAtQC1gKxAtUC1wLWAtgC1wLZAtoC2gLWAtcC2wKwAtYC3AKwAt0C2wLdArAC2wLWAtoC3gKwAtwC1QLYAtYCtALfArUC4AK0ArMCrwLhAuIC4wLhArUCtQLkAuMC5QKzArIC5QLmArMC5wLlArIC5gLgArMC5AK1At8C3wK0AugC6AK0AukC4ALpArQC3gLnArIC3gKyArACpgKgAtAC6gLrAuwC7QLqAu4C6wLvAvAC8QLyAvMC9AL1AvYC8wLtAvcC8wL4AvEC8gLxAvkC8QL6AvkC+wL8Av0C/gL/AgADAQMCAwMDBAMAAwUDBgMHAwMDCAMJAwoDCwMMAwgDDQMOAw8DDgMQAwsDBwMRAw8D+wIKAxIDEwP+AhQDFQMWAwEDFwMYA/oCGQMaA/oCGAMZA/oCGwP6AhoDFwP6AhwDHQMXAxwDHAMeAx0DHwMgAyEDIgMjAyEDGwP5AvoCJAMfAx0DJQMjAyYDJwMoAxwDKQMlAyoDKwMpAywDKwMtAy4DLwMuAzADLwMxAzIDMwM0AzUDNgM3AzgDOQMyAzEDNgMyAzkDNgM5AzcDNAM6AzsDPAM6AzQDPQM+AxUDBAM/A0ADQQNCA0MDRAM/AwQDRQM0A0YDPAM0A0UDRwM9A0gDRgM0A0kDSgNLA0wDTQNIA0sDTgNPA0IDBANQA1EDBANSA1ADTgNTAwQDUgMEA1MDVANTA04DBANRA0QDVQNJAzQDQQNWA04DTgNWA1cDSQNVA1gD/QJZA+8CWgNbA1wDTgNXA1QDXQNYA1UDXgNVAzQDBANAAwADXwNgA1UDYQNVA2ADYgNVA2MDXwNVA2IDYQNdA1UDZANVA1oDZANjA1UDVQNeA1oDZQNmA1wDZwNmA2gDaQNqA2cDagNrA2wDbANtA24DbwNwA3EDcgNzA3ADbgN0A3EDdQN2A3cDeAN5A3YDegN7A3wDfAN9A34DfwN5A4ADdwNzA4EDegN/A4IDgwN+A4QDhQMUA4YDhwOIA4kDigOLA4wDjQOHA4wDjgOPA4oDkAORA5IDkwOUA5IDlQOWA5cDkwOWA5gDiQOZA5cDmgOOA5sDnAOdA4MDngOfA50DoAOhA6IDowOkA6UDogOfA6YDpwOoA6kDqgOpA6sDrAOtA64DrAOvA6sDsAOtA7EDsgObA6gDswOxA6MDtAO1A7YDtwO4A7kDtgO4A7oDuwO1A7QDvAO0A70DtAO8A74DvwO0A74DvwO7A7QDvQPAA7wDwQPCA7kDwwPEA8UDxgPHA8gDyAPJA8EDygPDA8UDywPMA8YDxAPAA70DzQPOA88DzwPQA80D0QPSA80D0gPOA80DygPNA9ADywORA9MD1APVA9YD1wPYA9kD2gPbA9gD2QPVA9wD3QPeA98D4APhA+ID4wPeA+QD5QPmA+cD3wPbA+gD6QPqA+sD6wPsA+0D7gPvA/AD8APxA/ID8wPuA+0D9AP1A/YD9gP3A/gD+QP6A/sD+wP8A/0D/QP+A/QD+gP5A/ID/wPpA+ID+AMABOUDAQQCBAMEBAQBBAUEBgQHBAgECQQGBAoEAgQJBAsEDAQNBA4EvQPFA8QDDwQQBKQDEQQSBBMEEgQOBA0EDwQEBBQEFQQWBAcE0QPNAwwEzQPKA8UDzQMXBBgEDATNAxkEEQQTBBoEDQQTBBIEEQQaBBsEFwTNA8UDGQQNBAwEzQMcBBkEzQMdBB4EzQMYBB0EHgQcBM0DHwTFAyAE5wMhBBUEIgTWA6ED4wMjBOADTwNOAwQDJARPAwUDTANDAyUEBQMmBCQEBQMnBCYEJwQFAygEKQRPAyQEXgMqBCsEKQQsBE8DLQRPAywEKgReAzMDQgNPAy0EWQPwAu8CLgReAysEBQMvBCgEBQMwBDEEMQQvBAUDJQRKA0wDMgQqBDMDSwNKA00DSANNA0cDMwQyBDMDPQNHAz4DNAQzBDMDQwNCAyUEMAQFA/8CcgNwA28DbANrA20DbgNtA3QDbwNxA3QDggN7A3oDggN/A4ADeAN2A3UDdQN3A4EDeQN4A4ADgQNzA3IDXgM1BDYENQReAzcENwReAzgEOAReAzkENgQ6BF4DZQNoA2YDaQNnA2gDWgM7BFsDZQNcA1sDXgM6BDsEaQNrA2oDXgMuBDkEfAN7A30DAgMBAxYDAAP/AgUDEwP/Av4CEQMNAw8DBwMGAxEDCwMQAwwDEAMOAw0DDAMJAwgDBgMDAwIDEgP8AvsC/QL8AlkD8ALsAusC6gLsAu4C8wL3AvgC+AL0AvEC9AL4AvUCJwM8BD0EPgQ/BCcD7QLuAvcCCgMJAxIDEwMUA4UDJwM/BDwELgMtAzADMAMxAy8DKQMqAywDLAMtAysDQAQ4AzcDMwM1A0EENQNCBEAEQARCBDgDQgQ1AzsDMwNBBDQEJwP0AvYCJgMqAyUD+gLxAicDQwQnAz0EIAMiAyEDJgMjAyIDQwQeAygDIAMfAyQDJAMdAx4DKAMnA0MEKAMeAxwD9gI+BCcDFgMVAz4DhQOGA0QE7wPxA/AD7APzA+0D6gPsA+sD7wPuA/MD+gP8A/sD/AP+A/0D9wMABPgD9QP3A/YD/gP1A/QD8QP6A/ID3QPfA+gD6APbA9oD1wPZA9wD3APVA9QD2APXA9oD4QP/A+IDIwTjA+QD4AMjBOED5gMhBOcD5APeA90D6gPpA/8DAATmA+UDRQRGBBcERwRFBBcEFwQfBEgEFwRJBEoEFwRKBEsEFwRLBEcESwRKBEwETQROBE8ETwROBFAEUQRNBEwEIARSBB8ECwQJBAoECgQGBAgEFAQEBAUEBQQBBAMEAwQCBAsETgRNBFEEUQRMBFMETARKBFMEtANUBCAEEASlA6QDFAQQBA8ECAQHBBYEFQQhBBYE1gMiBNQDIgShA6ADpgOfA54DngOdA5wDogOmA6ADsAOxA7MDrgOtA7ADqwOvA6oDrgOvA6wDqQOqA6cDswOjA6UDmwOyA5oDigOPA4sDmgOPA44DiwONA4wDiQOIA5kDlwOZA5UDmAOUA5MDmAOWA5UDiAOHA40DsgOoA6cDgwOEA5wDkAOSA5QDUgRVBB8EVQRIBB8EzAPHA8YDUgQgBFQEyAPHA8kDywPTA8wDSQQXBFYEVgQXBFcEFwRYBFcEWAQXBFkEFwRIBFkEkAPTA5EDtwO5A8IDugO4A7cDtAO2A1oEugNaBLYDWgRbBLQDXARdBLQDVAS0A10EXgRfBLQDXAS0A18EWwReBLQDwQPJA8IDfgN9A4QDYARhBGIEYwRkBGAEZQRmBGMEZwRoBGUEaQRqBGcEawRgBGwEbQRjBGsEbgRlBGMEbwRnBG4EcARpBGcEcQRrBHIEcwRtBHEEdARuBG0EdQRvBHQEdgRwBG8EdwRxBHgEeQRzBHEEegR0BHkEewR1BHoEfAR2BHsEfQR3BH4EfwR5BHcEgAR6BH8EgQR7BHoEggR8BIEEgwSEBIUEYgSEBIMEYgSGBIQEYQSHBIYEYQSIBIcEiQSIBGEEigRiBIMEbASLBIwEbASNBI4EbASMBI0EhgRiBGEEbASOBI8EiwRsBGIEjgSQBI8EZASJBGEEigSLBGIEZgSRBJIEkwRoBJQEkwSRBGYElQRoBJYElwSWBGoElARoBJUEmASXBJkEkgSaBGQEkgRkBGYElgRoBGoEkwRmBGgEaQSbBGoEcAScBJsEnARwBHYElwRqBJkEZASaBIkEkASdBI8EcgSdBJ4EeASfBKAEcgSeBJ8EeARyBJ8EeAShBKIEeASgBKEEfgR4BKIEowR+BKQEowSlBKYEpgR+BKMEpwR9BH4EqAR9BKkEpwSpBH0EpwR+BKYEqgR9BKgEogSkBH4EgQSrBIIErASBBIAEfAStBK4ErwStBIIEggSwBK8EsQSABH8EsQSyBIAEfwSzBLEErASABLIEsASCBKsEqwSBBLQEgQS1BLQErAS1BIEEswR/BKoEqgR/BH0EcgSPBJ0EtgS3BLgEuQS2BLoEtwS7BLwEvQS+BL8EwATBBMIEvwS5BMMEvwTEBL0EvgS9BMUEvQTGBMUExwTIBMkEygTLBMwEzQTOBM8E0ATMBNEE0gTTBM8E1ATVBNYE1wTYBNQE2QTaBNsE2gTcBNcE0wTdBNsExwTWBN4E3wTKBOAE4QTiBM0E4wTkBMYE5QTmBMYE5ATlBMYE5wTGBOYE4wTGBOgE6QTjBOgE6ATqBOkE6wTsBO0E7gTvBO0E5wTFBMYE8ATrBOkE8QTvBPIE8wT0BOgE9QTxBPYE9wT1BPgE9wT5BPoE+wT6BPwE+wT9BP4E/wQABQEFAgUDBQQFBQX+BP0EAgX+BAUFAgUFBQMFAAUGBQcFCAUGBQAFCQUKBeEE0AQLBQwFDQUOBQ8FEAULBdAEEQUABRIFCAUABREFEwUJBRQFEgUABRUFFgUXBRgFGQUUBRcFGgUbBQ4F0AQcBR0F0AQeBRwFGgUfBdAEHgXQBB8FIAUfBRoF0AQdBRAFIQUVBQAFDQUiBRoFGgUiBSMFFQUhBSQFyQQlBbsEJgUhBScFGgUjBSAFKAUkBSEFKQUhBQAF0AQMBcwEKgUrBSEFLAUhBSsFLQUhBS4FKgUhBS0FLAUoBSEFLwUhBTAFLwUuBSEFIQUmBTAFMQUyBSYFMwUyBTQFNQU2BTMFNgU3BTgFOAU5BToFOwU8BT0FPgU/BTwFOgVABT0FQQVCBUMFRAVFBUIFRgVHBUgFSAVJBUoFSwVFBUwFQwU/BU0FRgVLBU4FTwVKBVAFUQXgBFIFUwVUBVUFVgVXBVgFVwVTBVgFWQVXBVYFWgVbBVwFXQVeBVwFXwVgBWEFXQVgBWIFVQVjBWEFVwVZBWQFZQVmBU8FZwVoBWYFaQVqBWsFbAVtBVcFawVoBW4FVwVvBXAFVwVwBXEFcgVzBVcFcgVXBXEFVwVzBXQFVwVkBW8FVwV0BWwFdQV2BXcFeAV5BXoFdwV5BXsFfAV2BX0FfgV/BYAFgQWCBYMFgQWDBXwFfAV9BYEFfwWEBYUFhgWHBXoFiAWJBYoFiwWMBY0FjQWOBYYFjwWIBYoFkAWRBYsFiQWEBX8FkgWTBZQFlAWVBZIFlgWXBZIFlwWTBZIFjwWSBZUFkAVbBZgFmQWaBZsFnAWdBZ4FnwWgBZ0FngWaBaEFogWjBaQFpQWmBacFqAWjBakFqgWrBawFpAWgBa0FrgWvBbAFsAWxBbIFswW0BbUFtQW2BbcFuAWzBbIFuQW6BbsFuwW8Bb0FvgW/BcAFwAXBBcIFwgXDBbkFvwW+BbcFxAWuBacFvQXFBaoFxgXHBVcFyAXGBVcFyQXKBVcFywXJBVcFxwXLBVcFzAXNBc4FfwWKBYkFzwVXBW0F0AXRBdIF0QXOBc0FzwXIBVcF0wVXBcoFlgWSBcwFkgWPBYoFkgXUBdUFzAWSBdYF0AXSBdcFzQXSBdEF0AXXBdgF1AWSBYoF1gXNBcwFkgXZBdYFkgXaBdsFkgXVBdoF2wXZBZIF3AWKBX8FrAXdBdMF3gWbBWoFqAXfBaUFGwUaBdAE4AUbBdEEGAUPBeEF0QTiBeAF0QTjBeIF4wXRBOQF5QUbBeAFKQXmBecFKQUnBSEF5QXoBRsF6QUbBegF5gUpBf8EDgUbBekFJQW8BLsE6gUpBecF0QTrBeQF0QTsBe0F7QXrBdEE4QUWBRgF7gXmBf8EFwUWBRkFFAUZBRMF7wXuBf8ECQUTBQoF8AXvBf8EDwUOBeEF7AXRBMsEPgU8BTsFOAU3BTkFOgU5BUAFOwU9BUAFTgVHBUYFTgVLBUwFRAVCBUEFQQVDBU0FRQVEBUwFTQU/BT4FKQXxBfIF8QUpBfMF8wUpBfQF9AUpBfUF8gX2BSkFMQU0BTIFNQUzBTQFJwUpBfcFMQUmBScFKQX2BfcFNQU3BTYFKQXqBfUFSAVHBUkFzgTNBOIEzATLBNEE3wTLBMoE3QTZBNsE0wTSBN0E1wTcBNgE3ATaBNkE2ATVBNQE0gTPBM4E3gTIBMcEyQTIBCUFvAS4BLcEtgS4BLoEvwTDBMQExATABL0EwATEBMEE8wT4BfkF+gX7BfMEuQS6BMME1gTVBN4E3wTgBFEF8wT7BfgF+gT5BPwE/AT9BPsE9QT2BPgE+AT5BPcE/AUEBQMF/wQBBf0FAQX+BfwF/AX+BQQF/gUBBQcF/wT9BfAF8wTABMIE8gT2BPEExgS9BMAE/wXzBPkF7ATuBO0E8gTvBO4E/wXqBPQE7ATrBPAE8ATpBOoE9ATzBP8F9ATqBOgEwgT6BfME4gThBAoFUQVSBQAGtAW2BbUFsQW4BbIFrwWxBbAFtAWzBbgFvwXBBcAFwQXDBcIFvAXFBb0FugW8BbsFwwW6BbkFtgW/BbcFrQWiBaQFnwWtBaAFoQWcBZ4FmQWhBZoFnwWdBZwFpgXEBacFqQXfBagFpgWlBd8FqwXdBawFogWpBaMFrwWuBcQFxQWrBaoF1AUBBgIGVAVTBVcF1AUDBgQG1AUEBgUGhgWOBYcFBgYBBtQF1AUFBgYGBQYEBgcGCAYJBgoGCgYJBgsGDAYIBgcG3AUNBtQFDgYPBlcFEAYOBlcFEQYSBlcFEwYRBlcFDwYTBlcFCQYIBgwGDAYHBhQGBwYEBhQGfgUVBtwFVwUWBhcGVwUSBhYGEAZXBdMF0wXdBRAGmQWbBd4FaQXeBWoFbgVoBWcFZwVmBWUFaQVrBW4FGAYZBlcFGQYaBlcFGwZXBRwGVwUaBhwGHQZXBRsGFwYYBlcFHgZXBR8GIAZXBSEGVwUeBiEGVwUgBiIGVAVXBSMGVQVUBWMFXwViBWAFXwVhBWMFIgYjBlcFHQYfBlcFTwVQBWUFXgVdBWIFFQYkBtwFJAYNBtwFmAWRBZAFFQZ+BSUGiwWRBYwFWwVaBZgFAwbUBSYGJgbUBScG1AUoBicGKAbUBSkG1AUNBikGXAVeBVoFeAV6BYcFewV5BXgFdwUqBnUFewUqBncFfQV2BXUFJQZ+BYAFKwaCBYAFKwaABYUFggUrBoMFjQWMBY4FSgVJBVAFLAYtBi4GLwYwBiwGMQYyBi8GMwY0BjEGNQY2BjQGNwYsBjgGOQYvBjcGOgYxBjkGOwYzBjEGPAY1BjMGPQY3Bj4GPwY5Bj0GQAY6BjkGQQY7BjoGQgY8BkEGQwY9BkQGRQY/BkMGRgZABj8GRwZBBkYGSAZCBkcGSQZDBkoGSwZFBkkGTAZGBksGTQZHBkwGTgZIBk0GTwZQBlEGUgZQBk8GUgZTBlAGLQZUBlMGLQZVBlQGVgZVBi0GVwZSBk8GLgZYBlkGLgZaBlsGLgZZBloGUwZSBi0GLgZbBjgGWAYuBlIGWwZcBjgGMAZWBi0GVwZYBlIGMgZdBl4GXQYyBl8GXwY0BmAGNAZhBmIGYwZkBmUGYgZgBjQGNgZkBmEGXgZmBjAGXgYwBjIGYQY0BjYGXwYyBjQGNQZnBmUGPAZoBmcGaAY8BkIGZAY2BmUGMAZmBlYGXAZpBjgGPgZpBmoGRAZrBmwGPgZqBmsGRAY+BmsGRAZtBm4GRAZsBm0GSgZEBm4GbwZKBnAGbwZxBnIGcgZKBm8GcwZJBkoGdAZJBnUGcwZ1BkkGcwZKBnIGdgZJBnQGbgZwBkoGTQZ3Bk4GeAZNBkwGSAZ5BnoGewZ5Bk4GTgZ8BnsGfQZMBksGfQZ+BkwGfwZ9BksGTAZ+BngGdwZ8Bk4GdwZNBoAGgQaABk0GTQZ4BoEGdgZ/BksGdgZLBkkGPgY4BmkGggaDBoQGgwaFBoYGhAaDBoYGgwaHBoUGhwaIBokGggaKBosGjAaLBo0GggaEBo4GjgaPBoIGigaCBo8GggaIBoMGjAaNBpAGkQaHBpIGkwaHBpEGhwaUBpUGkgaHBpUGiQaUBocGhQaHBpMGlgaJBogGlwaWBogGmAaXBogGmQaYBogGmQaIBpoGmwaaBogGmwacBp0GkAaeBowGnwagBqEGnwaiBqAGowakBqUGowamBqQGpQaiBp8GpwajBqgGqAajBqkGqgarBqwGrQauBq8GrwauBqoGrgatBqkGsAamBqMGsQaMBrIGsgaMBrMGtAa1BowGtQazBowGjAaeBrQGtga3BqsGuAa2BqsGuQa6BowGuwa8BqsGuga7BqsGuAarBrwGsQa5BowGvQarBrcGoQa+Bp8GvQasBqsGvwbABpwGwQa/BpwGwgbBBpwGwwbEBsUGwgacBsMGxAbGBscGyAbEBscGyQbKBssGzAbNBs4GxgbOBs0GxQbEBsgGwAbPBpwG0AbRBs4GzgbRBtIGygbTBtQG0AbKBtQG0gbVBs4G1gbXBsoG0wbKBtcG2AbWBsoG2QbYBsoG2QbKBtoGyQbaBsoG1QbMBs4G2wacBs8G3AbLBsoGygbdBtwG3gbfBuAG4AbfBuEG3wbeBt0G2wadBpwG4gbjBuQG4gbkBuUG4gbmBuMG5wbmBuIG3wboBuEG6QbqBusG6QbrBuwG6wbtBuwG7QbrBu4G7wbrBuoG8AbrBvEG5wbiBvIG7gbrBvAG8wb0BvUG9Qb2BvcG8QbrBvMG4gbvBvIG5Qb4BuIG+QboBt8GowanBrAG3wb6BvsG3wb8BvoG/Qb+Bv8G/QYAB/4G/wb8Bt8G/QYBBwIH/QYDBwEH/QYEBwUHBgcHBwgHCAcEB/0GBQcDB/0GAgcAB/0GBgcJBwoHCwcMBw0HCwcOBwwHDQcPBwsHBgcQBxEHBgcSBxAHCwcTBxQHCwcUBxUHFgcSBxcHEQcJBwYHCwcPBxMHCgcHBwYHqwaqBq4GjAa6BqsGnAabBogGggaLBowGzgbGBsQGygbQBs4G3wb7BvkG/QYGBwgH3wb9Bv8G3wbdBsoGxAbDBpwGFwcYBxkHFwcaBxgHCwcbBxwHHQcaBxcHHgcdBxcHFwcZBxYHHwceBxcHCwcgByEHHwcXByEHCwchBxcHHAcgBwsHEgcGBxcHFQcbBwsHrgapBqMGowalBp8GIgcOBwsHIwckByUHIwclByYHJwcoByMHIwcoByQHJgcpByIHKgcrByIHLAcqByIHLQcuByIHLwciBy4HLwcsByIHLQciBykHKwcwByIH4gYxBzIH4gYyBzMHNAc1BzYH8wbrBvQG4gb4BjEHNwcjBzMHNgc1BzgHNwc5ByMHOQc6ByMHOwc1BzwHPAc1Bz0HOAc1BzsHJwcjBzoHIgcwBz4HNQc/B0AHNQdABz0H9gZBBzUHQgc/B0EHQwdABz8HPwdCB0QHRQdDBz8HQgdBB0YHIwfiBjMH7wbiBusGNQf3BvYGQQf2BkYH9wY1BzQH9gb1BvQGIwcmByIHRwdCB0YHRQc/B0gHSQdIB0QHRAdKB0kHRAdLB0oHSAc/B0QHTAdLB0QHTQdMB0QHTgdNB0QHTgdPB00HTgdHB1AHUAdRB04HRwdOB0IHTwdOB1EHIgc+Bw4HUgdTB1QHVQdWB1IHVwdSB1gHWQdVB1cHWgdUB1sHWwdUB1wHXQdaB14HVAddB18HYAdhB1QHVAdhB1wHUwdgB1QHVAdfB2IHXQdUB1oHUwdjB2QHZQdjB1MHZQdWB2YHZAdnB1MHVgdoB2kHaQdmB1YHagdoB1YHawdsB2oHUwdWB2UHUwdnB2AHWAdiB20HbgdYB28HbQdvB1gHbgdwB3EHbgdxB3IHcwdyB3EHVwduB3QHVQd1B1YHdQdVB3YHagdWB2sHdAd3B1cHdgdZB3cHYgdYB1QHJgAnALgAZQBwAG0A9QD3APsA+AD2APUA+gD7AAMB/AD1APoA+wACAQQB/gD3APYABwH5AHgHBgH2APkACQF4B/kAWQFLAUkBXgE1AmQBMwF5AXgBfQFUAn4BfQFkATUCzgF4AtgBJwJzAigCJwLgASwCLALYAXgCNQF4AXkBJgFJASEBlQK5ApYCmAKVApQCmgKYApcCnAKaApkCnQKcApsClAKWAqAClwKUAp8CmQKXAqECmwKZAqICpAKbAqMCnwKgAqYCoQKfAqUCqAKhAqcCowKiAqgCqgKjAqkCqwKmArECpwKlAqsCrQKnAqwCqQKoAq0CqgKpAq4CsAKxAtYCrAKrArACrQKsArICrgKtArMCrwKuArQCnQLLAp4CpALOAp0CzwKqAuICrwLiAqoC4QKvArUCJwMcA/oCNAM7AzUDTgNCA0EDXgM0AzMDXgM7BFoDtAMgBL0DFwRGBBgEFwTFAx8ExQO9AyAETwMEAwUD8QL0AicDYARiBGwEZARhBGAEZgRkBGMEaARmBGUEagRoBGcEawRsBI8EYwRgBGsEbgRjBG0EZwRlBG4EcARnBG8EawSPBHIEbQRrBHEEdARtBHMEbwRuBHQEdgRvBHUEcQRyBHgEeQRxBHcEdARzBHkEdQR0BHoEdgR1BHsEdwR4BH4EfwR3BH0EegR5BH8EgQR6BIAEfAR7BIEEmwSZBGoEcASbBGkEnAR2BK4EfASuBHYErQR8BIIE8wToBMYEAAUHBQEFGgUOBQ0FKQUABf8EfwWFBYAF1AUCBtUF1AWKBdwF3AV/BX4FGwXQBNEExgTABPMELQZSBi4GMAYtBiwGMgYwBi8GNAYyBjEGNQY0BjMGLAYuBjgGLwYsBjcGMQYvBjkGOwYxBjoGPAYzBjsGNwY4Bj4GOQY3Bj0GQAY5Bj8GQQY6BkAGPAY7BkEGPQY+BkQGPwY9BkMGRgY/BkUGQQZABkYGQgZBBkcGQwZEBkoGRQZDBkkGRgZFBksGRwZGBkwGSAZHBk0GNQZlBjYGPAZnBjUGaAZCBnoGSAZ6BkIGeQZIBk4GiAaHBoMGPwc1B0EHQgdOB0QHUgdUB1gHVgdTB1IHVwdYB24HVQdSB1cHbgdvB3AHbgdyB3QHdQdrB1YHVQdZB3YHdwdZB1cHdgd3B3kH"
        }
    ]
} );
  

//sceneModel =btoa(sceneModel);

 //console.log(sceneModel); 
//sceneModel = atob(sceneModel);
//console.log(sceneModel); 



const fbxLoader = new FBXLoader();
const loader = new GLTFLoader();
loader.parse( data, '', ( gltf ) => {

    gltf.scene.traverse( ( child ) => {
    
        if ( child.isMesh ) {
        
            child.geometry.center();
        
        }
    
    } );

    scene.add( gltf.scene );		

} );

//loader.load(loader.parse(new ArrayBuffer(sceneModel))), function ( gltf ) {

 
    //const pistol = gltf.scene.children.find((child) => child.name === "Pistol")

//scene.add(scene.gltf);
//obj.add(pistol);
 //pistol.position.z = -3;
 //pistol.position.x =1.3;
 //pistol.position.y =-0.5;
//pistol.rotation.y = 9.5;


//}, undefined, function ( error ) {

//	console.error( error );

//};


//fbxLoader.load( './Polygon/Polygon_new.fbx', function ( object ) {
//scene.add(object);
  


//}, undefined, function ( error ) {

//console.error( error );

//} );
   
const light = new THREE.AmbientLight( 0x404040,5 ); // soft white light

scene.add(light);

const Pointlight = new THREE.PointLight( '#00bfff', 5, 10000 );
light.position.set( 0, 5, 0 );
scene.add( Pointlight );


//adding a plane with explosion

var Imageloader = new THREE.TextureLoader();

// Load an image file into a custom material
var Imagematerial = new THREE.MeshLambertMaterial({
  map: Imageloader.load('/explosion.png')
});
Imagematerial.transparent = true;
// create a plane geometry for the image with a width of 10
// and a height that preserves the image's aspect ratio
var Imagegeometry = new THREE.PlaneGeometry(10, 10*.75);

// combine our image geometry and material into a mesh
var mesh = new THREE.Mesh(Imagegeometry, Imagematerial);

// set the position of the image mesh in the x,y,z dimensions

mesh.visible = false;

// add the image to the scene
scene.add(mesh);
obj.add(mesh);
mesh.position.set(1.1,-0.5,-6.5)
mesh.rotation.set(0,-0.5,0);
mesh.scale.set(0.1,0.1,0.1);

//Adding CrossHair Image

//adding a plane with crosshair

var CrosshairImageloader = new THREE.TextureLoader();

// Load an image file into a custom material
var CrossHairImagematerial = new THREE.MeshLambertMaterial({
  map: CrosshairImageloader.load('/Crosshair.png')
});
CrossHairImagematerial.transparent = true;
// create a plane geometry for the image with a width of 10
// and a height that preserves the image's aspect ratio
var CrossHairImagegeometry = new THREE.PlaneGeometry(10, 10*.75);

// combine our image geometry and material into a mesh
var CrossHairmesh = new THREE.Mesh(CrossHairImagegeometry, CrossHairImagematerial);

// set the position of the image mesh in the x,y,z dimensions



// add the image to the scene
scene.add(CrossHairmesh);
obj.add(CrossHairmesh);
CrossHairmesh.position.set(0,0,-3)
CrossHairmesh.rotation.set(0,-0.5,0);
CrossHairmesh.scale.set(0.1,0.1,0.1);


//Adding Bullet Image

//adding a plane with crosshair

var BulletImageloader = new THREE.TextureLoader();

// Load an image file into a custom material
var BulletImagematerial = new THREE.MeshLambertMaterial({
  map: BulletImageloader.load('/bullet.png')
});
BulletImagematerial.transparent = true;
// create a plane geometry for the image with a width of 10
// and a height that preserves the image's aspect ratio
var BulletImagegeometry = new THREE.PlaneGeometry(10, 10*.75);

// combine our image geometry and material into a mesh
var Bulletmesh = new THREE.Mesh(BulletImagegeometry, BulletImagematerial);

// set the position of the image mesh in the x,y,z dimensions



// add the image to the scene
scene.add(Bulletmesh);
obj.add(Bulletmesh);



animate();

//Raycasting 
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onDocumentMouseDown( event ) {
  
  mesh.visible = true;
  render();
}
function onDocumentMouseUp( event ) {

	mesh.visible = false;
	

}
var Firstintersect;

function render() {

	// update the picking ray with the camera and mouse position
  
	raycaster.setFromCamera( mouse, camera );
const RaycastingObjects = [Cube,Cube1];
	// calculate objects intersecting the picking ray
	var intersects = raycaster.intersectObjects( RaycastingObjects,true);



  Firstintersect = intersects[0];
  console.log(Firstintersect);

  intersects[0].object.scale.set(intersects[0].object.scale - 0.5,intersects[0].object.scale - 0.5,intersects[0].object.scale - 0.5);

  

BulletMove = true;
Bulletmesh.position.set(mesh.position.x,mesh.position.y,mesh.position.z);

  



	renderer.render( scene, camera );

}

// when the mouse moves, call the given function
document.addEventListener( 'mousedown', onDocumentMouseDown, false );
document.addEventListener( 'mouseup', onDocumentMouseUp, false )
