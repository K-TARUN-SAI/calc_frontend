export const BASEURL = "http://18.212.103.1:8080/calculator/";
export function callApi(reqmethod, url, data, responseHandler)
{
    let options = "";
    if(reqmethod === "GET" || reqmethod === "DELETE")
        options = {method: reqmethod, headers:{'Content-Type':'application/json'}};
    else
        options = {method: reqmethod, headers:{'Content-Type':'application/json'}, body: data};
    fetch(url, options)
        .then(response => {
            if(!response.ok)
                throw new Error(response.status + ": " + response.statusText);
            return response.text();
        })
        .then(data => responseHandler(data))
        .catch(error => alert(error));
}
