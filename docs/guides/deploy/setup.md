:::tip
We now offer $5/month hosting, you can get started by heading to [Tovy Cloud](https://cloud.tovyblox.xyz)
:::

# Setting up Tovy
In this guide, we will walk you through both the installation and hosting process for Tovy. This page will also mention how to setup Tovy in a [Railway](https://railway.app) project.
df

For starter groups, we recommend using the Railway method as it is much easier to begin with. Larger groups can consider using Railway too! Just not the free tier.

## Table of Content
[[toc]]

## Setting up Tovy in your server
:::warning
You are expected to know how to use the terminal as well as the NodeJS runtime.
Tovy is **not responsible** for any user errors caused during the setup process, this includes money/playerbase losses, server crashes, et cetera.
:::

As long as the corresponding platform is supported by the [NodeJS runtime](https://nodejs.org/), Tovy can be installed and hosted for your fellow group members to use.

### Prerequisites
- A computer & a server
- NodeJS 16+ installed with a package manager (Yarn, pnpm, or npm (included with NodeJS))
- Git installed
- A PostgreSQL database
- Internet connection

### Connecting to your server
You can download & setup Tovy in your computer first, then move Tovy back to your server. However, please be aware that we will be assuming you are doing all this in your server.

If you do not have direct access to your server, connect to the server via Secure Shell.

### Downloading Tovy and required dependencies
:::warning
Install [Git](https://git-scm.com) and the [NodeJS runtime](https://nodejs.org/) first
:::

Once you are in your server, type the following commands in your terminal session to download Tovy:
```
git clone https://github.com/tovyblox/tovy && cd tovy
```

After it finishes downloading, you should now be in Tovy's directory, run this command so the required dependencies for Tovy are installed:
:::: code-group
::: code-group-item npm
```
npm install
```
:::
::: code-group-item pnpm
```
pnpm install
```
:::
::: code-group-item Yarn
```
yarn install
```
:::
::::




Once done, you should now see a page like this:

![](https://cdn.iharrblx.xyz/firefox_C6DNujwvac.png)

Click the `Connect` button, and choose the `Connect your application` option. After that, you will see this page:

![](https://cdn.iharrblx.xyz/firefox_BAFUwxjJxw.png)

Copy the URL, and replace `<password>` with the password you entered earlier for this database (Not to be confused with your MongoDB account password). You'll need this for the next part.

### Setting up Tovy for the first time
Tovy requires some configuration before it can actually run. Configuring a system can be a hassle. However, luckily, we have made it very easy to do.

For the secret key go to https://1password.com/password-generator/ and generate a password with 64 charactars that has symbols and copy it

In the root of the file make a file called `.env` and copy/paste the below contents in it
```
DATABASE_URL="<your-database-url>"
SESSION_SECRET="<your-secret-key-with-32-chars>"
```

Then, replace the database URL with the postgres database you made

#### Starting Tovy

Now all we need to do is run 

#### Setting up login and your group

Once Tovy has started running, Tovy should reside in [localhost:3000](http://localhost:300). Head to that page and setup login.

::: warning Password
Use an unique password. You should not use your own Roblox account's password for this!
:::

Enter your Roblox username (Not to be confused with display name), as well as a password to log into Tovy. And click next.

Now, you should be able to see a new page, asking for your Roblox group's information. Enter your Group ID to the specified text field in order to proceed. To find your Group ID, head to your group first, the number sequence in the URL is the Group ID.

🎉 Setup should be complete now!

### Serving Tovy
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
pm2 start npm --name="Tovy" -- start
```

and it should start serving Tovy under the location [localhost:3000](http://locahost:3000). Point it to the server's IP and map it to a (sub)domain.


## Setting up Tovy as a Railway project (free plan)
::: warning
Again, this solution is free, but if your group is relatively large, avoid the free plan and go for the paid tiers.
:::

Railway offers a free tier, if your group is small, we highly recommend using Railway as a temporary platform.

### Prerequisites
- A GitHub account **at least older than 30 days**
- A credit card (if you are going for the paid tiers)

### Deploying Tovy onto Railway
To begin, click the button below

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/LvWOKQ?referralCode=D_TFvj)

Signup/login Railway with your GitHub account, make sure you have installed the Railway app into your account/organisation.

For the secret key go to https://1password.com/password-generator/ and generate a password with 64 charactars that has symbols and copy it

Then in SESSION_SECRET paste the code you just made
Check `Private repo?` and click `Deploy`.

Railway will now create a MongoDB database and complete the initial setup for you. Just wait until you see `Success` at the top.


### Setting up Tovy for the first time
When deploying Tovy with Railway, the database creation is automatically done for you, there is no need to create a database manually or whatsoever.

When Railway finished building Tovy, you will see two links just below the build status text (psss: the one that says `Success`). Click the first one as the second is for development purposes only.

::: warning Password
Use an unique password. You should not use your own Roblox account's password for this!
:::

Enter your Roblox username (Not to be confused with display name), as well as a password to log into Tovy. And click next.

Now, you should be able to see a new page, asking for your Roblox group's information. Enter your Group ID to the specified text field in order to proceed. To find your Group ID, head to your group first, the number sequence in the URL is the Group ID.

🎉 Setup should be complete now!
