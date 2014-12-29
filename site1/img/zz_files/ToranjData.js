//Sliding Tabs

var slideMenu=function(){
	var sp,st,t,m,sa,l,w,gw,ot;
	return{
		build:function(sm,sw,mt,s,sl,h){
			sp=s; st=sw; t=mt;
			m=document.getElementById(sm);
			sa=m.getElementsByTagName('li');
			l=sa.length; w=m.offsetWidth; gw=w/l;
			ot=Math.floor((w-st)/(l-1)); var i=0;
			for(i;i<l;i++){s=sa[i]; s.style.width=gw+'px'; this.timer(s)}
			if(sl!=null){m.timer=setInterval(function(){slideMenu.slide(sa[sl-1])},t)}
		},
		timer:function(s){
			s.onmouseover=function(){clearInterval(m.htimer);clearInterval(m.timer);m.timer=setInterval(function(){slideMenu.slide(s)},t)}
			s.onmouseout=function(){clearInterval(m.timer);clearInterval(m.htimer);m.htimer=setInterval(function(){slideMenu.slide(s,true)},t)}
		},
		slide:function(s,c){
			var cw=parseInt(s.style.width);
			if((cw<st && !c) || (cw>gw && c)){
				var owt=0; var i=0;
				for(i;i<l;i++){
					if(sa[i]!=s){
						var o,ow; var oi=0; o=sa[i]; ow=parseInt(o.style.width);
						if(ow<gw && c){oi=Math.floor((gw-ow)/sp); oi=(oi>0)?oi:1; o.style.width=(ow+oi)+'px';
						}else if(ow>ot && !c){oi=Math.floor((ow-ot)/sp); oi=(oi>0)?oi:1; o.style.width=(ow-oi)+'px'}
						if(c){owt=owt+(ow+oi)}else{owt=owt+(ow-oi)}}}
				s.style.width=(w-owt)+'px';
			}else{clearInterval(m.timer);clearInterval(m.htimer)}
		}
	};
}();

//-->

//*********************************************
//برای ماسک کردن مقدار عددی ورودی با کاما
fillArray = function () {
    inpId.splice(0, inpId.length - 1);
    var i = 0;
    var InputsId = document.getElementsByTagName("input");
    for (var k = 0; k < InputsId.length; k++) {
        if ((InputsId[k].type == "text") || (InputsId[k].type == "password") || (InputsId[k].type == "checkbox") || (InputsId[k].type == "submit")) {
            if (!(InputsId[k].disabled)) {
                inpId[i++] = InputsId[k];
            }
        }
    }
}

function AmountMaskE2(amount) {
    var i, j, mystring, flag;

    if (amount == '')
        return "";

    i = amount.length;


    mystring = "";
    for (j = 0; j < i; j++) {
        if (amount.substring(j, j + 1) == ",") {
            flag = true;
        }
    }

    if (flag == true) {
        amount = DAmountMaskE(amount);
    }
    i = amount.length;
    if (i > 3) {
        for (j = i; j > 0; j = j - 3) {

            if (j > 3) {
                mystring = "," + amount.substring(j - 3, j) + mystring;

            } else {
                mystring = amount.substring(0, j) + mystring;
            }
        }

        return mystring;
    } else {

        return amount;
    }

}


function DAmountMaskE(amount) {
    var i, j, mystring, str;
    i = amount.length;
    mystring = "";

    for (j = i; j >= 0; j -= 1) {
        str = amount.substring(j, j - 1);
        if (str != ",") {
            mystring = str + mystring;
        }
    }
    return mystring;
}


function InputNumberMasking(obj) {
	        
            if (obj.value !== '') {
                obj.value = AmountMaskE2(obj.value);
            }
        }



//*********************************************
//برای چک کردن مقدار ورودی به صورت عدد
        function check_KeyPress(e, AllowPast) {

            var keycode;

            if (e.charCode != undefined && e.charCode != 0)
                keycode = e.charCode;
            else if (e.keyCode != undefined && e.keyCode != 0)
                keycode = e.keyCode;
            else
                return true;

            //alert(keycode);

            if (keycode >= 48 && keycode <= 57)
                return true;
            else if (keycode == 46 || keycode == 8 || keycode == 9)
                return true;
            else if (AllowPast == true && keycode == 118)
                return true;
            else
                return false;
        }


//***********************************************
//Hijri Date

        function ShowDateShamsi() {
            week = new Array("يكشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه")
            months = new Array("فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "اسفند");
            a = new Date(); d = a.getDay(); day = a.getDate(); month = a.getMonth() + 1; year = a.getFullYear(); if (year == 0) { year = 2000; }
            if (year < 100) { year += 1900; } y = 1; for (i = 0; i < 3000; i += 4) {
                if (year == i)
                { y = 2; }
            } for (i = 1; i < 3000; i += 4) { if (year == i) { y = 3; } } if (y == 1) {
                year -= ((month < 3) || ((month == 3) && (day < 21))) ?
622 : 621; switch (month) {
                    case 1: (day < 21) ? (month = 10,
day += 10) : (month = 11, day -= 20); break; case 2: (day < 20) ? (month = 11,
day += 11) : (month = 12, day -= 19); break; case 3: (day < 21) ? (month = 12,
day += 9) : (month = 1, day -= 20); break; case 4: (day < 21) ? (month = 1,
day += 11) : (month = 2, day -= 20); break; case 5: case 6: (day < 22) ?
(month -= 3, day += 10) : (month -= 2, day -= 21); break; case 7: case 8: case 9:
                        (day < 23) ? (month -= 3, day += 9) : (month -= 2, day -= 22); break; case 
10: (day < 23) ? (month = 7, day += 8) : (month = 8, day -= 22); break; case 11:
                    case 12: (day < 22) ? (month -= 3, day += 9) : (month -= 2, day -= 21); break;
                    default: break;
                }
            } 
            if (y == 2) {
                year -= ((month < 3) || ((month ==3) && (day < 20))) ? 622 : 621;switch (month) {
                    case 1:
                        (day < 21) ? (month = 10, day += 10) : (month = 11, day -= 20); break;
                    case 2:
                        (day < 20) ? (month = 11, day += 11) : (month = 12, day -= 19); break;
                    case 3:
                        (day < 20) ? (month = 12, day += 10) : (month = 1, day -= 19); break;
                    case 4:
                        (day < 20) ? (month = 1, day += 12) : (month = 2, day -= 19); break;
                    case 5:
                        (day < 21) ? (month = 2, day += 11) : (month = 3, day -= 20); break;
                    case 6:
                        (day < 21) ? (month = 3, day += 11) : (month = 4, day -= 20); break;
                    case 7:
                        (day < 22) ? (month = 4, day += 10) : (month = 5, day -= 21); break;
                    case 8:
                        (day < 22) ? (month = 5, day += 10) : (month = 6, day -= 21); break;
                    case 9:
                        (day < 22) ? (month = 6, day += 10) : (month = 7, day -= 21); break;
                    case 10:
                        (day < 22) ? (month = 7, day += 9) : (month = 8, day -= 21); break;
                    case 11:
                        (day < 21) ? (month = 8, day += 10) : (month = 9, day -= 20); break;
                    case 12:
                        (day < 21) ? (month = 9, day += 10) : (month = 10, day -= 20); break;
                    default: break;
                }
            } 
            if (y == 3) {
                year -= ((month < 3) || ((month == 3) && (day < 21))) ? 622 : 621;switch (month) {
                    case 1:
                        (day < 20) ? (month = 10, day += 11) : (month = 11, day -= 19); break;
                    case 2:
                        (day < 19) ? (month = 11, day += 12) : (month = 12, day -= 18); break;
                    case 3:
                        (day < 21) ? (month = 12, day += 10) : (month = 1, day -= 20); break;
                    case 4:
                        (day < 21) ? (month = 1, day += 11) : (month = 2, day -= 20); break;
                    case 5:
                    case 6: (day < 22) ? (month -= 3, day += 10) : (month -= 2, day -= 21); break;
                    case 7:
                    case 8:
                    case 9: (day < 23) ? (month -= 3, day += 9) : (month -= 2, day -= 22); break;
                    case 10: (day < 23) ? (month = 7, day += 8) : (month = 8, day -= 22); break;
                    case 11:
                    case 12: (day < 22) ? (month -= 3, day += 9) : (month -= 2, day -= 21); break;
                    default: break;
                }
                    
            }
            document.write(week[d] + " " + day + " " + months[month - 1] + " " + year);

        }


// miladi date

        function ShowDateMiladi() {

            var m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

            var d = new Date();
            var curr_date = d.getDate();
            var sup = "";
            if (curr_date == 1 || curr_date == 21 || curr_date == 31) {
                sup = "st";
            }
            else if (curr_date == 2 || curr_date == 22) {
                sup = "nd";
            }
            else if (curr_date == 3 || curr_date == 23) {
                sup = "rd";
            }
            else {
                sup = "th";
            }

            var curr_month = d.getMonth();
            var curr_year = d.getFullYear();

            document.write(curr_date + "<SUP>" + sup + "</SUP> "
            + m_names[curr_month] + " " + curr_year);

        }
       



// convert to shamsi ( format: string yyyy/mm/dd )

        function grgIsLeap(Year) {
            return ((Year % 4) == 0 && ((Year % 100) != 0 || (Year % 400) == 0));
        }
        function hshIsLeap(Year) {
            Year = (Year - 474) % 128;
            Year = ((Year >= 30) ? 0 : 29) + Year;
            Year = Year - Math.floor(Year / 33) - 1;
            return ((Year % 4) == 0);
        }
        var grgSumOfDays = Array(Array(0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365), Array(0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366));
        var hshSumOfDays = Array(Array(0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336, 365), Array(0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336, 366));


        function ToShamsi(date) {

            var a = new Date(date);
            var grgDay = a.getDate();
            var grgMonth = a.getMonth() + 1;
            var grgYear = a.getFullYear();

            var hshYear = grgYear - 621;
            var hshMonth, hshDay;

            var grgLeap = grgIsLeap(grgYear);
            var hshLeap = hshIsLeap(hshYear - 1);

            var hshElapsed;
            var grgElapsed = grgSumOfDays[(grgLeap ? 1 : 0)][grgMonth - 1] + grgDay;

            var XmasToNorooz = (hshLeap && grgLeap) ? 80 : 79;

            if (grgElapsed <= XmasToNorooz) {
                hshElapsed = grgElapsed + 286;
                hshYear--;
                if (hshLeap && !grgLeap)
                    hshElapsed++;
            }
            else {
                hshElapsed = grgElapsed - XmasToNorooz;
                hshLeap = hshIsLeap(hshYear);
            }

            for (var i = 1; i <= 12 ; i++) {
                if (hshSumOfDays[(hshLeap ? 1 : 0)][i] >= hshElapsed) {
                    hshMonth = i;
                    hshDay = hshElapsed - hshSumOfDays[(hshLeap ? 1 : 0)][i - 1];
                    break;
                }
            }


            //if (Format == "Long")
            //    return hshDayName(hshDayOfWeek(hshYear, hshMonth, hshDay)) + "  " + hshDay + " " + calNames("hf", hshMonth - 1) + " " + hshYear;
            //else
                return hshYear + "/" + hshMonth + "/" + hshDay;
        }






        // پیام هشدار
        function alerts(message) {
            jAlert(message);
        }

        function msg(title, message, delay) {
            $.growlUI(title, message, delay);
        }

        // سوال تایید
        function confirms(message) {
            //    var retval = false;
            //    jConfirm(message, 'تاییدیه سامانه', function(r) {
            //        retval = r;
            //    });
            //    return false;

            return confirm(message);

        }

        // باز و بسته کردن تگ دلخواه
        function toggler(togglerId) {
            $('#' + togglerId).toggle(500);
        }

        // باز  کردن تگ دلخواه
        function openMe(openId) {
            $('#' + openId).show(500);
        }

        //  بستن  تگ دلخواه
        function closeMe(closeId) {
            $('#' + closeId).hide(500);
        }

        function chk(checkboxId, tagId) {

            if ($("#" + checkboxId).is(":checked")) {
                openMe(tagId);

            }
            else {
                closeMe(tagId);
            }

        }



        // تشخیص یونیکد بودن متن
        function isUnicode(str) {
            var letters = [];
            for (var i = 1; i <= str.length; i++) {
                letters[i] = str.substring((i - 1), i);
                if (letters[i].charCodeAt() > 255) { return true; }
            }
            return false;
        }

        // انتخاب/حذف انتخاب همه سطر ها

        var checkflag = "false";
        function select_deselectAll() {

            if (chk_Array_IDs != null) {
                if (checkflag == "false") {
                    for (i = 0; i < chk_Array_IDs.length; i++) {
                        var ref_chk = document.getElementById(chk_Array_IDs[i]);
                        if (ref_chk != null)

                            ref_chk.checked = true;
                    }
                    checkflag = "true";

                }
                else {
                    for (i = 0; i < chk_Array_IDs.length; i++) {
                        var ref_chk = document.getElementById(chk_Array_IDs[i]);
                        if (ref_chk != null)
                            ref_chk.checked = false;
                    }
                    checkflag = "false";
                }
            }
        }

        // انتخاب همه سطر ها
        function selectAll() {

            if (chk_Array_IDs != null) {

                for (i = 0; i < chk_Array_IDs.length; i++) {
                    var ref_chk = document.getElementById(chk_Array_IDs[i]);
                    if (ref_chk != null)

                        ref_chk.checked = true;
                }

            }
        }

        // حذف انتخاب همه سطر ها
        function deSelectAll() {

            if (chk_Array_IDs != null) {

                for (i = 0; i < chk_Array_IDs.length; i++) {
                    var ref_chk = document.getElementById(chk_Array_IDs[i]);
                    if (ref_chk != null)

                        ref_chk.checked = false;
                }

            }
        }


        //  انتخاب معکوس سطر ها
        function inSelectAll() {

            if (chk_Array_IDs != null) {

                for (i = 0; i < chk_Array_IDs.length; i++) {
                    var ref_chk = document.getElementById(chk_Array_IDs[i]);
                    if (ref_chk != null)
                        if (ref_chk.checked == false)
                            ref_chk.checked = true;
                        else
                            ref_chk.checked = false;
                }

            }
        }

        function select_deselect(chk_Array, chk) {


            if (chk_Array != null) {

                for (i = 0; i < chk_Array.length; i++) {
                    var ref_chk = document.getElementById(chk_Array[i]);
                    if (ref_chk != null)
                        ref_chk.checked = chk;
                }


            }
        }

        // قرار دادن کاما در فیلد قیمت
        function moneyCommaSep(id) {
            var ctrl = document.getElementById(id);
            if (ctrl != null) {
                var separator = ",";
                var int = ctrl.value.replace(new RegExp(separator, "g"), "");
                var regexp = new RegExp("\\B(\\d{3})(" + separator + "|$)");
                do {
                    int = int.replace(regexp, separator + "$1");
                }
                while (int.search(regexp) >= 0)
                ctrl.value = int;
            }
        }

        // حذف کاما
        function removeComma(id) {
            var ctrl = document.getElementById(id);
            var separator = ",";
            ctrl.value = ctrl.value.replace(new RegExp(separator, "g"), "");
        }


        function GetParentIfExists(wnd) {
            var wndOpener = wnd.parent;
            if (!wndOpener) wndOpener = wnd;
            return wndOpener;
        }
        function OpenPopupWindow(childURL, childName, childFeatures) {
            var wndOpener = GetParentIfExists(window);
            var wndChild;
            wndChild = wndOpener.open(childURL, childName, childFeatures);
            if (wndChild != null) {
                if (g_JS_isWin || !g_JS_isIE)
                    wndChild.focus();
            }
        }

        function popMe(Url, width, height) {
            var wndOpener = GetParentIfExists(window);
            var wndChild;
            wndChild = wndOpener.open(Url, 'X625', 'width=' + width + ',height=' + height + ',top=20,left=100,toolbar=no,scrollbars=yes,resizable=yes');
        }

        function ajax(myUrl, myData) {
            $.ajax({
                type: "GET",
                url: myUrl,
                data: myData,
                success: function (content) {
                    return content;
                },
                error: function () {
                    alert('error');
                }
            });
        }

        function checkSelect() {
            var count = 0;
            if (chk_Array_IDs != null) {

                for (i = 0; i < chk_Array_IDs.length; i++) {
                    var ref_chk = document.getElementById(chk_Array_IDs[i]);
                    if (ref_chk != null && ref_chk.checked == true) {
                        count++;
                    }
                }
            }
            if (count == 0) {
                alert("هیچ رکوردی انتخاب نشده است");
                return false;
            }
            else {
                return true;
            }
        }

        function checkGroup() {
            if (Page_ClientValidate()) {
                var count = 0;
                var checked = 0;
                if (group_Array_IDs != null) {

                    for (i = 0; i < group_Array_IDs.length; i++) {
                        var ref_chk = document.getElementById(group_Array_IDs[i]);
                        if (ref_chk != null && ref_chk.checked == true) {
                            checked++;
                        }
                        count++;
                    }
                }
                if (count == 0) {
                    alert("هنوز هیچ گروهی تعریف نشده است\nاز طریق مدیریت گروه ها گروه ایجاد نمایید");
                    return false;
                }
                else {
                    if (checked == 0) {
                        alert("هیچ گروه مخاطبی  انتخاب نشده است");
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            }
        }



        function printMe(id) {

            $('#' + id).printElement();

        }

        function hideMe() {
            parent.$.facebox.close();

        }

        function clickButton(e, buttonid) {

            var evt = e ? e : window.event;

            var bt = document.getElementById(buttonid);

            if (bt) {

                if (evt.keyCode == 13) {

                    bt.click();

                    return false;

                }

            }

        }

        var $window = $(window);

        $.fn.vAlign = function () {
            return this.each(function (i) {
                var ah = $(this).height();
                var ph = $window.height();
                var mh = Math.ceil((ph - ah) / 2) - 20;
                $(this).css('top', mh);

                var aw = $(this).width();
                var pw = $window.width();
                var mw = Math.ceil((pw - aw) / 2);
                $(this).css('left', mw);
                $(this).css('position', "fixed");

            });
        };


        function Loading(Container, Size, display) {

            var classname = "LoadingSmall";

            switch (Size) {
                case "Large":
                    classname = "LoadingLarge";
                    break;
                case "Small":
                    classname = "LoadingSmall";
                    break;
                case "Medium":
                    classname = "LoadingMedium";
                    break;
                default:
                    classname = "LoadingMedium";
            }

            if (display != true)
                $(Container).removeClass(classname);
            else {
                $(Container).empty();
                $(Container).addClass(classname);

            }
        };

        function OpenPopUpPanel() {
            $('#Overlay').show();
            $('#PopUpOverlay').vAlign();

            $('#CloseOverlay').click(function () {
                $('#Overlay').hide();

            });

        }

        $(window).resize(function () {
            $('#PopUpOverlay').vAlign();
        });


        function checkMelliCode(varmellicode) {
            var meli_code;
            meli_code = $("#<%= tbxNationalCode.ClientID %>").val();
            if (meli_code.length == 10) {
                if (meli_code == '1111111111' || meli_code == '0000000000' || meli_code == '2222222222' || meli_code == '3333333333' || meli_code == '4444444444' || meli_code == '5555555555' || meli_code == '6666666666' || meli_code == '7777777777' || meli_code == '8888888888' || meli_code == '9999999999') {
                    $('#span_mess').html('<span>کد ملی وارد شده صحیح نمی باشد </span>');
                    $('#span_mess').css("display", "inline");
                    //alert("کد ملی صحیح نمی باشد");
                    objcode.focus();
                    return false;
                }
                c = parseInt(meli_code.charAt(9));
                n = parseInt(meli_code.charAt(0)) * 10 +
    parseInt(meli_code.charAt(1)) * 9 +
    parseInt(meli_code.charAt(2)) * 8 +
    parseInt(meli_code.charAt(3)) * 7 +
    parseInt(meli_code.charAt(4)) * 6 +
    parseInt(meli_code.charAt(5)) * 5 +
    parseInt(meli_code.charAt(6)) * 4 +
    parseInt(meli_code.charAt(7)) * 3 +
    parseInt(meli_code.charAt(8)) * 2;
                r = n - parseInt(n / 11) * 11;
                if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r)) {

                    $('#span_mess').css("display", "none");
                    return true;
                }
                else {
                    $('#span_mess').html('<span>کد ملی وارد شده صحیح نمی باشد </span>');
                    $('#span_mess').css("display", "inline");
                    //alert("کد ملی صحیح نمی باشد");
                    objcode.focus();
                    return true;
                }
            }
            else {
                $('#span_mess').html('<span>تعداد ارقام کد ملی 10 رقم می باشد</span>');
                $('#span_mess').css("display", "inline");
                // alert("تعداد ارقام صحیح نمی باشد");
                return true;
            }
        }



// ابزار کیبورد حروف فارسی

// نحوه بکار گیری:
        //<script type="text/javascript">
        //        $(function () {
        //            $("#text1, #text2").farsiInput();
        //        });
        //</script>

        (function ($) {
            $.fn.farsiInput = function (options) {
                var defaults = {
                    changeLanguageKey: 145 /* Scroll lock */
                };
                var options = $.extend(defaults, options);

                var lang = 'fa';

                var keys = new Array(1711, 0, 0, 0, 0, 1608, 0, 0, 0, 1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785, 0, 1705, 1572, 0, 1548,
                     1567, 0, 1616, 1571, 8250, 0, 1615, 0, 0, 1570, 1577, 0, 0, 0, 1569, 1573, 0, 0, 1614, 1612, 1613, 0, 0,
                     8249, 1611, 171, 0, 187, 1580, 1688, 1670, 0, 1600, 1662, 1588, 1584, 1586, 1740, 1579, 1576, 1604, 1575,
                     1607, 1578, 1606, 1605, 1574, 1583, 1582, 1581, 1590, 1602, 1587, 1601, 1593, 1585, 1589, 1591, 1594, 1592);

                var substituteChar = function (charCode, e) {
                    if (navigator.appName == "Microsoft Internet Explorer") {
                        window.event.keyCode = charCode;
                    }
                    else {
                        insertAtCaret(String.fromCharCode(charCode), e);
                    }
                };

                var insertAtCaret = function (str, e) {
                    var obj = e.target;
                    var startPos = obj.selectionStart;
                    var endPos = obj.selectionEnd;
                    var scrollTop = obj.scrollTop;
                    obj.value = obj.value.substring(0, startPos) + str + obj.value.substring(endPos, obj.value.length);
                    obj.focus();
                    obj.selectionStart = startPos + str.length;
                    obj.selectionEnd = startPos + str.length;
                    obj.scrollTop = scrollTop;
                    e.preventDefault();
                };

                var keyDown = function (e) {
                    var evt = e || window.event;
                    var key = evt.keyCode ? evt.keyCode : evt.which;
                    if (key == options.changeLanguageKey) {
                        lang = (lang == 'en') ? 'fa' : 'en';
                        return true;
                    }
                };

                var fixYeKeHalfSpace = function (key, evt) {
                    var originalKey = key;
                    var arabicYeCharCode = 1610;
                    var persianYeCharCode = 1740;
                    var arabicKeCharCode = 1603;
                    var persianKeCharCode = 1705;
                    var halfSpace = 8204;

                    switch (key) {
                        case arabicYeCharCode:
                            key = persianYeCharCode;
                            break;
                        case arabicKeCharCode:
                            key = persianKeCharCode;
                            break;
                    }

                    if (evt.shiftKey && key == 32) {
                        key = halfSpace;
                    }

                    if (originalKey != key) {
                        substituteChar(key, evt);
                    }
                };

                var keyPress = function (e) {
                    if (lang != 'fa')
                        return;

                    var evt = e || window.event;
                    var key = evt.keyCode ? evt.keyCode : evt.which;
                    fixYeKeHalfSpace(key, evt);
                    var isNotArrowKey = (evt.charCode != 0) && (evt.which != 0);
                    if (isNotArrowKey && (key > 38) && (key < 123)) {
                        var pCode = (keys[key - 39]) ? (keys[key - 39]) : key;
                        substituteChar(pCode, evt);
                    }
                }

                return this.each(function () {
                    var input = $(this);
                    input.keypress(function (e) {
                        keyPress(e);
                    });
                    input.keydown(function (e) {
                        keyDown(e);
                    });
                });
            };
        })(jQuery);

//--- ابزار کیبورد حروف فارسی



$.fn.Scroller = function (options) {
var opts = $.extend({}
, $.fn.Scroller.defaults, options
);
var container = this,
    wrapper = $(container),
    SW = $(wrapper).width(),
    TotalLoaded = 1,
    CurrentSlide = 1,
    Index_ItemID = opts.Index_ItemID;

var AppendItem = function (item, CurrentSlide) {
    //$("#Tmpl").tmpl(item).appendTo($(container).find('#Slide_' + CurrentSlide));
    var itemtag = $("#Tmpl").tmpl(item);
    $(container).find('#Slide_' + CurrentSlide).append(itemtag);
    if (options.completeAddItem != null)
        options.completeAddItem(itemtag);
}
var LoadItems = function (CurrentSlide) {

    $.ajax({
        url: "/AjaxLibrary/Ajax.aspx",
        type: "POST",
        data: { "act": opts.ActName, "Index_ItemID": Index_ItemID, "CatID": opts.CatID, "count": opts.count ,"sectionid":opts.SectionID,"mirrorkey":opts.mirrorkey},
        success: function (result) {
           // if (result == '0')
           //     window.location('/login/');
            try {
                var obj = JSON.parse(result);
                if (obj.length > 0) {
                    $(wrapper).append('<ul id="Slide_' + CurrentSlide + '" class="Slide" ></ul>');
                    $.each(obj, function (index, value) {
                        AppendItem(value, CurrentSlide);
                    });
                    //Call_tipsy();
                    Index_ItemID = obj[obj.length - 1].ItemID;
                    TotalLoaded++;
                    $(wrapper).animate({ right: -1 * SW * (CurrentSlide - 1) });
                }
            }
            catch (e) {
            }
        },
        beforeSend: function () { $(container).parent().parent().find('.Loading').show(); },
        error: function () { },
        complete: function () { $(container).parent().parent().find('.Loading').hide(); }
    });
}
var CheckBtnsVisibility = function () {
    if (CurrentSlide == 1)
        $(container).parent().parent().find('.Prev').hide();
    else {
        $(container).parent().parent().find('.Prev').show();
    }
    if (CurrentSlide == opts.SlideCount)
        $(container).parent().parent().find('.Next').hide();
    else
        $(container).parent().parent().find('.Next').show();
}
var NextSlide = function () {
    CurrentSlide = CurrentSlide + 1;
    if (CurrentSlide > TotalLoaded) {
        $(wrapper).css('width', SW * CurrentSlide + 'px');
        LoadItems(CurrentSlide);
    }
    else {
        $(wrapper).animate({ right: -1 * SW * (CurrentSlide - 1) });
    }
    CheckBtnsVisibility();
}

var PrevSlide = function () {
    CurrentSlide = CurrentSlide - 1;
    $(wrapper).animate({ right: SW - (SW * CurrentSlide) });
    CheckBtnsVisibility();
}
CheckBtnsVisibility();
$(container).parent().parent().find('.Prev').click(PrevSlide);
$(container).parent().parent().find('.Next').click(NextSlide);

};
$.fn.Scroller.defaults = {
SlideCount: '2',
CatID: undefined,
count: undefined,
Index_ItemID: '0',
ActName: undefined,
SectionID: undefined,
mirrorkey: undefined,
    completeAddItem : null
};