---
title: Obsidian iA Writer Quick Capture Setup
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
- Fill the URL field with iA Writer's URL Command: `ia-writer://new?path=00%20Inbox&edit=true`
	- My inbox folder is called `00 Inbox` and since it has a space in the path name, I have to add `%20` to represent the space.
	- We also pass the `edit=true` command to bring up the keyboard as soon as iA Writer opens
	- For more information check out the [iA Writer URL Command Reference](https://ia.net/writer/support/help/url-commands#new)

Long-press the shortcut, share, and add to homescreen. I added my capture shortcut right to the home bar.