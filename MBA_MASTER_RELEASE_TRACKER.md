# MBA Tournaments — V7.6 Release Candidate / Master Tracker

Date: 25 November 2026 (IST)
Owner-approved baseline: V7.5.9 TEST. User accepted the current test phase and requested consolidation and the next release.
Snapshot: 46ba0c094f5da6ada6f1d67196f4e8aacd81250d
App blob: 1fbda0d17b99eff2a2ddaa0eea50601db5975d6c
Release branch: release-v7.6-rc
App path: v7/index.html
Current live TEST URL: https://laylaaflaj-lang.github.io/mba-tournaments-v2-test/v7/?v=759
This is a frozen candidate, not a Production deployment. The app retains the TEST Firebase configuration. Do not point Production at TEST or copy TEST records into Production.

## Status definitions
- ACCEPTED: user accepted the current test phase or explicitly reported a specific screen working.
- CODE: source contains the feature; this is not an end-to-end pass.
- VERIFY: needs actual deployment, role/device, data or security verification.
- BACKLOG: scope is not completed or not established by the inspected source.

## 1. Consolidated scope
| Workstream | Current state | Evidence / next step |
|---|---|---|
| Tournament creation, editing, protected deletion | CODE / ACCEPTED baseline | Quick Create, Singles, Doubles, 80+, 90+, 100+, custom, Keralaotsavam; protected results and confirmation |
| Formats and fixtures | CODE | League, knockout, combined where supported, automatic/manual draws, BYE, re-entry; verify representative fixtures and no duplicates |
| Player and team registration | CODE / specific save screen observed | Easy Registration, recent list, edit/delete, status/hold/restore, age eligibility and override; private mobile |
| Fee and finance | CODE | Paid/partial/unpaid, pair vs individual fee, balance, collection by committee, edit/delete committee, expense correction; reconcile real test totals |
| Committee member dropdown | ACCEPTED | User reported dropdown available; save and persistence per role still to verify separately |
| Roles and permissions | CODE / specific save screen observed | Google/email login, Super Admin, role presets, tournament View/Edit, bulk grant/revoke/delete, mobileRead, print permissions |
| Private mobile | CODE / VERIFY | Super Admin edit; delegated reads target only mobile leaf. Live TEST rules and access/revocation verification outstanding |
| Live scoring and result | CODE | Umpire score, final save, correction/delete, winner-only, points/rankings; viewer-only live mode; verify all roles and multi-device conflicts |
| Scoring rules | CODE | Configurable target, cap, win-by-two and league points; confirm custom settings in all intended formats |
| Save dialog system | CODE / specific screens accepted | User confirmed permission and registration dialog. Shared mutation path covers tournament, fixture, result and several edits. Not every finance/direct write is standardized |
| Royal share cards | CODE / accepted current baseline | Score and registration PNG, 1080 px width, saved team Share Card, native sharing with download fallback, contact/payment opt-in |
| Print/share reports | CODE / VERIFY | A4 and report sharing code present; verify PDF/PNG and Android/WhatsApp output |
| Mobile UI/PWA | CODE | Responsive layouts, install shell, manifest, service worker, offline page, zoom-in control; confirm target Android devices |
| Branding/language/themes | CODE / VERIFY | MBA Tournaments, creator credit, language switch, themes; review consistency including 12-hour AM/PM |
| Notifications/gallery | CODE / VERIFY | In-app notices/gallery code present; verify audience and read rules. Closed-app push is separate backlog |

## 2. Evidence checked in this consolidation
- Approved app source retrieved from GitHub; JavaScript module syntax parsed successfully.
- Release branch created at the exact approved commit, preserving main and previous versions.
- v7/index.html, v7/sw.js, v7/manifest.webmanifest and v7/offline.html retrieved on the candidate branch.
- Source inspection confirmed category, Keralaotsavam, live view, roles, finance, PNG export, sharing, consent options and branding paths.
- Current GitHub installation permits only mba-tournaments-v2-test. Production repository is not authorized.
- User acceptance does not certify every checklist scenario. No new live Firebase Rules publish, browser/WhatsApp test, Production write, or data migration was performed.

## 3. P0 — Production release gates (required)
- [ ] Back up current Production GitHub source, Production Firebase data and actual RTDB Rules; record commit, date and hashes. Verify recoverability; do not restore TEST data to Production.
- [ ] Obtain scoped Production repository access for deployment only, and separate Firebase Rules access. Keep TEST unchanged.
- [ ] Compare frozen candidate with existing Production source and configuration; carry over only intended changes. Review all environment IDs, URLs, labels, storage keys, manifest scope and service worker; some legacy Production wording remains in TEST source.
- [ ] Audit actual TEST and Production Rules, including inherited reads/writes, access/permission validation, privateRegistrations mobile leaf, per-tournament assignment, viewer/live restrictions, score transactions and finance access. Never grant broad parent private-data read to mobileRead users. Never relax protections to fix a UI error.
- [ ] Verify with separate Super Admin, authorized Admin, unauthorized Admin, Viewer and scorer accounts: mobileRead ON/OFF, assigned/unassigned event, revoked/inactive account, no parent private read, no delegated mobile write, no public contact leakage, protected roles and bulk edits.
- [ ] Verify test data save/refresh and financial reconciliation: full, partial, unpaid, no fee, doubles pair vs league individual, collector corrections and historical receipts.
- [ ] Regression: create each category, age check/override, Keralaotsavam Quick Tournament, league/KO/manual draw, protected completed results, score edit/delete, winner-only, live scoreboard and standings, two-device conflicts.
- [ ] Verify actual Android PNG files and Share Image / Save PNG, correct names/score, no fabricated score in winner-only, long names, contact/payment toggles default OFF and permission revocation. Check private details before sending to a third party.
- [ ] Verify app install, refresh, cache, login, mobile layout, print and share reports.
- [ ] Stage Production with real Production config and current rules, review diff, obtain release approval before any Production write. Smoke test using a dedicated test tournament or non-destructive steps, record rollback commit. No Firebase migration by default.

## 4. P1 — Finish consistency / useful improvements
- [ ] Standardize remaining direct-save finance, expense, tournament visibility, gallery, private-number and special registration paths to the shared confirmation dialog. Keep point-by-point scoring free of popups.
- [ ] Verify team-card contact data and optional payment metadata after edits; improve share-card access from historical results if needed. Registration cards already accessible from registered team list.
- [ ] Verify score/result history, profile, tournament/category views, print/PDF/PNG reports, champion/semifinal/final colors, multilingual labels, AM/PM and themes across screens; fix remaining legacy wording.
- [ ] Review duplicate checks, age eligibility, fixture rest balancing, late-entry rules and manual adjustments across formats.
- [ ] Add durable release checklist/results and regression automation where feasible; document error, reproduction, role and fix.

## 5. P2 — Deferred / new development
- [ ] Background push notifications (app closed) using Firebase Cloud Messaging, consent, token lifecycle, service worker and trusted send mechanism. In-app notices are not equivalent to push. Confirm audience, cost, and Android/browser behavior.
- [ ] Emergency lock / maintenance mode with safe administrator recovery, only after requirements and permission rules are agreed.
- [ ] Account linking for Google + Email/Password on same UID without losing roles, only if not already reliably supported; test with a disposable account.
- [ ] Review future advanced scoring/standings, reports, and optional format extensions against real tournament requirements rather than adding unrequested changes.
- [ ] Verify backup/restore policy, archival history, and migration compatibility before any production data changes.

## Release sequence
Freeze approved TEST → complete P0 verification → prepare Production-targeted source and rules diff → approval and backups → deploy → smoke test → release record and rollback plan. Do not claim a final Production release until deployment and verification succeed.

## 6. Production preparation — 25 November 2026
- Production repository scoped access verified (push allowed). TEST access retained.
- Production main source backup branch: `backup-before-v7-6-20261125`; index blob `6e74090ebfa3597b720163286d961528a900b38c` verified identical to main.
- Production-targeted code staged on `staging-v7-6-rc` only. App blob `f604f021407c867c11f0f3640f987d167be597b0`; service worker blob `d636b07211a5cfe67c7ff17f2f8c0ede5ecd2b68`.
- Existing Production Firebase configuration copied exactly from existing Production source. TEST project/link references removed; Keralaotsavam QR generated from Production app link. Existing Production manifest and assets preserved. JavaScript syntax and source readback checked; live browser/QR/Firebase behavior not yet verified.
- Production main remains unchanged. No Firebase database/rules changes or data migration made.
- BLOCKED before deployment: obtain actual current Production and TEST RTDB rules, backup Production database privately, audit permissions and verify cross-role behavior. The Production repository has no database.rules.json or firebase.json at its root. GitHub access does not grant Firebase console access.

### Rules review progress — 25 November 2026
- Production data export completed per owner; not independently restored or inspected.
- Production Rules pasted into conversation; complete-looking but exact exported JSON backup still requested.
- TEST Rules exported as a JSON file and parsed successfully. Source review identified missing mobileRead leaf authorization and permission differences between environments; do not replace Production rules wholesale with TEST rules.
- Narrow TEST mobile-read rules draft generated offline; not published and not emulator-verified. Production rules candidate and full cross-role regression remain pending. No production deployment or rules changes.
