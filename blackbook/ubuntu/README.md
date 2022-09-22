# Ubuntu Server CLI Pro tips

## Networking

- `networkctl status` - Get the IP address of all interfaces
- `hostname -I` - Display all IP addresses of the host
- `ip link set <interface> up` - Enable interface
- `ip link set <interface> down` - Disable interface
- `ip route` - show routes
- `ip route get <IP>` - Which route will be used to reach a host

## Security

- `w` - show which users are logged in
- `chage -l <user>` - Get user password expiration date
- `sudo chage -l <user>` - Set user password expiration date
- `sudo passwd -l <user>` - Lock a user account
- `sudo apt install fail2ban` - Automatically detect and ban abusive IP
  addresses
- `sudo fail2ban-client status`, `sudo fail2ban-client status <jail>` -
  Show banned IP addresses
- `ip route get <IP>` - Which route will be used to reach a host 
- `sudo ss -tulpn` - List open ports and associated processes
- `sudo ufw enable` - Enable firewall
- `sudo ufw status` - List rules
- `sudo ufw allow <port>` - Allow port
- `sudo ufw deny <port>` - Deny port
- `ssh <user>@<host IP>` - Connect remotely through SSH

## Ubuntu Advantage

- `sudo ua attach <token>` - Visit ubuntu.com/advantage to get a free
  token for up to 3 machines (or 50 if you are an official Ubuntu
  Community memeber).
- `sudo ua status` - Check Ubuntu Advantage Service availability and
  entitlement.
- `sudo ua enable <service>` - Enable a service
- `sudo ua disable <service>` - Disable a service
- `sudo ua fix <cve/usn>` - Fix a CVE/USN
- `sudo ubuntu-security-status` - See packages update availability
  status of the system
- `canonical-livepatch status --verbose` - See CVEs that Livepatch has
  patched

## Packages

- `apt search <string>`, `snap find <string>` - Search for packages
- `apt-cache policy <package>` - List available package versions
- `apt list --upgradable` - List available updates
- `sudo apt update && sudo apt upgrade` - Apply all available updates.
- `sudo snap install <package>` - Install from the Snap Store.
- `sudo apt remove <package>` - Remove the package.
- `sudo apt purge <package>` - Remove the package and all its
  configuration files.
- `sudo apt install -f --reinstall <package>` - Reinstall broken package.

## Files

- `find <directory> -mmin -<n> -type f` - Find files modified in the
  last <n> minutes. (e.g. find . --mmin -5 -type f)
- `col<n> "<separator>" <filename>` - Show only the nth column. (e.g.
  col2 "," foo.csv)
- `less <filename>` - Display file paginated
- `head -n <n> <filename>` - Display first <n> lines.
- `tail -n <n> <filename>` - Display last <n> lines.
- `tail -f <filename>` - Follow file content as it increases.
- `tar.gz: tar cvzf <target>.tar.gz <source-dir>`, `zip: zip -r <target>
  <source-dir>` - Pack a directory into an archive.
- `tar.gz: tar xf <tar.gz file>`, `zip: unzip <zip file>` - Unpack an
  archive.
- `rsync <filename> <user@server>:<destination>` - Copy file to remote
  server. (e.g. rsync config.yml admin@192.0.0.0:/config).
- `rsync -avruz <user@server>:<source> <destination>` - Copy directory
  recursively from remote server. (e.g. rsync -avruz
  admin@192.0.0.0:/config /tmp)

## System

- `uname -r` - Display kernel version
- `df -h` - Get root disk usage
- `cat /proc/meminfo` - Get memory usage
- `timedatectl status` - Get system time
- `timedatectl list-timezones`, `sudo timedatectl set-timezone <zone>` -
  Set system timezone.
- `systemctl --state running`, `systemctl --state failed` - Get all
  running/failing services.
- `systemctl start/stop/restart <service>` - Start, stop or restart a
  service.
- `systemctl cat <service>` Get the full content of a systemd unit
  including overrides.
- `systemctl edit <service>` - Edit systemd avoiding conflicts with
  package updates.
- `journalctl -u <service> --since now -f` - Monitor new logs for a
  service.
- `journalctl --boot 0` - Monitor all logs since boot
- `last` - Get the list of recent logins
- `htop` - Display running processes.
- `kill <process id>` - Kill process by id
- `pkill <process name>` - Kill process by name
- `<command> &` - Run command in the background. `nohup <command> >>
  /var/log/yourcommand.log 2>&1 &` - staying alive after hangup and
  logging to file.
- `jobs` - Display background commands
- `fg <n>` - Bring command <n> to the foreground.
