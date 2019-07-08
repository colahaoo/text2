var otel=document.getElementById("tel");
var oyz=document.getElementById("yz");
var opass=document.getElementById("pass");
var oqpass=document.getElementById("qpass");
var obtn=document.getElementById("btn");

otel.onblur = function(){
    var reg = /^1[3-9]\d{9}$/;
    if(reg.test(this.value)){
        this.nextElementSibling.innerHTML = "正确";
        tel = 1;
    }else{
        this.nextElementSibling.innerHTML = "请输入正确的手机号";
        tel = 0;
    }
}

oyz.onblur = function(){
    var reg = /^\d{4}$/;
    if(reg.test(this.value)){
        this.nextElementSibling.innerHTML = "正确";
        tel = 1;
    }else{
        this.nextElementSibling.innerHTML = "请输入正确的验证码";
        tel = 0;
    }
}

opass.onblur = function(){
    var reg = /^\d{6}$/;
    if(reg.test(this.value)){
        this.nextElementSibling.innerHTML = "正确";
        op = 1;
    }else{
        this.nextElementSibling.innerHTML = "请输入正确密码";
        op = 0;
    }
}

oqpass.onblur = function(){
    if(oqpass.value==opass.value){
        this.nextElementSibling.innerHTML = "正确";
        oq = 1;
    }else{
        this.nextElementSibling.innerHTML = "请输入相同的密码";
        oq = 0;
    }
}

obtn.onclick=function(){
    var username=otel.value;
    var password=opass.value;
    var array=[];
    for(var i=0;i<array.length;i++){
        if(username==array[i].username){
            alert("该手机号已注册");
            return;
        }
    }
    var obj={username:username,
            password:password}
            array.push(obj);
            window.localStorage.userArr=JSON.stringify(array);
            alert("注册成功");
    }

   