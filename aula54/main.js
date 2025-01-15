function f1 (callback) {
    console.log('f1');
    if (callback) callback();
}
function f2 (callback) {
    console.log('f2');
    if (callback) callback();
}
function f3 (callback) {
    console.log('f3');
    if (callback) callback();
}

f1(() => {
    f2(() => {
        f3(()=> console.log('FINISH'))
    })
});