document.addEventListener('DOMContentLoaded', () => {
    // Implementación futura para funcionalidades interactivas
    // como el creador de criaturas o el perfil de usuario.

    const generateButton = document.querySelector('#creador .cta-button');
    generateButton.addEventListener('click', () => {
        const promptText = document.getElementById('ai-prompt').value;
        const resultDiv = document.querySelector('.ai-result');

        if (promptText.trim() === '') {
            resultDiv.innerHTML = '<p style="color:red;">Por favor, describe tu criatura.</p>';
            return;
        }

        resultDiv.innerHTML = `<p><strong>Creando tu criatura...</strong></p>`;

        // Esta es una simulación. En un proyecto real, aquí iría la llamada a la API de IA.
        setTimeout(() => {
            resultDiv.innerHTML = `
                <h3>Tu creación: El ${promptText.split(' ')[0]} Fantástico</h3>
                <img src="https://via.placeholder.com/300x200.png?text=Tu+Criatura" alt="Criatura generada">
                <p>Una criatura única ha sido forjada por tu imaginación. ¡Ahora es parte del Zoológico Invisible!</p>
            `;
        }, 2000);
    });

    // Función para adoptar una criatura
    const adoptButtons = document.querySelectorAll('.adopt-button');
    const adoptedCreaturesContainer = document.getElementById('adopted-creatures-container');

    adoptButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const creatureCard = event.target.closest('.creature-card') || document.querySelector('.featured-creature');
            const creatureId = creatureCard.dataset.creatureId;
            const creatureName = creatureCard.querySelector('h3, h2').textContent;

            // Verificar si la criatura ya ha sido adoptada
            if (document.getElementById(`adopted-${creatureId}`)) {
                alert(`¡Ya tienes a ${creatureName} en tu criadero!`);
                return;
            }

            const adoptedCreatureHTML = `
                <div class="creature-card adopted-creature" id="adopted-${creatureId}">
                    <img src="${creatureCard.querySelector('img') ? creatureCard.querySelector('img').src : 'https://via.placeholder.com/300x200.png?text=Silfo+Luminiscente'}" alt="${creatureName}">
                    <h3>${creatureName}</h3>
                    <p>¡Felicidades, has adoptado a esta increíble criatura!</p>
                </div>
            `;
            
            // Eliminar el mensaje de "no-creatures" si existe
            const noCreaturesMessage = adoptedCreaturesContainer.querySelector('.no-creatures');
            if (noCreaturesMessage) {
                noCreaturesMessage.remove();
            }

            adoptedCreaturesContainer.insertAdjacentHTML('beforeend', adoptedCreatureHTML);
            alert(`¡Felicidades! Has adoptado a ${creatureName}. Revisa "Tu criadero" para verlo.`);
        });
    });
});