// Common utilities shared between maintenance log and tire tread depth reports

// Map URL parameters to their corresponding element IDs for easy setup
const fieldMap = {
    'year': 'vehicleYear',
    'make': 'vehicleMake',
    'model': 'vehicleModel',
    'vin': 'vehicleVIN'
};

// Initialize form with vehicle information from URL parameters
function initializeForm() {
    const urlParams = new URLSearchParams(window.location.search);
    
    for (const param in fieldMap) {
        const value = urlParams.get(param);
        const elementId = fieldMap[param];
        const element = document.getElementById(elementId);

        if (value && element) {
            element.value = decodeURIComponent(value);
            element.setAttribute('readonly', true);
        }
    }
}

// Format numbers with thousand separators (commas)
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
