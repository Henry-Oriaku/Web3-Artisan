export default Object.freeze({
    checkAddress: toUrl('address')
})

export function toUrl(...paths: any[]) {
    return paths.join('/');
}