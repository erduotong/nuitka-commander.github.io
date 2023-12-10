import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
// GitHub API URL
const API_URL = "https://api.github.com/repositories/687001179/contributors";

// Path to constants.json file
const CONSTANTS_PATH = path.join(__dirname, "../../src/stores/constants.json");

// Fetch contributors from GitHub API
fetch(API_URL)
    .then(response => response.json())
    .then(contributors => {
        // Read constants.json file
        fs.readFile(CONSTANTS_PATH, "utf8", (err, data) => {
            if (err) {
                console.error(`Error reading file from disk: ${err}`);
                process.exit(1);
            } else {
                // Parse JSON string to JSON object
                const constants = data.toJSON();

                // Clear authors array
                constants.authors = [];

                // Iterate over each contributor
                contributors.forEach(contributor => {
                    // Add new author to authors array
                    constants.authors.push({
                        name: contributor["login"],
                        html_url: contributor["html_url"],
                        avatar: contributor["avatar_url"],
                    });
                });

                // Write updated constants back to constants.json file
                fs.writeFile(CONSTANTS_PATH, JSON.stringify(constants, null, 0), "utf8", err => {
                    if (err) {
                        console.error(`Error writing file to disk: ${err}`);
                        process.exit(1);
                    } else {
                        console.log("Successfully updated authors in constants.json");
                        console.log(JSON.stringify(constants, null, 4));
                        process.exit(0);
                    }
                });
            }
        });
    })
    .catch(error => {
        console.error(`Error fetching contributors from GitHub API: ${error}`);
        process.exit(1);
    });