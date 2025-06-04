# Fix GCP CSS

This repository contains a small Tampermonkey **UserScript** that tweaks the
CSS of the Google Cloud Console. It enlarges some forms and tables so that they
use more of the available screen space and removes an extra vertical scroll bar
that appears in some browsers.

## Features
- Injects global CSS to set a wider max width for various forms.
- Removes the body scroll bar to avoid a double scroll bar effect.
- Observes DOM changes and reapplies the width fix automatically.

## Installation
1. Install a userscript manager such as **Tampermonkey**.
2. Create a new script and paste the contents of `fix_gcp_css.js`.
3. Save the script and visit the Google Cloud Console at
   `https://console.cloud.google.com/`.
4. The updated styles will be applied automatically when the page loads.

## Development
Feel free to modify `fix_gcp_css.js` to match your needs. Reload the script in
Tampermonkey to see the changes. The script uses modern JavaScript and only
interacts with the DOM to apply style changes.

This project is not affiliated with Google.
