
const util = require("../../utils/util.js");

//1->全部;41->视频;10->图片;29->段子;31->声音;
let types = ["1", "41", "10", "29", "31"];

Page({
  data: {
    tabItems: ["全部", "视频", "图片", "段子", "声音"],
    allDataList: [],
    currTab: 0,
    swiperHeight: "0"
  },

  onLoad: function (options) {
    this.getNewdata()
  },

  /*
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          swiperHeight: (res.windowHeight - 37)
        });
      }
    })
  },

  //获取及更新数据
  getNewdata() {
    wx.showLoading({
      title:'加载中'
    })
    util.request({ a: 'list', c: 'data', type: types[this.data.currTab]}).then((res) => {
      this.setData({
        allDataList: res.data.list
      });
      wx.hideLoading()
    })
  },
  setcurrTab(e) {
    this.setData({
      currTab: e.currentTarget.dataset.i
    })
  },
  /*
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /*
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /*
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /*
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
     this.getNewdata()
  },

  /*
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /*
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})