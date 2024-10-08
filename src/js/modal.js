// import htmlContent from '/portfolio.html';

function setupteModal(title, content) {
    // Create modal elements
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalHeader = document.createElement('div');
    const modalTitle = document.createElement('h2');
    const modalBody = document.createElement('div');
    const closeButton = document.createElement('span');

    // Set classes for styling
    modal.className = 'modal';
    modalContent.className = 'modal-content';
    modalHeader.className = 'modal-header';
    modalBody.className = 'modal-body';
    closeButton.className = 'close-button';

    // Set content
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    closeButton.innerHTML = '&times;';

    // Append elements
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Close modal on close button click
    closeButton.onclick = function() {
        modal.style.display = 'none';
    };

    // Close modal on outside click
    window.onclick = function(event) {
        console.log("click otuside");
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Show the modal
    modal.style.display = 'block';

    }
    

export function createModal() {
    console.log("modal.js is working");
    var htmlContent = '<p>This is the modal content.</p>';
    document.getElementById("modalButton").addEventListener("click", function() {
        setupteModal(this.name, htmlContent);
      });
}

document.addEventListener('DOMContentLoaded', createModal);

// Example usage
// createModal('Modal Title', '<p>This is the modal content.</p>');