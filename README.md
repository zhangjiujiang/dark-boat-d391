# dark-boat-d391
cloudflare workers

# 步骤
1.登陆cloudflare:https://dash.cloudflare.com

2.选择Account
<img width="1046" alt="image" src="https://github.com/zhangjiujiang/dark-boat-d391/assets/15085521/a74af421-e5d9-466c-883e-c892a3ef7620">

3选择域名
<img width="860" alt="image" src="https://github.com/zhangjiujiang/dark-boat-d391/assets/15085521/cdb800c2-a487-4719-8f95-932eb768704b">

3.1没有域名需要添加域名
	
  3.1.1选择添加站点	
<img width="1291" alt="image" src="https://github.com/zhangjiujiang/dark-boat-d391/assets/15085521/0b2d3053-517d-464b-80a3-f640a443324a">
		
  3.1.2 添加后需要更改为cloudflare的名称服务器		
<img width="1238" alt="image" src="https://github.com/zhangjiujiang/dark-boat-d391/assets/15085521/83f8edaf-f67e-4deb-a9b3-ae2ba064627e">
		
  3.1.3 以GoDaddy为例进行更改名称服务器
<img width="1650" alt="image" src="https://github.com/zhangjiujiang/dark-boat-d391/assets/15085521/2fc603bd-bbd9-49c4-91d1-c3c291ec189f">
	
<img width="1347" alt="image" src="https://github.com/zhangjiujiang/dark-boat-d391/assets/15085521/4f523b49-ab08-4ebc-88db-2dca7d912bc1">

<img width="679" alt="image" src="https://github.com/zhangjiujiang/dark-boat-d391/assets/15085521/5547cac9-9a07-4bca-ae54-a891642770ac">
 
 	3.1.4 修改后等待cdn生效，cloudflare的域名就生效了

 4.在域名页面点击侧边栏：Worker Routes（Worker路由）
 <img width="1267" alt="image" src="https://github.com/zhangjiujiang/dark-boat-d391/assets/15085521/ee576313-7f3d-4d54-bda5-997b80f9b649">

 5.点击管理路由，该woker（dark-boat-d391）已经部署成功
 <img width="688" alt="image" src="https://github.com/zhangjiujiang/dark-boat-d391/assets/15085521/91bfe7bc-5e47-493d-88fc-b78593e2bb3a">

6.点击dark-boat-d391，（点击快速编辑转到网页编辑器）
到触发器tab下，点击添加自定义域，可以自定义一个域名给当前的worker，这个域名必须是已经添加到当前账户的域名或子域名，例如我添加了nft.yuminft.xyz
<img width="998" alt="image" src="https://github.com/zhangjiujiang/dark-boat-d391/assets/15085521/a30a99ac-1df7-4440-bc92-5c0086b2d640">

7.访问https://nft.yuminft.xyz/?image=https://3a3os-iyaaa-aaaam-aa72a-cai.raw.ic0.app/file/RPO75hlt3tDboEPoDmEwP就会触发cloudflare的worker程序


 






    

