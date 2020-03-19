Feature: Testing Rest API Automation

Scenario: To Test the api provided with one ticker
Given Enter URL and Test the URL with GET
When one ticker name is provided as query parameter
Then should get response with the required data one json structure


Scenario: To Test the api provided with two tickers
Given Enter URL and Test the URL with GET two tickers
When two ticker names is provided as query parameter
Then should get response with the two json structures


Scenario: To Test the api when wrong url provided
Given Enter URL and wrong URL
Then should give the unsuccessful response code 


