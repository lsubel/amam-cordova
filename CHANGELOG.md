Change Log
==========

1.4.0  *(2016-05-02)*
--------------------

* Reworked UI structure to be more consistent and clearer
* Added questionnaire description right after its selection
* Reworked translation module
* Massively improved navigation, especially on mobile devices
* Added list mode to show all questions from one questionnaire in list form
* Added contribution notes to honor the people providing new questions (including link to github profile)
* Added new questionnaires
* Improved various translations
* Added more console output for debugging purpose
* Bugfixing

1.3.5  *(2016-04-20)*
--------------------

* Fixed missing fallback method s.t. the application is compatible now with Android 4.2

1.3.4  *(2016-04-12)*
--------------------

* Rewrote config.xml to match the latest Cordova specification
* Disabled InAppBrowser and instead used Intent for external URL
* Added Content-Security-Policy entry in html
* Changed modal background to work the with new content security policy
* Fonts are now stored locally
* Added fallback method to bootstrap the application  (thanks to @aberlin for the hint)


1.3.3  *(2016-04-12)*
--------------------

* New questionnaire added based on the table of content from the book "Who Am I?: And If So, How Many?" by Richard David Precht
* Fixed minor bug in nerd questionnaire (thanks to @aberlin for the hint)


1.3.2  *(2016-04-09)*
--------------------

* Created new application icon
* Language selection now only shows possibilities for selected questionnaire
* Disabled cs questionnaire, enabled nerd one
* Fixed bug where clicking the source code URL wont open a browser window (thanks to @PanderMusubi for the hint)
