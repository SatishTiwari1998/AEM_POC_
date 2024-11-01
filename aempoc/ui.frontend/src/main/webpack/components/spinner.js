
export function showSpinner() {
    // Create overlay and spinner elements if they don’t exist
    if (!document.querySelector('#spinner-overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'spinner-overlay';
        overlay.style = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        `;

        const spinner = document.createElement('div');
        spinner.classList.add('spinner');
        spinner.style = `
            width: 50px;
            height: 50px;
            border: 8px solid rgba(255, 165, 0, 0.3);
            border-top: 8px solid orange;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        `;

        overlay.appendChild(spinner);
        document.body.appendChild(overlay);
    }
}

export function hideSpinner() {
    const overlay = document.querySelector('#spinner-overlay');
    if (overlay) {
        overlay.remove();
    }
}

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(styleSheet);
