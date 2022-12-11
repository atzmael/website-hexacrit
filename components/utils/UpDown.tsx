export function on(obj:any, ...args:any[]) {
    obj.addEventListener(...args)
}

export function off(obj:any, ...args:any[]) {
    obj.removeEventListener(...args)
}