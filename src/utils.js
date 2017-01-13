/**
* Fetches an API response
*/
export function fetchData(url, callback){

    var key = "?api_key=4d4ed145d3584846f5922b6a467e1f85";

    fetch(url+key
    ).then(response => {
      return response.json();
    }).then(json => {
        if('results' in json)
         callback(json.results);
        else
          callback(json);
    }).catch((e) => {
      console.log("Fetch error: " + e);
    });

}
