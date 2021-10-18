// 字符串中挑选手机号
function pickMobiles(str){
	var isMobile = /(1[0-9]{10})|([0-9]{3,4})?[0-9]{7,8}/g;
	var pNums = str.trim().match(isMobile);
	return pNums
}