const users = [
    { id: 1, name: 'James' },
    { id: 2, name: 'Kan' },
    { id: 3, name: 'Mean' },
    { id: 4, name: 'Lak' },
    { id: 5, name: 'Folk' },
    { id: 6, name: 'Wee' },
  ];
  
  const itemsPerPage = 2;
  let currentPage = 1;
  
  function renderUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    const paginatedUsers = users.slice(startIndex, endIndex);
  
    paginatedUsers.forEach(user => {
      const userElement = document.createElement('div');
      userElement.classList.add('user');
      userElement.textContent = user.name;
      userList.appendChild(userElement);
    });
  }
  
  function renderPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
  
    const totalPages = Math.ceil(users.length / itemsPerPage);
  
    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement('a');
      pageLink.href = '#';
      pageLink.textContent = i;
  
      if (i === currentPage) {
        pageLink.classList.add('active');
      }
  
      pageLink.addEventListener('click', () => {
        currentPage = i;
        renderUsers();
        renderPagination();
      });
  
      pagination.appendChild(pageLink);
    }
  }
  
  renderUsers();
  renderPagination();
  