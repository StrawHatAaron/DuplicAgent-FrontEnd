// this file holds all the paths/urls for the API so that they can be 
//easily managed in one place

// const BaseURL = "http://api.duplicagent.com:8000/api/";
const BaseURL = "https://api.duplicagent.com/api/";

//manage or create authenticated user 
export const SignUpUserURL = BaseURL + "user/create/";
export const GetAuthTokenURL = BaseURL + "user/token/";
export const CheckUserInfoURL = BaseURL + "user/me/";

//Pawan added ContactURL - chose user because
export const ContactURL = BaseURL + "send/"; 

//You can Delete, Post, Put here for information that will
// be fed into the database 
export const TagsURL = BaseURL + "clients/tags/";
export const PolicyURL = BaseURL + "clients/policy/";
export const ClientURL = BaseURL + "clients/client/";
export const AccountingInfoURL = BaseURL + "clients/accounting-info/";
