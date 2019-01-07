﻿# 中山大学数据科学与计算机学院本科生实验报告
## （2018年秋季学期）

| 课程名称 | 区块链原理与技术 |    |    |
| :------------: | :-------------: | :------------: | :-------------: |
| 年级 | 2016 | 专业（方向） | 软件工程 |
| 学号 | 16341016 | 姓名 | 屠划 |
| 电话 | 15906773232 | Email | 372739504@qq.com

---

## 一、选题背景、依据

#### 选题背景

在各路中国队冲击总决赛七年未果后，IG这一只由王思聪一手建立的战队经过一轮轮的晋级，最终以3:0的战绩，在11月3号的总决赛中夺得了冠军。一时间，朋友圈、微博、QQ空间都被IG牛逼、IG夺冠所刷屏，这个时候就算你不知道IG是什么，你会知道IG得了冠军。这个冠军属于IG，但这份夺得冠军的荣耀却是我们都能感受到的。

作为骨灰级LOL玩家，相信大家都想选出自己最喜爱的英雄，本项目即是为选出最受欢迎的英雄而设计。

---

#### 依据

S8的全明星投票时，官方对于投票做出了种种限制，同时我们无法得知投票的公平性，也无法得知我们的信息是否被泄露，从而对我们个人财产造成危害。

区块链技术很好地解决了以上几个难点，实现了透明化、安全化。

---

## 二、使用说明 

#### 实验环境

Ubuntu  

---

#### 运行方式

* 进入`Vote_Of_LOL`
```
$ cd lol-kda-vote
```

* 编译合约
```
$ truffle compile
```

* 开启Ganache私有链

私有链配置：

  - `Gas Limit` : 200000000
  - `ACCOUNT DEFAULT BALANCE` : 100
  - `TOTAL ACCOUNTS TO GENERATE` : 30
  - `HOSTNAME` : 127.0.0.1 -lo
  - `PORT NUMBER` : 8545
  - `NETWORK ID` : 5777

![](https://github.com/16341016/Final-Item-Of-Block-Chain/blob/master/report/assets/show_1.png)

* 部署合约到Ganache私有链上
```
$ truffle migrate
```

![](https://github.com/16341016/Final-Item-Of-Block-Chain/blob/master/report/assets/show_2.png)

* npm 运行
```
$ npm run dev
```

* 打开 MetaMask ，通过 Private Key 登陆


![](https://github.com/16341016/Final-Item-Of-Block-Chain/blob/master/report/assets/show_3.png)

---

## 三、测试

用账户1给 疾风剑豪 投票：

![](https://github.com/16341016/Final-Item-Of-Block-Chain/blob/master/report/assets/pic_1.png)

弹出区块链交易申请：

![](https://github.com/16341016/Final-Item-Of-Block-Chain/blob/master/report/assets/pic_2.png)

点击 `CONFIRM` 确认交易：

![](https://github.com/16341016/Final-Item-Of-Block-Chain/blob/master/report/assets/pic_3.png)

页面刷新，疾风剑豪 排名升到第一(按钮显示已投票)：

![](https://github.com/16341016/Final-Item-Of-Block-Chain/blob/master/report/assets/pic_4.png)



切换到账户1给 德玛西亚之力 投票：

切换账号看到，另一个账号未投过票，因此按钮显示可投票，而且能看到 疾风剑豪 第一的排名：

![](https://github.com/16341016/Final-Item-Of-Block-Chain/blob/master/report/assets/pic_5.png)

给 德玛西亚之力 投票：

![](https://github.com/16341016/Final-Item-Of-Block-Chain/blob/master/report/assets/pic_6.png)

![](https://github.com/16341016/Final-Item-Of-Block-Chain/blob/master/report/assets/pic_7.png)

![](https://github.com/16341016/Final-Item-Of-Block-Chain/blob/master/report/assets/pic_8.png)

***

## 4.测试

接着我们将进行测试：

- 用账号1, 3, 4, 5给亚索投票

- 用账号2, 6, 7给盖仑投票

- 用账号8, 9给伊泽瑞尔投票

- 用账号10, 11给德玛西亚皇子投票

- 用账号12给德莱文投票

![](https://github.com/16341016/Final-Item-Of-Block-Chain/blob/master/report/assets/pic_9.png)

投票结果如上图。

当前区块信息：

![](https://github.com/16341016/Final-Item-Of-Block-Chain/blob/master/report/assets/pic_10.png)

合约部署总共4个区块，投票12次，共16个区块。
