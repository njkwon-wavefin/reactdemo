/**
* Fetches an API response
*/

export function fetchData(url){

    return fetch(url
    ).then(response => {
      return response.json();
    }).then(json => {
        if('results' in json){
         return json.results;
       }else{
          return json;
        }
    }).catch((e) => {
      console.log("Fetch error: " + e);
    });
}
