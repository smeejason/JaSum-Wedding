// import axios from 'axios';


// export default class SiteDataService {
    
//   public static sendRSVP(e: any, emailAddress: string, firstName: string, lastName: string) {
    
//     axios.post('http://localhost:7071/api/UserRegistration', {
//       email: emailAddress,
//       firstname: firstName,
//       lastname: lastName
//     })
//     .then((response) ()=> {
//       return this.generateSuccessHTMLOutput(response);
//     })
//     .catch((error) ()=> {
//       return this.generateErrorHTMLOutput(error);
//     });
    
//     e.preventDefault();
//   }

//   public static generateSuccessHTMLOutput(response) {
//     return  '<h4>Result</h4>' + 
//             '<h5>Status:</h5> ' + 
//             '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
//             '<h5>Headers:</h5>' + 
//             '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
//             '<h5>Data:</h5>' + 
//             '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
//   }
  
//   public static generateErrorHTMLOutput(error) {
//     return  '<h4>Result</h4>' + 
//             '<h5>Message:</h5> ' + 
//             '<pre>' + error.message + '</pre>' +
//             '<h5>Status:</h5> ' + 
//             '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
//             '<h5>Headers:</h5>' + 
//             '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' + 
//             '<h5>Data:</h5>' + 
//             '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>'; 
//   }
// }