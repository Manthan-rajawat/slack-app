const { App } = require("@slack/bolt");
require("dotenv").config();

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

/* Add functionality here */

(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();

app.event("app_home_opened", ({ event, say, client }) => {
  // console.log(event);
  say(`Hello <@${event.user}>!`);

  try {
    const result = client.views.publish({
      user_id: event.user,
      view: {
        type: "home",
        callback_id: "home_view",
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: `Hello ,Empower your workforce with With Qbyte.`,
              emoji: true,
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "Vist our website Qbyte",
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Qbyte.ai",
                emoji: true,
              },
              value: "click_me_123",
              action_id: "button-action",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "QByte is an AI powered Training and Help platform, empowering employees with top-notch training and instant knowledge access for unmatched business growth..",
            },
            accessory: {
              type: "image",
              image_url:
                "https://qbyte.ai/static/media/image2.1b143e54314cf7fbfde3.jpg",
              alt_text: "cute cat",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "Experience the magic of AI.",
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Book a demo",
                emoji: true,
              },
              value: "click_me_123",
              action_id: "button-action",
            },
          },
        ],
      },
    });
  } catch (err) {
    console.log(err);
  }

  app.action("button-action", async ({ body, ack, client }) => {
    await ack();
    console.log(body);
    try {
      // app.client.users.info();
      await client.views.update({
        view_id: body.view.id,
        hash: body.view.hash,
        view: {
          type: "home",
          callback_id: "home_view",
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: "`THE BUTTON WAS CLICKED`:white_check_mark:",
              },
            },
          ],
        },
      });
    } catch (err) {
      console.error(err);
    }
  });
});

app.command("/qbyte", async ({ ack, body, client, logger }) => {
  await ack();
  console.log(body);
  try {
    const name = body.user_name;
    const result = await client.views.open({
      trigger_id: body.trigger_id,
      view: {
        type: "modal",
        callback_id: "view_1",
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
              text: `:wave: Hey ${name}!\n\n Your organization has shared a course with you!`,
              emoji: true,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "plain_text",
              text: "Fill in the required details!",
              emoji: true,
            },
          },
          {
            type: "input",
            element: {
              type: "email_text_input",
              action_id: "button_abc",
            },
            label: {
              type: "plain_text",
              text: "Enter your bussiness email.",
              emoji: true,
            },
          },
        ],
      },
    });
    logger.info(result);
  } catch (err) {
    logger.error(err);
  }
});

app.action("button_abc", async ({ ack, body, client, logger }) => {
  // Acknowledge the button request
  await ack();
  console.log(body);
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
