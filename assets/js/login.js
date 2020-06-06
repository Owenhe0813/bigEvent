$(function() {
    // 1.切换
    // 1.1切换注册模块
    $('.toggleToReg').on('click', () => {
        console.log(1);
        $('.log').toggle();
        $('.reg').toggle();
    });
    // 2.切换登录模块模块
    $('.toggleToLogin').on('click', () => {
        $('.log').toggle();
        $('.reg').toggle();
    });
    //2.表单验证
    const form = layui.form;
    form.verify({
            // 2.1 密码长度
            len: [/^[\S]{6,12}$/, '输入密码不符合要求'],
            // 2.2 验证的注册页两个密码是否一致
            same: function(val) {
                if ($('.checkit').val().trim() !== val) {
                    return '密码不一致';
                }
            }
        })
        //3.注册
        // 3.1 表单验证： 1. 密码是否在6~12 位之间2.用户名是否为邮箱 -
    $('.reg').on('submit', function(e) { //必须监听表单提交事件
            //     3.1 提交数据 
            e.preventDefault();
            const data = $(this).serialize();
            $.ajax({
                type: 'POST',
                url: 'http://www.liulongbin.top:3007/api/reguser',
                data: data,
                success: function(res) {

                    // 3.2 弹出响应参数
                    layer.msg(res.message);
                    if (res.status === 0) {
                        // 3.3 回跳到登录界面
                        $('.toggleToLogin').trigger('click');
                    }
                }
            })

        })
        //4.登录
    $('.log').on('submit', function(e) {
        // 4.1 点击按钮登录，
        e.preventDefault();
        //     提交表单数据：
        const data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'http://www.liulongbin.top:3007/api/login',
            data: data,
            success: function(res) {
                // 4.2 1.弹出响应 -
                layer.msg(res.message);
                // 4.3 2.如果验证成功，储存token,转跳index
                if (res.status === 0) {
                    localStorage.setItem('token', res.token);
                    location.href = '/index.html';
                }
            }
        })
    })

});