---
title: 简介和成果
sidebar_position: 1

---

## 校园电动车ID设计

⾯对校园电动⻋较多的现象，通过设计“校园电动⻋ID” 的HCI界⾯对电动⻋进⾏管理。 我们使⽤低保真度的 sketch⽅法和中保真度的WireFraming⽅法，进⾏两类⼈机交互界⾯的设计。

## 设计结果

### ID卡设计

[点击下载设计原图](.\files\ID卡正面.JPG)

![ID卡正面](.\img\ID卡正面.png)

正中偏上要求是⻋主与爱⻋共同拍摄的照⽚ ，作为⾝份认证的证据，避免出现⼀牌多⻋使⽤、⼀牌多 ⼈使⽤的情况出现。同时为了保护⻋主的个⼈隐私，ID卡上不过多展⽰个⼈信息，只有姓名、联系⽅式，在遇到如下情况时可以⽤于联系⻋主，如：⻋辆的摆放影响正常交通、⻋钥匙忘记拔掉等。

[点击下载设计原图](.\files\ID卡反面.JPG)

![ID卡反面](.\img\ID卡反面.png)

居中的⼆维码是APP的跳转⼊⼝，扫码后展⽰3.2中APP⾸⻚界⾯。 ⻋辆ID是每⼀辆电动⻋唯⼀的编号，编码⽅式如下：

- 前两位：学院编号，如：计算机科学与技术学院-13； 
- 第3~4位：⼊学年份； 
- 第5位：代表学⽣⾝份是本科⽣（0）、研究⽣（1）或者教师（2）； 
- 第6~8位：电动⻋编号，从001开始。

### APP界面设计

[点击下载设计原图](.\files\APP首页.JPG)

![APP界面1](.\img\APP首页.png)

APP⾸⻚：选择⾝份 ，输⼊账号密码 ，确认后分别根据选择的⾝份跳转⻋主⻚⾯或访客⻚⾯ 。这⾥访客也要登录的原因是APP设置有留⾔功能 ，为了保证⽂明上⽹，防⽌出现匿名谩骂攻 击等情况的发⽣，访客或⻋主访问APP时都需要先登录。

[点击下载设计原图](.\files\APP车主页面.JPG)

![APP界面1](.\img\APP车主页面.png)

APP车主页面：上部分是留言板，访客给车主的留言会从留言板以飘过的方式展现。在这个页面，车主可以编辑自己的个人信息，但是车辆信息不能编辑，车辆信息是在车辆登记注册的时候已经确定的。车辆的登记注册应该由相关部门进行，这样学校才可以有序管理校内车辆。APP还设置了我要找车的功能，点击后跳转找车页面。但是需要注意的是，找车时不是通过扫描自己车辆的二维码的方式进入APP，而是通过直接点击手机中的APP或者扫描别人的车辆的二维码进入APP，只要选择身份是车主，并且输入自己的账号密码，那么APP就会跳转到自己的车主页面。

[点击下载设计原图](.\files\APP访客页面.JPG)

![APP界面1](.\img\APP访客页面.png)

APP访客⻚⾯：可以查看⻋主信息 ，也可以看到⻋主的留⾔ 。如果只是单纯的想要联系⻋主挪⻋，可以不扫码使⽤APP，避免繁琐。如遇⽆法通过⼿机号联系⻋主、拔充电器乱象、看中⻋主爱⻋或者爱⻋的挂件想要咨询购买渠道等情况，可以在这个界⾯给⻋主留⾔。

[点击下载设计原图](.\files\APP找车页面.JPG)

![APP界面1](.\img\APP找车页面.png)

APP找车页面：由于校内车辆过多，还经常出现骑错车的问题，所以设计这个功能可以帮助车主寻找车辆，但这需要在车辆ID卡中加入定位芯片。点击打开报警语言，车辆会发出警报声；点击找不到，我要报警，会跳转手机拨打电话的界面，呼叫110。