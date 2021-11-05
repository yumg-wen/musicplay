/*分析需求
1.獲取li的index()
2.更換背景圖片
3.更換播放器圖片.文本
4.更換按鈕及title為暫停
5.圖片旋轉
6.播放歌曲


其他功能
播放器暫停播放.
下一首.上一首
播放器顯示與隱藏
*/

// 準備工作  蒐集數據

let index = 0; /*li初始索引*/
let li = $('.banner ul li'); /*獲取li元素 */
let img = $('.music .m_img img');
let text = $('.music .m_text');
let prev = $('.music .m_btn .m_prev');
let play = $('.music .m_btn .m_play');
let next = $('.music .m_btn .m_next');
let mp3 = $('.music .m_mp3');
let flag = false; /*歌曲是否播放標記 true播放 false暫停 */
let close = false; /*撥放器是否顯示 true顯示 false隱藏 */

/*獲取li的索引*/

li.click(function () {
  // console.log($(this).index())

  /**播放音樂 */
  show();
});
/*封裝一個函數  方便下一首上一首調用*/
function show() {
  //更換背景圖片 索引+1 因為index從0開始  圖片1開始
  index = $(this).index();
  change_bg(index + 1);
  change_img_text(index + 1);
}
// console.log(show());

//更換背景
function change_bg(idx) {
  // let url = `img/${idx}_bg.jpg`;
  // console.log(url);
  $('body').css({
    background: `url(img/${idx + 1}_bg.jpg)`,
    'background-size': 'cover',
  });
}
// console.log(change_bg);

function change_img_text(idx) {
  img.attr('src', `img/${idx}.jpg`);
  text.html(li.eq(index).attr('title'));
}
