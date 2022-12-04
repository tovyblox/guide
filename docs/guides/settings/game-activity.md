# Activity Tracking
This guide will teach you how to set up activity tracking in your game.

## Getting started

 1. We will first start off by going to the settings page on your workspace. Select **"Settings"** on you navigation side bar.
 
![Sidebar](https://i.imgur.com/Gbmrda3.png)

2. You should have a view similar to this.

![Setting page](https://i.imgur.com/M9WDfkN.png)

3. Click on the arrow beside the **"Activity"** tab. You will then see something similar to this.

![Activity Tab](https://i.imgur.com/8xbSEtU.png)

4. Select the group role that you want to start tracking activity on. 
Keep in mind that all roles that are above the selected role will be tracked.

![Select role](https://i.imgur.com/vQkZpnz.png)

5. Download the loader by clicking the **"Download Loader"** button.

![Download Loader](https://i.imgur.com/EPEhS7x.png)

6. Save it to any of your local folder on your computer. 
	
7. Open the Roblox game you want to insert the loader on.
8. Find the **"Explorer"** Window on the Roblox game. Click on **"ServerScriptService"**. It should look similar to the screenshot below. 

![Explorer tab](https://i.imgur.com/rKbkYor.png)

9. Right mouse button click on **"ServerScriptService"** and select **"Insert from file"** from the options.

![Insert from file](https://i.imgur.com/AtvXdgY.png)
   
10. Select the activity loader file from your folder and insert it. Your **"ServerScriptService"** should look similar to this after.

![ServerScriptService after inserting loader](https://i.imgur.com/BpMbj0U.png)

11. Feel free to open the TovyActivity script to config the values under the config tab **EXCEPT FOR** the **"URL"** and **"AUTH"** field.

![Congfigurable values](https://i.imgur.com/7qfRidQ.png)

12. Make sure your HTTPS request for the game is turned on. 

[Click on me to learn how to turn on https request.](https://www.swipetips.com/how-to-turn-on-http-requests-in-roblox/)

13. Publish your game.

And that's it! Thats how you add Tovy Activity tracker into the game to track the activity of your staff members.

## FAQ
### Is the group role synced on Tovy?
Yes, the group roles are synced on the role select menu on Tovy activity tab.

### It is not recording any activity. What should I do?
Here's some steps to troubleshoot the issue.
1. Make sure the script is enabled.
2. Make sure your HTTPS service is eneabled.
3. Make sure all the config values are set correctly in the script.
4. If you are using a **self-hosted** instance, you may check your console log to see if there is any error originating from your server.

If all the above steps are followed and the issue still persist, you may get support through the following channels:

**For Tovy Cloud user**
You may contact a support team member through Tovy Cloud's live chat function.

**For self-hosted instance user**
You may open a forum discussion in our Discord support section and community members will be able to help you. 

_Please note that staff are **not required** to provide assistance in the support forum section and therefore, do not ping any staff member. Staff team may choose to help and the community may provide additional assistance. Fret not, we have a great community of members who are willing to help each  other._ 
