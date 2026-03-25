fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    const output = document.getElementById('output');

    output.innerHTML = data
      .map(item => {
        return `
          <div style="margin-bottom: 20px;">
            <h2>${item.title}</h2>
            <p>${item.body}</p>
          </div>
        `;
      })
      .join('');
  });

