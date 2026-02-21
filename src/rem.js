/**
 * html有一个设置字体大小的font-size,  默认是16px,
 * 在没有任何的设置下， 如果div元素用rem来计量，那么此时，1rem=16像素。但这时无论网面宽度大小，都是1rem=16px;
 * 拉动网页宽，div的内容并没有跟着自适应适配，因为rem是跟随html的font-size来改变的，html的font-size 没有改变，div的内容的像素大小也就没有改变。
 *
 * 问题是：如何算出网页变化时，1rem等于多少像素。比如说，网页宽300，1rem=16px。  网页宽500，1rem=16px。 网页宽800，1rem=16px。
 * 好像，网页宽度与hmtl的fontSize有着某种联系，网页宽度越大，font-size就应该越大，反之，就越小， 但需要一个计算基准。
 * 那么，得出要自适应内容，就需要解决2个问题：
 * 第1：是网页宽度改变时，要改变html的font-size的大小。
 * 第2，需要一个计算rem等于多少像素的基准。
 *
 * 那么：定一个基准，比如：拿设置稿大小来计算，因为项目都是基于设计稿呈现的。
 * 设计稿大小可以是375， 可以是750, 都没问题。
 * 就拿375来算。
 * 在1比1的情况下，所有网页内容元素，div,  文字，图片的大小，比例都没问题，都是按设计稿给的大小来呈现的。
 * 但，网页宽度是会改变的，移动端有那么多屏幕大小。
 * 此时如何应对：
 * 设计稿宽是375px,  此时1rem等于多少像素呢？
 * 可以硬性规定， 1rem = 375/10 = 37.5像素， 推出：1rem= 37.5px。 最初的基准：1rem是37.5。
 * 在设计稿宽是375px,  移动端屏幕宽度是375px,  网页宽度375px的情况下，37.5是就html的font-size的大小。
 * 此时: hmtl{ font-size: 37.5px};  1rem=37.5.
 *
 * 除以10是方便计算，直观，好理解。也可以除以其他的数值。
 * 也就是，设计稿宽是375px，手机屏幕是375px，网页是375px，， 计算出来的1rem = 37.5px。
 * 如果改变屏幕宽度，改成414像素，该怎么计算：
 * 414/375= 1.104,   屏幕宽度放大了1.104倍。
 * 那么，基准的1rem跟着也放大1.104倍，不就对上了。基准的1rem=37.5像素， 37.5*1.104倍 = 41.4像素。   刚好是414/10= 41.4。
 * 简化理解：当前网页rem大小 = 基准rem * 当前网页放大缩小倍数（网页放大缩小，是相对于基准网页大小375像素）
 * 在当前屏宽414时，计算rem是这样的：1rem = 最初的基准37.5 * (当前屏幕宽度(414) /  最初的基准37.5)
 * 可以推出：  1rem = 37.5 * 1.104，  1rem = 37.5 * 414/37.5，
 * -----
 * Gemini是这样计算的：414*（37.5/375）。
 * 37.5/375是算出基准的屏幕占比，37.5像素占屏宽375是0.1倍，1rem占网页宽度的0.1倍。
 * 那么， 在任何屏幕宽度下， 1rem都占屏幕宽的0.1倍。
 * 就得出：当前屏宽  * 1rem的占比。     414 * （37.5/375）.
 *
 * ===========
 * 前面已算出， 在任何屏幕宽度下，1rem的值是多少。
 * 也有了基准大小37.5，就要算出网页的html的font-size的大小是多少，因为这个font-size才是决定自适应的根源。
 *
 * Gemini是这样算的：
 * function setRem() {
 *   const html = document.documentElement;
 *   const width = html.clientWidth;
 *   // 限制最大宽度，避免在 PC 端过大
 *   const designWidth = 375;
 *   const baseSize = 37.5;
 *  //算出fontSize是多少
 *   html.style.fontSize = (width / designWidth) * baseSize + 'px';
 * }
 * window.onresize = setRem;
 * setRem();
 *
 * ******************************
 * 其实不用管1rem等于多少了，因rem是根据font-size来计算的。只是网页元素用rem，可以根据font-size来放大缩小而已。
 * 最主要的是网页的font-size是37.5px。  所有的网页内容，都是基于font-size=37.5px的情况下，来设置网页元素大小的。
 * 那么,  37.5px就是基准。 当网页放大缩小时，计算出网页放大缩小后的倍数， 然后基准37.5px也放大缩小同样的倍数。
 **********************
 *   37.5 * 倍数。
 *   倍数 = 当前屏幕宽 / 基准屏幕宽。倍数 = width / designWidth。
 *   推出：
 *   37.5 * (width / designWidth)， 就是放大缩小后，网页的fontSize大小。
 *   html.style.fontSize = 37.5 * (width / designWidth)。
 *   html.style.fontSize = (width / designWidth) * baseSize。
 *

*/


const  setRem =function setRem() {
    const html = document.documentElement;
    let width = html.clientWidth;

    // 限制最大宽度，比如在 PC 上最大只按 750px 宽的手机来显示
    if (width > 750) {
        //width = 750;
    }
    // 限制最大宽度，避免在 PC 端过大
    const designWidth = 375; //375是设计稿宽度。
    const baseSize = designWidth / 3;


    html.style.fontSize = (width / designWidth) * baseSize + 'px';

    console.log('html.style.fontSize =', html.style.fontSize )
}
window.onresize = setRem;
setRem();