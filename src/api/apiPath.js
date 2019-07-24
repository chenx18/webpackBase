/**
 * Created by Administrator on 2019/6/12.
 */

let host;

if (IS_PRODUCTION) {
  host = 'http://www.baidu.com';
} else {
  host = 'http://www.walibo.com';
}

export const url = {
  login: `${host}/login`, // 登录
  signout: `${host}/signout`, // 退出登录
};
