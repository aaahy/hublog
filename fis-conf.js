//把/Template/default下的.scss全部变为.css
//fis.match('/Template/default/**/*.scss', {
  // fis3-parser-scss 插件进行解析
  //parser: fis.plugin('scss'),
  // .scss 文件后缀构建后被改成 .css 文件
 // rExt: '.css'
//})

//部署到自己本地搭建的apache服务器上，而不是fis3内置的服务器
fis.match('*',{
    deploy:fis.plugin('local-deliver',{
        to:'../../wamp/www'
    })
})

//配置如何发布到远端的服务器qa
fis.media('qa').match('*', {
  deploy: fis.plugin('http-push', {
    receiver: 'http://47.94.172.49/fis/receiver.php',
    to: '/var/www/html/hyblog' // 注意这个是指的是测试机器的路径，而非本地机器
  })
});
fis.media('qa').match('*', {
    //访问url是/hyblog/xxx
    url : '/hylog$0'
});


//以debug发布时，排除一些设置
fis.media('debug').match('*.{js,css,png}', {
  useHash: false,
  useSprite: false,
  optimizer: null
})