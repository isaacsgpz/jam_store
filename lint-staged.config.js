// eslint-disable-next-line @typescript-eslint/no-var-requires
// const escape = require("shell-quote").quote;
// const isWin = process.platform === "win32";

// @see: https://github.com/lint-staged/lint-staged/issues/676#issuecomment-593390071

// const scapeFileNames = (filenames) => {
//   return filenames.map((filename) => {
//     if (filename.includes("@")) return `"${filename}"`;
//     return isWin ? filename.replace(/\[|\]/g, "[$&]") : escape([filename]);
//   });
// };

module.exports = {
  // "./apps/**/*.{js,jsx,ts,tsx}": (filenames) => {
  //   const scapedFilenames = scapeFileNames(filenames).join(" ");
  //   return [
  //     `prettier --ignore-path='./.gitignore' --write ${scapedFilenames}`,
  //     `eslint --no-ignore --max-warnings=0 --fix ${filenames.map((f) => `"${f}"`).join(" ")}`,
  //     `git add ${scapedFilenames}`,
  //   ];
  // },
  // "**/*.{json,md,css,html,yaml}": (filenames) => {
  //   const scapedFilenames = scapeFileNames(filenames).join(" ");
  //   return [
  //     `prettier --ignore-path='./.gitignore' --write ${scapedFilenames}`,
  //     `git add ${scapedFilenames}`,
  //   ];
  // },
  "**/*.{js,jsx,ts,tsx,json,md,css,html,yaml}": (filenames) => [
    ` pnpm lint:fix `,
    ` git add ${filenames.join(" ")} `,
  ],
};
