
    class GoodsList{
        constructor(){
            this.cont = document.getElementById("cont");
            this.url = "http://localhost/shoppingt/data/goods.json";
            
            this.init();
            // 1.绑定事件
            this.addEvent();
        }
        addEvent(){
            var that = this;
            this.cont.onclick = function(eve){
                var e = eve || window.event;
                var t = e.target || e.srcElement;
                if(t.className == "addCar"){
                    // 2.获取当前的商品ID
                    that.id = t.parentNode.getAttribute("index");
                    // 3.存localstorage
                    that.setData();
                }
            }
        }
        setData(){
            // console.log(this.id);
            // 保存多个商品，数量，一条本地存储
            // 数组中放对象的形式处理数据
            // 每个对象是一个商品
            // 整个数组是一条本地存储
            // [{id:"adsa",num:1},{},{}]

            this.goods = localStorage.getItem("goods");

            if(this.goods){
                // 不是第一次
                this.goods = JSON.parse(this.goods)

                var onoff = true;
                // 之后存
                for(var i=0;i<this.goods.length;i++){
                    // 老的
                    if(this.goods[i].id == this.id){
                        this.goods[i].num++;
                        onoff = false;
                    }
                }
                // 新的
                if(onoff){
                    this.goods.push({
                        id:this.id,
                        num:1
                    })
                }
            }else{
                // 第一次存
                //     直接存
                this.goods = [{
                    id:this.id,
                    num:1
                }];
            }
            
            // 最后将数据设置回去
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
                            <img src="${this.res[i].src}" alt="">
                            <p>${this.res[i].name}</p>
                            <span>${this.res[i].price}</span>
                            <em class="addCar">加入购物车</em>
                        </div>`;
            }
            this.cont.innerHTML = str;
        }
    }
    new GoodsList;