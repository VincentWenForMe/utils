/***
 *
 * Author: vincentWen
 * BuildTime: 2017-17-18
 * UpdateTime: 2017-xx-xx
 * Description: collect common solution in daily works.
 * Expectation: By collecting, building a good habit.
 *
 * */

const timeRelative = {
    timeStampToDate: timeStampToDate(), //时间戳转时间格式
    dateToTimeStamp: dateToTimeStamp(), //时间转时间戳格式
    dateCompared: dateCompared(),       //比较两个时间
};

function timeStampToDate() {
    let now = Date.now();
    let y = now.getFullYear();
    let m = now.getMonth() + 1;
    let d = now.getDay();

    if (m.length < 2) {
        return '0' + m;
    }

    return y + m + d;
}

function dateToTimeStamp() {

}

function dateCompared(d1, d2) {

}

const d = Date.now();

console.log(d);
