package com.ing.au.hackathon.api.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features=".//src//test//java//com//ing//au//hackathon//api//features//bitfinex.feature", 
glue={"com.ing.au.hackathon.api.stepdefinition"},
plugin={"pretty","html:target/output.html"},
strict=false)
public class RunnerAPI {

}
