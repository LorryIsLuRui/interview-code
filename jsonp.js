function jsonp(obj) {
  if (!obj || !obj.url) return;
  // const script=document.createElement('script');
  var url = obj.url;
  // script.type="text/javascript";
  // const head=document.getElementsByTagName('head')[0];//document.body
  let params = [];
  obj.data["callback"] = obj.callback;
  console.log(url);
  url = url.indexOf("?") > 0 ? url + "&" : url + "?";
  for (let key in obj.data) {
    params.push(key + "=" + obj.data[key]);
  }
  console.log("url", url);
  console.log("params", params);
  url += params.join("&");
  // script.src=url;
  // script.onerror=function(){
  // head.removeChild(script);
  // }
  console.log(url);
  // head.appendChild(script);
}
jsonp({
  url: "http://.com",
  callback: "hello",
  data: {
    id: 1,
    name: "lorry"
  }
});
function hello(res) {
  console.log("hello callback", res);
}
