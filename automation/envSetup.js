const fs = require("fs");

const BuildFolder = process.argv[2];
const dirPath = `${BuildFolder}/static/js/`; // Replace with the actual directory path

const mainPath = `${BuildFolder}/`; // Replace with the actual directory path

try {
  let files = fs.readdirSync(dirPath);

  let jsFiles = files.filter((file) => file.endsWith(".js"));

  jsFiles = jsFiles?.sort((b, a) => {
    return a?.length - b?.length;
  });

  jsFiles = jsFiles?.filter((j) => !j.includes("chunk"));

  console.log("\nJS files found -> ", jsFiles, "\n");

  let originalName = jsFiles?.[1];
  let filePath = dirPath + "/" + originalName;

  // deleting the file
  fs.unlinkSync(filePath);
  console.log("\nDeleted", originalName);

  let obfuscatedName = jsFiles?.[0];

  let oldFilePath = dirPath + "/" + obfuscatedName;
  let newFilePath = dirPath + "/" + originalName;

  // renaming the file
  fs.renameSync(oldFilePath, newFilePath);

  console.log("\n", obfuscatedName, "renamed to", originalName);

  console.log("\nTask Completed, Enjoy :) \n");

  jsFiles = files.filter((file) => file.endsWith(".js"));

  jsFiles = jsFiles?.sort((b, a) => {
    return a?.length - b?.length;
  });

  jsFiles = jsFiles?.filter((j) => j.includes("chunk"));

  console.log("\nJS files found -> ", jsFiles, "\n");

  originalName = jsFiles?.[1];
  filePath = dirPath + "/" + originalName;

  // deleting the file
  fs.unlinkSync(filePath);
  console.log("\nDeleted", originalName);

  obfuscatedName = jsFiles?.[0];

  oldFilePath = dirPath + "/" + obfuscatedName;
  newFilePath = dirPath + "/" + originalName;

  // renaming the file
  fs.renameSync(oldFilePath, newFilePath);

  console.log("\n", obfuscatedName, "renamed to", originalName);

  console.log("\nTask Completed, Enjoy :) \n");

  files = fs.readdirSync(mainPath);

  jsFiles = files.filter((file) => {
    return file.endsWith(".js") && file.includes("obfuscated");
  });

  console.log("\nJS files found -> ", jsFiles, "\n");

  if (jsFiles?.length > 0) {
    jsFiles?.map((file) => {
      console.log("\nDeleted", file);
      let deleteFile = mainPath + "/" + file;

      console.log("File path", deleteFile);
      fs.unlinkSync(deleteFile);
    });
  }
} catch (err) {
  console.error("Error: ", err);
}
