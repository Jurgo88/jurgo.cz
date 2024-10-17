const portfolioData = {
    pravnik: {
      url: './pravnik.html',
      title: 'Advokátska kancelária',
      link: 'https://www.aktrokan.sk'
    },
    epassport: {
      url: './epassport.html',
      title: 'ePassport'
    },
    martinavalach: {
      url: '/martinavalach.html',
      title: 'Martin a Valach'
    },
    roxy: {
      url: 'public/roxy.html',
      title: 'Roxy Catering',
      link: 'https://www.roxycatering.sk'
    },
    shopmaster: {
      url: 'public/shopmaster.html',
      title: 'Shopmaster 3000'
    },
    sigmatech: {
      url: '/sigmatech.html',
      title: 'Sigma Tech',
      link: 'https://www.sigmatech.site'
    }
  };
  

  window.loadModalContent = function(content) {
    console.log('portfolio.js is working');
    console.log('Loading content:', content);
    const modalBody = document.getElementById('exampleModal').querySelector('.modal-body');
    const modalTitle = document.getElementById('exampleModal').querySelector('.modal-title');
    const data = portfolioData[content];
  
    if (!data) {
      modalTitle.textContent = 'Unknown';
      modalBody.innerHTML = 'Content not available.';
      return;
    }
  
    fetch(data.url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(dataContent => {
        modalBody.innerHTML = dataContent;
        modalTitle.textContent = data.title;
        if (data.link) {
          modalTitle.innerHTML += ` <a href="${data.link}" target="_blank" class=""> ${new URL(data.link).hostname}</a>`;
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
        modalBody.innerHTML = 'Ups, niečo sa pokazilo a možnože aj dojebalo. Skúste to nabudúce.';
      });
  }
  