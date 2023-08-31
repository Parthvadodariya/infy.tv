/** @type {import('jest').Config} */
module.exports = {
  
    rootDir: '.',
    testTimeout: 1000000,
    testMatch: [
                '<rootDir>/Tests/DSP_User/*.spec.js',  
                '<rootDir>/Tests/Admin_User/*.spec.js',
                '<rootDir>/Tests/Admin_Publisher_DSP/*.spec.js', 
                '<rootDir>/Tests/Publisher_User/*.spec.js',
               // '<rootDir>/Tests/Publisher_User/Demand_Tab/*.spec.js',
                '<rootDir>/Tests/Website to App end-to-end QA/*.spec.js', 


             // 'C:/Users/hp/Desktop/Web-App-Test-New/webapp-test/Tests/Admin_Publisher_DSP/*.spec.js',
               //'C:/Users/hp/Desktop/Web-App-Test-New/webapp-test/Tests/Admin_User/*.spec.js',
               //'C:/Users/hp/Desktop/Web-App-Test-New/webapp-test/Tests/DSP_User/*.spec.js',
               //'C:/Users/hp/Desktop/Web-App-Test-New/webapp-test/Tests/Publisher_User/*.spec.js',
                //'C:/Users/hp/Desktop/Web-App-Test-New/webapp-test/Tests/Website to App end-to-end QA/*.spec.js',

         'C:/ProgramData/Jenkins/.jenkins/workspace/Infy_Test_Jenkins/Tests/Admin_Publisher_DSP/*.spec.js', 
         'C:/ProgramData/Jenkins/.jenkins/workspace/Infy_Test_Jenkins/Tests/Admin_User/*.spec.js', 
         'C:/ProgramData/Jenkins/.jenkins/workspace/Infy_Test_Jenkins/Tests/DSP_User/*.spec.js',
         'C:/ProgramData/Jenkins/.jenkins/workspace/Infy_Test_Jenkins/Tests/Publisher_User/*.spec.js',
         'C:/ProgramData/Jenkins/.jenkins/workspace/Infy_Test_Jenkins/Tests/Website to App end-to-end QA/*.spec.js',   

         ////

        // '<rootDir>/Tests/Admin_Publisher_DSP/Email_Page_Of_Login.spec.js', 
         //'<rootDir>/Tests/Admin_Publisher_DSP/Forgot_Password.spec.js', 
         //'<rootDir>/Tests/Admin_Publisher_DSP/Infy_Tv_Logo.spec.js', 
         //'<rootDir>/Tests/Admin_Publisher_DSP/Password_Page_Of_Login.spec.js', 
         // '<rootDir>/Tests/Admin_Publisher_DSP/Sign_Up.spec.js', 
         

    ],
    preset: 'jest-playwright-preset',
    verbose: false,
    maxWorkers:2,

    
    reporters: [
        "default",
        [
          "./node_modules/jest-html-reporter",
          {
            pageTitle: "Infy Tv Automation Test Report",
            outputPath: "Log/Infy_Tv_Automation_Test_Report.html",
            includeFailureMsg: true,
            includeConsoleLog: true
          }
        ]
        
      ]
      
  }