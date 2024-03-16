// Función para cargar la información de la agenda desde un archivo JSON
function loadAgenda() {
    fetch('agenda.json')
        .then(response => response.json())
        .then(data => {
            const agendaSection = document.getElementById('agenda');
            data.forEach(item => {
                // Crear una tarjeta para cada charla
                const agendaCard = document.createElement('div');
                agendaCard.classList.add('agenda-card');

                // Agregar el título de la charla
                const agendaTitle = document.createElement('div');
                agendaTitle.classList.add('agenda-title');
                agendaTitle.textContent = item.title;
                agendaCard.appendChild(agendaTitle);

                // Agregar el nombre del ponente
                const agendaPresenter = document.createElement('div');
                agendaPresenter.classList.add('agenda-presenter');
                agendaPresenter.textContent = item.presenter;
                agendaCard.appendChild(agendaPresenter);

                // Agregar el resumen de la charla
                const agendaSummary = document.createElement('div');
                agendaSummary.classList.add('agenda-summary');
                agendaSummary.textContent = item.summary;
                agendaCard.appendChild(agendaSummary);

                // Agregar la hora de la charla
                const agendaTime = document.createElement('div');
                agendaTime.classList.add('agenda-time');
                agendaTime.textContent = item.time;
                agendaCard.appendChild(agendaTime);

                // Agregar la sala donde se realizará la charla
                const agendaLocation = document.createElement('div');
                agendaLocation.classList.add('agenda-location');
                agendaLocation.textContent = `Sala ${item.location}`;
                agendaCard.appendChild(agendaLocation);

                // Agregar la tarjeta de la agenda al contenedor
                agendaSection.appendChild(agendaCard);
            });
        })
        .catch(error => console.error('Error al cargar la agenda:', error));
}

// Cargar la agenda al cargar la página
window.addEventListener('load', loadAgenda);

// Función para cargar la información de los ponentes desde un archivo JSON
function loadSpeakers() {
    fetch('speakers.json')
        .then(response => response.json())
        .then(data => {
            const speakersSection = document.getElementById('speakers');
            data.forEach(speaker => {
                // Crear una tarjeta para cada ponente
                const speakerCard = document.createElement('div');
                speakerCard.classList.add('speaker-card');

                // Agregar la imagen del ponente
                const speakerImage = document.createElement('img');
                speakerImage.classList.add('speaker-image');
                speakerImage.src = speaker.image;
                speakerImage.alt = speaker.name;
                speakerCard.appendChild(speakerImage);

                // Agregar el nombre del ponente
                const speakerName = document.createElement('div');
                speakerName.classList.add('speaker-name');
                speakerName.textContent = speaker.name;
                speakerCard.appendChild(speakerName);

                // Agregar el título del ponente
                const speakerTitle = document.createElement('div');
                speakerTitle.classList.add('speaker-title');
                speakerTitle.textContent = speaker.title;
                speakerCard.appendChild(speakerTitle);

                // Agregar la experiencia del ponente
                const speakerExperience = document.createElement('div');
                speakerExperience.classList.add('speaker-experience');
                speakerExperience.textContent = speaker.experience;
                speakerCard.appendChild(speakerExperience);

                // Agregar los enlaces a las redes sociales del ponente
                const speakerSocial = document.createElement('div');
                speakerSocial.classList.add('speaker-social');
                speaker.social.forEach(socialLink => {
                    const socialIcon = document.createElement('a');
                    socialIcon.href = socialLink.url;
                    socialIcon.target = '_blank';
                    socialIcon.innerHTML = `<i class="${socialLink.icon}"></i>`;
                    speakerSocial.appendChild(socialIcon);
                });
                speakerCard.appendChild(speakerSocial);

                // Agregar la tarjeta del ponente al contenedor
                speakersSection.appendChild(speakerCard);
            });
        })
        .catch(error => console.error('Error al cargar los ponentes:', error));
}

// Cargar los ponentes al cargar la página
window.addEventListener('load', loadSpeakers);

