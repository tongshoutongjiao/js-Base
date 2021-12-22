let val = prompt(`Who's there?`, 'xxx');

if (!val) {
    console.log('Canceled')
} else if (val === 'Admin') {
    let psd = prompt('Password?', '');

    if (!psd) {
        console.log('Cancel')

    } else {
        let val = psd === 'TheMaster' ? 'Welcome!' : 'Wrong password';
        console.log(val)

    }

} else {
    console.log(`i don't you know`)
}