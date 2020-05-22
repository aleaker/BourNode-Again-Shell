const fs = require("fs");

module.exports = {
  showPwd: () => {
    process.stdout.write(process.cwd());
  },

  showDate: () => {
    let d = new Date().toString();
    process.stdout.write(d);
  },

  listDirectories: () => {
    fs.readdir(".", (err, files) => {
      if (err) throw err;
      process.stdout.write("\n");
      files.map((file) => process.stdout.write(file + "  "));
      return files;
    });
  },

  useEcho: (data) => {
    try {
      let str = data.join(" ");
      data.shift();
      if (data[0][0] === "$") {
        //if the user asks for a env var, call process.env
        let envVar = data[0].slice(1).toUpperCase();
        //check if it is valid
        if (Object.keys(process.env).includes(envVar)) {
          str = process.env[envVar];
        } else {
          str = `${envVar} is not a valid environment variable name`;
        }
      }
      process.stdout.write(str);
    } catch (e) {
      console.log(e);
    }
  },
};
