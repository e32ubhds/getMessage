var r = http.get("http://hq.sinajs.cn/list=sh000001,sz399001,sz002594,sz300122,sz300750,sz300760,sz000858,sh603345,sz002027,sz002352,sh603288,sz300274", {
    headers: {
        'Accept-Language': 'zh-cn,zh;q=0.5',
        'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
    }
});

let content = r.body.string();
let action = 'autojs.intent.action.socksinfo';

app.sendBroadcast({
    action: action,
    extras: {
        info: content
    }
});

exit();
