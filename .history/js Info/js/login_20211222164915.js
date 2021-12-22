console.log('查看登录之后的结果');
let val = prompt(`Who's there?`, '');
console.log(val);



if (!val) {
    console.log('Canceled')
} else if (val === 'Admin') {
    let psd = prompt('请输入密码');

    if (!psd) {
        console.log('Cancel')

    } else {
        let val = psd === 'TheMaster' ? 'Welcome!' : 'Wrong password';
        console.log(val)

    }

} else {
    console.log(`i don't you know`)
}