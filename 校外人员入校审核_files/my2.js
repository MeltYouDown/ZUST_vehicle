function format(x) {
	return (x >= 0 && x < 10) ? "0" + x : x
}

function updateTime() {
	var date = document.getElementById("date")
	var time = document.getElementById("time")
	var myDate = new Date();
	var nowTime = format(myDate.getHours()) + ":" + format(myDate.getMinutes()) + ":" + format(myDate.getSeconds());
	var nowDate = format(myDate.getMonth() + 1) + "月" + format(myDate.getDate()) + "日";
	date.innerHTML = nowDate
	time.innerHTML = nowTime
}

window.onload = function () {
	setInterval(updateTime, 1000);
	let id;
	let name;
	let faculty;
	let stu_cls_name;
	function getParam() {
		var url = location.search; //获取url中"?"符后的字串
		
		if (url.indexOf("?") != -1) {
			var str = url.substr(1);
			strs = str.split("&");
			name = decodeURIComponent(strs[0].replace("name=", ""));
			id = decodeURIComponent(strs[1].replace("stu_id=", ""));
			faculty = decodeURIComponent(strs[2].replace("faculty=", ""));
			if (faculty.length == 0) {
				faculty = "理学院/曙光数据科学与大数据学院"
			}
			stu_cls_name = decodeURIComponent(strs[3].replace("stu_cls=", ""))
			if (stu_cls_name.length == 0) {
				stu_cls_name = "数据科学与大数据技术（中法班）191"
			}
		}
	}
	
	getParam();
	
	var name_id_class = document.getElementsByClassName("flex___3dQyb title___3AeBm")
	var name_id = name_id_class[0]
	
	name_id.innerHTML = name + " (" + id + ")"
	
	var stu_cls_class = document.getElementsByClassName("flex___3dQyb longName___2Q-iE")
	var stu_cls = stu_cls_class[0]
	stu_cls.innerHTML = "班级：" + stu_cls_name
	
	var stu_faculty = document.getElementById("faculty")
	stu_faculty.innerHTML = "学院：" + faculty
	
	var max_millisecond = 24 * 60 * 60 * 3 * 1000
	var cur_unix_time = new Date().getTime()
	var delta = Math.floor(Math.random() * max_millisecond)
	
	var PCR_sampling_unix_time = cur_unix_time - delta
	
	var myDate2 = new Date(PCR_sampling_unix_time)
	// 06-10 01:16
	
	var PCR_sampling_time_div_class = document.getElementsByClassName("flex___3dQyb sampling1___1hjoe")
	var PCR_sampling_time_div = PCR_sampling_time_div_class[0]
	var PCR_sampling_time_span = PCR_sampling_time_div.firstElementChild
	PCR_sampling_time_span.innerHTML = format(myDate2.getMonth() + 1) + "-" + format(myDate2.getDate()) + " "
		+ format(myDate2.getHours()) + ":" + format(myDate2.getMinutes())
}
