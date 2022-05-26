var xml=new XMLHttpRequest();
xml.open('get','https://examportal-3p34g81ekn6l3lhij0z.codequotient.in/login');
xml.onload=function(){
    console.log(this.responseText);
}
//xml.setRequestHeader("Content-type","application/json");
xml.send();
//JSON.stringify ({ username:"admin", password:123})