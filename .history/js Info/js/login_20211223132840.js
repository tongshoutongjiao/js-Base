let val = prompt(`Who's there?`, 'xxx');

if (val === '' || val = null) {
    console.log('Canceled')
} elseif (val === 'Admin') {
    let psd = prompt('Password?', '');

    if (psd === '' || psd === null) {
        console.log('Cancel')

    } else {
        let val = psd === 'TheMaster' ? 'Welcome!' : 'Wrong password';
        console.log(val)

    }

}else{
    console.log(`i don't you know`)
}