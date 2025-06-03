# YSWS-Prototype

This document demonstrates a design for a "You Ship, We Ship" programme &ndash; encouraging teenagers to build and ship projects, with a prize as a reward.

The concept is centred around building games/experiences for the Roblox engine and platform. Users will spend time building a simple experience before submitting it to the programme, or log their time working on an existing project. The programme will be run through a website hub.

Submitted experiences should have code as the main aspect of their development, written in (or compiled to) [Luau](https://luau.org).

## Website

The site will allow users to log in with their Hack Club Slack account, then connect one or more Roblox accounts to their profile. Their Roblox places will be listed, and they can select one to work on. The user can work on their project for a period of time (for example, 1 hour), at the end of which they can describe what they did, and submit it for review. The site will then track the time spent on the experience, and allow users to see their progress or convert their time into a prize.

## Function

Slack and Roblox accounts will be linked to the site with OAuth2, and the Roblox Open Cloud API will be used to fetch the user's places. Changes submitted will be stored in a database and reviewed to ensure time logged is correct.

Time tracking could be done in a number of ways:
- Asking the user to record a short video or screenshot of their work
- VSCode and HackaTime extension, which would allow actual time spend coding to be tracked easily (however most Roblox developers write code in the Roblox Studio IDE instead, which this would not be able to track)
- An editor plugin could be made for Roblox Studio to track changes (this could be based on the existing [WakaTime for Roblox Studio](https://github.com/wakatime/roblox-studio-wakatime) plugin)
- The Roblox API could be used after the user updates their place to download the place file and check for changes

## Prizes

Prizes could be given based on a number of factors:
- Time spent working on a project
- For rating projects/having their projects rated highly by other users (like High Seas multipliers)
- Player count or concurrent users (for example, hitting milestones like 100 visits/10 players)

Users could record a video or screenshots of their project, or just submit a link to the game to be played by others.

Prizes could be things like:
- Stickers
- Roblox Premium/Robux, the currency of the Roblox ecosystem
- Listing on a "best projects" section on the website
- Roblox avatar accessories/merchandise

After conversing with a few developers regarding these prizes, the Robux seems like it could be quite a popular option. Some of the less experienced developers I talked to also said small prizes would be a great incentive for them to further their learning, and Robux could be reinvested into the experience development to spend on promotions/advertising/employing others.

These prizes are on top of the payouts already given by Roblox to experience owners for players or asset/product/gamepass sales.

## Marketing and publicity

The main target market for this YSWS is intermediate-level Roblox developers that don't already know about Hack Club. The event could be publicised through specific connections I have to Roblox developers, such as open-source development communities. Roblox's [Developer Forum](https://devforum.roblox.com) could also be used to attract developers and gain feedback.

A lot of the Roblox community is already on platforms like X, TikTok, or YouTube, so creating promotional materials for these could help attract developers. Roblox also has a [Creator Events](https://create.roblox.com/docs/creator-programs/creator-events) programme that could be applied for to get more visibility.

## Management and moderation

Moderators should be able to review work sessions (on site or through Slack) to ensure they are valid and the time is mainly spent writing code. Content on the site made visible to others will also need to be moderated.
