# Hosting

Without a host, there is no way for other fellow members in your group to use Tovy.

Luckily, hosting is not expensive, and there is some feasible and free hosting solutions for your group.

::: warning Scaling
If your group is relatively large, please do not consider free hosting solutions. They will not scale with your group.
:::

In this page, we will be teaching you how to host Tovy on a server (DigitalOcean, Azure, or your own, etc.), and on [Railway](https://railway.app).

Without further ado, let's begin.

## Hosting on a server

::: warning
In this section, we will be hosting Tovy on a server with the general way, depending on which cloud solution are you using, this method may not work. Please seek assistance from the corresponding cloud platform you are using.
:::

Assuming you already have the Tovy installation done in the server (if not, move the entire folder to the server).

We will be using a tool to keep Tovy's instance always online –– `pm2`, this can be installed with your NodeJS package manager.

:::: code-group
::: code-group-item npm
```
npm i -g pm2
```
:::
::: code-group-item pnpm
```
pnpm i -g pm2
```
:::
::: code-group-item Yarn
```
yarn global add pm2
```
:::
::::

Once that has been done, run the command:
```
pm2 start start.js
```

and it should start serving Tovy under the location [localhost:8080](http://locahost:8080). Point it to the server's IP and map it to a domain.

## Hosting on Railway

::: warning
Again, this solution is free, but if your group is relatively large, avoid the free plan and go for the paid tiers.
:::

Railway offers a free tier, if your group is small, we highly recommend using Railway as a temporary platform.

### Prerequisites
- A GitHub account

### Steps

To begin, click the button below

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2FItsWHOOOP%2Ftovy\&plugins=mongodb\&envs=PORT\&PORTDesc=The+port+-+This+is+required\&PORTDefault=8080\&referralCode=D\_TFvj)

Signup/login Railway with your GitHub account, make sure you have installed the Railway app into your account/organisation.

Once that has been done, you should see a page like this:

![](https://cdn.iharrblx.xyz/firefox_ZGRbvm7wEt.png)

Check `Private repo?` and click `Deploy`.

Railway will now create a MongoDB database and complete the initial setup for you. Just wait until you see `Success` at the top.

Then, open the first URL under the `Success` status text label, and follow the instructions [here](./installing.md#setting-up-login).