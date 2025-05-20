# Telegram alexa_notification
## 🚀 Step 2: Deploy to AWS Lambda
1️⃣ Create a Lambda Function
Go to AWS Lambda Console.

Click "Create Function" → "Author from scratch".

Configure:

Function Name: telegram-bot-notification

Runtime: Node.js 18.x (or latest)

Architecture: x86_64 (default)

Click "Create Function".

2️⃣ Upload Your Code (ZIP Upload):

local CMD Run:
npm install 
zip -r lambda.zip index.js package.json node_modules

3️⃣ Set Environment Variables
In Lambda → Configuration → Environment Variables:

TELEGRAM_BOT_TOKEN = your_bot_token

TELEGRAM_CHAT_ID = your_chat_id

4️⃣ Test the Lambda Function
Click "Test" → "Configure test event" → Use default {} (empty event).

Run the test. 

🌐 Step 3: Add API Gateway (HTTPS Endpoint)
1️⃣ Create an HTTP API
Go to API Gateway Console.

Click "Create API" → "HTTP API" → "Build".

Integrate with Lambda:

Select your Lambda function (telegram-bot-notification).

Configure Route:

Method: GET (or POST if preferred).

Resource Path: /send.

Click "Create".

2️⃣ Deploy the API
Go to "Routes" → "ANY /send" → "Attach Integration".

Select your Lambda function.

Click "Deploy API" → "Deploy".

Your HTTPS endpoint will be generated:
https://xxxx.execute-api.region.amazonaws.com/send

3️⃣ Test the Endpoint
Open in browser or run:

bash
curl "https://xxxx.execute-api.region.amazonaws.com/send"
If successful, your Telegram bot will send a message!


deployment completed: 
https://nd8um02nrh.execute-api.eu-north-1.amazonaws.com/