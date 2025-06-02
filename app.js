// Dados da aplicação
const courseData = {
  "curso": {
    "titulo": "Como Escolher e Combinar Acessórios para Valorizar Seu Estilo",
    "parceria": "Uma parceria Marilena Acessórios",
    "cta": "Comece Agora Grátis"
  },
  "modulos": [
    {
      "id": 1,
      "titulo": "Introdução à Moda e Acessórios",
      "descricao": "Importância dos acessórios no visual e história dos acessórios femininos",
      "status": "disponível",
      "aulas": 3,
      "duracao": "25 min"
    },
    {
      "id": 2,
      "titulo": "Descobrindo Seu Estilo Pessoal",
      "descricao": "Principais estilos femininos e teste prático para identificação",
      "status": "disponível",
      "aulas": 4,
      "duracao": "35 min"
    },
    {
      "id": 3,
      "titulo": "Tipos de Acessórios e Suas Características",
      "descricao": "Brincos, colares, pulseiras - como escolher para cada tipo físico",
      "status": "disponível",
      "aulas": 5,
      "duracao": "45 min"
    },
    {
      "id": 4,
      "titulo": "Combinações Inteligentes",
      "descricao": "Como combinar acessórios entre si e evitar erros comuns",
      "status": "em-breve",
      "aulas": 4,
      "duracao": "30 min"
    },
    {
      "id": 5,
      "titulo": "Acessórios e Paleta de Cores",
      "descricao": "Colorimetria pessoal e como escolher acessórios que valorizam",
      "status": "em-breve",
      "aulas": 3,
      "duracao": "25 min"
    },
    {
      "id": 6,
      "titulo": "Tendências e Atualizações",
      "descricao": "Principais tendências e como adaptar ao seu estilo",
      "status": "em-breve",
      "aulas": 3,
      "duracao": "20 min"
    },
    {
      "id": 7,
      "titulo": "Dicas Extras e Cuidados",
      "descricao": "Conservação, montagem de kits e sugestões de presentes",
      "status": "em-breve",
      "aulas": 2,
      "duracao": "15 min"
    }
  ],
  "acessorios": {
    "brincos": [
      {"id": 1, "nome": "Brinco Argola Pequena", "tipo": "argola", "ocasiao": ["casual", "trabalho"], "emoji": "⭕"},
      {"id": 2, "nome": "Brinco Pérola Clássica", "tipo": "pérola", "ocasiao": ["trabalho", "festa"], "emoji": "⚪"},
      {"id": 3, "nome": "Brinco Comprido Dourado", "tipo": "pendente", "ocasiao": ["festa", "romântico"], "emoji": "🌟"},
      {"id": 4, "nome": "Brinco Pequeno Discreto", "tipo": "pequeno", "ocasiao": ["trabalho", "casual"], "emoji": "💎"}
    ],
    "colares": [
      {"id": 1, "nome": "Colar Corrente Delicada", "tipo": "corrente", "ocasiao": ["casual", "trabalho"], "emoji": "🔗"},
      {"id": 2, "nome": "Colar Pérolas Clássico", "tipo": "pérolas", "ocasiao": ["trabalho", "festa"], "emoji": "📿"},
      {"id": 3, "nome": "Choker Veludo", "tipo": "choker", "ocasiao": ["festa", "romântico"], "emoji": "🎀"},
      {"id": 4, "nome": "Colar Statement", "tipo": "statement", "ocasiao": ["festa"], "emoji": "💫"}
    ],
    "pulseiras": [
      {"id": 1, "nome": "Pulseira Delicada", "tipo": "fina", "ocasiao": ["casual", "trabalho"], "emoji": "⚫"},
      {"id": 2, "nome": "Pulseira Dourada", "tipo": "média", "ocasiao": ["festa", "romântico"], "emoji": "🟡"},
      {"id": 3, "nome": "Conjunto 3 Pulseiras", "tipo": "conjunto", "ocasiao": ["casual"], "emoji": "🔘"},
      {"id": 4, "nome": "Pulseira Statement", "tipo": "statement", "ocasiao": ["festa"], "emoji": "✨"}
    ],
    "aneis": [
      {"id": 1, "nome": "Anel Delicado", "tipo": "fino", "ocasiao": ["casual", "trabalho"], "emoji": "💍"},
      {"id": 2, "nome": "Anel Solitário", "tipo": "solitário", "ocasiao": ["romântico", "festa"], "emoji": "💎"},
      {"id": 3, "nome": "Conjunto Anéis", "tipo": "conjunto", "ocasiao": ["casual"], "emoji": "🔸"},
      {"id": 4, "nome": "Anel Statement", "tipo": "statement", "ocasiao": ["festa"], "emoji": "⭐"}
    ]
  },
  "produtos": [
    {
      "nome": "Conjunto Pérolas Delicadas",
      "preco": "R$ 89,90",
      "descricao": "Perfeito para o estilo clássico",
      "modulo": "Módulo 2",
      "emoji": "📿"
    },
    {
      "nome": "Brincos Argola Rose Gold",
      "preco": "R$ 45,90", 
      "descricao": "Ideal para todos os tipos de rosto",
      "modulo": "Módulo 3",
      "emoji": "⭕"
    },
    {
      "nome": "Choker Tendência 2025",
      "preco": "R$ 39,90",
      "descricao": "Aprenda a combinar no curso",
      "modulo": "Módulo 6",
      "emoji": "🎀"
    },
    {
      "nome": "Kit Pulseiras Mix & Match",
      "preco": "R$ 67,90",
      "descricao": "Combinações inteligentes",
      "modulo": "Módulo 4",
      "emoji": "🔘"
    }
  ],
  "ocasioes": ["trabalho", "casual", "festa", "romântico"]
};

// Estado da aplicação
let currentFilter = 'todos';
let selectedAccessories = {
  brincos: null,
  colares: null,
  pulseiras: null,
  aneis: null
};

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  renderModules();
  renderAccessories();
  renderProducts();
  setupEventListeners();
  updateAvatarDisplay();
}

// Renderização dos módulos
function renderModules() {
  const modulesGrid = document.getElementById('modulesGrid');
  
  courseData.modulos.forEach(modulo => {
    const moduleCard = createModuleCard(modulo);
    modulesGrid.appendChild(moduleCard);
  });
}

function createModuleCard(modulo) {
  const card = document.createElement('div');
  card.className = `module-card module-card--${modulo.status === 'disponível' ? 'available' : 'coming-soon'}`;
  card.dataset.moduleId = modulo.id;
  
  const statusText = modulo.status === 'disponível' ? 'Disponível' : 'Em breve';
  const statusClass = modulo.status === 'disponível' ? 'available' : 'coming-soon';
  
  card.innerHTML = `
    <div class="module-card__header">
      <div>
        <h3 class="module-card__title">Módulo ${modulo.id}</h3>
        <h4 class="module-card__title">${modulo.titulo}</h4>
      </div>
      <span class="module-card__status status--${statusClass}">${statusText}</span>
    </div>
    <p class="module-card__description">${modulo.descricao}</p>
    <div class="module-card__meta">
      <span>📚 ${modulo.aulas} aulas</span>
      <span>⏱️ ${modulo.duracao}</span>
    </div>
  `;
  
  if (modulo.status === 'disponível') {
    card.addEventListener('click', () => openModuleModal(modulo));
  }
  
  return card;
}

// Renderização dos acessórios
function renderAccessories() {
  Object.keys(courseData.acessorios).forEach(categoria => {
    const grid = document.getElementById(`${categoria}Grid`);
    courseData.acessorios[categoria].forEach(acessorio => {
      const item = createAccessoryItem(acessorio, categoria);
      grid.appendChild(item);
    });
  });
}

function createAccessoryItem(acessorio, categoria) {
  const item = document.createElement('div');
  item.className = 'accessory-item';
  item.dataset.category = categoria;
  item.dataset.id = acessorio.id;
  item.dataset.occasions = JSON.stringify(acessorio.ocasiao);
  
  item.innerHTML = `
    <div class="accessory-item__icon">${acessorio.emoji}</div>
    <div class="accessory-item__name">${acessorio.nome}</div>
  `;
  
  item.addEventListener('click', () => selectAccessory(categoria, acessorio));
  
  return item;
}

// Renderização dos produtos
function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');
  
  courseData.produtos.forEach(produto => {
    const card = createProductCard(produto);
    productsGrid.appendChild(card);
  });
}

function createProductCard(produto) {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  card.innerHTML = `
    <div class="product-card__image">${produto.emoji}</div>
    <h3 class="product-card__name">${produto.nome}</h3>
    <div class="product-card__price">${produto.preco}</div>
    <p class="product-card__description">${produto.descricao}</p>
    <span class="product-card__module">${produto.modulo}</span>
  `;
  
  return card;
}

// Configuração dos event listeners
function setupEventListeners() {
  // Filtros de ocasião
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const filter = e.target.dataset.filter;
      setFilter(filter);
    });
  });
  
  // Controles do avatar
  document.getElementById('clearLook').addEventListener('click', clearAllAccessories);
  document.getElementById('saveLook').addEventListener('click', saveLook);
  document.getElementById('suggestLook').addEventListener('click', suggestLook);
  
  // Modais
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('closeSaveModal').addEventListener('click', closeSaveModal);
  document.getElementById('continueCombining').addEventListener('click', closeSaveModal);
  
  // Fechar modal ao clicar fora
  document.getElementById('moduleModal').addEventListener('click', (e) => {
    if (e.target.id === 'moduleModal') closeModal();
  });
  
  document.getElementById('saveModal').addEventListener('click', (e) => {
    if (e.target.id === 'saveModal') closeSaveModal();
  });
  
  // Smooth scrolling para navegação
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Funções do filtro
function setFilter(filter) {
  currentFilter = filter;
  
  // Atualizar botões
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  
  // Filtrar acessórios
  filterAccessories();
}

function filterAccessories() {
  document.querySelectorAll('.accessory-item').forEach(item => {
    const occasions = JSON.parse(item.dataset.occasions);
    const shouldShow = currentFilter === 'todos' || occasions.includes(currentFilter);
    item.classList.toggle('hidden', !shouldShow);
  });
}

// Funções de seleção de acessórios
function selectAccessory(categoria, acessorio) {
  selectedAccessories[categoria] = acessorio;
  updateAvatarDisplay();
  
  // Feedback visual
  document.querySelectorAll(`[data-category="${categoria}"] .accessory-item`).forEach(item => {
    item.classList.remove('selected');
  });
  
  document.querySelector(`[data-category="${categoria}"][data-id="${acessorio.id}"]`).classList.add('selected');
}

function updateAvatarDisplay() {
  // Limpar display atual
  document.getElementById('avatarEarrings').innerHTML = '';
  document.getElementById('avatarNecklace').innerHTML = '';
  document.getElementById('avatarBracelets').innerHTML = '';
  document.getElementById('avatarRings').innerHTML = '';
  
  // Atualizar com acessórios selecionados
  Object.keys(selectedAccessories).forEach(categoria => {
    const acessorio = selectedAccessories[categoria];
    if (acessorio) {
      const avatarElement = getAvatarElement(categoria);
      if (avatarElement) {
        avatarElement.innerHTML = acessorio.emoji;
      }
    }
  });
}

function getAvatarElement(categoria) {
  const mapping = {
    'brincos': document.getElementById('avatarEarrings'),
    'colares': document.getElementById('avatarNecklace'),
    'pulseiras': document.getElementById('avatarBracelets'),
    'aneis': document.getElementById('avatarRings')
  };
  return mapping[categoria];
}

function clearAllAccessories() {
  selectedAccessories = {
    brincos: null,
    colares: null,
    pulseiras: null,
    aneis: null
  };
  
  // Remover seleção visual
  document.querySelectorAll('.accessory-item').forEach(item => {
    item.classList.remove('selected');
  });
  
  updateAvatarDisplay();
}

function saveLook() {
  const hasSelection = Object.values(selectedAccessories).some(acc => acc !== null);
  
  if (!hasSelection) {
    alert('Selecione pelo menos um acessório para salvar a combinação!');
    return;
  }
  
  // Simular salvamento
  console.log('Combinação salva:', selectedAccessories);
  
  // Mostrar modal de confirmação
  document.getElementById('saveModal').classList.add('active');
}

function suggestLook() {
  // Limpar seleção atual
  clearAllAccessories();
  
  // Sugerir combinação baseada no filtro atual
  const availableAccessories = getFilteredAccessories();
  
  Object.keys(availableAccessories).forEach(categoria => {
    const items = availableAccessories[categoria];
    if (items.length > 0) {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      selectAccessory(categoria, randomItem);
    }
  });
}

function getFilteredAccessories() {
  const filtered = {};
  
  Object.keys(courseData.acessorios).forEach(categoria => {
    filtered[categoria] = courseData.acessorios[categoria].filter(acessorio => {
      return currentFilter === 'todos' || acessorio.ocasiao.includes(currentFilter);
    });
  });
  
  return filtered;
}

// Funções dos modais
function openModuleModal(modulo) {
  const modal = document.getElementById('moduleModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  
  title.textContent = `${modulo.titulo} - Módulo ${modulo.id}`;
  
  body.innerHTML = `
    <div style="margin-bottom: 20px;">
      <h4 style="color: #E91E63; margin-bottom: 10px;">Sobre este módulo:</h4>
      <p style="line-height: 1.6; margin-bottom: 15px;">${modulo.descricao}</p>
      
      <div style="display: flex; gap: 20px; margin-bottom: 20px;">
        <span style="display: flex; align-items: center; gap: 5px;">
          📚 <strong>${modulo.aulas} aulas</strong>
        </span>
        <span style="display: flex; align-items: center; gap: 5px;">
          ⏱️ <strong>${modulo.duracao}</strong>
        </span>
      </div>
    </div>
    
    <div style="margin-bottom: 20px;">
      <h4 style="color: #E91E63; margin-bottom: 10px;">O que você vai aprender:</h4>
      <ul style="line-height: 1.6; padding-left: 20px;">
        ${getModuleContent(modulo.id)}
      </ul>
    </div>
    
    <div style="text-align: center; margin-top: 30px;">
      <button class="btn btn--primary" onclick="startModule(${modulo.id})">
        Iniciar Módulo
      </button>
    </div>
  `;
  
  modal.classList.add('active');
}

function getModuleContent(moduleId) {
  const contents = {
    1: `
      <li>A importância dos acessórios na composição do visual</li>
      <li>História e evolução dos acessórios femininos</li>
      <li>Como os acessórios podem transformar um look</li>
    `,
    2: `
      <li>Identificação dos principais estilos: clássico, romântico, casual, moderno</li>
      <li>Teste prático para descobrir seu estilo pessoal</li>
      <li>Como adaptar acessórios ao seu estilo</li>
      <li>Criação do seu guia pessoal de estilo</li>
    `,
    3: `
      <li>Tipos de brincos e como escolher para cada formato de rosto</li>
      <li>Colares: comprimentos e estilos para cada ocasião</li>
      <li>Pulseiras e relógios: como combinar sem erro</li>
      <li>Anéis: regras de uso e combinações</li>
      <li>Acessórios para cabelo e como usar</li>
    `
  };
  
  return contents[moduleId] || '<li>Conteúdo em desenvolvimento...</li>';
}

function startModule(moduleId) {
  closeModal();
  alert(`Iniciando Módulo ${moduleId}! Em uma aplicação real, isso redirecionaria para o conteúdo do módulo.`);
  
  // Simular progresso
  updateCourseProgress();
}

function updateCourseProgress() {
  const progressBar = document.getElementById('courseProgress');
  const availableModules = courseData.modulos.filter(m => m.status === 'disponível').length;
  const totalModules = courseData.modulos.length;
  const progress = (availableModules / totalModules) * 100;
  
  progressBar.style.width = `${progress}%`;
}

function closeModal() {
  document.getElementById('moduleModal').classList.remove('active');
}

function closeSaveModal() {
  document.getElementById('saveModal').classList.remove('active');
}

// Adicionar estilos CSS dinâmicos para melhorar a experiência
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
  .accessory-item.selected {
    border-color: #E91E63;
    background: linear-gradient(135deg, #F8BBD9 0%, #FFF8DC 100%);
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(233, 30, 99, 0.3);
  }
  
  .avatar__earrings span,
  .avatar__necklace span,
  .avatar__bracelets span,
  .avatar__rings span {
    font-size: 1.2rem;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
  }
  
  .module-card:hover {
    cursor: pointer;
  }
  
  .module-card--coming-soon:hover {
    cursor: not-allowed;
    transform: none;
  }
  
  .product-card:hover .product-card__image {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
  
  @keyframes accessorySelect {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1.05); }
  }
  
  .accessory-item.selected {
    animation: accessorySelect 0.3s ease;
  }
  
  .avatar__accessories > div {
    transition: all 0.3s ease;
  }
`;

document.head.appendChild(additionalStyles);

// Inicializar progresso do curso
updateCourseProgress();