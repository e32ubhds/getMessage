/*
1.换手率计算（交易量，流动股本）
2.Beta计算（现价，昨日收盘价）
3.GDP估值法
4.股价波动
*/
//换手率计算（交易量，流动股本）
function turnoverRate(trade, fStock) {
  let TOR = (trade / fStock * 100).toFixed(2);
  switch (true) {
  case TOR > 0 && TOR <= 0.3 : return "换手0.1~0.3%";
    break;
  case TOR > 0.3 && TOR <= 0.6 : return "换手0.3~0.6%";
    break;
  case TOR > 0.6 && TOR <= 1 : return "换手0.6~1%";
    break;
  case TOR > 1 && TOR <= 2.5 : return "换手1~2.5%";
    break;
  case TOR > 2.5 && TOR <= 5 : return "换手2.5~5%";
    break;
  case TOR > 5 && TOR <= 10 : return "换手5~10%";
    break;
  case TOR > 10 && TOR <= 30 : return "换手10~30%";
    break;
  case TOR > 30 && TOR <= 60 : return "换手30~60%";
    break;
  case TOR > 60 && TOR <= 100 : return "换手60~100%";
    break;
  case TOR > 100 : return "换手>100%";
    break;
  default:
    return "Null";
  };
};

//Beta计算（现价，昨日收盘价）
function beta(now, past) {
  return now / past
};

//GDP估值法（总市值，GDP）
function GDPValue(Market, GDP) {
  return (Market / GDP * 100).toFixed(2)
};


//股价波动比
function priceWaveRank(now, yesterday) {
    if (now > yesterday) {
        let price = now / yesterday - 1
        return '+'+(price * 100).toFixed(2);
    } else {
        let price = 1 - now / yesterday
        return '-'+(price * 100).toFixed(2);
    }
};

//股价波动
function priceWave(now, yesterday) {
    let price = now - yesterday
    if (now > yesterday) {
        return '+' + price.toFixed(2);
    } else {
        return price.toFixed(2).toString();
    }
};

//想买
function wBuy(name, now, obj) {
    if (obj * 1.05 > now) {
        say(name + "可以关注啦", "com.google.android.tts", "zho-chn", "alarm", 5, 5)
        return "👀" + name
    } else if (now > obj) {
        return " "
    } else {
        say(name + "可以买入啦", "com.google.android.tts", "zho-chn", "alarm", 5, 5)
        return "💎" + name
    }
}

//想卖
function wSell(name, now, obj) {
    if (obj * 0.95 < now) {
        say(name + "可以关注啦", "com.google.android.tts", "zho-chn", "alarm", 5, 5)
        return "👀" + name
    } else if (now < obj) {
        return " "
    } else {
        say(name + "可以卖出啦", "com.google.android.tts", "zho-chn", "alarm", 5, 5)
        return "💰" + name
    }
}
