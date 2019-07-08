if(window.localStorage.userArr){
    var array = JSON.parse(window.localStorage.userArr);
}else{
    array = [];
}

var obtn=document.getElementById("btn");
var ouser=document.getElementById("user");
var opass=document.getElementById("pass");

var str1=localStorage.getItem("password"); 
var str2=localStorage.getItem("username"); 
console.log(str1)


obtn.onclick=function(){
    var isHave=false;
    var index=0;
    for(var i =0;i<array.length;i++){
        if(ouser==array[i].username){
            isHad=true;
            index=i;
        }
    }
    if(isHave){
        if(opass==array[index].password){
            alert("登录成功");
        }else{
            alert("密码错误");
        }
    }else{
        alert('账号不存在或输入错误');
    }
}
    