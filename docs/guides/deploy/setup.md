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

This guide does not provide instructions on getting a PostgreSQL database, [please use this resource from DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-22-04-quickstart) instead, if you use Ubuntu!
:::

As long as the corresponding platform is supported by the [NodeJS runtime](https://nodejs.org/), Tovy can be installed and hosted for your fellow group members to use.

### Prerequisites
- A machine that can run Console/Terminal tasks, as well as self-hosting your Tovy instance.
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


### Database Setup
From the resource from DigitalOcean [linked here](https://docs.tovyblox.xyz/guides/deploy/setup.html#setting-up-tovy-in-your-server), you should have PostgreSQL with a user with password, and database setup!

:::warning
Occasionally, PostgreSQL does not prompt for a password when making a new user, so you can try the following commands below.
:::
* Log into PostgreSQL user as root/admin, and type `\password <username>`

Here's a template for your Database URL that you'll need later.
```
postgresql://username:password@<host>:<port>/<tovy db name>
```
- **Username:** User `(String)`
- **Password:** User Password `(String)`
- **Host:** IP Address of PostgreSQL server or `localhost` if Tovy is on the same machine as your PostgreSQL installation. `(IP/Domain/localhost)`
- **Port:** Specify PostgreSQL Port / *5432 if you didn't modify it.* `(Number)`
- **Tovy DB Name**: Database Name that the user has access to `(String)`


### Setting up Tovy for the first time
Tovy requires some configuration before it can actually run. Configuring a system can be a hassle. However, luckily, we have made it very easy to do.

For the secret key go to https://1password.com/password-generator/ and generate a password with 64 charactars that has symbols and copy it

In the root of the file make a file called `.env` and copy/paste the below contents in it
```
DATABASE_URL="<Database URL from Database Setup>"
SESSION_SECRET="<your-secret-key-with-32-chars>"
```

Then, replace the database URL with the postgres database you made

#### Finishing Up
We use NextJS, so you have to build the website first if you want to officially use this in production. If not, skip to [Starting Tovy](https://docs.tovyblox.xyz/guides/deploy/setup.html#starting-tovy)

Build the website for production:

:::: code-group
::: code-group-item npm
```
npm run build
```
:::
::: code-group-item pnpm
```
pnpm run build
```
:::
::: code-group-item Yarn
```
yarn run build
```
:::
::::

**This takes a few seconds/minutes depending on your machine's performance.**
Move on to [Starting Tovy](https://docs.tovyblox.xyz/guides/deploy/setup.html#starting-tovy)

#### Starting Tovy
If you built your website for production, using the step above, use this to start Tovy.

:::: code-group
::: code-group-item npm
```
npm run start
```
:::
::: code-group-item pnpm
```
pnpm run start
```
:::
::: code-group-item Yarn
```
yarn run start
```
:::
::::

Otherwise, if you didn't build Tovy, you cannot use the section "[Serving Tovy](https://docs.tovyblox.xyz/guides/deploy/setup.html#serving-tovy)", unless you build it. On the other hand, you can use **Dev Start** to instantly start Tovy to see any file changes without building it!

:::: code-group
::: code-group-item npm
```
npm run dev
```
:::
::: code-group-item pnpm
```
pnpm run dev
```
:::
::: code-group-item Yarn
```
yarn run dev
```
:::
::::

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

::: warning Starting without Building
Stop! Do not use this section if you did not build Tovy. Go back to [Finishing Up](https://docs.tovyblox.xyz/guides/deploy/setup.html#finishing-up).

If you want to try Tovy without building it, you can go to [Starting Tovy](https://docs.tovyblox.xyz/guides/deploy/setup.html#starting-tovy) and start a **Dev Build**.
:::

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
