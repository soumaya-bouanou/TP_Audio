import './libs/webaudio-controls.js';

const getBaseURL = () => {
    return new URL('.', import.meta.url);
}; 
const template = document.createElement("template");
template.innerHTML = /*html*/`
 <style>
  
.body{
    margin: 0;
	padding: 0;
	font-family: Arial, Helvetica, sans-serif;
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
    background-image:url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaGh4cHBwcHCMhHh4eIRwcGiEeHh4fIy4lHyErHxweJjgnKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QGBISGjQhISE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAJ4BPwMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAACAwQBAAUG/8QANxAAAQMCAwYFAwMDBAMAAAAAAQACESExA0FRYXGBkaHwBBKxwdET4fEiMlJCYoIFFHKiksLi/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECBQP/xAAaEQEBAQADAQAAAAAAAAAAAAAAEQESIXEC/9oADAMBAAIRAxEAPwBJwqmmXdlvh2EkmfdVPwNyLw/h9e/SFza6hX0bT36JjMKDU0ylUfRrUz3tTgwA7+9VKqbyCx9TTksDQDequ8gGXqs8jZj36KUQhk0mibg4d70yT/oC1a6TRGMICmiqIsVhgkA+kd7lMzAxiHeWRSxmtRaq9hmBl6705mA46aaKo8Xw4eCQ6Rv9gbr2PBT5TQWrMp7PDkiw4XTGYNLiqJqYmMh1HysL6UA5/ZWPwTFt3Yug+mL+XvXahU/1bRszHWVz3cN4qqHNsfKc8x8omsGkevRRalY83BHM/K185mmk9lPLQO+iMtF5Gef3UVM5xIiTx61S3sMgnK1fgXVZa2/uFpHYsgjkTQDaSBPpTiid5RWJ1Pd+ao8grQnqOq1wGiglaJ2bvvRG3DEWqMyO/RPw21o3qFjyR36flUJazb7p7gNd9aHklsBmuafiNj+rhMIhfl1FtpI4yhb5RaOnuu+kIP3KN7KR7fZAp750MZe9ClDFExIme9U7y0qOnwELjWJPBBzPEbUD8R0XOdiE9rJaZG+nslvwBeBOz8qhBYTU+cnfPWUQAH9J59hF9AEWHCv3XAOFQTfllrCBX1R/cOPoPus8zdXTp+CnNfP9AO0fCzyClx/j8KKDFdRpyBO/T3lB9MsMi4js/CpawGbEG9LbVrsEgRHmtaTHEe6Ij8TiOdl3yso8QnzSQTT0ovTezIRykqd+H5Tl5s5FuDbIrzmvJtbj7qnDabX7tbYpsB9QKHb7K9kT+oxp+QmqMMm5FtyYMMajqpmtdNY69QapjKTPMSPZQWMa2P3Dqh8g1BjRCwbD1WBtIr3xVSDDB/LvvJEMIRecuCL6ZpYU289JTMNkZ8yet5RGM8NSZvoUwspMzxTn4c5RuBXeTzCFpKnbRaMW2Qykpr8GIPdNqAtNKxe1Z9kVxNyOv2XCDnTYFuLhk1H6dsrsFhz5XQc4Zg+iFpE3T3bAR3uWsobIykMXnomecBOLYnqg8sG9NFlplETdlOS10ATA515Ba0iO/RBnlQNHTajaAmHB7k+yBTGrSwFaW5UPe3JcWjX3QAGAEIn8UbMGk5cfmi3EAixQIbBpPWPhE2IpbUVC04ZcCaAAXzQNFw0QMzedyDmFrjHWBKZ9ETc8EpjADE1vJTnmgNeQ6K4mkOwQ0caTecu9iB3hwajn7qtzptGs/CWWSaWF7TMTG6AhhGIzzW2Eu07hFitlx8ogxUka/P2TQ6QaQNwr1Ql9ZHE3MbkVK3Dg0qZmcu96biYLrzyHz91RhCk2/iKTvJ74LXtsK8rj1RKSzDcJik5m/wCEDmONdN6ZAiYJ/wAZ9PdKqDQd7qeqKENM67suqXikG4M5mK81viHkESDalBZJOOAIFNw+6ioPL5YEeioY8U+/4SHtIHmBJF4NeRVfh3McBOW8IpvmHZXecbPX3Wvwmz+mm0SV3+1YBPmM97ZUGYeNJDW+0fhPaLkxHJcxzRPlkSLkzwgCiIgRQ0OYQd9SSA0AC5N+S5mNXytAMGL0+FN4Y/rcKdOqYzD8hLpEOpUzOfdVUiwYpAuNKD2WsxcpPQfKnwiHXjn7XCowgASSLZTn3yWsZ0T38Qa3J6LWPtNByCndjV2cOsrB4jZ/1HwlItDhlTaB6Ssc3b6qVuOdTOz4Aotb4g6kcc0pDRh6EdR7LXMGop3xQsxndj7Ig5xuOg+FFY0iYv0WOGwpT3u1jvcscZ7n0UIZA2c/gLhn+3vigaPngl4joyjhT0UU5rhOXfoj8w5b1P8AU3Dou+pGVNyLFAeDnKIEG0HveVH5xpzTGsJt19kSKWjQwUZcdZ3iOoQg5CTwQOyr8qoZOhjjPRYQLzGVKeqJ2IDy0S4ofMdo70VGubrXeIPGkJbxFQSN1kXnyBR4jAM6qBfmpDtZ2cEbW1vE5xTjK1kTB067N6JjhMSDN56G3BVkBw6HqDpkRSiU7Di0kG/tCo+pQSag0rujeD8Lg8EgZ3jbqFVpTIIuaHZpFhszEpjsMmIM+vysGALgxXbE+y3EY45jmERj8A6O4igS8TCi8DbU9BVG7CdHcpTsN+Z6A+ii56Ivy8xtZogDfRTOwG3DOKPFa+Kk8THvCkx8PMn39JU1cx5rGnP9XMQm/TArBGZj35ovIYMDPOETG6hGgOeaVJ2x6QiDs6cUT2SKD7rPI4DseqimA/8ADvgte3VwA0F++CyCRYchPqm4ZIFW9IQZhGJ8rDe8IsPwxNXHvfkiD5NTHr6qjCrp3tVxndKJig3QKI8DDdP93HlRc9pEwa6oWEnf1VqQxuJMgzzCa0EC/PuETGzvzPfdFmLhUtJVZdiGYsdnxZa0N/iORXFndUDcQ+YbtqVYa188K1AomDEdl6qd7uHNB5tvqpSKHvM/u699hcXzYiincRApuP5XG+oUqw8Onbv+6F4mkDdTvqhGoBWvxOSECcMaNGyURwxoOpXMdnA74JjWk1mneSilDDEyAOSPybe9wTfpHWN/5XRBAjirEpLWEZdICNrCNm4fKY51YiupvwWEVgjmUSg8u2eSx2HWpPonH/EjSk+q1p/thWFLaGgyA2dZXOdPZ9YTw7d0S8QE5UnVVKmxWSBs59FhBy/dntVHld13LXYQJivRSLUpcRsz45/ha/E1t3yT3YUiL6IX4WsdJ90LgMB7nERbbVPL25u5D7qf6XlMtpsyO9Mduahprg3IGveiS5zRcdbcQEyB/Ejcfwk4gBmh/wCvqqYW9wmAI3/kKPHYZoQE95giG15qbxbSaO1sICyuJWyRQ9813iHkeSvyta4iTZY+CQTlpqo0OSbAEX/Mp7SD8aJOE4WpE5nodCqQYtbhTdJQcWtikX0ojpBrJFLW5pDsdgoXAG1Y6pI8cwmhkupINiKK4Ky4zakfYJuDETsmeeSjPiOW/aEIxt3vn7U2KpHqObI01+Rmlhsaz3kgwsaRx72dV3iGSCfNS8Bu++ooiKsB5rrsr6UCJzz/AHKbwOMDu7uqn4wqchnHzc8yrWdzshuPf93JAMYzY9EA8UchTTNcMQuE0vopWoJuPOR76LhiH+J7GxY/FO4pDAbk7+ypVh4xjoVrsU/xMlKa051RAwb/AJUqwbnuAktApqgOLnUHvbVHiPMHXPYpXNrl31QzFQxNoTg/T49krB8PSZE801nhwDf0ROh+c6caV6LA86Hs8FoOU23V4rnMyEVvUHkiO+pSvRGcW0j8dEoNHlLSY325pRdYaZiqtIsbiUojDSQDQA8lM1gtPqjmBf09yrmpuCGLoRCH6xG3igLqivp8rHEHsfKl0mKGHN0ibQUTXiazu/CjGKTmKa/mUbMT/jz+SFaQ9z8we9qBz3bdbIW4xApAGz8ri8nP29vdKRzSTWPlGMS8l3/iEsvNibamfcIXvAzHP/6SkNc6lCOISBjOiw613Ii4ndtr7GqW9+zqK9E3TMKdiSawOFeVSheLUneY6fdL8Tibo0mqTiPM7NnYWWolxXwBpr89lN88CXHSZFO/hS47wYuItmOFkTMYjaNl+vyqqj64Fuf2kJrcffy+ZUf02Gw8vP8ACa3DAseqijxWg1LZ1sRvI0UuMGNP6KE1p9tU8M/uMbkrGbJq6dwqFcRP53kF0502751TsJ/7r3y13g2zWuZE7coFD8T6o2MteaSMtZ3qou8C8DQiJI1OzRUh0i474rx3nyuA820W5J31ZFzNp7hBY7BgSCNvymsxw8WAyPBQtxCJBmoyzHytwRBHvt5oijEIBgOnWRPouwxcn0AQ+fQDabrnO0McJ75KKcI0HI+xWjDH8mjvcpn4Tj/Udq3DwYzE3iCgeYGnGvfNa4tvT05VSCwzcRpCM4Z/lwUUx2J+mjRG7sJP1AbwNnxCODbzIH4ZN3d8kBOGhHEprS4D94jf36qY4AnPvcFoY0a9UFLXn+befymtfl529LLz/ptm3OeyjYRoOvygqc/+5vIJTiJkvFO8kogV/SORr1Sy5sWHT0QWDFbq3l8ojijU8Gj3ULX3mOMImY+6YuI+UFX+4rQ32BY7Gj+R4x6BTN8TNAa8UbfEHSdra9Lohwe45EDiUzzEamd/uVP9atQROsoxiTcC/D2QMe4waEcqrhiCgrOwAeoCR4twaykycwTA4FK8Pjg0JBpTZTZthUegW6ebl90DmHOeilbilrqTShrI4aqv/ctI13ohGJgkAw0HfboFjMMm+lgjD5bOpsAOuix7tBHzyRU+NhkNrJrmacAFE3Emw4ACePfNN8e8ila7fc+0JPh8O+7WptyF0VO8yItxRsZuPuomYkwBFdfwqatue+aor81IgdEoOk/tUznzUekeikd4otvE69wmYPWxHAgbOPulgzX5hQtxiT1r3RV4T86cKpBYzCaczz1TGUn9SnwXmTS2fBMxMURSQdN+whEeeZ+oa8DwsnknSfVTEmQRpEqrEoK11GnwqO84AJ91R4VxIB8xjVSPbJgaBOYYIpTl7UQVYJJmudUwFwE9+i87wznQTqbH8qjzuzHWk8VBW15GWWk8bomOM6/4lTtxjLrWjbYfKoGJbXaVAbn0NuXPOqFjzFYm657uXAo5zjpXqgAPJ28QtLsq9Fm2s7q8kY2dAopbnbuY9gh+oY/P2Tn7jyQNBrSO9qAPMdvL7rWl3Y+6ItP5I9ljuGt0ANJtB5fBhAHk1ry+6YZyvsKEiB+09M0Cw+tR6osYgtNuoj7rJrfvvasc0nK3etVQGG6prv7Ce141gzFRbopnZyKDmOBXMNoMDiR8jmiKnP0jvmiY87JjX8KR7oJ81tmfyjL3AS02yk92QNOJnWO96DB8prSdkT7LMJ/mpFTNR3Qo/DOkwRsnbtRW+YSakcfYrQ/U32JTW/uYazbfNhvXYRj9M/iyIYLftB3fF0D8cA1BFNqjbiUIJoCZG7JYXl7t9vuEUzHfMVPzsRNMUIEaqNzKCdbAaVM9FQ3zGa+X16VKDycIAkki1gNduxc7Ek7zc+5WgQT5Yadarm4XXYOWa0KnYjR5s8rHmF53iWNmDFdfVXx5aC22PiYScdsmSO90VTE1P4YAGtxp+FeHlsG06eyiaZFWyBmL8VSwuiB+0+u6bppitmJU87iO+9i3xONLKzQX12fZI8PBOhAiPbZ90bcMmduUXhQZgvgD+6dsHWtxXqV2KCKAmZppevVGcshukRpUSmP8zQZALeYGVZFFQGC7+oWOk0TPLLv09fbVD4V9SSIORydxCqZhEcaqCbw4IbEyJNDIhPYMh8zzyT/2ibE1jbquGDAkVJrbXagnYakZA8ukKhkZx3yXFl8qLSaCLUmqgMGYyzkSjd5a321PusisV5fZY6SbU3KKMVOfX5Xfp19T7oI7j7I67I0A+yDHEfKBrm3F+HKyN+s98lgtccvsEGPAJ79gtZBNAOSJ7CSDoN6xkzYHOkoOIrSOo9EQbI+CipupW/yhwnG19hRGhs3n/Js8oSAAJpXZZUsfJvCDzyZMVmKdyqFNEkE8D7GMkWGxotFcj7FLkttBAuNh/Oa1mKN1pHdEDX4bTLTTQGkbQeCFrQBX9QI716SjbiiN9hcdcuKzyGSBQ5wY9aIiZzPKYFTkLOAvmiY5pqLk1add/fFc8S4+YilgRXhC1+HNTXkepRQ+JcKEm2dfVC8iJIkXkT7e6l8rgDB1oJk+qHDeSd3AcwaIAZi339yUTmsFaj06ZbkZYCZ9PzPNbi4QOUjbP3RQeHdUyKb+tUb/ACfx75qURWaVtBH/AKhc4gmjo4mEHmv8UKGYkSKLR4kRJHU8lEfCMBBkzF9pg0TLUFp09VuYzdWsfI142p3VbiYZoLZ95KXDfH4TC82klSFODg2azOQtXXJHgsGcj2ryQNFqHYaprG615oontl1CbU27eFbqxuHMTWRHEGRXjCQxgGmwwqMNx2nQ5BAYwhMyNonrvyPBN+lFjGy0/KCLUJ3QZ40RBxIIiJuXX4AeqgzDwQJExsuE5o/iTwM/dKYf6aHbX8hHjs8kda9O5QMBrBNdDIRMYCLHgbclKzGmflEMSgoOigqaBPSxRhgtPKVJ/uBpEbStGMB+UFBe2t/fqtDhlKlw3y4xQRXvNb5gNIGdLIHPxIN4TGVNxu7Kh+o0527m0phxQCJtn2ZUVeb3HT5WHSfT5SGPbtPe5YHAmnXuiCh5gXG1THHAr3vuku8R++KeWg0PBAYIbMxsuDs71VRW7xANDBOv3W4ZiN3FSeHb+ojPPQ6UyVQLa6jQz0KA3HP290APHfT7LHYgkaclznTnSeR3oEPOXstw8M+cEH0RuilZ33pkmMANRIg5e4tZBz8Im2vdigDDOydVSxxyId090LnZEU4xzRKVBNPNwMEcZWObAyoNAjGIPNT390L/ABGWtEHnF8i+dvzRb4eaTrmE9rRBiCNuulaBDhm0Rut2VVMfHmiRKDHZGg5pbZ87zSlKrXPmnt7lQJGFFR7pT3EXkd5pziYiB3xSMZxj8daoPBbimJi3eq4Gxnh+FC7Epw+yb4Z9Oq9uLFV4bq1NFRhvrdQF5T8GYmVncXNXMP8AcRxPyqGCkhx6heaJpv1KccQiBu68NFmK9D/KdaBbhujLbTv3XlufsFBlT5RYPiSRPAJCvaZjQL86dR8o3Y829ZXiYr3mK1NjJps2jYoMX/UXNpAJJF7ZhXPmpu5j6MYwmKDdJPSvoj84dqdtT6leN/pxc5s0pYV9rr1fBtJAFJidnfBTcWmMe3b3slEPLp6fKQ0nzeWntwRgHzRkNpSKOWx/UNsfCwhs36FAIJiO66bkUQReu0qDS7RwjeYO8HJaTNaTlBkZ6IPMJN+k1/CBx8wEGhMViaZ0QPe8xy257bJTsUuIkmBaO4WPxJESYMZC0SlYOMTak0GyaT0PRBd4bHuBHe0pjyTrTL8CqkY4+aJIpNDtgDoia/zbzqpFY6BUxe2U7tUzDdIOu34CUCLRnBqibhHM7YFB3VVDMMZk11cbprMQea5cdluaj8wDi2KkTzg1J+E1jCdPUoKnPEVPCvssZjeUG0G/rZTvcbE8gNuxCWGmedXH0hA9zxkKU37Nye3xIZU3MiF57nGhoIrS+tytxIpMkmukILDi5wJOSYPEEM/UK1oMlFhYoNhluynIJLscXIOl9qRHoeK8X+kNzEEkzwjVIxMcuzHCmSjfiSLUGt68EvDJJBzPZsrB6DMQEEbZmvVC98OFQCNLH53qR5PBMwnAmHSdLKCl5FSYJ72KN761PIHv1XHHob0SMRwAkjvirAbvEBs14G/RTux5E8M/ayVieLJBMWMbUH1yBOV9taJCv//Z);

    
}
  .main{
	position: relative;
	height: 99%;
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
    box-shadow: 1px 0px 10px 15px rgba(240,240,240,0.2);
    background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5SVPfG9pR9nAMoty22myHPl0G2azp6jBBbjgBp0TvD7BMfwFuV2dGlFlDR6CKb0a0tkA&usqp=CAU);

	
}
.right,.left{
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
div.controls:hover {
    color:blue;
  }
  div.controls label {
    display: inline-block;
    text-align: center;
    width: 50px;
  }
  
  div.controls label, div.controls input, output {
      vertical-align: middle;
      padding: 0;
      margin: 0;
     font-family: "Open Sans",Verdana,Geneva,sans-serif,sans-serif;
    font-size: 12px;
  }

.right,.left{
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

 
.left #progress{
    width:100%;
    


}

.right canvas{
    height: 150px;
	width: 80%;
    margin-top: 40px;
	border-radius: 25px;
	box-shadow: 1px 0px 10px 15px rgba(240,240,240,0.2);
    background-color: black;



}
.left .middle .button{
    border: none;
    height: 70px;
    width: 70px;
    border-radius: 50%;	
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    transition: 0.5s;
    box-shadow: 1px 0px 10px 15px rgba(240,240,240,0.2);
    background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGr9ZgfVB1Znnyn4G7JuuJQYmUzVZGLJkYw&usqp=CAU);
 
 }
.left canvas {
    height: 150px;
	width: 80%;
    margin-top: 40px;
	border-radius: 25px;
	box-shadow: 1px 0px 20px 12px rgba(240,240,240,0.2);

}

.left .middle{
    width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
 
   
}

.left .equalizer{
    width:100%;
    color:white;
    background-color:#2d3436;
    margin-top:30px;
    padding:5px;
    border-radius:5px;
    box-shadow: 1px 0px 10px 15px rgba(240,240,240,0.2);
    background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGr9ZgfVB1Znnyn4G7JuuJQYmUzVZGLJkYw&usqp=CAU);

}

.left .button:hover{
	background: #fdcb6e;
}
.left i:before{
	color: #fff;
	font-size: 50px;
    
}
.btn-nav{
    position: relative;
	height: 20%;
	width: 60%;
	display: flex;
	align-items: center;
	justify-content: center;

	
}
.btn-l,.btn-r{
    position: relative;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

}
.polling_message {
    color: white;
    float: center;
    margin-right: 100%;
  }
  .text1 {
    color: white;
    float: center;
    margin-right: 100%;
  }
  
  .view_port {
    background-color: black;
    height: 70px;
    width: 100%;
    overflow: hidden;
  }
  
  .cylon_eye {
    background-color: red;
    background-image:         linear-gradient(to right, rgba( 0,0,0,0.9 ) 25%, rgba( 0,0,0,0.1 ) 50%, rgba( 0,0,0,0.9 ) 75%);
    color: white;
    height: 100%;
    width: 20%;
  
    -webkit-animation: 1s linear 0s infinite alternate move_eye;
            animation: 1s linear 0s infinite alternate move_eye;
  }
  
 @-webkit-keyframes move_eye { from { margin-left:-100%; } to { margin-left:100%; }  }
@keyframes move_eye { from { margin-left:-100%; } to { margin-left:100%; }  }
  

@import url(https://fonts.googleapis.com/css?family=Montserrat);

          html, body{
            height: 100%;
            font-weight: 000;
            box-shadow: 1px 0px 10px 15px rgba(240,240,240,0.2);

          }
          
          body{
            background: #030321;
            font-family: Arial;
            box-shadow: 1px 0px 10px 15px rgba(240,240,240,0.2);

            
            
          }
          
          svg {
              display: block;
              font: 10.4em 'L E C T E U R ';
              width: 1500px;
              height: 150px;
              margin: 0 auto;
              box-shadow: 1px 0px 10px 15px rgba(240,240,240,0.2);

              background-color:black;
              
              

          }
          
          .text-copy {
              fill: none;
              stroke: white;
              stroke-dasharray: 20% 29%;
              stroke-width: 8px;
              stroke-dashoffset: 100%;
              box-shadow: 1px 0px 10px 15px rgba(240,240,240,0.2);

              animation: stroke-offset 5.5s infinite linear;
              
          }
          
          .text-copy:nth-child(1){
              stroke: #4D163D;
              animation-delay: -1;
          }
          
          .text-copy:nth-child(2){
              stroke: #840037;
              animation-delay: -2s;
          }
          
          .text-copy:nth-child(3){
              stroke: #BD0034;
              animation-delay: -3s;
          }
          
          .text-copy:nth-child(4){
              stroke: #BD0034;
              animation-delay: -4s;
          }
          
          .text-copy:nth-child(5){
              stroke: #FDB731;
              animation-delay: -5s;
          }
          
          @keyframes stroke-offset{
              100% {stroke-dashoffset: -45%;}
              
          }

  </style>
  <div class="view_port">
  <div class="cylon_eye"></div>
</div>



<svg viewBox="0 0 960 300">
	<symbol id="s-text">
		<text text-anchor="middle" x="50%" y="80%"> L E C T E U R </text>
	</symbol>

	<g class = "g-ants">
		<use xlink:href="#s-text" class="text-copy"></use>
		<use xlink:href="#s-text" class="text-copy"></use>
		<use xlink:href="#s-text" class="text-copy"></use>
		<use xlink:href="#s-text" class="text-copy"></use>
		<use xlink:href="#s-text" class="text-copy"></use>
	</g>
</svg>
<div class="view_port">

  <div class="cylon_eye"></div>
</div>

  <div class="body">
  
    <div class="main">
    
            <div class="left">
            
                <audio id="Player" crossorigin="anonymous"></audio>
                Progression : <input id="progress" type="range" value="0">
                 <label id="progressvalue" for="progress" ></label>
                </br>

                <div class="middle">
                
                    <div class="button" id="precedent"><img src="https://img.icons8.com/windows/32/000000/rewind.png" alt="Rewind"/></div>
                    <div class="button" id="recule10"><img src="https://img.icons8.com/fluent-systems-regular/24/000000/replay-10.png" alt="Backward"/></div>
                    <div class="button" id="play"><img src="https://img.icons8.com/windows/32/000000/circled-play--v1.png" alt="Play"/></div> 
                    <div class="button" id="pause"><img src="https://img.icons8.com/windows/32/000000/pause--v1.png" alt="Pause"/></div>
                    <div class="button" id="stop"><img src="https://img.icons8.com/windows/32/000000/record.png" alt="stop"/></div>
                    <div class="button" id="avance10"><img src="https://img.icons8.com/fluent-systems-regular/24/000000/forward-10.png" a alt="Forward"/></div>
                    <div class="button" id="suivant"><img src="https://img.icons8.com/windows/32/000000/fast-forward.png" alt="Fast Forword "/></div>
                </div>
                
                <div class="btn-nav">
                    <div class="btn-l">
                    <webaudio-knob id="volumeKnob" 
                    src="./assets/imgs/LittlePhatty.png" 
                    value="5" min=0 max=20 step=0.01 
                    diameter="80" 
                    tooltip="Volume: %d"><p>Volume</p>
                    </webaudio-knob>
                    </div>
                
                    <div class="btn-r">
                    <webaudio-knob id="vitesseLecture" 
                    src="./assets/imgs/LittlePhatty.png" 
                    value="5" min=0 max=4 step=0.01 
                    diameter="80" 
                    tooltip="Vitesse: %d"><p>Vitesse</p>
                    </webaudio-knob>
                    
                    </div>

                    
                </div>
                <div class="controls">
                <div class="controls">
                <label>Balance</label>
               <input type="range" value="0" step="0.1" min="-1" max="1" oninput="changeBalance(this.value);"></input>
               <output id="balanceOutput">0&nbsp;&nbsp;&nbsp;&nbsp;</output>
               </div>
                <div class="equalizer" id="equalizer-inputs">
                
                <CENTER>
                <label id="hz-value" for="eq-1">60Hz   </label>
                <input id="eq-in-1" type="range" min="-20" max="20" value="0" step="0.1">
                <label id="eq-value" for="eq-1">0</label>
                <br>   
                <label id="hz-value" for="eq-2">170Hz  </label>
                <input id="eq-in-2" type="range" min="-20" max="20" value="0" step="0.1">
                <label id="eq-value" for="eq-2">0</label>
                <br>
                    <label id="hz-value" for="eq-3">350Hz </label>
                <input id="eq-in-3" type="range" min="-20" max="20" value="0" step="0.1">
                <label id="eq-value" for="eq-3">0</label>
                <br>
                    <label id="hz-value" for="eq-4">1000Hz </label>
                <input id="eq-in-4" type="range" min="-20" max="20" value="0" step="0.1">
                <label id="eq-value" for="eq-4">0</label>
                <br>
                    <label id="hz-value" for="eq-5">3500Hz</label>
                <input id="eq-in-5" type="range" min="-20" max="20" value="0" step="0.1">
                <label id="eq-value" for="eq-5">0</label>
                <br>
                    <label id="hz-value" for="eq-6">10000Hz</label>
                <input id="eq-in-6" type="range" min="-20" max="20" value="0" step="0.1">
                    <label id="eq-value" for="eq-6">0</label>
                </CENTER>
                <br>
            </div>

            
                </div>

            <div class="right">
            <canvas id="Canvas2" width=400></canvas>
         <canvas id="Canvas" width=400></canvas>
                
               
            </div>
        </div>
    </div>
    
  `;

  class MyAudioPlayer extends HTMLElement {
    constructor() {
        super();
        this.filters=[]
        this.attachShadow({ mode: "open" });

        console.log("URL de base du composant : " + getBaseURL())
        
        
    }
    connectedCallback() {
       
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.fixRelativeURLs();
        this.player = this.shadowRoot.querySelector("#Player");
        this.player.src = this.getAttribute("src");
        this.canvas = this.shadowRoot.querySelector("#Canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas1 = this.shadowRoot.querySelector("#Canvas2");
        this.ctx1 = this.canvas1.getContext("2d");

    
        this.audioCtx = new AudioContext();

        this.defineListeners();

        this.build();

     
        requestAnimationFrame(() => {
            this.animationLoop();
            this.animationLoop2();
        });
    }
    build(){
        let audioContext = this.audioCtx;
        let player=this.player
        let sourceNode = audioContext.createMediaElementSource(player);
        this.buildAudioGraph(audioContext,player,sourceNode);
        this.buildequalizer(audioContext,player,sourceNode);
    }
    buildAudioGraph(audioContext,player,playerNode) {
        
       
        this.analyserNode = audioContext.createAnalyser();
        this.analyserNode1 = audioContext.createAnalyser();
       

        this.analyserNode.fftSize = 256;
        this.bufferLength = this.analyserNode.frequencyBinCount;
        this.dataArray = new Uint8Array(this.bufferLength);

        this.analyserNode1.fftSize = 256;
        this.bufferLength1 = this.analyserNode.frequencyBinCount;
        this.dataArray1 = new Uint8Array(this.bufferLength1);
        // lecteur audio -> analyser -> haut parleurs
        playerNode.connect(this.analyserNode);
        this.analyserNode.connect(audioContext.destination);

        playerNode.connect(this.analyserNode1);
        this.analyserNode1.connect(audioContext.destination);
    }
    buildequalizer(audioContext,player,sourceNode){
        this.analyser = audioContext.createAnalyser();
        let filters=this.filters;
        [60, 170, 350, 1000, 3500, 10000].forEach(function(freq, i) {
      var eq = audioContext.createBiquadFilter();
      eq.frequency.value = freq;
      eq.type = "peaking";
      eq.gain.value = 0;
      filters.push(eq);
    });
   sourceNode.connect(filters[0]);
   for(var i = 0; i < filters.length - 1; i++) {
      filters[i].connect(filters[i+1]);
    }

  
   filters[filters.length - 1].connect(this.analyser);

  this.analyser.connect(audioContext.destination);

    }

    
animationLoop() {
  

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = 'rgba(0,0, 0,0.1)';

   
    this.analyserNode.getByteFrequencyData(this.dataArray);

    let barWidth = this.canvas.width / this.bufferLength;
    let barHeight;
    let x = 0;

    let heightScale = this.canvas.height / 128;

    for (let i = 0; i < this.bufferLength; i++) {
        barHeight = this.dataArray[i];

        this.ctx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
        barHeight *= heightScale;
        this.ctx.fillRect(x, this.canvas.height - barHeight / 2, barWidth, barHeight / 2);

        x += barWidth + 1;
    }


    requestAnimationFrame(() => {
        this.animationLoop();
    });

}

animationLoop2() {
    
   
    let width = this.canvas1.width
    let height = this.canvas1.height

    this.ctx1.fillStyle = 'rgba(0,0, 0,0.1)'
        this.ctx1.fillRect(0, 0, width, height)

    this.analyserNode1.getByteTimeDomainData(
        this.dataArray1
    )

    this.ctx1.beginPath()
    this.ctx1.strokeStyle = 'lightBlue';

    let sliceWidth = this.canvas1.width / this.bufferLength1;
    let x = 0;


   
    let heightScale = this.canvas1.height / 128;
    for (let i = 0; i < this.bufferLength1; i++) {
       
        let v = this.dataArray1[i] / 255
        
        let y = v * height

        if (i === 0) {
            this.ctx1.moveTo(x, y)
        } else {
            this.ctx1.lineTo(x, y)
        }

        x += sliceWidth
    }
    this.ctx1.lineTo(
        this.canvas1.width,
        this.canvas1.height / 2
    )
    this.ctx1.stroke()
  
    requestAnimationFrame(() => {
        this.animationLoop2();
    });

}
fixRelativeURLs() {
    const elems = this.shadowRoot.querySelectorAll("webaudio-knob, webaudio-slider, webaudio-switch, img");
    elems.forEach(e => {
        const path = e.src;
        if (path.startsWith(".")) {
            e.src = getBaseURL() + path;
        }
    });
}

defineListeners() {
    this.shadowRoot.querySelector("#play").onclick = () => {
       
        this.player.play();
        this.audioCtx.resume();
      

    }

    this.shadowRoot.querySelector("#pause").onclick = () => {
        this.player.pause();
    }

    this.shadowRoot.querySelector("#avance10").onclick = () => {
        this.player.currentTime += 10;
    }

    this.shadowRoot.querySelector("#recule10").onclick = () => {
        this.player.currentTime -= 10;
    }

    this.shadowRoot.querySelector("#stop").onclick = () => {
        console.log(this.player.duration)
        this.player.currentTime = 0;
        this.player.pause();
    }

    this.shadowRoot.querySelector("#vitesseLecture").oninput = (event) => {
        this.player.playbackRate = parseFloat(event.target.value);
        console.log("vitesse =  " + this.player.playbackRate);
        this.shadowRoot.querySelector("#vitessevalue").innerHTML = event.target.value;
    }

    this.shadowRoot.querySelector("#progress").onchange = (event) => { 
        this.player.currentTime = parseFloat(event.target.value);
         }

    this.player.ontimeupdate = (event) => {
        let progressSlider = this.shadowRoot.querySelector("#progress");
        console.log(this.player.duration)
            this.shadowRoot.querySelector("#progressvalue").innerHTML = parseInt(this.player.currentTime/60)+":"+parseInt((this.player.currentTime/60-parseInt(this.player.currentTime/60))*60)+"/"+parseInt((parseInt(this.player.duration/60)))+":"+parseInt((this.player.duration/60-parseInt(this.player.duration/60))*60);
            progressSlider.max = this.player.duration;
            progressSlider.min = 0;
            progressSlider.value = this.player.currentTime;
       
    }

    this.shadowRoot.querySelector("#volumeKnob").oninput = (event) =>{
        this.player.volume = event.target.value;

    }

    this.shadowRoot.querySelectorAll('[id^=eq-in-]').forEach((e, i) => {
        e.oninput = (e) => {
                this.filters[i].gain.value = e.target.value
                this.shadowRoot.querySelectorAll('#eq-value')[i].innerHTML = e.target.value
            }
        })
    }


    // L'API du Web Component

}
function getAverageVolume(array) {
        var values = 0;
        var average;
 
        var length = array.length;
 
        // get all the frequency amplitudes
        for (var i = 0; i < length; i++) {
            values += array[i];
        }
 
        average = values / length;
        return average;
    }

function changeBalance(sliderVal) {
  // between -1 and +1
  var value = parseFloat(sliderVal);
  
stereoPanner.pan.value = value;
   // update output labels
  var output = document.querySelector("#balanceOutput");
  output.value = value;
}

customElements.define("my-player", MyAudioPlayer);

