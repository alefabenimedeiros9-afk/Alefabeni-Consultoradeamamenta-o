-- Modelo inicial PostgreSQL. Rode somente depois de configurar seu banco.
CREATE TABLE IF NOT EXISTS courses (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR(180) NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  price_cents INTEGER CHECK (price_cents IS NULL OR price_cents >= 0),
  sales_url TEXT,
  is_published BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS appointments (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  client_name VARCHAR(120) NOT NULL,
  contact_phone VARCHAR(25) NOT NULL,
  service_type VARCHAR(120) NOT NULL,
  preferred_at TIMESTAMPTZ,
  status VARCHAR(24) NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Armazene apenas os dados necessários, com acesso restrito, política de retenção
-- e tratamento compatível com a LGPD. Não armazene informações clínicas sem necessidade.
