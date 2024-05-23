export default {
  '**/*.{js,jsx,ts,tsx,json,md,css,html,yaml}': (filenames) => [
    ` pnpm lint:fix `,
    ` git add ${filenames.join(' ')} `,
  ],
}
