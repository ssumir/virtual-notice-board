const adminTab = document.getElementById('admin-tab');
const userTab = document.getElementById('user-tab');
const adminContent = document.getElementById('admin-content');
const userContent = document.getElementById('user-content');

adminTab.addEventListener('click', () => {
    adminTab.classList.add('active');
    userTab.classList.remove('active');
    adminContent.classList.add('active');
    userContent.classList.remove('active');
});

userTab.addEventListener('click', () => {
    userTab.classList.add('active');
    adminTab.classList.remove('active');
    userContent.classList.add('active');
    adminContent.classList.remove('active');
});

document.getElementById('add-notice').addEventListener('click', function() {
    const title = document.getElementById('notice-title').value;
    const description = document.getElementById('notice-description').value;
    const date = new Date().toLocaleDateString();

    if (title.trim() === '' || description.trim() === '') {
        alert('Please fill in both fields.');
        return;
    }

    const noticeList = document.getElementById('notice-list');

    const notice = document.createElement('div');
    notice.className = 'notice';

    const noticeDate = document.createElement('div');
    noticeDate.className = 'notice-date';
    noticeDate.textContent = `Date: ${date}`;

    const noticeTitle = document.createElement('h2');
    noticeTitle.textContent = title;

    const noticeDescription = document.createElement('p');
    noticeDescription.textContent = description;

    notice.appendChild(noticeDate);
    notice.appendChild(noticeTitle);
    notice.appendChild(noticeDescription);

    noticeList.prepend(notice);

    document.getElementById('notice-title').value = '';
    document.getElementById('notice-description').value = '';
});
