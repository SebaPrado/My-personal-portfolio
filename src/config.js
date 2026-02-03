/**
 * Configuración de clientes: colores, features, emails
 */

export const clients = {
  alusur: {
    name: 'Alusur',
    email: 'alusur@gmail.com',
    features: ['supabase-tables', 'green-indices'],
    colors: ['#8ecae6', '#219ebc', '#023047', '#ffb703'],
    primaryColor: '#219ebc',
    secondaryColor: '#023047'
  },
  losceibos: {
    name: 'Los Ceibos',
    email: 'losceibos@gmail.com',
    features: ['supabase-tables', 'green-indices', 'predictive-ml'],
    colors: ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'],
    primaryColor: '#2a9d8f',
    secondaryColor: '#264653'
  },
  agroconceptos: {
    name: 'Agroconceptos',
    email: 'agroconceptos@gmail.com',
    features: ['supabase-tables', 'predictive-ml'],
    colors: ['#ff685d', '#6f9666', '#fedcd3', '#013b51', '#005a51'],
    primaryColor: '#6f9666',
    secondaryColor: '#013b51'
  },
  pulsoforrajero: {
    name: 'Pulso Forrajero',
    email: 'pulsoforrajero@gmail.com',
    features: ['supabase-tables', 'green-indices', 'predictive-ml'],
    colors: ['#004e64', '#00a5cf', '#9fffcb', '#25a18e', '#7ae582'],
    primaryColor: '#00a5cf',
    secondaryColor: '#004e64'
  },
  hernanbueno: {
    name: 'Hernan Bueno',
    email: 'hernanbueno@gmail.com',
    features: ['supabase-tables', 'green-indices'],
    colors: ['#009fff', '#00b3c9', '#87cbac', '#90ffdc', '#8de4ff', '#ffff49', '#003b49'],
    primaryColor: '#00b3c9',
    secondaryColor: '#003b49'
  },
  cuatrohojas: {
    name: 'Cuatro Hojas',
    email: 'cuatrohojas@gmail.com',
    features: ['supabase-tables'],
    colors: ['#004b23', '#006400', '#007200', '#008000', '#38b000', '#70e000', '#9ef01a', '#ccff33'],
    primaryColor: '#38b000',
    secondaryColor: '#004b23'
  },
  agrocentro: {
    name: 'Agrocentro',
    email: 'agrocentro@gmail.com',
    features: ['supabase-tables', 'green-indices'],
    colors: ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'],
    primaryColor: '#2a9d8f',
    secondaryColor: '#264653'
  },
  pensagro: {
    name: 'PensAgro',
    email: 'pensagro@gmail.com',
    features: ['supabase-tables', 'green-indices', 'predictive-ml'],
    colors: ['#009fff', '#00b3c9', '#87cbac', '#90ffdc', '#8de4ff', '#ffff49', '#003b49'],
    primaryColor: '#009fff',
    secondaryColor: '#003b49'
  },
  agrofertil: {
    name: 'AgroFertil',
    email: 'agrofertil@gmail.com',
    features: ['supabase-tables'],
    colors: ['#ff685d', '#6f9666', '#fedcd3', '#013b51', '#005a51'],
    primaryColor: '#6f9666',
    secondaryColor: '#013b51'
  },
  lossauces: {
    name: 'Los Sauces',
    email: 'lossauces@gmail.com',
    features: ['supabase-tables', 'green-indices'],
    colors: ['#33b180', '#128268', '#005a51', '#ade1bb', '#20876a'],
    primaryColor: '#33b180',
    secondaryColor: '#005a51'
  },
  dalessandromatias: {
    name: "D'Alessandro Matías",
    email: 'dalessandromatias@gmail.com',
    features: ['supabase-tables'],
    colors: ['#004e64', '#00a5cf', '#9fffcb', '#25a18e', '#7ae582'],
    primaryColor: '#00a5cf',
    secondaryColor: '#004e64'
  },
  // Clientes adicionales (usando paletas repetidas)
  prolesa: {
    name: 'Prolesa',
    email: 'prolesa@gmail.com',
    features: ['supabase-tables', 'green-indices', 'predictive-ml'],
    colors: ['#33b180', '#128268', '#005a51', '#ade1bb', '#20876a'],
    primaryColor: '#33b180',
    secondaryColor: '#005a51'
  },
  pineyrua: {
    name: 'Piñeyrua',
    email: 'pineyrua@gmail.com',
    features: ['supabase-tables', 'predictive-ml'],
    colors: ['#8ecae6', '#219ebc', '#023047', '#ffb703'],
    primaryColor: '#219ebc',
    secondaryColor: '#023047'
  }
};

/**
 * Obtiene un cliente por su subdominio
 */
export function getClientBySubdomain(subdomain) {
  if (!subdomain) return null;
  const normalized = subdomain.toLowerCase().replace(/-/g, '');
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
    const cliente = urlParams.get('cliente') || urlParams.get('tenant') || localStorage.getItem('dev_cliente');
    return cliente;
  }
  
  // En producción, extraer subdominio
  const parts = hostname.split('.');
  if (parts.length >= 3) {
    return parts[0];
  }
  
  return null;
}

/**
 * Obtiene la configuración del cliente actual
 */
export function getCurrentClient() {
  const subdomain = getCurrentSubdomain();
  return subdomain ? getClientBySubdomain(subdomain) : null;
}
