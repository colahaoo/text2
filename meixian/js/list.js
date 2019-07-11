    class GoodsList{
        constructor(){
            this.cont = document.getElementById("cont");
            this.url = "http://localhost/meixian/data/goods.json";
            
            this.init();
            this.addEvent();
        }
        addEvent(){
            var that = this;
            this.cont.onclick = function(eve){
                var e = eve || window.event;
                var t = e.target || e.srcElement;
                if(t.className == "addCar"){
                    that.id = t.parentNode.getAttribute("index");
                    that.setData();
                }
            }
        }
        setData(){

            this.goods = localStorage.getItem("goods");

            if(this.goods){
                this.goods = JSON.parse(this.goods)

                var onoff = true;
                for(var i=0;i<this.goods.length;i++){
                    if(this.goods[i].id == this.id){
                        this.goods[i].num++;
                        onoff = false;
                    }
                }
                if(onoff){
                    this.goods.push({
                        id:this.id,
                        num:1
                    })
                }
            }else{
                this.goods = [{
                    id:this.id,
                    num:1
                }];
            }
            
            localStorage.setItem("goods",JSON.stringify(this.goods))
        }
        init(){
            var that = this;
            ajaxPost(this.url,function(res){
                that.res = JSON.parse(res);
                that.display()
            })
        }
        display(){
            var str = "";
            for(var i=0;i<this.res.length;i++){
                str += `<div class="box" index="${this.res[i].goodsId}">
                            <a href="../detail/${this.res[i].d}.html" target="_blank">
                            <img src="${this.res[i].src}" alt="">
                            </a>
                            <span>￥${this.res[i].price}</span><del>${this.res[i].p}</del>
                            <p>${this.res[i].name}</p>
                            <em class="addCar">加入购物车</em>
                        </div>`;
            }
            this.cont.innerHTML = str;
        }
    }
    new GoodsList;