import printUserInfo, {UserInfo} from "./other";

const userInfo: UserInfo = {
    username: 'mzh',
    password: '123'
}

printUserInfo(userInfo)
console.log(process.env.NODE_ENV)

