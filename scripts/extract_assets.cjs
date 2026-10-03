const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'C:/Users/rejan/.gemini/antigravity-ide/brain/fb26d7ad-dbd7-4682-af66-fe1a0a5b9684/.user_uploaded/media_1789691958490.png';
const outputDir = path.resolve(__dirname, '../src/assets/images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function extract() {
  const meta = await sharp(inputPath).metadata();
  console.log('Image dimensions:', meta.width, meta.height);

  // 1. Dark banner hands on laptop (approx y=660 to 825, width=303)
  await sharp(inputPath)
    .extract({ left: 0, top: 660, width: 303, height: 165 })
    .toFile(path.join(outputDir, 'dark_banner_bg.jpg'));
  console.log('Extracted dark_banner_bg.jpg');

  // 2. Service 3 (Group / Team smiling - y=390 to 510, x=202 to 303)
  await sharp(inputPath)
    .extract({ left: 202, top: 395, width: 101, height: 115 })
    .toFile(path.join(outputDir, 'service_team_proto.jpg'));
  console.log('Extracted service_team_proto.jpg');

  // 3. Contact Portrait 1 (lower woman in blazer, approx left=148, top=905, width=60, height=60)
  await sharp(inputPath)
    .extract({ left: 148, top: 902, width: 60, height: 62 })
    .toFile(path.join(outputDir, 'contact_portrait_1.png'));
  console.log('Extracted contact_portrait_1.png');

  // 4. Contact Portrait 2 (upper woman with tablet, approx left=224, top=870, width=60, height=60)
  await sharp(inputPath)
    .extract({ left: 224, top: 870, width: 60, height: 60 })
    .toFile(path.join(outputDir, 'contact_portrait_2.png'));
  console.log('Extracted contact_portrait_2.png');

  // 5. Logo symbol (approx top left in hero: left=15, top=18, width=20, height=20)
  await sharp(inputPath)
    .extract({ left: 15, top: 18, width: 22, height: 22 })
    .toFile(path.join(outputDir, 'logo_proto.png'));
  console.log('Extracted logo_proto.png');
}

extract().catch(console.error);
