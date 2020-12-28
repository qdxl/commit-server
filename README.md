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
  2) 能够顺利进行commit-server提交的前提是当前项目已经有远程仓库即进行了git init和git push 等操作。其次需要启动项目，端口号是1202，如果启动了两个，则第二个不能使用。至于为什么使用1202，因为那是我女朋友的生日😂😂😂，至于为什么只能启动一个，因为女朋友只能有一个。😂

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


第一次做开源和写文档，不当之处还望各位大佬见谅和指正。

<section id="nice" data-tool="mdnice编辑器" data-website="https://www.mdnice.com" style="font-size: 16px; color: black; padding: 0 10px; line-height: 1.6; word-spacing: 0px; letter-spacing: 0px; word-break: break-word; word-wrap: break-word; text-align: left; font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;"><blockquote class="multiquote-1" data-tool="mdnice编辑器" style="border: none; display: block; font-size: 0.9em; overflow: auto; overflow-scrolling: touch; border-left: 3px solid rgba(0, 0, 0, 0.4); color: #6a737d; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 10px; margin-bottom: 20px; margin-top: 20px; border-left-color: rgb(239, 112, 96); background: #fff9f9;">
<p style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0px; color: black; line-height: 26px;">各位大佬好，小弟第一次写文章做开源，本想写技术文章，无奈技术太差只能写一些文档说明文了。开篇即求见谅。😂😂😂</p>
</blockquote>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">在平常的开发过程中，github混乱或空白的提交面板总是那么的不尽人意，机缘巧合下看到这个项目<a href="https://github.com/OBKoro1/autoCommit" style="text-decoration: none; word-wrap: break-word; font-weight: bold; color: rgb(239, 112, 96); border-bottom: 1px solid rgb(239, 112, 96);">autoCommit</a>，被作者大佬深深所折服。加之灵感迸发利用闲暇时间做了<a href="https://www.npmjs.com/package/commit-server" style="text-decoration: none; word-wrap: break-word; font-weight: bold; color: rgb(239, 112, 96); border-bottom: 1px solid rgb(239, 112, 96);">commit-server</a>项目，希望能得到各位大佬的垂爱。项目具体使用如下：</p>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;"><span class="prefix" style="display: none;"></span><span class="content" style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;">1. Install</span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; background: #1E1E1E; color: #DCDCDC; display: -webkit-box; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">npm&nbsp;install&nbsp;yarn&nbsp;-g<br>yarn&nbsp;add&nbsp;commit-server&nbsp;-D<br></code></pre>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;"><span class="prefix" style="display: none;"></span><span class="content" style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;">2. 添加命令</span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">增加以下命令到当前项目的 package.json 文件的 scripts 中</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; background: #1E1E1E; color: #DCDCDC; display: -webkit-box; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-string" style="color: #D69D85; line-height: 26px;">"funmit"</span>:&nbsp;<span class="hljs-string" style="color: #D69D85; line-height: 26px;">"commit-server"</span><br></code></pre>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;"><span class="prefix" style="display: none;"></span><span class="content" style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;">3. 执行命令</span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">执行以下命令开启服务器以及打开 commit-ui 本地 ui 界面或远程 <a href="http://qianduanxinlv.gitee.io/commit-ui/" style="text-decoration: none; word-wrap: break-word; font-weight: bold; color: rgb(239, 112, 96); border-bottom: 1px solid rgb(239, 112, 96);">gitee 站点</a></p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; background: #1E1E1E; color: #DCDCDC; display: -webkit-box; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">yarn&nbsp;funmit<br>or<br>yarn&nbsp;funmit&nbsp;gitee<br></code></pre>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;"><span class="prefix" style="display: none;"></span><span class="content" style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;">4. commit-ui 使用方法</span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">commit-ui是commit项目的前端操作界面，主要分为控制器、解释器以及显示器三个部分。
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/43aa0adfacde453f8d25bfbc79383fe4~tplv-k3u1fbpfcp-zoom-1.image" alt style="display: block; margin: 0 auto; max-width: 100%;"></p>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">界面各部分的操作及功能说明</p>
<section class="table-container" data-tool="mdnice编辑器" style="overflow-x: auto;"><table style="display: table; text-align: left;">
<thead>
<tr style="border: 0; border-top: 1px solid #ccc; background-color: white;">
<th style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; font-weight: bold; background-color: #f0f0f0; min-width: 85px; text-align: left;">模块</th>
<th style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; font-weight: bold; background-color: #f0f0f0; min-width: 85px; text-align: center;">功能或用法</th>
<th style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; font-weight: bold; background-color: #f0f0f0; min-width: 85px; text-align: left;">事例或说明</th>
</tr>
</thead>
<tbody style="border: 0;">
<tr style="border: 0; border-top: 1px solid #ccc; background-color: white;">
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">1</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: center;">设置提交目标</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">支持gitlab、github、gitee，选择不同的提交地址显示不同的颜色与样式</td>
</tr>
<tr style="border: 0; border-top: 1px solid #ccc; background-color: #F8F8F8;">
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">2</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: center;">设置显示年份</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">2009年至当前年份</td>
</tr>
<tr style="border: 0; border-top: 1px solid #ccc; background-color: white;">
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">3</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: center;">设置最后一次提交的时间日期</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">可选择的日期因目标不同而不同，只有提交日期选择正确，界面样式才会呈现出理想状态</td>
</tr>
<tr style="border: 0; border-top: 1px solid #ccc; background-color: #F8F8F8;">
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">4</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: center;">设置提交内容或样式</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">当前输入框可支持字符和日期范围输入。 <br>1) 输入字符，当前仅支持大小写英文与数字，其余符号会解释成空格。 <br>2) 输入日期范围，则会在相应的日期范围内显示提交信息。格式如下  [起始日期, 结束日期, 最低次数, 最高次数] ， 若没有次数默认为1次， 只输入一个次数则所有日期都会提交该次数，若两个都有，则在最低和最高之间随机取值。 例： [20200202, 20201212, 1, 20]。<br> 注意： 若是连续输入空格而无其他文字或字符，则是清空之前未提交但是已保存的信息。</td>
</tr>
<tr style="border: 0; border-top: 1px solid #ccc; background-color: white;">
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">5</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: center;">保存面板上的信息</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">保存信息后刷新页面不会丢失数据</td>
</tr>
<tr style="border: 0; border-top: 1px solid #ccc; background-color: #F8F8F8;">
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">6</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: center;">提交已保存的信息</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">功能同 git commit，可在服务器启动的控制台看到提交进程</td>
</tr>
<tr style="border: 0; border-top: 1px solid #ccc; background-color: white;">
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">7</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: center;">推送已提交的信息</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">功能同 git push，可在服务器启动的控制台看到推送结果</td>
</tr>
<tr style="border: 0; border-top: 1px solid #ccc; background-color: #F8F8F8;">
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">8</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: center;">提交数据类别管理</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">可方便控制查看面板显示的提交或保存的信息的状态</td>
</tr>
<tr style="border: 0; border-top: 1px solid #ccc; background-color: white;">
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">9</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: center;">当前提交日期信息</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">可以方便的查看当前各个状态的数据情况</td>
</tr>
<tr style="border: 0; border-top: 1px solid #ccc; background-color: #F8F8F8;">
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">10</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: center;">月份</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">对应提交的月份范围</td>
</tr>
<tr style="border: 0; border-top: 1px solid #ccc; background-color: white;">
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">11</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: center;">星期</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">对应提交的星期信息</td>
</tr>
<tr style="border: 0; border-top: 1px solid #ccc; background-color: #F8F8F8;">
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">12</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: center;">颜色</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">页面提交次数参考</td>
</tr>
<tr style="border: 0; border-top: 1px solid #ccc; background-color: white;">
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">13</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: center;">显示面板</td>
<td style="font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; min-width: 85px; text-align: left;">显示当前提交等信息的面板，可显示亦可操作.<br>当单击一次，则相应日期待（欲）保存信息增加一次，<br>双击一次，则减少一次。<br>可通过对不同日期的点击从而达到破除输入框只能输入数字和英文字母的限制，自定义各种图案。</td>
</tr>
</tbody>
</table>
</section><blockquote class="multiquote-2" data-tool="mdnice编辑器" style="border: none; box-shadow: 1px 1px 10px rgba(0,0,0,0.2); padding: 20px; margin-bottom: 20px; margin-top: 20px;">
<blockquote style="border: none;">
<p style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">特别说明：</p>
<ol style="margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: decimal;">
<li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">最后一次提交日期（控制器的3处）默认是当前日期，若发现输入后显示器面板数字或字母错乱，则需要重新选择最后一次提交日期。</section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">能够顺利进行commit-server提交的前提是当前项目已经有远程仓库即进行了git init和git push 等操作。其次需要启动项目，端口号是1202，如果启动了两个，则第二个不能使用。至于为什么使用1202，因为那是我女朋友的生日😂😂😂，至于为什么只能启动一个，因为女朋友只能有一个。😂</section></li></ol>
</blockquote>
</blockquote>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;"><span class="prefix" style="display: none;"></span><span class="content" style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;">5. 使用事例</span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;">使用commit-server 的 DEMO</p>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;"><a href="https://github.com/qdxl/commit-server_react_demo" style="text-decoration: none; word-wrap: break-word; font-weight: bold; color: rgb(239, 112, 96); border-bottom: 1px solid rgb(239, 112, 96);">commit-server_react_demo</a><br>
<a href="https://github.com/qdxl/commit-server_vue_demo" style="text-decoration: none; word-wrap: break-word; font-weight: bold; color: rgb(239, 112, 96); border-bottom: 1px solid rgb(239, 112, 96);">commit-server_vue_demo</a></p>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(239, 112, 96); font-size: 1.3em;"><span class="prefix" style="display: none;"></span><span class="content" style="display: inline-block; font-weight: bold; background: rgb(239, 112, 96); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;">6. 使用效果</span><span class="suffix"></span><span style="display: inline-block; vertical-align: bottom; border-bottom: 36px solid #efebe9; border-right: 20px solid transparent;"> </span></h2>
<p data-tool="mdnice编辑器" style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0; line-height: 26px; color: black;"><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a6f3d5116e1146ad84904799b2320578~tplv-k3u1fbpfcp-zoom-1.image" alt style="display: block; margin: 0 auto; max-width: 100%;">
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e517ca913c08489e82487eb51a394893~tplv-k3u1fbpfcp-zoom-1.image" alt style="display: block; margin: 0 auto; max-width: 100%;">
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc4a4db6609f4a0bac07c3df3a6f9a3a~tplv-k3u1fbpfcp-zoom-1.image" alt style="display: block; margin: 0 auto; max-width: 100%;">
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35482112de1c40ba9458311469087b5c~tplv-k3u1fbpfcp-zoom-1.image" alt style="display: block; margin: 0 auto; max-width: 100%;">
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d25c11df184140b7af3e7955a599f22f~tplv-k3u1fbpfcp-zoom-1.image" alt style="display: block; margin: 0 auto; max-width: 100%;">
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b43507acbcc4d9ba17bc5a8fb3f4eb4~tplv-k3u1fbpfcp-zoom-1.image" alt style="display: block; margin: 0 auto; max-width: 100%;"></p>
<blockquote class="multiquote-1" data-tool="mdnice编辑器" style="border: none; display: block; font-size: 0.9em; overflow: auto; overflow-scrolling: touch; border-left: 3px solid rgba(0, 0, 0, 0.4); color: #6a737d; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 10px; margin-bottom: 20px; margin-top: 20px; border-left-color: rgb(239, 112, 96); background: #fff9f9;">
<p style="font-size: 16px; padding-top: 8px; padding-bottom: 8px; margin: 0px; color: black; line-height: 26px;">第一次做开源和写文档，不当之处还望各位大佬见谅和指正。</p>
</blockquote>
</section>
