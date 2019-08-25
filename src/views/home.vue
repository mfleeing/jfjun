<template>
  <div class="home">
   <header >
          <div @scroll="handleScroll" id="heade">
                  <div class="nav"  >
                    <div class="logo"></div>
                      <ul>
                            <span @click="dyhome">人工智能财税中心</span>
                            <span @click="dyempower">授权中心</span >
                            <span @click="dyabout">关于我们</span>
                            <span @click="dyanews">新闻中心</span>
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

    <div class="subject">
      <div class="div1" id="about">
            <h1>中国首家人工智能财税中心解决方案提供商</h1><br>
            <p>上海灵兮信息科技有限公司是国内领先的创新科技企业，中国首家人工智能财税中心解决方案提供商，于2012年成立于中国上海。目前已在上海、北京、天津、广东、深圳、福建、江西、江苏、山东、河南、河北、湖北、黑龙江、吉林、辽宁、广西、贵州、四川、重庆、云南、甘肃等地设立分公司及授权中心。</p>
            <p>解放君是上海灵兮信息科技有限公司历时4年研发打磨的新一代人工智能财税引擎，是人工智能在财税领域的专业应用。它采用图像处理/OCR识别技术、智能数据采集技术、机器学习、深度学习等人工智能技术，拥有20余项发明专利/软件著作权。</p>
            <img src="../assets/2.png" alt="">
           </div>
      <div class="div1"> 
          <div class="xz1">
             <div v-for="i in itemss" :key='i' class="aa">
                <p class="pp">{{i.nr1}}</p>
                <p class="pp">{{i.nr2}}</p>
               </div>  
             </div> 
         </div>
      <div class="div1">
           <h1 style="margin-bottom: 80px">服务与案例</h1>
           <el-carousel :interval="4000" type="card" height="500px" >
           <el-carousel-item v-for="img in imgs" :key="img">
           <img :src="img" alt="" >
           </el-carousel-item>
          </el-carousel>
         </div> 
      <div class="div1">
          <div class="tp">
               <h1  style="color:white;font-weight: 500">每月超过100000+企业通过解放君的人工智能财税中心进行会计核算</h1>
              <p style="color:white; text-align: center;margin-top:50px;font-size: 20px;" >一家代理记账公司 | 50家企业账套起</p>
              <button style="background:orangered;width:300px;height:50px;color:white;margin-top:-30px;font-size: 20px;border:0px">预约体验</button>
             </div>
         </div>
      <div  class="div1">
          <h1 style="font-weight: 500;font-size: 36px; width:1200px;margin:50px auto;">代理记账公司转型的最佳合作伙伴</h1>
          <div class="xz2">
              <span v-for='nr in nrs' :key="nr" class="nr">
                    <h2>{{nr.bq}}</h2>
                    <p>{{nr.nr1}}</p>
                    <p style="line-height:50px; text-align: center;">{{nr.nr2}}</p>
                    <p>{{nr.nr3}}</p>
                    <p>{{nr.nr4}}</p>
                    <p>{{nr.nr5}}</p>      
                 </span>
             </div>
         </div>
      <div class="div1">
          <div class="tp1">
              <h1  style="color:white;font-weight: 500">“与解放君一起，应用人工智能技术完成代理记账服务转型”</h1>
              <button style="width:300px;height:50px;background:blue;color:white;margin-top:60px;font-size: 20px;border:0px">预约体验</button>
             </div>
         </div>
      <div class="div1">
         <p  class="ppp">
        <img src="data:image/png;base64,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" alt="" style="width:150px;height:87px;opacity: 0.7">
        <span style="color:white;font-size:22px;line-height: 100px;opacity: 0.7;">“与解放君一起，应用人工智能技术完成代理记账服务转型”</span>
        </p>
        <div class="section">
             <span class="pppp">城市分布</span>
             <div style="with:1200px;margin:-40px -10px;">
               <span v-for="city in citys" :key='city' class="cs">
                  {{city}}
               </span>
              <br>
              <br><br>
              <div class="messages">
              <p class="message">上海市杨浦区隆昌路619号2号楼A29-31室</p>
              <p class="message">售前咨询热线：400-682-0668 售后服务热线：400-682-0668</p>
              <p class="message">沪ICP备14021340号 | Copyright © 2013-2018 jfjun.com All Rights Reserved 灵兮科技 版权所有</p>
              </div>
              
             </div>
           </div>
       </div>
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
        ("http://www.jfjun.com/assets/landing-secondary-new.png"),
       ("http://www.jfjun.com/assets/landing-primary-new.png"),
      ],
      itemss:[
        {nr1:'基于人工智能+财税专家的核算服务',
         nr2:'机器学习、图像识别等人工智能技术有效提升财务核算数据的准确性、财务处理的规范性。'
        },
        {nr1:'基于阿里云的银行数据安全保护',
         nr2:'阿里云具备专业抵御网络攻击、数据窃取的技术能力；采取阿里云异地数据备份策略；防止因地震、火灾造成的数据损失。'
        },
        {nr1:'基于当地税务的数据自动同步',
         nr2:'采用四种不同技术架构与全国当地的税务系统进行无缝对接；实现税务数据直接上传、下载，以及智能报税等功能。'
        },
        {nr1:'基于互联网的数据实时同步',
         nr2:'财税中心核算结果数据实时同步，财务公司的财务顾问与财税中心财税专家沟通永无障碍。'
        },
      ],
      imgs:[
        "http://www.jfjun.com/assets/landing-huixin.png",
        "http://www.jfjun.com/assets/landing-shunjie.png",
         "http://www.jfjun.com/assets/landing-huixin.png",
        "http://www.jfjun.com/assets/landing-shunjie.png",
         "http://www.jfjun.com/assets/landing-huixin.png",
        "http://www.jfjun.com/assets/landing-shunjie.png",
      ],
      nrs:[
        {bq:"加入人工智能财税中心之前",
         nr1:"以会计为核心",
         nr2:"单个会计完成从对接、整理、核对、记账、报税、反馈以及日常咨询的服务全流程",
         nr3:"提供企业面向税务的核算与报税服务",
         nr4:"以会计的基本薪资 + 核算账套数量作为提成基数",
         nr5:"以会计人工核算服务的劳动密集型的服务为主",
        },
          {bq:"加入人工智能财税中心之前",
         nr1:"以会计为核心",
         nr2:"单个会计完成从对接、整理、核对、记账、报税、反馈以及日常咨询的服务全流程",
         nr3:"提供企业面向税务的核算与报税服务",
         nr4:"以会计的基本薪资 + 核算账套数量作为提成基数",
         nr5:"以会计人工核算服务的劳动密集型的服务为主",
        },
      ],
      citys:[
        '上海地区','上海地区','上海地区','上海地区','上海地区','上海地区','上海地区','上海地区','上海地区','上海地区',
        '上海地区','上海地区','上海地区','上海地区','上海地区','上海地区','上海地区','上海地区','上海地区','上海地区',
      ]
    }
}
}
;
</script>


<style >
.home{
    width: 100%;
    overflow: hidden;
}
*{
  padding: 0px;
  margin: 0px;
}
html{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header{
  width: 100%;
  height: 0px;
  background: black;
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
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAABACAYAAAA6eggRAAAZrElEQVR4Xu2deZxcVZXHv+dVdRZD0BBGTVxAEVGRYYAkEFAE2ZOuahaJICZBSL9KWBTGGVFHIQwgAi4oEFKvE3YVEgnpqk6EQWXTEVmFaGRxHEESREkCJJDe3j3zubeWfvW6uqt6CRPyyfmv6p1333339869557tCtup6gjMvUN31QSLQ4+vJJR3KfxbmdEQBk1yRCavU1Eu7lJmJj2OU+WglrR8zvI1t2qzCFODtJyWyesyPILsdLnTXvPb9BxCxgZNclH04XNy+gEPvoqyN0K7KOdn0zzQnOcsEdIY3oawNEjxA0TUz+kPBNZm03JZqR0/r+9H+b6BKxal5cFo+7Id6+oj0JzTPQV+LwmOJOT9CouAS/DowGCCtFySyWtKlRwhH5IkZ6vSFKTlAw7snH5bIBWkZU8/p+uB0BP+ZWFK1vh5/RHKTkFajomAtDPKKmCzCC32f+NxOyEnCXwTj6swWLzOth9Y0CTz/Zz+AdhDEhyQnS6P2HsyOb1NYYbCZ1rScvt2sOv4wquB3a3seF2TbCzdPkCwk8BjG9o5bNxobqoC9ldQLtUEH22ZLs+Un5HTl1XIBSk5zc0Keb0O5dggLTsVwd4J+OvExzjgpUkcFBpuBd5tAd8Odh1AFyWzmmT/ykoo8HiQlnMHBLZwO8ppKBfhsXsVsG9AOTJIy8RSF+e16bjQYGeFLwVp+WER7DNRrh6Z5J0d3dyryiMifBbhLJQM8N/AF7dLdp1A9wO2XWM7RHku2yS39AIbjg1SsqsDpVUvQ5gepOXjdhpX5UIR3gl8ReEegbBiGs9pSxGgcaVuzrxJx4weh51JzgtScoVrN6fnAt+zs0xSeFAhL9AJnAFs1ARHScjT28EeCNhteqAYfu0Jh6qym12z49N4c05nCtyEsIvALFW+zmgmBEfIq82tugxhh5a0HFkC+9kduWaPjdyrcABwtwX79Dt1p8VHy/pMm56uhkUinJRNyW3ltTynTwEvTXyMQ+fPR/0cK4EPBWnZ3U7jFuyudcwfsTNPKpzXMIJHujt4fjvYdYKdyemFKsxGGd/eza6jkxwbB7s5p4sEGq3WvGEzu71jDLtJiFWSNin8Q+DjCie3pGVJCeyWJvmB05bhcZSHGMFpdPKCAb97HT8aMZ77gX2BX1lVTA03JTw2GMNtCH8EuoG9xOOkbKMsK4Hdkpavnr1Sd7xqmrx2xl36vu1g1wm002hb9QgVB9Z/taTlD/4dupsmOeA9O3Db/EPFDjiZvH5GlYlhgtbF0+U5N8XeqROkk2lWohUeCFLyWHGdnWMMDy1qkift7znL9ZNJjwkL07LELgWe8KtrG2XDqffoqJGv8xk1fFQ8XuuCpdc1yp/9vO5rlTJVNpPkZy3T5XeuDyv0ZAx/yabkN6XXO2OJ7tA9mtl0c2dwnPzPdm18AMBvS6zb99nbEpo13mWbA9vP65wgJdYAMijy87qzCAfbNXFQDWzFN21TYDfn9WuiHBzd0gxk7A+5R5N7bOQuhBXZlHxvIPe+FXh7ge3n9D+Brw+o88K9QUoOr1ASRmHtsnsOqJ0Y88gko66aJh31tJFZoUdrSFtpS1PPPXEeP6ffB84R4cvbPNiZnDYp2OnLG8hgKdzbkpZDS/c053WpKJ8ZSBvVeOsF21+pu9HNw4A1SNw5GMku75mBLQV20QizfKDjO6hxFM4OUnJ1VW3cz+tHUH4L7DjQxqNgZ9r0PDV8e6BtDBbsmXfpmNGd/AZlr2IbAwZ7XpvuFxoeAEbbNrYE2M0r9MPSzUMIbx+OsanZRl9gn7JSdxzT7YD+SM1GqjAorGxJy3Q/p0eCs/AkBtNO/J56JDvTprepYUbk3gGBPXeZvtMknTHkfaU2hhvsM+7RHbo3uvH92HCMS11tVAVbVfw2ltlNe0UjwtV43FIxDRj2McoCwbnaCiS8mkiy/7XHyNOnteoeDUnGRu8xId8SOCLW9lLxuLz8n+F8VVIxntuClJwUf7G5eT1FFevpQQs6gTX+l0nhjx5cW2tAFNbxIkuZwM+Bg2P81gJmHRADJvVYGTTKv0Zv9HP6U+CEATc2lBuqgZ3J6zfUemIq6Rcb2jlq6QyxHh5HZ/5cx3e94STAGfqLZFQ5rqVJctX65bfpbAw3xEBctXkDU2+eJa/b/5tzOkNwbrnoB7Rq8wim3nxUgadEmbzOVa0NZB1jFEqCY9TQhHJmHfz1sQjPMIop1jZeusHP69uMsF99DYCnnOq8Y5X0pPE4q782PMNiYPcyTzWw/VYNkR6FTOE5ESYFKXm5dOOJSzQxbhR3AYdVPFC50DrRqwJdMPFZl6BbBx0J6+lmSsmMN7dNP24M1tS3Q6SNDSSZHEyrNPU1t+mBGOctGlHvwPXJp5ynCV6WwgANF71mPA5Y1CjWhj0ompPTAzy4FxgZHbOEMPnaRvlzf436rfo4wr/0D3ZONdLIZoRPlGy6ka/zOyhfrniYdag3cqwNj4l3whomUDcL7BK5ZqWpsRSaU/TVPmQ9OGUexajQ2JKWn0XbPK1VJybFtTdhUKMYvUm4zShX9hrUoTVsBI7PpqV1sM2csULf3V1wpLwnOmaex/SFjWIFrV8aMNhGmL0oJTdFW21u05NE+TEamWbh6ZFJplgvS7wHfc0CKny9JSWXWv7589Vbu6/bE5fDcuz/qnyzpUku7vXx5PQShKn2f1FGF12EUbb7ERdUUIvWh4avJsRJT3RQu/H4ooS81F8DKk4/sEqoI4FfolxjhHUtabmv1sP7uu4/og286Nr6RJQnOma12h4o2F0I1ndaSeokr2cqLlxdi7CuF+8E9tM1nCHClbFry4K03XcXZgG/TS/G8B8xnuVBiuOrzRRRvkxed1elHLZjryXbGbtghmyqNSDu2Xn9NcqBMd5zg7RcmcnrrGzsY4/y+TldGFUIBW7IpuULfT13XpumQ0NQR78aoKB0VpDyd8TqoXWRvd+2UyIb9PBG+ZfwU/Erp/G6Wu2LyW6VOro5P2aBW50cy/4LDi2AMTevx4XK7RUaPTz1epL9f1Rlpog/a8hg937fW4K0zCzaGR4O0lKxmxgs2EOxWwwJhOo3/yHZzgFbFmzlVU0ypRRAN6dNP+opD6IVhpvXEPYPUtJ7VqnS8WEG2wYAuqlz3Eh+i7BXkJY+/QX1Sra/RN/OKLev3mMLADfQJl8RYUo2Jc9uSbCNl6Bp4XSxazM2kqLDWpAiA6CgIhwfpMSaEOuiYQT7H2EXkxefIM/5Oc3aGd52YKhgW33kxX1pVRvF8v9PFRj0AlsVqyD9r+2nwOlIZH0TfqGGH7t3EN4rcGH0fSqmcWV+0CSF6wXDzXKUdJRfhYtbUvLNgYzJMIFtFbIjg0a5p7lVTxLhJ6U+DBVs5yKFQ/p7JxGSoeGHAv9UwSdcLTAoRU8NVyA9NhCBxSLcsjAlVhktQBZfsxWmtKTFOhVsVsONIswqd0i4OkjJ2fa3v0L3IsSF2ZSoDLbw8ei2zG/VCxAq9uMirJywA01rX+e4oFGW1gv4MIHtFDL3Hjm1BpCyP2CoYNfzHjaTw4b7xoDOB4001VJQ+2p/oNp4QQiHCHZnyGdHJFhe2pbNXaGNJsTuP6OetD91hkwekXApNRNtikw9g2R5qoENfANx4bT10OQgJWVbevxj39JgR71rESHqZXmr50WiPP8vYEf9z83L9MOSdIrKOyId2+R5TKWb3UPPaeU3DAPYdY+NKn5Lk7j0mqJkV2xttiTYLnDQuMjR6FZ2oyQ5IDtNVtf9ElUYBwU2grVzO1OpKgdL1MIFqxEXlGDX83HWLh6fxktg9+HpUQ9OMsKTEXfq9W8m2AJzsmkpm0nfLMm2a7nL3qi0Ktrh28wgnS4VmCvvRCL77Kq28WHeZ5fA9vP6UzTm6RGueD3BxTF36lsC7LNX6siObpdaY+O6HdUyqpT4nFVxNHehMd/CUES51r1vFtjFWLBvxfrzVMLj892GeU7LL5JCK4lK5a10LaF0L2yU30fbqbZmK9xt02mqvr81s2pPwMBgJdvP6+K4N0qUS7NNUjOEy89rb99CLbCGev3NALvd8Ekx2DzkIQcwVAsiGKg27uf00Zg0Dnga91v1LISrYuP/cOdYDr7hUGnvD5c+fAtDhbL2/XWCbXN6/15s7dMxK5CVMhu+Y6ew8TYtNL5md4ZcoMrXavemfw6Fn5QS22tJdn+28aGC3ZzTT4lyd8V6CC+ZJJMWTZMX+nuLTF73VrC2+DERvtcFvmSUCl/9UMcrfr/n8ai1mkX/3zL77IFGp/Z+0yesMSdISY8hv8izhSV7Y5CW8p67WMXA2hxs9mWJOo3H4YsaxX30fdHpS3Sn5CgeVvhgmUeseYnPtTSKDdZ402lrBHu9gUmL0uKseHHawmCfEqTFWQhPXKKjx41ywRdlhcz1xeOMoFH6DXuar+qtzWN98mV3qLtX+G6Qkn8bTudTX19MtS3klgT7/s51HPX6GLqiHXrHaK4WZW7pP6vRrm9nTun3nqvR+fPF9PUSWxDsRUFamkvPzeT1FlVOqeiHsChI9fD01cdiiY3zotet73t9O0faUK+tBmxXN0T4i+toIRbKBQ0UPkx+qT125PeglVp0xFw6yxgmLWqSXsEAfk4XAPMiAzHkrdeQ12xh1ZjN7P/9GWL3vNbf/mUM34mB+ciGdg5aOkP6tdTZ7E6jLIm5cJ8jEuq1NYE96LXEgt3Z7eK77gqmi7Wc9aKtDezmnG5Sj8ml2LF5bXp4aNwUbGugROllr4HJC4+RgiD0QX5ObdBANKauV6jXNgN2RwOjNhu6x1aLvLDZ5B1cAsyMzBZLEiMjZaeqDGLnJnTRCQXNd9in8VadHTTJjbbt09r0g0nj3LDjq2Ip2Lzog6opjiX+OJAizI5Hv/QCW9ivoQuX4z0Y6mpgFxS7xSxTXWv2YB5WusdK9t824Y0bxa+BfYbSVsW9ykVBk9gImGEHu/Qcl1nS4Sxk/9xvv4Vbg5Sc3I9kl23tAldl01Lp3Sp42irs8QY+2JdCWs8YzmvTD4aGisT7esG2e7NeW54qDx0Vj8Qortk2Xfbz9XSyLh5hxcRHSZeUtuGW7LJE5nUJyonRPqnQ4ikfUzgo9vGdFzRJT5JD5GIJSBEe0LUcFmSkQkG1rFsN2FEXZ39gVPNno5yHUK62VxeY/TM92xky5Ybj5JUS25YA28+pNXna5SVKv2Iin+58ifEjDA+jvDdyMVSP6S1VQnyLQK4xyn7VFNRtB+yCfXrIZtLioG4Ku5m6+PjatvGhaOOZvE5TQz6aKIG6ojbl3cTcvE4xNoJEsbNZgWzCQ4Ip8WQGP6ftJPhUXwrqNgN20vB+M5p+86m1g8sUTi2NmTWLJkZyTlzAjUdHNI1mS0i2y6wMY/52od26dkvROqXnNuf0VIHrY/38fbKdqdEw5ua8Nrekevzl1SaubWIaryfrcmvZernM1dBFun60Yp2GL7SkpTI/rcjg5/UHaCycCG4P0nat750Z09cKtR3sOhf44VqzS1UWYkBf1VJFey7xzL9Hk2s2cbdoLKDQ49SgsbB9q4e2jq2XNdQre9naX7U6XUVB6+BFxlbTPqNtVZHsa4O02FKMdVEvsJWuDR28fWnR+hVvpJfXy2NmtlFu6RVMCfdNHMvhpTpnfUpltYgT4WtBSuouQLB1GFU8vh/PLe7zpWPRpQKZbFpqprpUgK28yEj2C46WF+tCuto+u4rfNvZxRf3ZTsMOJklXDOznu5JMun6a/KOefpzeqvskxDlJ3lZU1t5aYItw79M7cMS9xQp+tV46JtlBkJaKpPh+1itnG1fo9IRDotX5aj3TXq+QbOH6Umnmfp5XAntNZ4JJN0yXv1neMti2aqDXO3O1Vl8yOT1ZBVs3XHhLSbbyghey38LjpRS0UOtde+LGhd9s2MwhtRwEpQYjkj03SIvNxBgQlcBW4aFRCQ6uVU2pOI3vGd8OObA9Zophlq0wPKBOFJn9vF6O8u9vJbDbPeHghSmxNuG6qSjZd3Urk65rkrX13mjBViHZkhKXbjNQcmDD/R5MslX5a93vwBaujRfCs2B7Hi9nU1KZd16rwcj1YnrySoR7BrJmD+ARw8oqg60IOO9nuod2svPCJrF28LqpeYXOfOV1bqt3Jog3fOYK3aXL8L4gJXbNrElz89q8sMq+N7NcZ63v5EfRUiI1G6vC4IoKhBweNNWf1TKY5wzHPdtUhcPhGJBtuY3tYG/L6MberQLsU6/XUSPGs9YeNjLUMTh9he6SNGTV499tW6abvye8nqpB2ZTYemmOMm3qK7xr4nQumS9i/Jz+bGKK6WuX8S5GsFu9U3a0zzay0xj+1UvQheKpsp8Ijyp4AklNcEHUrp3JuyTGK2ycup/TL5IgEUwXW96ygjKtejTSU8Zr9Fj+48pDC46aTE4fy6alHLOWyetnbe1wFXYiwdWe4duhYV6ojGhIOD2iz7TeTF5fyKYk6nzpExI/p88HabFF6/ulCrCLOdQvRCMsS3f7Oc2I4GK0VF2S3j528ErX1XBVKQjA/ucXXIa/E9w91yCsVsXGX69AOTtIiyuwl2nVSXhcHBpmJ4Sbu5QTGoT7FB4WZRdNcJlNra31IvHrVlOOVlZSZbYIFVaubEqcTb5YzOc6hSsbxvJo90Z35NJTooVSIiruaCeXzWpLidn0KDGsCj3OweMSzxRKYSjcKrhjH55wvCt0koZcZMt5NcDqbs/F3tmP78Nix6OBBSUbw9xW3cd4kdBsw1l4lMtRenBHSYnO5PUwVVx9miLtDbhnWhKPb1erqlwB9ul36ocSnTzrCe/tT9O1Fe9HbOSNIC191jj1c3qdK2pji9kJeQzPijAmm5YL/Jz+PEgXCts253W1wDqBDcUEwJdRdjWQsc6I5pz+uFr8eC3wT2vVscmIBNpDVIByMbrOkJUl12kxGd8WpfujwCsqPO3BEqXg1LFZK6WDXopgP4HhC+qxVuyhLIZPiTBelWnAzaXART+vn5BChukyDRmLuGhTd/4WMMmDnyws2uHn5vU9ofYEfHhwg4k4jER4MkjJ8xHh+xzC83bWK0l2cTabEk1cjI5TBdh+q56IYI8cmhE0yYq+BrQusG0FoLV80015QmDsgWiG/xTllwinBmnZrSgpexuJOCOEpyTkUoU1nh1sYUI2JcfXAjd+vZib9YxKwaPmKQuMuBNyrMvi8oTHFHtUg/1tC9MBL9qoVxU2N3g83hWyLEiLK1bn5/WPQUqcwyQOdjLksgXHyl+LKT4zg7S8q9QXV6TPYE/ruVsKBYdezqbFZZZkcnq2wMYS2MUtZY97WLkP4VNlaYUwGvRfjE65deJYDly7kT+PTLJ7R8iDEnJK9tjqGaGVYOf0ZuB5hN2jOczxgawHbCuRIrSHHhcmlK9JyHKTLGRGqGHdomJFgOZWvcjyifC4KifjcZ0aRiXs4Bi6vA6e7asSkrUx95ViWwT7L3Ydds+0fZDC1KfKOQmPvSNgn4lxUbUvijBfYbLAnxQ+EKTkPD+vq4OUuLqjDmyPVRoyE+FvFuwuZbzXwFcwfCS6Zrtxeo2/IZzvwWsGDhPh7mIfjvDgFyWwm3N6DVoIVBSPfYqFd+3SV5gJhE0taXHVGJvzehGG97ssFaVLPE5Qw+1izyZRNomw3p47FsetDLatO5r0WNFtsHbfVSIc3VdRm3rALp5JZV2INq4rSpMULmhJF2qtFMGeKmDt43upx7li+G7o0SyGL4vHxqCxPlNs9CF+Vhvk3e7UHBeoqMIsUVyNNxUm7jiC2d8plsv08/oQyl894TI1vL2oQ6Q9cVO5LfX105hkrzFwiJXMpHJjN2QRjhVleRRsdwaXMFcKpbzuU2GKKt1SKG9pw7fy8THOrNSP0cVCLcx2q43HN+LZJ+7MTmGkZxhthGtR9rUfoBgy6rEpNHQvbpI/VQXbni2V6OS/PTjfnUjTpp9X5fz2LqbedLz0qndWD9hu+svpKsRVKe4hwydUuDQG9j+J8IwqR+BxuQXbwFMKPxwxkjULjpK/xjte67e/XPciEYmFU3y7nJTvC7klOFasImanaVt60x6w+q3Qc0Vr7bJhY967BP6h6g5jcwqlf7tOkJHukNVzPMNnjUfWM5xrjUtVtPGlxlaM8vjuq2/wzLjRXGzgAc8e4jqK48wbTFnUJE7SLc3N6aeNchUeJwj8XOFAlDzK94Im+6H2+Mwt4AnhRjX8xJprEbdEZlDmZZsK53L2Ars5p3bKsgeR2ajJckEcO1WIYkH/ki1E6+e0J7fJ1jotFI6rsGIFaflkhXTl9Xd4PWHD7lrImQptUbA9jzVi+K2x2r7HUtQF6H8yaGRzpo0HsynZvxa48et+XsvVFdw1ZQbCkihfNLvDz+mtFuxri8cxWQVvTAPSFfIRhQXZlExygNyhu5okNj706yJcRMgs+9HYZaOzmyeyxY/C8hZrodvaLd/1hKQx3NS5jgNH7ExbQvBDJRukxFVsLgZGHBgqJ1upLG29XInsBq6zM0JLWlzl6Exev6XKiepxlo2DKyloLgkRFiA8GqQKu4co2fSf20W5o5ozwJ1dBbYGSUUqS70D7+d1FVrI+ozQZIULK8CG+/E42EqQgRNEOEWURhG6VJ2i1Gu/W28f6uWLg108PuMYlFc0wXdKwYX2FFuEK623zgpK0uNPIe6Mzc8LtGVj1Z8ybXqNKDca5XI7pdtpu1hd+XRVbrEHu9k+zmnVf361gz+UzLfxfbatbbqg6LHzV+j+nW/jiVK6cHSfbUtzvbAvu1QLTf4/wKI33hVQbmkAAAAASUVORK5CYII=') no-repeat;
      
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
.subject{
  width: 100%;
  height: 4520px;
  margin: 100px auto;
  min-width:1200px;
} 

 p{
    width: 1000px;
    height: 100px;
    margin: 20px auto;
    word-spacing: 0.14px;
    font-size: 18px;
    text-align: left;
    text-indent: 2em;
   
  }
  .dy{
    display: flex;
    width: 120px;
    height: 120px;
    border-radius: 50%;
   background:blue;
   color: white;
  }
  .nr{
display: inline-block;
width:500px;
height:810px;
margin-left: 100px;
text-align: center;
box-shadow: 0 5px 14px 0 rgba(146,191,224,0.6);
  }
   .nr h2{
     display: block;
     width: 90%;
     height: 100px;
     line-height: 100px;
     margin: auto;
     border-radius: 0px 0px 20px 20px;
     background: orangered;
     font-size: 28px;
    color: white;
    font-weight: normal;
   
   }
   .nr p{
     width: 90%;
     height: 100px;
     line-height: 100px;
     text-align: center;
     color: black;
     font-size: 20px;
     border-bottom: 2px solid orangered;
     margin-bottom: 40px;
   }

  .aa{
     display: flex;
     display: inline-block;
     width: 500px;
     height: 250px;
     background: white;
     margin: 30px 60px;
     vertical-align: top;
     border-radius: 20px;
   }
  .pp:nth-child(1){
    width: 100%;
    background: blue;
    margin-top: 0px;
    border-radius: 20px 20px 0px 0px;
    text-align: center;
    line-height:100px;
    color: white;
    flex-basis: 100%;
  }
   .pp:nth-child(2){
    width: 95%;
    line-height:50px;
    text-align: left;
    font-size: 16px;
    text-indent: 2em;
  }

 .div1:nth-child(1){
   background: white;
    width: 100%;
    margin: auto;
    margin-top: -50px;
 }
 .xz1{
   max-width: 1500px;
   margin: auto;
 }
 .xz2{
   display: flex;
   justify-content: space-around;
   max-width: 1500px;
   margin: auto;
   margin-top: 100px;
 }
  .div1:nth-child(2){
    height: 750px;
   background:#edf4fa;
   flex-wrap: wrap;
   display: flex;
   justify-content: space-around;
   margin: auto;
   margin-bottom: 50px;
 }
.div1:nth-child(3){
  max-width: 1600px;
  margin:  auto;
  height: 700px;
  
 }
  .tp{
    align-items: center;
    width: 1200px;
    margin:  auto;
  }
  .tp1{
    align-items: center;
    width: 1200px;

  }
 .div1:nth-child(4){
   width: 100%;
   height: 500px;
   background: url('http://www.jfjun.com/assets/landing-banner2.png') no-repeat;
   background-size: cover;
   display: flex;
   justify-content: center;
 }
  .div1:nth-child(5){
  height: 1050px;
 }
   .div1:nth-child(6){
    margin-top: 0px;
   width: 100%;
   height: 400px;
   background: url('http://www.jfjun.com/assets/landing-banner3.jpg') no-repeat;
   background-size: cover;
   display: flex;
   justify-content: center;
   align-items:  center;
    }
  
  .div1:nth-child(7){
  width: 100%;
  height:450px ;
  background:#333;
 }
 .ppp{
   width:1300px;
   height:100px;
   margin-top: 0px;
   display: flex;
   justify-content: space-between;
   border-bottom: 1px dimgray solid;
 }
 .section .pppp{
    width: 110px ;
    font-size: 22px;
    line-height: 40px;
    margin-left: -1150px;
    margin-top: 20px;
    margin-bottom: 30px !important;
    color: gray;
}
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .menu ul li{
       width: 40px;
       height: 40px;
       background-image: url('../assets/dh.png');
       background-repeat: no-repeat;
       margin-bottom: 5px;
       list-style: none;
    } 
    .nav1{
       background-position: 0px 0px;
    } 
    .nav2{
       background-position: 0px -40px;
    } 
    .nav3{
       background-position: 0px -80px;
    } 
    .nav4{
       background-position: 0px -120px;
    } 
    .nav5{
       background-position: 0px -160px;
    } 
    li:hover{
       cursor: pointer;
    }
    .nav1:hover{
      background-position: -40px 0px;
    }
    .nav2:hover{
      background-position: -40px -40px;
    }
    .nav3:hover{
      background-position: -40px -80px;
    }
    .nav4:hover{
      background-position: -40px -120px;
    }
    .nav5:hover{
      background-position: -40px -160px;
    }
    .menu{
     position: fixed;
     right: -850px;
     bottom: 160px;
     z-index: 6666;
    }
  .section{
  width: 1300px;
  height: 300px !important;
  margin:  auto;
  margin-top: -20px;
    }
      .cs{
        display: inline-block;
        width: 100px;
        height: 40px;
        line-height: 40px;
        background: black;
        font-size: 20px;
        color: white;
        margin-right: 25px;
        margin-bottom: 30px;
        opacity: 0.7;
      }

    .message{
         color: white;
         opacity: 0.7;
         font-size: 17px;
         height: 40px;
         margin: 0px -20px;
         margin-top: -10px;
      }
</style>
