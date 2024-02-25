import{r,o as s,c as i,a as t,b as n,F as d,e as o,d as e}from"./app.a072516b.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const c={},l=o('<h1 id="hosting-on-a-vps-recommended" tabindex="-1"><a class="header-anchor" href="#hosting-on-a-vps-recommended" aria-hidden="true">#</a> Hosting on a VPS (recommended)</h1><h3 id="please-make-sure-you-completed-the-creating-a-database-steps" tabindex="-1"><a class="header-anchor" href="#please-make-sure-you-completed-the-creating-a-database-steps" aria-hidden="true">#</a> Please make sure you completed the Creating a database steps </h3><h3 id="installing-what-we-need" tabindex="-1"><a class="header-anchor" href="#installing-what-we-need" aria-hidden="true">#</a> Installing what we need</h3>',3),p=e("First, we are going to make sure we have "),u={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},g=e("Nodejs"),m=e(" installed on the VPS."),f=o('<p>Once that is done we are going to need to run <code>npm install pm2</code> in the terminal - This installs the dependency we will use to host our Tovy instance.</p><h3 id="installing-tovy" tabindex="-1"><a class="header-anchor" href="#installing-tovy" aria-hidden="true">#</a> Installing Tovy</h3><p>We&#39;re going to want to run <code>git clone http://github.com/tovyblox/tovy.git</code> in our terminal!</p><p>Once we do that we are going to run <code>cd tovy</code></p><p>After that, we need to run <code>npm install</code> once again to install what Tovy needs to run! </p><h3 id="running-and-setting-up-configs" tabindex="-1"><a class="header-anchor" href="#running-and-setting-up-configs" aria-hidden="true">#</a> Running and setting up configs</h3><p>First, we are going to run <code>node start</code> this will show a prompt that we need to follow for the first time. You should see a prompt like this: </p><p><img src="https://cdn.iharrblx.xyz/Code_YZYuXeq40l.png" alt=""></p><p>Where it says please provide a MongoDB link paste in the link you copied for your database earlier and click enter.</p><p><img src="https://cdn.iharrblx.xyz/Code_3zznv9JkQA.png" alt=""></p><p>After this, the Tovy instance should start building.</p><h3 id="tovy-setup" tabindex="-1"><a class="header-anchor" href="#tovy-setup" aria-hidden="true">#</a> Tovy setup</h3>',12),_=e("First, we are going to go to our Tovy page, by default this is "),y={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},w=e("http://localhost:8080"),b=o('<p>You should see a page like this:</p><p><img src="https://cdn.iharrblx.xyz/firefox_06hQpOgbiI.png" alt=""></p><p>There you are going to enter your Roblox username and the password that you want to set for your account.</p><p>Once you click next you should see a screen like this:</p><p><img src="https://cdn.iharrblx.xyz/firefox_A2MEVPVGzS.png" alt=""></p><p>For the Group ID field we want to enter the ID of our group - If my group URL was <code>roblox.com/groups/1207931/Group-Recruiting-Plaza-Community#!/about</code> my Group ID would be <code>1207931</code>.</p><p>Once we click next it should load and then we will be greeted with a page that looks like this:</p><p><img src="https://cdn.iharrblx.xyz/firefox_6RUbwDoCgA.png" alt=""></p><p>After this you are going to want to click <code>^c</code>. This exits out of Tovy so we can make it be up 24/7</p><p>All we need to do is run <code>pm2 start start.js</code> and it should run in the same place it ran before! </p><p>Congrats! You can read more of our guides to learn more about how to use Tovy. </p>',11);function x(k,v){const a=r("ExternalLinkIcon");return s(),i(d,null,[l,t("p",null,[p,t("a",u,[g,n(a)]),m]),f,t("p",null,[_,t("a",y,[w,n(a)])]),b],64)}var I=h(c,[["render",x]]);export{I as default};