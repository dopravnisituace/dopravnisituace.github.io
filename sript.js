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
    })
    .catch(error => {
        console.error('Chyba při odesílání dat:', error);
        alert('Došlo k chybě při ukládání dopravního záznamu.');
    });
}
