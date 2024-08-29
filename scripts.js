const intents = [{'tag': 'ai_name',
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








// Vocabulary building from patterns (preprocessing)
const vocabulary = buildVocabulary(intents);

// Train logistic regression on the intent patterns
const weights = trainLogisticRegression(intents, vocabulary, 1000, 0.01);

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
        .replace(/MY_SEARCH_URL/g, "https://void-web-search-app.vercel.app/search/" + userInput.replace(/ /g, '+'))
        .replace(/SEARCH_URL/g, "https://www.google.com/search?q=" + userInput.replace(/ /g, '+') + "&btnI");
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

