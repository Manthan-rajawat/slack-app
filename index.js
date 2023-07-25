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
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️Hello World.. Bolt app is running!");
})();

// Listen to the app_home_opened event, and when received, respond with a message including the user being messaged
app.event("app_home_opened", async ({ event, say, client, view, users }) => {
  console.log(
    "⚡️Hello! Someone just opened the app to DM so we will send them a message!"
  );
  say(`Hello world and <@${event.user}>! `);

  try {
    /* view.publish is the method that your app uses to push a view to the Home tab */
    await client.views.publish({
      /* the user that opened your app's app home */
      user_id: event.user,

      /* the view object that appears in the app home*/
      view: {
        type: "home",
        callback_id: "home_view",

        /* body of the view */
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Welcome to your _App's Home_* :tada:",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "This button won't do much for now but you can set up a listener for it using the `actions()` method and passing its unique `action_id`. See an example in the `examples` folder within your Bolt app.",
            },
          },
          {
            type: "actions",
            elements: [
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "Click me!",
                },
                action_id: "button",
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
  // Acknowledge the command request
  await ack();

  try {
    const user = await client.users.profile.get();
    console.log(user);
    // Call views.open with the built-in client
    const result = await client.views.open({
      // Pass a valid trigger_id within 3 seconds of receiving it
      trigger_id: body.trigger_id,
      // View payload
      view: {
        type: "modal",
        // View identifier
        callback_id: "view_1",
        title: {
          type: "plain_text",
          text: "Modal title",
        },
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "Welcome to a modal with _blocks_",
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Click me!",
              },
              action_id: "button_abc",
            },
          },
          {
            type: "input",
            block_id: "input_c",
            label: {
              type: "plain_text",
              text: "What are your hopes and dreams?",
            },
            element: {
              type: "plain_text_input",
              action_id: "dreamy_input",
              multiline: true,
            },
          },
        ],
        submit: {
          type: "plain_text",
          text: "Submit",
        },
      },
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
});

// Listen for a button invocation with action_id `button_abc` (assume it's inside of a modal)
app.action("button_abc", async ({ ack, body, client, logger }) => {
  // Acknowledge the button request
  await ack();

  try {
    // Call views.update with the built-in client
    const result = await client.views.update({
      // Pass the view_id
      view_id: body.view.id,
      // Pass the current hash to avoid race conditions
      hash: body.view.hash,
      // View payload with updated blocks
      view: {
        type: "modal",
        // View identifier
        callback_id: "view_1",
        title: {
          type: "plain_text",
          text: "Updated modal",
        },
        blocks: [
          {
            type: "section",
            text: {
              type: "plain_text",
              text: "You updated the modal!",
            },
          },
          {
            type: "image",
            image_url:
              "https://media.giphy.com/media/SVZGEcYt7brkFUyU90/giphy.gif",
            alt_text: "Yay! The modal was updated",
          },
        ],
      },
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
});
