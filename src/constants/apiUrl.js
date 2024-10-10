export default Object.freeze({
    checkWallet: toUrl('api', 'wallet'),
    user: toUrl('api', 'user'),
})

function toUrl(...paths) {
    return paths.join('/');
}