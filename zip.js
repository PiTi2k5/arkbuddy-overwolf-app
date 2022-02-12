const appManifest = require('./src/manifest.json');
const version = appManifest.meta.version;

const AdmZip = require("adm-zip");

async function createZipArchive() {
  const zip = new AdmZip();
  const outputFile = `./releases/arkbuddyv${version}.opk`;
  zip.addLocalFolder("./src");
  zip.writeZip(outputFile);
  console.log(`Created ${outputFile} successfully`);
}

createZipArchive();