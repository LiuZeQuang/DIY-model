import Vue from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter);
//引入路由组件

// 首页
import HomeIndex from "../components/home/HomeIndex.vue";


//登录
import LogIn from "../components/logIn/LogIn.vue";
import LogInPassword from "../components/logIn/LogInPassword.vue"; // 密码登录
import LogInEmail from "../components/logIn/LogInEmail.vue"; // 邮件登录
import ForgotPassword from "../components/logIn/ForgotPassword.vue"; // 忘记密码
import ForgotPasswordA from "../components/logIn/ForgotPasswordA.vue"; // 下一步-忘记密码
import LRegister from "../components/logIn/LRegister.vue"; // 注册
import LRegisterA from "../components/logIn/LRegisterA.vue"; // 下一步-注册


// 通知
import ConsumerHomePage from "../components/consumer/ConsumerHomePage.vue";
import ConsumerAvatarAII from "../components/consumer/avatar/ConsumerAvatarAII.vue"; // 全部通知
import ConsumerAvatarBuy from "../components/consumer/avatar/ConsumerAvatarBuy.vue"; // 购买通知
import ConsumerAvatarDemand from "../components/consumer/avatar/ConsumerAvatarDemand.vue"; // 需求通知
import ConsumerAvatarManufacturer from "../components/consumer/avatar/ConsumerAvatarManufacturer.vue"; // 厂商通知
import DesignerAvatarDrawing from "../components/consumer/avatar/DesignerAvatarDrawing.vue"; // 设计者图纸通知
import DesignerAvatarDesigner from "../components/consumer/avatar/DesignerAvatarDesigner.vue"; // 设计者订单通知
import ManufacturerAvatarDesigner from "../components/consumer/avatar/ManufacturerAvatarDesigner.vue"; // 厂家订单通知
import ManufacturerAvatarFinish from "../components/consumer/avatar/ManufacturerAvatarFinish.vue"; // 厂家成品通知


// 图纸购买
import ConsumerDrawing from "../components/consumer/ConsumerDrawing.vue";
import ConsumerDrawingPurchase from "../components/consumer/drawing/ConsumerDrawingPurchase.vue";
import ConsumerDrawingDetail from "../components/consumer/drawing/ConsumerDrawingDetail.vue"; // 图纸购买-产品详情页


// 发布需求
import ConsumerDemand from "../components/consumer/ConsumerDemand.vue";


// 厂商定制
import ConsumerManufacturer from "../components/consumer/ConsumerManufacturer.vue";

// 聊天窗口
import ChatWindow from "../components/chat//ChatWindow.vue"


// 个人中心
import PersonalCenter from "../components/personalCenter/PersonalCenter.vue";
import PersonalCenterInformation from "../components/personalCenter/PersonalCenterInformation.vue"; // 个人信息
import CustomizedRecords from "../components/personalCenter/cusomized/CustomizedRecords.vue"; // 定制记录
import CusomizedDrawingDetail from "../components/personalCenter/cusomized/CusomizedDrawingDetail.vue"; // 定制记录-产品详情页

import PurchaseRecord from "../components/personalCenter/purchase/PurchaseRecord.vue"; // 购买记录
import PurchaseDrawingDetail from "../components/personalCenter/purchase/PurchaseDrawingDetail.vue"; // 购买记录-产品详情页

import AccountManagement from "../components/personalCenter/AccountManagement.vue"; // 账号管理
import ChangePhone from "../components/personalCenter/operationprocess/ChangePhone.vue"; // 账号管理-修改手机号码
import ChangePhoneL from "../components/personalCenter/operationprocess/ChangePhoneL.vue"; // 账号管理-修改手机号码-下一步
import ChangePhoneLL from "../components/personalCenter/operationprocess/ChangePhoneLL.vue"; // 账号管理-修改手机号码-下一步-下一步
import ChangEmailbox from "../components/personalCenter/operationprocess/ChangEmailbox.vue"; // 账号管理-修改邮箱信息
import ChangEmailboxL from "../components/personalCenter/operationprocess/ChangEmailboxL.vue"; // 账号管理-修改邮箱信息-下一步
import ChangEmailboxLL from "../components/personalCenter/operationprocess/ChangEmailboxLL.vue"; // 账号管理-修改邮箱信息-下一步-下一步
import ChangePassword from "../components/personalCenter/operationprocess/ChangePassword.vue"; // 账号管理-修改密码
import ChangePasswordL from "../components/personalCenter/operationprocess/ChangePasswordL.vue"; // 账号管理-修改密码-下一步
import ChangePasswordLL from "../components/personalCenter/operationprocess/ChangePasswordLL.vue"; // 账号管理-修改密码-下一步-下一步
import LogOff from "../components/personalCenter/operationprocess/LogOff.vue"; // 账号管理-账号注销
import LogOffL from "../components/personalCenter/operationprocess/LogOffL.vue"; // 账号管理-账号注销-下一步
import LogOffLL from "../components/personalCenter/operationprocess/LogOffLL.vue"; // 账号管理-账号注销-下一步-下一步


// 我的收藏
import MyCollection from "../components/myCollection/MyCollection.vue";
import DrawingDetail from "../components/myCollection/DrawingDetail.vue";


// 设计者
import DesignerActivation from "../components/designer/DesignerActivation.vue"; // 激活页面
import DesignerDemand from "../components/designer/DesignerDemand.vue"; // 发布图纸
import DesignerDrawingPurchase from "../components/designer/DesignerDrawingPurchase.vue"; // 接取订单
import DesignerDrawingDetail from "../components/designer/DesignerDrawingDetail.vue"; // 接取订单-产品详情页


// 厂家
import ManufacturerActivation from "../components/manufacturer/ManufacturerActivation.vue"; // 激活页面
import ManufacturerDrawingPurchase from "../components/manufacturer/ManufacturerDrawingPurchase.vue"; // 接取订单
import ManufacturerDrawingDetail from "../components/manufacturer/ManufacturerDrawingDetail.vue"; // 接取订单
import ManufacturerDemand from "../components/manufacturer/ManufacturerDemand.vue"; // 发布成品


//配置路由
export default new VueRouter({
    //配置路由
    routes: [
        // 首页
        {
            path: "/",
            component: HomeIndex
        },
        // 登录
        {
            path: "/LogIn",
            component: LogIn,
            children: [
                // 密码登录
                {
                    path: "/LogIn",
                    component: LogInPassword
                },
                // 邮件登录
                {
                    path: "/LogInEmail",
                    component: LogInEmail
                },
                // 忘记密码
                {
                    path: "/ForgotPassword",
                    component: ForgotPassword
                },
                // 下一步-忘记密码
                {
                    path: "/ForgotPasswordA",
                    component: ForgotPasswordA
                },
                // 注册
                {
                    path: "/LRegister",
                    component: LRegister
                },
                // 下一步-注册
                {
                    path: "/LRegisterA",
                    component: LRegisterA
                }
            ]
        },
        // 消息通知
        {
            path: "/Avatar",
            component: ConsumerHomePage,
            children: [
                // 全部通知
                {
                    path: "/Avatar",
                    component: ConsumerAvatarAII
                },
                // 购买通知
                {
                    path: "/AvatarBuy",
                    component: ConsumerAvatarBuy
                },
                // 需求通知
                {
                    path: "/AvatarDemand",
                    component: ConsumerAvatarDemand
                },
                // 厂商通知
                {
                    path: "/AvatarManufacturer",
                    component: ConsumerAvatarManufacturer
                },
                // 设计者图纸通知
                {
                    path: "/DesignerAvatarDrawing",
                    component: DesignerAvatarDrawing
                },
                //设计者订单通知
                {
                    path: "/DesignerAvatarDesigner",
                    component: DesignerAvatarDesigner
                },
                //厂家订单通知
                {
                    path: "/ManufacturerAvatarDesigner",
                    component: ManufacturerAvatarDesigner
                },
                //厂家成品通知
                {
                    path: "/ManufacturerAvatarFinish",
                    component: ManufacturerAvatarFinish
                }

            ]
        },
        // 图纸购买
        {
            path: "/Drawing",
            component: ConsumerDrawing,
            children: [
                {
                    path: "/Drawing",
                    component: ConsumerDrawingPurchase,

                },
                // 产品详情页
                {
                    path: "/DrawingDetail",
                    component: ConsumerDrawingDetail,
                },
            ]
        },
        // 发布需求
        {
            path: "/Demand",
            component: ConsumerDemand
        },
        // 厂商定制
        {
            path: "/Manufacturer",
            component: ConsumerManufacturer
        },
        // 个人中心
        {
            path: "/PersonalCenter",
            component: PersonalCenter,
            children: [
                // 个人信息
                {
                    path: "/PersonalCenter",
                    component: PersonalCenterInformation
                },
                // 定制记录
                {
                    path: "/PersonalCenter/CustomizedRecords",
                    component: CustomizedRecords
                },
                // 购买记录
                {
                    path: "/PersonalCenter/PurchaseRecord",
                    component: PurchaseRecord
                },
                //账号管理
                {
                    path: "/PersonalCenter/AccountManagement",
                    component: AccountManagement,
                    children: [
                        // 账号管理-修改手机号码
                        {
                            path: "/PersonalCenter/AccountManagement/ChangePhone",
                            component: ChangePhone
                        },
                        // 账号管理-修改手机号码-下一步
                        {
                            path: "/PersonalCenter/AccountManagement/ChangePhoneL",
                            component: ChangePhoneL
                        },
                        // 账号管理-修改手机号码-下一步-下一步
                        {
                            path: "/PersonalCenter/AccountManagement/ChangePhoneLL",
                            component: ChangePhoneLL
                        },
                        // 账号管理-修改邮箱信息
                        {
                            path: "/PersonalCenter/AccountManagement/ChangEmailbox",
                            component: ChangEmailbox
                        },
                        // 账号管理-修改邮箱信息-下一步
                        {
                            path: "/PersonalCenter/AccountManagement/ChangEmailboxL",
                            component: ChangEmailboxL
                        },
                        // 账号管理-修改邮箱信息-下一步-下一步
                        {
                            path: "/PersonalCenter/AccountManagement/ChangEmailboxLL",
                            component: ChangEmailboxLL
                        },
                        // 账号管理-修改密码
                        {
                            path: "/PersonalCenter/AccountManagement/ChangePassword",
                            component: ChangePassword
                        },
                        // 账号管理-修改密码-下一步
                        {
                            path: "/PersonalCenter/AccountManagement/ChangePasswordL",
                            component: ChangePasswordL
                        },
                        // 账号管理-修改密码-下一步-下一步
                        {
                            path: "/PersonalCenter/AccountManagement/ChangePasswordLL",
                            component: ChangePasswordLL
                        },
                        // 账号管理-账号注销
                        {
                            path: "/PersonalCenter/AccountManagement/LogOff",
                            component: LogOff
                        },
                        // 账号管理-账号注销-下一步
                        {
                            path: "/PersonalCenter/AccountManagement/LogOffL",
                            component: LogOffL
                        },
                        // 账号管理-账号注销-下一步-下一步
                        {
                            path: "/PersonalCenter/AccountManagement/LogOffLL",
                            component: LogOffLL
                        }
                    ]
                }
            ]
        },
        // 我的收藏
        {
            path: "/MyCollection",
            component: MyCollection
        },
        // 我的收藏-产品详情页
        {
            path: "/MyCollection/DrawingDetail",
            component: DrawingDetail
        },
        // 设计者
        // 设计者激活
        {
            path: "/DesignerActivation",
            component: DesignerActivation
        },
        // 设计者发布图纸
        {
            path: "/DesignerDemand",
            component: DesignerDemand
        },
        // 设计者发布图纸
        {
            path: "/DesignerDrawingPurchase",
            component: DesignerDrawingPurchase,
        },
        // 设计者发布图纸 - 产品详情页
        {
            path: "/DesignerDrawingDetail",
            component: DesignerDrawingDetail
        },
        // 厂家
        // 厂家激活
        {
            path: "/ManufacturerActivation",
            component: ManufacturerActivation
        },
        // 厂家接取订单
        {
            path: "/ManufacturerDrawingPurchase",
            component: ManufacturerDrawingPurchase
        },
        // 厂家接取订单 - 产品详情页
        {
            path: "/ManufacturerDrawingDetail",
            component: ManufacturerDrawingDetail
        },
        // 厂家发布成品
        {
            path: "/ManufacturerDemand",
            component: ManufacturerDemand
        },
        // 聊天窗口
        {
            path: "/ChatWindow",
            component: ChatWindow
        },
        // 定制记录-产品详情页
        {
            path: "/PersonalCenter/CustomizedRecords/CusomizedDrawingDetail",
            component: CusomizedDrawingDetail
        },
        // 购买记录-产品详情页
        {
            path: "/PersonalCenter/PurchaseRecord/PurchaseDrawingDetail",
            component: PurchaseDrawingDetail
        }
    ]
})