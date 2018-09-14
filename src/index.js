module.exports = function check(str, bracketsConfig) {
  // your solution

  let stack  = [];

  for(let i = 0; i < str.length; i++){
      for(let j = 0; j < bracketsConfig.length; j++){
          if(str.charAt(i) == bracketsConfig[j][0]){
              if(bracketsConfig[j][0] == bracketsConfig[j][1] && stack[stack.length - 1] == bracketsConfig[j][0]){
                  stack.push(str.charAt(i));
                  popNcheck(stack, bracketsConfig);
              }else{
                  stack.push(str.charAt(i));
              }
          }
          else if(str.charAt(i) == bracketsConfig[j][1]){
              stack.push(str.charAt(i));
              if(!popNcheck(stack, bracketsConfig)){return false;}
          }
      }  
  }
  return (stack.length == 0);

}

function popNcheck(stack, brackets){
  if(stack.length < 2){return false;}
  let closed = stack.pop();
  let opened = stack.pop();

  for(let i = 0; i < brackets.length; i++){
      if(opened == brackets[i][0] && closed == brackets[i][1]){
          return true;
      }
  }
  return false;
}