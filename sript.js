function submitTraffic() {
    const trafficData = document.getElementById('trafficData').value;

    // Odeslání dat na GitHub Gist pomocí GitHub API
    const gistId = 'ff16dc32f639f3dc3c20d26f66c412ea';
    const apiUrl = `https://api.github.com/gists/${gistId}`;

    fetch(apiUrl, {
        method: 'PATCH', // Aktualizace stávajícího Gistu
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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' // Nahraďte svým přístupovým tokenem
        },
        body: JSON.stringify({
            files: {
                'traffic.txt': {
                    content: trafficData
                }
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data byla úspěšně odeslána:', data);
        alert('Dopravní záznam byl úspěšně uložen.');
        displayTrafficRecords();
    })
    .catch(error => {
        console.error('Chyba při odesílání dat:', error);
        alert('Došlo k chybě při ukládání dopravního záznamu.');
    });
}

function displayTrafficRecords() {
    // Získání obsahu souboru 'traffic.txt' z Gistu
    const gistId = 'ff16dc32f639f3dc3c20d26f66c412ea';
    const rawUrl = `https://gist.githubusercontent.com/raw/${gistId}/traffic.txt`;

    fetch(rawUrl)
    .then(response => response.text())
    .then(trafficData => {
        // Zobrazení dopravních záznamů pod formulářem
        const recordsContainer = document.getElementById('trafficRecords');
        recordsContainer.innerHTML = `<h2>Dopravní Záznamy</h2><p>${trafficData}</p>`;
    })
    .catch(error => {
        console.error('Chyba při získávání dopravních záznamů:', error);
    });
}
