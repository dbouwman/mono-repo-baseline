const ghpages = require("gh-pages");

ghpages.publish(
  "docs/build",
  {
    branch: "gh-pages",
    repo: "https://github.com/dbouwman/mono-repo-baseline.git"
  },
  function(err) {
    if (err) {
      console.log("uh oh", err);
    } else {
      console.log("Deployed docs site!");
    }
  }
);
