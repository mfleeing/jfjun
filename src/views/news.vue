<template>
  <div class="news">
          <header >
          <div >
                  <div class="nav"  >
                    <div class="logo"></div>
                      <ul>
                            <span @click="dyhome">人工智能财税中心</span>
                            <span @click="dyempower">授权中心</span >
                            <span  @click="dyabout">关于我们</span>
                            <span @click="dynews">新闻中心</span>
                            <span >会计师登录</span>
                            <span style="background:skyblue;width:95px" @click="dysubscribe">预约体验</span>
                       </ul>
                     </div>
             </div>
          <template>
            <el-carousel indicator-position="none" height="600px" >
              <el-carousel-item v-for="item in items" :key="item">
                <img :src="item" alt="">
               </el-carousel-item>
             </el-carousel>
           </template>
    </header>
       <nav class="menu">
         <ul>
            <li class="nav1" ></li>
            <li class="nav2"></li>
            <li class="nav3"></li>
            <li class="nav4"></li>
            <li class="nav5"></li>
           </ul>
         </nav>   
  </div>
</template>

<script>
export default {
      methods:{
      dyempower(){
        this.$router.push({name:"empower"})
      },
      dyabout(){
        this.$router.push({name:"about"})
      },
      dyhome(){
        this.$router.push({name:"home"})
      },
      dynews(){
        this.$router.push({name:"news"})
      },
        dysubscribe(){
        this.$router.push({name:"subscribe"})
      },
   },
data() {
    return {
      items: [
        ("http://www.jfjun.com/assets/news-banner.png"),
       ],
     };
  }
 
 }
</script>


<style >
.news{
    width: 100%;
    height: 1200px;
    overflow-x: hidden;
}
header{
  width: 100%;
  height: 690px;
  }
  .el-carousel{
min-width:1200px;
margin: auto;
  }
    .el-carousel__item img {
      width: 100%;
      height: 650px;
     
  }
    .nav{
      width: 1300px;
      height: 87px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      
      
    }
      .logo{
        display: flex;
        width: 187px;
        height: 87px;
        background: url('data:image/png;base64,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') no-repeat;
      
      }
      ul{
        width: 900px;
        height: 87px;
    
      }
       span{
          display: inline-block;
          height: 40px;
          line-height: 40px;
          text-decoration: none;
          color: white;
          font-size: 18px;
          margin: 20px 50px 20px 5px;
          cursor: pointer;
        }
</style>
