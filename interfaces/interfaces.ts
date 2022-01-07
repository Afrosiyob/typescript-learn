export interface MyFuncPropInterface {
    name:string,
    age:number
}

export interface MyFuncTwoPropInterface extends MyFuncPropInterface {
    job?:string
}