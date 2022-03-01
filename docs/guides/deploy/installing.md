# Installing

:::warning Database required
You should have created a MongoDB database for Tovy first. Read the guides [here](./database.md).
:::

:::danger
Looking for how to install Tovy in Railway? Read [this page](./hosting.md#hosting-on-railway) instead.
:::

Installing Tovy is relatively simple, as long as you know how to use the command-line and has NodeJS installed.

## Prerequisites
- A computer
- NodeJS installed with a package manager (Yarn, pnpm, or npm (included with NodeJS))
- Git installed
- Internet connection

## Downloading Tovy
Before installing Tovy, we need to download the required assets to get Tovy running. To do that, we have to use `git clone`.

In your terminal window (Windows: Windows Terminal/PowerShell/Command Prompt, MacOS & GNU+Linux: Terminal), run the following command:

```
git clone http://github.com/ItsWHOOOP/tovy.git && cd tovy
```

Once that has been done, we now have to install the required dependencies for Tovy:

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

Now, we can proceed with the first-time configuration.

## Configuring Tovy for the first time

Tovy requires some configuration before it can actually run. Configuring a system can be a hassle. However, luckily, we have built a tool to make configuration less painful to do.

To use the tool, just run:
```
node start
```

## Setting up database

A prompt will appear asking for the URL to your MongoDB database. Simply paste the URL given by MongoDB when creating the database into the terminal, and press Enter/Return.

![](https://cdn.iharrblx.xyz/Code_YZYuXeq40l.png)

After that, Tovy should be running now.

## Setting up login

Once Tovy has started running, Tovy should reside in [localhost:8080](http://localhost:8080). Head to that page and setup login.

![](https://cdn.iharrblx.xyz/firefox_06hQpOgbiI.png)

::: warning Password
Use an unique password. You should not use your own Roblox account's password for this!
:::

Enter your Roblox username (Not to be confused with display name), as well as a password to log into Tovy. And click next.

## Setting up group

Now, you should be able to see a new page, asking for your Roblox group's information.

Enter your Group ID to the specified text field in order to proceed. To find your Group ID, head to your group first, the number sequence in the URL is the Group ID.

🎉 Setup should be complete now!

## Moving on...

After installing Tovy, you have to host Tovy, so other fellow members in your group would be able to use Tovy.

Hit Control + C or Shift + Control + C, and move to the [next page](./hosting.md)