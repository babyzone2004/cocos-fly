cc.Class({
    extends: cc.Component,

    properties: {
        id: 0,
        icon: cc.Sprite,
        itemName: cc.Label,
        itemPrice: cc.Label
    },

    // data: {id,iconSF,itemName,itemPrice}
    init: function (data) {
        this.id = data.id;
        this.icon.spriteFrame = data.iconSF;
        this.itemName.string = data.itemName;
        this.itemPrice.string = data.itemPrice;
        let a = wx.createImage();
        a.src = "http://7te819.com1.z0.glb.clouddn.com/demo.png";
        a.onload = function () {
            console.log(a);
        };
    }
});
