function Magnifier(){
                    this.sBox = document.querySelector("#detail .msg .img");
                    this.bBox = document.querySelector("#detail .msg .b_box");
                    this.span = document.querySelector("#detail .msg .img span");
                    this.bImg = document.querySelector("#detail .msg .b_box img");
                    this.sImg = document.querySelector("#detail .msg .img img");
                    this.addEvent()
                }
                Magnifier.prototype.init = function(){
                    var w = this.bImg.offsetWidth / this.bBox.offsetWidth;
                    var h = this.bImg.offsetHeight / this.bBox.offsetHeight;
                    this.span.style.width = this.sBox.offsetWidth / w + "px";
                    this.span.style.height = this.sBox.offsetHeight / h + "px";
                }
                Magnifier.prototype.addEvent = function(){
                    var that = this;
                    this.sBox.addEventListener("mouseover",function(){
                        that.over()
                        that.init()
                    })
                    this.sBox.addEventListener("mouseout",function(){
                        that.out()
                    })
                    this.sBox.addEventListener("mousemove",function(eve){
                        var e = eve || window.event;
                        that.move(e);
                    })
                }
                Magnifier.prototype.over = function(){
                    this.span.style.display = "block";
                    this.sImg.style.opacity = "0.6";
                    this.bBox.style.display = "block";
                }
                Magnifier.prototype.out = function(){
                    this.span.style.display = "none";
                    this.sImg.style.opacity = "1";
                    this.bBox.style.display = "none";
                }
                Magnifier.prototype.move = function(e){
                    var l = Math.round(e.offsetX - this.span.offsetWidth/2);
                    var t = Math.round(e.offsetY - this.span.offsetHeight/2);
                    if(l < 0) l=0;
                    if(t < 0) t=0;
                    
                    var x = l / (this.sBox.offsetWidth - this.span.offsetWidth);
                    var y = t / (this.sBox.offsetHeight - this.span.offsetHeight);
                    
                    this.span.style.left = l + "px";
                    this.span.style.top = t + "px";
                    
                    this.bImg.style.left = -x * (this.bImg.offsetWidth - this.bBox.offsetWidth) + "px";
                    this.bImg.style.top = -y * (this.bImg.offsetHeight - this.bBox.offsetHeight) + "px";
                    
                    this.span.style.backgroundPosition = -l + "px "+ -t +"px";
                }
            
            
                onload = function(){
                    new Magnifier();
                }