<template>
  <div id="app">
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/display.css">
    <router-view style="width: 100%"/>
  </div>
</template>

<script>
const ASCIIART = function(){
/*
          _____                    _____                    _____                    _____                    _____          
         /\    \                  /\    \                  /\    \                  /\    \                  /\    \         
        /::\    \                /::\    \                /::\    \                /::\____\                /::\    \        
       /::::\    \              /::::\    \               \:::\    \              /::::|   |               /::::\    \       
      /::::::\    \            /::::::\    \               \:::\    \            /:::::|   |              /::::::\    \      
     /:::/\:::\    \          /:::/\:::\    \               \:::\    \          /::::::|   |             /:::/\:::\    \     
    /:::/  \:::\    \        /:::/__\:::\    \               \:::\    \        /:::/|::|   |            /:::/__\:::\    \    
   /:::/    \:::\    \      /::::\   \:::\    \              /::::\    \      /:::/ |::|   |            \:::\   \:::\    \   
  /:::/    / \:::\    \    /::::::\   \:::\    \    ____    /::::::\    \    /:::/  |::|___|______    ___\:::\   \:::\    \  
 /:::/    /   \:::\ ___\  /:::/\:::\   \:::\    \  /\   \  /:::/\:::\    \  /:::/   |::::::::\    \  /\   \:::\   \:::\    \ 
/:::/____/     \:::|    |/:::/  \:::\   \:::\____\/::\   \/:::/  \:::\____\/:::/    |:::::::::\____\/::\   \:::\   \:::\____\
\:::\    \     /:::|____|\::/    \:::\  /:::/    /\:::\  /:::/    \::/    /\::/    / ~~~~~/:::/    /\:::\   \:::\   \::/    /
 \:::\    \   /:::/    /  \/____/ \:::\/:::/    /  \:::\/:::/    / \/____/  \/____/      /:::/    /  \:::\   \:::\   \/____/ 
  \:::\    \ /:::/    /            \::::::/    /    \::::::/    /                       /:::/    /    \:::\   \:::\    \     
   \:::\    /:::/    /              \::::/    /      \::::/____/                       /:::/    /      \:::\   \:::\____\    
    \:::\  /:::/    /               /:::/    /        \:::\    \                      /:::/    /        \:::\  /:::/    /    
     \:::\/:::/    /               /:::/    /          \:::\    \                    /:::/    /          \:::\/:::/    /     
      \::::::/    /               /:::/    /            \:::\    \                  /:::/    /            \::::::/    /      
       \::::/    /               /:::/    /              \:::\____\                /:::/    /              \::::/    /       
        \::/____/                \::/    /                \::/    /                \::/    /                \::/    /        
         ~~                       \/____/                  \/____/                  \/____/                  \/____/                                                                                                                                     


                                       --------------------------------------
                                      |                                      |
                                      |   A Simple URL-shortener By George   |
                                      |                                      |
                                       --------------------------------------
*/
}.toString().split('\n').slice(2,-2).join('\n')
export default {
  created: function(){console.log(ASCIIART)}
}
</script>
<style>
@import url('https://fonts.loli.net/css2?family=Roboto:wght@300&display=auto');
html, body{
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Roboto", "sans-serif" !important; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: rgb(246, 246, 246);
  height: 100vh;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
}
</style>
