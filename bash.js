const {showPwd,showDate,listDirectories,useEcho,} = require("./commands")

process.stdout.write("$ ");

process.stdin.on("data", (data) => {
  let cmd = data.toString().trim().split(' ');
  switch(cmd[0]){
    case 'pwd':
        showPwd();
        break;
    case 'date':
        showDate();
        break;
    case 'ls':
        listDirectories();
        break;
    case 'echo':
        useEcho(cmd);
        break;
    default:
        process.stdout.write(`\n ${cmd} is not a valid command`);
  };
    
  process.stdout.write('\n $ ');
});




