console.log('查看登录之后的结果');
let val = prompt('请输入对应的用户名称');
console.log(val);

if (val === 'Admin') {
    let psd = prompt('请输入密码');

    if (!psd) {
        console.log('Cancel')

    } else {
        let val = psd === 'TheMaster' ? 'Welcome!' : 'Wrong password';
        console.log(val)

    }






} else if (val === '') {
    console.log('Canceled')

} else {
    console.log(`i don't you know`)
}