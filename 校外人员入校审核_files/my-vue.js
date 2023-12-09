const app = new Vue({
	el: "#app",
	data: {
		name: "喻新雅",
		date: "2023-02-18",
		tomorrow: "2023-02-19",
		time: "16:18:03"
	},
	methods: {
		format(x) {
			return (x >= 0 && x < 10) ? "0" + x : x
		},
		updateTime() {
			var myDate = new Date();
			
			const year = this.format(myDate.getFullYear());
			const month = this.format(myDate.getMonth() + 1);
			const dateInMonth = this.format(myDate.getDate());
			
			this.date = year + "-" + month + "-" + dateInMonth;
			this.tomorrow = year + "-" + month + "-" + (dateInMonth + 1);
			this.time = this.format(myDate.getHours()) + ":" + this.format(myDate.getMinutes()) + ":" + this.format(myDate.getSeconds());
			;
			
		},
		getParam() {
			const url = location.search; //获取url中"?"符后的字串
			
			if (url.indexOf("?") !== -1) {
				const str = url.substr(1);
				const strs = str.split("&");
				this.name = decodeURIComponent(strs[0].replace("name=", ""));
				
				/*id = decodeURIComponent(strs[1].replace("stu_id=", ""));
				faculty = decodeURIComponent(strs[2].replace("faculty=", ""));
				if (faculty.length == 0) {
					faculty = "理学院/曙光数据科学与大数据学院"
				}
				stu_cls_name = decodeURIComponent(strs[3].replace("stu_cls=", ""))
				if (stu_cls_name.length == 0) {
					stu_cls_name = "数据科学与大数据技术（中法班）191"
				}*/
			}
		}
	},
	created: function () {
		console.log('created');
	},
	mounted: function () {
		console.log("mounted");
		setInterval(this.updateTime, 1000);
		this.getParam();
	}
});