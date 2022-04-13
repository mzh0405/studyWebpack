interface UserInfo {
    username: string,
    password: string,
    hobby?: string[]
}

const printUserInfo = (userInfo: UserInfo): void => {
    console.log(userInfo)
}
console.log(process.env.NODE_ENV)

export default printUserInfo
export {
    UserInfo
}