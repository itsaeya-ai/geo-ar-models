const TARGET_COORDS = {
    lat: 51.135758,
    lng: 71.431123
};

const MODELS_LIST = [
    {
        path: './assets/magnemite/scene.gltf',
        scale: '0.5 0.5 0.5',
        rotation: '0 180 0',
        label: 'Magnemite'
    },
    {
        path: './assets/articuno/scene.gltf',
        scale: '0.2 0.2 0.2',
        rotation: '0 180 0',
        label: 'Articuno'
    },
    {
        path: './assets/dragonite/scene.gltf',
        scale: '0.08 0.08 0.08',
        rotation: '0 180 0',
        label: 'Dragonite'
    }
];

let currentIdx = 0;

function applyModelConfig(entity, config) {
    entity.setAttribute('gltf-model', config.path);
    entity.setAttribute('scale', config.scale);
    entity.setAttribute('rotation', config.rotation);

    const badge = document.getElementById('status-badge');
    if (badge) {
        badge.textContent = config.label;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('a-scene');
    const switchBtn = document.getElementById('switch-btn');

    const arEntity = document.createElement('a-entity');
    arEntity.setAttribute('gps-entity-place', `latitude: ${TARGET_COORDS.lat}; longitude: ${TARGET_COORDS.lng};`);
    arEntity.setAttribute('animation-mixer', '');

    applyModelConfig(arEntity, MODELS_LIST[currentIdx]);
    scene.appendChild(arEntity);

    switchBtn.addEventListener('click', () => {
        currentIdx = (currentIdx + 1) % MODELS_LIST.length;
        applyModelConfig(arEntity, MODELS_LIST[currentIdx]);
    });
});