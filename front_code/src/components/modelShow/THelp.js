import { AxesHelper, GridHelper } from 'three'

export const allHelper = []

// 坐标辅助
export const axesHelper = new AxesHelper(600)  // 创建坐标辅助

// 创建地面网格辅助
export const gridHelper = new GridHelper(100, 20,  'rgb(222, 225, 230)')

allHelper.push(axesHelper, gridHelper)