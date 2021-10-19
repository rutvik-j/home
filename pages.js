const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/rutvik-j/rutvik-j.github.io.git";

ghpages.publish(
  pathname,
  {
    branch: "Hosted",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
