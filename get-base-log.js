function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}
noInline(getBaseLog);

for (let i = 1; i < 10000; i++) {
    getBaseLog(2, i);
}
