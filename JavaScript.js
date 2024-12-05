const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');

        eventForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const eventName = document.getElementById('eventName').value;
            const eventDate = document.getElementById('eventDate').value;
            const eventDescription = document.getElementById('eventDescription').value;
            const eventFile = document.getElementById('eventFile').files[0];

            // Create event element
            const eventElement = document.createElement('div');
            eventElement.classList.add('event');

            // Event details
            eventElement.innerHTML = `
                <h3>${eventName}</h3>
                <p><strong>Date:</strong> ${eventDate}</p>
                <p>${eventDescription}</p>
            `;

            // Add file link if a file is uploaded
            if (eventFile) {
                const fileLink = document.createElement('a');
                fileLink.href = URL.createObjectURL(eventFile);
                fileLink.textContent = 'Download Attached File';
                fileLink.download = eventFile.name;
                fileLink.style.display = 'block';
                fileLink.style.marginTop = '10px';
                eventElement.appendChild(fileLink);
            }

            // Append to event list
            eventList.appendChild(eventElement);

            // Clear the form
            eventForm.reset();
        });