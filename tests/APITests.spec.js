const {test,request,expect}= require('@playwright/test');
const UserPayload = require("../APIUtils/UserPayload.json");
//import urlPost from "../APIUtils/EndpointURLs.js";
const urlPostObj = require("../APIUtils/EndpointURLs.js");
const commonHeaders={'content-type':'application/json'};
const parameters = {page:"2"};

test('@API API Test POST',async()=>{
    const apiContext = await request.newContext();
    const resp = await apiContext.post(urlPostObj.urlPost,{data:UserPayload,headers:commonHeaders})
    const respCode = await resp.status();
    console.log(respCode);
    const respBody = JSON.parse(await resp.body());
    expect(resp.ok()).toBeTruthy();
    console.log(respBody);
    const jsonObjects = await resp.json();
    console.log(jsonObjects.id);
    console.log(jsonObjects.createdAt);
});

test('@API Standalone API test GET',async()=>{
    const apiContext = await request.newContext();
    const resp = await apiContext.get(urlPostObj.urlPost,{params:parameters,headers:commonHeaders});
    const responseStatus = await resp.status();
    console.log("Response Status Code:", responseStatus);
    const respBody = JSON.parse(await resp.body());
    console.log("Response Content:",respBody);
    expect(resp.ok()).toBeTruthy();
    const jsonObj = await resp.json();
    console.log(jsonObj.total);
    console.log(jsonObj.data[0].email);
    console.log(jsonObj.data[1].email);
});

test('@API Standalone API test GET Single User',async()=>{
    const apiContext = await request.newContext();
    const resp = await apiContext.get(urlPostObj.urlPost,{params:parameters});
    const responseStatus = await resp.status();
    console.log("Response Status Code:", responseStatus);
    const respBody = JSON.parse(await resp.body());
    console.log("Response Content:",respBody);
    expect(resp.ok()).toBeTruthy();
    const jsonObj = await resp.json();
    console.log(jsonObj.total);
    console.log(jsonObj.data[0].email);
    console.log(jsonObj.data[1].email);
});