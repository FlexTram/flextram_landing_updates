#!/usr/bin/env bash
# Pin git pushes to the FlexTram gh token for both flextram remotes,
# regardless of which gh CLI account is currently "active".
#
# Why: this repo pushes to FlexTram/flextram_landing_updates (origin) and
# blackbox-engineering/flextram_landing (production). Both reject pushes
# from the personal jmbradley account. Without this helper, an accidental
# `gh auth switch --user jmbradley` causes 403 on the next push.
#
# How: this script configures per-remote credential helpers that always
# ask gh for the FlexTram token specifically. The active gh account
# becomes irrelevant for these pushes.
#
# Two details that matter:
#   1. The config URL must include the `.git` suffix to match git's
#      credential request (verified empirically — without the suffix,
#      the URL-specific helper is silently never matched).
#   2. We reset the inherited helper chain with an empty entry first,
#      so gh's global credential helper (which returns the active
#      account's token) doesn't run before ours.
#
# Run once per fresh clone. Local repo config only; nothing committed.
#
# Requires: gh CLI installed, FlexTram account authenticated
#   (verify with: gh auth status)

set -e

if ! command -v gh >/dev/null 2>&1; then
  echo "✗ gh CLI not installed — install it first (brew install gh)" >&2
  exit 1
fi

if ! gh auth token --user FlexTram >/dev/null 2>&1; then
  echo "✗ FlexTram account not authenticated in gh — run: gh auth login" >&2
  exit 1
fi

helper='!f() { test "$1" = get && printf "username=FlexTram\npassword=%s\n" "$(gh auth token --user FlexTram)"; }; f'

git config credential.useHttpPath true

for repo_url in \
  "https://github.com/FlexTram/flextram_landing_updates.git" \
  "https://github.com/blackbox-engineering/flextram_landing.git"; do
  key="credential.${repo_url}.helper"
  git config --unset-all "$key" 2>/dev/null || true
  git config --add "$key" ""        # reset inherited helper chain
  git config --add "$key" "$helper" # then add ours as the only helper
done

echo "✓ Credential helpers configured for both flextram remotes."
echo "  Pushes will use the FlexTram token regardless of the active gh account."
echo ""
echo "Verify with:"
echo "  printf 'url=https://github.com/FlexTram/flextram_landing_updates.git\\n\\n' | git credential fill"
echo "  → should return username=FlexTram"
