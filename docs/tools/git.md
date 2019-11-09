# Git 学习指南

## 关于 Git

### 什么是 Git

Git 是一个流行的文件版本管理工具，  
（SVN 是另一种版本管理工具）

（版本管理不仅可以用于项目代码，也可以用来管理 '.psd'、游戏存档…等）

基于 Git 本体衍生了出很多相关工具，  
如 图形化的 Git 管理界面、各种 Git Diff 编辑器、Git 规范提交工具 等  
这些工具围绕 Git 配合着一同工作。

### 为什么要用 Git

- 因为很多团队都在用
- 可以方便地管理功能代码的多个版本，轻松回退切换
- 使多人开发更好地并行化

### GitHub 社区

GitHub 是一个免费的 Git 远端仓库，  
有很多著名的项目和工具都托管在 GitHub 上，  
如 [VSCode](https://github.com/microsoft/vscode)、 [React](https://github.com/facebook/react) 等

（类似的远端仓库还有 GitLab、Bitbucket、Coding.net 等）

GitHub 也是一个社区和服务，除 Git 基本功能外还有很多其他功能，  
如 issues 系统，page 服务 等

## 学习 Git

### 概览

- 耗时：从入门到理解和掌握基本命令需要大约 2~10 小时 （个人经验）
- 难点：Git 操作的规范性和可靠性，高级使用方式
- 准备：本地，GitHub 账号

### 学习路线

- 了解 Git 基本用法
- Git flow 开发模型
- Git 其他常用命令
- 操作规范
  - branch 和 commit 的合理运用方式
  - 约定式提交

## 资料

[Github](https://github.com/) (如果可以，开两个账号，以便自己尝试 `pull request` 等功能)

### Git 工具

- CLI
  - [Git](https://git-scm.com/)
    - `brew install git`
    - [How to Install Git on Linux, Mac or Windows](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/)
  - [Tig](https://github.com/jonas/tig)
    - `brew install tig`
    - 相当于命令行版的 'source-tree'
    - Git 自带的 `git log --oneline --decorate --all --graph` 也能达到类似效果
  - [gitignore.io](https://www.gitignore.io/)
    - 自动生成 gitignore 的工具
- GUI
  - [Sourcetree](https://www.sourcetreeapp.com/)
    - `brew cask install sourcetree`
    - 好用的图形化 Git 管理器
  - [GitHub Desktop](https://desktop.github.com/)
    - `brew cask install github`
    - GitHub 官方出品 GUI 管理器，对 GitHub 本身比较友好

### 概念/规范/工具

- Git Flow 工作流模型
- `--no-ff` (no fast forward merge) 参数，merge 的时候总是建立新分支，保持各分支含义清晰。
- 语义化版本（[Semantic Versioning](https://semver.org/lang/zh-CN/)）
  - [conventional-changelog/standard-version](https://github.com/conventional-changelog/standard-version)
  - `npm i -g standard-version`
- 约定式提交（[Conventional Commits](https://www.conventionalcommits.org/zh/v1.0.0-beta.4/)）
  - [commitizen/cz-cli](https://github.com/commitizen/cz-cli)
  - `npm i -g commitizen`
- changelog（[conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)）
- Submodules/lerna，管理多仓库项目的方式
- badge（[shields.io](https://shields.io/)），为项目提供元信息图标

### 自学教材

- [Introduction to Git Use](https://developpaper.com/introduction-to-git-use/)
- [Git and GitHub for Poets - Daniel Shiffman](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV)
- [Git 教程 - 廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600)
- [Git 工作流程 - 阮一峰](http://www.ruanyifeng.com/blog/2015/12/git-workflow.html)
- [Git flow 入门教程](https://www.jianshu.com/p/b446c43577f9)
- [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)
- [Git Merge - Atlassian Tutorials](https://www.atlassian.com/git/tutorials/using-branches/git-merge)
- [What is the difference between `git merge` and `git merge --no-ff`?](https://stackoverflow.com/questions/9069061/what-is-the-difference-between-git-merge-and-git-merge-no-ff)
- [Git 协同与提交规范](https://www.yuque.com/fe9/basic/nruxq8)

## Git 基本命令

```shell
git init

git status
git log

git add <. | files-names >
git commit -m <messages>

git branch <new-branch>
git checkout <existed-branch>
git checkout -b <new-branch> <based-branch>

git merge [--no-ff] <from-branch>

get reset [--hard] <existed-branch>

git fetch --all
git pull <origin> <master>
git push <origin> <master>
```

![git-cheatsheet-cn](./git-cheatsheet-cn.jpeg)