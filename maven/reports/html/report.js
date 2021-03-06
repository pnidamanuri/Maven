$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/maven/stepdefinitions/login.feature");
formatter.feature({
  "line": 1,
  "name": "Flipkart application test",
  "description": "",
  "id": "flipkart-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Background:"
    }
  ],
  "line": 5,
  "name": "Login to Flipkart",
  "description": "",
  "id": "flipkart-application-test;login-to-flipkart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Login to the application",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I go to Iphone store",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I navigate to Samsung store",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I quit broswer",
  "keyword": "And "
});
formatter.match({
  "location": "Login_step_definition.user_on_home_page()"
});
formatter.result({
  "duration": 7832753749,
  "status": "passed"
});
formatter.match({
  "location": "Login_step_definition.login_to_the_application()"
});
formatter.result({
  "duration": 526359533,
  "status": "passed"
});
formatter.match({
  "location": "Login_step_definition.i_go_to_iphone_store()"
});
formatter.result({
  "duration": 5140667391,
  "status": "passed"
});
formatter.match({
  "location": "Login_step_definition.i_navigate_to_samsung_store_and_select_sansung_j8()"
});
formatter.result({
  "duration": 5176289820,
  "status": "passed"
});
formatter.match({
  "location": "Login_step_definition.i_quit_broswer()"
});
formatter.result({
  "duration": 3991161302,
  "status": "passed"
});
});