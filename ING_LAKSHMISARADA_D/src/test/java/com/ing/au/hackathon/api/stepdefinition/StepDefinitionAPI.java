package com.ing.au.hackathon.api.stepdefinition;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

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

	static {
		restAssured.baseURI = "https://api-pub.bitfinex.com";
	}

	@Given("Enter URL and Test the URL with GET")
	public void enter_URL_and_Test_the_URL_with_GET() {

		restAssured.basePath = "/v2/tickers?symbols=tBTCUSD";

	}

	@When("ticker name is provided")
	public void ticker_name_is_provided() {

		resp = given().contentType("application/json").post();

	}

	@Then("should get response with the required data")
	public void should_get_response_with_the_required_data() {

		jsonPath = resp.jsonPath();
		System.out.println("RESPONSE CODE     "+resp.getStatusCode());
		assertEquals(200, resp.getStatusCode());
		System.out.println(jsonPath.get());
	}

}
