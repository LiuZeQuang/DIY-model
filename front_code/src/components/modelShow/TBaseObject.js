import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export const allBaseObject = [];

function getModelLoader(fileType) {
  switch (fileType) {
    case 'stl':
      return new THREE.STLLoader();
    case 'gltf':
    case 'glb':
      return new THREE.GLTFLoader();
    case 'obj':
      return 'OBJ'; // 或者返回一个包含 .obj 和 .mtl 加载逻辑的对象
    default:
      throw new Error('Unsupported file type');
  }
}

async function loadModel(url, baseURL, modelName) {
  const fileExtension = url.split('.').pop().toLowerCase();
  let loader;
  let geometryOrScene;
  let meshName = '';

  if (fileExtension === 'obj') {
    // 加载 .mtl 和 .obj 文件
    const mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath(baseURL + '/'); // 确保路径以斜杠结尾
    const materials = await new Promise((resolve, reject) => {
      mtlLoader.load(
        `${modelName}.mtl`, // 假设 .mtl 文件与 .obj 文件在同一个目录下
        (materials) => {
          materials.preload();
          resolve(materials);
        },
        undefined, // 进度回调（如果需要）
        (error) => {
          reject(error);
        }
      );
    });

    const objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    geometryOrScene = await new Promise((resolve, reject) => {
      objLoader.load(
        `${modelName}.obj`, // 假设 .obj 文件与 .mtl 文件在同一个目录下
        (obj) => {
          resolve(obj);
        },
        undefined, // 进度回调（如果需要）
        (error) => {
          reject(error);
        }
      );
    });
    meshName = 'objObject';
  } else {
    loader = getModelLoader(fileExtension);
    try {
      if (loader instanceof THREE.STLLoader) {
        const geometry = await loader.loadAsync(url);
        const material = new THREE.MeshStandardMaterial({ color: 0x606060 });
        const stlMesh = new THREE.Mesh(geometry, material);
        meshName = 'stlObject';
        geometryOrScene = stlMesh;
      } else if (loader instanceof THREE.GLTFLoader) {
        const gltf = await loader.loadAsync(url);
        const gltfMesh = gltf.scene || gltf.scenes[0];
        meshName = 'gltfObject';
        geometryOrScene = gltfMesh;
      }
    } catch (error) {
      console.error('Error loading model:', error);
    }
  }

  return { geometryOrScene, meshName };
}

// 示例调用
(async () => {
  try {
    const { geometryOrScene, meshName } = await loadModel('static/wu.stl', 'public/static', 'wu');
    geometryOrScene.name = meshName;
    scene.add(geometryOrScene);
  } catch (error) {
    console.error('Failed to load model:', error);
  }
})();