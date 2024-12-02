# webserver-loadbalancer

# NGINX Configuration for Hivenue

This file manages routing, security, and performance optimization for Hivenue's web, API, and admin services.

---

## General Configuration
- **User**: Runs as `www-data` for security.
- **Worker Processes**: Automatically set based on available CPU cores.
- **Connections**: Each process supports 1024 simultaneous connections.
- **Performance**: Features like `sendfile`, `tcp_nopush`, and `gzip` are enabled.
- **Security**: 
  - Hides server tokens.
  - Enforces HTTPS with modern TLS protocols (`TLSv1.2`/`TLSv1.3`).
  - Disables insecure ciphers.

---

## Domain Configurations

### `***.hivenue.ca`
- Proxies frontend traffic to `localhost:4200`.
- Supports WebSocket connections at `/sockjs-node/`.
- Redirects HTTP (port 80) to HTTPS (port 443).

### `***.hivenue.ca`
- Proxies API traffic to `localhost:3000`.
- WebSocket support at `/socket.io/`.
- Additional routes:
  - `/chat` → `localhost:8080/chat`
  - `/history` → `localhost:8080/history`
- Redirects HTTP to HTTPS.

### `***.hivenue.ca`
- Proxies admin panel traffic to `localhost:4300`.
- Redirects HTTP to HTTPS.

### `***.hivenue.ca`
- Proxies admin panel traffic to `localhost:4400`.
- Redirects HTTP to HTTPS.

---

## SSL Configuration
- **Certificate**: `/etc/letsencrypt/live/***.hivenue.ca/fullchain.pem`
- **Private Key**: `/etc/letsencrypt/live/***.hivenue.ca/privkey.pem`
- **Features**:
  - Uses modern TLS (`TLSv1.2`/`TLSv1.3`).
  - Strict Transport Security (HSTS) enforced (1 year, includes subdomains).
  - Session caching enabled for faster handshakes.

---

## Logs
- **Access Logs**: `/var/log/nginx/access.log`
- **Error Logs**: `/var/log/nginx/error.log`

---

## Usage
### Test Configuration
```bash
sudo nginx -t