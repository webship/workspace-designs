Start a self-hosted Penpot instance in the designs folder and get it ready for design work with an AI assistant.

The launch line is for Claude Code, the default; the text between the triple quotes can be given to another AI CLI as it is.

```
claude --permission-mode bypassPermissions """
Start a Penpot instance named <name> in the designs folder and get it ready for AI design work
# ~/workspace/designs/<name> · https://<name>.ddev.site · container-based (DDEV by default)
# never --force: it deletes the designs of an instance that exists
# never print a password, a secret key or an access token

1. ls -d ~/workspace/designs/*/ ; ddev list
   tell me whether an instance is already there; if one is, ask me before building another
2. bash cmd-penpot-project.sh --help
   tell me the options it takes and what it reads from the settings
3. bash cmd-penpot-project.sh <name>
4. tell me the address, and how the first account was registered (do not print its password)
5. bash cmd-penpot-mcp.sh <name> --mcp-action status
   tell me whether the server for design agents is running; start it only if I say so
6. bash cmd-penpot-backup.sh <name>
   a first backup, so there is something to go back to

If a command fails, show the line that failed and stop. Do not retry with other options.
"""
```
