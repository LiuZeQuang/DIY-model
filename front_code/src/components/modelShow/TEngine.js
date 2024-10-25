import { WebGLRenderer, Scene, PerspectiveCamera, Vector3, MOUSE } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export class ThreeEngine {

  dom = null; // 挂载的 DOM
  scene = null; // 场景
//width: 938px;
//height: 544px;
//left: 44px;
//top: -518px;
  constructor(dom) {

    // 创建渲染器
    let renderer = new WebGLRenderer({
      antialias: true,  // 开启抗锯齿
    })
    dom.appendChild(renderer.domElement)  // 将渲染器挂载到dom
    renderer.setSize(938,544,true)

    let scene = new Scene()  // 实例化场景
    let camera = new PerspectiveCamera(45, 938 / 544, 1, 1000)  // 实例化相机
    camera.position.set(50, 50, 50) // 设置相机位置
    camera.lookAt(new Vector3(0, 0, 0))  // 设置相机看先中心点
    camera.up = new Vector3(0, 1, 0)  // 设置相机角度
    renderer.render(scene, camera)  // 渲染器渲染场景和相机
  
    let orbitControls = new OrbitControls(camera, renderer.domElement)
    orbitControls.mouseButtons = {  // 设置鼠标功能键（轨道控制器）
      RIGHT: null,  // 左键无功能
      MIDDLE: MOUSE.DOLLY,  // 中键缩放
      LEFT: MOUSE.ROTATE   // 右键旋转
    }

    // 逐帧渲染threejs
    let animate = () => {
      renderer.render(scene, camera)  // 渲染器渲染场景和相机
      requestAnimationFrame(animate);
    }
    animate()

    this.dom = dom
    this.scene = scene
    console.log("渲染完成")
  }

  /**
   * 向场景中添加模型
   * @param  {...any} object 模型列表
   */
  addObject(...object) {
    object.forEach(elem => {
      this.scene.add(elem)
    })
  }

}