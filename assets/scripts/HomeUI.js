const BackPackUI = require("BackPackUI");
const ShopUI = require("ShopUI");

const PanelType = cc.Enum({
    Home: -1,
    Shop: -1,
});

cc.Class({
    extends: cc.Component,

    properties: {
        menuAnim: {
            default: null,
            type: cc.Animation
        },
        homeBtnGroups: {
            default: [],
            type: cc.Node
        },
        backPackUI: {
            default: null,
            type: BackPackUI
        },
        shopUI: ShopUI
    },

    // use this for initialization
    onLoad: function () {
        this.curPanel = PanelType.Home;
        this.menuAnim.play("menu_reset");
        this.hr = cc.find("Canvas/Home/hr");
        console.log("");
        console.log("%c我们正在寻找：", "font-weight: bold;");
        console.log("Cocos Creator开发工程师：https://www.lagou.com/jobs/3921325.html?source=pl&i=pl-0");
        console.log("游戏服务端开发工程师 ：https://www.lagou.com/jobs/3387900.html?source=pl&i=pl-6");
        console.log("Email：cp-gamedev@kkworld.com");
        console.log("%c——快看漫画·游戏研发中心 ", "color: red;");
        console.log("");
    },

    start: function () {
        this.backPackUI.init(this);
        this.shopUI.init(this, PanelType.Shop);
        this.scheduleOnce (function () {
            this.menuAnim.play("menu_intro");
        }.bind(this), 0.5);
    },

    toggleHomeBtns: function (enable) {
        for (let i = 0; i < this.homeBtnGroups.length; ++i) {
            let group = this.homeBtnGroups[i];
            if (!enable) {
                cc.eventManager.pauseTarget(group, true);
            } else {
                cc.eventManager.resumeTarget(group, true);
            }
        }
    },

    gotoShop: function () {
        if (this.curPanel !== PanelType.Shop) {
            this.shopUI.show();
            // this.hr.active = false;
        }
    },

    gotoHome: function () {
        if (this.curPanel === PanelType.Shop) {
            this.shopUI.hide();
            this.curPanel = PanelType.Home;
            this.scheduleOnce(function () {
                // this.hr.active = true;
            }, 1);
            
        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
