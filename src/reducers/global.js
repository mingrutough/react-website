
const initialState = {
  isFetching: true,
  msg: {
      type: 1,//0失败 1成功
      content: ''
  },
  userInfo: {},
  mainColor: '#ea6f5a', // 网站主题色
};

export const actionsTypes = {
    FETCH_START: "FETCH_START", // 异步请求开始
    FETCH_END: "FETCH_END", // 异步请求结束
    USER_LOGIN: "USER_LOGIN", // 登陆
    USER_REGISTER: "USER_REGISTER", //注册
    RESPONSE_USER_INFO: "RESPONSE_USER_INFO", // 收到登陆信息
    SET_MESSAGE: "SET_MESSAGE", // 设置全局提醒
    USER_AUTH: "USER_AUTH",
    SET_MAIN_COLOR: 'SET_MAIN_COLOR', // 设置网站主体颜色
};

export const actions = {
    get_login: function (username, password) {
        return {
            type: actionsTypes.USER_LOGIN,
            username,
            password
        }
    },
    get_register: function (data) {
        return {
            type: actionsTypes.USER_REGISTER,
            data
        }
    },
    clear_msg: function () {
        return {
            type: actionsTypes.SET_MESSAGE,
            msgType: 1,
            msgContent: ''
        }
    },
    user_auth:function () {
        return{
            type:actionsTypes.USER_AUTH
        }
    },
    set_main_color: function (color) {
        return {
            type: actionsTypes.SET_MAIN_COLOR,
            color
        }
    }
};

const reducer = (state = initialState, action) => { 
    switch (action.type) {
        case actionsTypes.FETCH_START:
            return {
                ...state, isFetching: true
            };
        case actionsTypes.FETCH_END:
            return {
                ...state, isFetching: false
            };
        case actionsTypes.SET_MESSAGE:
            return {
                ...state,
                isFetching: false,
                msg: {
                    type: action.msgType,
                    content: action.msgContent
                }
            };
        case actionsTypes.RESPONSE_USER_INFO:
            return {
                ...state,
                userInfo: action.data
            };
        case actionsTypes.SET_MAIN_COLOR:
            return {
                ...state,
                mainColor: action.color
            };
        default:
            return state
    }
};

export default reducer;