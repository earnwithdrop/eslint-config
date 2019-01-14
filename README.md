# Drop Javascript / Typescript style guide

## Usage

1. Install all peerDependencies
   ```bash
   # This command won't work until this module is published on npm
   npx install-peerdeps --dev "eslint-config-drop"
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
