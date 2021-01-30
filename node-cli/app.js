#!/usr/bin/env node

const commander = require("commander");
const { prompt } = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

commander.version("1.0.1").description("Configuration files creator.");

commander
  .command("command1 <parameter1>")
  .option("--option1 <value>", "Option1")
  .alias("c1")
  .description("Some command1 (description)")
  .action((parameter1, restOpt) => {
    console.log("Start action");
    console.log("parameter1:", parameter1);
    console.log("restOpt:", restOpt);
    console.log("Start promt: ");
    prompt([
      { type: "input", name: "input1", message: "input1: " },
      { type: "input", name: "input2", message: "input2: " },
    ]).then((options) => {
      console.log("result prompt: ", options);
      console.log("Now we are doing something useful with options");
    });
  });

commander
  .command("command2 ")
  .alias("c2")
  .description("Some command2 (description)")
  .action(() => {
    console.log("command2 executed");
  });

commander.parse(process.argv);
