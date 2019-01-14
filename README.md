# Drop Javascript / Typescript style guide

## Usage

1. Install all peerDependencies
   ```bash
   npx install-peerdeps --dev "@drop-engineering/eslint-config"
   ```
2. Install package

   ```bash
   npm i -D eslint-config-drop

   ```

3. Create `.eslintrc.js` file with the following contents:
   ```javascript
   module.exports = {
     extends: ['drop'],
   };
   ```
