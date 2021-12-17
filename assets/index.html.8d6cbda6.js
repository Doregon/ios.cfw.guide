import{r as i,o as a,c as s,a as e,b as n,F as l,d as o,e as r}from"./app.3be01406.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const c={},h=e("h2",{id:"help-page",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#help-page","aria-hidden":"true"},"#"),o(" Help page")],-1),u=o("This page is intended to provide solutions for errors encountered with FutureRestore. If none work, please join the r/Jailbreak "),p={href:"https://discord.gg/9apvC4C3CC",target:"_blank",rel:"noopener noreferrer"},_=o("Discord Server"),m=o(" and ask in #futurerestorehelp"),g=e("h2",{id:"ibec-error-error-code-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ibec-error-error-code-8","aria-hidden":"true"},"#"),o(" iBEC error (error code -8)")],-1),f=e("p",null,"This is a common error which you may run into while using FutureRestore, especially if you are using a Windows machine. To fix this:",-1),y=e("li",null,[o("Uninstall all Apple devices in Device Manager "),e("ul",null,[e("li",null,'Make sure to check "Uninstall Driver" when uninstalling')])],-1),v=e("li",null,"Uninstall all Apple products including iTunes and Apple Device Support programs in the Control Panel",-1),b=e("li",null,"Unplug and replug your device",-1),w=e("li",null,"Check device manager for any Apple devices and uninstall them and any drivers",-1),k=e("li",null,"Disconnect your device",-1),x=o("Install the iTunes "),T=e("code",null,".exe",-1),D=o(" file from "),R={href:"https://support.apple.com/kb/DL1816?locale=en_US",target:"_blank",rel:"noopener noreferrer"},F=o("apple.com"),S=o(" itself"),N=o("Boot your device into "),O={href:"https://www.howtogeek.com/396530/how-to-put-your-iphone-or-ipad-into-recovery-mode/",target:"_blank",rel:"noopener noreferrer"},C=o("Recovery Mode"),I=o(" and plug it into your comoputer"),j=e("li",null,"Uninstall the iBoot (Recovery) driver and software from Device Manager",-1),E=e("li",null,"Run FutureRestore again",-1),A=e("li",null,"Unplug and replug your device.",-1),U=e("li",null,"Run FutureRestore again. This issue should now be resolved.",-1),B=r('<p><img src="https://media.discordapp.net/attachments/825122925204078622/839186681202212904/unknown.png" alt="example"></p><h2 id="device-apnonce-doesn-t-match-apticket-nonce" tabindex="-1"><a class="header-anchor" href="#device-apnonce-doesn-t-match-apticket-nonce" aria-hidden="true">#</a> Device ApNonce doesn&#39;t match APTicket nonce</h2><p>This error means that you have not set your generator on your device to that of the blob. In order to solve this problem:</p><h3 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h3>',4),P=e("li",null,"Open your package manager on your jailbroken iDevice",-1),M=o("Add "),V={href:"https://repo.1conan.com",target:"_blank",rel:"noopener noreferrer"},L=o("repo.1conan.com"),z=o(" to your sources"),G=o("Add "),W={href:"https://repo.chariz.com",target:"_blank",rel:"noopener noreferrer"},H=o("repo.chariz.com"),J=o(" to your sources "),q=e("ul",null,[e("li",null,"This will usually already be there on newer jailbreaks")],-1),K=e("li",null,"Download and install dimentio",-1),Q=e("li",null,"Download and install NewTerm2",-1),X=e("li",null,[o("If you're on iOS 14.0 or above: "),e("ul",null,[e("li",null,[o("Install "),e("code",null,"libkernrw"),o(" if you're using Taurine")]),e("li",null,[o("Install "),e("code",null,"libkrw"),o(" if you're using unc0ver")]),e("li",null,"checkra1n/odysseyra1n users don't need to install anything extra")])],-1),Y=r('<h3 id="setting-nonce" tabindex="-1"><a class="header-anchor" href="#setting-nonce" aria-hidden="true">#</a> Setting nonce</h3><ol><li>Open your blob in a text editor and search for <code>generator</code><img src="https://user-images.githubusercontent.com/48022799/117004373-aa0b6700-acee-11eb-8a70-c488163e349b.jpeg" alt="GeneratorExample"><ul><li>This should be a <code>0x</code> followed by 16 characters, which will be a combination of letters and numbers.</li></ul></li><li>Note that value down. This is your generator.</li></ol><p><strong>NOTE:</strong> If there is no generator value, try to remember which jailbreak you were using at the time of saving blobs. If you were using unc0ver, your generator is most likely <code>0x1111111111111111</code>, and if you were using Chimera/Odyssey/Taurine, your generator is most likely <code>0xbd34a880be0b53f3</code>.</p><ol start="3"><li><p>Open NewTerm 2 on your iDevice and type the following command, where <code>[generator]</code> is the value you just grabbed: <code>su root -c &#39;dimentio [generator]&#39;</code></p></li><li><p>When asked for a password, enter your root password</p><ul><li>By default, this is set to <code>alpine</code></li></ul></li><li><p>Once the command executes, a lot of text should appear</p></li><li><p>Near the end of the text, you should see the line <code>Set nonce to [generator]</code></p></li><li><p>Run FutureRestore again. This issue should now be resolved.</p></li></ol><h2 id="sep-firmware-is-not-being-signed" tabindex="-1"><a class="header-anchor" href="#sep-firmware-is-not-being-signed" aria-hidden="true">#</a> SEP Firmware is not being signed</h2><p>This problem occurs when the user tries to manually specify SEP from the <em>target</em> version, instead of from the <em>latest</em> available version. To fix this problem, either choose the <code>latest-sep</code> argument or manually specify a SEP from the latest available iOS version</p><h2 id="could-not-connect-to-device-in-recovery-mode-failed-to-place-device-in-recovery-mode" tabindex="-1"><a class="header-anchor" href="#could-not-connect-to-device-in-recovery-mode-failed-to-place-device-in-recovery-mode" aria-hidden="true">#</a> Could not connect to device in recovery mode / Failed to place device in recovery mode</h2><p><strong>NOTE:</strong> if the error is similarly named, follow these steps too.</p><ul><li>If your device is in recovery mode, run FutureRestore again while your device is in recovery mode.</li><li>If your device is not in recovery mode, enter recovery mode manually, then run FutureRestore again.</li></ul><h2 id="error-unable-to-receive-message-from-fdr" tabindex="-1"><a class="header-anchor" href="#error-unable-to-receive-message-from-fdr" aria-hidden="true">#</a> Error: Unable to receive message from FDR...</h2><p>The fix for this is either waiting (it can take a very long time) or just re-trying the process. This is an error that has been diagnosed but no fix for it is available as of the time of writing this.</p>',11);function Z($,ee){const t=i("OutboundLink");return a(),s(l,null,[h,e("ul",null,[e("li",null,[u,e("a",p,[_,n(t)]),m])]),g,f,e("ol",null,[y,v,b,w,k,e("li",null,[x,T,D,e("a",R,[F,n(t)]),S]),e("li",null,[N,e("a",O,[C,n(t)]),I]),j,E,A,U]),B,e("ol",null,[P,e("li",null,[M,e("a",V,[L,n(t)]),z]),e("li",null,[G,e("a",W,[H,n(t)]),J,q]),K,Q,X]),Y],64)}var ne=d(c,[["render",Z]]);export{ne as default};
