<h1 align="center">Welcome to commit-server 👋</h1>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![npm version](https://img.shields.io/npm/v/commit-server.svg)](https://www.npmjs.com/package/commit-server)
[![Downloads/month](https://img.shields.io/npm/dm/commit-server.svg)](http://www.npmtrends.com/commit-server)

#### 1. Install

```sh
npm install yarn -g
yarn add commit-server -D
```

#### 2. 增加以下命令到当前项目的 package.json 文件的 scripts 中

```sh
"funmit": "commit-server"
```

#### 3. 执行以下命令开启服务器以及打开 commit-ui 本地 ui 界面或远程 [gitee 站点](http://qianduanxinlv.gitee.io/commit-ui/)

```sh
yarn funmit
or
yarn funmit gitee
```

#### 4. commit-ui 使用方法
commit-ui是commit项目的前端操作界面，主要分为控制器、解释器以及显示器三个部分。
![](https://gitee.com/qianduanxinlv/commit-server/raw/main/image/ui.jpg)

各部分的操作及功能说明

| 模块 | 功能或用法 | 事例或说明 |
| :--- | :----: | :--- |
| 1 | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 设置提交目标  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; | 支持gitlab、github、gitee，选择不同的提交地址显示不同的颜色与样式 |
| 2 | 设置显示年份 | 2009年至当前年份 |
| 3 | 设置最后一次提交的时间日期 | 可选择的日期因目标不同而不同，只有提交日期选择正确，界面样式才会呈现出理想状态 |
| 4 | 设置提交内容或样式 | 当前输入框可支持字符和日期范围输入。 <br>1) 输入字符，当前仅支持大小写英文与数字，其余符号会解释成空格。 <br>2) 输入日期范围，则会在相应的日期范围内显示提交信息。格式如下  [起始日期, 结束日期, 最低次数, 最高次数] ， 若没有次数默认为1次， 只输入一个次数则所有日期都会提交该次数，若两个都有，则在最低和最高之间随机取值。 例： [20200202, 20201212, 1, 20]。<br> 注意： 若是连续输入空格而无其他文字或字符，则是清空之前未提交但是已保存的信息。 |
| 5 | 保存面板上的信息 | 保存信息后刷新页面不会丢失数据 |
| 6 | 提交已保存的信息 | 功能同 git commit，可在服务器启动的控制台看到提交进程 |
| 7 | 推送已提交的信息 | 功能同 git push，可在服务器启动的控制台看到推送结果 |
| 8 | 提交数据类别管理 | 可方便控制查看面板显示的提交或保存的信息的状态 |
| 9 | 当前提交日期信息 | 可以方便的查看当前各个状态的数据情况 |
| 10 | 月份 | 对应提交的月份范围 |
| 11 | 星期 | 对应提交的星期信息 |
| 12 | 颜色 | 页面提交次数参考器 |
| 13 | 显示面板 | 显示当前提交等信息的面板，可显示亦可操作.<br>当单击一次，则相应日期待（欲）保存信息增加一次，<br>双击一次，则减少一次。<br>可通过对不同日期的点击从而达到超越输入框字符的限制，自定义各种图案。 |

* 特别说明： 
  1) 最后一次提交日期（控制器的3处）默认是当前日期，若发现输入后显示器面板数字或字母错乱，则需要重新选择最后一次提交日期。
  2) 能够顺利进行commit-server提交的前提是当前项目已经有远程仓库即进行了git init和git push 等操作。其次需要启动项目，端口号是1202，如果启动了两个，则第二个不能使用。

#### 5. 使用 commit-server 的 DEMO

[commit-server_react_demo](https://github.com/qdxl/commit-server_react_demo)  
[commit-server_vue_demo](https://github.com/qdxl/commit-server_vue_demo)

#### 6. 使用效果

![](https://gitee.com/qianduanxinlv/commit-server/raw/main/image/2019funmit.png)
![](https://gitee.com/qianduanxinlv/commit-server/raw/main/image/2019.png)
![](https://gitee.com/qianduanxinlv/commit-server/raw/main/image/5201314.png)
![](https://gitee.com/qianduanxinlv/commit-server/raw/main/image/ABCDEFG.png)
![](https://gitee.com/qianduanxinlv/commit-server/raw/main/image/HIJKLMN.png)
![](https://gitee.com/qianduanxinlv/commit-server/raw/main/image/OPQRST.png)
