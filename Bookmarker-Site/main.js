var site_name=document.getElementById("SiteName") 
var siteUrl=document.getElementById("SiteUrl")
var sites=[]
if(JSON.parse(localStorage.getItem('arr'))!=null){
    sites=JSON.parse(localStorage.getItem('arr'))
    display()
}
function addSite(){
    var site={
        name:site_name.value,
        url:siteUrl.value
    }
    if(frmValidate(site.url)&&validateWebsiteName(site.name)){
    sites.unshift(site)
    clear()
    localStorage.setItem('arr',JSON.stringify(sites))
    display()
}
else{
    alert("Site Name or Url is not valid, Please follow the rules below :Site name must contain at least 3 characters Site URL must be a valid one")
}
}
function display(){
    var cartouna=``
    for(var i=0;i<sites.length;i++){
        cartouna+=`<tr>
        <td>${i+1}</td>
        <td>${sites[i].name}</td>
        <td><button  onclick="visit(${i})" class="btn  btn-sm btn-visit border-0 px-3"><i class="fa-solid fa-eye pe-2"></i>Visit</button></td>
        <td><button  onclick="deleteSite(${i})"class="btn  btn-sm btn-delete border-0"><i class="fa-solid fa-trash-can px-1"></i>Delete</button></td>
    </tr>`
    }
    document.getElementById("newRow").innerHTML=cartouna
}
function visit(index){
    console.log("https://www.google.com/")
    window.open(sites[index].url)
}
function deleteSite(index){
    sites.splice(index,1)
    localStorage.setItem('arr',JSON.stringify(sites))
    display()
}
function clear(){
    site_name.value=""
    siteUrl.value=""
}
function frmValidate(x) {
    var val = x;
    var pattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)*[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
    if (pattern.test(val)) {
        return true;
    }
}
function validateWebsiteName(websiteName) {
    var regex = /^[a-z0-9\-]{2,63}$/i;
    var lowercaseWebsiteName = websiteName.toLowerCase();
    return regex.test(lowercaseWebsiteName);
}
//https://www.google.com