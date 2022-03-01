# Updating Tovy
Tovy releases update regularly to keep Tovy powerful and safe to use. In order to enjoy the improvements granted by the update, this guide will walk you through the updating process for Tovy.

## Table of Content
[[toc]]

### Updating Tovy in your server
When you are using `git clone`, it clones the entire repository to your device. Hence, updating will be easier and usually takes one line to complete. As long as you do not modify the source code.

To do that, make sure you have cancelled the process for Tovy in `PM2` or anything else. Just make sure Tovy is not running in the background.

After that, run this command when you are in the directory where Tovy resides:
```
git pull
```

Once complete, deploy your Tovy instance again, either with `PM2` or whatever.

🎉 You just updated Tovy to the latest version!

### Updating Tovy in Railway
#### Setting up settings
To update your Tovy instance in Railway, head to your Railway project page first, it should look something like this:
![](https://2159974755-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FunMTB348tgzMbMDFEblw%2Fuploads%2FgI1OwkF8TAEgcn1VxcQC%2Fimage.png?alt=media&token=4aeea30d-f036-4db8-a8a7-36aec98e001d)

Find and click **Deployments**
![](https://p96.tr4.n0.cdn.getcloudapp.com/items/Bludd8vp/8df9f943-617f-4b09-887a-ca2b471dfbb5.jpg?source=viewer&v=1d3975cdde70dac5fcdb4c01cdd34e66)

Now, head to the **Settings** tab:
![](https://p96.tr4.n0.cdn.getcloudapp.com/items/NQuxxPG1/ea5c2776-9157-4918-b315-c0ca526289c6.jpg?source=viewer&v=f47811828c7e546aa4d72590bfaf12c9)

There should be an option called **Pull Request Deploys**, turn it on.
![](https://p96.tr4.n0.cdn.getcloudapp.com/items/DOumm0Zd/48accb7a-a44d-40d7-baee-01151ec7d795.jpg?source=viewer&v=15888dcad2a908c6ae544c865b545569)

Soon you should be greeted with a prompt, asking whether to update this project to the latest version. Click **Update**.
![](https://2159974755-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FunMTB348tgzMbMDFEblw%2Fuploads%2FtWxwG3MaN1KoL5nOXQ7m%2Fimage.png?alt=media&token=18f7975b-eff4-43ae-ba66-72d3fca1da6f)

#### Updating the repository
Now, when an update is released, Railway will create a pull request for the updated content. In order to use the update, we need to accept its corresponding pull request and have it merge into the repository. In simplified form, **head to your GitHub repository**.

Click the **Pull Requests** section:
![](https://p96.tr4.n0.cdn.getcloudapp.com/items/wbuYYEZk/d35feb96-0ae4-4ccd-8de9-8c9b4c74b4c1.jpg?source=viewer&v=58b814c23756e3fe724bfa80b86634ab)

You should be able to see a new pull request named like this:
![](https://p96.tr4.n0.cdn.getcloudapp.com/items/P8u66A0q/29ef6022-a607-459e-9119-9ad1f7cddf7f.jpg?source=viewer&v=8fd6ca37739be97a7073d24a81b92bdf)

Click into it and hit **Merge Pull Request**, and confirm the merge. Finally, delete the branch.

🎉 You just updated Tovy to the latest version!