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
  "name": "I navigate to Samsung store and select Sansung J8",
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
  "duration": 8759531682,
  "status": "passed"
});
formatter.match({
  "location": "Login_step_definition.login_to_the_application()"
});
formatter.result({
  "duration": 373849631,
  "status": "passed"
});
formatter.match({
  "location": "Login_step_definition.i_go_to_iphone_store()"
});
formatter.result({
  "duration": 2993505145,
  "status": "passed"
});
formatter.match({
  "location": "Login_step_definition.i_navigate_to_samsung_store_and_select_sansung_j8()"
});
formatter.result({
  "duration": 3159651289,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Samsung J8\u0027)]\"}\n  (Session info: chrome\u003d77.0.3865.120)\n  (Driver info: chromedriver\u003d77.0.3865.40 (f484704e052e0b556f8030b65b953dce96503217-refs/branch-heads/3865@{#442}),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 26 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u0027unknown\u0027, revision: \u002731c43c8\u0027, time: \u00272016-08-02 21:57:56 -0700\u0027\nSystem info: host: \u0027XTV-NIDAMANURIP\u0027, ip: \u0027192.168.0.246\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:61639}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d77.0.3865.40 (f484704e052e0b556f8030b65b953dce96503217-refs/branch-heads/3865@{#442}), userDataDir\u003dC:\\Users\\PNIDAM~1\\AppData\\Local\\Temp\\scoped_dir5004_609433828}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d77.0.3865.120, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a5a17fcf8aceafb5491502f6d7bf989a\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Samsung J8\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:683)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:377)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:506)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:369)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.maven.stepdefinitions.Login_step_definition.i_navigate_to_samsung_store_and_select_sansung_j8(Login_step_definition.java:68)\r\n\tat ✽.And I navigate to Samsung store and select Sansung J8(src/test/java/com/maven/stepdefinitions/login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login_step_definition.i_quit_broswer()"
});
formatter.result({
  "status": "skipped"
});
});