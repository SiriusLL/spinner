const animation = ['\r|   ', '\r/   ','\r-   ','\r\\   ','\r|   ','\r-   ','\r\\   ','\r|   '];
let timeout = 0;
for (const char of animation) {
  
  
  setTimeout(() =>{
    
    process.stdout.write(char);
    ///console.log(timeout);
    
  
  }, timeout);
  timeout += 100;
}

setTimeout(()=>{
  process.stdout.write('\n');
}, animation.length * 100);

