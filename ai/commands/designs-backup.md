---
description: Back up the Penpot instance of the designs/ folder of the Webship Workspace — its database and its assets — with cmd-penpot-backup.sh, and say where the backup is.
argument-hint: '[instance]'
---

# /designs-backup

Back up the Penpot instance of `~/workspace/designs` named in: `$ARGUMENTS`

The arguments are the text typed after the command: the first word is the instance (its folder
name in `designs/`). With nothing typed, it is the instance the folder's settings name
(`penpot.project`). The workspace is container-based (DDEV by default): the instance runs in
its own container project.

## 1. Make sure it is there, and running

```bash
cd ~/workspace/designs
ls -d */
ddev list | grep -w <instance>
```

If the instance is stopped, say so and ask before starting it (`ddev start -y` in its folder).
If there is no such instance, list the ones there are and stop.

## 2. Back up

```bash
bash cmd-penpot-backup.sh --help
bash cmd-penpot-backup.sh <instance>
```

Run it once. If it fails, show the line that failed and stop.

## 3. Report

What was backed up (the database, the assets), where the files are and how large they are.
Never print a password, a secret key or a token. For a single design file,
`bash cmd-tool-backup-design.sh <name>` archives it into `backups/designs/`. For anything else
on the instance, hand over to the `designs-penpot-keeper` agent; the `designs-workflow` skill
lists every command of the folder.
