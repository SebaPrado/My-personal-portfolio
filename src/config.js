/**
 * Configuración simple de clientes y sus funcionalidades
 */

export const clients = {
  alusur: {
    name: 'Alusur',
    features: ['supabase-tables', 'green-indices']
  },
  'los-ceibos': {
    name: 'Los Ceibos',
    features: ['supabase-tables', 'green-indices', 'predictive-ml']
  },
  agroconceptos: {
    name: 'Agroconceptos',
    features: ['supabase-tables', 'predictive-ml']
  },
  'pulso-forrajero': {
    name: 'PulsoForrajero',
    features: ['supabase-tables', 'green-indices', 'predictive-ml']
  },
  'sofia-munoz': {
    name: 'SofiaMuñoz',
    features: ['supabase-tables']
  },
  'hernan-bueno': {
    name: 'HernanBueno',
    features: ['supabase-tables', 'green-indices']
  },
  'cuatro-hojas': {
    name: 'CuatroHojas',
    features: ['supabase-tables']
  },
  cui: {
    name: 'Cui',
    features: ['supabase-tables', 'predictive-ml']
  },
  agrocentro: {
    name: 'Agrocentro',
    features: ['supabase-tables', 'green-indices']
  },
  pensagro: {
    name: 'PensAgro',
    features: ['supabase-tables', 'green-indices', 'predictive-ml']
  },
  agrofertil: {
    name: 'AgroFertil',
    features: ['supabase-tables']
  },
  'soc-dolores': {
    name: 'SocDolores',
    features: ['supabase-tables', 'green-indices']
  },
  'juan-pedro-lopez': {
    name: 'JuanPedroLopez',
    features: ['supabase-tables']
  },
  pineyrua: {
    name: 'Piñeyrua',
    features: ['supabase-tables', 'predictive-ml']
  },
  prolesa: {
    name: 'Prolesa',
    features: ['supabase-tables', 'green-indices', 'predictive-ml']
  }
};

/**
 * Obtiene un cliente por su subdominio
 */
export function getClientBySubdomain(subdomain) {
  const normalized = subdomain.toLowerCase().replace(/\s+/g, '-');
  return clients[normalized] || null;
}

/**
 * Obtiene el subdominio actual
 */
export function getCurrentSubdomain() {
  const hostname = window.location.hostname;
  
  // En desarrollo, usar parámetro de URL o localStorage
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    const urlParams = new URLSearchParams(window.location.search);
    const cliente = urlParams.get('cliente') || urlParams.get('tenant') || localStorage.getItem('dev_cliente') || localStorage.getItem('dev_tenant');
    return cliente;
  }
  
  // En producción, extraer subdominio
  const parts = hostname.split('.');
  if (parts.length >= 3) {
    return parts[0];
  }
  
  return null;
}
