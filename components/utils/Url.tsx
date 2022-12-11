const allowedParameters: string[] = ['ca', 'utm'];

// const getParameter = (parameter: string):any => {
//     if('undefined' !== typeof window){
//         const qs = window.location.search;
//         const parameters = new URLSearchParams(qs);
//         return parameters.get(parameter);
//     }
//     return null;
// }

const getAllParameters = (url?:string) =>  {
    // get query string from url (optional) or window
    let queryString:string = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    let obj:any = {};

    // if query string exists
    if (queryString) {

      // stuff after # is not part of query string, so get rid of it
      queryString = queryString.split('#')[0];

      // split our query string into its component parts
      let arr = queryString.split('&');

      for (let i = 0; i < arr.length; i++) {
        // separate the keys and the values
        let a:any = arr[i].split('=');

        // set parameter name and value (use 'true' if empty)
        let paramName:any = a[0];
        let paramValue:any = typeof (a[1]) === 'undefined' ? true : a[1];

        // (optional) keep case consistent
        paramName = paramName.toLowerCase();
        if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

        // if the paramName ends with square brackets, e.g. colors[] or colors[2]
        if (paramName.match(/\[(\d+)?\]$/)) {

          // create key if it doesn't exist
          let key:any = paramName.replace(/\[(\d+)?\]/, '');
          if (!obj[key]) obj[key] = [];

          // if it's an indexed array e.g. colors[2]
          if (paramName.match(/\[\d+\]$/)) {
            // get the index value and add the entry at the appropriate position
            let index:any = /\[(\d+)\]/.exec(paramName) ? /\[(\d+)\]/.exec(paramName)![1] : null;
            if(index){
                obj[key][index] = paramValue;
            }
          } else {
            // otherwise add the value to the end of the array
            obj[key].push(paramValue);
          }
        } else {
          // we're dealing with a string
          if (!obj[paramName]) {
            // if it doesn't exist, create property
            obj[paramName] = paramValue;
          } else if (obj[paramName] && typeof obj[paramName] === 'string'){
            // if property does exist and it's a string, convert it to an array
            obj[paramName] = [obj[paramName]];
            obj[paramName].push(paramValue);
          } else {
            // otherwise add the property
            obj[paramName].push(paramValue);
          }
        }
      }
    }

    return obj;
  }

const checkUrlParameters = () => {
  if('undefined' !== typeof window){
    // Get url parameters
    const queryString: string = window.location.search;
    if(!!queryString){
        const urlParams = new URLSearchParams(queryString);
        const params: any = {};

        urlParams.forEach((value: string, key: string) => {
            if(-1 !== allowedParameters.indexOf(key)){
                params[key] = value;
            }
        });
        return params;
        // window.localStorage.setItem('vt-crm', JSON.stringify(params));
    }
  }
  return {};
}

const getURLParameters = () => {
  let parameters: any = window.localStorage.getItem('vt-crm');
  return !!parameters ? JSON.parse(parameters) : '';
}

export const getMediaUrl = (url: string) => {
  return /^https?:\/\//.test(url) ? url : process.env.URL_API + url;
}

export { getAllParameters, checkUrlParameters, getURLParameters };