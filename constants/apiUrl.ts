export default Object.freeze({
    checkWallet: toUrl('api', 'wallet'),
    updateProfile: toUrl('api', 'profile'),
})

function toUrl(...paths: any[]) {
    return paths.join('/');
}