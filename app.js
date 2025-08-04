
function scanNetworks() {
    const results = document.getElementById("results");
    results.innerHTML = "<p>🔍 Escaneando redes WiFi cercanas... (modo demo)</p>";
    setTimeout(() => {
        results.innerHTML += `
            <ul>
                <li><strong>Red:</strong> INFINITUM1234 | <strong>Cifrado:</strong> WPA2 | <strong>WPS:</strong> Activo ❗</li>
                <li><strong>Red:</strong> HUAWEI-5678 | <strong>Cifrado:</strong> WPA3 | <strong>WPS:</strong> Desactivado ✅</li>
                <li><strong>Red:</strong> TP-LINK-ABCD | <strong>Cifrado:</strong> WEP | <strong>WPS:</strong> Activo 🚨</li>
            </ul>
        `;
    }, 1500);
}
