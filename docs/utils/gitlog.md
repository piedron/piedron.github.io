---
title: git学习日志
tags: 
	- git
created: 2019/11/26
---

Git作为当前流行的项目管理中的分布式版本管理系统，得到了广泛的应用，当然日常使用也就成为了必要，这里是通过[廖雪峰的Git教程](https://www.liaoxuefeng.com/wiki/896043488029600) 学习的git，并对学习过程以及应用方面做了一些记录，同时还记录了一些Git日常错误的较为合理的个人的解决方法。  <!-- more -->

## git (1) git本地仓库创建以及初始化，仓库文件的更该以及提交

 1. git init – 将一个普通的文件目录初始化一个git可管理的仓库（repository)即文件目录。
 2. git add<file> – 添加已有文件到git目录，可反复多次使用，添加多个文件。
 3. git commit -m<message> – 把添加的文件提交到仓库，message为要为此次添加的文件的有意义的说明
举例如下：
```
git add file1.txt
git add file2.txt file3.txt  #add时若未出错则不会有信息返回
git commit -m "add three txt files"  #返回成功添加以及改变的日志
```
## git (2) 仓库更改状态以及版本不同

1. git status – 告诉我们仓库当前的状态，如改变的文件却未提交更改时会提示我们，其后一般不用跟参数来说明命令使用
2. git diff – 查看与上一版本的差异，显示格式为unix通用的diff格式，后需跟要查看版本差异的文件名称。

```
gedit readme.txt  
git status
git diff readme.txt
git add readme.txt   #没改一次就得git add 一次，然后才能git commit 成功
#修改文件与添加文件相同，先add后commit，在commit之前可查看一下commit要修改的文件状况
git status
git commit -m "an added change from readme.txt"
git status
```
## git (3) 版本回退以及回退后在返回新版本
1. git log – 显示从最近到最远的提交日志以便我们选择回退到那个版本，可加上–pretty=oneline的参数来让日志输出简单到一行，其中日志中的一大串数字为十六进制的commit ID，每提交一个版本Git 都会把各版本串成一个时间线。
2. git的版本表示方法：使用HEAD来表示当前及最新发布的版本，用HEAD^来表示上一个版本，以此类推，使用HEAD~100来表示较大数的之前的版本
3. commit：每个版本的快照以便以后能回退到之前的版本
4. git reset – 版本更改命令，使用–head 参数后跟commit ID或以HEAD来表示的版本来选择更换为不同的版本，当回退到某版本后，原新版本会消失在git log日志输出中，因此若想回到原来的新版本需要查看以前为回退前的git log 的原新版本的commit ID（一般只需前几位但一定要保证能查找到）来实现撤销操作，若未能在以前命令中找到，则可以使用git reflog来查看命令历史来查看commit ID，这就意味着在回退到之前版本前一定要现git log一下以便以后查找commit ID

```
git log
git reset --hard HEAD^
git log  #此时已无最新版本的日志输出
git reflog
git reset --hard commit ID #回退到删除之前的最新版本
```
## git (4) 部分概念说明
1. 工作区：一个工作目录，存放文件的文件目录
2. 版本库：工作区里有一个隐藏目录：.git ，这是git的版本库
3. 暂存区：命名为stage或index，当我们提交文件更改时分了两步，第一步git add实际上就是把该文件放在了暂存区内，git commit就是把暂存区的所有内容提交到当前分支，git commit就是把所有修改提交到当前的master分支
4. 分支：git会为我们自动创建的第一个分支master
5. HEAD：指向master的一个指针，可用于版本回退
## git (5) github网站的ssh协议下的ssh key的添加
由于本地仓库与github仓库之间的传输是通过ssh加密的，因此要在github账户上添加ssh密钥:

1. 在用户目录下查看是否有.ssh目录存在，若存在的话则该目录下会有id_rsa以及id_rsa.pub这两个文件，若没有则需要打开命令行(windows下打开git bash)，创建ssh key:ssh-keygen -t rsa -C “后跟自己git绑定的邮箱地址”,人然后会让你选择生成文件的目录，新建一个ssh文件夹，然后选择该文件夹，然后会生成上述两个文件，前者为私钥，后者为公钥，私钥不要随便泄露，公钥要添加到github账户下。
2. 打开github的个人账户设置，然后选择ssh key，选择添加ssh key，然后打开id_rsa.pub文件并复制所有内容粘贴到文本输入框中，然后添加成功，便可通过该协议正常push以及clone
## git(6) github网站上远程仓库添加并与本地仓库同步以及git clone远程仓库的克隆
1. 先在github网站上点击创建一个repository即一个仓库，然后会看到创建仓库后仓库的https链接，然后通过一个命令来完成本地仓库与远程仓库的连接与同步
2. git remote add origin 该命令可连接远程仓库与本地仓库后跟https或ssh协议下的链接
3. git push origin master 该命令可将本地仓库的内容推送到远程仓库，由于第一次推送前远程仓库为空，可通过-u参数来同时完成远程和本地仓库的master分支连接以及内容推送，之后每次推送内容都不用加-u参数
4. 只有本地仓库提交完成后推送到远程仓库才会起作用，也就是本地文件改了以后，要git add和git commit 之后才能git push 起作用
5. git clone – 克隆远程仓库的内容，使用ssh或https协议下的链接来完成对该链接内容的一个本地克隆，可在自己的github仓库下看到git clone的ssh以及https协议下的相关链接并可直接复制

```
git remote add origin https://github.com/gitrepo.git
#git remote add origin git@github.com:XIRZC/gitrepo.git
git push -u origin master 
git clone https://github.com/gitrepo.git
#git clone  origin git@github.com:XIRZC/gitrepo.git
```
注意事项：

 - git clone 时clone下来的是一整个git 的工作空间，不用git remote add以及git push -u ，因此git clone下来的文件夹可直接使用，可直接改动并git push，但当你clone 下来的是别人的网站文件时，因为该工作空间连接的是别人的网站，因此你不能直接git push，因为别人的github网站上并没有添加你这个电脑本操作系统的ssh key，因此不能git push，因此通常使用别人的代码时，通常这样做：先在别人的github网站上fork一下，然后git clone到自己的电脑上，然后git push的时候是连接的你自己的github远程仓库，然后如果你想把自己的改动告诉原账户，可以选择pull request，等待原github账户同意。
 - 添加ssh协议时，如果你使用的是双系统，你需要在两个系统上分别为github账户添加ssh key以来使用ssh协议git clone以及git push。
 - git remote add origin时使用的远程仓库的名字为origin，这个名字可自定义，也可定义为其他名称，origin是git命名远程仓库默认的名称，如git clone下来的文件时自定义的远程仓库就是origin；一个本地仓库是可以同时连接两个或多个远程仓库的，就是你可以选择把本地仓库上传到远程仓库的其中一个，但是git remote add 时选择的远程仓库名称要不同，否则会添加出错，会报错已有一个origin。
 - 
举例如下：先在github账户上创建两个仓库，一个为temp，一个为test,再在本地某一路径创建一个tempst文件夹

```
cd ~/tempst
git init
git remote add temp git@github.com:XIRZC/temp.git
git remote add test git@github.com:XIRZC/test.git
git push -u temp master
git push -u test master
```
常见问题：

 - error: src refspec master does not match any.
error: 无法推送一些引用到 ‘git@github.com:XIRZC/test.git’

原因及解决方案：当本地仓库内有内容时是不能上传到远程仓库的，因此只需在本地仓库上添加一些内容即可，记得要git add 以及git commit后才把本地添加的内容让git知道了，才能上传，否则git 仍认为工作空间里没有内容。






- ! [rejected] master -> master (fetch first)
error: 无法推送一些引用到 ‘git@github.com:XIRZC/test.git’
提示：更新被拒绝，因为远程仓库包含您本地尚不存在的提交。这通常是因为另外
提示：一个仓库已向该引用进行了推送。再次推送前，您可能需要先整合远程变更
提示：（如 ‘git pull …’）。
提示：详见 ‘git push –help’ 中的 ‘Note about fast-forwards’ 小节

原因及解决方案：因为有多个本地仓库连接了一个远程仓库，导致在用git的过程中，第一次几个本地仓库状态相同push还行得通，但当各个本地仓库都改了改了好多次后并提交版本了好多次后，当一个本地成功push了之后，其他本地push时现在远程版本已与本地版本不想关导致版本冲突，因此要先解决冲突再git push

1. 解决方案1：个人感觉最好的办法，就是git pull一下就行了，这一步直接将本地版本拉到与远程版本同步，你可以试一下：创建两个本地仓库，都连接上一个远程仓库temp，然后你在本地仓库test上改一下内容，git add .和git commit -m “”之后，git push一下，这一次肯定会成功因为版本一致，这次会将本地新版本推送到远程仓库，你再切换到temp本地仓库的目录，然后先git push会出错，此时版本冲突，因为test提交的版本已经改变了temp添加远程仓库时的版本，远程仓库版本现在高本地temp一级，因此冲突，所以只需git pull一下拉到test所提交的版本，在此基础上进行改动，然后git push也可成功，你也会发现所有的commit包括本地temp和test的都会显示在github网站上的commit里面。这也正是分布式的特点，多人合作，共同修改同一版本，因此在一个人改了原版本之后，另一个人需先git pull一下，然后再改动提交推动。总的来说，一个本地仓库对多个远程仓库没有太多问题出现，但当多个本地仓库对应一个远程仓库时往往会出现版本冲突的问题。
2. 解决方案2：无论远程与本地版本是否存在冲突，都强制把现在要上传的本地所有内容上传到远程仓库上：git push -u origin +master，可用于当原来github网站上的这个远程仓库也被其他当地库使用过后但却现在没用时也就是现在显示已经有好几个commit时，若想使用这个远程仓库，可直接使用这一步来直接让远程仓库内容与本地相同，否则在git push时会出现错误。
3. 解决方案３：使远程库内容强制覆盖本地内容来解决版本冲突：git fetch –all,这一步将远程仓库的版本下载到本地仓库下，然后：git reset –hard origin/master，这一步将HEAD指向最新下载的版本。可用于未直接使用方案３时而导致git pull已经完全出错不能使用，可以通过这两步完成同步远程仓库。

代码示例方案３：前提是保证远程仓库test未被使用过，若被使用过可查看解决方案

```
mkdir temp;
cd ~/temp
git init
gedit readme.txt
git add .
git commit -m ""
git add remote origin ""
git push -u origin master
mkdir test
cd ~/test
git init
git remote add origin ""
git pull
gedit readme.txt
git add .
git commit -m ""
git push
```