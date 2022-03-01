# Hosting on a VPS (recommended)

### Please make sure you completed the Creating a database steps&#x20;

### Installing what we need

First, we are going to make sure we have [Nodejs](https://nodejs.org/en/) installed on the VPS.

Once that is done we are going to need to run `npm install pm2` in the terminal - This installs the dependency we will use to host our Tovy instance.



### Installing Tovy

We're going to want to run `git clone http://github.com/tovyblox/tovy.git` in our terminal!



Once we do that we are going to run `cd tovy`&#x20;

After that, we need to run `npm install` once again to install what Tovy needs to run!&#x20;



### Running and setting up configs

First, we are going to run `node start` this will show a prompt that we need to follow for the first time. You should see a prompt like this:&#x20;



![](https://cdn.iharrblx.xyz/Code\_YZYuXeq40l.png)

Where it says please provide a MongoDB link paste in the link you copied for your database earlier and click enter.

![](https://cdn.iharrblx.xyz/Code\_3zznv9JkQA.png)

After this, the Tovy instance should start building.



### Tovy setup

First, we are going to go to our Tovy page, by default this is [http://localhost:8080](http://localhost:8080)

You should see a page like this:

![](https://cdn.iharrblx.xyz/firefox_06hQpOgbiI.png)

There you are going to enter your Roblox username and the password that you want to set for your account.



Once you click next you should see a screen like this:

![](https://cdn.iharrblx.xyz/firefox_A2MEVPVGzS.png)



For the Group ID field we want to enter the ID of our group - If my group URL was `roblox.com/groups/1207931/Group-Recruiting-Plaza-Community#!/about` my Group ID would be `1207931`.



Once we click next it should load and then we will be greeted with a page that looks like this:

![](https://cdn.iharrblx.xyz/firefox_6RUbwDoCgA.png)

After this you are going to want to click `^c`. This exits out of Tovy so we can make it be up 24/7

All we need to do is run `pm2 start start.js` and it should run in the same place it ran before!&#x20;



Congrats! You can read more of our guides to learn more about how to use Tovy.&#x20;
