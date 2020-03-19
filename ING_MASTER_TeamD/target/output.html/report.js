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
  "name": "one ticker name is provided as query parameter",
  "keyword": "When "
});
formatter.match({
  "location": "com.ing.au.hackathon.api.stepdefinition.StepDefinitionAPI.one_ticker_name_is_provided_as_query_parameter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should get response with the required data one json structure",
  "keyword": "Then "
});
formatter.match({
  "location": "com.ing.au.hackathon.api.stepdefinition.StepDefinitionAPI.should_get_response_with_the_required_data_one_json_structure()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Test the api provided with two tickers",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Enter URL and Test the URL with GET two tickers",
  "keyword": "Given "
});
formatter.match({
  "location": "com.ing.au.hackathon.api.stepdefinition.StepDefinitionAPI.enter_URL_and_Test_the_URL_with_GET_two_tickers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "two ticker names is provided as query parameter",
  "keyword": "When "
});
formatter.match({
  "location": "com.ing.au.hackathon.api.stepdefinition.StepDefinitionAPI.two_ticker_names_is_provided_as_query_parameter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should get response with the two json structures",
  "keyword": "Then "
});
formatter.match({
  "location": "com.ing.au.hackathon.api.stepdefinition.StepDefinitionAPI.should_get_response_with_the_two_json_structures()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Test the api when wrong url provided",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Enter URL and wrong URL",
  "keyword": "Given "
});
formatter.match({
  "location": "com.ing.au.hackathon.api.stepdefinition.StepDefinitionAPI.enter_URL_and_wrong_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should give the unsuccessful response code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.ing.au.hackathon.api.stepdefinition.StepDefinitionAPI.should_give_the_unsuccessful_response_code()"
});
formatter.result({
  "status": "passed"
});
});