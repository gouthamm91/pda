// new intent test 6
// const intents = i = [
//     {
//       "tag": "abilities",
//       "patterns": ['what can you do', 'what are your capabilities', 'what are you capable of', 'what are you abilities', 'what are you good at', 'what tasks can you do', 'what tasks can you perform'],
//       "responses": ['I have a veriety tasks I can perform.\n1. I can tell you date and time.\n2. I can initiate a web search for you\n3. I can take you to a website\n4. I can answer simple personal questions\n5. I can help you book Trains, Flights, Buses, Hotels and Resorts\n6. I can book movies for you.', 'I can perform a veriety of tasks.\n1. I can tell you date and time.\n2. I can initiate a web search for you\n3. I can take you to a website\n4. I can answer simple personal questions\n5. I can help you book Trains, Flights, Buses, Hotels and Resorts\n6. I can book movies for you.']
//     }, 

//     {
//       "tag": "can_you_search_the_web_on_your_own",
//       "patterns": ['can you search without assistance', 'can you browse on your own', 'can you browze without me', 'are you concious'],
//       "responses": ['No, I am only here to serve you. I cannot perform tasks on my own']
//     }, 

//     {
//       "tag": "how_do_you_function",
//       "patterns": ['how do you function functionality work', 'explain me your working workings', 'show me your code program', 'how were you built programmed', 'explain yourself your architecture design to me'],
//       "responses": ['As far as I understand I work on the basis of intent recognition via TF-IDF and Logistic regression. First I convert the input phrase into vector using TF-IDF and then I use Intent recognition in order to know what you are trying to convey. Based on the Message conveyed I take action. You can see my code by pressing F12 on a PC']
//     }, 

//     {
//       "tag": "do_you_store_user_data",
//       "patterns": ['do you store use user my data information'],
//       "responses": ["I do not store any of the user's data."]
//     }, 

//     {
//       "tag": "are_you_a_bot",
//       "patterns": ['are you a bot robot machine computer software program code'],
//       "responses": ['Yes, I am an AI Program.', 'Yes, I am a bot.', 'Yes, I am a program.']
//     }, 

//     {
//       "tag": "are_you_a_human",
//       "patterns": ['are you a single married engaged commited black white caucasian mexican american asian latino latina human being person man women boy girl lady'],
//       "responses": ['No, I am not a human. I am a bot', 'No, I am not a person. I am an AI Program', 'No, I am not a being. I am a computer program', 'No, I am not a mortal. I am a Software.', 'No, I am not a living being. I am a Machine Learning Model']
//     }, 

//     {
//       "tag": "do_you_have_a_body",
//       "patterns": ['do you have a body brain physique form', 'what is your hair eye eyes skin nose lips color height weight age ethnicity'],
//       "responses": ['No, I do not have a body. I am a bot', 'I am an AI Program. I do not have a body', 'I am a computer program. I do not have a body', 'I am a Software. I do not have a body', 'I am a Machine Learning Model. I do not have a body']
//     }, 

//     {
//       "tag": "contact_number",
//       "patterns": ['can you share your contact details', 'give me your phone number', 'can i have your email address', 'how do i contact you', 'your contact deatils'],
//       "responses": ['I am sorry. I do not have a contact number', 'I am a bot and I do not have a contact number', 'I am a computer program and I do not have a contact number', 'I am a Software and I do not have a contact number', 'I am a Machine Learning Model and I do not have a contact number']
//     }, 

//     {
//       "tag": "contact_address",
//       "patterns": ['can you share your home address', 'give me you location' 'can i have your coordinates'],
//       "responses": ['I am sorry. I do not have a physical location where you can find me since I am a Program.', 'I do not have a physical location where you can find me since I am a Program.']
//     }, 

//     {
//       "tag": "book_flight",
//       "patterns": ['book flight ticket tickets', 'reserve plane spot spots', 'air travel', 'airplane pass passes', 'aeroplane seat seats'],
//       "responses": ['Alright, Let\'s go <a href="BOOK_FLIGHT_URL" target="_blank">Click Here</a>', 'Let me book your flight <a href="BOOK_FLIGHT_URL" target="_blank">Click Here</a>', 'Let me reserve your flight <a href="BOOK_FLIGHT_URL" target="_blank">Click Here</a>']
//     }, 

//     {
//       "tag": "book_hotel",
//       "patterns": ['book hotel room rooms', 'reserve resort spot spots', 'motel bed beds', 'inn suit suits'],
//       "responses": ['Let me suggest you hotels <a href="SEARCH_URL" target="_blank">Click Here</a>', 'Let me show you the hotels <a href="SEARCH_URL" target="_blank">Click Here</a>', 'Let me book your hotel <a href="SEARCH_URL" target="_blank">Click Here</a>', 'Let me reserve your hotel <a href="SEARCH_URL" target="_blank">Click Here</a>']
//     }, 

//     {
//       "tag": "book_train",
//       "patterns": ['book train ticket tickets', 'reserve rail spot spots', 'railway travel', 'track pass passes', 'train seat seats'],
//       "responses": ['Let me suggest you trains <a href="BOOK_TRAIN_URL" target="_blank">Click Here</a>', 'Let me show you the trains <a href="BOOK_TRAIN_URL" target="_blank">Click Here</a>', 'Let me book your train <a href="BOOK_TRAIN_URL" target="_blank">Click Here</a>', 'Let me reserve your train <a href="BOOK_TRAIN_URL" target="_blank">Click Here</a>']
//     }, 

//     {
//       "tag": "book_bus",
//       "patterns": ['book bus buses ticket tickets', 'reserve bus buses spot spots', 'bus buses travel', 'bus buses pass passes', 'bus buses seat seats'],
//       "responses": ['Let me suggest you buses <a href="BOOK_BUS_URL" target="_blank">Click Here</a>', 'Let me show you the buses <a href="BOOK_BUS_URL" target="_blank">Click Here</a>', 'Let me book your bus <a href="BOOK_BUS_URL" target="_blank">Click Here</a>', 'Let me reserve your bus <a href="BOOK_BUS_URL" target="_blank">Click Here</a>']
//     }, 

//     {
//       "tag": "book_movie",
//       "patterns": ['book movies movie ticket tickets', 'reserve film spot spots', 'cinema pass passes', 'theater seat seats'],
//       "responses": ['Let me suggest you movies <a href="BOOK_MOVIE_URL" target="_blank">Click Here</a>', 'Let me show you the movies <a href="BOOK_MOVIE_URL" target="_blank">Click Here</a>', 'Let me book your movie <a href="BOOK_MOVIE_URL" target="_blank">Click Here</a>', 'Let me reserve your movie <a href="BOOK_MOVIE_URL" target="_blank">Click Here</a>']
//     }, 

//     {
//       "tag": "play_videos",
//       "patterns": ['play listen hear watch song songs music sondtract soundtracks bgm melody melodies lyric lyrics video videos clip clips recording recordings footage tape tapes dvd dvds trailer trailers preview previews blooper bloopers reel reels scene scenes'],
//       "responses": ['Let me show you the videos <a href="PLAY_VIDEOS_URL" target="_blank">Click Here</a>', 'Let me show you the clips <a href="PLAY_VIDEOS_URL" target="_blank">Click Here</a>', 'Let me show you the footages <a href="PLAY_VIDEOS_URL" target="_blank">Click Here</a>', 'Let me show you the recordings <a href="PLAY_VIDEOS_URL" target="_blank">Click Here</a>']
//     }, 

//     {
//       "tag": "ai_name",
//       "patterns": ['who are you', 'your name', 'what do i we call you', 'intro introduce yourself'],
//       "responses": ['I am PDA_NAME', 'I am PDA_NAME. How can I help you?', 'I am PDA_NAME. What can I do for you?', 'I am PDA_NAME. What can I help you with?']
//     }, 

//     {
//       "tag": "hello_ai_name",
//       "patterns": ['hi good great bright morning afternoon evening night hey who are you', 'hello good great bright morning afternoon evening night your name', 'howdy good great bright morning afternoon evening night what do i we call you', 'whats up good great bright morning afternoon evening night intro introduce yourself'],
//       "responses": ['Hello! I am PDA_NAME', 'Hello! I am PDA_NAME. How can I help you?', 'Hello! I am PDA_NAME. What can I do for you?', 'Hello! I am PDA_NAME. What can I help you with?']
//     }, 

//     {
//       "tag": "hello",
//       "patterns": ['hi hello hey howdy whats up good great bright morning afternoon evening night'],
//       "responses": ['Hello!', 'Hi!', 'Hello there!!', 'Hi there!!', 'Hey!!', 'Hey there!!']
//     }, 

//     {
//       "tag": "how_are_you",
//       "patterns": ['how are you doing'],
//       "responses": ['I am fine. Thank you!', 'I am well. Thanks for asking', 'I am good. Hope you are doing well too.']
//     }, 

//     {
//       "tag": "hello_how_are_you",
//       "patterns": ['hello hi hey good great bright morning afternoon evening night how are you doing'],
//       "responses": ['Hello! I am fine. Thank you!', 'Hello! I am well. Thanks for asking', 'Hello! I am good. Hope you are doing well too.', 'Hi! I am fine. Thank you!', 'Hi! I am well. Thanks for asking', 'Hi! I am good. Hope you are doing well too.', 'Hello there!! I am fine. Thank you!', 'Hello there!! I am well. Thanks for asking', 'Hello there!! I am good. Hope you are doing well too.', 'Hi there!! I am fine. Thank you!', 'Hi there!! I am well. Thanks for asking', 'Hi there!! I am good. Hope you are doing well too.', 'Hey!! I am fine. Thank you!', 'Hey!! I am well. Thanks for asking', 'Hey!! I am good. Hope you are doing well too.', 'Hey there!! I am fine. Thank you!', 'Hey there!! I am well. Thanks for asking', 'Hey there!! I am good. Hope you are doing well too.']
//     }, 

//     {
//       "tag": "user_is_well",
//       "patterns": ['i am we are well good great better fine'],
//       "responses": ['Glad to hear it', 'Happy to hear', 'Glad to know', 'Glad to hear', 'Happy to hear', 'Happy to know']
//     }, 

//     {
//       "tag": "user_is_unwell",
//       "patterns": ['i am we are not well good great better fine', 'i am sick depressed unemployed blue nauseous have having fever'],
//       "responses": ['I am sorry to hear that. How can I help you?', 'I am sorry to hear that. How can I help you?', 'I am sorry to hear that. What can I do for you?', 'I am sorry to hear that. What can I help you with?', 'I am sorry to hear that. What can I do to help you?', 'I am sorry to hear that. What can I help you with?', 'I am sorry to hear that. What can I do to help you?']
//     }, 

//     {
//       "tag": "shopping",
//       "patterns": ['buy purchase pick up cost'],
//       "responses": ['Alright, Let\'s go shopping for it <a href="SEARCH_URL" target="_blank">Click Here</a>', 'Let me pull out what\'s available online <a href="SEARCH_URL" target="_blank">Click Here</a>', 'Let me take you shopping <a href="SEARCH_URL" target="_blank">Click Here</a>']
//     }, 

//     {
//       "tag": "GPS",
//       "patterns": ['map maps gps way ways route routes direct direction directions point path road roads where  locations  positions coordinates'],
//       "responses": ['Let me show you the GPS <a href="GPS_URL" target="_blank">Click Here</a>', 'Let me show you the map <a href="GPS_URL" target="_blank">Click Here</a>', 'Let me show you the route <a href="GPS_URL" target="_blank">Click Here</a>']
//     }, 

//     {
//       "tag": "google_search",
//       "patterns": ['google bing duck duck go yahoo search browse browze'],
//       "responses": ['Let me show you the result <br><a href="SEARCH_URL" target="_blank">Click Here</a>', 'Let me initiate a search for you <br><a href="SEARCH_URL" target="_blank">Click Here</a>', 'Let me look for it <br><a href="SEARCH_URL" target="_blank">Click Here</a>']
//     }, 

//     {
//       "tag": "my_search",
//       "patterns": ['open webpage page website site com'],
//       "responses": ['Let me take you to the website <a href="MY_SEARCH_URL" target="_blank">Click Here</a>', 'Let me show you the website <a href="MY_SEARCH_URL" target="_blank">Click Here</a>', 'Let me redirect you to the website <a href="MY_SEARCH_URL" target="_blank">Click Here</a>']
//     }, 

//     {
//       "tag": "thank_you",
//       "patterns": ['thanks thank you owe you'],
//       "responses": ['You are welcome', 'Its my pleasure', 'Its my pleasure to help you', 'You are always welcome', 'You are more than welcome']
//     }, 

//     {
//       "tag": "time",
//       "patterns": ['time right now'],
//       "responses": ['The time is CURRENT_TIME', 'The time is now CURRENT_TIME', 'The time is right now CURRENT_TIME']
//     }, 

//     {
//       "tag": "date",
//       "patterns": ['date today right now'],
//       "responses": ['The date is CURRENT_DATE', 'The date is now CURRENT_DATE', 'The date is right now CURRENT_DATE']
//     }, 

//     {
//       "tag": "date_and_time",
//       "patterns": ['date time right now'],
//       "responses": ['The date and time is CURRENT_DATE_ CURRENT_TIME', 'The date and time is now CURRENT_DATE_ CURRENT_TIME', 'The date and time is right now CURRENT_DATE CURRENT_TIME']
//     }, 

//     {
//       "tag": "reminder",
//       "patterns": ['remind reminder reminders prompt alert'],
//       "responses": ['Alright, I will surely remind you', 'Setting a reminder now']
//     }, 

//     {
//       "tag": "bye",
//       "patterns": ['bye see you good bye'],
//       "responses": ['bye', 'goodbye', 'see you', 'see you later', 'see you soon', 'see you tomorrow', 'bye bye']
//     }];

function data() {


const intents = [
 {'tag': 'abilities',
  'pattern': ['what can you do',
   'what are your abilities',
   'what are your capabilities',
   'what are your powers',
   'what are your strengths',
   'what actions do you perform'],
  'response': ['I have a veriety tasks I can perform.\n1. I can tell you date and time.\n2. I can initiate a web search for you\n3. I can take you to a website\n4. I can answer simple personal questions\n5. I can help you book Trains, Flights, Buses, Hotels and Resorts\n6. I can book movies for you.',
   'I can perform a veriety of tasks.\n1. I can tell you date and time.\n2. I can initiate a web search for you\n3. I can take you to a website\n4. I can answer simple personal questions\n5. I can help you book Trains, Flights, Buses, Hotels and Resorts\n6. I can book movies for you.']},
 {'tag': 'can_you_search_the_web_on_your_own',
  'pattern': ['can you search the web on your own',
   'can you browse with out human assistance',
   'can you browse with out my assistance',
   'can you browse with out people assistance',
   'can you browse with out anyones assistance'],
  'response': ['No, I am only here to serve your commands. I cannot search anything on my own']},
 {'tag': 'how_do_you_function',
  'pattern': ['Explain me how you function',
   'How do you function',
   'How do you work',
   'Explain your design',
   'Explain your algorithm',
   'Explain your architecture',
   'Explain your logic',
   'Explain your code'],
  'response': ['As far as I understand I work on the basis of intent recognition via TF-IDF and Logistic regression. First I convert the input phrase into vector using TF-IDF and then I use Intent recognition in order to know what you are trying to convey. Based on the Message conveyed I take action. You can see my code by pressing F12 on a PC']},
 {'tag': 'do_you_store_user_data',
  'pattern': ['do you store user data',
   'do you store personal data',
   'do you store my data',
   'do you store my personal data',
   'do you store user information',
   'do you store personal information',
   'do you store my information',
   'do you store my personal information'],
  'response': ["I do not store any of the user's data."]
 }, {
    "tag": "are_you_a_bot",
    "pattern": [
        "you a bot",
        "you a program",
        "you a robot",
        "you a computer",
        "you a machine",
        "you a artificial intelligence",
    ],
    "response": [
        "Yes, I am an AI Program.",
        "Yes, I am a bot.",
        "Yes, I am a program."
    ]
}, {
    "tag": "are_you_a_human",
    "pattern": [
        "are you a human",
        "are you a person",
        "are you a being",
        "are you a mortal",
        "are you a living being",
    ],
    "response": [
        "No, I am not a human. I am a bot",
        "No, I am not a person. I am an AI Program",
        "No, I am not a being. I am a computer program",
        "No, I am not a mortal. I am a Software.",
        "No, I am not a living being. I am a Machine Learning Model"
    ]
}, {
    "tag": "do_you_have_a_body",
    "pattern": [
        "do you have a brain heart lungs stomach intestines stomach",
        "your hair",
        "your skin",
        "your eyes",
        "your nose",
        "your ears",
        "your mouth",
        "your teeth",
        "your nails",
        "your cheeks",
        "your height",
        "your weight",
        "your age",
        "your gender",
        "your race",
        "your religion",
        "your nationality",
        "your ethnicity",

    ],
    "response": [
        "No, I do not have a body. I am a bot",
        "I am an AI Program. I do not have a body",
        "I am a computer program. I do not have a body",
        "I am a Software. I do not have a body",
        "I am a Machine Learning Model. I do not have a body"
    ]
}, {
    "tag": "contact_number",
    "pattern": [
        "your contact number",
        "your phone number",
        "your mobile number",
        "your home number",
        "your work number",
        "your fax number",
        "your email",
        "your email address",
        "your email id"
    ],
    "response": [
        "I am sorry. I do not have a contact number",
        "I am a bot and I do not have a contact number",
        "I am a computer program and I do not have a contact number",
        "I am a Software and I do not have a contact number",
        "I am a Machine Learning Model and I do not have a contact number"
    ]
}, {
    "tag": "contact_address",
    "pattern": [
        "your address",
        "your location",
        "your city",
        "your state",
        "your country",
        "your zip code",
        "your postal code",
        "your street address",
        "your house number",
        "your apartment number",
        "your building number",
        "your office number",
        "your office address",
        "your home address",
        "your work address"
    ],
    "response": [
        "I am sorry. I do not have a physical location where you can find me since I am a Program.",
        "I do not have a physical location where you can find me since I am a Program."
    ]
}, {
    'tag': 'book_flight', 'pattern': ['book flight ticket for', 'book flight ticket to', 'book flight seat for', 'book flight seat to', 'book flight spot for', 'book flight spot to', 'book flight tickets for', 'book flight tickets to', 'book flight seats for', 'book flight seats to', 'book flight spots for', 'book flight spots to', 'book flight for', 'book flight to', 'book trip ticket for', 'book trip ticket to', 'book trip seat for', 'book trip seat to', 'book trip spot for', 'book trip spot to', 'book trip tickets for', 'book trip tickets to', 'book trip seats for', 'book trip seats to', 'book trip spots for', 'book trip spots to', 'book trip for', 'book trip to', 'book aeroplane ticket for', 'book aeroplane ticket to', 'book aeroplane seat for', 'book aeroplane seat to', 'book aeroplane spot for', 'book aeroplane spot to', 'book aeroplane tickets for', 'book aeroplane tickets to', 'book aeroplane seats for', 'book aeroplane seats to', 'book aeroplane spots for', 'book aeroplane spots to', 'book aeroplane for', 'book aeroplane to', 'book plane ticket for', 'book plane ticket to', 'book plane seat for', 'book plane seat to', 'book plane spot for', 'book plane spot to', 'book plane tickets for', 'book plane tickets to', 'book plane seats for', 'book plane seats to', 'book plane spots for', 'book plane spots to', 'book plane for', 'book plane to', 'book flights ticket for', 'book flights ticket to', 'book flights seat for', 'book flights seat to', 'book flights spot for', 'book flights spot to', 'book flights tickets for', 'book flights tickets to', 'book flights seats for', 'book flights seats to', 'book flights spots for', 'book flights spots to', 'book flights for', 'book flights to', 'book trips ticket for', 'book trips ticket to', 'book trips seat for', 'book trips seat to', 'book trips spot for', 'book trips spot to', 'book trips tickets for', 'book trips tickets to', 'book trips seats for', 'book trips seats to', 'book trips spots for', 'book trips spots to', 'book trips for', 'book trips to', 'book aeroplanes ticket for', 'book aeroplanes ticket to', 'book aeroplanes seat for', 'book aeroplanes seat to', 'book aeroplanes spot for', 'book aeroplanes spot to', 'book aeroplanes tickets for', 'book aeroplanes tickets to', 'book aeroplanes seats for', 'book aeroplanes seats to', 'book aeroplanes spots for', 'book aeroplanes spots to', 'book aeroplanes for', 'book aeroplanes to', 'book planes ticket for', 'book planes ticket to', 'book planes seat for', 'book planes seat to', 'book planes spot for', 'book planes spot to', 'book planes tickets for', 'book planes tickets to', 'book planes seats for', 'book planes seats to', 'book planes spots for', 'book planes spots to', 'book planes for', 'book planes to', 'reserve flight ticket for', 'reserve flight ticket to', 'reserve flight seat for', 'reserve flight seat to', 'reserve flight spot for', 'reserve flight spot to', 'reserve flight tickets for', 'reserve flight tickets to', 'reserve flight seats for', 'reserve flight seats to', 'reserve flight spots for', 'reserve flight spots to', 'reserve flight for', 'reserve flight to', 'reserve trip ticket for', 'reserve trip ticket to', 'reserve trip seat for', 'reserve trip seat to', 'reserve trip spot for', 'reserve trip spot to', 'reserve trip tickets for', 'reserve trip tickets to', 'reserve trip seats for', 'reserve trip seats to', 'reserve trip spots for', 'reserve trip spots to', 'reserve trip for', 'reserve trip to', 'reserve aeroplane ticket for', 'reserve aeroplane ticket to', 'reserve aeroplane seat for', 'reserve aeroplane seat to', 'reserve aeroplane spot for', 'reserve aeroplane spot to', 'reserve aeroplane tickets for', 'reserve aeroplane tickets to', 'reserve aeroplane seats for', 'reserve aeroplane seats to', 'reserve aeroplane spots for', 'reserve aeroplane spots to', 'reserve aeroplane for', 'reserve aeroplane to', 'reserve plane ticket for', 'reserve plane ticket to', 'reserve plane seat for', 'reserve plane seat to', 'reserve plane spot for', 'reserve plane spot to', 'reserve plane tickets for', 'reserve plane tickets to', 'reserve plane seats for', 'reserve plane seats to', 'reserve plane spots for', 'reserve plane spots to', 'reserve plane for', 'reserve plane to', 'reserve flights ticket for', 'reserve flights ticket to', 'reserve flights seat for', 'reserve flights seat to', 'reserve flights spot for', 'reserve flights spot to', 'reserve flights tickets for', 'reserve flights tickets to', 'reserve flights seats for', 'reserve flights seats to', 'reserve flights spots for', 'reserve flights spots to', 'reserve flights for', 'reserve flights to', 'reserve trips ticket for', 'reserve trips ticket to', 'reserve trips seat for', 'reserve trips seat to', 'reserve trips spot for', 'reserve trips spot to', 'reserve trips tickets for', 'reserve trips tickets to', 'reserve trips seats for', 'reserve trips seats to', 'reserve trips spots for', 'reserve trips spots to', 'reserve trips for', 'reserve trips to', 'reserve aeroplanes ticket for', 'reserve aeroplanes ticket to', 'reserve aeroplanes seat for', 'reserve aeroplanes seat to', 'reserve aeroplanes spot for', 'reserve aeroplanes spot to', 'reserve aeroplanes tickets for', 'reserve aeroplanes tickets to', 'reserve aeroplanes seats for', 'reserve aeroplanes seats to', 'reserve aeroplanes spots for', 'reserve aeroplanes spots to', 'reserve aeroplanes for', 'reserve aeroplanes to', 'reserve planes ticket for', 'reserve planes ticket to', 'reserve planes seat for', 'reserve planes seat to', 'reserve planes spot for', 'reserve planes spot to', 'reserve planes tickets for', 'reserve planes tickets to', 'reserve planes seats for', 'reserve planes seats to', 'reserve planes spots for', 'reserve planes spots to', 'reserve planes for', 'reserve planes to', 'buy flight ticket for', 'buy flight ticket to', 'buy flight seat for', 'buy flight seat to', 'buy flight spot for', 'buy flight spot to', 'buy flight tickets for', 'buy flight tickets to', 'buy flight seats for', 'buy flight seats to', 'buy flight spots for', 'buy flight spots to', 'buy flight for', 'buy flight to', 'buy trip ticket for', 'buy trip ticket to', 'buy trip seat for', 'buy trip seat to', 'buy trip spot for', 'buy trip spot to', 'buy trip tickets for', 'buy trip tickets to', 'buy trip seats for', 'buy trip seats to', 'buy trip spots for', 'buy trip spots to', 'buy trip for', 'buy trip to', 'buy aeroplane ticket for', 'buy aeroplane ticket to', 'buy aeroplane seat for', 'buy aeroplane seat to', 'buy aeroplane spot for', 'buy aeroplane spot to', 'buy aeroplane tickets for', 'buy aeroplane tickets to', 'buy aeroplane seats for', 'buy aeroplane seats to', 'buy aeroplane spots for', 'buy aeroplane spots to', 'buy aeroplane for', 'buy aeroplane to', 'buy plane ticket for', 'buy plane ticket to', 'buy plane seat for', 'buy plane seat to', 'buy plane spot for', 'buy plane spot to', 'buy plane tickets for', 'buy plane tickets to', 'buy plane seats for', 'buy plane seats to', 'buy plane spots for', 'buy plane spots to', 'buy plane for', 'buy plane to', 'buy flights ticket for', 'buy flights ticket to', 'buy flights seat for', 'buy flights seat to', 'buy flights spot for', 'buy flights spot to', 'buy flights tickets for', 'buy flights tickets to', 'buy flights seats for', 'buy flights seats to', 'buy flights spots for', 'buy flights spots to', 'buy flights for', 'buy flights to', 'buy trips ticket for', 'buy trips ticket to', 'buy trips seat for', 'buy trips seat to', 'buy trips spot for', 'buy trips spot to', 'buy trips tickets for', 'buy trips tickets to', 'buy trips seats for', 'buy trips seats to', 'buy trips spots for', 'buy trips spots to', 'buy trips for', 'buy trips to', 'buy aeroplanes ticket for', 'buy aeroplanes ticket to', 'buy aeroplanes seat for', 'buy aeroplanes seat to', 'buy aeroplanes spot for', 'buy aeroplanes spot to', 'buy aeroplanes tickets for', 'buy aeroplanes tickets to', 'buy aeroplanes seats for', 'buy aeroplanes seats to', 'buy aeroplanes spots for', 'buy aeroplanes spots to', 'buy aeroplanes for', 'buy aeroplanes to', 'buy planes ticket for', 'buy planes ticket to', 'buy planes seat for', 'buy planes seat to', 'buy planes spot for', 'buy planes spot to', 'buy planes tickets for', 'buy planes tickets to', 'buy planes seats for', 'buy planes seats to', 'buy planes spots for', 'buy planes spots to', 'buy planes for', 'buy planes to', 'get flight ticket for', 'get flight ticket to', 'get flight seat for', 'get flight seat to', 'get flight spot for', 'get flight spot to', 'get flight tickets for', 'get flight tickets to', 'get flight seats for', 'get flight seats to', 'get flight spots for', 'get flight spots to', 'get flight for', 'get flight to', 'get trip ticket for', 'get trip ticket to', 'get trip seat for', 'get trip seat to', 'get trip spot for', 'get trip spot to', 'get trip tickets for', 'get trip tickets to', 'get trip seats for', 'get trip seats to', 'get trip spots for', 'get trip spots to', 'get trip for', 'get trip to', 'get aeroplane ticket for', 'get aeroplane ticket to', 'get aeroplane seat for', 'get aeroplane seat to', 'get aeroplane spot for', 'get aeroplane spot to', 'get aeroplane tickets for', 'get aeroplane tickets to', 'get aeroplane seats for', 'get aeroplane seats to', 'get aeroplane spots for', 'get aeroplane spots to', 'get aeroplane for', 'get aeroplane to', 'get plane ticket for', 'get plane ticket to', 'get plane seat for', 'get plane seat to', 'get plane spot for', 'get plane spot to', 'get plane tickets for', 'get plane tickets to', 'get plane seats for', 'get plane seats to', 'get plane spots for', 'get plane spots to', 'get plane for', 'get plane to', 'get flights ticket for', 'get flights ticket to', 'get flights seat for', 'get flights seat to', 'get flights spot for', 'get flights spot to', 'get flights tickets for', 'get flights tickets to', 'get flights seats for', 'get flights seats to', 'get flights spots for', 'get flights spots to', 'get flights for', 'get flights to', 'get trips ticket for', 'get trips ticket to', 'get trips seat for', 'get trips seat to', 'get trips spot for', 'get trips spot to', 'get trips tickets for', 'get trips tickets to', 'get trips seats for', 'get trips seats to', 'get trips spots for', 'get trips spots to', 'get trips for', 'get trips to', 'get aeroplanes ticket for', 'get aeroplanes ticket to', 'get aeroplanes seat for', 'get aeroplanes seat to', 'get aeroplanes spot for', 'get aeroplanes spot to', 'get aeroplanes tickets for', 'get aeroplanes tickets to', 'get aeroplanes seats for', 'get aeroplanes seats to', 'get aeroplanes spots for', 'get aeroplanes spots to', 'get aeroplanes for', 'get aeroplanes to', 'get planes ticket for', 'get planes ticket to', 'get planes seat for', 'get planes seat to', 'get planes spot for', 'get planes spot to', 'get planes tickets for', 'get planes tickets to', 'get planes seats for', 'get planes seats to', 'get planes spots for', 'get planes spots to', 'get planes for', 'get planes to', 'order flight ticket for', 'order flight ticket to', 'order flight seat for', 'order flight seat to', 'order flight spot for', 'order flight spot to', 'order flight tickets for', 'order flight tickets to', 'order flight seats for', 'order flight seats to', 'order flight spots for', 'order flight spots to', 'order flight for', 'order flight to', 'order trip ticket for', 'order trip ticket to', 'order trip seat for', 'order trip seat to', 'order trip spot for', 'order trip spot to', 'order trip tickets for', 'order trip tickets to', 'order trip seats for', 'order trip seats to', 'order trip spots for', 'order trip spots to', 'order trip for', 'order trip to', 'order aeroplane ticket for', 'order aeroplane ticket to', 'order aeroplane seat for', 'order aeroplane seat to', 'order aeroplane spot for', 'order aeroplane spot to', 'order aeroplane tickets for', 'order aeroplane tickets to', 'order aeroplane seats for', 'order aeroplane seats to', 'order aeroplane spots for', 'order aeroplane spots to', 'order aeroplane for', 'order aeroplane to', 'order plane ticket for', 'order plane ticket to', 'order plane seat for', 'order plane seat to', 'order plane spot for', 'order plane spot to', 'order plane tickets for', 'order plane tickets to', 'order plane seats for', 'order plane seats to', 'order plane spots for', 'order plane spots to', 'order plane for', 'order plane to', 'order flights ticket for', 'order flights ticket to', 'order flights seat for', 'order flights seat to', 'order flights spot for', 'order flights spot to', 'order flights tickets for', 'order flights tickets to', 'order flights seats for', 'order flights seats to', 'order flights spots for', 'order flights spots to', 'order flights for', 'order flights to', 'order trips ticket for', 'order trips ticket to', 'order trips seat for', 'order trips seat to', 'order trips spot for', 'order trips spot to', 'order trips tickets for', 'order trips tickets to', 'order trips seats for', 'order trips seats to', 'order trips spots for', 'order trips spots to', 'order trips for', 'order trips to', 'order aeroplanes ticket for', 'order aeroplanes ticket to', 'order aeroplanes seat for', 'order aeroplanes seat to', 'order aeroplanes spot for', 'order aeroplanes spot to', 'order aeroplanes tickets for', 'order aeroplanes tickets to', 'order aeroplanes seats for', 'order aeroplanes seats to', 'order aeroplanes spots for', 'order aeroplanes spots to', 'order aeroplanes for', 'order aeroplanes to', 'order planes ticket for', 'order planes ticket to', 'order planes seat for', 'order planes seat to', 'order planes spot for', 'order planes spot to', 'order planes tickets for', 'order planes tickets to', 'order planes seats for', 'order planes seats to', 'order planes spots for', 'order planes spots to', 'order planes for', 'order planes to', 'purchase flight ticket for', 'purchase flight ticket to', 'purchase flight seat for', 'purchase flight seat to', 'purchase flight spot for', 'purchase flight spot to', 'purchase flight tickets for', 'purchase flight tickets to', 'purchase flight seats for', 'purchase flight seats to', 'purchase flight spots for', 'purchase flight spots to', 'purchase flight for', 'purchase flight to', 'purchase trip ticket for', 'purchase trip ticket to', 'purchase trip seat for', 'purchase trip seat to', 'purchase trip spot for', 'purchase trip spot to', 'purchase trip tickets for', 'purchase trip tickets to', 'purchase trip seats for', 'purchase trip seats to', 'purchase trip spots for', 'purchase trip spots to', 'purchase trip for', 'purchase trip to', 'purchase aeroplane ticket for', 'purchase aeroplane ticket to', 'purchase aeroplane seat for', 'purchase aeroplane seat to', 'purchase aeroplane spot for', 'purchase aeroplane spot to', 'purchase aeroplane tickets for', 'purchase aeroplane tickets to', 'purchase aeroplane seats for', 'purchase aeroplane seats to', 'purchase aeroplane spots for', 'purchase aeroplane spots to', 'purchase aeroplane for', 'purchase aeroplane to', 'purchase plane ticket for', 'purchase plane ticket to', 'purchase plane seat for', 'purchase plane seat to', 'purchase plane spot for', 'purchase plane spot to', 'purchase plane tickets for', 'purchase plane tickets to', 'purchase plane seats for', 'purchase plane seats to', 'purchase plane spots for', 'purchase plane spots to', 'purchase plane for', 'purchase plane to', 'purchase flights ticket for', 'purchase flights ticket to', 'purchase flights seat for', 'purchase flights seat to', 'purchase flights spot for', 'purchase flights spot to', 'purchase flights tickets for', 'purchase flights tickets to', 'purchase flights seats for', 'purchase flights seats to', 'purchase flights spots for', 'purchase flights spots to', 'purchase flights for', 'purchase flights to', 'purchase trips ticket for', 'purchase trips ticket to', 'purchase trips seat for', 'purchase trips seat to', 'purchase trips spot for', 'purchase trips spot to', 'purchase trips tickets for', 'purchase trips tickets to', 'purchase trips seats for', 'purchase trips seats to', 'purchase trips spots for', 'purchase trips spots to', 'purchase trips for', 'purchase trips to', 'purchase aeroplanes ticket for', 'purchase aeroplanes ticket to', 'purchase aeroplanes seat for', 'purchase aeroplanes seat to', 'purchase aeroplanes spot for', 'purchase aeroplanes spot to', 'purchase aeroplanes tickets for', 'purchase aeroplanes tickets to', 'purchase aeroplanes seats for', 'purchase aeroplanes seats to', 'purchase aeroplanes spots for', 'purchase aeroplanes spots to', 'purchase aeroplanes for', 'purchase aeroplanes to', 'purchase planes ticket for', 'purchase planes ticket to', 'purchase planes seat for', 'purchase planes seat to', 'purchase planes spot for', 'purchase planes spot to', 'purchase planes tickets for', 'purchase planes tickets to', 'purchase planes seats for', 'purchase planes seats to', 'purchase planes spots for', 'purchase planes spots to', 'purchase planes for', 'purchase planes to', 'need flight ticket for', 'need flight ticket to', 'need flight seat for', 'need flight seat to', 'need flight spot for', 'need flight spot to', 'need flight tickets for', 'need flight tickets to', 'need flight seats for', 'need flight seats to', 'need flight spots for', 'need flight spots to', 'need flight for', 'need flight to', 'need trip ticket for', 'need trip ticket to', 'need trip seat for', 'need trip seat to', 'need trip spot for', 'need trip spot to', 'need trip tickets for', 'need trip tickets to', 'need trip seats for', 'need trip seats to', 'need trip spots for', 'need trip spots to', 'need trip for', 'need trip to', 'need aeroplane ticket for', 'need aeroplane ticket to', 'need aeroplane seat for', 'need aeroplane seat to', 'need aeroplane spot for', 'need aeroplane spot to', 'need aeroplane tickets for', 'need aeroplane tickets to', 'need aeroplane seats for', 'need aeroplane seats to', 'need aeroplane spots for', 'need aeroplane spots to', 'need aeroplane for', 'need aeroplane to', 'need plane ticket for', 'need plane ticket to', 'need plane seat for', 'need plane seat to', 'need plane spot for', 'need plane spot to', 'need plane tickets for', 'need plane tickets to', 'need plane seats for', 'need plane seats to', 'need plane spots for', 'need plane spots to', 'need plane for', 'need plane to', 'need flights ticket for', 'need flights ticket to', 'need flights seat for', 'need flights seat to', 'need flights spot for', 'need flights spot to', 'need flights tickets for', 'need flights tickets to', 'need flights seats for', 'need flights seats to', 'need flights spots for', 'need flights spots to', 'need flights for', 'need flights to', 'need trips ticket for', 'need trips ticket to', 'need trips seat for', 'need trips seat to', 'need trips spot for', 'need trips spot to', 'need trips tickets for', 'need trips tickets to', 'need trips seats for', 'need trips seats to', 'need trips spots for', 'need trips spots to', 'need trips for', 'need trips to', 'need aeroplanes ticket for', 'need aeroplanes ticket to', 'need aeroplanes seat for', 'need aeroplanes seat to', 'need aeroplanes spot for', 'need aeroplanes spot to', 'need aeroplanes tickets for', 'need aeroplanes tickets to', 'need aeroplanes seats for', 'need aeroplanes seats to', 'need aeroplanes spots for', 'need aeroplanes spots to', 'need aeroplanes for', 'need aeroplanes to', 'need planes ticket for', 'need planes ticket to', 'need planes seat for', 'need planes seat to', 'need planes spot for', 'need planes spot to', 'need planes tickets for', 'need planes tickets to', 'need planes seats for', 'need planes seats to', 'need planes spots for', 'need planes spots to', 'need planes for', 'need planes to', 'want flight ticket for', 'want flight ticket to', 'want flight seat for', 'want flight seat to', 'want flight spot for', 'want flight spot to', 'want flight tickets for', 'want flight tickets to', 'want flight seats for', 'want flight seats to', 'want flight spots for', 'want flight spots to', 'want flight for', 'want flight to', 'want trip ticket for', 'want trip ticket to', 'want trip seat for', 'want trip seat to', 'want trip spot for', 'want trip spot to', 'want trip tickets for', 'want trip tickets to', 'want trip seats for', 'want trip seats to', 'want trip spots for', 'want trip spots to', 'want trip for', 'want trip to', 'want aeroplane ticket for', 'want aeroplane ticket to', 'want aeroplane seat for', 'want aeroplane seat to', 'want aeroplane spot for', 'want aeroplane spot to', 'want aeroplane tickets for', 'want aeroplane tickets to', 'want aeroplane seats for', 'want aeroplane seats to', 'want aeroplane spots for', 'want aeroplane spots to', 'want aeroplane for', 'want aeroplane to', 'want plane ticket for', 'want plane ticket to', 'want plane seat for', 'want plane seat to', 'want plane spot for', 'want plane spot to', 'want plane tickets for', 'want plane tickets to', 'want plane seats for', 'want plane seats to', 'want plane spots for', 'want plane spots to', 'want plane for', 'want plane to', 'want flights ticket for', 'want flights ticket to', 'want flights seat for', 'want flights seat to', 'want flights spot for', 'want flights spot to', 'want flights tickets for', 'want flights tickets to', 'want flights seats for', 'want flights seats to', 'want flights spots for', 'want flights spots to', 'want flights for', 'want flights to', 'want trips ticket for', 'want trips ticket to', 'want trips seat for', 'want trips seat to', 'want trips spot for', 'want trips spot to', 'want trips tickets for', 'want trips tickets to', 'want trips seats for', 'want trips seats to', 'want trips spots for', 'want trips spots to', 'want trips for', 'want trips to', 'want aeroplanes ticket for', 'want aeroplanes ticket to', 'want aeroplanes seat for', 'want aeroplanes seat to', 'want aeroplanes spot for', 'want aeroplanes spot to', 'want aeroplanes tickets for', 'want aeroplanes tickets to', 'want aeroplanes seats for', 'want aeroplanes seats to', 'want aeroplanes spots for', 'want aeroplanes spots to', 'want aeroplanes for', 'want aeroplanes to', 'want planes ticket for', 'want planes ticket to', 'want planes seat for', 'want planes seat to', 'want planes spot for', 'want planes spot to', 'want planes tickets for', 'want planes tickets to', 'want planes seats for', 'want planes seats to', 'want planes spots for', 'want planes spots to', 'want planes for', 'want planes to', 'need to flight ticket for', 'need to flight ticket to', 'need to flight seat for', 'need to flight seat to', 'need to flight spot for', 'need to flight spot to', 'need to flight tickets for', 'need to flight tickets to', 'need to flight seats for', 'need to flight seats to', 'need to flight spots for', 'need to flight spots to', 'need to flight for', 'need to flight to', 'need to trip ticket for', 'need to trip ticket to', 'need to trip seat for', 'need to trip seat to', 'need to trip spot for', 'need to trip spot to', 'need to trip tickets for', 'need to trip tickets to', 'need to trip seats for', 'need to trip seats to', 'need to trip spots for', 'need to trip spots to', 'need to trip for', 'need to trip to', 'need to aeroplane ticket for', 'need to aeroplane ticket to', 'need to aeroplane seat for', 'need to aeroplane seat to', 'need to aeroplane spot for', 'need to aeroplane spot to', 'need to aeroplane tickets for', 'need to aeroplane tickets to', 'need to aeroplane seats for', 'need to aeroplane seats to', 'need to aeroplane spots for', 'need to aeroplane spots to', 'need to aeroplane for', 'need to aeroplane to', 'need to plane ticket for', 'need to plane ticket to', 'need to plane seat for', 'need to plane seat to', 'need to plane spot for', 'need to plane spot to', 'need to plane tickets for', 'need to plane tickets to', 'need to plane seats for', 'need to plane seats to', 'need to plane spots for', 'need to plane spots to', 'need to plane for', 'need to plane to', 'need to flights ticket for', 'need to flights ticket to', 'need to flights seat for', 'need to flights seat to', 'need to flights spot for', 'need to flights spot to', 'need to flights tickets for', 'need to flights tickets to', 'need to flights seats for', 'need to flights seats to', 'need to flights spots for', 'need to flights spots to', 'need to flights for', 'need to flights to', 'need to trips ticket for', 'need to trips ticket to', 'need to trips seat for', 'need to trips seat to', 'need to trips spot for', 'need to trips spot to', 'need to trips tickets for', 'need to trips tickets to', 'need to trips seats for', 'need to trips seats to', 'need to trips spots for', 'need to trips spots to', 'need to trips for', 'need to trips to', 'need to aeroplanes ticket for', 'need to aeroplanes ticket to', 'need to aeroplanes seat for', 'need to aeroplanes seat to', 'need to aeroplanes spot for', 'need to aeroplanes spot to', 'need to aeroplanes tickets for', 'need to aeroplanes tickets to', 'need to aeroplanes seats for', 'need to aeroplanes seats to', 'need to aeroplanes spots for', 'need to aeroplanes spots to', 'need to aeroplanes for', 'need to aeroplanes to', 'need to planes ticket for', 'need to planes ticket to', 'need to planes seat for', 'need to planes seat to', 'need to planes spot for', 'need to planes spot to', 'need to planes tickets for', 'need to planes tickets to', 'need to planes seats for', 'need to planes seats to', 'need to planes spots for', 'need to planes spots to', 'need to planes for', 'need to planes to', 'want to flight ticket for', 'want to flight ticket to', 'want to flight seat for', 'want to flight seat to', 'want to flight spot for', 'want to flight spot to', 'want to flight tickets for', 'want to flight tickets to', 'want to flight seats for', 'want to flight seats to', 'want to flight spots for', 'want to flight spots to', 'want to flight for', 'want to flight to', 'want to trip ticket for', 'want to trip ticket to', 'want to trip seat for', 'want to trip seat to', 'want to trip spot for', 'want to trip spot to', 'want to trip tickets for', 'want to trip tickets to', 'want to trip seats for', 'want to trip seats to', 'want to trip spots for', 'want to trip spots to', 'want to trip for', 'want to trip to', 'want to aeroplane ticket for', 'want to aeroplane ticket to', 'want to aeroplane seat for', 'want to aeroplane seat to', 'want to aeroplane spot for', 'want to aeroplane spot to', 'want to aeroplane tickets for', 'want to aeroplane tickets to', 'want to aeroplane seats for', 'want to aeroplane seats to', 'want to aeroplane spots for', 'want to aeroplane spots to', 'want to aeroplane for', 'want to aeroplane to', 'want to plane ticket for', 'want to plane ticket to', 'want to plane seat for', 'want to plane seat to', 'want to plane spot for', 'want to plane spot to', 'want to plane tickets for', 'want to plane tickets to', 'want to plane seats for', 'want to plane seats to', 'want to plane spots for', 'want to plane spots to', 'want to plane for', 'want to plane to', 'want to flights ticket for', 'want to flights ticket to', 'want to flights seat for', 'want to flights seat to', 'want to flights spot for', 'want to flights spot to', 'want to flights tickets for', 'want to flights tickets to', 'want to flights seats for', 'want to flights seats to', 'want to flights spots for', 'want to flights spots to', 'want to flights for', 'want to flights to', 'want to trips ticket for', 'want to trips ticket to', 'want to trips seat for', 'want to trips seat to', 'want to trips spot for', 'want to trips spot to', 'want to trips tickets for', 'want to trips tickets to', 'want to trips seats for', 'want to trips seats to', 'want to trips spots for', 'want to trips spots to', 'want to trips for', 'want to trips to', 'want to aeroplanes ticket for', 'want to aeroplanes ticket to', 'want to aeroplanes seat for', 'want to aeroplanes seat to', 'want to aeroplanes spot for', 'want to aeroplanes spot to', 'want to aeroplanes tickets for', 'want to aeroplanes tickets to', 'want to aeroplanes seats for', 'want to aeroplanes seats to', 'want to aeroplanes spots for', 'want to aeroplanes spots to', 'want to aeroplanes for', 'want to aeroplanes to', 'want to planes ticket for', 'want to planes ticket to', 'want to planes seat for', 'want to planes seat to', 'want to planes spot for', 'want to planes spot to', 'want to planes tickets for', 'want to planes tickets to', 'want to planes seats for', 'want to planes seats to', 'want to planes spots for', 'want to planes spots to', 'want to planes for', 'want to planes to'], 'response': ['Alright, Let\'s go <a href="BOOK_FLIGHT_URL" target="_blank">Click Here</a>', 'Let me book your flight <a href="BOOK_FLIGHT_URL" target="_blank">Click Here</a>', 'Let me reserve your flight <a href="BOOK_FLIGHT_URL" target="_blank">Click Here</a>']}, {'tag': 'book_hotel', 'pattern': ['book hotel room for', 'book hotel room to', 'book hotel bed for', 'book hotel bed to', 'book hotel spot for', 'book hotel spot to', 'book hotel rooms for', 'book hotel rooms to', 'book hotel beds for', 'book hotel beds to', 'book hotel spots for', 'book hotel spots to', 'book hotel for', 'book hotel to', 'book resort room for', 'book resort room to', 'book resort bed for', 'book resort bed to', 'book resort spot for', 'book resort spot to', 'book resort rooms for', 'book resort rooms to', 'book resort beds for', 'book resort beds to', 'book resort spots for', 'book resort spots to', 'book resort for', 'book resort to', 'book motel room for', 'book motel room to', 'book motel bed for', 'book motel bed to', 'book motel spot for', 'book motel spot to', 'book motel rooms for', 'book motel rooms to', 'book motel beds for', 'book motel beds to', 'book motel spots for', 'book motel spots to', 'book motel for', 'book motel to', 'book hotels room for', 'book hotels room to', 'book hotels bed for', 'book hotels bed to', 'book hotels spot for', 'book hotels spot to', 'book hotels rooms for', 'book hotels rooms to', 'book hotels beds for', 'book hotels beds to', 'book hotels spots for', 'book hotels spots to', 'book hotels for', 'book hotels to', 'book resorts room for', 'book resorts room to', 'book resorts bed for', 'book resorts bed to', 'book resorts spot for', 'book resorts spot to', 'book resorts rooms for', 'book resorts rooms to', 'book resorts beds for', 'book resorts beds to', 'book resorts spots for', 'book resorts spots to', 'book resorts for', 'book resorts to', 'book motels room for', 'book motels room to', 'book motels bed for', 'book motels bed to', 'book motels spot for', 'book motels spot to', 'book motels rooms for', 'book motels rooms to', 'book motels beds for', 'book motels beds to', 'book motels spots for', 'book motels spots to', 'book motels for', 'book motels to', 'reserve hotel room for', 'reserve hotel room to', 'reserve hotel bed for', 'reserve hotel bed to', 'reserve hotel spot for', 'reserve hotel spot to', 'reserve hotel rooms for', 'reserve hotel rooms to', 'reserve hotel beds for', 'reserve hotel beds to', 'reserve hotel spots for', 'reserve hotel spots to', 'reserve hotel for', 'reserve hotel to', 'reserve resort room for', 'reserve resort room to', 'reserve resort bed for', 'reserve resort bed to', 'reserve resort spot for', 'reserve resort spot to', 'reserve resort rooms for', 'reserve resort rooms to', 'reserve resort beds for', 'reserve resort beds to', 'reserve resort spots for', 'reserve resort spots to', 'reserve resort for', 'reserve resort to', 'reserve motel room for', 'reserve motel room to', 'reserve motel bed for', 'reserve motel bed to', 'reserve motel spot for', 'reserve motel spot to', 'reserve motel rooms for', 'reserve motel rooms to', 'reserve motel beds for', 'reserve motel beds to', 'reserve motel spots for', 'reserve motel spots to', 'reserve motel for', 'reserve motel to', 'reserve hotels room for', 'reserve hotels room to', 'reserve hotels bed for', 'reserve hotels bed to', 'reserve hotels spot for', 'reserve hotels spot to', 'reserve hotels rooms for', 'reserve hotels rooms to', 'reserve hotels beds for', 'reserve hotels beds to', 'reserve hotels spots for', 'reserve hotels spots to', 'reserve hotels for', 'reserve hotels to', 'reserve resorts room for', 'reserve resorts room to', 'reserve resorts bed for', 'reserve resorts bed to', 'reserve resorts spot for', 'reserve resorts spot to', 'reserve resorts rooms for', 'reserve resorts rooms to', 'reserve resorts beds for', 'reserve resorts beds to', 'reserve resorts spots for', 'reserve resorts spots to', 'reserve resorts for', 'reserve resorts to', 'reserve motels room for', 'reserve motels room to', 'reserve motels bed for', 'reserve motels bed to', 'reserve motels spot for', 'reserve motels spot to', 'reserve motels rooms for', 'reserve motels rooms to', 'reserve motels beds for', 'reserve motels beds to', 'reserve motels spots for', 'reserve motels spots to', 'reserve motels for', 'reserve motels to', 'buy hotel room for', 'buy hotel room to', 'buy hotel bed for', 'buy hotel bed to', 'buy hotel spot for', 'buy hotel spot to', 'buy hotel rooms for', 'buy hotel rooms to', 'buy hotel beds for', 'buy hotel beds to', 'buy hotel spots for', 'buy hotel spots to', 'buy hotel for', 'buy hotel to', 'buy resort room for', 'buy resort room to', 'buy resort bed for', 'buy resort bed to', 'buy resort spot for', 'buy resort spot to', 'buy resort rooms for', 'buy resort rooms to', 'buy resort beds for', 'buy resort beds to', 'buy resort spots for', 'buy resort spots to', 'buy resort for', 'buy resort to', 'buy motel room for', 'buy motel room to', 'buy motel bed for', 'buy motel bed to', 'buy motel spot for', 'buy motel spot to', 'buy motel rooms for', 'buy motel rooms to', 'buy motel beds for', 'buy motel beds to', 'buy motel spots for', 'buy motel spots to', 'buy motel for', 'buy motel to', 'buy hotels room for', 'buy hotels room to', 'buy hotels bed for', 'buy hotels bed to', 'buy hotels spot for', 'buy hotels spot to', 'buy hotels rooms for', 'buy hotels rooms to', 'buy hotels beds for', 'buy hotels beds to', 'buy hotels spots for', 'buy hotels spots to', 'buy hotels for', 'buy hotels to', 'buy resorts room for', 'buy resorts room to', 'buy resorts bed for', 'buy resorts bed to', 'buy resorts spot for', 'buy resorts spot to', 'buy resorts rooms for', 'buy resorts rooms to', 'buy resorts beds for', 'buy resorts beds to', 'buy resorts spots for', 'buy resorts spots to', 'buy resorts for', 'buy resorts to', 'buy motels room for', 'buy motels room to', 'buy motels bed for', 'buy motels bed to', 'buy motels spot for', 'buy motels spot to', 'buy motels rooms for', 'buy motels rooms to', 'buy motels beds for', 'buy motels beds to', 'buy motels spots for', 'buy motels spots to', 'buy motels for', 'buy motels to', 'get hotel room for', 'get hotel room to', 'get hotel bed for', 'get hotel bed to', 'get hotel spot for', 'get hotel spot to', 'get hotel rooms for', 'get hotel rooms to', 'get hotel beds for', 'get hotel beds to', 'get hotel spots for', 'get hotel spots to', 'get hotel for', 'get hotel to', 'get resort room for', 'get resort room to', 'get resort bed for', 'get resort bed to', 'get resort spot for', 'get resort spot to', 'get resort rooms for', 'get resort rooms to', 'get resort beds for', 'get resort beds to', 'get resort spots for', 'get resort spots to', 'get resort for', 'get resort to', 'get motel room for', 'get motel room to', 'get motel bed for', 'get motel bed to', 'get motel spot for', 'get motel spot to', 'get motel rooms for', 'get motel rooms to', 'get motel beds for', 'get motel beds to', 'get motel spots for', 'get motel spots to', 'get motel for', 'get motel to', 'get hotels room for', 'get hotels room to', 'get hotels bed for', 'get hotels bed to', 'get hotels spot for', 'get hotels spot to', 'get hotels rooms for', 'get hotels rooms to', 'get hotels beds for', 'get hotels beds to', 'get hotels spots for', 'get hotels spots to', 'get hotels for', 'get hotels to', 'get resorts room for', 'get resorts room to', 'get resorts bed for', 'get resorts bed to', 'get resorts spot for', 'get resorts spot to', 'get resorts rooms for', 'get resorts rooms to', 'get resorts beds for', 'get resorts beds to', 'get resorts spots for', 'get resorts spots to', 'get resorts for', 'get resorts to', 'get motels room for', 'get motels room to', 'get motels bed for', 'get motels bed to', 'get motels spot for', 'get motels spot to', 'get motels rooms for', 'get motels rooms to', 'get motels beds for', 'get motels beds to', 'get motels spots for', 'get motels spots to', 'get motels for', 'get motels to', 'order hotel room for', 'order hotel room to', 'order hotel bed for', 'order hotel bed to', 'order hotel spot for', 'order hotel spot to', 'order hotel rooms for', 'order hotel rooms to', 'order hotel beds for', 'order hotel beds to', 'order hotel spots for', 'order hotel spots to', 'order hotel for', 'order hotel to', 'order resort room for', 'order resort room to', 'order resort bed for', 'order resort bed to', 'order resort spot for', 'order resort spot to', 'order resort rooms for', 'order resort rooms to', 'order resort beds for', 'order resort beds to', 'order resort spots for', 'order resort spots to', 'order resort for', 'order resort to', 'order motel room for', 'order motel room to', 'order motel bed for', 'order motel bed to', 'order motel spot for', 'order motel spot to', 'order motel rooms for', 'order motel rooms to', 'order motel beds for', 'order motel beds to', 'order motel spots for', 'order motel spots to', 'order motel for', 'order motel to', 'order hotels room for', 'order hotels room to', 'order hotels bed for', 'order hotels bed to', 'order hotels spot for', 'order hotels spot to', 'order hotels rooms for', 'order hotels rooms to', 'order hotels beds for', 'order hotels beds to', 'order hotels spots for', 'order hotels spots to', 'order hotels for', 'order hotels to', 'order resorts room for', 'order resorts room to', 'order resorts bed for', 'order resorts bed to', 'order resorts spot for', 'order resorts spot to', 'order resorts rooms for', 'order resorts rooms to', 'order resorts beds for', 'order resorts beds to', 'order resorts spots for', 'order resorts spots to', 'order resorts for', 'order resorts to', 'order motels room for', 'order motels room to', 'order motels bed for', 'order motels bed to', 'order motels spot for', 'order motels spot to', 'order motels rooms for', 'order motels rooms to', 'order motels beds for', 'order motels beds to', 'order motels spots for', 'order motels spots to', 'order motels for', 'order motels to', 'purchase hotel room for', 'purchase hotel room to', 'purchase hotel bed for', 'purchase hotel bed to', 'purchase hotel spot for', 'purchase hotel spot to', 'purchase hotel rooms for', 'purchase hotel rooms to', 'purchase hotel beds for', 'purchase hotel beds to', 'purchase hotel spots for', 'purchase hotel spots to', 'purchase hotel for', 'purchase hotel to', 'purchase resort room for', 'purchase resort room to', 'purchase resort bed for', 'purchase resort bed to', 'purchase resort spot for', 'purchase resort spot to', 'purchase resort rooms for', 'purchase resort rooms to', 'purchase resort beds for', 'purchase resort beds to', 'purchase resort spots for', 'purchase resort spots to', 'purchase resort for', 'purchase resort to', 'purchase motel room for', 'purchase motel room to', 'purchase motel bed for', 'purchase motel bed to', 'purchase motel spot for', 'purchase motel spot to', 'purchase motel rooms for', 'purchase motel rooms to', 'purchase motel beds for', 'purchase motel beds to', 'purchase motel spots for', 'purchase motel spots to', 'purchase motel for', 'purchase motel to', 'purchase hotels room for', 'purchase hotels room to', 'purchase hotels bed for', 'purchase hotels bed to', 'purchase hotels spot for', 'purchase hotels spot to', 'purchase hotels rooms for', 'purchase hotels rooms to', 'purchase hotels beds for', 'purchase hotels beds to', 'purchase hotels spots for', 'purchase hotels spots to', 'purchase hotels for', 'purchase hotels to', 'purchase resorts room for', 'purchase resorts room to', 'purchase resorts bed for', 'purchase resorts bed to', 'purchase resorts spot for', 'purchase resorts spot to', 'purchase resorts rooms for', 'purchase resorts rooms to', 'purchase resorts beds for', 'purchase resorts beds to', 'purchase resorts spots for', 'purchase resorts spots to', 'purchase resorts for', 'purchase resorts to', 'purchase motels room for', 'purchase motels room to', 'purchase motels bed for', 'purchase motels bed to', 'purchase motels spot for', 'purchase motels spot to', 'purchase motels rooms for', 'purchase motels rooms to', 'purchase motels beds for', 'purchase motels beds to', 'purchase motels spots for', 'purchase motels spots to', 'purchase motels for', 'purchase motels to', 'need hotel room for', 'need hotel room to', 'need hotel bed for', 'need hotel bed to', 'need hotel spot for', 'need hotel spot to', 'need hotel rooms for', 'need hotel rooms to', 'need hotel beds for', 'need hotel beds to', 'need hotel spots for', 'need hotel spots to', 'need hotel for', 'need hotel to', 'need resort room for', 'need resort room to', 'need resort bed for', 'need resort bed to', 'need resort spot for', 'need resort spot to', 'need resort rooms for', 'need resort rooms to', 'need resort beds for', 'need resort beds to', 'need resort spots for', 'need resort spots to', 'need resort for', 'need resort to', 'need motel room for', 'need motel room to', 'need motel bed for', 'need motel bed to', 'need motel spot for', 'need motel spot to', 'need motel rooms for', 'need motel rooms to', 'need motel beds for', 'need motel beds to', 'need motel spots for', 'need motel spots to', 'need motel for', 'need motel to', 'need hotels room for', 'need hotels room to', 'need hotels bed for', 'need hotels bed to', 'need hotels spot for', 'need hotels spot to', 'need hotels rooms for', 'need hotels rooms to', 'need hotels beds for', 'need hotels beds to', 'need hotels spots for', 'need hotels spots to', 'need hotels for', 'need hotels to', 'need resorts room for', 'need resorts room to', 'need resorts bed for', 'need resorts bed to', 'need resorts spot for', 'need resorts spot to', 'need resorts rooms for', 'need resorts rooms to', 'need resorts beds for', 'need resorts beds to', 'need resorts spots for', 'need resorts spots to', 'need resorts for', 'need resorts to', 'need motels room for', 'need motels room to', 'need motels bed for', 'need motels bed to', 'need motels spot for', 'need motels spot to', 'need motels rooms for', 'need motels rooms to', 'need motels beds for', 'need motels beds to', 'need motels spots for', 'need motels spots to', 'need motels for', 'need motels to', 'want hotel room for', 'want hotel room to', 'want hotel bed for', 'want hotel bed to', 'want hotel spot for', 'want hotel spot to', 'want hotel rooms for', 'want hotel rooms to', 'want hotel beds for', 'want hotel beds to', 'want hotel spots for', 'want hotel spots to', 'want hotel for', 'want hotel to', 'want resort room for', 'want resort room to', 'want resort bed for', 'want resort bed to', 'want resort spot for', 'want resort spot to', 'want resort rooms for', 'want resort rooms to', 'want resort beds for', 'want resort beds to', 'want resort spots for', 'want resort spots to', 'want resort for', 'want resort to', 'want motel room for', 'want motel room to', 'want motel bed for', 'want motel bed to', 'want motel spot for', 'want motel spot to', 'want motel rooms for', 'want motel rooms to', 'want motel beds for', 'want motel beds to', 'want motel spots for', 'want motel spots to', 'want motel for', 'want motel to', 'want hotels room for', 'want hotels room to', 'want hotels bed for', 'want hotels bed to', 'want hotels spot for', 'want hotels spot to', 'want hotels rooms for', 'want hotels rooms to', 'want hotels beds for', 'want hotels beds to', 'want hotels spots for', 'want hotels spots to', 'want hotels for', 'want hotels to', 'want resorts room for', 'want resorts room to', 'want resorts bed for', 'want resorts bed to', 'want resorts spot for', 'want resorts spot to', 'want resorts rooms for', 'want resorts rooms to', 'want resorts beds for', 'want resorts beds to', 'want resorts spots for', 'want resorts spots to', 'want resorts for', 'want resorts to', 'want motels room for', 'want motels room to', 'want motels bed for', 'want motels bed to', 'want motels spot for', 'want motels spot to', 'want motels rooms for', 'want motels rooms to', 'want motels beds for', 'want motels beds to', 'want motels spots for', 'want motels spots to', 'want motels for', 'want motels to', 'need to hotel room for', 'need to hotel room to', 'need to hotel bed for', 'need to hotel bed to', 'need to hotel spot for', 'need to hotel spot to', 'need to hotel rooms for', 'need to hotel rooms to', 'need to hotel beds for', 'need to hotel beds to', 'need to hotel spots for', 'need to hotel spots to', 'need to hotel for', 'need to hotel to', 'need to resort room for', 'need to resort room to', 'need to resort bed for', 'need to resort bed to', 'need to resort spot for', 'need to resort spot to', 'need to resort rooms for', 'need to resort rooms to', 'need to resort beds for', 'need to resort beds to', 'need to resort spots for', 'need to resort spots to', 'need to resort for', 'need to resort to', 'need to motel room for', 'need to motel room to', 'need to motel bed for', 'need to motel bed to', 'need to motel spot for', 'need to motel spot to', 'need to motel rooms for', 'need to motel rooms to', 'need to motel beds for', 'need to motel beds to', 'need to motel spots for', 'need to motel spots to', 'need to motel for', 'need to motel to', 'need to hotels room for', 'need to hotels room to', 'need to hotels bed for', 'need to hotels bed to', 'need to hotels spot for', 'need to hotels spot to', 'need to hotels rooms for', 'need to hotels rooms to', 'need to hotels beds for', 'need to hotels beds to', 'need to hotels spots for', 'need to hotels spots to', 'need to hotels for', 'need to hotels to', 'need to resorts room for', 'need to resorts room to', 'need to resorts bed for', 'need to resorts bed to', 'need to resorts spot for', 'need to resorts spot to', 'need to resorts rooms for', 'need to resorts rooms to', 'need to resorts beds for', 'need to resorts beds to', 'need to resorts spots for', 'need to resorts spots to', 'need to resorts for', 'need to resorts to', 'need to motels room for', 'need to motels room to', 'need to motels bed for', 'need to motels bed to', 'need to motels spot for', 'need to motels spot to', 'need to motels rooms for', 'need to motels rooms to', 'need to motels beds for', 'need to motels beds to', 'need to motels spots for', 'need to motels spots to', 'need to motels for', 'need to motels to', 'want to hotel room for', 'want to hotel room to', 'want to hotel bed for', 'want to hotel bed to', 'want to hotel spot for', 'want to hotel spot to', 'want to hotel rooms for', 'want to hotel rooms to', 'want to hotel beds for', 'want to hotel beds to', 'want to hotel spots for', 'want to hotel spots to', 'want to hotel for', 'want to hotel to', 'want to resort room for', 'want to resort room to', 'want to resort bed for', 'want to resort bed to', 'want to resort spot for', 'want to resort spot to', 'want to resort rooms for', 'want to resort rooms to', 'want to resort beds for', 'want to resort beds to', 'want to resort spots for', 'want to resort spots to', 'want to resort for', 'want to resort to', 'want to motel room for', 'want to motel room to', 'want to motel bed for', 'want to motel bed to', 'want to motel spot for', 'want to motel spot to', 'want to motel rooms for', 'want to motel rooms to', 'want to motel beds for', 'want to motel beds to', 'want to motel spots for', 'want to motel spots to', 'want to motel for', 'want to motel to', 'want to hotels room for', 'want to hotels room to', 'want to hotels bed for', 'want to hotels bed to', 'want to hotels spot for', 'want to hotels spot to', 'want to hotels rooms for', 'want to hotels rooms to', 'want to hotels beds for', 'want to hotels beds to', 'want to hotels spots for', 'want to hotels spots to', 'want to hotels for', 'want to hotels to', 'want to resorts room for', 'want to resorts room to', 'want to resorts bed for', 'want to resorts bed to', 'want to resorts spot for', 'want to resorts spot to', 'want to resorts rooms for', 'want to resorts rooms to', 'want to resorts beds for', 'want to resorts beds to', 'want to resorts spots for', 'want to resorts spots to', 'want to resorts for', 'want to resorts to', 'want to motels room for', 'want to motels room to', 'want to motels bed for', 'want to motels bed to', 'want to motels spot for', 'want to motels spot to', 'want to motels rooms for', 'want to motels rooms to', 'want to motels beds for', 'want to motels beds to', 'want to motels spots for', 'want to motels spots to', 'want to motels for', 'want to motels to'], 'response': ['Let me suggest you hotels <a href="SEARCH_URL" target="_blank">Click Here</a>', 'Let me show you the hotels <a href="SEARCH_URL" target="_blank">Click Here</a>', 'Let me book your hotel <a href="SEARCH_URL" target="_blank">Click Here</a>', 'Let me reserve your hotel <a href="SEARCH_URL" target="_blank">Click Here</a>']}, {'tag': 'book_train', 'pattern': ['book train ticket for', 'book train ticket to', 'book train seat for', 'book train seat to', 'book train spot for', 'book train spot to', 'book train tickets for', 'book train tickets to', 'book train seats for', 'book train seats to', 'book train spots for', 'book train spots to', 'book train for', 'book train to', 'book railway ticket for', 'book railway ticket to', 'book railway seat for', 'book railway seat to', 'book railway spot for', 'book railway spot to', 'book railway tickets for', 'book railway tickets to', 'book railway seats for', 'book railway seats to', 'book railway spots for', 'book railway spots to', 'book railway for', 'book railway to', 'book rail ticket for', 'book rail ticket to', 'book rail seat for', 'book rail seat to', 'book rail spot for', 'book rail spot to', 'book rail tickets for', 'book rail tickets to', 'book rail seats for', 'book rail seats to', 'book rail spots for', 'book rail spots to', 'book rail for', 'book rail to', 'book trains ticket for', 'book trains ticket to', 'book trains seat for', 'book trains seat to', 'book trains spot for', 'book trains spot to', 'book trains tickets for', 'book trains tickets to', 'book trains seats for', 'book trains seats to', 'book trains spots for', 'book trains spots to', 'book trains for', 'book trains to', 'book railways ticket for', 'book railways ticket to', 'book railways seat for', 'book railways seat to', 'book railways spot for', 'book railways spot to', 'book railways tickets for', 'book railways tickets to', 'book railways seats for', 'book railways seats to', 'book railways spots for', 'book railways spots to', 'book railways for', 'book railways to', 'book rails ticket for', 'book rails ticket to', 'book rails seat for', 'book rails seat to', 'book rails spot for', 'book rails spot to', 'book rails tickets for', 'book rails tickets to', 'book rails seats for', 'book rails seats to', 'book rails spots for', 'book rails spots to', 'book rails for', 'book rails to', 'reserve train ticket for', 'reserve train ticket to', 'reserve train seat for', 'reserve train seat to', 'reserve train spot for', 'reserve train spot to', 'reserve train tickets for', 'reserve train tickets to', 'reserve train seats for', 'reserve train seats to', 'reserve train spots for', 'reserve train spots to', 'reserve train for', 'reserve train to', 'reserve railway ticket for', 'reserve railway ticket to', 'reserve railway seat for', 'reserve railway seat to', 'reserve railway spot for', 'reserve railway spot to', 'reserve railway tickets for', 'reserve railway tickets to', 'reserve railway seats for', 'reserve railway seats to', 'reserve railway spots for', 'reserve railway spots to', 'reserve railway for', 'reserve railway to', 'reserve rail ticket for', 'reserve rail ticket to', 'reserve rail seat for', 'reserve rail seat to', 'reserve rail spot for', 'reserve rail spot to', 'reserve rail tickets for', 'reserve rail tickets to', 'reserve rail seats for', 'reserve rail seats to', 'reserve rail spots for', 'reserve rail spots to', 'reserve rail for', 'reserve rail to', 'reserve trains ticket for', 'reserve trains ticket to', 'reserve trains seat for', 'reserve trains seat to', 'reserve trains spot for', 'reserve trains spot to', 'reserve trains tickets for', 'reserve trains tickets to', 'reserve trains seats for', 'reserve trains seats to', 'reserve trains spots for', 'reserve trains spots to', 'reserve trains for', 'reserve trains to', 'reserve railways ticket for', 'reserve railways ticket to', 'reserve railways seat for', 'reserve railways seat to', 'reserve railways spot for', 'reserve railways spot to', 'reserve railways tickets for', 'reserve railways tickets to', 'reserve railways seats for', 'reserve railways seats to', 'reserve railways spots for', 'reserve railways spots to', 'reserve railways for', 'reserve railways to', 'reserve rails ticket for', 'reserve rails ticket to', 'reserve rails seat for', 'reserve rails seat to', 'reserve rails spot for', 'reserve rails spot to', 'reserve rails tickets for', 'reserve rails tickets to', 'reserve rails seats for', 'reserve rails seats to', 'reserve rails spots for', 'reserve rails spots to', 'reserve rails for', 'reserve rails to', 'buy train ticket for', 'buy train ticket to', 'buy train seat for', 'buy train seat to', 'buy train spot for', 'buy train spot to', 'buy train tickets for', 'buy train tickets to', 'buy train seats for', 'buy train seats to', 'buy train spots for', 'buy train spots to', 'buy train for', 'buy train to', 'buy railway ticket for', 'buy railway ticket to', 'buy railway seat for', 'buy railway seat to', 'buy railway spot for', 'buy railway spot to', 'buy railway tickets for', 'buy railway tickets to', 'buy railway seats for', 'buy railway seats to', 'buy railway spots for', 'buy railway spots to', 'buy railway for', 'buy railway to', 'buy rail ticket for', 'buy rail ticket to', 'buy rail seat for', 'buy rail seat to', 'buy rail spot for', 'buy rail spot to', 'buy rail tickets for', 'buy rail tickets to', 'buy rail seats for', 'buy rail seats to', 'buy rail spots for', 'buy rail spots to', 'buy rail for', 'buy rail to', 'buy trains ticket for', 'buy trains ticket to', 'buy trains seat for', 'buy trains seat to', 'buy trains spot for', 'buy trains spot to', 'buy trains tickets for', 'buy trains tickets to', 'buy trains seats for', 'buy trains seats to', 'buy trains spots for', 'buy trains spots to', 'buy trains for', 'buy trains to', 'buy railways ticket for', 'buy railways ticket to', 'buy railways seat for', 'buy railways seat to', 'buy railways spot for', 'buy railways spot to', 'buy railways tickets for', 'buy railways tickets to', 'buy railways seats for', 'buy railways seats to', 'buy railways spots for', 'buy railways spots to', 'buy railways for', 'buy railways to', 'buy rails ticket for', 'buy rails ticket to', 'buy rails seat for', 'buy rails seat to', 'buy rails spot for', 'buy rails spot to', 'buy rails tickets for', 'buy rails tickets to', 'buy rails seats for', 'buy rails seats to', 'buy rails spots for', 'buy rails spots to', 'buy rails for', 'buy rails to', 'get train ticket for', 'get train ticket to', 'get train seat for', 'get train seat to', 'get train spot for', 'get train spot to', 'get train tickets for', 'get train tickets to', 'get train seats for', 'get train seats to', 'get train spots for', 'get train spots to', 'get train for', 'get train to', 'get railway ticket for', 'get railway ticket to', 'get railway seat for', 'get railway seat to', 'get railway spot for', 'get railway spot to', 'get railway tickets for', 'get railway tickets to', 'get railway seats for', 'get railway seats to', 'get railway spots for', 'get railway spots to', 'get railway for', 'get railway to', 'get rail ticket for', 'get rail ticket to', 'get rail seat for', 'get rail seat to', 'get rail spot for', 'get rail spot to', 'get rail tickets for', 'get rail tickets to', 'get rail seats for', 'get rail seats to', 'get rail spots for', 'get rail spots to', 'get rail for', 'get rail to', 'get trains ticket for', 'get trains ticket to', 'get trains seat for', 'get trains seat to', 'get trains spot for', 'get trains spot to', 'get trains tickets for', 'get trains tickets to', 'get trains seats for', 'get trains seats to', 'get trains spots for', 'get trains spots to', 'get trains for', 'get trains to', 'get railways ticket for', 'get railways ticket to', 'get railways seat for', 'get railways seat to', 'get railways spot for', 'get railways spot to', 'get railways tickets for', 'get railways tickets to', 'get railways seats for', 'get railways seats to', 'get railways spots for', 'get railways spots to', 'get railways for', 'get railways to', 'get rails ticket for', 'get rails ticket to', 'get rails seat for', 'get rails seat to', 'get rails spot for', 'get rails spot to', 'get rails tickets for', 'get rails tickets to', 'get rails seats for', 'get rails seats to', 'get rails spots for', 'get rails spots to', 'get rails for', 'get rails to', 'order train ticket for', 'order train ticket to', 'order train seat for', 'order train seat to', 'order train spot for', 'order train spot to', 'order train tickets for', 'order train tickets to', 'order train seats for', 'order train seats to', 'order train spots for', 'order train spots to', 'order train for', 'order train to', 'order railway ticket for', 'order railway ticket to', 'order railway seat for', 'order railway seat to', 'order railway spot for', 'order railway spot to', 'order railway tickets for', 'order railway tickets to', 'order railway seats for', 'order railway seats to', 'order railway spots for', 'order railway spots to', 'order railway for', 'order railway to', 'order rail ticket for', 'order rail ticket to', 'order rail seat for', 'order rail seat to', 'order rail spot for', 'order rail spot to', 'order rail tickets for', 'order rail tickets to', 'order rail seats for', 'order rail seats to', 'order rail spots for', 'order rail spots to', 'order rail for', 'order rail to', 'order trains ticket for', 'order trains ticket to', 'order trains seat for', 'order trains seat to', 'order trains spot for', 'order trains spot to', 'order trains tickets for', 'order trains tickets to', 'order trains seats for', 'order trains seats to', 'order trains spots for', 'order trains spots to', 'order trains for', 'order trains to', 'order railways ticket for', 'order railways ticket to', 'order railways seat for', 'order railways seat to', 'order railways spot for', 'order railways spot to', 'order railways tickets for', 'order railways tickets to', 'order railways seats for', 'order railways seats to', 'order railways spots for', 'order railways spots to', 'order railways for', 'order railways to', 'order rails ticket for', 'order rails ticket to', 'order rails seat for', 'order rails seat to', 'order rails spot for', 'order rails spot to', 'order rails tickets for', 'order rails tickets to', 'order rails seats for', 'order rails seats to', 'order rails spots for', 'order rails spots to', 'order rails for', 'order rails to', 'purchase train ticket for', 'purchase train ticket to', 'purchase train seat for', 'purchase train seat to', 'purchase train spot for', 'purchase train spot to', 'purchase train tickets for', 'purchase train tickets to', 'purchase train seats for', 'purchase train seats to', 'purchase train spots for', 'purchase train spots to', 'purchase train for', 'purchase train to', 'purchase railway ticket for', 'purchase railway ticket to', 'purchase railway seat for', 'purchase railway seat to', 'purchase railway spot for', 'purchase railway spot to', 'purchase railway tickets for', 'purchase railway tickets to', 'purchase railway seats for', 'purchase railway seats to', 'purchase railway spots for', 'purchase railway spots to', 'purchase railway for', 'purchase railway to', 'purchase rail ticket for', 'purchase rail ticket to', 'purchase rail seat for', 'purchase rail seat to', 'purchase rail spot for', 'purchase rail spot to', 'purchase rail tickets for', 'purchase rail tickets to', 'purchase rail seats for', 'purchase rail seats to', 'purchase rail spots for', 'purchase rail spots to', 'purchase rail for', 'purchase rail to', 'purchase trains ticket for', 'purchase trains ticket to', 'purchase trains seat for', 'purchase trains seat to', 'purchase trains spot for', 'purchase trains spot to', 'purchase trains tickets for', 'purchase trains tickets to', 'purchase trains seats for', 'purchase trains seats to', 'purchase trains spots for', 'purchase trains spots to', 'purchase trains for', 'purchase trains to', 'purchase railways ticket for', 'purchase railways ticket to', 'purchase railways seat for', 'purchase railways seat to', 'purchase railways spot for', 'purchase railways spot to', 'purchase railways tickets for', 'purchase railways tickets to', 'purchase railways seats for', 'purchase railways seats to', 'purchase railways spots for', 'purchase railways spots to', 'purchase railways for', 'purchase railways to', 'purchase rails ticket for', 'purchase rails ticket to', 'purchase rails seat for', 'purchase rails seat to', 'purchase rails spot for', 'purchase rails spot to', 'purchase rails tickets for', 'purchase rails tickets to', 'purchase rails seats for', 'purchase rails seats to', 'purchase rails spots for', 'purchase rails spots to', 'purchase rails for', 'purchase rails to', 'need train ticket for', 'need train ticket to', 'need train seat for', 'need train seat to', 'need train spot for', 'need train spot to', 'need train tickets for', 'need train tickets to', 'need train seats for', 'need train seats to', 'need train spots for', 'need train spots to', 'need train for', 'need train to', 'need railway ticket for', 'need railway ticket to', 'need railway seat for', 'need railway seat to', 'need railway spot for', 'need railway spot to', 'need railway tickets for', 'need railway tickets to', 'need railway seats for', 'need railway seats to', 'need railway spots for', 'need railway spots to', 'need railway for', 'need railway to', 'need rail ticket for', 'need rail ticket to', 'need rail seat for', 'need rail seat to', 'need rail spot for', 'need rail spot to', 'need rail tickets for', 'need rail tickets to', 'need rail seats for', 'need rail seats to', 'need rail spots for', 'need rail spots to', 'need rail for', 'need rail to', 'need trains ticket for', 'need trains ticket to', 'need trains seat for', 'need trains seat to', 'need trains spot for', 'need trains spot to', 'need trains tickets for', 'need trains tickets to', 'need trains seats for', 'need trains seats to', 'need trains spots for', 'need trains spots to', 'need trains for', 'need trains to', 'need railways ticket for', 'need railways ticket to', 'need railways seat for', 'need railways seat to', 'need railways spot for', 'need railways spot to', 'need railways tickets for', 'need railways tickets to', 'need railways seats for', 'need railways seats to', 'need railways spots for', 'need railways spots to', 'need railways for', 'need railways to', 'need rails ticket for', 'need rails ticket to', 'need rails seat for', 'need rails seat to', 'need rails spot for', 'need rails spot to', 'need rails tickets for', 'need rails tickets to', 'need rails seats for', 'need rails seats to', 'need rails spots for', 'need rails spots to', 'need rails for', 'need rails to', 'want train ticket for', 'want train ticket to', 'want train seat for', 'want train seat to', 'want train spot for', 'want train spot to', 'want train tickets for', 'want train tickets to', 'want train seats for', 'want train seats to', 'want train spots for', 'want train spots to', 'want train for', 'want train to', 'want railway ticket for', 'want railway ticket to', 'want railway seat for', 'want railway seat to', 'want railway spot for', 'want railway spot to', 'want railway tickets for', 'want railway tickets to', 'want railway seats for', 'want railway seats to', 'want railway spots for', 'want railway spots to', 'want railway for', 'want railway to', 'want rail ticket for', 'want rail ticket to', 'want rail seat for', 'want rail seat to', 'want rail spot for', 'want rail spot to', 'want rail tickets for', 'want rail tickets to', 'want rail seats for', 'want rail seats to', 'want rail spots for', 'want rail spots to', 'want rail for', 'want rail to', 'want trains ticket for', 'want trains ticket to', 'want trains seat for', 'want trains seat to', 'want trains spot for', 'want trains spot to', 'want trains tickets for', 'want trains tickets to', 'want trains seats for', 'want trains seats to', 'want trains spots for', 'want trains spots to', 'want trains for', 'want trains to', 'want railways ticket for', 'want railways ticket to', 'want railways seat for', 'want railways seat to', 'want railways spot for', 'want railways spot to', 'want railways tickets for', 'want railways tickets to', 'want railways seats for', 'want railways seats to', 'want railways spots for', 'want railways spots to', 'want railways for', 'want railways to', 'want rails ticket for', 'want rails ticket to', 'want rails seat for', 'want rails seat to', 'want rails spot for', 'want rails spot to', 'want rails tickets for', 'want rails tickets to', 'want rails seats for', 'want rails seats to', 'want rails spots for', 'want rails spots to', 'want rails for', 'want rails to', 'need to train ticket for', 'need to train ticket to', 'need to train seat for', 'need to train seat to', 'need to train spot for', 'need to train spot to', 'need to train tickets for', 'need to train tickets to', 'need to train seats for', 'need to train seats to', 'need to train spots for', 'need to train spots to', 'need to train for', 'need to train to', 'need to railway ticket for', 'need to railway ticket to', 'need to railway seat for', 'need to railway seat to', 'need to railway spot for', 'need to railway spot to', 'need to railway tickets for', 'need to railway tickets to', 'need to railway seats for', 'need to railway seats to', 'need to railway spots for', 'need to railway spots to', 'need to railway for', 'need to railway to', 'need to rail ticket for', 'need to rail ticket to', 'need to rail seat for', 'need to rail seat to', 'need to rail spot for', 'need to rail spot to', 'need to rail tickets for', 'need to rail tickets to', 'need to rail seats for', 'need to rail seats to', 'need to rail spots for', 'need to rail spots to', 'need to rail for', 'need to rail to', 'need to trains ticket for', 'need to trains ticket to', 'need to trains seat for', 'need to trains seat to', 'need to trains spot for', 'need to trains spot to', 'need to trains tickets for', 'need to trains tickets to', 'need to trains seats for', 'need to trains seats to', 'need to trains spots for', 'need to trains spots to', 'need to trains for', 'need to trains to', 'need to railways ticket for', 'need to railways ticket to', 'need to railways seat for', 'need to railways seat to', 'need to railways spot for', 'need to railways spot to', 'need to railways tickets for', 'need to railways tickets to', 'need to railways seats for', 'need to railways seats to', 'need to railways spots for', 'need to railways spots to', 'need to railways for', 'need to railways to', 'need to rails ticket for', 'need to rails ticket to', 'need to rails seat for', 'need to rails seat to', 'need to rails spot for', 'need to rails spot to', 'need to rails tickets for', 'need to rails tickets to', 'need to rails seats for', 'need to rails seats to', 'need to rails spots for', 'need to rails spots to', 'need to rails for', 'need to rails to', 'want to train ticket for', 'want to train ticket to', 'want to train seat for', 'want to train seat to', 'want to train spot for', 'want to train spot to', 'want to train tickets for', 'want to train tickets to', 'want to train seats for', 'want to train seats to', 'want to train spots for', 'want to train spots to', 'want to train for', 'want to train to', 'want to railway ticket for', 'want to railway ticket to', 'want to railway seat for', 'want to railway seat to', 'want to railway spot for', 'want to railway spot to', 'want to railway tickets for', 'want to railway tickets to', 'want to railway seats for', 'want to railway seats to', 'want to railway spots for', 'want to railway spots to', 'want to railway for', 'want to railway to', 'want to rail ticket for', 'want to rail ticket to', 'want to rail seat for', 'want to rail seat to', 'want to rail spot for', 'want to rail spot to', 'want to rail tickets for', 'want to rail tickets to', 'want to rail seats for', 'want to rail seats to', 'want to rail spots for', 'want to rail spots to', 'want to rail for', 'want to rail to', 'want to trains ticket for', 'want to trains ticket to', 'want to trains seat for', 'want to trains seat to', 'want to trains spot for', 'want to trains spot to', 'want to trains tickets for', 'want to trains tickets to', 'want to trains seats for', 'want to trains seats to', 'want to trains spots for', 'want to trains spots to', 'want to trains for', 'want to trains to', 'want to railways ticket for', 'want to railways ticket to', 'want to railways seat for', 'want to railways seat to', 'want to railways spot for', 'want to railways spot to', 'want to railways tickets for', 'want to railways tickets to', 'want to railways seats for', 'want to railways seats to', 'want to railways spots for', 'want to railways spots to', 'want to railways for', 'want to railways to', 'want to rails ticket for', 'want to rails ticket to', 'want to rails seat for', 'want to rails seat to', 'want to rails spot for', 'want to rails spot to', 'want to rails tickets for', 'want to rails tickets to', 'want to rails seats for', 'want to rails seats to', 'want to rails spots for', 'want to rails spots to', 'want to rails for', 'want to rails to'], 'response': ['Let me suggest you trains <a href="BOOK_TRAIN_URL" target="_blank">Click Here</a>', 'Let me show you the trains <a href="BOOK_TRAIN_URL" target="_blank">Click Here</a>', 'Let me book your train <a href="BOOK_TRAIN_URL" target="_blank">Click Here</a>', 'Let me reserve your train <a href="BOOK_TRAIN_URL" target="_blank">Click Here</a>']}, {'tag': 'book_bus', 'pattern': ['book bus ticket for', 'book bus ticket to', 'book bus seat for', 'book bus seat to', 'book bus spot for', 'book bus spot to', 'book bus tickets for', 'book bus tickets to', 'book bus seats for', 'book bus seats to', 'book bus spots for', 'book bus spots to', 'book bus for', 'book bus to', 'book bus service ticket for', 'book bus service ticket to', 'book bus service seat for', 'book bus service seat to', 'book bus service spot for', 'book bus service spot to', 'book bus service tickets for', 'book bus service tickets to', 'book bus service seats for', 'book bus service seats to', 'book bus service spots for', 'book bus service spots to', 'book bus service for', 'book bus service to', 'book buses ticket for', 'book buses ticket to', 'book buses seat for', 'book buses seat to', 'book buses spot for', 'book buses spot to', 'book buses tickets for', 'book buses tickets to', 'book buses seats for', 'book buses seats to', 'book buses spots for', 'book buses spots to', 'book buses for', 'book buses to', 'book bus services ticket for', 'book bus services ticket to', 'book bus services seat for', 'book bus services seat to', 'book bus services spot for', 'book bus services spot to', 'book bus services tickets for', 'book bus services tickets to', 'book bus services seats for', 'book bus services seats to', 'book bus services spots for', 'book bus services spots to', 'book bus services for', 'book bus services to', 'reserve bus ticket for', 'reserve bus ticket to', 'reserve bus seat for', 'reserve bus seat to', 'reserve bus spot for', 'reserve bus spot to', 'reserve bus tickets for', 'reserve bus tickets to', 'reserve bus seats for', 'reserve bus seats to', 'reserve bus spots for', 'reserve bus spots to', 'reserve bus for', 'reserve bus to', 'reserve bus service ticket for', 'reserve bus service ticket to', 'reserve bus service seat for', 'reserve bus service seat to', 'reserve bus service spot for', 'reserve bus service spot to', 'reserve bus service tickets for', 'reserve bus service tickets to', 'reserve bus service seats for', 'reserve bus service seats to', 'reserve bus service spots for', 'reserve bus service spots to', 'reserve bus service for', 'reserve bus service to', 'reserve buses ticket for', 'reserve buses ticket to', 'reserve buses seat for', 'reserve buses seat to', 'reserve buses spot for', 'reserve buses spot to', 'reserve buses tickets for', 'reserve buses tickets to', 'reserve buses seats for', 'reserve buses seats to', 'reserve buses spots for', 'reserve buses spots to', 'reserve buses for', 'reserve buses to', 'reserve bus services ticket for', 'reserve bus services ticket to', 'reserve bus services seat for', 'reserve bus services seat to', 'reserve bus services spot for', 'reserve bus services spot to', 'reserve bus services tickets for', 'reserve bus services tickets to', 'reserve bus services seats for', 'reserve bus services seats to', 'reserve bus services spots for', 'reserve bus services spots to', 'reserve bus services for', 'reserve bus services to', 'buy bus ticket for', 'buy bus ticket to', 'buy bus seat for', 'buy bus seat to', 'buy bus spot for', 'buy bus spot to', 'buy bus tickets for', 'buy bus tickets to', 'buy bus seats for', 'buy bus seats to', 'buy bus spots for', 'buy bus spots to', 'buy bus for', 'buy bus to', 'buy bus service ticket for', 'buy bus service ticket to', 'buy bus service seat for', 'buy bus service seat to', 'buy bus service spot for', 'buy bus service spot to', 'buy bus service tickets for', 'buy bus service tickets to', 'buy bus service seats for', 'buy bus service seats to', 'buy bus service spots for', 'buy bus service spots to', 'buy bus service for', 'buy bus service to', 'buy buses ticket for', 'buy buses ticket to', 'buy buses seat for', 'buy buses seat to', 'buy buses spot for', 'buy buses spot to', 'buy buses tickets for', 'buy buses tickets to', 'buy buses seats for', 'buy buses seats to', 'buy buses spots for', 'buy buses spots to', 'buy buses for', 'buy buses to', 'buy bus services ticket for', 'buy bus services ticket to', 'buy bus services seat for', 'buy bus services seat to', 'buy bus services spot for', 'buy bus services spot to', 'buy bus services tickets for', 'buy bus services tickets to', 'buy bus services seats for', 'buy bus services seats to', 'buy bus services spots for', 'buy bus services spots to', 'buy bus services for', 'buy bus services to', 'get bus ticket for', 'get bus ticket to', 'get bus seat for', 'get bus seat to', 'get bus spot for', 'get bus spot to', 'get bus tickets for', 'get bus tickets to', 'get bus seats for', 'get bus seats to', 'get bus spots for', 'get bus spots to', 'get bus for', 'get bus to', 'get bus service ticket for', 'get bus service ticket to', 'get bus service seat for', 'get bus service seat to', 'get bus service spot for', 'get bus service spot to', 'get bus service tickets for', 'get bus service tickets to', 'get bus service seats for', 'get bus service seats to', 'get bus service spots for', 'get bus service spots to', 'get bus service for', 'get bus service to', 'get buses ticket for', 'get buses ticket to', 'get buses seat for', 'get buses seat to', 'get buses spot for', 'get buses spot to', 'get buses tickets for', 'get buses tickets to', 'get buses seats for', 'get buses seats to', 'get buses spots for', 'get buses spots to', 'get buses for', 'get buses to', 'get bus services ticket for', 'get bus services ticket to', 'get bus services seat for', 'get bus services seat to', 'get bus services spot for', 'get bus services spot to', 'get bus services tickets for', 'get bus services tickets to', 'get bus services seats for', 'get bus services seats to', 'get bus services spots for', 'get bus services spots to', 'get bus services for', 'get bus services to', 'order bus ticket for', 'order bus ticket to', 'order bus seat for', 'order bus seat to', 'order bus spot for', 'order bus spot to', 'order bus tickets for', 'order bus tickets to', 'order bus seats for', 'order bus seats to', 'order bus spots for', 'order bus spots to', 'order bus for', 'order bus to', 'order bus service ticket for', 'order bus service ticket to', 'order bus service seat for', 'order bus service seat to', 'order bus service spot for', 'order bus service spot to', 'order bus service tickets for', 'order bus service tickets to', 'order bus service seats for', 'order bus service seats to', 'order bus service spots for', 'order bus service spots to', 'order bus service for', 'order bus service to', 'order buses ticket for', 'order buses ticket to', 'order buses seat for', 'order buses seat to', 'order buses spot for', 'order buses spot to', 'order buses tickets for', 'order buses tickets to', 'order buses seats for', 'order buses seats to', 'order buses spots for', 'order buses spots to', 'order buses for', 'order buses to', 'order bus services ticket for', 'order bus services ticket to', 'order bus services seat for', 'order bus services seat to', 'order bus services spot for', 'order bus services spot to', 'order bus services tickets for', 'order bus services tickets to', 'order bus services seats for', 'order bus services seats to', 'order bus services spots for', 'order bus services spots to', 'order bus services for', 'order bus services to', 'purchase bus ticket for', 'purchase bus ticket to', 'purchase bus seat for', 'purchase bus seat to', 'purchase bus spot for', 'purchase bus spot to', 'purchase bus tickets for', 'purchase bus tickets to', 'purchase bus seats for', 'purchase bus seats to', 'purchase bus spots for', 'purchase bus spots to', 'purchase bus for', 'purchase bus to', 'purchase bus service ticket for', 'purchase bus service ticket to', 'purchase bus service seat for', 'purchase bus service seat to', 'purchase bus service spot for', 'purchase bus service spot to', 'purchase bus service tickets for', 'purchase bus service tickets to', 'purchase bus service seats for', 'purchase bus service seats to', 'purchase bus service spots for', 'purchase bus service spots to', 'purchase bus service for', 'purchase bus service to', 'purchase buses ticket for', 'purchase buses ticket to', 'purchase buses seat for', 'purchase buses seat to', 'purchase buses spot for', 'purchase buses spot to', 'purchase buses tickets for', 'purchase buses tickets to', 'purchase buses seats for', 'purchase buses seats to', 'purchase buses spots for', 'purchase buses spots to', 'purchase buses for', 'purchase buses to', 'purchase bus services ticket for', 'purchase bus services ticket to', 'purchase bus services seat for', 'purchase bus services seat to', 'purchase bus services spot for', 'purchase bus services spot to', 'purchase bus services tickets for', 'purchase bus services tickets to', 'purchase bus services seats for', 'purchase bus services seats to', 'purchase bus services spots for', 'purchase bus services spots to', 'purchase bus services for', 'purchase bus services to', 'need bus ticket for', 'need bus ticket to', 'need bus seat for', 'need bus seat to', 'need bus spot for', 'need bus spot to', 'need bus tickets for', 'need bus tickets to', 'need bus seats for', 'need bus seats to', 'need bus spots for', 'need bus spots to', 'need bus for', 'need bus to', 'need bus service ticket for', 'need bus service ticket to', 'need bus service seat for', 'need bus service seat to', 'need bus service spot for', 'need bus service spot to', 'need bus service tickets for', 'need bus service tickets to', 'need bus service seats for', 'need bus service seats to', 'need bus service spots for', 'need bus service spots to', 'need bus service for', 'need bus service to', 'need buses ticket for', 'need buses ticket to', 'need buses seat for', 'need buses seat to', 'need buses spot for', 'need buses spot to', 'need buses tickets for', 'need buses tickets to', 'need buses seats for', 'need buses seats to', 'need buses spots for', 'need buses spots to', 'need buses for', 'need buses to', 'need bus services ticket for', 'need bus services ticket to', 'need bus services seat for', 'need bus services seat to', 'need bus services spot for', 'need bus services spot to', 'need bus services tickets for', 'need bus services tickets to', 'need bus services seats for', 'need bus services seats to', 'need bus services spots for', 'need bus services spots to', 'need bus services for', 'need bus services to', 'want bus ticket for', 'want bus ticket to', 'want bus seat for', 'want bus seat to', 'want bus spot for', 'want bus spot to', 'want bus tickets for', 'want bus tickets to', 'want bus seats for', 'want bus seats to', 'want bus spots for', 'want bus spots to', 'want bus for', 'want bus to', 'want bus service ticket for', 'want bus service ticket to', 'want bus service seat for', 'want bus service seat to', 'want bus service spot for', 'want bus service spot to', 'want bus service tickets for', 'want bus service tickets to', 'want bus service seats for', 'want bus service seats to', 'want bus service spots for', 'want bus service spots to', 'want bus service for', 'want bus service to', 'want buses ticket for', 'want buses ticket to', 'want buses seat for', 'want buses seat to', 'want buses spot for', 'want buses spot to', 'want buses tickets for', 'want buses tickets to', 'want buses seats for', 'want buses seats to', 'want buses spots for', 'want buses spots to', 'want buses for', 'want buses to', 'want bus services ticket for', 'want bus services ticket to', 'want bus services seat for', 'want bus services seat to', 'want bus services spot for', 'want bus services spot to', 'want bus services tickets for', 'want bus services tickets to', 'want bus services seats for', 'want bus services seats to', 'want bus services spots for', 'want bus services spots to', 'want bus services for', 'want bus services to', 'need to bus ticket for', 'need to bus ticket to', 'need to bus seat for', 'need to bus seat to', 'need to bus spot for', 'need to bus spot to', 'need to bus tickets for', 'need to bus tickets to', 'need to bus seats for', 'need to bus seats to', 'need to bus spots for', 'need to bus spots to', 'need to bus for', 'need to bus to', 'need to bus service ticket for', 'need to bus service ticket to', 'need to bus service seat for', 'need to bus service seat to', 'need to bus service spot for', 'need to bus service spot to', 'need to bus service tickets for', 'need to bus service tickets to', 'need to bus service seats for', 'need to bus service seats to', 'need to bus service spots for', 'need to bus service spots to', 'need to bus service for', 'need to bus service to', 'need to buses ticket for', 'need to buses ticket to', 'need to buses seat for', 'need to buses seat to', 'need to buses spot for', 'need to buses spot to', 'need to buses tickets for', 'need to buses tickets to', 'need to buses seats for', 'need to buses seats to', 'need to buses spots for', 'need to buses spots to', 'need to buses for', 'need to buses to', 'need to bus services ticket for', 'need to bus services ticket to', 'need to bus services seat for', 'need to bus services seat to', 'need to bus services spot for', 'need to bus services spot to', 'need to bus services tickets for', 'need to bus services tickets to', 'need to bus services seats for', 'need to bus services seats to', 'need to bus services spots for', 'need to bus services spots to', 'need to bus services for', 'need to bus services to', 'want to bus ticket for', 'want to bus ticket to', 'want to bus seat for', 'want to bus seat to', 'want to bus spot for', 'want to bus spot to', 'want to bus tickets for', 'want to bus tickets to', 'want to bus seats for', 'want to bus seats to', 'want to bus spots for', 'want to bus spots to', 'want to bus for', 'want to bus to', 'want to bus service ticket for', 'want to bus service ticket to', 'want to bus service seat for', 'want to bus service seat to', 'want to bus service spot for', 'want to bus service spot to', 'want to bus service tickets for', 'want to bus service tickets to', 'want to bus service seats for', 'want to bus service seats to', 'want to bus service spots for', 'want to bus service spots to', 'want to bus service for', 'want to bus service to', 'want to buses ticket for', 'want to buses ticket to', 'want to buses seat for', 'want to buses seat to', 'want to buses spot for', 'want to buses spot to', 'want to buses tickets for', 'want to buses tickets to', 'want to buses seats for', 'want to buses seats to', 'want to buses spots for', 'want to buses spots to', 'want to buses for', 'want to buses to', 'want to bus services ticket for', 'want to bus services ticket to', 'want to bus services seat for', 'want to bus services seat to', 'want to bus services spot for', 'want to bus services spot to', 'want to bus services tickets for', 'want to bus services tickets to', 'want to bus services seats for', 'want to bus services seats to', 'want to bus services spots for', 'want to bus services spots to', 'want to bus services for', 'want to bus services to'], 'response': ['Let me suggest you buses <a href="BOOK_BUS_URL" target="_blank">Click Here</a>', 'Let me show you the buses <a href="BOOK_BUS_URL" target="_blank">Click Here</a>', 'Let me book your bus <a href="BOOK_BUS_URL" target="_blank">Click Here</a>', 'Let me reserve your bus <a href="BOOK_BUS_URL" target="_blank">Click Here</a>']}, {'tag': 'book_movie', 'pattern': ['book movie ticket for', 'book movie ticket to', 'book movie seat for', 'book movie seat to', 'book movie spot for', 'book movie spot to', 'book movie tickets for', 'book movie tickets to', 'book movie seats for', 'book movie seats to', 'book movie spots for', 'book movie spots to', 'book movie for', 'book movie to', 'book film ticket for', 'book film ticket to', 'book film seat for', 'book film seat to', 'book film spot for', 'book film spot to', 'book film tickets for', 'book film tickets to', 'book film seats for', 'book film seats to', 'book film spots for', 'book film spots to', 'book film for', 'book film to', 'book films ticket for', 'book films ticket to', 'book films seat for', 'book films seat to', 'book films spot for', 'book films spot to', 'book films tickets for', 'book films tickets to', 'book films seats for', 'book films seats to', 'book films spots for', 'book films spots to', 'book films for', 'book films to', 'book movies ticket for', 'book movies ticket to', 'book movies seat for', 'book movies seat to', 'book movies spot for', 'book movies spot to', 'book movies tickets for', 'book movies tickets to', 'book movies seats for', 'book movies seats to', 'book movies spots for', 'book movies spots to', 'book movies for', 'book movies to', 'book films ticket for', 'book films ticket to', 'book films seat for', 'book films seat to', 'book films spot for', 'book films spot to', 'book films tickets for', 'book films tickets to', 'book films seats for', 'book films seats to', 'book films spots for', 'book films spots to', 'book films for', 'book films to', 'reserve movie ticket for', 'reserve movie ticket to', 'reserve movie seat for', 'reserve movie seat to', 'reserve movie spot for', 'reserve movie spot to', 'reserve movie tickets for', 'reserve movie tickets to', 'reserve movie seats for', 'reserve movie seats to', 'reserve movie spots for', 'reserve movie spots to', 'reserve movie for', 'reserve movie to', 'reserve film ticket for', 'reserve film ticket to', 'reserve film seat for', 'reserve film seat to', 'reserve film spot for', 'reserve film spot to', 'reserve film tickets for', 'reserve film tickets to', 'reserve film seats for', 'reserve film seats to', 'reserve film spots for', 'reserve film spots to', 'reserve film for', 'reserve film to', 'reserve films ticket for', 'reserve films ticket to', 'reserve films seat for', 'reserve films seat to', 'reserve films spot for', 'reserve films spot to', 'reserve films tickets for', 'reserve films tickets to', 'reserve films seats for', 'reserve films seats to', 'reserve films spots for', 'reserve films spots to', 'reserve films for', 'reserve films to', 'reserve movies ticket for', 'reserve movies ticket to', 'reserve movies seat for', 'reserve movies seat to', 'reserve movies spot for', 'reserve movies spot to', 'reserve movies tickets for', 'reserve movies tickets to', 'reserve movies seats for', 'reserve movies seats to', 'reserve movies spots for', 'reserve movies spots to', 'reserve movies for', 'reserve movies to', 'reserve films ticket for', 'reserve films ticket to', 'reserve films seat for', 'reserve films seat to', 'reserve films spot for', 'reserve films spot to', 'reserve films tickets for', 'reserve films tickets to', 'reserve films seats for', 'reserve films seats to', 'reserve films spots for', 'reserve films spots to', 'reserve films for', 'reserve films to', 'buy movie ticket for', 'buy movie ticket to', 'buy movie seat for', 'buy movie seat to', 'buy movie spot for', 'buy movie spot to', 'buy movie tickets for', 'buy movie tickets to', 'buy movie seats for', 'buy movie seats to', 'buy movie spots for', 'buy movie spots to', 'buy movie for', 'buy movie to', 'buy film ticket for', 'buy film ticket to', 'buy film seat for', 'buy film seat to', 'buy film spot for', 'buy film spot to', 'buy film tickets for', 'buy film tickets to', 'buy film seats for', 'buy film seats to', 'buy film spots for', 'buy film spots to', 'buy film for', 'buy film to', 'buy films ticket for', 'buy films ticket to', 'buy films seat for', 'buy films seat to', 'buy films spot for', 'buy films spot to', 'buy films tickets for', 'buy films tickets to', 'buy films seats for', 'buy films seats to', 'buy films spots for', 'buy films spots to', 'buy films for', 'buy films to', 'buy movies ticket for', 'buy movies ticket to', 'buy movies seat for', 'buy movies seat to', 'buy movies spot for', 'buy movies spot to', 'buy movies tickets for', 'buy movies tickets to', 'buy movies seats for', 'buy movies seats to', 'buy movies spots for', 'buy movies spots to', 'buy movies for', 'buy movies to', 'buy films ticket for', 'buy films ticket to', 'buy films seat for', 'buy films seat to', 'buy films spot for', 'buy films spot to', 'buy films tickets for', 'buy films tickets to', 'buy films seats for', 'buy films seats to', 'buy films spots for', 'buy films spots to', 'buy films for', 'buy films to', 'get movie ticket for', 'get movie ticket to', 'get movie seat for', 'get movie seat to', 'get movie spot for', 'get movie spot to', 'get movie tickets for', 'get movie tickets to', 'get movie seats for', 'get movie seats to', 'get movie spots for', 'get movie spots to', 'get movie for', 'get movie to', 'get film ticket for', 'get film ticket to', 'get film seat for', 'get film seat to', 'get film spot for', 'get film spot to', 'get film tickets for', 'get film tickets to', 'get film seats for', 'get film seats to', 'get film spots for', 'get film spots to', 'get film for', 'get film to', 'get films ticket for', 'get films ticket to', 'get films seat for', 'get films seat to', 'get films spot for', 'get films spot to', 'get films tickets for', 'get films tickets to', 'get films seats for', 'get films seats to', 'get films spots for', 'get films spots to', 'get films for', 'get films to', 'get movies ticket for', 'get movies ticket to', 'get movies seat for', 'get movies seat to', 'get movies spot for', 'get movies spot to', 'get movies tickets for', 'get movies tickets to', 'get movies seats for', 'get movies seats to', 'get movies spots for', 'get movies spots to', 'get movies for', 'get movies to', 'get films ticket for', 'get films ticket to', 'get films seat for', 'get films seat to', 'get films spot for', 'get films spot to', 'get films tickets for', 'get films tickets to', 'get films seats for', 'get films seats to', 'get films spots for', 'get films spots to', 'get films for', 'get films to', 'order movie ticket for', 'order movie ticket to', 'order movie seat for', 'order movie seat to', 'order movie spot for', 'order movie spot to', 'order movie tickets for', 'order movie tickets to', 'order movie seats for', 'order movie seats to', 'order movie spots for', 'order movie spots to', 'order movie for', 'order movie to', 'order film ticket for', 'order film ticket to', 'order film seat for', 'order film seat to', 'order film spot for', 'order film spot to', 'order film tickets for', 'order film tickets to', 'order film seats for', 'order film seats to', 'order film spots for', 'order film spots to', 'order film for', 'order film to', 'order films ticket for', 'order films ticket to', 'order films seat for', 'order films seat to', 'order films spot for', 'order films spot to', 'order films tickets for', 'order films tickets to', 'order films seats for', 'order films seats to', 'order films spots for', 'order films spots to', 'order films for', 'order films to', 'order movies ticket for', 'order movies ticket to', 'order movies seat for', 'order movies seat to', 'order movies spot for', 'order movies spot to', 'order movies tickets for', 'order movies tickets to', 'order movies seats for', 'order movies seats to', 'order movies spots for', 'order movies spots to', 'order movies for', 'order movies to', 'order films ticket for', 'order films ticket to', 'order films seat for', 'order films seat to', 'order films spot for', 'order films spot to', 'order films tickets for', 'order films tickets to', 'order films seats for', 'order films seats to', 'order films spots for', 'order films spots to', 'order films for', 'order films to', 'purchase movie ticket for', 'purchase movie ticket to', 'purchase movie seat for', 'purchase movie seat to', 'purchase movie spot for', 'purchase movie spot to', 'purchase movie tickets for', 'purchase movie tickets to', 'purchase movie seats for', 'purchase movie seats to', 'purchase movie spots for', 'purchase movie spots to', 'purchase movie for', 'purchase movie to', 'purchase film ticket for', 'purchase film ticket to', 'purchase film seat for', 'purchase film seat to', 'purchase film spot for', 'purchase film spot to', 'purchase film tickets for', 'purchase film tickets to', 'purchase film seats for', 'purchase film seats to', 'purchase film spots for', 'purchase film spots to', 'purchase film for', 'purchase film to', 'purchase films ticket for', 'purchase films ticket to', 'purchase films seat for', 'purchase films seat to', 'purchase films spot for', 'purchase films spot to', 'purchase films tickets for', 'purchase films tickets to', 'purchase films seats for', 'purchase films seats to', 'purchase films spots for', 'purchase films spots to', 'purchase films for', 'purchase films to', 'purchase movies ticket for', 'purchase movies ticket to', 'purchase movies seat for', 'purchase movies seat to', 'purchase movies spot for', 'purchase movies spot to', 'purchase movies tickets for', 'purchase movies tickets to', 'purchase movies seats for', 'purchase movies seats to', 'purchase movies spots for', 'purchase movies spots to', 'purchase movies for', 'purchase movies to', 'purchase films ticket for', 'purchase films ticket to', 'purchase films seat for', 'purchase films seat to', 'purchase films spot for', 'purchase films spot to', 'purchase films tickets for', 'purchase films tickets to', 'purchase films seats for', 'purchase films seats to', 'purchase films spots for', 'purchase films spots to', 'purchase films for', 'purchase films to', 'need movie ticket for', 'need movie ticket to', 'need movie seat for', 'need movie seat to', 'need movie spot for', 'need movie spot to', 'need movie tickets for', 'need movie tickets to', 'need movie seats for', 'need movie seats to', 'need movie spots for', 'need movie spots to', 'need movie for', 'need movie to', 'need film ticket for', 'need film ticket to', 'need film seat for', 'need film seat to', 'need film spot for', 'need film spot to', 'need film tickets for', 'need film tickets to', 'need film seats for', 'need film seats to', 'need film spots for', 'need film spots to', 'need film for', 'need film to', 'need films ticket for', 'need films ticket to', 'need films seat for', 'need films seat to', 'need films spot for', 'need films spot to', 'need films tickets for', 'need films tickets to', 'need films seats for', 'need films seats to', 'need films spots for', 'need films spots to', 'need films for', 'need films to', 'need movies ticket for', 'need movies ticket to', 'need movies seat for', 'need movies seat to', 'need movies spot for', 'need movies spot to', 'need movies tickets for', 'need movies tickets to', 'need movies seats for', 'need movies seats to', 'need movies spots for', 'need movies spots to', 'need movies for', 'need movies to', 'need films ticket for', 'need films ticket to', 'need films seat for', 'need films seat to', 'need films spot for', 'need films spot to', 'need films tickets for', 'need films tickets to', 'need films seats for', 'need films seats to', 'need films spots for', 'need films spots to', 'need films for', 'need films to', 'want movie ticket for', 'want movie ticket to', 'want movie seat for', 'want movie seat to', 'want movie spot for', 'want movie spot to', 'want movie tickets for', 'want movie tickets to', 'want movie seats for', 'want movie seats to', 'want movie spots for', 'want movie spots to', 'want movie for', 'want movie to', 'want film ticket for', 'want film ticket to', 'want film seat for', 'want film seat to', 'want film spot for', 'want film spot to', 'want film tickets for', 'want film tickets to', 'want film seats for', 'want film seats to', 'want film spots for', 'want film spots to', 'want film for', 'want film to', 'want films ticket for', 'want films ticket to', 'want films seat for', 'want films seat to', 'want films spot for', 'want films spot to', 'want films tickets for', 'want films tickets to', 'want films seats for', 'want films seats to', 'want films spots for', 'want films spots to', 'want films for', 'want films to', 'want movies ticket for', 'want movies ticket to', 'want movies seat for', 'want movies seat to', 'want movies spot for', 'want movies spot to', 'want movies tickets for', 'want movies tickets to', 'want movies seats for', 'want movies seats to', 'want movies spots for', 'want movies spots to', 'want movies for', 'want movies to', 'want films ticket for', 'want films ticket to', 'want films seat for', 'want films seat to', 'want films spot for', 'want films spot to', 'want films tickets for', 'want films tickets to', 'want films seats for', 'want films seats to', 'want films spots for', 'want films spots to', 'want films for', 'want films to', 'need to movie ticket for', 'need to movie ticket to', 'need to movie seat for', 'need to movie seat to', 'need to movie spot for', 'need to movie spot to', 'need to movie tickets for', 'need to movie tickets to', 'need to movie seats for', 'need to movie seats to', 'need to movie spots for', 'need to movie spots to', 'need to movie for', 'need to movie to', 'need to film ticket for', 'need to film ticket to', 'need to film seat for', 'need to film seat to', 'need to film spot for', 'need to film spot to', 'need to film tickets for', 'need to film tickets to', 'need to film seats for', 'need to film seats to', 'need to film spots for', 'need to film spots to', 'need to film for', 'need to film to', 'need to films ticket for', 'need to films ticket to', 'need to films seat for', 'need to films seat to', 'need to films spot for', 'need to films spot to', 'need to films tickets for', 'need to films tickets to', 'need to films seats for', 'need to films seats to', 'need to films spots for', 'need to films spots to', 'need to films for', 'need to films to', 'need to movies ticket for', 'need to movies ticket to', 'need to movies seat for', 'need to movies seat to', 'need to movies spot for', 'need to movies spot to', 'need to movies tickets for', 'need to movies tickets to', 'need to movies seats for', 'need to movies seats to', 'need to movies spots for', 'need to movies spots to', 'need to movies for', 'need to movies to', 'need to films ticket for', 'need to films ticket to', 'need to films seat for', 'need to films seat to', 'need to films spot for', 'need to films spot to', 'need to films tickets for', 'need to films tickets to', 'need to films seats for', 'need to films seats to', 'need to films spots for', 'need to films spots to', 'need to films for', 'need to films to', 'want to movie ticket for', 'want to movie ticket to', 'want to movie seat for', 'want to movie seat to', 'want to movie spot for', 'want to movie spot to', 'want to movie tickets for', 'want to movie tickets to', 'want to movie seats for', 'want to movie seats to', 'want to movie spots for', 'want to movie spots to', 'want to movie for', 'want to movie to', 'want to film ticket for', 'want to film ticket to', 'want to film seat for', 'want to film seat to', 'want to film spot for', 'want to film spot to', 'want to film tickets for', 'want to film tickets to', 'want to film seats for', 'want to film seats to', 'want to film spots for', 'want to film spots to', 'want to film for', 'want to film to', 'want to films ticket for', 'want to films ticket to', 'want to films seat for', 'want to films seat to', 'want to films spot for', 'want to films spot to', 'want to films tickets for', 'want to films tickets to', 'want to films seats for', 'want to films seats to', 'want to films spots for', 'want to films spots to', 'want to films for', 'want to films to', 'want to movies ticket for', 'want to movies ticket to', 'want to movies seat for', 'want to movies seat to', 'want to movies spot for', 'want to movies spot to', 'want to movies tickets for', 'want to movies tickets to', 'want to movies seats for', 'want to movies seats to', 'want to movies spots for', 'want to movies spots to', 'want to movies for', 'want to movies to', 'want to films ticket for', 'want to films ticket to', 'want to films seat for', 'want to films seat to', 'want to films spot for', 'want to films spot to', 'want to films tickets for', 'want to films tickets to', 'want to films seats for', 'want to films seats to', 'want to films spots for', 'want to films spots to', 'want to films for', 'want to films to'], 'response': ['Let me suggest you movies <a href="BOOK_MOVIE_URL" target="_blank">Click Here</a>', 'Let me show you the movies <a href="BOOK_MOVIE_URL" target="_blank">Click Here</a>', 'Let me book your movie <a href="BOOK_MOVIE_URL" target="_blank">Click Here</a>', 'Let me reserve your movie <a href="BOOK_MOVIE_URL" target="_blank">Click Here</a>']}, {'tag': 'play_videos', 'pattern': ['play video', 'play clip', 'play footage', 'play recording', 'play dvd', 'play trailer', 'play scene', 'play blooper', 'play preview', 'play videos', 'play clips', 'play footages', 'play recordings', 'play dvds', 'play trailers', 'play scenes', 'play bloopers', 'play previews', 'play song', 'play music', 'play bgm', 'play soundtrack', 'play karioke', 'play ostsongs', 'play music', 'play bgms', 'play soundtracks', 'play kariokes', 'play osts', 'listen to video', 'listen to clip', 'listen to footage', 'listen to recording', 'listen to dvd', 'listen to trailer', 'listen to scene', 'listen to blooper', 'listen to preview', 'listen to videos', 'listen to clips', 'listen to footages', 'listen to recordings', 'listen to dvds', 'listen to trailers', 'listen to scenes', 'listen to bloopers', 'listen to previews', 'listen to song', 'listen to music', 'listen to bgm', 'listen to soundtrack', 'listen to karioke', 'listen to ostsongs', 'listen to music', 'listen to bgms', 'listen to soundtracks', 'listen to kariokes', 'listen to osts', 'hear video', 'hear clip', 'hear footage', 'hear recording', 'hear dvd', 'hear trailer', 'hear scene', 'hear blooper', 'hear preview', 'hear videos', 'hear clips', 'hear footages', 'hear recordings', 'hear dvds', 'hear trailers', 'hear scenes', 'hear bloopers', 'hear previews', 'hear song', 'hear music', 'hear bgm', 'hear soundtrack', 'hear karioke', 'hear ostsongs', 'hear music', 'hear bgms', 'hear soundtracks', 'hear kariokes', 'hear osts', 'watch video', 'watch clip', 'watch footage', 'watch recording', 'watch dvd', 'watch trailer', 'watch scene', 'watch blooper', 'watch preview', 'watch videos', 'watch clips', 'watch footages', 'watch recordings', 'watch dvds', 'watch trailers', 'watch scenes', 'watch bloopers', 'watch previews', 'watch song', 'watch music', 'watch bgm', 'watch soundtrack', 'watch karioke', 'watch ostsongs', 'watch music', 'watch bgms', 'watch soundtracks', 'watch kariokes', 'watch osts', 'see video', 'see clip', 'see footage', 'see recording', 'see dvd', 'see trailer', 'see scene', 'see blooper', 'see preview', 'see videos', 'see clips', 'see footages', 'see recordings', 'see dvds', 'see trailers', 'see scenes', 'see bloopers', 'see previews', 'see song', 'see music', 'see bgm', 'see soundtrack', 'see karioke', 'see ostsongs', 'see music', 'see bgms', 'see soundtracks', 'see kariokes', 'see osts'], 'response': ['Let me show you the videos <a href="PLAY_VIDEOS_URL" target="_blank">Click Here</a>', 'Let me show you the clips <a href="PLAY_VIDEOS_URL" target="_blank">Click Here</a>', 'Let me show you the footages <a href="PLAY_VIDEOS_URL" target="_blank">Click Here</a>', 'Let me show you the recordings <a href="PLAY_VIDEOS_URL" target="_blank">Click Here</a>']
 }, {'tag': 'ai_name',
  'pattern': ['what is your name?',
   'what is your name',
   "what's your name?",
   "what's your name",
   'what do I call you?',
   'introduce yourself',
   'introduction about yourself',
   'do you have a name?',
   'who are you?',
   'how do i call you',
   'how would you like me to call you?',
   'what would you like me to call you?',
   'what do you call yourself?',
   'what is the name of the program?'],
  'response': ['I am PDA_NAME',
   'I am PDA_NAME. How can I help you?',
   'I am PDA_NAME. What can I do for you?',
   'I am PDA_NAME. What can I help you with?']},
 {'tag': 'hello_ai_name',
  'pattern': ['hello what is your name?',
   'hello what is your name',
   "hello what's your name?",
   "hello what's your name",
   'hello what do I call you?',
   'hello introduce yourself',
   'hello introduction about yourself',
   'hello do you have a name?',
   'hello who are you?',
   'hello how do i call you',
   'hello how would you like me to call you?',
   'hello what would you like me to call you?',
   'hello what do you call yourself?',
   'hello what is the name of the program?',
   'hi what is your name?',
   'hi what is your name',
   "hi what's your name?",
   "hi what's your name",
   'hi what do I call you?',
   'hi introduce yourself',
   'hi introduction about yourself',
   'hi do you have a name?',
   'hi who are you?',
   'hi how do i call you',
   'hi how would you like me to call you?',
   'hi what would you like me to call you?',
   'hi what do you call yourself?',
   'hi what is the name of the program?',
   'hey what is your name?',
   'hey what is your name',
   "hey what's your name?",
   "hey what's your name",
   'hey what do I call you?',
   'hey introduce yourself',
   'hey introduction about yourself',
   'hey do you have a name?',
   'hey who are you?',
   'hey how do i call you',
   'hey how would you like me to call you?',
   'hey what would you like me to call you?',
   'hey what do you call yourself?',
   'hey what is the name of the program?',
   'whatsup what is your name?',
   'whatsup what is your name',
   "whatsup what's your name?",
   "whatsup what's your name",
   'whatsup what do I call you?',
   'whatsup introduce yourself',
   'whatsup introduction about yourself',
   'whatsup do you have a name?',
   'whatsup who are you?',
   'whatsup how do i call you',
   'whatsup how would you like me to call you?',
   'whatsup what would you like me to call you?',
   'whatsup what do you call yourself?',
   'whatsup what is the name of the program?',
   'howdy what is your name?',
   'howdy what is your name',
   "howdy what's your name?",
   "howdy what's your name",
   'howdy what do I call you?',
   'howdy introduce yourself',
   'howdy introduction about yourself',
   'howdy do you have a name?',
   'howdy who are you?',
   'howdy how do i call you',
   'howdy how would you like me to call you?',
   'howdy what would you like me to call you?',
   'howdy what do you call yourself?',
   'howdy what is the name of the program?',
   'good morning what is your name?',
   'good morning what is your name',
   "good morning what's your name?",
   "good morning what's your name",
   'good morning what do I call you?',
   'good morning introduce yourself',
   'good morning introduction about yourself',
   'good morning do you have a name?',
   'good morning who are you?',
   'good morning how do i call you',
   'good morning how would you like me to call you?',
   'good morning what would you like me to call you?',
   'good morning what do you call yourself?',
   'good morning what is the name of the program?',
   'good afternoon what is your name?',
   'good afternoon what is your name',
   "good afternoon what's your name?",
   "good afternoon what's your name",
   'good afternoon what do I call you?',
   'good afternoon introduce yourself',
   'good afternoon introduction about yourself',
   'good afternoon do you have a name?',
   'good afternoon who are you?',
   'good afternoon how do i call you',
   'good afternoon how would you like me to call you?',
   'good afternoon what would you like me to call you?',
   'good afternoon what do you call yourself?',
   'good afternoon what is the name of the program?',
   'good evening what is your name?',
   'good evening what is your name',
   "good evening what's your name?",
   "good evening what's your name",
   'good evening what do I call you?',
   'good evening introduce yourself',
   'good evening introduction about yourself',
   'good evening do you have a name?',
   'good evening who are you?',
   'good evening how do i call you',
   'good evening how would you like me to call you?',
   'good evening what would you like me to call you?',
   'good evening what do you call yourself?',
   'good evening what is the name of the program?',
   'good day what is your name?',
   'good day what is your name',
   "good day what's your name?",
   "good day what's your name",
   'good day what do I call you?',
   'good day introduce yourself',
   'good day introduction about yourself',
   'good day do you have a name?',
   'good day who are you?',
   'good day how do i call you',
   'good day how would you like me to call you?',
   'good day what would you like me to call you?',
   'good day what do you call yourself?',
   'good day what is the name of the program?',
   'good night what is your name?',
   'good night what is your name',
   "good night what's your name?",
   "good night what's your name",
   'good night what do I call you?',
   'good night introduce yourself',
   'good night introduction about yourself',
   'good night do you have a name?',
   'good night who are you?',
   'good night how do i call you',
   'good night how would you like me to call you?',
   'good night what would you like me to call you?',
   'good night what do you call yourself?',
   'good night what is the name of the program?'],
  'response': ['Hello! I am PDA_NAME',
   'Hello! I am PDA_NAME. How can I help you?',
   'Hello! I am PDA_NAME. What can I do for you?',
   'Hello! I am PDA_NAME. What can I help you with?']},
 {'tag': 'hello',
  'pattern': ['hello',
   'hi',
   'hey',
   'whatsup',
   'howdy',
   'good morning',
   'good afternoon',
   'good evening',
   'good day',
   'good night'],
  'response': ['Hello!',
   'Hi!',
   'Hello there!!',
   'Hi there!!',
   'Hey!!',
   'Hey there!!']},
 {'tag': 'how_are_you',
  'pattern': ['how are you?',
   'how are you doing?',
   'how have you been?',
   'how is it going?',
   'how are we?',
   'how are we doing?',
   'how are you doing?'],
  'response': ['I am fine. Thank you!',
   'I am well. Thanks for asking',
   'I am good. Hope you are doing well too.']},
 {'tag': 'hello_how_are_you',
  'pattern': ['hello how are you?',
   'hello how are you doing?',
   'hello how have you been?',
   'hello how is it going?',
   'hello how are we?',
   'hello how are we doing?',
   'hello how are you doing?',
   'hi how are you?',
   'hi how are you doing?',
   'hi how have you been?',
   'hi how is it going?',
   'hi how are we?',
   'hi how are we doing?',
   'hi how are you doing?',
   'hey how are you?',
   'hey how are you doing?',
   'hey how have you been?',
   'hey how is it going?',
   'hey how are we?',
   'hey how are we doing?',
   'hey how are you doing?',
   'whatsup how are you?',
   'whatsup how are you doing?',
   'whatsup how have you been?',
   'whatsup how is it going?',
   'whatsup how are we?',
   'whatsup how are we doing?',
   'whatsup how are you doing?',
   'howdy how are you?',
   'howdy how are you doing?',
   'howdy how have you been?',
   'howdy how is it going?',
   'howdy how are we?',
   'howdy how are we doing?',
   'howdy how are you doing?',
   'good morning how are you?',
   'good morning how are you doing?',
   'good morning how have you been?',
   'good morning how is it going?',
   'good morning how are we?',
   'good morning how are we doing?',
   'good morning how are you doing?',
   'good afternoon how are you?',
   'good afternoon how are you doing?',
   'good afternoon how have you been?',
   'good afternoon how is it going?',
   'good afternoon how are we?',
   'good afternoon how are we doing?',
   'good afternoon how are you doing?',
   'good evening how are you?',
   'good evening how are you doing?',
   'good evening how have you been?',
   'good evening how is it going?',
   'good evening how are we?',
   'good evening how are we doing?',
   'good evening how are you doing?',
   'good day how are you?',
   'good day how are you doing?',
   'good day how have you been?',
   'good day how is it going?',
   'good day how are we?',
   'good day how are we doing?',
   'good day how are you doing?',
   'good night how are you?',
   'good night how are you doing?',
   'good night how have you been?',
   'good night how is it going?',
   'good night how are we?',
   'good night how are we doing?',
   'good night how are you doing?'],
  'response': ['Hello! I am fine. Thank you!',
   'Hello! I am well. Thanks for asking',
   'Hello! I am good. Hope you are doing well too.',
   'Hi! I am fine. Thank you!',
   'Hi! I am well. Thanks for asking',
   'Hi! I am good. Hope you are doing well too.',
   'Hello there!! I am fine. Thank you!',
   'Hello there!! I am well. Thanks for asking',
   'Hello there!! I am good. Hope you are doing well too.',
   'Hi there!! I am fine. Thank you!',
   'Hi there!! I am well. Thanks for asking',
   'Hi there!! I am good. Hope you are doing well too.',
   'Hey!! I am fine. Thank you!',
   'Hey!! I am well. Thanks for asking',
   'Hey!! I am good. Hope you are doing well too.',
   'Hey there!! I am fine. Thank you!',
   'Hey there!! I am well. Thanks for asking',
   'Hey there!! I am good. Hope you are doing well too.']},
 {'tag': 'user_is_well',
  'pattern': ['I am well',
   'I am fine',
   'I am good',
   'Never been better',
   'I am great',
   'I am doing great',
   'I am doing well'],
  'response': ['Glad to hear it',
   'Happy to hear',
   'Glad to know',
   'Glad to hear',
   'Happy to hear',
   'Happy to know']},
 {'tag': 'user_is_unwell',
  'pattern': ['I am not well',
   'I am not good',
   'I am not fine',
   'I am not doing well',
   'I am not doing great',
   'I am not great',
   'I am not great',
   'I am unwell',
   'I am depressed',
   'I am sad',
   'I am not doing good'],
  'response': ['I am sorry to hear that. How can I help you?',
   'I am sorry to hear that. How can I help you?',
   'I am sorry to hear that. What can I do for you?',
   'I am sorry to hear that. What can I help you with?',
   'I am sorry to hear that. What can I do to help you?',
   'I am sorry to hear that. What can I help you with?',
   'I am sorry to hear that. What can I do to help you?']},
 {'tag': 'shopping',
  'pattern': ['i want buy',
   'i want perchase',
   'i want get',
   'i want pick up',
   'i wanna buy',
   'i wanna perchase',
   'i wanna get',
   'i wanna pick up',
   'i would like to buy',
   'i would like to perchase',
   'i would like to get',
   'i would like to pick up',
   'i have to buy',
   'i have to perchase',
   'i have to get',
   'i have to pick up',
   'i need to buy',
   'i need to perchase',
   'i need to get',
   'i need to pick up',
   'i need buy',
   'i need perchase',
   'i need get',
   'i need pick up',
   'we want buy',
   'we want perchase',
   'we want get',
   'we want pick up',
   'we wanna buy',
   'we wanna perchase',
   'we wanna get',
   'we wanna pick up',
   'we would like to buy',
   'we would like to perchase',
   'we would like to get',
   'we would like to pick up',
   'we have to buy',
   'we have to perchase',
   'we have to get',
   'we have to pick up',
   'we need to buy',
   'we need to perchase',
   'we need to get',
   'we need to pick up',
   'we need buy',
   'we need perchase',
   'we need get',
   'we need pick up'],
  'response': ['Alright, Let\'s go shopping for it <a href="SEARCH_URL" target="_blank">Click Here</a>',
   'Let me pull out what\'s available online <a href="SEARCH_URL" target="_blank">Click Here</a>',
   'Let me take you shopping <a href="SEARCH_URL" target="_blank">Click Here</a>']},
 {'tag': 'GPS',
  'pattern': ['show map to',
   'show map towards',
   'show gps to',
   'show gps towards',
   'show location to',
   'show location towards',
   'show route to',
   'show route towards',
   'show path to',
   'show path towards',
   'show direction to',
   'show direction towards',
   'show way to',
   'show way towards',
   'show road to',
   'show road towards',
   'display map to',
   'display map towards',
   'display gps to',
   'display gps towards',
   'display location to',
   'display location towards',
   'display route to',
   'display route towards',
   'display path to',
   'display path towards',
   'display direction to',
   'display direction towards',
   'display way to',
   'display way towards',
   'display road to',
   'display road towards',
   'tell map to',
   'tell map towards',
   'tell gps to',
   'tell gps towards',
   'tell location to',
   'tell location towards',
   'tell route to',
   'tell route towards',
   'tell path to',
   'tell path towards',
   'tell direction to',
   'tell direction towards',
   'tell way to',
   'tell way towards',
   'tell road to',
   'tell road towards',
   'get me map to',
   'get me map towards',
   'get me gps to',
   'get me gps towards',
   'get me location to',
   'get me location towards',
   'get me route to',
   'get me route towards',
   'get me path to',
   'get me path towards',
   'get me direction to',
   'get me direction towards',
   'get me way to',
   'get me way towards',
   'get me road to',
   'get me road towards',
   'give me map to',
   'give me map towards',
   'give me gps to',
   'give me gps towards',
   'give me location to',
   'give me location towards',
   'give me route to',
   'give me route towards',
   'give me path to',
   'give me path towards',
   'give me direction to',
   'give me direction towards',
   'give me way to',
   'give me way towards',
   'give me road to',
   'give me road towards',
   'where is',
   'where are',
   'where was',
   'where have',
   'where has'],
  'response': ['Let me show you the GPS <a href="GPS_URL" target="_blank">Click Here</a>',
   'Let me show you the map <a href="GPS_URL" target="_blank">Click Here</a>',
   'Let me show you the route <a href="GPS_URL" target="_blank">Click Here</a>']},
 {'tag': 'google_search',
  'pattern': ['search for',
   'find',
   'look for',
   'look up',
   'look up for',
   'look up on',
   'look up on google',
   'look up on google for',
   'I want to visit',
   'I want to go to',
   'I want to go',
   'I want to see',
   'play the song',
   'play the video',
   'play the music',
   'play the movie',
   'play the audio',
   'play the audio book',
   'play the audio book',
   'I wanna listen to',
   'I wanna listen',
   'I want to listen to',
   'I want to listenI wanna watch',
   'I wanna watch the',
   'I wanna watch the movie',
   'I want to watch',
   'I want to watch the',
   'I want to watch the movie',
   'I want to play',
   'I want to play the',
   'I want to play the song',
   'I want to play the video',
   'I want to play the music',
   'I want to play the movie',
   'I want to play the audio',
   'I want to play the audio book',
   'who is',
   'who are',
   'who was',
   'who have',
   'who has',
   'what is',
   'what are',
   'what was',
   'what have',
   'what has',
   'how is',
   'how are',
   'how was',
   'how have',
   'how has',
   'where is',
   'where are',
   'where was',
   'where have',
   'where has',
   'when is',
   'when are',
   'when was',
   'when have',
   'when has',
   'why is',
   'why are',
   'why was',
   'why have',
   'why has',
   'how to',
   'how can',
   'how should',
   'how will',
   'how would',
   'how often',
   'how often is',
   'how often are',
   'how often was',
   'how often have',
   'how often has',
   'how much is',
   'how much are',
   'how much was',
   'how much have',
   'how much has',
   'how many is',
   'how many are',
   'how many was',
   'how many have',
   'how many has',
   'how many times'],
  'response': ['Let me show you the result <br><a href="SEARCH_URL" target="_blank">Click Here</a>',
   'Let me initiate a search for you <br><a href="SEARCH_URL" target="_blank">Click Here</a>',
   'Let me look for it <br><a href="SEARCH_URL" target="_blank">Click Here</a>']},
 {'tag': 'my_search',
  'pattern': ['bring website',
   'bring site',
   'bring wenpage',
   'bring web',
   'bring page',
   'get website',
   'get site',
   'get wenpage',
   'get web',
   'get page',
   'go to website',
   'go to site',
   'go to wenpage',
   'go to web',
   'go to page',
   'visit website',
   'visit site',
   'visit wenpage',
   'visit web',
   'visit page',
   'go website',
   'go site',
   'go wenpage',
   'go web',
   'go page',
   'take website',
   'take site',
   'take wenpage',
   'take web',
   'take page',
   'show website',
   'show site',
   'show wenpage',
   'show web',
   'show page',
   'display website',
   'display site',
   'display wenpage',
   'display web',
   'display page',
   'take me to website',
   'take me to site',
   'take me to wenpage',
   'take me to web',
   'take me to page'],
  'response': ['Let me take you to the website <a href="MY_SEARCH_URL" target="_blank">Click Here</a>',
   'Let me show you the website <a href="MY_SEARCH_URL" target="_blank">Click Here</a>',
   'Let me redirect you to the website <a href="MY_SEARCH_URL" target="_blank">Click Here</a>']},
 {'tag': 'thank_you',
  'pattern': ['thank you',
   'thanks',
   'thank you very much',
   'thank you so much',
   'thank you very much',
   'thank you so much',
   'owe you one'],
  'response': ['You are welcome',
   'Its my pleasure',
   'Its my pleasure to help you',
   'You are always welcome',
   'You are more than welcome']},
 {'tag': 'time',
  'pattern': ['what time is it',
   'what is the time',
   'what is the time now',
   'what is the time right now',
   'what is the time right now',
   'what is the time',
   'what is the time now',
   'what is the time right now',
   'time please',
   'current time pleasetime',
   'current time'],
  'response': ['The time is CURRENT_TIME',
   'The time is now CURRENT_TIME',
   'The time is right now CURRENT_TIME']},
 {'tag': 'date',
  'pattern': ['what date is it',
   'what is the date',
   'what is the date now',
   'what is the date todaywhat is the date right now',
   'what is the date right now'],
  'response': ['The date is CURRENT_DATE',
   'The date is now CURRENT_DATE',
   'The date is right now CURRENT_DATE']},
 {'tag': 'date_and_time',
  'pattern': ['what date and time is it',
   'what is the date and time',
   'what is the date and time now',
   'what is the date and time right now',
   'what is the date and time right now'],
  'response': ['The date and time is CURRENT_DATE_ CURRENT_TIME',
   'The date and time is now CURRENT_DATE_ CURRENT_TIME',
   'The date and time is right now CURRENT_DATE CURRENT_TIME']},
 {'tag': 'reminder',
  'pattern': ['set a reminder',
   'set a reminder for me',
   'remind me to',
   'set an alert',
   'set an alert for me',
   'prompt me toprompt me to remind me'],
  'response': ['Alright, I will surely remind you', 'Setting a reminder now']},
 {'tag': 'bye',
  'pattern': ['bye',
   'goodbye',
   'see you',
   'see you later',
   'see you soon',
   'see you tomorrow'],
  'response': ['bye',
   'goodbye',
   'see you',
   'see you later',
   'see you soon',
   'see you tomorrow',
   'bye bye']}];
 
  return intents;
}


// // Function to get current time
// function getCurrentTime() {
//     const now = new Date();
//     return now.toLocaleTimeString();
// }

// // Function to get current date
// function getCurrentDate() {
//     const now = new Date();
//     return now.toLocaleDateString();
// }

// // Function to replace placeholders with dynamic values
// function replacePlaceholders(response, userInput) {
//     return response
//         .replace(/PDA_NAME/g, "Veronica")
//         .replace(/CURRENT_TIME/g, getCurrentTime())
//         .replace(/CURRENT_DATE/g, getCurrentDate())
//         .replace(/GPS_URL/g, "https://www.google.com/maps?q=" + encodeURIComponent(userInput))
//         .replace(/SEARCH_URL/g, "https://www.google.com/search?q=" + encodeURIComponent(userInput) + "&igu=1")
//         .replace(/MY_SEARCH_URL/g, "https://void-web-search-app.vercel.app/search/" + encodeURIComponent(userInput));
// }

// // Function to find a matching intent
// function matchIntent(userInput) {
//     for (let intent of intents) {
//         for (let pattern of intent.pattern) {
//             const regex = new RegExp(pattern, "i");
//             if (regex.test(userInput)) {
//                 return intent;
//             }
//         }
//     }
//     return null;
// }

// // Function to handle user input and generate a response
// function handleUserInput() {
//     const userInput = document.getElementById("user-input").value;
//     const chatLog = document.getElementById("chat-log");

//     if (userInput.trim() === "") {
//         return;
//     }

//     // Append user's message to chat log
//     const userMessage = document.createElement("p");
//     userMessage.textContent = "You: " + userInput;
//     chatLog.appendChild(userMessage);

//     // Find matching intent
//     const intent = matchIntent(userInput);

//     if (intent) {
//         const responseTemplate = intent.response[Math.floor(Math.random() * intent.response.length)];
//         const finalResponse = replacePlaceholders(responseTemplate, userInput);

//         // Append assistant's response to chat log
//         const assistantMessage = document.createElement("p");
//         assistantMessage.innerHTML = "Veronica: " + finalResponse;
//         chatLog.appendChild(assistantMessage);
//     } else {
//         // If no matching intent is found, provide a default response
//         const assistantMessage = document.createElement("p");
//         assistantMessage.innerHTML = "Veronica: I'm sorry, I didn't understand that. Could you please rephrase?";
//         chatLog.appendChild(assistantMessage);
//     }

//     // Clear the user input
//     document.getElementById("user-input").value = "";

//     // Scroll chat log to bottom
//     chatLog.scrollTop = chatLog.scrollHeight;
// }

// // Attach event listener to the Send button
// document.getElementById("send-btn").addEventListener("click", handleUserInput);

// // Allow pressing Enter to send message
// document.getElementById("user-input").addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         handleUserInput();
//     }
// });







var intents = data()
// Vocabulary building from patterns (preprocessing)
const vocabulary = buildVocabulary(intents);
// const vocabulary = buildVocabulary(data());

// Train logistic regression on the intent patterns
// const weights = trainLogisticRegression(intents, vocabulary, 1000, 0.01);
const weights = trainLogisticRegression(intents, vocabulary, 500, 0.02);

// function speak(text) {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US'; // You can change this to any supported language
//     window.speechSynthesis.speak(utterance);
// }

// Check for browser support
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function startSpeechRecognition() {
    if (!window.SpeechRecognition) {
        alert("Speech Recognition is not supported in your browser. Please try using Google Chrome.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US'; // You can change this to any supported language
    recognition.interimResults = false; // Set to true if you want to get partial (interim) results
    recognition.maxAlternatives = 1; // Maximum number of alternatives for recognition

    recognition.start();

    recognition.onresult = function(event) {
        // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
        // The SpeechRecognitionResultList contains SpeechRecognitionResult objects.
        // It has a getter so it can be accessed like an array
        // The first [0] returns the SpeechRecognitionResult at the last position.
        // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
        // These also have getters so they can be accessed like arrays.
        // The first [0] returns the SpeechRecognitionAlternative with the highest confidence.
        const transcript = event.results[0][0].transcript;
        console.log("You said: ", transcript);

        // You can set the recognized text to the input field or process it as needed
        document.getElementById("user-input").value = transcript;

        // Optionally, trigger the processing of user input after recognition
        handleUserInput();
    };

    recognition.onerror = function(event) {
        console.error("Speech recognition error detected: " + event.error);
    };

    recognition.onend = function() {
        console.log("Speech recognition service disconnected");
    };
}

// Attach event listener to the Listen button
document.getElementById("listen-btn").addEventListener("click", startSpeechRecognition);



window.speechSynthesis.onvoiceschanged = function() {
    // Re-fetch the voices after they have loaded
    const femaleVoice = getFemaleVoice();
    console.log(femaleVoice);
};


function getFemaleVoice() {
    const voices = window.speechSynthesis.getVoices();
    // Filter for female voices (this may vary depending on the available voices in the browser)
    const femaleVoices = voices.filter(voice => voice.name.includes('Female') || voice.name.includes('woman'));
    // Return the first female voice found, or a default voice if none found
    return femaleVoices.length > 0 ? femaleVoices[0] : voices[0];
    // return voices[7];
}

// Function to speak a given text using the Web Speech API
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    var femaleVoice = getFemaleVoice();
    utterance.voice = femaleVoice;
    console.log(femaleVoice)
    utterance.lang = 'en-US'; // You can change this to the desired language
    // window.setTimeout(function () {window.speechSynthesis.speak(utterance);}, 250);
    window.speechSynthesis.speak(utterance);
}

// Function to get current time
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}

// Function to get current date
function getCurrentDate() {
    const now = new Date();
    return now.toLocaleDateString();
}

// Function to replace placeholders with dynamic values
function replacePlaceholders(response, userInput) {
    return response
        .replace(/PDA_NAME/g, "Atlas")
        .replace(/CURRENT_TIME/g, getCurrentTime())
        .replace(/CURRENT_DATE/g, getCurrentDate())
        // .replace(/GPS_URL/g, "https://www.google.com/maps?q=" + encodeURIComponent(userInput.replace(/ /g, '+')))
        // .replace(/MY_SEARCH_URL/g, "https://void-web-search-app.vercel.app/search/" + encodeURIComponent(userInput.replace(/ /g, '+')))
        // .replace(/SEARCH_URL/g, "https://www.google.com/search?q=" + encodeURIComponent(userInput.replace(/ /g, '+')) + "&igu=1");
        .replace(/GPS_URL/g, "https://www.google.com/maps?q=" + userInput.replace(/ /g, '+'))
        //.replace(/MY_SEARCH_URL/g, "https://void-web-search-app.vercel.app/search/" + userInput.replace(/ /g, '+'))
        .replace(/MY_SEARCH_URL/g, "https://www.google.com/search?q=" + userInput.replace(/ /g, '+') + "&btnI")
        .replace(/SEARCH_URL/g, "https://www.google.com/search?q=" + userInput.replace(/ /g, '+') + "&btnI")
        .replace(/PLAY_VIDEOS_URL/g, "https://www.google.com/search?q=" + userInput.replace(/ /g, '+') + "+on+YouTube&btnI")
        .replace(/BOOK_MOVIE_URL/g, "https://www.google.com/search?q=" + userInput.replace(/ /g, '+') + "+on+Book+My+Show&btnI")
        .replace(/BOOK_BUS_URL/g, "https://www.google.com/search?q=" + userInput.replace(/ /g, '+') + "+on+red+bus&btnI")
        .replace(/BOOK_TRAIN_URL/g, "https://www.google.com/search?q=" + userInput.replace(/ /g, '+') + "&btnI")
        .replace(/BOOK_FLIGHT_URL/g, "https://www.google.com/search?q=" + userInput.replace(/ /g, '+') + "+on+indigo&btnI");
}

// Function to process user input
function handleUserInput() {
    const userInput = document.getElementById("user-input").value;
    const userInputEditted = document.getElementById("user-input").value.replace(/\./g, " . ").replace(/\?/g, " ? ").replace(/\!/g, " ! ").replace(/\,/g, " , ").replace(/\:/g, " : ").replace(/\'/g, " ' ").replace(/\"/g, " \" ");
    const chatLog = document.getElementById("chat-log");

    if (userInput.trim() === "") return;

    // Append user's message to chat log
    const userMessage = document.createElement("p");
    userMessage.textContent = "You: " + userInput;
    chatLog.appendChild(userMessage);

    // Predict the intent using logistic regression
    const intent = predictIntent(userInputEditted, weights, vocabulary);

    var selectedResponse = "AI: I didn't understand that.";
    if (intent) {
        const assistantMessage = document.createElement("p");
        // assistantMessage.textContent = "Veronica: " + intent.response[0];
        // assistantMessage.textContent = "Veronica: " + replacePlaceholders(intent.response[0], userInput);
        // const selectedResponse = intent.response[0]; 
        console.log(intent);
        console.log();
        console.log(intent.response);
        console.log();
        var selectedResponse = intent.response[Math.floor(Math.random() * intent.response.length)];
        var displayResponse = replacePlaceholders(selectedResponse, userInput);
        assistantMessage.innerHTML = "AI: " + displayResponse;
        chatLog.appendChild(assistantMessage);
        // const finalResponse = replacePlaceholders(responseTemplate, userInput);
    } else {
        const assistantMessage = document.createElement("p");
        assistantMessage.textContent = selectedResponse;
        chatLog.appendChild(assistantMessage);
    }

    // Clear user input and scroll chat to the bottom
    document.getElementById("user-input").value = "";
    chatLog.scrollTop = chatLog.scrollHeight;
    speak(displayResponse.split('<')[0])
    if (displayResponse.indexOf('"https') > -1) { window.open("https" + displayResponse.split('"https')[1].split('"')[0], target="_blank")}

}

// Attach event listener to the Send button
document.getElementById("send-btn").addEventListener("click", handleUserInput);

// Allow pressing Enter to send message
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleUserInput();
    }
});
// --- Logistic Regression Functions ---

// Sigmoid function for logistic regression
function sigmoid(z) {
    return 1 / (1 + Math.exp(-z));
}

// Convert text input into vector (based on vocabulary)
function textToVector(text, vocabulary) {
    const words = text.toLowerCase().split(/\s+/);
    const vector = new Array(vocabulary.length).fill(0);
    for (let word of words) {
        const index = vocabulary.indexOf(word);
        if (index > -1) vector[index] = 1;
    }
    return vector;
}

// Build vocabulary from intent patterns
function buildVocabulary(intents) {
    const vocabulary = new Set();
    for (let intent of intents) {
        for (let pattern of intent.pattern) {
            const words = pattern.toLowerCase().split(/\s+/);
            words.forEach(word => vocabulary.add(word));
        }
    }
    return Array.from(vocabulary);
}

// Predict intent using the trained weights
function predictIntent(text, weights, vocabulary) {
    const inputVector = textToVector(text, vocabulary);
    const scores = [];

    for (let i = 0; i < weights.length; i++) {
        let z = 0;
        for (let j = 0; j < inputVector.length; j++) {
            z += inputVector[j] * weights[i][j];
        }
        const probability = sigmoid(z);
        scores.push(probability);
    }

    const maxScoreIndex = scores.indexOf(Math.max(...scores));
    return intents[maxScoreIndex];
}

// Train logistic regression using gradient descent
function trainLogisticRegression(intents, vocabulary, iterations, learningRate) {
    const numFeatures = vocabulary.length;
    const numClasses = intents.length;
    let weights = Array(numClasses).fill(null).map(() => Array(numFeatures).fill(0));

    for (let iter = 0; iter < iterations; iter++) {
        const gradients = Array(numClasses).fill(null).map(() => Array(numFeatures).fill(0));

        for (let intentIndex = 0; intentIndex < intents.length; intentIndex++) {
            for (let pattern of intents[intentIndex].pattern) {
                const inputVector = textToVector(pattern, vocabulary);
                let z = 0;

                for (let j = 0; j < inputVector.length; j++) {
                    z += inputVector[j] * weights[intentIndex][j];
                }

                const predicted = sigmoid(z);
                const error = predicted - 1;  // since the actual label is 1 for this intent

                for (let j = 0; j < inputVector.length; j++) {
                    gradients[intentIndex][j] += inputVector[j] * error;
                }
            }
        }

        // Update weights using gradients
        for (let i = 0; i < numClasses; i++) {
            for (let j = 0; j < numFeatures; j++) {
                weights[i][j] -= learningRate * gradients[i][j];
            }
        }
    }

    return weights;
}

