// const { App } = require("@slack/bolt");
// require("dotenv").config();

// const app = new App({
//   signingSecret: process.env.SLACK_SIGNING_SECRET,
//   token: process.env.SLACK_BOT_TOKEN,
// });

// /* Add functionality here */

// (async () => {
//   // Start the app
//   await app.start(process.env.PORT || 3000);

//   console.log("⚡️ Bolt app is running!");
// })();

// app.event("app_home_opened", ({ event, say, client }) => {
//   // console.log(event);
//   say(`Hello <@${event.user}>!`);

//   try {
//     client.views.publish({
//       user_id: event.user,
//       view: {
//         type: "home",
//         callback_id: "home_view",
//         blocks: [
//           {
//             type: "header",
//             text: {
//               type: "plain_text",
//               text: `Hello ,Empower your workforce with With Qbyte.`,
//               emoji: true,
//             },
//           },
//           {
//             type: "section",
//             text: {
//               type: "mrkdwn",
//               text: "Vist our website Qbyte",
//             },
//             accessory: {
//               type: "button",
//               text: {
//                 type: "plain_text",
//                 text: "Qbyte.ai",
//                 url: "https://Qbyte.ai",
//                 emoji: true,
//               },
//               value: "click_me_123",
//               action_id: "button",
//             },
//           },
//           {
//             type: "divider",
//           },
//           {
//             type: "section",
//             text: {
//               type: "mrkdwn",
//               text: "QByte is an AI powered Training and Help platform, empowering employees with top-notch training and instant knowledge access for unmatched business growth..",
//             },
//             accessory: {
//               type: "image",
//               image_url:
//                 "https://qbyte.ai/static/media/image2.1b143e54314cf7fbfde3.jpg",
//             },
//           },
//           {
//             type: "divider",
//           },
//           {
//             type: "section",
//             text: {
//               type: "mrkdwn",
//               text: "Experience the magic of AI.",
//             },
//             accessory: {
//               type: "button",
//               text: {
//                 type: "plain_text",
//                 text: "Book a demo",
//                 emoji: true,
//               },
//               value: "click_me_123",
//               action_id: "button-action",
//             },
//           },
//         ],
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }

//   app.action("button-action", async ({ body, ack, client }) => {
//     await ack();
//     console.log(body);
//     try {
//       // app.client.users.info();
//       await client.views.update({
//         view_id: body.view.id,
//         hash: body.view.hash,
//         view: {
//           type: "home",
//           callback_id: "home_view",
//           blocks: [
//             {
//               type: "section",
//               text: {
//                 type: "mrkdwn",
//                 text: "`THE BUTTON WAS CLICKED`:white_check_mark:",
//               },
//             },
//           ],
//         },
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   });
// });

// app.command("/qbyte", async ({ ack, body, client, logger }) => {
//   await ack();
//   console.log(body);
//   try {
//     const name = body.user_name;
//     const result = await client.views.open({
//       trigger_id: body.trigger_id,
//       view: {
//         type: "modal",
//         callback_id: "view_1",
//         submit: {
//           type: "plain_text",
//           text: "Submit",
//           emoji: true,
//         },
//         close: {
//           type: "plain_text",
//           text: "Cancel",
//           emoji: true,
//         },
//         title: {
//           type: "plain_text",
//           text: "Qbyte",
//           emoji: true,
//         },
//         blocks: [
//           {
//             type: "section",
//             text: {
//               type: "plain_text",
//               text: `:wave: Hey ${name}!\n\n Your organization has shared a course with you!`,
//               emoji: true,
//             },
//           },
//           {
//             type: "divider",
//           },
//           {
//             type: "section",
//             text: {
//               type: "plain_text",
//               text: "Fill in the required details!",
//               emoji: true,
//             },
//           },
//           {
//             type: "input",
//             element: {
//               type: "email_text_input",
//               action_id: "button_abc",
//             },
//             label: {
//               type: "plain_text",
//               text: "Enter your bussiness email.",
//               emoji: true,
//             },
//           },
//         ],
//       },
//     });
//     logger.info(result);
//   } catch (err) {
//     logger.error(err);
//   }

//   app.action("button_abc", async ({ ack, body, client }) => {
//     // Acknowledge the button request
//     await ack();
//     console.log(body);
//     try {
//       // Call views.update with the built-in client
//       await client.views.update({
//         // Pass the view_id
//         view_id: body.view.id,
//         // Pass the current hash to avoid race conditions
//         hash: body.view.hash,
//         // View payload with updated blocks
//         view: {
//           type: "modal",
//           // View identifier
//           callback_id: "view_1",
//           title: {
//             type: "plain_text",
//             text: "Updated modal",
//           },
//           blocks: [
//             {
//               type: "section",
//               text: {
//                 type: "plain_text",
//                 text: "You updated the modal!",
//               },
//             },
//             {
//               type: "image",
//               image_url:
//                 "https://media.giphy.com/media/SVZGEcYt7brkFUyU90/giphy.gif",
//               alt_text: "Yay! The modal was updated",
//             },
//           ],
//         },
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   });
// });

const { App } = require("@slack/bolt");
require("dotenv").config();

// Initializes your app with your bot token and signing secret
const app = new App({
  // token: process.env.SLACK_BOT_TOKEN,
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  // userToken: process.env.SLACK_USER_TOKEN,
});

(async () => {
  // Start your app
  try {
    await app.start(process.env.PORT || 3000);

    console.log("⚡️Hello World.. Bolt app is running!");
  } catch (err) {
    console.error(err);
  }
})();

app.get("/get_member_emails", async (req, res) => {
  try {
    const response = await axios.get("https://slack.com/api/users.list", {
      headers: {
        Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
      },
    });

    if (response.data.ok) {
      const memberEmails = response.data.members
        .filter(
          (member) => !member.deleted && !member.is_bot && member.profile.email
        )
        .map((member) => member.profile.email);

      res.json({ success: true, emails: memberEmails });
      console.log(memberEmails);
    } else {
      throw new Error("Failed to retrieve member information.");
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
// Listen to the app_home_opened event, and when received, respond with a message including the user being messaged
app.event("app_home_opened", async ({ event, say, client }) => {
  console.log(
    "⚡️Hello! Someone just opened the app to DM so we will send them a message!"
  );
  say(`Hello world and <@${event.user}>! `);

  try {
    /* view.publish is the method that your app uses to push a view to the Home tab */

    // const list = await client.users.list();

    console.log(users);
    // console.log(list);
    await client.views.publish({
      /* the user that opened your app's app home */
      user_id: event.user,
      /* the view object that appears in the app home*/
      view: {
        type: "home",
        callback_id: "home_view",
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `Hey <@${event.user}>!👋 I'm QByte's Bot. I'm here to help you find courses with you in Slack.`,
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*1️⃣ Use the `/qbyte` command*. Type `/qbyte` that will open a popup where you can enter your bussiness email. Try it out by using the `/qbyte` command in this channel.",
            },
          },
          {
            type: "image",
            title: {
              type: "plain_text",
              text: "image1",
              emoji: true,
            },
            image_url:
              "https://api.slack.com/img/blocks/bkb_template_images/onboardingComplex.jpg",
            alt_text: "image1",
          },
          {
            type: "divider",
          },
          {
            type: "context",
            elements: [
              {
                type: "mrkdwn",
                text: "👀 View all courses with `/courses list`\n❓Get help at any time with `/qbyte help` or type *help* in a DM with me",
              },
            ],
          },
        ],
      },
    });
  } catch (error) {
    console.error(error);
  }
});

app.action("button", async ({ body, ack, client }) => {
  // Acknowledge the action
  await ack();
  console.log(body);
  try {
    // Call views.update with the built-in client
    await client.views.update({
      // Pass the view_id
      view_id: body.view.id,
      // Pass the current hash to avoid race conditions
      hash: body.view.hash,
      // View payload with updated blocks

      /* body of the view */
      view: {
        type: "home",
        callback_id: "home_view",

        /* body of the view */
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "`THE BUTTON WAS CLICKED` :white_check_mark: ",
            },
          },
        ],
      },
    });
  } catch (error) {
    console.error(error);
  }
});

// Listen for a slash command invocation
app.command("/qbyte", async ({ ack, body, client, logger }) => {
  // console.log("client ->");
  // console.log(client);
  console.log("body ->");
  console.log(body);
  // Acknowledge the command request
  await ack();
  try {
    // const user = await client.users.profile.get();
    const user = body.user_name;
    const profile = await body.console.log("profile ->");
    console.log(profile);

    // Call views.open with the built-in client
    const result = await client.views.open({
      // Pass a valid trigger_id within 3 seconds of receiving it
      trigger_id: body.trigger_id,
      view: {
        type: "modal",
        submit: {
          type: "plain_text",
          text: "Submit",
          emoji: true,
        },
        close: {
          type: "plain_text",
          text: "Cancel",
          emoji: true,
        },
        title: {
          type: "plain_text",
          text: "Qbyte",
          emoji: true,
        },
        blocks: [
          {
            type: "section",
            text: {
              type: "plain_text",
              text: `Hey <@${user}>,These are the courses shared with you!`,
              emoji: true,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Airstream Suite*\n*Share with another person*. This course is all about Car safety.",
            },
            accessory: {
              type: "image",
              image_url:
                "https://qbyte.ai/static/media/image2.1b143e54314cf7fbfde3.jpg",
              alt_text: "Airstream Suite",
            },
          },
          {
            type: "context",
            elements: [
              {
                type: "mrkdwn",
                text: "1x Queen Bed",
              },
              {
                type: "mrkdwn",
                text: "|",
              },
              {
                type: "mrkdwn",
                text: "$220 / night",
              },
            ],
          },
          {
            type: "actions",
            elements: [
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "Choose",
                  emoji: true,
                },
                value: "click_me_123",
              },
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "View Details",
                  emoji: true,
                },
                value: "click_me_123",
              },
            ],
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Redwood Suite*\n* This course is about the fire and safety management.",
            },
            accessory: {
              type: "image",
              image_url:
                "https://qbyte.ai/static/media/image2.1b143e54314cf7fbfde3.jpg",
              alt_text: "Redwood Suite",
            },
          },
          {
            type: "context",
            elements: [
              {
                type: "mrkdwn",
                text: "1x King Bed",
              },
              {
                type: "mrkdwn",
                text: "|",
              },
              {
                type: "mrkdwn",
                text: "$350 / night",
              },
            ],
          },
          {
            type: "actions",
            elements: [
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "✓ Your Choice",
                  emoji: true,
                },
                style: "primary",
                value: "click_me_123",
              },
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "View Details",
                  emoji: true,
                },
                value: "click_me_123",
              },
            ],
          },
          {
            type: "divider",
          },
        ],
      },
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
});
