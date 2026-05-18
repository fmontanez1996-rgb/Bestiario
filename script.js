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

const toggleFormBtn = document.getElementById('toggle-character-form');
const characterCreator = document.getElementById('character-creator');
const characterForm = document.getElementById('character-form');

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

  characterForm.addEventListener('input', updatePreview);
  characterForm.addEventListener('change', updatePreview);
}
