﻿
var subwayData = {
	"1号线": ["苹果园", "古城", "八角游乐园", "八宝山", "玉泉路", "五棵松", "万寿路", "公主坟", "军事博物馆", "木樨地", "南礼士路", "复兴门", "西单", "天安门西", "天安门东", "王府井", "东单", "建国门", "永安里", "国贸", "大望路", "四惠", "四惠东"],
	"2号线": ["西直门", "积水潭", "鼓楼大街", "安定门", "雍和宫", "东直门", "东四十条", "朝阳门", "建国门", "北京站", "崇文门", "前门", "和平门", "宣武门", "长椿街", "复兴门", "阜成门", "车公庄"],
	"4号线": ["安河桥北", "北宫门", "西苑", "圆明园", "北京大学东门", "中关村", "海淀黄庄", "人民大学", "魏公村", "国家图书馆", "动物园", "西直门", "新街口", "平安里", "西四", "灵境胡同", "西单", "宣武门", "菜市口", "陶然亭", "北京南站", "马家堡", "角门西", "公益西桥"],
	"5号线": ["宋家庄", "刘家窑", "蒲黄榆", "天坛东门", "磁器口", "崇文门", "东单", "灯市口", "东四", "张自忠路", "北新桥", "雍和宫", "和平里北街", "和平西桥", "惠新西街南口", "惠新西街北口", "大屯路东", "北苑路北", "立水桥南", "立水桥", "天通苑南", "天通苑", "天通苑北"],
	"6号线": ["海淀五路居", "慈寿寺", "花园桥", "白石桥南", "车公庄西", "车公庄", "平安里", "北海北", "南锣鼓巷", "东四", "朝阳门", "东大桥", "呼家楼", "金台路", "十里堡", "青年路", "褡裢坡", "黄渠", "常营", "草房"],
	"7号线": ["北京西站","湾子","达官营","广安门内","菜市口","虎坊桥","珠市口","桥湾","磁器口","广渠门内","广渠门外","九龙山","大郊亭","百子湾","化工","南楼梓庄","欢乐谷景区","双合","焦化厂"],
	"8号线": ["朱辛庄", "育知路", "平西府", "回龙观东大街", "霍营", "育新", "西小口", "永泰庄", "林萃桥", "森林公园南门", "奥林匹克公园", "奥体中心", "北土城", "安华桥", "鼓楼大街", "什刹海", "南锣鼓巷"],
	"9号线": ["郭公庄", "丰台科技园", "科怡路", "丰台南路", "丰台东大街", "七里庄", "六里桥", "六里桥东", "北京西站", "军事博物馆", "白堆子", "白石桥南", "国家图书馆"],
	"10号线": ["巴沟", "苏州街", "海淀黄庄", "知春里", "知春路", "西土城", "牡丹园", "健德门", "北土城", "安贞门", "惠新西街南口", "芍药居", "太阳宫", "三元桥", "亮马桥", "农业展览馆", "团结湖", "呼家楼", "金台夕照", "国贸", "双井", "劲松", "潘家园", "十里河", "分钟寺", "成寿寺", "宋家庄", "石榴庄", "大红门", "角门东", "角门西", "草桥", "纪家庙", "首经贸", "丰台站", "泥洼", "西局", "六里桥", "莲花桥", "公主坟", "西钓鱼台", "慈寿寺", "车道沟", "长春桥", "火器营"],
	"13号线": ["西直门", "大钟寺", "知春路", "五道口", "上地", "西二旗", "龙泽", "回龙观", "霍营", "立水桥", "北苑", "望京西", "芍药居", "光熙门", "柳芳", "东直门"],
	"14号线西段": ["张郭庄", "园博园", "大瓦窑", "郭庄子", "大井", "七里庄", "西局"],
	"14号线东段": ["金台路","朝阳公园","枣营","东风北桥","将台","高家园","望京南","阜通","望京","东湖渠","来广营","善各庄"],
	"15号线": ["清华东路西口","六道口","北沙滩","奥林匹克公园","安立路","关庄","望京西", "望京", "崔各庄", "马泉营", "孙河", "国展", "花梨坎", "后沙峪", "南法信", "石门", "顺义", "俸伯"],
	"八通线": ["四惠", "四惠东", "高碑店", "传媒大学", "双桥", "管庄", "八里桥", "通州北苑", "果园", "九棵树", "梨园", "临河里", "土桥"],
	"昌平线": ["南邵", "沙河高教园", "沙河", "巩华城", "朱辛庄", "生命科学园", "西二旗"],
	"亦庄线": ["宋家庄", "肖村", "小红门", "旧宫", "亦庄桥", "亦庄文化园", "万源街", "荣京东街", "荣昌东街", "同济南路", "经海路", "次渠南", "次渠"],
	"大兴线": ["公益西桥", "新宫", "西红门", "高米店北", "高米店南", "枣园", "清源路", "黄村西大街", "黄村火车站", "义和庄", "生物医药基地", "天宫院"],
	"房山线": ["郭公庄","大葆台","稻田","长阳","篱笆房","广阳城","良乡大学城北","良乡大学城","良乡大学城南","良乡南关","苏庄"]
},result;
var lineColors = ["#FFFFFF","#CE0000","#0063CF","#00CCCD","#9B0067","#EC9A00","#F7C67D","#006731","#ACCC00","#42A6FF","#FFCD10","#E0B2AB","#E0B2AB","#FF3600","#CF0000","#C60082","#FF3500","#00CCCD","#D7333B"]
function init () {
	getSubwayLines();
	window.onload =function(){
		showStations();
		btnClick();
	};
}

function getSubwayLines(){
	var htmls = ["<option disabled selected>选择线路</option>"];
	i = -1;
	for (var lineName in subwayData)
//	i++,
		htmls.push("<option>"+lineName+"</option>");
	$('.select-line').html(htmls.join(""));
	$('.select-line').selectpicker('refresh');
	$('.select-line li').each(function(){$(this).css("background-color",lineColors[$(this).attr("data-original-index")]);})
}

function getSubwayStations (lineName) {
	htmls = [];
	for(var stations = subwayData[lineName], i=0; i < stations.length; i++) htmls.push("<option>"+stations[i]+"</option>");
		return htmls.join("");
}

function showStations(){
	$(".select-line").on("click", "li",
	function(){
		var stationHtml = "<option>选择车站</option>" + getSubwayStations($(this).text());
		var stationLists = $(this).parent().parent().parent().parent().find('select.select-station');
		stationLists.html(stationHtml);
		stationLists.selectpicker('refresh');
		stationLists.selectpicker('refresh');
	})
}

function getDistance (city,start, end) {
	var aj = $.ajax( {
		url:'request.php',
		data:{
			 city : city,
			 start : start,
			 end : end  
		},
		type:'get',
		cache:false,
		jsonp:"jsonpcallback",
		dataType:'JSONP',
		async:false,
		success: function(json) {
			result = {err:0, distance: json.distance, start: start, end: end};
			alert();
		 },
		 error : function() {
				alert("异常！");
				result = {err:3, distance: json.distance};
		 }
	});
}

function calcFare (distance) {
	if(distance <= 6) return 3;
	if(distance <= 12) return 4;
	if(distance <= 32) return Math.ceil((distance-12)/10) + 4;
	else return Math.ceil((distance-32)/20) + 6;
}

function btnClick () {
		$(".btn-primary").on("click", 
		function(){
			var selectedStart = $('.select-station .filter-option').eq(0).text(),
				selectedEnd = $('.select-station .filter-option').eq(1).text();
			if (selectedStart == '选择车站' || selectedEnd == '选择车站') {result = {err: 1, distance: 1/0};}
			else if (selectedStart == selectedEnd) {result = {err: 2, distance: 1/0};}
			else getDistance('distances', selectedStart, selectedEnd);
			refreshInfo(result);
		})
}

function refreshInfo (data) {
	var newClass = "alert-error",
		title = "错误",
		msg;
	switch(data.err){
		case 0:
			newClass = "alert-info";
			title = "结果";
			msg = "从 " + data.start + " 到 " + data.end + " ：<br>" + "单程：" + data.distance + "公里<br>票价：" + calcFare(data.distance) + "元";
			break;
		case 1:
			msg = "请选择车站";
			break;
		case 2:
			msg = "起点终点相同";
			break;
		default:
			msg = "未知错误";
			break;
	}
	$('.alert').removeClass().addClass('alert '+newClass);
	$('.alert').find('h4').html(title);
	$('.alert').find('p').html(msg);
	return;
}

init();

