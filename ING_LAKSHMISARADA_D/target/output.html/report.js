$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/ing/au/hackathon/api/features/bitfinex.feature");
formatter.feature({
  "name": "Testing Rest API Automation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To Test the api provided with one ticker",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Enter URL and Test the URL with GET",
  "keyword": "Given "
});
formatter.match({
  "location": "com.ing.au.hackathon.api.stepdefinition.StepDefinitionAPI.enter_URL_and_Test_the_URL_with_GET()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ticker name is provided",
  "keyword": "When "
});
formatter.match({
  "location": "com.ing.au.hackathon.api.stepdefinition.StepDefinitionAPI.ticker_name_is_provided()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should get response with the required data",
  "keyword": "Then "
});
formatter.match({
  "location": "com.ing.au.hackathon.api.stepdefinition.StepDefinitionAPI.should_get_response_with_the_required_data()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c404\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat com.ing.au.hackathon.api.stepdefinition.StepDefinitionAPI.should_get_response_with_the_required_data(StepDefinitionAPI.java:43)\r\n\tat ✽.should get response with the required data(file:///C:/HackathonWS/ING_LAKSHMISARADA_D/./src/test/java/com/ing/au/hackathon/api/features/bitfinex.feature:6)\r\n",
  "status": "failed"
});
});