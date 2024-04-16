### 部署网站

1.	提交到git上
2.	链接服务器

### ssh
ssh -X 账号@公网ip

###	Linux命令
查看目录	ls

切换目录	cd

创建目录	mkdir 目录名称

yum 跟nodejs 的npm 是一样的 yum Linux的包管理器

cat	查看文件

查看隐藏文件 ls -a

pwd 命令获取文件夹路径 /home/web/boke/.vitepress/dist

修改nginx配置 vim 文件 编辑：按i键，Esc :qw 退出并保存 :q! 退出不保存

nginx 安装完成后 默认放到etc

启动：nginx

刷新：nginx -s reload

```sh
yum install git
yum install nginx
yum install nodejs
yum install npm
```

```ng
location / {
	root /home/web/boke/.vitepress/dist;
	index index.html;
}
```



