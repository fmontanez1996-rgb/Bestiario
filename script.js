const buttons = document.querySelectorAll('.menu-btn');
const panels = document.querySelectorAll('.panel');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;

    buttons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.id === targetId);
    });
  });
});

const CLANES_POR_TIPO = {
  Brujas: ['Luna Carmesí', 'Hijas del Caldero', 'Las Espinas Negras', 'Coven Eclipse'],
  Vampiros: ['Sangre Antigua', 'Noctis', 'Dracul Vesper', 'Hijos del Último Colmillo'],
  Fantasmas: ['Ecos Vacíos', 'Los Errantes', 'Susurro Gris', 'Cadena Eterna'],
  Demonios: ['Fuego Abisal', 'Devoralmas', 'Cuernos Rojos', 'Trono Infernal'],
  'Ángeles': ['Corona Celeste', 'Alas del Alba', 'Virtud Suprema', 'Los Vigilantes'],
  'Licántropos': ['Colmillo Lunar', 'Manada Gris', 'Sangre Salvaje', 'Hijos del Bosque Negro'],
  Nigromantes: ['Mano Sepulcral', 'Reyes del Osario', 'Culto del Fin', 'Los Resucitados'],
  Dragones: ['Escama Dorada', 'Furia Volcánica', 'Alas Eternas', 'Trono Dracónido'],
  Sirenas: ['Marea Azul', 'Canto Mortal', 'Hijas del Coral Negro', 'Las Ahogadoras'],
  Cazadores: ['Orden Plateada', 'Los Exiliados', 'Cruz de Hierro', 'Ojo del Cuervo'],
  Hadas: ['Polvo Lunar', 'Jardín Viviente', 'Corte Esmeralda', 'Alas de Cristal'],
  Titanes: ['Rompemontes', 'Hijos del Trueno', 'Colosos del Norte', 'Sangre de Piedra'],
  'Espíritus': ['Llama Serena', 'Los Transparentes', 'Viento Antiguo', 'Ceniza Blanca'],
  'Elfos Oscuros': ['Sombras de Ébano', 'Corte Nocturna', 'Dagas Violetas', 'Veneno Silente'],
  Paladines: ['Sol Inmortal', 'Martillo Sagrado', 'Juramento Real', 'Guardia del Alba'],
  Asesinos: ['Diente Negro', 'La Última Sombra', 'Silencio Carmesí', 'Manos Invisibles'],
  Magos: ['Torre Arcana', 'Ojo Astral', 'Biblioteca Prohibida', 'Hijos del Vacío'],
  Elementales: ['Clan Ígneo', 'Hijos del Tifón', 'Corazón Glacial', 'Raíz Primordial'],
  'Gárgolas': ['Piedra Viva', 'Vigías Eternos', 'Alas de Mármol', 'Guardianes de Catedral'],
  Reapers: ['La Guadaña', 'Fin Absoluto', 'Custodios del Umbral', 'Hueso Negro'],
  Orcos: ['Mandíbula Roja', 'Hacha Salvaje', 'Cráneo Partido', 'Guerreros del Pantano'],
  Goblins: ['Dedos Largos', 'Ratas Verdes', 'Dinamita Negra', 'Los Chatarreros'],
  Alquimistas: ['Oro Filosofal', 'Frascos Prohibidos', 'Vapor Esmeralda', 'Elixir Supremo'],
  'Caballeros Malditos': ['Armadura Vacía', 'Cruz Sangrienta', 'Los Caídos', 'Hierro Profano'],
  'Bestias Mutantes': ['Carne Tóxica', 'Colmillos Rotos', 'Laboratorio X', 'Hijos del Error'],
  Monjes: ['Puño Celestial', 'Camino Silente', 'Lotus Negro', 'Respiración Divina'],
  Piratas: ['Marea Roja', 'Kraken Negro', 'La Calavera Azul', 'Tempestad Salvaje'],
  Androides: ['Código Omega', 'Titanio Vivo', 'Unidad Eclipse', 'Protocolos Negros'],
  Cyborgs: ['Carne Mecánica', 'Acero Neural', 'División Hex', 'Núcleo Fantasma'],
  Mutantes: ['ADN Caos', 'Hijos Gamma', 'Sangre Rota', 'Evolución X'],
  'Samuráis': ['Flor Carmesí', 'Acero Blanco', 'Dragón del Este', 'Luna Cortante'],
  Ninjas: ['Niebla Negra', 'Serpiente Silente', 'Clan Kage', 'Ojos Rojos'],
  'Dioses Antiguos': ['Panteón Perdido', 'Los Primordiales', 'Trono Estelar', 'Ojo Cósmico'],
  Marionetistas: ['Hilos Malditos', 'Teatro Sangriento', 'Sonrisa de Madera', 'Dedos Eternos'],
  'Payasos Oscuros': ['Circo Infernal', 'Carcajada Muerta', 'Máscara Rota', 'Fiesta Macabra'],
  'Espantapájaros': ['Campo Muerto', 'Paja Maldita', 'Ojos de Cuervo', 'Harvest Doom'],
  'Científicos Locos': ['Laboratorio Omega', 'Cerebros Rotos', 'Proyecto Caos', 'Neo Frankenstein'],
  'Ángeles Caídos': ['Alas Negras', 'Exilio Divino', 'Pecado Celestial', 'Trono Quebrado'],
  'Parásitos': ['Hambre Eterna', 'Carne Ajena', 'Enjambre Negro', 'Los Infectados'],
  'Brujos del Tiempo': ['Arena Infinita', 'Reloj Carmesí', 'Hijos del Segundo Final', 'Eclipse Temporal'],
  Gladiadores: ['Arena Roja', 'Coloso Imperial', 'Bestias del Coliseo', 'Cadena de Oro'],
  Djinns: ['Lámpara Negra', 'Deseo Maldito', 'Arena Azul', 'Fuego del Desierto'],
  'Robots Bélicos': ['Unidad Ragnarok', 'Hierro Brutal', 'Omega Titan', 'Guerra Nuclear'],
  Revenants: ['Los Regresados', 'Tumba Vacía', 'Sangre del Más Allá', 'Venganza Eterna'],
  Druidas: ['Bosque Viviente', 'Colmillo Verde', 'Raíz Antigua', 'Hijos del Roble'],
  Inquisidores: ['Cruz Blanca', 'Fuego Purificador', 'Veredicto Final', 'Los Penitentes'],
  Arlequines: ['Sonrisa Escarlata', 'Cartas del Caos', 'Danza Torcida', 'Teatro Lunar'],
  Serafines: ['Séptima Luz', 'Corona Dorada', 'Alas Eternas', 'Juicio Celestial'],
  Quimeras: ['Carne Fusionada', 'Bestia Alfa', 'Proyecto Génesis', 'Mil Fauces'],
  'Hijos del Vacío': ['Eclipse Negro', 'La Nada Viva', 'Estrellas Muertas', 'Fin del Cosmos'],
};

const toggleFormBtn = document.getElementById('toggle-character-form');
const characterCreator = document.getElementById('character-creator');
const characterForm = document.getElementById('character-form');
const tipoSelector = document.getElementById('tipo-selector');
const clanSelector = document.getElementById('clan-selector');

const previewName = document.getElementById('preview-name');
const previewImage = document.getElementById('preview-image');
const previewFuerza = document.getElementById('preview-fuerza');
const previewMagia = document.getElementById('preview-magia');
const previewInteligencia = document.getElementById('preview-inteligencia');
const previewVelocidad = document.getElementById('preview-velocidad');
const previewTipo = document.getElementById('preview-tipo');
const previewClan = document.getElementById('preview-clan');

const defaultImage = previewImage.src;

const clampScore = (value) => {
  const parsed = Number.parseInt(value, 10);

  if (Number.isNaN(parsed)) {
    return 1;
  }

  return Math.min(100, Math.max(1, parsed));
};

const setClanOptions = (tipoSeleccionado) => {
  clanSelector.innerHTML = '';

  if (!tipoSeleccionado || !CLANES_POR_TIPO[tipoSeleccionado]) {
    clanSelector.disabled = true;
    const defaultOption = new Option('Selecciona primero un tipo', '');
    clanSelector.add(defaultOption);
    return;
  }

  clanSelector.disabled = false;
  clanSelector.add(new Option('Selecciona un clan', ''));

  CLANES_POR_TIPO[tipoSeleccionado].forEach((clan) => {
    clanSelector.add(new Option(clan, clan));
  });
};

const setupSelectors = () => {
  Object.keys(CLANES_POR_TIPO).forEach((tipo) => {
    tipoSelector.add(new Option(tipo, tipo));
  });

  setClanOptions('');
};

const updatePreview = () => {
  const formData = new FormData(characterForm);

  previewName.textContent = formData.get('nombre')?.toString().trim() || 'Nombre del personaje';
  previewTipo.textContent = formData.get('tipo')?.toString().trim() || '-';
  previewClan.textContent = formData.get('clan')?.toString().trim() || '-';

  previewMagia.textContent = clampScore(formData.get('magia'));
  previewInteligencia.textContent = clampScore(formData.get('inteligencia'));
  previewVelocidad.textContent = clampScore(formData.get('velocidad'));
  previewFuerza.textContent = clampScore(formData.get('fuerza'));

  const imageFile = characterForm.imagenArchivo.files[0];
  const imageUrl = formData.get('imagenUrl')?.toString().trim();

  if (imageFile) {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      previewImage.src = fileReader.result;
    };
    fileReader.readAsDataURL(imageFile);
    return;
  }

  previewImage.src = imageUrl || defaultImage;
};

if (toggleFormBtn && characterCreator && characterForm) {
  setupSelectors();

  toggleFormBtn.addEventListener('click', () => {
    const isHidden = characterCreator.hasAttribute('hidden');

    if (isHidden) {
      characterCreator.removeAttribute('hidden');
      toggleFormBtn.textContent = 'Ocultar formulario';
      updatePreview();
      return;
    }

    characterCreator.setAttribute('hidden', '');
    toggleFormBtn.textContent = 'Agregar personaje';
  });

  tipoSelector.addEventListener('change', () => {
    setClanOptions(tipoSelector.value);
    updatePreview();
  });

  characterForm.addEventListener('input', updatePreview);
  characterForm.addEventListener('change', updatePreview);
}
