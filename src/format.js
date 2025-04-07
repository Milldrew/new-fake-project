const {execSync} = require('child_process');
pwd
try {
  console.log('Formatting code with Prettier...');
  execSync('npx prettier --write "src/**/*.js"', {stdio: 'inherit'});
  console.log('Code formatted successfully.');
} catch (error) {
  console.error('Error occurred while formatting code:', error);
  process.exit(1);
}
