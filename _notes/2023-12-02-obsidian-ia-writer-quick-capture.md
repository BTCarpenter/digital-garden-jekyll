---
title: Quick Capture Setup for Obsidian on iPhone Using iA Writer and Apple Shortcuts
---

### Benefits of Using iA Writer for Obsidian Quick Capture

- In one click using an iOS shortcut, I'm ready to input text
- iA Writer does not require creation of a title through this method
- Notes are saved directly to my note inbox for processing later

### Requirements

- An Obsidian Vault setup in iCloud Drive
- iA Writer installed on iPhone
- Shortcut to create new note in inbox folder

### Steps

After installing iA Writer, add the your inbox folder from iCloud as a location in the iA Writer Library.

Create a shortcut in iOS Shortcuts for creating a new note through URL Commands:

- Add an "Open" Command
- Fill the URL field with iA Writer's URL Command: `ia-writer://new?path=YOURFOLDER`
	- My inbox folder is called `00 Inbox` and the easiest way to get the link is to select the folder in iA Writer, tap the folder header, and select **Copy Library Path**
	- Paste this value to replace `YOURPATH` in the URL Command, My folder looks like `ia-writer://new?path=00 Inbox: /` 
	- Since we can't have spaces in a url, each space we have to replace spaces with `%20` to represent the space. 
	- My final URL Command looks like: `ia-writer://new?path=00%20Inbox:%20/` 

> For more information check out the [iA Writer URL Command Reference](https://ia.net/writer/support/help/url-commands#new)

Long-press the shortcut, share, and add to home screen. I added my capture shortcut right to the home bar.

And you're done!