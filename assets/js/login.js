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
        //4.登录
});