function closeWin() {
	api.closeWin();
}

function openWin(model, htmlname) {
	if (arguments[2] == 1) {
		if (!$api.getStorage('member_id')) {
			api.openWin({
				name : 'member_login',
				url : 'widget://html/member/login.html'
			});
			return
		}
	}
	var pageParam = [];
	if (arguments[3]) {
		pageParam = arguments[3]
	}
	api.openWin({
		name : model + '_' + htmlname,
		url : 'widget://html/' + model + '/' + htmlname + '.html',
		pageParam : pageParam
	});
}

function go_login() {
	api.openWin({
		name : 'member_login',
		url : 'widget://html/member/login.html'
	});
	return false;
}

function is_login() {
	console.log("22222" + $api.getStorage('token'));
	if (!$api.getStorage('token')) {
		return false;
	} else {
		return true;
	}
}

function check_login() {
	if (!is_login()) {
		go_login();
	}
}

var Baseurl = 'http://123.56.245.211:6060/api/';
//域名url
var news_url = Baseurl + 'news/news';
var xq_url = Baseurl + 'user_info/user_band';
var ly_url = Baseurl + 'user_info/getAjaxBuilding';
var sp_url = Baseurl + 'user_info/getAjaxComarea';
var park_url = Baseurl + 'user_info/getAjaxParkarea';
var zz_url = Baseurl + 'user_info/user_runband';
var login_url = Baseurl + 'login/login';
var register_url = Baseurl + 'login/reg';
var sendsms_url = Baseurl + 'login/smscode';
var fc_url = Baseurl + 'user_info/user_band_info';
var del_fc_url = Baseurl + 'user_info/band_del';
var hou_url=Baseurl + 'Goods2/owner_assets';
var zd_url = Baseurl + 'Goods2/goods_list';
var dd_url = Baseurl + 'Goods2/show_goods';
var order_create_url = Baseurl + 'Goods2/order_create';
var alipay_before_url = Baseurl + 'Goods2/alipay_before';
var pay_url = Baseurl + 'Goods2/alipay_before2';
var resetPassword_sendsms_url = Baseurl + 'login/smscode2';
var resetPassword_url = Baseurl + 'login/reset_password';
var update_url = Baseurl + 'user_info/change_pass_notify';
var updatePassword_url = Baseurl + 'user_info/change_pass';
var message_url = Baseurl + 'user_info/user_fees_remind';
var paylist_url = Baseurl + 'user_info/show_paylist';
var zdlist_url = Baseurl + 'user_info/show_bilhis';
var houselist_url = Baseurl + 'user_info/owner_assets';
var bd_url = Baseurl + 'user_info/user_runbandmob';
var account_url = Baseurl + 'user_info/prepayment_detail';
var update_account_money_url = Baseurl + 'user_info/update_account_money';
var Bill_url = Baseurl + 'user_info/reduction_runrequest_bill';
var manger_url = Baseurl + 'Manager/is_manager';
var manager_url = Baseurl + 'Manager/manager_building';
var unit_url = Baseurl + 'Manager/getAjaxHouUnit';
var house_url = Baseurl + 'Manager/getHouse';
//var bill_url=Baseurl +'Manager/getHouBill';
var bills_url = Baseurl + 'goods3/getAjaxIsPreBill';
var order_url = Baseurl + 'goods3/order_create';
var alipay_url = Baseurl + 'goods3/alipay_before';
var zdjj_url = Baseurl + 'Manager/getPaidInfo';
var wx_url = Baseurl + 'goods3/wxpay_before';
var user_url = Baseurl + 'user_info/is_user';
var wxpay_before_url = Baseurl + 'Goods2/wxpay_before';
var wx_pay_url = Baseurl + 'Goods2/wxpay_before2';
var alipay_return_result_url = Baseurl + 'Goods4/alipay_return_result';
var wxpay_return_result_url = Baseurl + 'Goods4/wxpay_return_result';
var is_collect_url = Baseurl + 'Manager/is_collect';
var manager_set_collect_url = Baseurl + 'Manager/manager_set_collect';
var manager_runset_collect_url = Baseurl + 'Manager/manager_runset_collect';
//一.楼管登录
//1.楼管统计(账单统计)
var manager_total_report_url = Baseurl + 'Manager/manager_total_report';
//2.楼号详情(账单统计)
var manager_building_report_url = Baseurl + 'Manager/manager_building_report';
//3.楼管收费查询(收费统计)
var manager_pay_search_url = Baseurl + 'Manager/manager_pay_search';
//4.楼管收费查询(收费统计)
var manager_building_total_pay_url = Baseurl + 'Manager/manager_building_total_pay';
//5.楼管收费查询(收费统计详情)
var manager_building_detail_pay_url = Baseurl + 'Manager/manager_building_detail_pay';
//6.楼管收费查询业主缴费详情
var manager_owner_detail_pay_url = Baseurl + 'Manager/manager_owner_detail_pay';
//7.业主欠费详情（楼管）
var manager_owner_report_url = Baseurl + 'Manager/manager_owner_report';
//8.楼管预收
var charge_list_url = Baseurl + 'Manager/charge_list';
var bill_all_runpay2_url = Baseurl + 'Manager/bill_all_runpay2';
var orderCreate_url = Baseurl + 'goods4/order_create'; 
var Wx_url = Baseurl + 'goods4/wxpay_before';
//8.1支付宝扫码
var alipay_before1_url=Baseurl + 'Goods4/alipay_before';
//8.2微信扫码
var wx_before1_url=Baseurl + 'Goods4/wxpay_before';
//9.楼管签注记录
var getAjaxManBuilding_url=Baseurl + 'Manager/getAjaxManBuilding';
//二.出纳登录
//1.出纳收取楼管签注金额(获取楼管姓名)
var getAjaxManager_url = Baseurl + 'Manager/getAjaxManager';
//1.1出纳收款(楼管账单统计)
var cashier_manager_pay_url = Baseurl + 'Manager/cashier_manager_pay';
//1.2出纳收取业主的款
var getAjaxUserHc_url = Baseurl + 'Manager/getAjaxUserHc';
//2.楼管签注
//2.1楼管签注核销
var manager_pay_record_url = Baseurl + 'Manager/manager_pay_record';
//2.2楼管签注查询
var manager_pay_detail_url=Baseurl + 'Manager/manager_pay_detail';
var getAjaxManageInfo_url=Baseurl + 'Manager/getAjaxManageInfo';
var manager_all_pay_url=Baseurl + 'Manager/manager_all_pay';
//3. 出纳收费统计(小区楼宇统计)
var cashier_building_total_pay_url = Baseurl + 'Manager/cashier_building_total_pay';
//4.环比统计
var index_report_url=Baseurl + 'Manager/index_report';
//三、公司财务登录
//1出纳签注记录
//1.1获取出纳
var getAjaxCashier_url = Baseurl + 'Manager/getAjaxCashier';
//1.2获取签注查询
var bill_pay_record_url = Baseurl + 'Manager/bill_pay_record';
//1.3 出纳签注
var cashier_pay_record_url=Baseurl + 'Manager/cashier_pay_record';
var getAjaxCashierInfo_url=Baseurl + 'Manager/getAjaxCashierInfo';
var cashier_all_pay_url=Baseurl + 'Manager/cashier_all_pay';
//2.收费统计
var finance_resident_total_pay_url = Baseurl + 'Manager/finance_resident_total_pay';
//3.费用减免
var reduction_runrequest_url = Baseurl + 'Manager/reduction_runrequest';
var getReductionMon_url=Baseurl + 'Manager/getReductionMon';
var getReductionBil_url=Baseurl + 'Manager/getReductionBil';
var getAjaxHouse_url=Baseurl + 'Manager/getAjaxHouse';
//4.减免历史
var reduction_history_url = Baseurl + 'Manager/reduction_history';
//5.账单统计
var cashier_resident_pay_url=Baseurl + 'Manager/cashier_resident_pay';
//5.业主基本信息
var house_list_url= Baseurl + 'Manager/house_list';
//四、总经理登录
//1.注册人员
var admin_list_url = Baseurl + 'Manager/admin_list';
//2.非注册人员
var owner_list_url = Baseurl + 'Manager/owner_list';
//3.费用减免
var reduction_relist_url = Baseurl + 'Manager/reduction_relist';
var reduction_okedit_url = Baseurl + 'Manager/reduction_okedit';
var reduction_runset_url = Baseurl + 'Manager/reduction_runset';
//五、分管总裁
var reduction_relist2_url = Baseurl + 'Manager/reduction_relist2';
var reduction_pass_url = Baseurl + 'Manager/reduction_pass';
//六、人事分管领导
//1.注册人员
var admin_list_url = Baseurl + 'Manager/admin_list';
//2.非注册人员
var owner_list_url = Baseurl + 'Manager/owner_list';
//3.人员录入
var admin_add_url=Baseurl + 'Manager/admin_add';
var admin_runadd_url=Baseurl + 'Manager/admin_runadd';
//4.人员调整
var admin_edit_url=Baseurl + 'Manager/admin_edit';
var admin_runedit_url=Baseurl + 'Manager/admin_runedit';

