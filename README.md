
# Mytheresa Cypress Automation

I have automated Register, Login function and verifying the compatibility with mobile and ipad.

I have integrated Mocha for creating execution report.

This Framework is easy to modify and change, the scripts are ready to use.


## Authors

- [@SanjayPal](https://github.com/Sanjay-9)


## Deployment
Download the Node js and install it.

To run this project, we have 2 ways 
1. Fist method

   A. Open it in visual studio code

   B. Open terminal then enter

```bash
  .\node_modules\.bin\cypress open
```
   C. it will open Cypress tootl

   D. Now seleect & click the test case you want to run

   E. once the execution is done under "report" it will generate the test execution report

   F. To run all the test cases 

```bash
  .\node_modules\.bin\cypress run
```

2. Secound Method

   A. Open it in visual studio code

   B. Open terminal then enter

```bash
  .\node_modules\.bin\cypress run --spec "Test case path" 
```
Example -
```bash
  .\node_modules\.bin\cypress run --spec "cypress\integration\TestTry\Login.js" --browser chrome --headed
```
   C. To open in specific browser

```bash
  .\node_modules\.bin\cypress run --spec "cypress\integration\TestTry\Login.js" --browser browers name  
```
   D. To run in headed mode 
```bash
  .\node_modules\.bin\cypress run --spec "cypress\integration\TestTry\Login.js" --browser chrome --headed
```
   E. To run all the test cases 

```bash
  .\node_modules\.bin\cypress run
```


