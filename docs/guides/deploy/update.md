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
![](https://images.grplaza.org/bot/49385b07775de28000f957a2beccda85/3f340a529eb0dea6d2203718946a0e62.png)

Now press Tovy or whatever your the name of the repo you cloned Tovy into is
![](https://images.grplaza.org/bot/2b8d93e1c7cbf405789f7c1a0f80fc6d/5f91962f8d6d1a4db33188fdbb3783fc.png)

Now, head to the **Settings** tab:
![](https://images.grplaza.org/bot/6ebad73d6dba30d4791ab6e866e2460a/abb3d0395f3722b95687c642d6d275e2.png)

Now scroll down to the **Service** section and press Check for updates.
![](https://images.grplaza.org/bot/3f0a1240e37b743978c7d7eb898224f7/e37c0e3650daa511776710e76c0e8a3c.png)

Soon you should be greeted with a prompt, asking whether to update this project to the latest version. Click **Yes**.
![](https://images.grplaza.org/bot/49385b07775de28000f957a2beccda85/668fe313a7e0b072ca667453f847167d.png)

#### Updating the repository
Now, when an update is released, Railway will create a pull request for the updated content. In order to use the update, we need to accept its corresponding pull request and have it merge into the repository. In simplified form, **head to your GitHub repository**.

Click the **Pull Requests** section:
![](https://p96.tr4.n0.cdn.getcloudapp.com/items/wbuYYEZk/d35feb96-0ae4-4ccd-8de9-8c9b4c74b4c1.jpg?source=viewer&v=58b814c23756e3fe724bfa80b86634ab)

You should be able to see a new pull request named like this:
![](https://p96.tr4.n0.cdn.getcloudapp.com/items/P8u66A0q/29ef6022-a607-459e-9119-9ad1f7cddf7f.jpg?source=viewer&v=8fd6ca37739be97a7073d24a81b92bdf)

Click into it and hit **Merge Pull Request**, and confirm the merge. Finally, delete the branch.

🎉 You just updated Tovy to the latest version!
- A Github Account

First, log into your Heroku dashboard and click on the Tovy dyno.

Then, go to the 'activity' tab.
[![image.png](https://i.postimg.cc/j5QHM44c/image.png)](https://postimg.cc/xJ8NCH7N)

Then, hit the "connect" button.
[![image.png](https://i.postimg.cc/xCYHNbVz/image.png)](https://postimg.cc/gwSrfjJz)

When asked to choose a pipeline, create a new one and name it whatever you want and leave the stage default.
[![image.png](https://i.postimg.cc/HsjMMgRB/image.png)](https://postimg.cc/ppbyNg2F)

Now, before the next step, go to Github

It might take you back to a pipeline page, but just hit the "Connect to Github" to finish.

Then, authorize your Github by pressing the button and following the prompt.
[![image.png](https://i.postimg.cc/d0nQn7Td/image.png)](https://postimg.cc/B8LGnnpQ)

In the "Connect to Github" field, type "Tovy" and click search, then connect.
[![image.png](https://i.postimg.cc/yxx1MkPS/image.png)](https://postimg.cc/zHmYWD4J)

Follow any prompts, and hit 'Done'.

Now, go to `https://github.com/<YOUR GITHUB USERNAME HERE>/tovy` amd hit the 'fetch upstream' and 'fetch and merge'. Let it update, and wait for Tovy to reboot on Heroku.

[![image.png](https://i.postimg.cc/zBfkXgqD/image.png)](https://postimg.cc/5HZzsjHD)

🎉 You just updated Tovy to the latest version!