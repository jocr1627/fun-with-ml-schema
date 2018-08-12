/**
 * Why?
 *
 * There appears to be a bug in graphql-code-generator where subscriptions
 * are not typed with SubscriptionResolver. No issue appears to exist yet.
 *
 * https://github.com/dotansimha/graphql-code-generator
 *
 * TODO: Watch for issues & look into submitting a fix.
 */
const fs = require('fs');
const subscriptionResolvers = [
  'GenerateTextFromModelResolver',
  'TrainModelResolver'
];
const subscriptionResolversRegex =
  '(' +
  subscriptionResolvers.reduce(
    (acc, string) => (acc ? `${acc}|${string}` : string)
  ) +
  ')';
const regex = new RegExp(
  `(export[\\n\\s]*type[\\n\\s]*${subscriptionResolversRegex}[\\n\\s]*<[^>]*>[\\n\\s]*=[\\n\\s])Resolver`,
  'g'
);
const types = fs.readFileSync('src/types.ts', 'utf-8');
const patchedTypes = types.replace(regex, '$1SubscriptionResolver');

fs.writeFileSync('src/types.ts', patchedTypes);
