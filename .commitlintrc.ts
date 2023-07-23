import { RuleConfigSeverity as Rule, UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
    extends: "@commitlint/config-conventional",
    rules: {
        // HEADER
        "header-max-length": [Rule.Error, "always", 150],
        // TYPE
        "type-enum": [Rule.Error, "always", ["feat", "fix", "refactor"]],
        // SCOPE
        "scope-case": [Rule.Error, "always", "kebab-case"],
        "scope-min-length": [Rule.Error, "always", 2],
        // SUBJECT
        "subject-min-length": [Rule.Error, "always", 5],
        "subject-max-length": [Rule.Error, "always", 100],
    },
    ignores: [
        (commit) => commit.startsWith("Merge") || commit.startsWith("Revert"),
    ],
};

module.exports = Configuration;
