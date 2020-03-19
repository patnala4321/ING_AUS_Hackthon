package com.ing.au.hackathon.api.stepdefinition;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

import java.util.ArrayList;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

public class StepDefinitionAPI {

	static RestAssured restAssured;
	static Response resp;
	static String respToken;
	JsonPath jsonPath;
	ArrayList respData;

	String URL = "https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD";
	String wURL = "https://api-pub.bitfinex.com/v2/tickerssymbols=tBTCUSD";

	@Given("Enter URL and Test the URL with GET")
	public void enter_URL_and_Test_the_URL_with_GET() {

		restAssured.basePath = "";

	}

	@When("one ticker name is provided as query parameter")
	public void one_ticker_name_is_provided_as_query_parameter() {
		resp = given().contentType("application/json").get(URL);

	}

	@Then("should get response with the required data one json structure")
	public void should_get_response_with_the_required_data_one_json_structure() {

		jsonPath = resp.jsonPath();
		assertEquals(200, resp.getStatusCode());

		respData = jsonPath.get();
		System.out.println(respData.get(0));

	}

	@Given("Enter URL and Test the URL with GET two tickers")
	public void enter_URL_and_Test_the_URL_with_GET_two_tickers() {

	}

	@When("two ticker names is provided as query parameter")
	public void two_ticker_names_is_provided_as_query_parameter() {
		resp = given().contentType("application/json").get(URL + ",tLTCBTC");

	}

	@Then("should get response with the two json structures")
	public void should_get_response_with_the_two_json_structures() {
		jsonPath = resp.jsonPath();
		assertEquals(200, resp.getStatusCode());
	}

	@Given("Enter URL and wrong URL")
	public void enter_URL_and_wrong_URL() {
		resp = given().contentType("application/json").get(wURL);
	}

	@Then("should give the unsuccessful response code")
	public void should_give_the_unsuccessful_response_code() {
		assertEquals(404, resp.getStatusCode());
	}

}
