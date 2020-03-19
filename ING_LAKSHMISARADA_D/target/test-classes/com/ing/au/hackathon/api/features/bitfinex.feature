Feature: Testing Rest API Automation

Scenario: To Test the api provided with one ticker
Given Enter URL and Test URI
When User proivdes the Username and Password
Then User should get Token ID

Scenario: To Test CreateOrder using Post Request
Given Enter the URL along with OrderData
When User needs to send the Token ID in the Order
Then OrderID will be generated

Scenario: Once Created OrderID should be verified with OrderID using GET Request
Given Enter the relevant URL
When User provides OrderID in URI
Then Order Should be Posted








