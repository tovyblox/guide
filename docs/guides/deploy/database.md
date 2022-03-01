# Setting up MongoDB

:::danger
This is not necessary for users using Railway, move to [this page](./hosting.md#hosting-on-railway) instead.
:::

Tovy uses MongoDB to store users' data. Hence, we need to creata a database for it.

Head to [MongoDB](https://cloud.mongodb.com/) and create/login your account.

## Creating a new database

Once you have created your account, you should be greeted with a page that looks like this:

![](https://cdn.iharrblx.xyz/firefox_YwleKVNbgZ.png)

Just fill in the blanks and continue. After that, you should see a page like this:

![](https://cdn.iharrblx.xyz/firefox_4RcQYLWatU.png)

Select either Dedicated or Shared tier. We recommend choosing the Dedicated tier if your group is relatively large.

After that, you will be prompted to a new page, asking for your preference in cloud providers:

![](https://cdn.iharrblx.xyz/firefox_WTrY3vIE51.png)

Choose either AWS (Amazon Web Services), or Google Cloud. The location does not really matter much, but you should choose a location that is close to most of your group members.

And click `Create Cluster`

## Setting up authorization
![](https://cdn.iharrblx.xyz/firefox_Sm0rcJ0zak.png)

Now, you should see a new page asking for ways to authenticate the access to the database. Choose the `Username and Password` option, and pick something memorable yet safe.

Then, to the IP allowlist, type `0.0.0.0` into the IP address field for now, and click `Add Enry`

Finally, click `Finish and Close`. 🎉 You now have created a database for Tovy!

## The URL

Once done, you should now see a page like this:

![](https://cdn.iharrblx.xyz/firefox_C6DNujwvac.png)

Click the `Connect` button, and choose the `Connect your application` option. After that, you will see this page:

![](https://cdn.iharrblx.xyz/firefox_BAFUwxjJxw.png)

Copy the URL, and replace `<password>` with the password you entered earlier for this database (Not to be confused with your MongoDB account password). You'll need this for the installation part.