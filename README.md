# JavaScriptFundamentalsQuiz
For this project, we were asked to develop a simple JavaScript quiz primarily using JavaScript. The main goal was to use what we had learned from Web API's and applied them to this quiz. The quiz would ideally have 4 sections where:

    1.The user would be in an intro page
    2.Then be directed to the questions to the quiz, followed with their options
    3.Then at the end of the quiz, be able to save and see other previous highscores
    4.The user would then have the option of clearing the highscores or just go back and take the quiz again

Further through this README file you'll find a more thorough explanation of the project, screenshots of the repository, and a live link as well.

## Description of Project
For this section, I will be describing how the overall program is outlined and how it operates. To start, there are two HTML files for organizing the way that the user is directed through the quiz. On the first HTML file:

    1. An Intro-page is displayed where the user is given an explanation before the start of the quiz. They can then click the button to start the quiz.
    2. Once pressed, a timer is displayed on the top right corner and starts to count down. If they answer a question wrong, then 5 seconds are penalized from their time (and their score).
    3. At the start of the quiz, a question is displayed in bold and gives the user 4 options. All 4 options are buttons where the JavaScript determines whether the button pressed is the right or wrong answer. Either if it's right/wrong, the program will let the user know underneath the quesiton and options. This will be itterated 5 times since there's 5 questions.
    4. Once completed, the End-page is displayed where the program asks the user to input their initials. Their initals and score are saved in the local storage once they press the 'Submit' button.

The second HTML file is where the highscores are displayed. Here, the user has some options:
    5. When the user presses the 'Submit' button from the previous step, then they're directed to the second HTML file where the highscores are displayed. This HTML file gathers the array from the local storage and displays it on this screen. 
    6. The user can choose to either delete the highscores or go back to the first HTML file and take the quiz again.

## Screenshots of Repository
Here is a screenshot of the intro page for the quiz: (./Assests/Screenshots/Quiz-End-Page-Screenshot.png)

Here is a screenshot of the questions:

Here is a screenshot of when the user ends the quiz:

Here is a screenshot of the highscores:

## Live Link to Repository
Here is the live link to the repository: https://ucruz2025.github.io/JavaScriptFundamentalsQuiz/