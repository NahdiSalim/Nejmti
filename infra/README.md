# Infra

`docker-compose.yml` démarre PostgreSQL et Redis pour le développement local.

```bash
docker compose -f infra/docker-compose.yml up -d
```

Reverse proxy HTTPS (Caddy/Nginx), MinIO, workers BullMQ et scripts de backup : phases 2–8.
